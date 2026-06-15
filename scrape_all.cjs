const fs = require('fs');

async function fetchWikiHtml(url) {
  const res = await fetch(url);
  return await res.text();
}

const parseWikiHtml = (html, categoryName) => {
  const recipes = [];
  
  const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/g;
  let rowMatch;
  while ((rowMatch = rowRegex.exec(html)) !== null) {
    const rowHtml = rowMatch[1];
    
    const cellRegex = /<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/g;
    const cells = [];
    let cellMatch;
    while ((cellMatch = cellRegex.exec(rowHtml)) !== null) {
      cells.push(cellMatch[1].trim());
    }
    
    if (cells.length >= 4) {
      const itemNameRaw = cells[1].replace(/<[^>]+>/g, '').trim();
      if (itemNameRaw.toLowerCase() === 'production item' || !itemNameRaw) continue;
      
      const rawMaterials = cells[2];
      const rawCost = cells[3];
      
      const comps = [];
      const lines = rawMaterials.split(/<br\s*\/?>/i);
      
      for (let line of lines) {
        line = line.replace(/<[^>]+>/g, '').replace(/&#039;/g, "'").trim();
        if (!line) continue;
        
        let qty = 1;
        let cName = line;
        
        const qtyMatch = line.match(/x\s*(\d+)[^A-Za-z]*$/i);
        if (qtyMatch) {
          qty = parseInt(qtyMatch[1], 10);
          cName = line.replace(qtyMatch[0], '').trim();
        }
        
        if (cName) {
           comps.push({ name: cName, qty });
        }
      }
      
      let feeTeras = 0;
      let costText = rawCost.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      let tMatch = costText.match(/(\d+)\s*Currency Tera/i) || costText.match(/(\d+)\s*T/i) || costText.match(/(\d+)\s*<a[^>]*Currency Tera/i) || costText.match(/(\d+)\s*Tera/i);
      if (tMatch) feeTeras = parseInt(tMatch[1], 10);
      else {
         let mMatch = costText.match(/(\d+)\s*Currency Mega/i) || costText.match(/(\d+)\s*Mega/i);
         if (mMatch) feeTeras = parseInt(mMatch[1], 10) / 1000;
      }
      
      if (comps.length > 0) {
        recipes.push({
          name: itemNameRaw.replace(/&#039;/g, "'"),
          category: categoryName,
          feeTeras,
          components: comps
        });
      }
    }
  }
  
  return recipes;
};

async function main() {
  const urls = [
    { url: 'https://digitalmastersworld.wiki.gg/wiki/Digitamamon_(Item_Make)', cat: 'Digitamamon (Dats)' },
    { url: 'https://digitalmastersworld.wiki.gg/wiki/Takato_(Digital_Area_Craft)', cat: 'Takato (Dats)' },
    { url: 'https://digitalmastersworld.wiki.gg/wiki/Gotsumon_(Item_Craft)', cat: 'Gotsumon (D-Terminal)' }
  ];

  let allNewRecipes = [];

  for (const item of urls) {
    console.log(`Fetching ${item.cat}...`);
    const html = await fetchWikiHtml(item.url);
    const parsed = parseWikiHtml(html, item.cat);
    console.log(`Parsed ${parsed.length} recipes from ${item.cat}.`);
    allNewRecipes = allNewRecipes.concat(parsed);
  }

  fs.writeFileSync('C:\\Users\\dev\\Documents\\My_Projects\\dmw\\src\\data\\extra_npcs_parsed.json', JSON.stringify(allNewRecipes, null, 2));
  console.log(`Successfully wrote ${allNewRecipes.length} total new recipes to extra_npcs_parsed.json`);
}

main().catch(console.error);
