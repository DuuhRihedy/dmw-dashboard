const fs = require('fs');
const html = fs.readFileSync('deck_raw.html', 'utf8');
const index = html.indexOf('<span class="mw-headline" id="Four_Holy_Beasts">');
console.log(html.substring(index, index + 2000));
