const fs = require('fs');
const content = fs.readFileSync('equipment_wiki.html', 'utf-8');

const result = {};
let currentCategory = '';
let currentSubCategory = '';

const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line.includes('<span class="mw-headline"')) {
    const match = line.match(/<span class="mw-headline" id="([^"]+)">([^<]+)<\/span>/);
    if (match) {
      const headingText = match[2].trim();
      if (line.includes('<h1>')) {
        currentCategory = headingText;
        currentSubCategory = '';
        result[currentCategory] = {};
      } else if (line.includes('<h2>')) {
        currentSubCategory = headingText;
        result[currentCategory][currentSubCategory] = [];
      }
    }
  }

  // Find table rows
  if (line.includes('<tr>')) {
    let rowHtml = line;
    let j = i;
    while (!rowHtml.includes('</tr>') && j < lines.length - 1) {
      j++;
      rowHtml += lines[j];
    }
    
    // Parse the row
    if (rowHtml.includes('<th>')) continue; // Skip header rows

    const tds = rowHtml.match(/<td>([\s\S]*?)<\/td>/g);
    if (tds && tds.length > 1) {
      // The second td usually contains the name
      let nameTd = tds[1] || '';
      let nameMatch = nameTd.match(/<b>(.*?)<\/b>/) || nameTd.match(/>(.*?)<\/td>/);
      let name = nameMatch ? nameMatch[1].replace(/<[^>]+>/g, '').trim() : '';

      if (name) {
        // Strip out HTML entities like &#160;
        name = name.replace(/&#160;/g, ' ').replace(/&amp;/g, '&');
        
        let itemData = { name: name, rawCells: tds.map(td => td.replace(/<[^>]+>/g, '').trim()) };
        
        if (currentSubCategory) {
          result[currentCategory][currentSubCategory].push(itemData);
        } else if (currentCategory) {
          if (!result[currentCategory]['_root']) result[currentCategory]['_root'] = [];
          result[currentCategory]['_root'].push(itemData);
        }
      }
    }
  }
}

fs.writeFileSync('equipment_parsed_structured.json', JSON.stringify(result, null, 2));
console.log("Done");
