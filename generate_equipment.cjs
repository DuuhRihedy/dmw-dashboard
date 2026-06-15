const fs = require('fs');
const parsedData = JSON.parse(fs.readFileSync('equipment_parsed_structured.json', 'utf-8'));

// We want to generate the EQUIPMENT and EQUIP_CATEGORIES structures for equipmentData.js
let newEquipmentData = {};
let newCategories = [];
let categoryCounters = {};

function addCategory(id, label, group) {
  newCategories.push({ id, label, group });
  newEquipmentData[id] = [];
}

function processItems(sourceItems, targetId) {
  if (!sourceItems) return;
  sourceItems.forEach(item => {
    let stats = item.rawCells[3] || item.rawCells[2] || '';
    let obtain = item.rawCells[4] || item.rawCells[3] || '';
    let obj = {
      name: item.name,
      stats: stats,
      obtain: obtain
    };

    if (targetId.startsWith('clothing') || targetId.startsWith('fanglongmon')) {
        obj.applyAtt = item.rawCells[2] || '';
        obj.attrSlot = item.rawCells[3] || '';
        obj.stats = item.rawCells[4] || '';
        if (targetId.startsWith('clothing')) {
           obj.obtain = item.rawCells[5] || '';
           obj.recharge = item.rawCells[6] || '';
        } else {
           obj.special = item.rawCells[5] || '';
        }
    } else if (targetId.startsWith('accessory')) {
        obj.opts = item.rawCells[2] || '';
        obj.numChange = item.rawCells[3] || '';
        obj.obtain = item.rawCells[4] || '';
        obj.stats = '';
    } else if (targetId === 'digivices') {
        obj.slots = item.rawCells[2] || '';
    }
    
    newEquipmentData[targetId].push(obj);
  });
}

// 1. Digivices
addCategory('digivices', 'Digivices', 'Digivices');
processItems(parsedData['Digivices']['_root'], 'digivices');

// 2. Spiral KeyRing
addCategory('spiral', 'Spiral KeyRings', 'Digivices'); // Keep them in same group
processItems(parsedData['Spiral KeyRing']['_root'], 'spiral');

// 3. Clothing
const clothingMap = {
  'Head': 'clothing_head',
  'Fashion': 'clothing_fashion',
  'Top': 'clothing_top',
  'Bottom': 'clothing_bottom',
  'Gloves': 'clothing_gloves',
  'Shoes': 'clothing_shoes'
};
Object.keys(clothingMap).forEach(key => {
  addCategory(clothingMap[key], key, 'Clothing');
  processItems(parsedData['Clothing'][key], clothingMap[key]);
});

// 4. Fanglongmon's Clothing
const fangMap = {
  'Head': 'fanglongmon_head',
  'Fashion': 'fanglongmon_fashion',
  'Top': 'fanglongmon_top',
  'Bottom': 'fanglongmon_bottom',
  'Gloves': 'fanglongmon_gloves',
  'Shoes': 'fanglongmon_shoes'
};
Object.keys(fangMap).forEach(key => {
  addCategory(fangMap[key], key, 'Fanglongmon');
  processItems(parsedData["Fanglongmon's Clothing"][key], fangMap[key]);
});

// 5. Costume
addCategory('costume', 'Costumes', 'Clothing');
processItems(parsedData['Avatar/Costume']['_root'], 'costume');

// 6. Accessories
const accMap = {
  'Ring': 'accessory_ring',
  'Necklaces': 'accessory_necklace',
  'Earrings': 'accessory_earring',
  'Bracelets': 'accessory_bracelet'
};
Object.keys(accMap).forEach(key => {
  addCategory(accMap[key], key.replace('s', ''), 'Accessories');
  processItems(parsedData['Accessories'][key], accMap[key]);
});

// 7. Corrupted Accessories
const corrMap = {
  'Ring': 'corrupted_ring',
  'Necklace': 'corrupted_necklace',
  'Earring': 'corrupted_earring',
  'Bracelet': 'corrupted_bracelet'
};
Object.keys(corrMap).forEach(key => {
  addCategory(corrMap[key], 'Corr ' + key, 'Corrupted');
  processItems(parsedData['Corrupted Accessories'][key], corrMap[key]);
});


// Format the JS file
let jsOut = `export const EQUIP_CATEGORIES = ${JSON.stringify(newCategories, null, 2)};\n\n`;
jsOut += `export const EQUIPMENT = ${JSON.stringify(newEquipmentData, null, 2)};\n\n`;

// Add the CATEGORY_TYPE map
jsOut += `export const CATEGORY_TYPE = {};
EQUIP_CATEGORIES.forEach(c => {
  if (c.id.startsWith('clothing')) CATEGORY_TYPE[c.id] = 'clothing';
  else if (c.id.startsWith('fanglongmon')) CATEGORY_TYPE[c.id] = 'fanglongmon';
  else if (c.id.startsWith('accessory') || c.id.startsWith('corrupted')) CATEGORY_TYPE[c.id] = 'accessory';
  else if (c.id === 'spiral') CATEGORY_TYPE[c.id] = 'spiral';
  else if (c.id === 'costume') CATEGORY_TYPE[c.id] = 'costume';
  else CATEGORY_TYPE[c.id] = 'digivice';
});\n`;

fs.writeFileSync('src/data/equipmentData.js', jsOut);
console.log("Wrote src/data/equipmentData.js");
