export const CLASSES = [
  { id: 'sk', name: 'Skill Based', icon: 'SK', desc: 'Use Skills to deal damage' },
  { id: 'aa', name: 'Auto Attack', icon: 'AA', desc: 'Use auto attacks to deal damage' },
  { id: 'tank', name: 'Tank', icon: 'TA', desc: 'High HP and Defense' },
  { id: 'support', name: 'Supporter', icon: 'SUP', desc: 'Buff allies with F3' },
  { id: 'hybrid', name: 'Hybrid', icon: 'HB', desc: 'Can play as SK or AA' },
];

export const ATTRIBUTES = [
  { id: 'vaccine', name: 'Vaccine', short: 'VA', beats: 'Virus' },
  { id: 'virus', name: 'Virus', short: 'Vi', beats: 'Data' },
  { id: 'data', name: 'Data', short: 'DA', beats: 'Vaccine' },
  { id: 'unknown', name: 'Unknown', short: 'Un', beats: 'All' },
  { id: 'none', name: 'No Attribute', short: 'No', beats: 'None' },
];

export const RANKS = ['A', 'A+', 'S', 'S+', 'SS', 'SS+', 'SSS', 'SSS+', 'U'];

export const DIGIVICES = [
  { name: '102-Blue-BT', slots: 3, stats: '—', obtain: 'Qinglongmon Raid Box' },
  { name: 'Advanced 102-Blue-BT', slots: 3, stats: 'Random R11 bonus (HP/DS/AT/DE)', obtain: 'Fanglongmon Raid' },
  { name: '103-Purple-BT', slots: 4, stats: '—', obtain: 'Qinglongmon Raid / Events / 15 Colosseum Vouchers' },
  { name: 'DMW Digivice', slots: 2, stats: '+250 DE, +250 AT, +250 HP', obtain: 'Jijimon in DMW Village' },
  { name: 'Digivice of Beginning Lv 0', slots: 3, stats: '—', obtain: 'Main quest at Minato City' },
  { name: 'Digivice of Beginning Lv 1', slots: 3, stats: 'Attack +133~152', obtain: 'Nanomon (Item Craft)' },
  { name: 'Digivice of Beginning Lv 2', slots: 3, stats: '2 options', obtain: 'Nanomon (Item Craft)' },
  { name: 'Digivice of Adventure Lv 0', slots: 4, stats: '—', obtain: 'Nanomon (Item Craft)' },
  { name: 'Digivice of Adventure Lv 1', slots: 4, stats: 'Attack +153~168', obtain: 'Nanomon (Item Craft)' },
  { name: 'Digivice of Adventure Lv 2', slots: 4, stats: '2 options', obtain: 'Nanomon (Item Craft)' },
  { name: 'True Digivice', slots: 0, stats: 'Box → random Crest Digivice', obtain: 'Nanomon (Item Craft)' },
  { name: 'Digivice of Courage', slots: 4, stats: 'Crest of Courage', obtain: 'Nanomon (Item Craft)' },
  { name: 'Digivice of Friendship', slots: 4, stats: 'Crest of Friendship', obtain: 'Nanomon (Item Craft)' },
  { name: 'Digivice of Love', slots: 4, stats: 'Crest of Love', obtain: 'Nanomon (Item Craft)' },
  { name: 'Digivice of Purity', slots: 4, stats: 'Crest of Purity', obtain: 'Nanomon (Item Craft)' },
  { name: 'Digivice of Knowledge', slots: 4, stats: 'Crest of Knowledge', obtain: 'Nanomon (Item Craft)' },
  { name: 'Digivice of Sincerity', slots: 4, stats: 'Crest of Sincerity', obtain: 'Nanomon (Item Craft)' },
  { name: 'Digivice of Hope', slots: 4, stats: 'Crest of Hope', obtain: 'Nanomon (Item Craft)' },
  { name: 'Digivice of Light', slots: 4, stats: 'Crest of Light', obtain: 'Nanomon (Item Craft)' },
  { name: 'Digivice of Kindness', slots: 4, stats: 'Crest of Kindness', obtain: 'Nanomon (Item Craft)' },
  { name: 'Digivice of Fate', slots: 4, stats: 'Crest of Fate', obtain: 'Nanomon (Item Craft)' },
  { name: 'Digivice of Miracles', slots: 4, stats: 'Crest of Miracles', obtain: 'Nanomon (Item Craft)' },
  { name: 'Digivice of Courage (Adv)', slots: 5, stats: '3 opts, Crest of Courage', obtain: 'Nanomon (Item Craft)' },
  { name: 'Digivice of Friendship (Adv)', slots: 5, stats: '3 opts, Crest of Friendship', obtain: 'Nanomon (Item Craft)' },
  { name: 'Digivice of Love (Adv)', slots: 5, stats: '3 opts, Crest of Love', obtain: 'Nanomon (Item Craft)' },
  { name: 'Digivice of Purity (Adv)', slots: 5, stats: '3 opts, Crest of Purity', obtain: 'Nanomon (Item Craft)' },
  { name: 'Digivice of Knowledge (Adv)', slots: 5, stats: '3 opts, Crest of Knowledge', obtain: 'Nanomon (Item Craft)' },
  { name: 'Digivice of Sincerity (Adv)', slots: 5, stats: '3 opts, Crest of Sincerity', obtain: 'Nanomon (Item Craft)' },
  { name: 'Digivice of Hope (Adv)', slots: 5, stats: '3 opts, Crest of Hope', obtain: 'Nanomon (Item Craft)' },
  { name: 'Digivice of Light (Adv)', slots: 5, stats: '3 opts, Crest of Light', obtain: 'Nanomon (Item Craft)' },
  { name: 'Digivice of Kindness (Adv)', slots: 5, stats: '3 opts, Crest of Kindness', obtain: 'Nanomon (Item Craft)' },
  { name: 'Digivice of Fate (Adv)', slots: 5, stats: '3 opts, Crest of Fate', obtain: 'Nanomon (Item Craft)' },
  { name: 'Digivice of Miracles (Adv)', slots: 5, stats: '3 opts, Crest of Miracles', obtain: 'Nanomon (Item Craft)' },
  { name: '103-OT-Blue Digivice', slots: 4, stats: '2 options', obtain: 'Events' },
  { name: '103-OT-Orange Digivice', slots: 4, stats: '2 options', obtain: 'Event Cash gamble box' },
  { name: '103-OT-Purple Digivice', slots: 4, stats: '2 options', obtain: 'Event Cash gamble box' },
  { name: 'D-Ark Version 1', slots: 3, stats: '+200 AT, +1300 HP, 4% Crit', obtain: 'Infinite Mountain Dungeon 2.0' },
  { name: 'D-Ark Version 2', slots: 3, stats: '+300 AT, +1800 HP, 6% Crit', obtain: 'Jijimon craft' },
  { name: 'D-Ark Version 3', slots: 3, stats: '+400 AT, +2400 HP, 8% Crit', obtain: 'Jijimon craft' },
];

export const TITLES = {
  tamerLevel: { label: '👤 Tamer Level', items: [
    { name: 'Bronze Tamer', how: 'Achieve Tamer level 10', score: 3 },
    { name: 'Silver Tamer', how: 'Achieve Tamer level 30', score: 3 },
    { name: 'Gold Tamer', how: 'Achieve Tamer level 50', score: 6 },
    { name: 'Brave Tamer', how: 'Achieve Tamer level 70', score: 8 },
    { name: 'Master Tamer', how: 'Achieve Tamer level 90', score: 10 },
  ]},
  digimonLevel: { label: '🐉 Digimon Level', items: [
    { name: 'Exceed the Limit', how: 'Digivolve Partnermon to Ultimate', score: 5 },
    { name: 'Transcender', how: 'Digivolve Partnermon to Burst Mode', score: 10 },
    { name: 'Twinkling Nova', how: 'Evolution to Phoenixmon from Biyomon', score: 3 },
    { name: 'Phoenix', how: 'Evolution to Phoenixmon from Hawkmon', score: 3 },
    { name: 'Ultimateness', how: 'Evolution to Imperialdramon', score: 3 },
    { name: "God's Will", how: 'Evolution to Sakuyamon', score: 3 },
    { name: 'Evil Lord', how: 'Evolution to Beelzemon', score: 3 },
    { name: 'Breaking the Seal', how: 'Evolution to Beelzemon Blast Mode', score: 3 },
    { name: 'Holy', how: 'Evolution to MagnaDramon', score: 3 },
    { name: 'Holy Spear', how: 'Evolution to Ophanimon', score: 3 },
    { name: 'Warrior', how: 'Evolution to WarGreymon', score: 3 },
    { name: 'Mechanized', how: 'Evolution to MetalGarurumon', score: 3 },
    { name: 'Guardian Angel', how: 'Evolution to Seraphimon', score: 3 },
    { name: 'Knight Of the Red Flame', how: 'Evolution to Gallantmon', score: 3 },
    { name: 'Gladiator', how: 'Evolution to LordKnightmon', score: 3 },
    { name: 'Chivalry', how: 'Evolution to Dynasmon', score: 3 },
    { name: 'Slayer', how: 'Evolution to Slayerdramon', score: 3 },
    { name: 'Breaker', how: 'Evolution to Brakedramon', score: 3 },
    { name: 'God of Destruction', how: 'Evolution to Diaboromon', score: 3 },
    { name: 'Infinite Power', how: 'Evolution to Machinedramon', score: 3 },
    { name: 'Curse of Fate', how: 'Evolution to Piedmon', score: 3 },
    { name: 'Fallen Angel', how: 'Evolution to Cherubimon', score: 3 },
    { name: 'Momantai', how: 'Evolution to MegaGargomon', score: 3 },
    { name: 'Dramon Breaker', how: 'Evolution to VictoryGreymon', score: 3 },
    { name: "Z'd-Hou", how: 'Evolution to ZeedGarurumon', score: 3 },
    { name: 'Omegamon Master', how: 'Jogress Agumon + Gabumon → Omnimon', score: 30 },
    { name: 'Guardian of Digital world', how: 'Jogress Holy Beasts → Huanglongmon', score: 30 },
    { name: 'Top Dragon Digimon', how: "Calumon's quest after Examon", score: 50 },
    { name: 'Extreme Jihad', how: 'Dark Tower Wasteland quest', score: 300 },
    { name: 'Miracle Digi-egg Evolution!', how: 'Evolution to Magnamon', score: 10 },
  ]},
  money: { label: '💰 Money', items: [
    { name: 'Coin in My Pocket', how: 'Earn money for the first time', score: 1 },
    { name: 'Rich Person', how: 'Obtain 1T', score: 4 },
    { name: 'The Really Rich', how: 'Obtain 10T', score: 5 },
    { name: 'Parvenu', how: 'Have more than 100T', score: 10 },
  ]},
};

export const PROGRESSION = [
  {
    phase: 'Pre-Early Game', steps: [
      { id: 'p1', text: 'Complete introductory fight (Omegamon X vs Dexmon)', cat: 'tutorial' },
      { id: 'p2', text: 'Complete tutorial until DMW Village', cat: 'tutorial' },
      { id: 'p3', text: 'Hold Journey Exchange & Starter Package Tickets', cat: 'tutorial' },
      { id: 'p4', text: 'Start Novice Questline (Tsunomon & Koromon)', cat: 'quest' },
      { id: 'p5', text: 'Trade Starter Exchange Ticket for correct package', cat: 'setup' },
      { id: 'p6', text: 'Trade Journey Ticket (SK→Craniamon X / AA→LordKnightmon X / Tank→Icy)', cat: 'setup' },
      { id: 'p7', text: "Open Starter, Journey & Lala's Gift packages", cat: 'setup' },
      { id: 'p8', text: 'Go to DATS Center → DigiClone starter', cat: 'setup' },
      { id: 'p9', text: 'Use Growth Fruit on starter', cat: 'setup' },
      { id: 'p10', text: 'Level starter to 70+ with Jumping Crystals', cat: 'leveling' },
      { id: 'p11', text: 'Unlock SSS evolution on starter', cat: 'evolution' },
      { id: 'p12', text: 'Hatch Journey DigiEgg & unlock SSS', cat: 'evolution' },
      { id: 'p13', text: 'Equip DMW Digivice', cat: 'equipment' },
      { id: 'p14', text: 'Fill Attribute & Element EXP on main Digimons', cat: 'stats' },
    ]
  },
  {
    phase: 'Early Game', steps: [
      { id: 'e1', text: 'Complete File Island questline', cat: 'quest' },
      { id: 'e2', text: "Complete Koromon's Challenges 1-3", cat: 'quest' },
      { id: 'e3', text: 'Complete Glacier Area questline', cat: 'quest' },
      { id: 'e4', text: "Complete Tsunomon's Challenges", cat: 'quest' },
      { id: 'e5', text: 'Exchange 15 Challenge Coins for 2nd starter egg', cat: 'setup' },
      { id: 'e6', text: 'Complete Digimon Maze questline', cat: 'quest' },
      { id: 'e7', text: 'Run Gizumon Lab dungeon (20x for SSS item)', cat: 'dungeon' },
      { id: 'e8', text: 'Complete Server Continent questline', cat: 'quest' },
      { id: 'e9', text: 'Farm Susanoomon (Pyramid)', cat: 'farm' },
      { id: 'e10', text: 'Level main Digimons to 120', cat: 'leveling' },
      { id: 'e11', text: 'Farm 500+ seals of field enemies', cat: 'seals' },
      { id: 'e12', text: 'Start Deck progression', cat: 'deck' },
    ]
  },
  {
    phase: 'Mid Game', steps: [
      { id: 'm1', text: 'Run dungeons for gear progression', cat: 'dungeon' },
      { id: 'm2', text: 'Open Underworld Accessory Box (30 day)', cat: 'equipment' },
      { id: 'm3', text: 'Farm Xunawumon gear set', cat: 'equipment' },
      { id: 'm4', text: 'Complete Deck (3+ Digimon)', cat: 'deck' },
      { id: 'm5', text: 'Start Transcendence on main Digimon', cat: 'transcendence' },
      { id: 'm6', text: 'Progress to Berserk Arena', cat: 'dungeon' },
      { id: 'm7', text: 'Farm Radiant Holy Beast Accessories', cat: 'equipment' },
      { id: 'm8', text: 'Farm boss seals (500+)', cat: 'seals' },
      { id: 'm9', text: 'Upgrade to Crest Digivice', cat: 'equipment' },
    ]
  },
  {
    phase: 'End Game', steps: [
      { id: 'l1', text: 'Perfect/Semi-Perfect accessory stats', cat: 'equipment' },
      { id: 'l2', text: 'Advanced Digivice (5 chipset slots)', cat: 'equipment' },
      { id: 'l3', text: 'Complete all Deck tiers', cat: 'deck' },
      { id: 'l4', text: 'Max Transcendence on main Digimons', cat: 'transcendence' },
      { id: 'l5', text: 'Fanglongmon Raid farming', cat: 'raid' },
      { id: 'l6', text: "Fanglongmon's Clothing set", cat: 'equipment' },
      { id: 'l7', text: 'Max all relevant seals', cat: 'seals' },
    ]
  },
];

export const GUIDES = [
  { name: 'Core Progression Guide', wiki: 'Core_Progression_Guide' },
  { name: 'Beginner Guide', wiki: 'Beginner_Guide' },
  { name: 'Beginner Guide BR', wiki: 'Beginner_Guide_BR' },
  { name: 'Guide for Newbies', wiki: 'Guide_for_Newbies' },
  { name: 'Novice Challenge', wiki: 'Novice_Challenge' },
  { name: 'Level Up Guide', wiki: 'Level_Up_Guide' },
  { name: 'Unlock Guides', wiki: 'Unlock_Guides' },
];

export const WIKI = 'https://digitalmastersworld.wiki.gg/wiki/';
export const DISCORD = 'https://discord.digitalmasters.world/';
