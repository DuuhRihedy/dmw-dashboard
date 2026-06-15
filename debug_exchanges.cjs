const fs = require('fs');

async function fetchWikiHtml(url) {
  const res = await fetch(url);
  return await res.text();
}

async function debugUrl(url) {
  console.log('--- DEBUG: ' + url);
  const html = await fetchWikiHtml(url);
  const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/g;
  let count = 0;
  let rowMatch;
  while ((rowMatch = rowRegex.exec(html)) !== null && count < 10) {
    const rowHtml = rowMatch[1];
    const cellRegex = /<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/g;
    const cells = [];
    let cellMatch;
    while ((cellMatch = cellRegex.exec(rowHtml)) !== null) {
      cells.push(cellMatch[1].replace(/<[^>]+>/g, '').trim());
    }
    if (cells.length > 1) {
      console.log(cells.join(' | '));
      count++;
    }
  }
}

async function main() {
  await debugUrl('https://digitalmastersworld.wiki.gg/wiki/Mary_(Arena_Voucher)');
  await debugUrl('https://digitalmastersworld.wiki.gg/wiki/PawnChessmon_W_(X-Antibody_Factor_Exchange)');
  await debugUrl('https://digitalmastersworld.wiki.gg/wiki/PawnChessmon_W_(Quest_Rewards)');
  await debugUrl('https://digitalmastersworld.wiki.gg/wiki/Alphamon_(NPC)');
}

main().catch(console.error);
