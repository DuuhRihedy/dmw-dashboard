export const CLASS_BUILDS = {
  AA: {
    id: 'aa',
    name: 'Auto Attack',
    icon: '⚔️',
    color: '#ef4444', // red
    digimons: [
      { label: 'Iniciais', value: 'Lalamon ou Agumon' },
      { label: 'Jump', value: 'Medieval Chaos Gallantmon, Lordknightmon X ou Alphamon Ouryuken X' },
      { label: 'Opções Free / Baratas', value: 'Sussanomon, Puppetmon Shin, Ulforceveedramon Future Mode (SUPORTE) e Piedmon Shin (SUPORTE)' },
      { label: 'SSS+ Gratuitos', value: 'BloomLordmon, DarknessBagramon, Shoutmon X7' },
    ],
    decks: [
      'Fallen and Chosen Megas',
      'Our Final Evolution',
      'The Forgotten Crown',
      'Dimensional Pantheon',
      'Vaccine Fighter',
      'Judicium Noctis',
      'Praelium Divinus',
      'Corrupted Power (Ou pular para Strong Bonds)',
      'Power of darkness'
    ],
    equipment: [
      { label: 'Títulos', icon: '🏆', value: 'Master of the Metal Empire > 4/5th anniversary > Ultimate Slash' },
      { label: 'Roupas', icon: '👕', value: 'Warrior Shining + Rare Coin Cape + Sparrowmon\'s Shoes ou Satan Shoes' },
      { label: 'DigiAura', icon: '✨', value: 'Zhuqiaomon Aura, Angel Aura, Satanic DigiAura' },
      { label: 'Goggles', icon: '🥽', value: 'AT / AT' },
      { label: 'KeyRing', icon: '🔑', value: 'AA' },
      { label: 'Chipset', icon: '💾', value: 'HP [All Family] > HP/HP > AT/HP' },
      { label: 'Digivice', icon: '📱', value: 'D-ark > Rage D-Ark > Uncontrollable Rage D-ark' },
    ],
    seals: ['HP', 'HT', 'AT', 'DS', 'BL', 'DE', 'CT', 'SK', 'EV'],
    accessories: [
      { name: 'Anel Holy Beasts / Fang', stats: 'Basic Attribute, Basic Attribute, Attack, Attack' },
      { name: 'Anel Marine', stats: 'Basic Attribute, Basic Attribute, Critical Damage, Attack, Attack' },
      { name: 'Colar Holy Beasts / Fang', stats: 'Basic Attribute, Basic Attribute, Attack Speed, Attack' },
      { name: 'Colar Puppet', stats: 'Basic Attribute, Basic Attribute, Attack Speed, Attack, HP' },
      { name: 'Brinco Holy Beasts / Fang', stats: 'Basic Attribute, Basic Attribute, Critical Damage, Critical Damage' },
      { name: 'Brinco Metallic', stats: 'Basic Attribute, Basic Attribute, Attack, Critical Damage, HP' },
      { name: 'Bracelete Royal X-Knight / Yggdrasil', stats: 'Critical Damage, Critical Damage, Attack, Hit Rate, Hit Rate' },
      { name: 'Bracelete Cruel Clown', stats: 'Critical Damage, Attack, Hit Rate, HP, HP' },
    ]
  },
  SK: {
    id: 'sk',
    name: 'Skill Based',
    icon: '🪄',
    color: '#3b82f6', // blue
    digimons: [
      { label: 'Iniciais', value: 'Gaomon ou Falcomon' },
      { label: 'Jump', value: 'Craniummon X, Dukemon Shin, Jesmon X' },
      { label: 'Opções Free / Baratas', value: 'Ogudomon, Mugendramon Shin, Ulforceveedramon Future Mode (SUPORTE) e Piedmon Shin (SUPORTE)' },
      { label: 'SSS+ Gratuitos', value: 'Susanoomon (Shin), Fanglongmon (Shin), Omegamon Alter-B' },
    ],
    decks: [
      'Digi Soul Unleashed',
      'Cosmic Spirit Evolution',
      'Axiom Trinity',
      'Ouroboros',
      'Celestfracture',
      'Latent Power',
      'Royal Knight X',
      'Legendary Core'
    ],
    equipment: [
      { label: 'Títulos', icon: '🏆', value: 'Master of the Marionette > 4/5th anniversary > Ultimate Power' },
      { label: 'Roupas', icon: '👕', value: 'Night Sky + Rare Coin Top' },
      { label: 'DigiAura', icon: '✨', value: 'Angel Aura, Zhuqiaomon Aura, Satanic DigiAura' },
      { label: 'Goggles', icon: '🥽', value: 'SK / SK' },
      { label: 'KeyRing', icon: '🔑', value: 'SK' },
      { label: 'Chipset', icon: '💾', value: 'HP [All Family] > HP [VB] (com todos SSS+) > HP/SK = SK/HP > SK/SK' },
      { label: 'Digivice', icon: '📱', value: 'Royal Digivice > True Vice > Advanced True Vice (Nota: Precisa de 3 True Vices e 2 Advanced True Vice com os atributos certos)' },
    ],
    seals: ['HP', 'SK', 'DS', 'BL', 'DE', 'AT', 'EV', 'HT', 'CT'],
    accessories: [
      { name: 'Anel Holy Beasts / Fang', stats: 'Skill (Flat), Skill (Flat), Basic Attribute, Basic Attribute' },
      { name: 'Anel Marine', stats: 'Skill (Flat), Skill (%), Skill (%), Basic Attribute, Basic Attribute' },
      { name: 'Colar Holy Beasts / Fang', stats: 'HP, Skill (Flat), Basic Attribute, Basic Attribute' },
      { name: 'Colar Puppet', stats: 'Skill (%), Skill (%), Basic Attribute, Basic Attribute, HP' },
      { name: 'Brinco Holy Beasts / Fang', stats: 'Skill (Flat), Skill (Flat), Basic Attribute, HP ou Basic Attribute' },
      { name: 'Brinco Metallic', stats: 'Skill (%), Skill (%), Basic Attribute, Basic Attribute, HP' },
      { name: 'Bracelete Royal X-Knight / Yggdrasil', stats: 'Skill (Flat), Skill (Flat), HP, HP, Block' },
      { name: 'Bracelete Cruel Clown', stats: 'Skill (Flat), Skill (%), Skill (%), HP, HP ou Block' },
    ]
  },
  TANK: {
    id: 'tank',
    name: 'Tank',
    icon: '🛡️',
    color: '#10b981', // green
    digimons: [
      { label: 'Iniciais', value: 'Lalamon ou Agumon' },
      { label: 'Jump', value: 'IcyMagnamon X, Amphimon, Barbamon X' },
      { label: 'Opções Free / Baratas', value: 'Sussanomon Cosmic, Housemon Shoutmon DX, MetalSeadramon Shin (não recomendado por ser EV sem invul.)' },
      { label: 'SSS+ Gratuitos', value: 'Ainda não possui SSS+ específicos, foque na ordem de Decks' },
    ],
    decks: [
      'Rookie Ramparts',
      'Brick Wall',
      'Aegis Vortex',
      'The Sovereign Bulwark',
      'The Sovereign Bulwark: Abyss',
      'The Sovereign Bulwark: Iron Requiem',
      'The Sovereign Bulwark: Fortis Magna',
      'The Sovereign Bulwark: Crown',
      'The Sovereign Bulwark: Royal Crown'
    ],
    equipment: [
      { label: 'Títulos', icon: '🏆', value: 'Master of the Ocean > Defender of Winter 23/24/25 > Holy Knight\'s Disciple' },
      { label: 'Roupas', icon: '👕', value: 'Digital Hazard + Satan Shoes' },
      { label: 'DigiAura', icon: '✨', value: 'Satanic DigiAura, Reinforced DigiAura Y' },
      { label: 'Goggles', icon: '🥽', value: 'DE / DE' },
      { label: 'KeyRing', icon: '🔑', value: 'TANK' },
      { label: 'Chipset', icon: '💾', value: 'HP [All Family] > HP > HP/DE' },
      { label: 'Digivice', icon: '📱', value: 'D-ark > Digizoid D-Ark > ChromeDigizoid D-ark' },
    ],
    seals: ['HP', 'BL', 'DE', 'DS', 'EV', 'SK=AA=HT=CT'],
    accessories: [
      { name: 'Anel Holy Beasts / Fang', stats: 'Defense, Defense, HP, HP, Avoid' },
      { name: 'Anel Marine', stats: 'Defense (%), Defense (%), HP, HP, Avoid ou Defense' },
      { name: 'Colar Holy Beasts / Fang', stats: 'Defense, Defense, HP, HP, HP' },
      { name: 'Colar Puppet', stats: 'Defense (%), Defense (%), Block, HP (%), HP (%) ou HP ou Defense' },
      { name: 'Brinco Holy Beasts / Fang', stats: 'Defense, Defense, Block, HP, HP' },
      { name: 'Brinco Metallic', stats: 'Defense (%), Defense (%), Block, HP (%), HP (%)' },
      { name: 'Bracelete Royal X-Knight', stats: 'HP, HP, Defense, Defense, Avoid' },
      { name: 'Bracelete Yggdrasil', stats: 'Block, HP, HP, Defense, Defense' },
      { name: 'Bracelete Cruel Clown', stats: 'Defense (%), Defense (%), Block, HP (%), HP (%)' },
    ]
  }
};
