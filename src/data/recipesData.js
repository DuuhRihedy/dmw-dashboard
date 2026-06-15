import nanomonData from './nanomon_parsed.json';
import extraNpcsData from './extra_npcs_parsed.json';
import exchangeNpcsData from './exchange_npcs_parsed.json';

const taichiRecipes = [
  // --- SPIRAL KEYRINGS (AA) ---
  {
    name: 'Spiral KeyRing [AA] Lv.1',
    category: 'Taichi (Spiral)',
    feeTeras: 20,
    components: [ { name: 'Simple KeyRing', qty: 1 }, { name: 'Spiral Essence', qty: 100 } ]
  },
  {
    name: 'Spiral KeyRing [AA] Lv.2',
    category: 'Taichi (Spiral)',
    feeTeras: 20,
    components: [ { name: 'Spiral KeyRing [AA] Lv.1', qty: 1 }, { name: 'Spiral Essence', qty: 200 }, { name: 'Marine Dragon Core', qty: 10 } ]
  },
  {
    name: 'Spiral KeyRing [AA] Lv.3',
    category: 'Taichi (Spiral)',
    feeTeras: 20,
    components: [ { name: 'Spiral KeyRing [AA] Lv.2', qty: 1 }, { name: 'Spiral Essence', qty: 200 }, { name: 'Marine Dragon Core', qty: 20 } ]
  },
  {
    name: 'Spiral KeyRing [AA] Lv.4',
    category: 'Taichi (Spiral)',
    feeTeras: 20,
    components: [ { name: 'Spiral KeyRing [AA] Lv.3', qty: 1 }, { name: 'Spiral Essence', qty: 300 }, { name: 'Wooden Puppet Core', qty: 10 } ]
  },
  {
    name: 'Spiral KeyRing [AA] Lv.5',
    category: 'Taichi (Spiral)',
    feeTeras: 20,
    components: [ { name: 'Spiral KeyRing [AA] Lv.4', qty: 1 }, { name: 'Spiral Essence', qty: 300 }, { name: 'Wooden Puppet Core', qty: 20 } ]
  },
  {
    name: 'Spiral KeyRing [AA] Lv.6',
    category: 'Taichi (Spiral)',
    feeTeras: 20,
    components: [ { name: 'Spiral KeyRing [AA] Lv.5', qty: 1 }, { name: 'Spiral Essence', qty: 400 }, { name: 'Metalic Beast Core', qty: 10 } ]
  },
  {
    name: 'Spiral KeyRing [AA] Lv.7',
    category: 'Taichi (Spiral)',
    feeTeras: 20,
    components: [ { name: 'Spiral KeyRing [AA] Lv.6', qty: 1 }, { name: 'Spiral Essence', qty: 400 }, { name: 'Metalic Beast Core', qty: 20 } ]
  },
  {
    name: 'Spiral KeyRing [AA] Lv.8',
    category: 'Taichi (Spiral)',
    feeTeras: 20,
    components: [ { name: 'Spiral KeyRing [AA] Lv.7', qty: 1 }, { name: 'Spiral Essence', qty: 500 }, { name: 'Cruelty Clown Core', qty: 10 } ]
  },
  {
    name: 'Spiral KeyRing [AA] Lv.9',
    category: 'Taichi (Spiral)',
    feeTeras: 20,
    components: [ { name: 'Spiral KeyRing [AA] Lv.8', qty: 1 }, { name: 'Spiral Essence', qty: 500 }, { name: 'Cruelty Clown Core', qty: 20 } ]
  },
  {
    name: 'Spiral KeyRing [AA] Lv.10',
    category: 'Taichi (Spiral)',
    feeTeras: 20,
    components: [ { name: 'Spiral KeyRing [AA] Lv.9', qty: 1 }, { name: 'Spiral Essence', qty: 1100 }, { name: 'Core of Nothingness', qty: 30 } ]
  },

  // --- SPIRAL KEYRINGS (SK) ---
  {
    name: 'Spiral KeyRing [SK] Lv.1',
    category: 'Taichi (Spiral)',
    feeTeras: 20,
    components: [ { name: 'Simple KeyRing', qty: 1 }, { name: 'Spiral Essence', qty: 100 } ]
  },
  {
    name: 'Spiral KeyRing [SK] Lv.2',
    category: 'Taichi (Spiral)',
    feeTeras: 20,
    components: [ { name: 'Spiral KeyRing [SK] Lv.1', qty: 1 }, { name: 'Spiral Essence', qty: 200 }, { name: 'Marine Dragon Core', qty: 10 } ]
  },
  {
    name: 'Spiral KeyRing [SK] Lv.3',
    category: 'Taichi (Spiral)',
    feeTeras: 20,
    components: [ { name: 'Spiral KeyRing [SK] Lv.2', qty: 1 }, { name: 'Spiral Essence', qty: 200 }, { name: 'Marine Dragon Core', qty: 20 } ]
  },
  {
    name: 'Spiral KeyRing [SK] Lv.4',
    category: 'Taichi (Spiral)',
    feeTeras: 20,
    components: [ { name: 'Spiral KeyRing [SK] Lv.3', qty: 1 }, { name: 'Spiral Essence', qty: 300 }, { name: 'Wooden Puppet Core', qty: 10 } ]
  },
  {
    name: 'Spiral KeyRing [SK] Lv.5',
    category: 'Taichi (Spiral)',
    feeTeras: 20,
    components: [ { name: 'Spiral KeyRing [SK] Lv.4', qty: 1 }, { name: 'Spiral Essence', qty: 300 }, { name: 'Wooden Puppet Core', qty: 20 } ]
  },
  {
    name: 'Spiral KeyRing [SK] Lv.6',
    category: 'Taichi (Spiral)',
    feeTeras: 20,
    components: [ { name: 'Spiral KeyRing [SK] Lv.5', qty: 1 }, { name: 'Spiral Essence', qty: 400 }, { name: 'Metalic Beast Core', qty: 10 } ]
  },
  {
    name: 'Spiral KeyRing [SK] Lv.7',
    category: 'Taichi (Spiral)',
    feeTeras: 20,
    components: [ { name: 'Spiral KeyRing [SK] Lv.6', qty: 1 }, { name: 'Spiral Essence', qty: 400 }, { name: 'Metalic Beast Core', qty: 20 } ]
  },
  {
    name: 'Spiral KeyRing [SK] Lv.8',
    category: 'Taichi (Spiral)',
    feeTeras: 20,
    components: [ { name: 'Spiral KeyRing [SK] Lv.7', qty: 1 }, { name: 'Spiral Essence', qty: 500 }, { name: 'Cruelty Clown Core', qty: 10 } ]
  },
  {
    name: 'Spiral KeyRing [SK] Lv.9',
    category: 'Taichi (Spiral)',
    feeTeras: 20,
    components: [ { name: 'Spiral KeyRing [SK] Lv.8', qty: 1 }, { name: 'Spiral Essence', qty: 500 }, { name: 'Cruelty Clown Core', qty: 20 } ]
  },
  {
    name: 'Spiral KeyRing [SK] Lv.10',
    category: 'Taichi (Spiral)',
    feeTeras: 20,
    components: [ { name: 'Spiral KeyRing [SK] Lv.9', qty: 1 }, { name: 'Spiral Essence', qty: 1100 }, { name: 'Core of Nothingness', qty: 30 } ]
  },

  // --- SPIRAL GEAR ---
  {
    name: 'Ring of the Marine Dragon [AA]',
    category: 'Taichi (Spiral)',
    feeTeras: 10,
    components: [ { name: "Fanglongmon's Ultimate Ancient Ring [Lv.10]", qty: 1 }, { name: 'Spiral Essence', qty: 500 }, { name: 'Marine Dragon Core', qty: 100 } ]
  },
  {
    name: 'Ring of the Marine Dragon [SK]',
    category: 'Taichi (Spiral)',
    feeTeras: 10,
    components: [ { name: "Fanglongmon's Ultimate Ancient Ring [Lv.10]", qty: 1 }, { name: 'Spiral Essence', qty: 500 }, { name: 'Marine Dragon Core', qty: 100 } ]
  },
  {
    name: 'Necklace of the Wooden Puppet [AA]',
    category: 'Taichi (Spiral)',
    feeTeras: 10,
    components: [ { name: "Fanglongmon's Ultimate Ancient Necklace [Lv.10]", qty: 1 }, { name: 'Spiral Essence', qty: 500 }, { name: 'Wooden Puppet Core', qty: 100 }, { name: 'Marine Dragon Core', qty: 100 } ]
  },
  {
    name: 'Earring of the Metalic Beast [AA]',
    category: 'Taichi (Spiral)',
    feeTeras: 10,
    components: [ { name: "Fanglongmon's Ultimate Ancient Earring [Lv.10]", qty: 1 }, { name: 'Spiral Essence', qty: 500 }, { name: 'Metalic Beast Core', qty: 100 }, { name: 'Wooden Puppet Core', qty: 25 }, { name: 'Marine Dragon Core', qty: 25 } ]
  },
  {
    name: 'Bracelet of the Cruel Clown [AA]',
    category: 'Taichi (Spiral)',
    feeTeras: 10,
    components: [ { name: 'Ultimate : Yggdrasil Bracelet', qty: 1 }, { name: 'Spiral Essence', qty: 500 }, { name: 'Cruelty Clown Core', qty: 100 }, { name: 'Metalic Beast Core', qty: 25 }, { name: 'Wooden Puppet Core', qty: 25 }, { name: 'Marine Dragon Core', qty: 25 } ]
  },
  {
    name: 'Void DigiVice [AA]',
    category: 'Taichi (Spiral)',
    feeTeras: 10,
    components: [ { name: 'Uncontrollable Rage D-Ark', qty: 1 }, { name: 'Core of Nothingness', qty: 50 }, { name: 'Cruelty Clown Core', qty: 50 }, { name: 'Metalic Beast Core', qty: 50 }, { name: 'Wooden Puppet Core', qty: 50 }, { name: 'Marine Dragon Core', qty: 50 } ]
  },

  // --- CORRUPTED ACCESSORY ---
  {
    name: 'Corrupted Ring of the Marine Dragon [AA]',
    category: 'Taichi (Spiral)',
    feeTeras: 50,
    components: [ { name: 'Ring of the Marine Dragon [AA]', qty: 1 }, { name: 'Void Space', qty: 1 } ]
  },
  {
    name: 'Corrupted Necklace of the Wooden Puppet [AA]',
    category: 'Taichi (Spiral)',
    feeTeras: 50,
    components: [ { name: 'Necklace of the Wooden Puppet [AA]', qty: 1 }, { name: 'Void Space', qty: 1 } ]
  },
  {
    name: 'Corrupted Earring of the Metallic Beast [AA]',
    category: 'Taichi (Spiral)',
    feeTeras: 50,
    components: [ { name: 'Earring of the Metallic Beast [AA]', qty: 1 }, { name: 'Void Space', qty: 1 } ]
  },
  {
    name: 'Corrupted Bracelet of the Cruel Clown [AA]',
    category: 'Taichi (Spiral)',
    feeTeras: 50,
    components: [ { name: 'Bracelet of the Cruel Clown [AA]', qty: 1 }, { name: 'Void Space', qty: 1 } ]
  },
  
  // --- MATERIALS & CONSUMABLES ---
  {
    name: 'Void Crystal',
    category: 'Taichi (Spiral)',
    feeTeras: 50,
    components: [ { name: 'Core of Nothingness', qty: 150 } ]
  },
  {
    name: 'Void Power Stone',
    category: 'Taichi (Spiral)',
    feeTeras: 0,
    components: [ { name: 'Core of Nothingness', qty: 20 } ]
  }
];

export const PREBUILT_RECIPES = [...taichiRecipes, ...nanomonData, ...extraNpcsData, ...exchangeNpcsData].map((r, i) => ({ ...r, uniqueId: `PREBUILT_${i}` }));
