const fs = require('fs');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('deck_raw.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

const decks = [];

// The headlines for the decks
const headlines = document.querySelectorAll('h3 .mw-headline');

headlines.forEach(headline => {
  const name = headline.textContent.trim();
  // We only want the deck names, which usually have a specific structure.
  // There's a <table> immediately following the <h3> or a paragraph then a <table>
  let table = headline.parentElement.nextElementSibling;
  
  while (table && table.tagName !== 'TABLE' && table.tagName !== 'H3') {
    table = table.nextElementSibling;
  }

  if (!table || table.tagName !== 'TABLE') return;

  const deck = {
    name,
    description: '',
    digimon: [],
    effects: []
  };

  const rows = table.querySelectorAll('tr');
  rows.forEach(row => {
    const th = row.querySelector('th');
    const td = row.querySelector('td');
    
    if (th && td) {
      const headerText = th.textContent.trim().toLowerCase();
      
      if (headerText.includes('description')) {
        deck.description = td.textContent.trim();
      } 
      else if (headerText.includes('digimon needed')) {
        // Find all links to digimon
        const links = td.querySelectorAll('a');
        const seen = new Set();
        links.forEach(link => {
          // ignore image links
          if (link.querySelector('img')) return;
          const dName = link.textContent.trim();
          if (dName && !seen.has(dName)) {
            seen.add(dName);
            deck.digimon.push(dName);
          }
        });
      }
      else if (headerText.includes('activation effect') || headerText.includes('lasting time') || headerText.includes('activation condition')) {
        deck.effects.push(`${th.textContent.trim()}: ${td.textContent.trim()}`);
      }
    }
  });

  if (deck.digimon.length > 0) {
    decks.push(deck);
  }
});

fs.writeFileSync('src/data/decksData.json', JSON.stringify(decks, null, 2));
console.log(`Parsed ${decks.length} decks.`);
