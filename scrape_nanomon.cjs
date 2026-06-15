const fs = require('fs');

const parseWikiFile = (filePath, categoryName) => {
  const html = fs.readFileSync(filePath, 'utf8');
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
         // handle mega if 1500 Mega => 1.5 Tera? The calc just expects Tera for now.
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

const nanomonRecipes = parseWikiFile('C:\\Users\\dev\\.gemini\\antigravity-ide\\brain\\eb4d4b15-690b-470e-b467-dbadc2a48f95\\.system_generated\\steps\\331\\content.md', 'Nanomon (Dats)');

fs.writeFileSync('C:\\Users\\dev\\Documents\\My_Projects\\dmw\\src\\data\\nanomon_parsed.json', JSON.stringify(nanomonRecipes, null, 2));
console.log(`Parsed ${nanomonRecipes.length} recipes from Nanomon!`);
