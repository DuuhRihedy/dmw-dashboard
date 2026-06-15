// ═══════════════════════════════════════════════════════════════
// DMW Tamer System — Complete from wiki
// ═══════════════════════════════════════════════════════════════

export const TAMERS = [
  {
    id: 'marcus', name: 'Marcus Damon', jp: '大門 大 (Daimon Masaru)',
    desc: 'A 14-year-old boy who loves to fight. Made Agumon his partner after defeating it. His punch triggers DNA charge to digivolve Agumon.',
    stats: { hp: 90, ds: 80, de: 2, at: 10 },
    skill: { name: 'Bash!', cooldown: '30s', desc: 'Punches the enemy, causing damage! (40x Tamer AT, chance to crit)' },
    passives: [
      { name: 'Valor of Marcus', effect: 'AT +5%', condition: 'Vaccine' },
      { name: 'Valor of Marcus', effect: 'HP +10%', condition: 'Data' },
      { name: 'Valor of Marcus', effect: 'Crit DMG +10%', condition: 'All' },
    ],
  },
  {
    id: 'thomas', name: 'Thomas H. Norstein', jp: 'トーマ・Ｈ・ノルシュタイン',
    desc: 'A 14-year-old genius who graduated university at 12. Calm, rational, and strategic — the opposite of Marcus.',
    stats: { hp: 100, ds: 90, de: 1, at: 8 },
    skill: { name: 'Insight!', cooldown: '3min', desc: 'Increases critical hit chance by 100% for 30 seconds.' },
    passives: [
      { name: 'Strategy of Thomas', effect: 'AT +5%', condition: 'Data' },
      { name: 'Strategy of Thomas', effect: 'HP +10%', condition: 'Virus' },
      { name: 'Strategy of Thomas', effect: 'Crit DMG +10%', condition: 'All' },
    ],
  },
  {
    id: 'yoshino', name: 'Yoshino Fujieda', jp: '藤枝 淑乃',
    desc: 'The oldest DATS member at 18. Acts as an older sister figure. Her catchphrase: "This is the worst".',
    stats: { hp: 90, ds: 100, de: 1, at: 8 },
    skill: { name: 'Protection', cooldown: '3min', desc: 'Nullify all damages from attacks or skills for 3 seconds.' },
    passives: [
      { name: 'Devotion of Yoshino', effect: 'AT +5%', condition: 'Data' },
      { name: 'Devotion of Yoshino', effect: 'HP +10%', condition: 'Vaccine' },
      { name: 'Devotion of Yoshino', effect: 'DE +10%', condition: 'All' },
    ],
  },
  {
    id: 'keenan', name: 'Keenan Crier', jp: '野口 イクト (Noguchi Ikuto)',
    desc: 'Raised in the Digital World by Frigimon and Merukimon. Wields a boomerang with great fighting skill.',
    stats: { hp: 80, ds: 90, de: 1, at: 10 },
    skill: { name: 'Shock', cooldown: '2min', desc: 'Critical hit damage increase by 100% for 30 seconds.' },
    passives: [
      { name: 'Rage of Keenan', effect: 'AT +5%', condition: 'Vaccine' },
      { name: 'Rage of Keenan', effect: 'AT +10%', condition: 'NoData' },
      { name: 'Rage of Keenan', effect: 'Crit DMG +10%', condition: 'All' },
    ],
  },
  {
    id: 'tai', name: 'Taichi "Tai" Kamiya', jp: '八神 太一 (Yagami Taichi)',
    desc: 'Happy-go-lucky leader who wears goggles. Bearer of the Crest of Courage. Acts on impulse but always saves the day.',
    stats: { hp: 90, ds: 80, de: 2, at: 10 },
    skill: { name: 'Berserker', cooldown: '3min', desc: "Increase the Digimon's AT by 50% for 30 seconds." },
    passives: [
      { name: 'Brave of Tai', effect: 'AT +5%', condition: 'Vaccine' },
      { name: 'Brave of Tai', effect: 'HP +10%', condition: 'Virus' },
      { name: 'Brave of Tai', effect: 'Crit DMG +10%', condition: 'All' },
    ],
  },
  {
    id: 'mimi', name: 'Mimi Tachikawa', jp: '太刀川 ミミ',
    desc: 'Sensitive, sweet and caring. Grew up in a wealthy family. Bearer of the Crest of Sincerity. Partnered with Palmon.',
    stats: { hp: 90, ds: 100, de: 1, at: 8 },
    skill: { name: 'Pray', cooldown: '4min 30s', desc: 'Digimon HP 40% recovered for all party members.' },
    passives: [
      { name: 'Purity of Mimi', effect: 'AT +5%', condition: 'Data' },
      { name: 'Purity of Mimi', effect: 'AT +10%', condition: 'NoData' },
      { name: 'Purity of Mimi', effect: 'HP +5% & DS +10%', condition: 'All' },
    ],
  },
  {
    id: 'tk', name: 'Takeru "T.K." Takaishi', jp: '高石 タケル',
    desc: "Matt's younger brother. Kind and pure personality. Bearer of the trait of Hope. Partnered with Patamon.",
    stats: { hp: 100, ds: 90, de: 1, at: 8 },
    skill: { name: 'Cheer', cooldown: '3min', desc: 'Recover fully HP and DS of your digimon.' },
    passives: [
      { name: 'Hope of T.K.', effect: 'AT +5%', condition: 'Vaccine' },
      { name: 'Hope of T.K.', effect: 'HP +10%', condition: 'Virus' },
      { name: 'Hope of T.K.', effect: 'DE +10%', condition: 'All' },
    ],
  },
  {
    id: 'matt', name: 'Yamato "Matt" Ishida', jp: '石田 ヤマト',
    desc: 'Secretive loner, good at harmonica. Bearer of the Crest of Friendship. Partner is Gabumon. Protective of T.K.',
    stats: { hp: 80, ds: 90, de: 1, at: 10 },
    skill: { name: 'Vigor', cooldown: '3min', desc: 'Skill damage 30% increased for 30 seconds.' },
    passives: [
      { name: 'Friendship of Matt', effect: 'AT +5%', condition: 'Virus' },
      { name: 'Friendship of Matt', effect: 'HP +10%', condition: 'Data' },
      { name: 'Friendship of Matt', effect: 'Skill DMG +10%', condition: 'All' },
    ],
  },
  {
    id: 'kari', name: 'Hikari "Kari" Kamiya', jp: '八神 ヒカリ',
    desc: "Tai's younger sister. Sweet, gentle and generous. Partnered with Gatomon. Bearer of the trait of Light.",
    stats: { hp: 90, ds: 100, de: 1, at: 8 },
    skill: { name: 'Encouragement', cooldown: '5min', desc: "Increase self and party HP and DS by 30% for 3 minutes." },
    passives: [
      { name: 'Light of Kari', effect: 'AT +5%', condition: 'Virus' },
      { name: 'Light of Kari', effect: 'HP +10%', condition: 'Vaccine' },
      { name: 'Light of Kari', effect: 'HP +5% & DS +10%', condition: 'All' },
    ],
  },
  {
    id: 'sora', name: 'Sora Takenouchi', jp: '武之内 空',
    desc: 'Tomboyish athlete, protective of the group. Bearer of the Crest of Love. Partner is Biyomon.',
    stats: { hp: 90, ds: 80, de: 2, at: 10 },
    skill: { name: 'Impregnableness', cooldown: '3min', desc: 'Decrease all damages by 30% for 13 seconds.' },
    passives: [
      { name: 'Love of Sora', effect: 'AT +5%', condition: 'Virus' },
      { name: 'Love of Sora', effect: 'HP +10%', condition: 'Vaccine' },
      { name: 'Love of Sora', effect: 'DE +10%', condition: 'All' },
    ],
  },
  {
    id: 'izzy', name: 'Koushiro "Izzy" Izumi', jp: '泉 光子郎',
    desc: 'Computer expert who always carries his laptop. Bearer of the Crest of Knowledge. Partner is Tentomon.',
    stats: { hp: 100, ds: 90, de: 1, at: 8 },
    skill: { name: 'Analysis', cooldown: '3min', desc: "Increase party Critical Damage by 20% for 30 seconds." },
    passives: [
      { name: "Izzy's Knowledge", effect: 'AT +5%', condition: 'Unknown' },
      { name: "Izzy's Knowledge", effect: 'HP +10%', condition: 'Virus' },
      { name: "Izzy's Knowledge", effect: 'Crit DMG +10%', condition: 'All' },
    ],
  },
  {
    id: 'joe', name: 'Jou "Joe" Kido', jp: '城戸 丈',
    desc: 'The oldest of the Chosen Children. High-strung but trustworthy. Family tradition of doctors. Partner is Gomamon.',
    stats: { hp: 70, ds: 90, de: 1, at: 10 },
    skill: { name: 'Emergency!', cooldown: '8min', desc: "Recovers all Digimon Leaders in party by 80% HP." },
    passives: [
      { name: "Joe's Sincerity", effect: 'AT +5%', condition: 'Virus' },
      { name: "Joe's Sincerity", effect: 'HP +10%', condition: 'Vaccine' },
      { name: "Joe's Sincerity", effect: 'HP +5% & DS +10%', condition: 'All' },
    ],
  },
  {
    id: 'takato', name: 'Takato Matsuki', jp: '松田 啓人',
    desc: 'Sweet, cheerful boy who loves drawing Digimon and playing the card game. Partner is Guilmon.',
    stats: { hp: 90, ds: 80, de: 2, at: 10 },
    skill: { name: 'Focus', cooldown: '4min', desc: "Increase party Skill Damage by 20% for 30 seconds." },
    passives: [
      { name: 'Warm Heart of Takato', effect: 'AT +5%', condition: 'Virus' },
      { name: 'Warm Heart of Takato', effect: 'HP +10%', condition: 'Data' },
      { name: 'Warm Heart of Takato', effect: 'Skill DMG +10%', condition: 'All' },
    ],
  },
  {
    id: 'henry', name: 'Henry Wong', jp: '李 健良 (Lee Jianliang)',
    desc: 'Half-Chinese, half-Japanese. Tai Chi student, calm and self-restrained. Partner is Terriermon.',
    stats: { hp: 80, ds: 90, de: 1, at: 10 },
    skill: { name: 'Guard', cooldown: '5min', desc: 'Reduce party damage received by 30% for 8 seconds.' },
    passives: [
      { name: "Henry's Sweetness", effect: 'AT +5%', condition: 'Vaccine' },
      { name: "Henry's Sweetness", effect: 'HP +10%', condition: 'Data' },
      { name: "Henry's Sweetness", effect: 'DE +10%', condition: 'All' },
    ],
  },
  {
    id: 'rika', name: 'Rika Nonaka', jp: '牧野 留姫 (Makino Ruki)',
    desc: 'Competitive genius who won 2nd place in Digimon card game. Nicknamed "Queen of Digimon". Partner is Renamon.',
    stats: { hp: 100, ds: 90, de: 1, at: 8 },
    skill: { name: 'Aim', cooldown: '5min', desc: "Increase party Digimon Hit Rate by 150% base for 3 minutes." },
    passives: [
      { name: "Rika's Coolness", effect: 'AT +5%', condition: 'Data' },
      { name: "Rika's Coolness", effect: 'HP +10%', condition: 'Virus' },
      { name: "Rika's Coolness", effect: 'HT +10%', condition: 'All' },
    ],
  },
  {
    id: 'ryo', name: 'Akiyama Ryo', jp: '秋山 遼',
    desc: 'Versatile Digimon King. Outstanding ability as both card game champion and tamer.',
    stats: { hp: 90, ds: 80, de: 2, at: 10 },
    skill: { name: 'Suppression', cooldown: '7min', desc: "AT +100% base and Skill DMG +60% for 10 seconds." },
    passives: [
      { name: 'Versatility of Ryo', effect: 'AT +5%', condition: 'Vaccine' },
      { name: 'Versatility of Ryo', effect: 'HP +10%', condition: 'Unknown' },
      { name: 'Versatility of Ryo', effect: 'Skill DMG +5% & Crit DMG +5%', condition: 'All' },
    ],
  },
  {
    id: 'jeri', name: 'Kato Jeri', jp: '加藤 樹莉 (Kato Juri)',
    desc: 'Innocent, cheerful girl who carries a hand puppet. Very interested in Digimon despite seeming indifferent.',
    stats: { hp: 90, ds: 100, de: 1, at: 8 },
    skill: { name: 'Naivety', cooldown: '3min', desc: "HP +15% base and DE +1000 for your Digimon." },
    passives: [
      { name: 'Destiny of Jeri', effect: 'AT +5%', condition: 'Vaccine' },
      { name: 'Destiny of Jeri', effect: 'HP +10%', condition: 'Virus' },
      { name: 'Destiny of Jeri', effect: 'DE +10%', condition: 'All' },
    ],
  },
  {
    id: 'hiro', name: 'Amanokawa Hiro', jp: '天ノ河 宙',
    desc: 'Dependable person who never turns down a request. Inquisitive and partnered with Gammamon.',
    stats: { hp: 90, ds: 100, de: 1, at: 8 },
    skill: { name: 'Saikyou', cooldown: '4min', desc: "Party Skill DMG +15% for 30s and heals 10% HP." },
    passives: [
      { name: "Hiro's Family", effect: 'AT +5%', condition: 'Virus' },
      { name: "Hiro's Family", effect: 'HP +10%', condition: 'Vaccine' },
      { name: "Hiro's Family", effect: 'Skill DMG +10%', condition: 'All' },
    ],
  },
  {
    id: 'kiyoshiro', name: 'Higashimitarai Kiyoshiro', jp: '東御手洗 清司郎',
    desc: 'Genius who graduated from an American grad school by skipping grades. Condescending but actually a coward.',
    stats: { hp: 100, ds: 90, de: 1, at: 8 },
    skill: { name: 'Integer Overflow', cooldown: '3min 20s', desc: "DMG Reduction +20% for 20s and heals 50% HP." },
    passives: [
      { name: "Kiyoshiro's Wisdom", effect: 'AT +5%', condition: 'Virus' },
      { name: "Kiyoshiro's Wisdom", effect: 'HP +10%', condition: 'Data' },
      { name: "Kiyoshiro's Wisdom", effect: 'DE +10%', condition: 'All' },
    ],
  },
  {
    id: 'ruli', name: 'Tsukiyono Ruli', jp: '月夜野 瑠璃',
    desc: 'Popular "Lirurun" social media account. Sociable, plays piano. Partnered with Angoramon.',
    stats: { hp: 90, ds: 80, de: 2, at: 10 },
    skill: { name: 'Concentration', cooldown: '3min', desc: "Own Digimon Hit Rate +200% for 3 minutes." },
    passives: [
      { name: "Ruli's Kindness", effect: 'AT +5%', condition: 'Vaccine' },
      { name: "Ruli's Kindness", effect: 'HP +10%', condition: 'Data' },
      { name: "Ruli's Kindness", effect: 'Crit DMG +10%', condition: 'All' },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// ENHANCED TAMER SKILLS
// ═══════════════════════════════════════════════════════════════
export const ENHANCED_SKILLS = [
  { name: 'Enhanced Berserker', desc: 'AT of Digimon Leader +80% for 30s.' },
  { name: 'Enhanced Vigor', desc: 'Skill DMG +50% for 30s.' },
  { name: 'Enhanced Cheer', desc: 'Recovers HP and DS by 100% immediately.' },
  { name: 'Enhanced Impregnableness', desc: 'All DMG taken reduced by 30% for 13s.' },
  { name: 'Enhanced Pray', desc: 'Recovers party HP and DS by 40% immediately.' },
  { name: 'Enhanced Protection', desc: 'Barrier absorbs all DMG for 3s.' },
  { name: 'Enhanced Encouragement', desc: "HP and DS +30% for 2 minutes." },
  { name: 'Enhanced Emergency!', desc: "Recovers all party Digimons by 80% HP." },
  { name: 'Enhanced Analysis', desc: 'Party Crit DMG +30% for 30s.' },
  { name: 'Reinforced Focus', desc: 'Party Skill DMG +30% for 30s.' },
  { name: 'Reinforced Guard', desc: 'Party DMG received -30% for 8s.' },
  { name: 'Reinforced Aim', desc: 'Party Hit Rate +200% base for 3min / 5min CD.' },
  { name: 'Reinforced Naivety', desc: 'HP +20% and DE +1500 for 3 minutes.' },
  { name: 'Reinforced Suppression', desc: 'AT +100% and Skill DMG +60% for 15s.' },
  { name: 'Enhanced Saikyou', desc: 'Party Skill DMG +25% for 30s, heals 15% HP.' },
  { name: 'Enhanced Integer Overflow', desc: 'DMG Reduction +25% for 20s, heals 50% HP.' },
  { name: 'Enhanced Concentration', desc: 'Own Digimon Hit Rate +225% for 3min.' },
];

// ═══════════════════════════════════════════════════════════════
// ATTRIBUTE COLORS
// ═══════════════════════════════════════════════════════════════
export const ATTR_COLORS = {
  Vaccine: { bg: 'rgba(16,185,129,0.15)', color: '#10b981' },
  Data: { bg: 'rgba(0,180,216,0.15)', color: '#00b4d8' },
  Virus: { bg: 'rgba(239,68,68,0.15)', color: '#ef4444' },
  Unknown: { bg: 'rgba(245,158,11,0.15)', color: '#f59e0b' },
  NoData: { bg: 'rgba(168,85,247,0.15)', color: '#a855f7' },
  All: { bg: 'rgba(255,255,255,0.08)', color: '#e2e8f0' },
};
