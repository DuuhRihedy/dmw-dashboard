const fs = require('fs');

async function fetchWikiHtml(url) {
  const res = await fetch(url);
  return await res.text();
}

function parseQty(text) {
  // e.g. "Item &#215; 20" or "Item x 20"
  const match = text.match(/(?:&#215;|x|X|\u00D7)\s*(\d+)/);
  if (match) return parseInt(match[1], 10);
  return 1;
}

function parseNameAndQty(text) {
  const qty = parseQty(text);
  const name = text.replace(/(?:&#215;|x|X|\u00D7)\s*\d+/, '').trim();
  return { name, qty };
}

function parseFee(rawCost) {
  let feeTeras = 0;
  let costText = rawCost.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  let tMatch = costText.match(/(\d+)\s*Currency Tera/i) || costText.match(/(\d+)\s*T/i) || costText.match(/(\d+)\s*<a[^>]*Currency Tera/i) || costText.match(/(\d+)\s*Tera/i);
  if (tMatch) feeTeras = parseInt(tMatch[1], 10);
  else {
     let mMatch = costText.match(/(\d+)\s*Currency Mega/i) || costText.match(/(\d+)\s*Mega/i) || costText.match(/(\d+)/); // last fallback for raw digits
     if (mMatch && costText.toLowerCase().includes('mega')) feeTeras = parseInt(mMatch[1], 10) / 1000;
  }
  
  // Custom case: "2 Currency Tera 500 Currency Mega"
  if (tMatch && costText.match(/(\d+)\s*Currency Mega/i)) {
     const m = costText.match(/(\d+)\s*Currency Mega/i);
     feeTeras += parseInt(m[1], 10) / 1000;
  }
  
  return feeTeras;
}

function getCells(rowHtml) {
  const cellRegex = /<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/g;
  const cells = [];
  let cellMatch;
  while ((cellMatch = cellRegex.exec(rowHtml)) !== null) {
    cells.push(cellMatch[1].replace(/&#039;/g, "'").trim());
  }
  return cells;
}

function stripTags(html) {
  return html.replace(/<[^>]+>/g, '').trim();
}

async function scrapeMary() {
  const html = await fetchWikiHtml('https://digitalmastersworld.wiki.gg/wiki/Mary_(Arena_Voucher)');
  const recipes = [];
  const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/g;
  let rowMatch;
  while ((rowMatch = rowRegex.exec(html)) !== null) {
    const cells = getCells(rowMatch[1]);
    if (cells.length === 3 && stripTags(cells[1]) !== 'Production Item' && cells[1] && cells[2]) {
      const prod = parseNameAndQty(stripTags(cells[1]));
      // Clean up text like "[Weekly] Arena Voucher [Weekly] Arena Voucher x 1" which appears due to image alt text
      let compText = stripTags(cells[2]);
      // Remove duplication
      const firstHalf = compText.slice(0, Math.floor(compText.length / 2)).trim();
      if (compText.startsWith(firstHalf) && compText.includes(firstHalf, firstHalf.length)) {
          compText = compText.replace(firstHalf, '').trim();
      }
      // sometimes it's "[Weekly] Arena Voucher[Weekly] Arena Voucher x 1"
      compText = compText.replace(/\[(Weekly|Monthly|Seasonal)\] Arena Voucher(\s*)\[\1\] Arena Voucher/i, '[$1] Arena Voucher');
      
      const comp = parseNameAndQty(compText);
      
      recipes.push({
        name: prod.qty > 1 ? `${prod.name} (x${prod.qty})` : prod.name,
        category: 'Mary (Arena)',
        feeTeras: 0,
        components: [
          { name: comp.name, qty: comp.qty }
        ]
      });
    }
  }
  return recipes;
}

async function scrapePawnChessmon() {
  const html = await fetchWikiHtml('https://digitalmastersworld.wiki.gg/wiki/PawnChessmon_W_(X-Antibody_Factor_Exchange)');
  const recipes = [];
  const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/g;
  let rowMatch;
  while ((rowMatch = rowRegex.exec(html)) !== null) {
    const cells = getCells(rowMatch[1]);
    if (cells.length === 4 && stripTags(cells[0]) !== 'X-Antibody Factor' && stripTags(cells[0])) {
      const name = stripTags(cells[0]);
      let compQty = parseQty(stripTags(cells[1]));
      let fee = parseFee(cells[2]);
      
      recipes.push({
        name: name,
        category: 'PawnChessmon W (D-Terminal)',
        feeTeras: fee,
        components: [
          { name: 'X-Antibody Factor Exchange Ticket', qty: compQty }
        ]
      });
    } else if (cells.length === 4 && stripTags(cells[0]) !== 'X-Antibody Factor' && stripTags(cells[1]) && stripTags(cells[1]).includes('Ticket')) {
       // Special X-Antibody Factor block
       const name = stripTags(cells[0]);
       const fee = parseFee(cells[2]);
       const compQty = parseQty(stripTags(cells[1]));
       recipes.push({
        name: name,
        category: 'PawnChessmon W (D-Terminal)',
        feeTeras: fee,
        components: [
          { name: 'X-Antibody Factor Exchange Ticket', qty: compQty }
        ]
      });
    } else if (cells.length === 4 && cells[1].includes('Omegamon’s Chance')) {
      // Omegamon special case
      const name = stripTags(cells[0]);
      const fee = parseFee(cells[2]);
      const compsText = cells[1].split(/<br\s*\/?>/i);
      const comps = [];
      for (let t of compsText) {
        let text = stripTags(t);
        if(!text) continue;
        const comp = parseNameAndQty(text);
        if (comp.name) {
           comps.push({ name: comp.name.replace(/^[^\w\[\(]+/, ''), qty: comp.qty });
        }
      }
      recipes.push({
        name, category: 'PawnChessmon W (D-Terminal)', feeTeras: fee, components: comps
      });
    }
  }
  return recipes;
}

async function scrapeAlphamon() {
  const html = await fetchWikiHtml('https://digitalmastersworld.wiki.gg/wiki/Alphamon_(NPC)');
  const recipes = [];
  const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/g;
  let rowMatch;
  while ((rowMatch = rowRegex.exec(html)) !== null) {
    const cells = getCells(rowMatch[1]);
    if (cells.length === 4 && cells[0].includes('x') && cells[2]) {
      const prodQty = parseQty(stripTags(cells[0]));
      const name = stripTags(cells[2]);
      const compText = stripTags(cells[3]);
      const compQty = parseQty(compText);
      const compName = compText.replace(/(?:&#215;|x|X|\u00D7)\s*\d+/, '').trim();
      
      recipes.push({
        name: prodQty > 1 ? `${name} (x${prodQty})` : name,
        category: 'Alphamon (Dats)',
        feeTeras: 0,
        components: [
          { name: compName, qty: compQty }
        ]
      });
    }
  }
  return recipes;
}

async function main() {
  const r1 = await scrapeMary();
  const r2 = await scrapePawnChessmon();
  const r3 = await scrapeAlphamon();
  
  const all = [...r1, ...r2, ...r3];
  fs.writeFileSync('C:\\Users\\dev\\Documents\\My_Projects\\dmw\\src\\data\\exchange_npcs_parsed.json', JSON.stringify(all, null, 2));
  console.log(`Saved ${all.length} recipes from Mary, PawnChessmon, and Alphamon.`);
}

main().catch(console.error);
