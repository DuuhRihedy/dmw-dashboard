// ═══════════════════════════════════════════════════════════════
// DMW Equipment Data — Complete from wiki
// ═══════════════════════════════════════════════════════════════

export const EQUIP_CATEGORIES = [
  { id: 'digivices', label: '📟 Digivices', group: 'Digivices' },
  { id: 'spiral', label: '🔑 Spiral KeyRing', group: 'Digivices' },
  { id: 'head', label: '🎩 Head', group: 'Clothing' },
  { id: 'fashion', label: '👔 Fashion', group: 'Clothing' },
  { id: 'top', label: '👕 Top', group: 'Clothing' },
  { id: 'bottom', label: '👖 Bottom', group: 'Clothing' },
  { id: 'gloves', label: '🧤 Gloves', group: 'Clothing' },
  { id: 'shoes', label: '👟 Shoes', group: 'Clothing' },
  { id: 'fang_head', label: '🐲 Fang Head', group: "Fanglongmon's" },
  { id: 'fang_fashion', label: '🐲 Fang Fashion', group: "Fanglongmon's" },
  { id: 'fang_top', label: '🐲 Fang Top', group: "Fanglongmon's" },
  { id: 'fang_bottom', label: '🐲 Fang Bottom', group: "Fanglongmon's" },
  { id: 'fang_gloves', label: '🐲 Fang Gloves', group: "Fanglongmon's" },
  { id: 'fang_shoes', label: '🐲 Fang Shoes', group: "Fanglongmon's" },
  { id: 'costume', label: '🎭 Avatar/Costume', group: 'Costume' },
  { id: 'ring', label: '💍 Ring', group: 'Accessories' },
  { id: 'necklace', label: '📿 Necklace', group: 'Accessories' },
  { id: 'earring', label: '✨ Earring', group: 'Accessories' },
  { id: 'bracelet', label: '⌚ Bracelet', group: 'Accessories' },
  { id: 'corrupted_ring', label: '🔴 C. Ring', group: 'Corrupted' },
  { id: 'corrupted_necklace', label: '🔴 C. Necklace', group: 'Corrupted' },
  { id: 'corrupted_earring', label: '🔴 C. Earring', group: 'Corrupted' },
  { id: 'corrupted_bracelet', label: '🔴 C. Bracelet', group: 'Corrupted' },
  { id: 'digiaura', label: '🌀 DigiAura', group: 'Special' },
  { id: 'xai', label: '⚡ XAI Device', group: 'Special' },
];

// Column definitions per category type
export const COLUMN_DEFS = {
  digivice: ['Status', 'Name', 'Slots', 'Stats', 'How to Obtain'],
  spiral: ['Status', 'Name', 'Stats', 'How to Obtain'],
  clothing: ['Status', 'Name', 'Apply%', 'Attr Slots', 'Stats', 'How to Obtain', 'Recharge'],
  fanglongmon: ['Status', 'Name', 'Apply%', 'Attr Slots', 'Stats Option', 'Unique Special Stats'],
  costume: ['Status', 'Name', 'Effect', 'How to Obtain'],
  accessory: ['Status', 'Name', 'Options', 'Num Change', 'How to Obtain'],
};

export const CATEGORY_TYPE = {
  digivices: 'digivice', spiral: 'spiral',
  head: 'clothing', fashion: 'clothing', top: 'clothing', bottom: 'clothing', gloves: 'clothing', shoes: 'clothing',
  fang_head: 'fanglongmon', fang_fashion: 'fanglongmon', fang_top: 'fanglongmon', fang_bottom: 'fanglongmon', fang_gloves: 'fanglongmon', fang_shoes: 'fanglongmon',
  costume: 'costume',
  ring: 'accessory', necklace: 'accessory', earring: 'accessory', bracelet: 'accessory',
  corrupted_ring: 'accessory', corrupted_necklace: 'accessory', corrupted_earring: 'accessory', corrupted_bracelet: 'accessory',
  digiaura: 'clothing', xai: 'clothing',
};

// ═══════════════════════════════════════════════════════════════
// DIGIVICES
// ═══════════════════════════════════════════════════════════════
export const EQUIPMENT = {
  digivices: [
    { name: '102-Blue-BT', slots: 3, stats: '—', obtain: 'Qinglongmon (Raid) Box' },
    { name: 'Advanced 102-Blue-BT', slots: 3, stats: 'Random R11 bonus (HP/DS/AT/DE)', obtain: 'Fanglongmon (Raid)' },
    { name: '103-Purple-BT', slots: 4, stats: '—', obtain: 'Qinglongmon Raid / Events / 15 Colosseum Vouchers' },
    { name: 'Digivice of Beginning Lv 0', slots: 3, stats: '—', obtain: 'Main quest at Minato City' },
    { name: 'Digivice of Beginning Lv 1', slots: 3, stats: 'Attack +133~152', obtain: 'Nanomon (Item Craft)' },
    { name: 'Digivice of Beginning Lv 2', slots: 3, stats: '2 options', obtain: 'Nanomon (Item Craft)' },
    { name: 'Digivice of Adventure Lv 0', slots: 4, stats: '—', obtain: 'Nanomon (Item Craft)' },
    { name: 'Digivice of Adventure Lv 1', slots: 4, stats: 'Attack +153~168', obtain: 'Nanomon (Item Craft)' },
    { name: 'Digivice of Adventure Lv 2', slots: 4, stats: '2 options', obtain: 'Nanomon (Item Craft)' },
    { name: 'True Digivice', slots: 'Box', stats: 'Right click → random Crest Digivice', obtain: 'Nanomon (Item Craft)' },
    { name: 'Digivice of Courage', slots: 4, stats: '2 opts, Crest of Courage', obtain: 'Nanomon (Item Craft)' },
    { name: 'Digivice of Friendship', slots: 4, stats: '2 opts, Crest of Friendship', obtain: 'Nanomon (Item Craft)' },
    { name: 'Digivice of Love', slots: 4, stats: '2 opts, Crest of Love', obtain: 'Nanomon (Item Craft)' },
    { name: 'Digivice of Purity', slots: 4, stats: '2 opts, Crest of Purity', obtain: 'Nanomon (Item Craft)' },
    { name: 'Digivice of Knowledge', slots: 4, stats: '2 opts, Crest of Knowledge', obtain: 'Nanomon (Item Craft)' },
    { name: 'Digivice of Sincerity', slots: 4, stats: '2 opts, Crest of Sincerity', obtain: 'Nanomon (Item Craft)' },
    { name: 'Digivice of Hope', slots: 4, stats: '2 opts, Crest of Hope', obtain: 'Nanomon (Item Craft)' },
    { name: 'Digivice of Light', slots: 4, stats: '2 opts, Crest of Light', obtain: 'Nanomon (Item Craft)' },
    { name: 'Digivice of Kindness', slots: 4, stats: '2 opts, Crest of Kindness', obtain: 'Nanomon (Item Craft)' },
    { name: 'Digivice of Fate', slots: 4, stats: '2 opts, Crest of Fate', obtain: 'Nanomon (Item Craft)' },
    { name: 'Digivice of Miracles', slots: 4, stats: '2 opts, Crest of Miracles', obtain: 'Nanomon (Item Craft)' },
    { name: 'True Digivice (Advanced)', slots: 'Box', stats: 'Right click → random Crest Digivice', obtain: 'Nanomon (Item Craft)' },
    { name: 'Digivice of Courage (Advanced)', slots: 5, stats: '3 opts, Crest of Courage', obtain: 'Nanomon (Item Craft)' },
    { name: 'Digivice of Friendship (Advanced)', slots: 5, stats: '3 opts, Crest of Friendship', obtain: 'Nanomon (Item Craft)' },
    { name: 'Digivice of Love (Advanced)', slots: 5, stats: '3 opts, Crest of Love', obtain: 'Nanomon (Item Craft)' },
    { name: 'Digivice of Purity (Advanced)', slots: 5, stats: '3 opts, Crest of Purity', obtain: 'Nanomon (Item Craft)' },
    { name: 'Digivice of Knowledge (Advanced)', slots: 5, stats: '3 opts, Crest of Knowledge', obtain: 'Nanomon (Item Craft)' },
    { name: 'Digivice of Sincerity (Advanced)', slots: 5, stats: '3 opts, Crest of Sincerity', obtain: 'Nanomon (Item Craft)' },
    { name: 'Digivice of Hope (Advanced)', slots: 5, stats: '3 opts, Crest of Hope', obtain: 'Nanomon (Item Craft)' },
    { name: 'Digivice of Light (Advanced)', slots: 5, stats: '3 opts, Crest of Light', obtain: 'Nanomon (Item Craft)' },
    { name: 'Digivice of Kindness (Advanced)', slots: 5, stats: '3 opts, Crest of Kindness', obtain: 'Nanomon (Item Craft)' },
    { name: 'Digivice of Fate (Advanced)', slots: 5, stats: '3 opts, Crest of Fate', obtain: 'Nanomon (Item Craft)' },
    { name: 'Digivice of Miracles (Advanced)', slots: 5, stats: '3 opts, Crest of Miracles', obtain: 'Nanomon (Item Craft)' },
    { name: '103-OT-Blue Digivice', slots: 4, stats: '2 options', obtain: 'Events' },
    { name: '103-OT-Orange Digivice', slots: 4, stats: '2 options', obtain: 'Event Cash gamble box' },
    { name: '103-OT-Purple Digivice', slots: 4, stats: '2 options', obtain: 'Event Cash gamble box' },
    { name: 'DMW Digivice', slots: 2, stats: '+250 DE, +250 AT, +250 HP', obtain: 'Jijimon in DMW Village' },
    { name: 'D-Ark Version 1', slots: 3, stats: '+200 AT, +1300 HP, 4% Crit DMG', obtain: 'Infinite Mountain Dungeon 2.0 / Shinjuku questline' },
    { name: 'D-Ark Version 2', slots: 3, stats: '+300 AT, +1800 HP, 6% Crit DMG', obtain: 'Jijimon craft' },
    { name: 'D-Ark Version 3', slots: 3, stats: '+400 AT, +2400 HP, 8% Crit DMG', obtain: 'Jijimon craft' },
    { name: 'D-Ark Version 4', slots: 3, stats: '+650 AT, +3000 HP, 14% Crit DMG', obtain: 'Jijimon craft' },
    { name: 'D-Ark Version 5', slots: 4, stats: '+1000 AT, +3600 HP, 20% Crit DMG', obtain: 'Jijimon craft' },
    { name: 'Digizoid D-Ark', slots: 4, stats: '+4500 HP, +600 DE, +400 AT', obtain: 'Takato in DATS' },
    { name: 'Rage D-Ark', slots: 4, stats: '+1800 HP, +1600 AT, +25% Crit DMG', obtain: 'Takato in DATS' },
    { name: 'ChromeDigizoid D-Ark', slots: 5, stats: '+80% HP, +60% DE', obtain: 'Takato in DATS' },
    { name: 'Uncontrollable Rage D-Ark', slots: 5, stats: '-200% DE, +60% AT, +40% Crit DMG', obtain: 'Takato in DATS' },
    { name: 'Royal Digivice', slots: 3, stats: '4 options', obtain: "Royal Knight's Dominion Daily Reward" },
    { name: 'Void DigiVice [AA]', slots: 6, stats: 'AT +80%, Crit DMG +60%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Void DigiVice [SK]', slots: 6, stats: 'DA +85%, VA +85%, Vi +85%, Un +85%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Void DigiVice [TA]', slots: 6, stats: 'MaxHP +120%, DE +80%', obtain: 'Taichi (Spiral Mountain)' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // SPIRAL KEYRING
  // ═══════════════════════════════════════════════════════════════
  spiral: [
    { name: 'Spiral KeyRing [AA] Lv.1', stats: 'AT +3%, Crit DMG +5%, Crit Hit +5%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [AA] Lv.2', stats: 'AT +4%, Crit DMG +7.5%, Crit Hit +7%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [AA] Lv.3', stats: 'AT +5%, Crit DMG +10%, Crit Hit +10%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [AA] Lv.4', stats: 'AT +6%, Crit DMG +15%, Crit Hit +15%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [AA] Lv.5', stats: 'AT +7%, Crit DMG +20%, Crit Hit +20%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [AA] Lv.6', stats: 'AT +8%, Crit DMG +25%, Crit Hit +25%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [AA] Lv.7', stats: 'AT +9%, Crit DMG +30%, Crit Hit +30%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [AA] Lv.8', stats: 'AT +12%, Crit DMG +35%, Crit Hit +35%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [AA] Lv.9', stats: 'AT +15%, Crit DMG +40%, Crit Hit +40%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [AA] Lv.10', stats: 'AT +20%, Crit DMG +50%, Crit Hit +50%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [SK] Lv.1', stats: 'DS +500, Skill +2%, Basic Attr +1%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [SK] Lv.2', stats: 'DS +700, Skill +4%, Basic Attr +2%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [SK] Lv.3', stats: 'DS +900, Skill +6%, Basic Attr +3%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [SK] Lv.4', stats: 'DS +1100, Skill +8%, Basic Attr +4%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [SK] Lv.5', stats: 'DS +1300, Skill +10%, Basic Attr +5%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [SK] Lv.6', stats: 'DS +1500, Skill +12%, Basic Attr +6%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [SK] Lv.7', stats: 'DS +1750, Skill +14%, Basic Attr +7%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [SK] Lv.8', stats: 'DS +2000, Skill +16%, Basic Attr +8%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [SK] Lv.9', stats: 'DS +2250, Skill +18%, Basic Attr +9%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [SK] Lv.10', stats: 'DS +2500, Skill +25%, Basic Attr +10%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [TANK] Lv.1', stats: 'HP +5%, DE +5%, Block +1%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [TANK] Lv.2', stats: 'HP +8%, DE +8%, Block +2%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [TANK] Lv.3', stats: 'HP +10%, DE +10%, Block +3%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [TANK] Lv.4', stats: 'HP +12%, DE +12%, Block +4%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [TANK] Lv.5', stats: 'HP +15%, DE +15%, Block +5%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [TANK] Lv.6', stats: 'HP +18%, DE +18%, Block +6%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [TANK] Lv.7', stats: 'HP +20%, DE +20%, Block +7%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [TANK] Lv.8', stats: 'HP +22%, DE +22%, Block +8%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [TANK] Lv.9', stats: 'HP +25%, DE +25%, Block +9%', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Spiral KeyRing [TANK] Lv.10', stats: 'HP +30%, DE +30%, Block +10%', obtain: 'Taichi (Spiral Mountain)' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // CLOTHING — HEAD (DigiSoul Attribute)
  // ═══════════════════════════════════════════════════════════════
  head: [
    { name: 'Soulmon / Halloween Hat', applyAtt: '115%', attrSlot: 1, stats: 'EXP +100%', obtain: 'Event', recharge: '✅/❌' },
    { name: "Xuanwumon's Aquatic Ornament", applyAtt: '120%', attrSlot: 2, stats: 'AT +50, EXP +50%', obtain: 'MegaSeadramon Raid (Hard)', recharge: '✅' },
    { name: "Zhuqiaomon's Infernal Ornament", applyAtt: '120%', attrSlot: 2, stats: 'AT +100, EXP +200%', obtain: 'Birdramon Raid (Hard)', recharge: '✅' },
    { name: "Baihumon's Flawless Ornament", applyAtt: '120%', attrSlot: 2, stats: 'AT +50, EXP +50%', obtain: 'Sinduramon Raid (Hard)', recharge: '✅' },
    { name: "Qinglongmon's Lightning Ornament", applyAtt: '120%', attrSlot: 2, stats: 'AT +50, EXP +50%', obtain: 'Antylamon Raid Box (Hard)', recharge: '✅' },
    { name: "Pumpkinmon's Mask", applyAtt: '100%', attrSlot: 2, stats: 'AT +50, EXP +100%', obtain: 'Halloween Lv-Up Reward Box', recharge: '✅' },
    { name: "Spooky Pumpkinmon's Mask", applyAtt: '100%', attrSlot: 2, stats: 'AT +200, EXP +300%', obtain: 'Event / Cash Shop', recharge: '✅/❌' },
    { name: 'Swimming Gears - Goggle', applyAtt: '100%', attrSlot: 2, stats: 'AT +200, EXP +300%', obtain: 'Event / Cash Shop', recharge: '✅' },
    { name: 'Warrior Ornament', applyAtt: '120%', attrSlot: 2, stats: 'AT +150, Hit +200, Crit +5%', obtain: 'Vajramon Dungeon (Hard)', recharge: '❌' },
    { name: 'Warrior Ornament [Shining]', applyAtt: '150%', attrSlot: 3, stats: 'AT +150, Hit +200, Crit Hit +5%', obtain: 'Vajramon Dungeon (Hard)', recharge: '✅' },
    { name: 'Futuristic Battle Optics [30D]', applyAtt: '120%', attrSlot: 2, stats: 'EXP +250%, Tamer HP +600', obtain: 'Seraphimon NPC (100 White Digizoid)', recharge: '✅' },
    { name: "Starmon's Ornament", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +7%, HP +1000', obtain: 'Greenzone (Nightsky)', recharge: '✅' },
    { name: 'Digital Hazard Cap', applyAtt: '150%', attrSlot: 3, stats: 'HP +1500, DE +600', obtain: 'Burning Battle Field', recharge: '✅' },
    { name: 'Back To School [Formal Hat]', applyAtt: '100%', attrSlot: 2, stats: 'Skill DMG +5%, HP +1000', obtain: 'Event / Cash Shop', recharge: '❌' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // CLOTHING — FASHION (DigiSoul Attribute)
  // ═══════════════════════════════════════════════════════════════
  fashion: [
    { name: 'Headphones', applyAtt: '100%', attrSlot: 1, stats: 'EXP +50%', obtain: "Sora's Mom (Yokohama)", recharge: '❌' },
    { name: 'Rare Coin Cape', applyAtt: '120%', attrSlot: 2, stats: 'HP +500, Hit +500, Crit +10%', obtain: 'Rare Machine', recharge: '✅' },
    { name: "Xuanwumon's Aquatic Cape", applyAtt: '120%', attrSlot: 2, stats: 'Skill DMG +5%', obtain: 'MarineDevimon Raid (Hard)', recharge: '✅' },
    { name: "Zhuqiaomon's Infernal Cape", applyAtt: '120%', attrSlot: 2, stats: 'Skill DMG +5%', obtain: 'Garudamon Raid (Hard)', recharge: '✅' },
    { name: "Baihumon's Flawless Cape", applyAtt: '120%', attrSlot: 2, stats: 'Skill DMG +5%', obtain: 'Sinduramon Raid (Hard)', recharge: '✅' },
    { name: "Qinglongmon's Lightning Cape", applyAtt: '120%', attrSlot: 2, stats: 'Skill DMG +7%', obtain: 'Qinglongmon Raid Box (Hard)', recharge: '✅' },
    { name: 'Agumon Ornament [30D]', applyAtt: '100%', attrSlot: 2, stats: 'AT +100, EXP +200%', obtain: 'Cash Shop (events)', recharge: '✅/❌' },
    { name: 'Swimming Gears - Tube', applyAtt: '100%', attrSlot: 2, stats: 'AT +400, EXP +300%', obtain: 'Event / Cash Shop', recharge: '✅' },
    { name: "Shoutmon's Cape", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +10%, DS +1000', obtain: 'Greenzone (Nightsky)', recharge: '✅' },
    { name: 'Digital Hazard Cape', applyAtt: '150%', attrSlot: 3, stats: 'HP +1200, DE +500', obtain: 'Burning Battle Field', recharge: '✅' },
    { name: 'Back To School [Formal Bouquet]', applyAtt: '100%', attrSlot: 2, stats: 'Skill DMG +7%, DS +1500', obtain: 'Event / Cash Shop', recharge: '❌' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // CLOTHING — TOP (Health Points Attribute)
  // ═══════════════════════════════════════════════════════════════
  top: [
    { name: 'T-Shirts', applyAtt: '55%', attrSlot: 1, stats: 'None', obtain: "Sora's Mom / DigiEggs", recharge: '❌' },
    { name: "Xuanwumon's Aquatic Hooded Shirt", applyAtt: '120%', attrSlot: 3, stats: 'Tamer HP +1200', obtain: 'Xuanwumon Raid (Hard)', recharge: '✅' },
    { name: "Zhuqiaomon's Infernal Hooded Shirt", applyAtt: '120%', attrSlot: 3, stats: 'Tamer HP +900', obtain: 'Zhuqiaomon Raid (Hard)', recharge: '✅' },
    { name: "Baihumon's Flawless Hooded Shirt", applyAtt: '120%', attrSlot: 3, stats: 'Tamer HP +1100', obtain: 'Blossomon Raid (Hard)', recharge: '✅' },
    { name: "Qinglongmon's Lightning Hooded Shirt", applyAtt: '120%', attrSlot: 3, stats: 'Tamer HP +900', obtain: 'Qinglongmon Raid Box (Hard)', recharge: '✅' },
    { name: "Soulmon's Robe", applyAtt: '100%', attrSlot: 2, stats: 'AT +50, HP +1000', obtain: 'Halloween Lv-Up Reward', recharge: '✅' },
    { name: "Spooky Soulmon's Robe [30D]", applyAtt: '100%', attrSlot: 2, stats: 'Skill DMG 10%, HP +1000', obtain: 'Event / Cash Shop', recharge: '✅/❌' },
    { name: 'Agumon Top', applyAtt: '100%', attrSlot: 2, stats: 'Skill DMG 10%, HP +700', obtain: 'Event / Cash Shop', recharge: '✅/❌' },
    { name: 'Swimming Gears - Life Vest', applyAtt: '100%', attrSlot: 2, stats: 'Skill DMG 12%, HP +300', obtain: 'Event / Cash Shop', recharge: '✅' },
    { name: 'Rare Coin Top', applyAtt: '100%', attrSlot: 3, stats: 'Skill DMG +12%, HP +1000, DS +200', obtain: 'Rare Machine', recharge: '✅' },
    { name: 'Warrior Top', applyAtt: '150%', attrSlot: 2, stats: 'AT +250, HP +1500', obtain: 'Vajramon Dungeon (Hard)', recharge: '❌' },
    { name: 'Warrior Top [Shining]', applyAtt: '150%', attrSlot: 3, stats: 'AT +250, HP +1500', obtain: 'Vajramon Dungeon (Hard)', recharge: '✅' },
    { name: 'Futuristic Battle Suit Top [30D]', applyAtt: '120%', attrSlot: 3, stats: 'EXP +250%, HP +1200', obtain: 'Seraphimon NPC (150 White Digizoid)', recharge: '✅' },
    { name: 'Digital Hazard Shirt', applyAtt: '150%', attrSlot: 3, stats: 'HP +1600, DE +600', obtain: 'Burning Battle Field', recharge: '✅' },
    { name: 'Back To School [Formal Robe]', applyAtt: '100%', attrSlot: 2, stats: 'Skill DMG +12%, HP +1500', obtain: 'Event / Cash Shop', recharge: '❌' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // CLOTHING — BOTTOM (Defense Attribute)
  // ═══════════════════════════════════════════════════════════════
  bottom: [
    { name: 'Pants', applyAtt: '55%', attrSlot: 2, stats: 'None', obtain: "Sora's Mom (Yokohama)", recharge: '❌' },
    { name: "Xuanwumon's Aquatic Short Pants", applyAtt: '120%', attrSlot: 3, stats: 'DS +1100', obtain: 'MarineDevimon Raid (Hard)', recharge: '✅' },
    { name: "Zhuqiaomon's Infernal Short Pants", applyAtt: '120%', attrSlot: 3, stats: 'DS +1100', obtain: 'Zhuqiaomon Raid (Hard)', recharge: '✅' },
    { name: "Baihumon's Flawless Short Pants", applyAtt: '120%', attrSlot: 3, stats: 'DS +1100', obtain: 'Blossomon Raid (Hard)', recharge: '✅' },
    { name: "Qinglongmon's Lightning Short Pants", applyAtt: '120%', attrSlot: 3, stats: 'DS +1100', obtain: 'Mihiramon Raid Box (Hard)', recharge: '✅' },
    { name: 'Rare Coin Pants', applyAtt: '120%', attrSlot: 2, stats: 'AT +400, HP +1000, DE +50', obtain: 'Rare Machine', recharge: '❌' },
    { name: 'Agumon Pants', applyAtt: '120%', attrSlot: 2, stats: 'AT +200, DS +1200', obtain: 'Cash Shop (events)', recharge: '✅/❌' },
    { name: 'Swimming Gears - Swimsuit', applyAtt: '100%', attrSlot: 2, stats: 'AT +200, DS +1200', obtain: 'Cash Shop', recharge: '✅' },
    { name: "Candlemon's Candlestick", applyAtt: '120%', attrSlot: 2, stats: 'AT +200, DS +1000', obtain: 'Halloween Lv-Up Reward', recharge: '✅' },
    { name: "Spooky Candlemon's Candlestick", applyAtt: '120%', attrSlot: 2, stats: 'AT +200, DS +1500', obtain: 'Event / Cash Shop', recharge: '✅/❌' },
    { name: 'Warrior Pants', applyAtt: '150%', attrSlot: 2, stats: 'AT +250, HP +1700', obtain: 'Vajramon Dungeon (Hard)', recharge: '❌' },
    { name: 'Warrior Pants [Shining]', applyAtt: '150%', attrSlot: 3, stats: 'AT +250, HP +1700', obtain: 'Vajramon Dungeon (Hard)', recharge: '✅' },
    { name: 'Futuristic Battle Suit Pants [30D]', applyAtt: '120%', attrSlot: 2, stats: 'EXP +250%, HP +700', obtain: 'Seraphimon NPC (150 White Digizoid)', recharge: '✅' },
    { name: "Dorulumon's Pants", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +8%, DS +1600, DE +500', obtain: 'Greenzone (Nightsky)', recharge: '✅' },
    { name: 'Digital Hazard Pants', applyAtt: '150%', attrSlot: 3, stats: 'HP +1600, DE +800, Skill DMG +5%', obtain: 'Burning Battle Field', recharge: '✅' },
    { name: 'Back To School [Formal Trousers]', applyAtt: '100%', attrSlot: 2, stats: 'Skill DMG +7%, DS +2000', obtain: 'Event / Cash Shop', recharge: '❌' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // CLOTHING — GLOVES (Attack Attribute)
  // ═══════════════════════════════════════════════════════════════
  gloves: [
    { name: 'Agumon Paw Gloves', applyAtt: '100%', attrSlot: 2, stats: 'AT +300, HP +700', obtain: 'Event / Cash Shop', recharge: '✅/❌' },
    { name: 'Swimming Gears - Water Pistol', applyAtt: '100%', attrSlot: 2, stats: 'AT +300, HP +1000', obtain: 'Event / Cash Shop', recharge: '✅' },
    { name: 'WaruMonzaemon Gloves', applyAtt: '100%', attrSlot: 2, stats: 'AT +300, HP +200', obtain: 'Halloween Lv-Up Reward', recharge: '✅' },
    { name: 'Spooky WaruMonzaemon Gloves', applyAtt: '100%', attrSlot: 2, stats: 'AT +300, HP +400', obtain: 'Event / Cash Shop', recharge: '✅/❌' },
    { name: 'Shiny Desert Gloves (60D)', applyAtt: '120%', attrSlot: 2, stats: 'AT +210', obtain: '30 Shiny Desert Coins (Wizardmon)', recharge: '❌' },
    { name: "Xuanwumon's Aquatic Gloves", applyAtt: '150%', attrSlot: 2, stats: 'AT +330', obtain: 'Xuanwumon Raid (Hard)', recharge: '✅' },
    { name: "Zhuqiaomon's Infernal Gloves", applyAtt: '150%', attrSlot: 2, stats: 'AT +330', obtain: 'Phoenixmon Raid (Hard)', recharge: '✅' },
    { name: "Baihumon's Flawless Gloves", applyAtt: '150%', attrSlot: 2, stats: 'AT +400', obtain: 'Baihumon Raid (Hard)', recharge: '✅' },
    { name: "Qinglongmon's Lightning Gloves", applyAtt: '150%', attrSlot: 2, stats: 'AT +330', obtain: 'Majiramon Raid Box (Hard)', recharge: '✅' },
    { name: 'Warrior Gloves', applyAtt: '150%', attrSlot: 2, stats: 'AT +300, Hit +300', obtain: 'Vajramon Dungeon (Hard)', recharge: '❌' },
    { name: 'Warrior Gloves [Shining]', applyAtt: '150%', attrSlot: 3, stats: 'AT +300, Hit +300', obtain: 'Vajramon Dungeon (Hard)', recharge: '✅' },
    { name: 'Futuristic Battle Gauntlets [30D]', applyAtt: '120%', attrSlot: 2, stats: 'EXP +250%, HP +800', obtain: 'Seraphimon NPC (200 White Digizoid)', recharge: '✅' },
    { name: "Balistamon's Gloves", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +15%, AT +150', obtain: 'Greenzone (Nightsky)', recharge: '✅' },
    { name: 'Digital Hazard Gloves', applyAtt: '150%', attrSlot: 3, stats: 'HP +1000, DE +600, AT +300', obtain: 'Burning Battle Field', recharge: '✅' },
    { name: 'Back To School [Formal Gloves]', applyAtt: '100%', attrSlot: 2, stats: 'Skill DMG +10%, AT +200', obtain: 'Event / Cash Shop', recharge: '❌' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // CLOTHING — SHOES (Movement Speed Attribute)
  // ═══════════════════════════════════════════════════════════════
  shoes: [
    { name: 'Shiny Desert Shoes', applyAtt: '115%', attrSlot: 1, stats: 'Speed +30%', obtain: '30 Shiny Desert Coins (Wizardmon)', recharge: '❌' },
    { name: 'Sports Sneakers', applyAtt: '115%', attrSlot: 1, stats: 'Speed +30%', obtain: "Sora's Mom / Cash Shop", recharge: '❌' },
    { name: 'Wizardmon Shoes', applyAtt: '100%', attrSlot: 2, stats: 'Speed +30%, Friend +30', obtain: 'Halloween Lv-Up Reward', recharge: '✅' },
    { name: 'Spooky Wizardmon Shoes', applyAtt: '100%', attrSlot: 2, stats: 'Speed +30%, Friend +30, DE +100', obtain: 'Event / Cash Shop', recharge: '✅/❌' },
    { name: 'Agumon Feet Shoes', applyAtt: '100%', attrSlot: 2, stats: 'Speed +30%, Friend +30, DE +200', obtain: 'Event / Cash Shop', recharge: '✅/❌' },
    { name: 'Satan Shoes', applyAtt: '100%', attrSlot: 2, stats: 'Speed +40%, Friend +20, DE +400', obtain: 'Infinite Mountain Dungeon 2.0', recharge: '✅' },
    { name: 'Swimming Gears - Flippers', applyAtt: '100%', attrSlot: 2, stats: 'Speed +30%, HP +200, DE +100', obtain: 'Event / Cash Shop', recharge: '✅' },
    { name: "Sparrowmon's Shoes", applyAtt: '100%', attrSlot: 3, stats: 'Speed +40%, Friend +20, Skill DMG +5%', obtain: 'Greenzone (Nightsky)', recharge: '✅' },
    { name: 'Back To School [Formal Boots]', applyAtt: '100%', attrSlot: 2, stats: 'Speed +30%, Friend +20, Skill DMG +5%', obtain: 'Event / Cash Shop', recharge: '❌' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // FANGLONGMON'S CLOTHING — HEAD
  // ═══════════════════════════════════════════════════════════════
  fang_head: [
    { name: "Fang Shining Ornament Lv1", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +3% / AT +180 / HP +900', special: '—' },
    { name: "Fang Shining Ornament Lv2", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +4% / AT +210 / HP +1050', special: '—' },
    { name: "Fang Shining Ornament Lv3", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +5% / AT +240 / HP +1200', special: '—' },
    { name: "Fang Shining Ornament Lv4", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +6% / AT +270 / HP +1350', special: '—' },
    { name: "Fang Shining Ornament Lv5", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +7% / AT +300 / HP +1500', special: '—' },
    { name: "Fang Shining Ornament [AA]", applyAtt: '150%', attrSlot: 3, stats: 'AT +450 / HP +2000 / HP +2000', special: 'AT +5% / +3% / +1%' },
    { name: "Fang Shining Ornament [SK]", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +7% / HP +2000', special: 'Skill DMG +5% / +3% / +1%' },
    { name: "Fang Shining Ornament [TA]", applyAtt: '150%', attrSlot: 3, stats: 'HP +1500 / DE +600 / DMG Red +1%', special: 'DS +2000 / +1800 / +1500' },
    { name: "Fang Shining Ornament [SU]", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +7% / HP +2000 / DS +2000', special: 'DS +2000 / +1800 / +1500' },
  ],

  fang_fashion: [
    { name: "Fang Shining Cape Lv1", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +6% / AT +240 / HP +720', special: '—' },
    { name: "Fang Shining Cape Lv2", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +7% / AT +280 / HP +840', special: '—' },
    { name: "Fang Shining Cape Lv3", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +8% / AT +320 / HP +960', special: '—' },
    { name: "Fang Shining Cape Lv4", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +9% / AT +360 / HP +1080', special: '—' },
    { name: "Fang Shining Cape Lv5", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +10% / AT +400 / HP +1200', special: '—' },
    { name: "Fang Shining Cape [AA]", applyAtt: '150%', attrSlot: 3, stats: 'AT +450 / HP +1000 / DS +1000', special: 'Hit +500 / +300 / +150' },
    { name: "Fang Shining Cape [SK]", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +10% / DS +2000', special: 'Skill DMG +5% / +3% / +1%' },
    { name: "Fang Shining Cape [TA]", applyAtt: '150%', attrSlot: 3, stats: 'HP +1200 / DE +500 / DMG Red +1%', special: 'HP +10% / +8% / +5%' },
    { name: "Fang Shining Cape [SU]", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +7% / HP +1000 / DS +1000', special: 'DS +2000 / +1800 / +1500' },
  ],

  fang_top: [
    { name: "Fang Shining Shirt Lv1", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +8% / AT +150 / HP +960', special: '—' },
    { name: "Fang Shining Shirt Lv2", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +9% / AT +175 / HP +1120', special: '—' },
    { name: "Fang Shining Shirt Lv3", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +10% / AT +200 / HP +1280', special: '—' },
    { name: "Fang Shining Shirt Lv4", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +11% / AT +225 / HP +1440', special: '—' },
    { name: "Fang Shining Shirt Lv5", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +12% / AT +250 / HP +1600', special: '—' },
    { name: "Fang Shining Shirt [AA]", applyAtt: '150%', attrSlot: 3, stats: 'AT +450 / HP +2500 / DS +2500', special: 'HP +8% / +5% / +3%' },
    { name: "Fang Shining Shirt [SK]", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +12% / HP +2000 / DS +2000', special: 'HP +8% / +5% / +3%' },
    { name: "Fang Shining Shirt [TA]", applyAtt: '150%', attrSlot: 3, stats: 'HP +1600 / DE +600 / DMG Red +1%', special: 'HP +10% / +8% / +5%' },
    { name: "Fang Shining Shirt [SU]", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +7% / HP +2500 / DS +2500', special: 'HP +10% / +8% / +5%' },
  ],

  fang_bottom: [
    { name: "Fang Shining Pants Lv1", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +4% / AT +150 / HP +960', special: '—' },
    { name: "Fang Shining Pants Lv2", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +5% / AT +175 / HP +1120', special: '—' },
    { name: "Fang Shining Pants Lv3", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +6% / AT +200 / HP +1280', special: '—' },
    { name: "Fang Shining Pants Lv4", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +7% / AT +225 / HP +1440', special: '—' },
    { name: "Fang Shining Pants Lv5", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +8% / AT +250 / HP +1600', special: '—' },
    { name: "Fang Shining Pants [AA]", applyAtt: '150%', attrSlot: 3, stats: 'AT +450 / HP +2700 / DS +2700', special: 'Crit DMG +8% / +5% / +3%' },
    { name: "Fang Shining Pants [SK]", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +8% / DS +2500', special: 'VA Dmg +2% / Vi Dmg +2% / DA Dmg +2%' },
    { name: "Fang Shining Pants [TA]", applyAtt: '150%', attrSlot: 3, stats: 'HP +1600 / DE +800 / DMG Red +1%', special: 'DE +10% / +8% / +5%' },
    { name: "Fang Shining Pants [SU]", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +6% / HP +2700 / DS +2700', special: 'DS +2000 / +1800 / +1500' },
  ],

  fang_gloves: [
    { name: "Fang Shining Gloves Lv1", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +11% / AT +360 / HP +600', special: '—' },
    { name: "Fang Shining Gloves Lv2", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +12% / AT +420 / HP +700', special: '—' },
    { name: "Fang Shining Gloves Lv3", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +13% / AT +480 / HP +800', special: '—' },
    { name: "Fang Shining Gloves Lv4", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +14% / AT +540 / HP +900', special: '—' },
    { name: "Fang Shining Gloves Lv5", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +15% / AT +600 / HP +1000', special: '—' },
    { name: "Fang Shining Gloves [AA]", applyAtt: '150%', attrSlot: 3, stats: 'AT +800 / Hit +500', special: 'Basic Attr +2% / +1% / +1%' },
    { name: "Fang Shining Gloves [SK]", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +15% / HP +2000', special: 'Basic Attr +2% / +1% / +1%' },
    { name: "Fang Shining Gloves [TA]", applyAtt: '150%', attrSlot: 3, stats: 'HP +1000 / DE +600 / DMG Red +1%', special: 'DE +10% / +8% / +5%' },
    { name: "Fang Shining Gloves [SU]", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +15% / AT +1200 / DS +2000', special: 'Basic Attr +2% / +1% / +1%' },
  ],

  fang_shoes: [
    { name: "Fang Shining Shoes Lv1", applyAtt: '150%', attrSlot: 3, stats: 'DE +1500 / Speed +40% / Friend +20', special: '—' },
    { name: "Fang Shining Shoes Lv2", applyAtt: '150%', attrSlot: 3, stats: 'DE +1750 / Speed +40% / Friend +20', special: '—' },
    { name: "Fang Shining Shoes Lv3", applyAtt: '150%', attrSlot: 3, stats: 'DE +2000 / Speed +40% / Friend +20', special: '—' },
    { name: "Fang Shining Shoes Lv4", applyAtt: '150%', attrSlot: 3, stats: 'DE +2250 / Speed +40% / Friend +20', special: '—' },
    { name: "Fang Shining Shoes Lv5", applyAtt: '150%', attrSlot: 3, stats: 'DE +2500 / Speed +40% / Friend +20', special: '—' },
    { name: "Fang Shining Shoes [AA]", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +5% / Speed +40% / Friend +20', special: 'Final DMG +1% / +0.5% / +0.5%' },
    { name: "Fang Shining Shoes [SK]", applyAtt: '150%', attrSlot: 3, stats: 'Skill DMG +5% / Speed +40% / Friend +20', special: 'Final DMG +1% / +0.5% / +0.5%' },
    { name: "Fang Shining Shoes [TA]", applyAtt: '150%', attrSlot: 3, stats: 'DMG Red +1% / Speed +40% / Friend +20', special: 'Final DMG +1% / +0.5% / +0.5%' },
    { name: "Fang Shining Shoes [SU]", applyAtt: '150%', attrSlot: 3, stats: 'DS +2000 / Speed +40% / Friend +20', special: 'Final DMG +1% / +0.5% / +0.5%' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // AVATAR / COSTUME
  // ═══════════════════════════════════════════════════════════════
  costume: [
    { name: 'D.A.T.S. Uniform', stats: '—', obtain: 'Yokohama Village Quests' },
    { name: 'Slim Fit Smart School Uniform', stats: 'Friend +20 / Speed +50% / EXP +100%', obtain: 'Cash Shop' },
    { name: 'School Uniform (Marcus)', stats: 'Friend +20', obtain: 'Cash Shop' },
    { name: 'Slim Fit School Uniform (Marcus)', stats: 'Friend +20 / Speed +50% / EXP +100%', obtain: 'Cash Shop / Digitamamon' },
    { name: 'Bellboy Costume (Thomas)', stats: 'Friend +20 / Speed +50% / EXP +100%', obtain: 'Cash Shop / Digitamamon' },
    { name: 'Princess Dress (Mimi)', stats: 'Friend +20 / Speed +50% / EXP +100%', obtain: 'Cash Shop' },
    { name: 'Graceful Princess Dress (Mimi)', stats: 'Friend +20 / Speed +50% / EXP +100%', obtain: 'Cash Shop / Digitamamon' },
    { name: 'Slim Fit School Uniform (Keenan)', stats: 'Friend +20 / Speed +50% / EXP +100%', obtain: 'Cash Shop / Digitamamon' },
    { name: 'Sumo Referee Costume (T.K.)', stats: 'Friend +20 / Speed +50% / EXP +100%', obtain: 'Cash Shop / Digitamamon' },
    { name: 'Maid Costume (Yoshino)', stats: 'Friend +20 / Speed +50% / EXP +100%', obtain: 'Cash Shop / Digitamamon' },
    { name: 'Lunatic Lunar Bunny Costume', stats: 'AT +700 / Speed +77% / EXP +500%', obtain: 'Event' },
    { name: "Moon Rabbit's Clothes", stats: 'DS +700 / Speed +77% / EXP +700%', obtain: 'Event' },
    { name: 'Santa Costume', stats: 'AT +600 / Speed +77% / EXP +200%', obtain: 'Cash Shop / Events' },
    { name: 'Red-Winged Santa Costume', stats: 'AT +700 / Speed +77% / EXP +300%', obtain: 'Cash Shop / Events' },
    { name: 'Snowboard Suit', stats: 'AT +600 / Speed +77% / EXP +1000%', obtain: 'Cash Shop / Events' },
    { name: "Newbie's Yellow Soccer Uniform", stats: 'DS +1000 / Speed +77% / EXP +1000%', obtain: 'Cash Shop / Events' },
    { name: "Beginner's Orange Soccer Uniform", stats: 'HP +1000 / Speed +70% / EXP +700%', obtain: 'Events' },
    { name: "Expert's Green Soccer Uniform", stats: 'AT +600 / Speed +77% / EXP +200%', obtain: 'Cash Shop / Events' },
    { name: 'Mature Blue Soccer Uniform', stats: 'AS +7% / HP +1000 / Crit Hit +10%', obtain: 'Events' },
    { name: "Veteran's Red Soccer Uniform", stats: 'HP +1500 / DE +700 / Hit +300', obtain: 'Events' },
    { name: 'Professional Black Soccer Uniform', stats: 'AT +400 / Hit +300 / Crit +7%', obtain: 'Events' },
    { name: 'Summer Costume (Tai)', stats: 'AT +600 / Speed +77% / EXP +200%', obtain: 'Events' },
    { name: 'Summer Costume (Matt)', stats: 'AT +600 / Speed +77% / EXP +200%', obtain: 'Events' },
    { name: 'Summer Costume (T.K)', stats: 'AT +600 / Speed +77% / EXP +200%', obtain: 'Events' },
    { name: 'Summer Costume (Sora)', stats: 'AT +600 / Speed +77% / EXP +200%', obtain: 'Events' },
    { name: 'Summer Costume (Mimi)', stats: 'AT +600 / Speed +77% / EXP +200%', obtain: 'Events' },
    { name: 'Summer Costume (Hikari)', stats: 'AT +600 / Speed +77% / EXP +200%', obtain: 'Events' },
    { name: 'Summer Costume (Marcus)', stats: 'AT +600 / Speed +77% / EXP +200%', obtain: 'Events' },
    { name: 'Summer Costume (Yoshino)', stats: 'AT +600 / Speed +77% / EXP +200%', obtain: 'Events' },
    { name: 'Summer Costume (Thomas)', stats: 'AT +600 / Speed +77% / EXP +200%', obtain: 'Events' },
    { name: 'Summer Costume (Keenan)', stats: 'AT +600 / Speed +77% / EXP +200%', obtain: 'Events' },
    { name: 'High Quality Swimsuit (Red)', stats: 'AT +1500 / Speed +77% / EXP +2000%', obtain: 'Cash Shop / Events' },
    { name: 'High Quality Swimsuit (Black)', stats: 'AT +1500 / Speed +77% / HP +2000', obtain: 'Cash Shop / Events' },
    { name: 'High Quality Divingsuit', stats: 'DE +600 / Speed +88% / HP +3500', obtain: 'Cash Shop / Events' },
    { name: 'High Quality Beachwear', stats: 'DS +4500 / Speed +77% / HP +2000', obtain: 'Cash Shop / Events' },
    { name: 'Special Winter Cape Costume', stats: 'Speed +77% / EXP +2000% / HP +3000', obtain: 'Cash Shop / Events' },
    { name: 'High Quality Snowboard Suit', stats: 'AT +1500 / Speed +77% / EXP +2000%', obtain: 'Cash Shop / Events' },
    { name: 'DATS Expert Uniform (AA)', stats: 'AT +1500 / Speed +77% / HP +2000', obtain: 'Cash Shop / Events' },
    { name: 'DATS Expert Uniform (SK)', stats: 'Skill DMG +5% / Speed +77% / HP +2000', obtain: 'Cash Shop / Events' },
    { name: 'DATS Expert Uniform (TA)', stats: 'DE +600 / Speed +88% / HP +3500', obtain: 'Cash Shop / Events' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // ACCESSORIES — RING
  // ═══════════════════════════════════════════════════════════════
  ring: [
    { name: 'Xuanwumon Sealed Shiny Ring', opts: 4, numChange: '❌', obtain: 'Xuanwumon (Raid) Box' },
    { name: 'Flame Ring of Sealed Zhuqiaomon', opts: 4, numChange: '❌', obtain: 'Zhuqiaomon (Raid) Box' },
    { name: 'Aural Ring of Sealed Baihumon', opts: 4, numChange: '❌', obtain: 'Blossomon / Baihumon (Raid) Box' },
    { name: "Qinglongmon's Sealed Radiant Ring", opts: 4, numChange: '❌', obtain: 'Qinglongmon (Raid) Box' },
    { name: 'Miracle Ring (Special)', opts: 5, numChange: '✅', obtain: 'Magnamon NPC trade' },
    { name: 'Sealed Ring of Four Holy Beasts [Lv.1-5]', opts: 4, numChange: '✅', obtain: 'Digitamamon (Scar of Water Crystal Hard)' },
    { name: 'Sealed Radiant Ring of FHB [Lv.1-5]', opts: 4, numChange: '✅', obtain: 'Digitamamon (Thunder God Hard)' },
    { name: "Fanglongmon's Ancient Ring [Lv.1-10]", opts: 4, numChange: '✅', obtain: 'Fanglongmon Raid / Digitamamon' },
    { name: 'Ring of the Marine Dragon [AA]', opts: 5, numChange: '✅', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Ring of the Marine Dragon [SK]', opts: 5, numChange: '✅', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Ring of the Marine Dragon [TANK]', opts: 5, numChange: '✅', obtain: 'Taichi (Spiral Mountain)' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // ACCESSORIES — NECKLACE
  // ═══════════════════════════════════════════════════════════════
  necklace: [
    { name: 'Xuanwumon Sealed Shiny Necklace', opts: 4, numChange: '❌', obtain: 'Xuanwumon (Raid) Box' },
    { name: 'Flame Necklace of Sealed Zhuqiaomon', opts: 4, numChange: '❌', obtain: 'Zhuqiaomon (Raid) Box' },
    { name: 'Aural Necklace of Sealed Baihumon', opts: 4, numChange: '❌', obtain: 'Blossomon / Baihumon (Raid) Box' },
    { name: "Qinglongmon's Sealed Radiant Necklace", opts: 4, numChange: '❌', obtain: 'Qinglongmon (Raid) Box' },
    { name: 'Miracle Necklace (Special)', opts: 5, numChange: '✅', obtain: 'Magnamon NPC trade' },
    { name: 'Sealed Necklace of FHB [Lv.1-5]', opts: 4, numChange: '✅', obtain: 'Digitamamon (Uprising Flame Hard)' },
    { name: 'Sealed Radiant Necklace of FHB [Lv.1-5]', opts: 4, numChange: '✅', obtain: 'Digitamamon (Thunder God Hard)' },
    { name: "Fanglongmon's Ancient Necklace [Lv.1-10]", opts: 4, numChange: '✅', obtain: 'Fanglongmon Raid / Digitamamon' },
    { name: 'Necklace of the Wooden Puppet [AA]', opts: 5, numChange: '✅', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Necklace of the Wooden Puppet [SK]', opts: 5, numChange: '✅', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Necklace of the Wooden Puppet [TANK]', opts: 5, numChange: '✅', obtain: 'Taichi (Spiral Mountain)' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // ACCESSORIES — EARRING
  // ═══════════════════════════════════════════════════════════════
  earring: [
    { name: 'Xuanwumon Sealed Shiny Earring', opts: 4, numChange: '❌', obtain: 'Xuanwumon (Raid) Box' },
    { name: 'Flame Earring of Sealed Zhuqiaomon', opts: 4, numChange: '❌', obtain: 'Zhuqiaomon (Raid) Box' },
    { name: 'Aural Earring of Sealed Baihumon', opts: 4, numChange: '❌', obtain: 'Blossomon / Baihumon (Raid) Box' },
    { name: "Qinglongmon's Sealed Radiant Earring", opts: 4, numChange: '❌', obtain: 'Qinglongmon (Raid) Box' },
    { name: 'Miracle Earring (Special)', opts: 5, numChange: '✅', obtain: 'Magnamon NPC trade' },
    { name: 'Sealed Earring of FHB [Lv.1-5]', opts: 4, numChange: '✅', obtain: 'Digitamamon (Trace of Black Steel Hard)' },
    { name: 'Sealed Radiant Earring of FHB [Lv.1-5]', opts: 4, numChange: '✅', obtain: 'Digitamamon (Thunder God Hard)' },
    { name: "Fanglongmon's Ancient Earring [Lv.1-10]", opts: 4, numChange: '✅', obtain: 'Fanglongmon Raid / Digitamamon' },
    { name: 'Earring of the Steel Machine [AA]', opts: 5, numChange: '✅', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Earring of the Steel Machine [SK]', opts: 5, numChange: '✅', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Earring of the Steel Machine [TANK]', opts: 5, numChange: '✅', obtain: 'Taichi (Spiral Mountain)' },
  ],

  // ═══════════════════════════════════════════════════════════════
  // ACCESSORIES — BRACELET
  // ═══════════════════════════════════════════════════════════════
  bracelet: [
    { name: 'Xuanwumon Sealed Shiny Bracelet', opts: 4, numChange: '❌', obtain: 'Xuanwumon (Raid) Box' },
    { name: 'Flame Bracelet of Sealed Zhuqiaomon', opts: 4, numChange: '❌', obtain: 'Zhuqiaomon (Raid) Box' },
    { name: 'Aural Bracelet of Sealed Baihumon', opts: 4, numChange: '❌', obtain: 'Blossomon / Baihumon (Raid) Box' },
    { name: "Qinglongmon's Sealed Radiant Bracelet", opts: 4, numChange: '❌', obtain: 'Qinglongmon (Raid) Box' },
    { name: 'Miracle Bracelet (Special)', opts: 5, numChange: '✅', obtain: 'Magnamon NPC trade' },
    { name: 'Sealed Bracelet of FHB [Lv.1-5]', opts: 4, numChange: '✅', obtain: 'Digitamamon' },
    { name: 'Sealed Radiant Bracelet of FHB [Lv.1-5]', opts: 4, numChange: '✅', obtain: 'Digitamamon (Thunder God Hard)' },
    { name: "Fanglongmon's Ancient Bracelet [Lv.1-10]", opts: 4, numChange: '✅', obtain: 'Fanglongmon Raid / Digitamamon' },
    { name: 'Bracelet of the Frozen Knight [AA]', opts: 5, numChange: '✅', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Bracelet of the Frozen Knight [SK]', opts: 5, numChange: '✅', obtain: 'Taichi (Spiral Mountain)' },
    { name: 'Bracelet of the Frozen Knight [TANK]', opts: 5, numChange: '✅', obtain: 'Taichi (Spiral Mountain)' },
  ],

  corrupted_ring: [{ name: 'Corrupted Ring data — coming soon', opts: '—', numChange: '—', obtain: 'Wiki expansion' }],
  corrupted_necklace: [{ name: 'Corrupted Necklace data — coming soon', opts: '—', numChange: '—', obtain: 'Wiki expansion' }],
  corrupted_earring: [{ name: 'Corrupted Earring data — coming soon', opts: '—', numChange: '—', obtain: 'Wiki expansion' }],
  corrupted_bracelet: [{ name: 'Corrupted Bracelet data — coming soon', opts: '—', numChange: '—', obtain: 'Wiki expansion' }],
  digiaura: [{ name: 'DigiAura data — coming soon', applyAtt: '—', attrSlot: '—', stats: '—', obtain: 'Wiki expansion', recharge: '—' }],
  xai: [{ name: 'XAI Device data — coming soon', applyAtt: '—', attrSlot: '—', stats: '—', obtain: 'Wiki expansion', recharge: '—' }],
};
