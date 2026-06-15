// ═══════════════════════════════════════════════════════════════
// DMW Game Guide — All game systems consolidated
// ═══════════════════════════════════════════════════════════════

export const GAME_GUIDES = {
  hatching: {
    icon: '🥚', title: 'Hatching',
    desc: 'Processo de chocar DigiEggs para obter Mercenary Digimon.',
    sections: [
      { title: 'O que você precisa', items: ['Muita paciência e sorte', 'Mercenary DigiEggs', 'Low Class Data (bastante!)'] },
      { title: 'Como obter DigiEggs', content: 'Derrote Digimons selvagens que podem dropar o Mercenary DigiEgg do Digimon desejado. Exemplo: Para Drimogemon, lute contra Drimogemon, Digmon, HiAndromon ou Giromon. O preço de compra varia entre 25M e 40M.' },
      { title: 'Como obter Low Class Data', content: 'Lute contra Digimons selvagens para obter Scannable DigiEggs (custo de scan 125 Bits). Escaneie via PawnChessmon (Black) ou Miki Kurosaki no DATS Center.' },
      { title: 'Como chocar', content: 'Vá ao Incubator (DATS Center, Oil Refinery-2/3, Snowstorm Village ou Village of the Beginning). Clique "Create Mercenary" → "Register" → "Data Input". Fase com sucesso (azul) = progresso. Falha (vermelho) = perde data. Meio (cima) = egg destruído.' },
      { title: 'Fases de Hatch', items: [
        '3/5 — Mínimo para chocar (fraco, NÃO recomendado)',
        '4/5 — Bom, Digimon maior',
        '5/5 — Máximo, necessário para Transcendence',
      ]},
      { title: 'Dicas', items: [
        'Use Hatch Backup para prevenir egg de quebrar',
        'Somente HP, DS, AT, CT e DE são afetados pelo tamanho',
        'Somente 5/5 pode usar Transcendence System',
      ]},
    ],
  },

  digiclone: {
    icon: '🧬', title: 'DigiClone',
    desc: 'Sistema de reforço de stats do Digimon via mini-game de cartas.',
    sections: [
      { title: 'Stats clonáveis', items: ['Attack (AT)', 'Critical (CT)', 'Block (BL)', 'Evasion (EV)', 'Health (HP) — só após Transcendence'] },
      { title: 'Ranks de DigiClone', items: [
        'DigiClone [D] — Cash Shop, Kamemon, MC Lv1-3',
        'DigiClone [C] — Cash Shop, Kamemon, MC Lv4',
        'DigiClone [B] — Cash Shop, Kamemon, MC Lv5-6',
        'DigiClone [A] — Cash Shop, Kamemon, Maze F3, MC Lv7',
        'DigiClone [S] — Cash Shop, Kamemon, High Rank MC Lv3-4',
      ]},
      { title: 'Variantes', items: [
        'Reinforced DigiClone [D-S] — Kamemon, Arena Voucher',
        'Mega DigiClone [D-S] — Cash Shop, Tokyo-Odaiba, Dungeons',
        'Mega Reinforced DigiClone [D-S] — Cash Shop, Dungeons',
      ]},
      { title: 'Nível máximo', content: 'As 5 opções podem ser maximizadas até Level 15.' },
      { title: 'Backup Disk', content: 'Previne a perda de nível ao falhar. Obtido no Cash Shop, Arena Voucher, Alphamon, Mugendramon, Log-in Time e dungeons (Kaiser Lab, Infinite Mountain, Crack of Devimon).' },
      { title: 'Reset Capsule', items: [
        'Reset Capsule — Diminui o stat selecionado em 1 nível',
        'Reset Capsule A — Reseta o stat para 0',
      ]},
      { title: 'Notas por Stat', items: [
        'AT: Aumenta ATK e skill damage. ~43% skill DMG com perfect clone lv15',
        'BL: Reduz damage de ataque normal. Útil em dungeons de alto nível e Arena',
        'CT: Aumenta chance de critical hit (NÃO confundir com critical damage)',
        'EV: Chance de evitar ataque normal completamente',
        'HP: Aumenta Max HP (só após Transcendence)',
      ]},
    ],
  },

  burstMode: {
    icon: '🔥', title: 'Burst Mode',
    desc: 'Evolução adicional igual ou superior a Mega. Nem todos os Digimons possuem.',
    sections: [
      { title: 'Requisitos', items: [
        'Digimon mercenário deve ser no mínimo level 65 (ou 70)',
        'Partner Digimon precisam ser lvl 71 + quests do BanchouLeomon',
        'Ter o item necessário no inventário',
      ]},
      { title: 'Accelerators', items: [
        '3 a 5 Accelerators usados a cada evolução BM',
        'Obtidos do Vending Machine NPC ou drops em Maze, D-Terminal-B2, Ice Wall',
        'Exceções (sem accelerator): UlforceVeedramon FM, PrinceMamemon, Megidramon, Gankoomon, Jesmon',
      ]},
      { title: 'Como obter items de BM', items: [
        'Cube of Overload',
        'BM Random Box',
        'Arena Voucher',
        'Quests específicas (ex: Gankoomon)',
      ]},
      { title: 'Tipos de evolução extra', items: [
        '🟢 Side Mega — Evolução lateral de nível Mega',
        '🔴 Burst Mode — Evolução BM clássica',
        '⚫ Black Gear Evolution — Age como BM, recebe 25% boost do Extreme Evolution',
        '🔵 Hybrid — NÃO recebe boost de Extreme Evolution',
      ]},
    ],
  },

  transcendence: {
    icon: '⭐', title: 'Transcendence System',
    desc: 'Sistema "6/6" para melhorar o potencial do Digimon ao máximo.',
    sections: [
      { title: 'Benefícios', items: [
        'Tamanho máximo: 130% → 140%',
        'HP disponível no DigiClone',
      ]},
      { title: 'Requisitos do Digimon', items: [
        'Hatch level 5/5 (Variant e Spirit são exceção)',
        'Tamanho 125% ou maior',
        'Level 100 ou maior',
      ]},
      { title: 'Como Transcender', items: [
        'Acesse via Digimon Archive → aba Transcendence',
        'Sacrifique Digimons para encher a barra de EXP até 100%',
        'Até 10 Digimons por vez',
        '1 Transcendence ConvertChip por Digimon sacrificado',
        'Custo final: 5T',
      ]},
      { title: 'Charge Options', items: [
        'Regular Charge — Usa Low Class ConvertChip',
        'Hyper Charge — Usa Mid Class ConvertChip (+60% EXP bonus)',
      ]},
      { title: 'EXP de Sacrifício', items: [
        '4/5 Digimon = 1/4 do EXP de 5/5',
        '3/5 Digimon = 1/40 do EXP de 5/5',
        'Mesma espécie = 3x mais EXP',
        'Chance aleatória de EXP duplo',
      ]},
      { title: 'Raremon (Especial)', items: [
        '3/5 Raremon: 2.24% (Regular) / 3.58% (Hyper)',
        '4/5 Raremon: 16.82% (Regular) / 26.91% (Hyper)',
        '5/5 Raremon: 44.85% (Regular) / 71.76% (Hyper)',
      ]},
      { title: 'Método mais comum', content: '5 Digimons level 70 com clones AT,CT,BL,EV a nível 6 usando Mid Class ConvertChip. Ou: 2x Raremon 5/5 para encher a barra.' },
      { title: 'Frutas pós-Transcendence', items: [
        'Fruit of Yggdrasil — Tamanho aleatório 125%~140%',
        'Fruit of Homeostasis — Tamanho aleatório 128%~140%',
      ]},
    ],
  },

  jogress: {
    icon: '🔗', title: 'Jogress',
    desc: 'DNA Digivolution — fusão de 2 Digimons em 1 mais forte.',
    sections: [
      { title: 'Como funciona', items: [
        'Requer 2 Digimons específicos no seu inventário',
        'Um é "base" e o outro é "material"',
        'O material é consumido no processo',
        'O resultado é um Digimon Jogress mais poderoso',
      ]},
      { title: 'Exemplos populares', items: [
        'Paildramon + Dinobeemon → Imperialdramon (Dragon Mode)',
        'WarGreymon + MetalGarurumon → Omnimon',
        'Silphymon + Shakkoumon → Mastemon',
      ]},
    ],
  },

  xros: {
    icon: '✖️', title: 'Xros System',
    desc: 'DigiXros permite combinar Digimons para criar formas especiais.',
    sections: [
      { title: 'Como funciona', items: [
        'Diferente de Jogress, Xros usa múltiplos Digimons',
        'Digimons Xros podem ser combinados temporariamente',
        'Requer itens específicos de Xros',
      ]},
    ],
  },

  riding: {
    icon: '🏇', title: 'Riding Mode',
    desc: 'Monte no seu Digimon para se mover mais rápido pelo mapa.',
    sections: [
      { title: 'Como funciona', items: [
        'Nem todos os Digimons suportam Riding',
        'Pressione R para ativar (se disponível)',
        'Aumenta a velocidade de movimento',
        'Não pode atacar enquanto montado',
      ]},
    ],
  },

  digimonSizes: {
    icon: '📏', title: 'Digimon Sizes',
    desc: 'O tamanho afeta diretamente os stats do Digimon.',
    sections: [
      { title: 'Escala', items: [
        '3/5 hatch = tamanho menor',
        '4/5 hatch = tamanho médio',
        '5/5 hatch = maior (até 130%, ou 140% após Transcendence)',
      ]},
      { title: 'Stats afetados pelo tamanho', items: [
        'HP (Health Points)', 'DS (Digi-Soul)',
        'AT (Attack)', 'CT (Critical Rate)', 'DE (Defense)',
      ]},
      { title: 'Frutas para mudar tamanho', items: [
        'Mystery Fruit — Muda tamanho aleatoriamente',
        'Fruit of Yggdrasil — 125%~140% (pós-Transcendence)',
        'Fruit of Homeostasis — 128%~140% (pós-Transcendence)',
      ]},
    ],
  },

  rankSystem: {
    icon: '🏅', title: 'Rank System',
    desc: 'Classificação de poder dos Digimon por Ranks.',
    sections: [
      { title: 'Ranks (do mais fraco ao mais forte)', items: [
        'A — Digimon básicos',
        'S — Mais fortes',
        'S+ — Superior a S',
        'SS — Muito forte',
        'SS+ — Quase elite',
        'SSS — Elite',
        'SSS+ — Top tier',
        'P — O mais forte (Premium)',
      ]},
      { title: 'Classes', items: [
        'SK — Skill',
        'AA — All-around Attack',
        'HB — Hit & Block',
        'SUP — Support',
        'TA — Tank',
      ]},
    ],
  },

  dataExchange: {
    icon: '🔄', title: 'Data Exchange',
    desc: 'Troque o tamanho/hatch entre dois Digimons da mesma linha.',
    sections: [
      { title: 'Como funciona', items: [
        'Requer item Data Exchange',
        'Ambos devem ser da mesma linha evolutiva',
        'Troca hatch level (não apenas a %) entre eles',
        'Útil para dar 5/5 a um Digimon que já está lvl 100',
      ]},
    ],
  },

  spiritSystem: {
    icon: '👻', title: 'Spirit System',
    desc: 'Evoluções de Spirit (Digimon Frontier) — Human e Beast spirits.',
    sections: [
      { title: 'Tipos', items: [
        'Human Spirit — Forma humanoide',
        'Beast Spirit — Forma bestial',
        'Advanced Spirit — Fusão Human+Beast',
        'Spirit Digimon são exceção ao requisito de 5/5 para Transcendence',
      ]},
    ],
  },

  variant: {
    icon: '🎭', title: 'Variant',
    desc: 'Digimons com linhas evolutivas alternativas ou especiais.',
    sections: [
      { title: 'Info', items: [
        'Variant Digimon possuem evoluções diferentes da linha padrão',
        'São exceção ao requisito de 5/5 para Transcendence',
        'Alguns são obtidos via métodos especiais ou quests',
      ]},
    ],
  },

  xAntibody: {
    icon: '💉', title: 'X-Antibody System',
    desc: 'Digimons com X-Antibody possuem formas evoluídas especiais.',
    sections: [
      { title: 'Como funciona', items: [
        'X-Antibody Factor é aplicado ao Digimon',
        'Desbloqueia forma X (geralmente mais forte)',
        'Obtido via X-Antibody Exchange NPC',
        'Nem todos os Digimons suportam X-Antibody',
      ]},
    ],
  },

  memorySkills: {
    icon: '🧠', title: 'Memory Skills',
    desc: 'Habilidades passivas adicionais para seus Digimons.',
    sections: [
      { title: 'Info', items: [
        'Memory Skills são passivas extras equipáveis',
        'Podem dar boost em AT, DE, HP, etc.',
        'Obtidas via gameplay específico',
      ]},
    ],
  },

  armorDigivolution: {
    icon: '🛡️', title: 'Armor Digivolution',
    desc: 'Evolução com Digi-Eggs especiais (Adventure 02).',
    sections: [
      { title: 'Como funciona', items: [
        'Usa Digi-Eggs (Courage, Friendship, etc.) para evoluir',
        'Digimons como Veemon, Hawkmon, Armadillomon podem usar',
        'Resulta em formas Armor únicas',
      ]},
    ],
  },

  digimonAura: {
    icon: '✨', title: 'Digimon Aura',
    desc: 'Efeitos visuais especiais aplicados ao Digimon.',
    sections: [
      { title: 'Info', items: [
        'Auras são efeitos visuais que aparecem ao redor do Digimon',
        'Podem ser obtidas via True Digivice, D-Ark ou eventos',
        'Puramente estéticas em muitos casos, mas algumas dão bônus',
      ]},
    ],
  },

  aoeSkills: {
    icon: '💥', title: 'Area of Effect Skills',
    desc: 'Skills que afetam múltiplos alvos ao mesmo tempo.',
    sections: [
      { title: 'Info', items: [
        'AoE skills atingem vários inimigos na área',
        'Essenciais para farm e dungeons',
        'Nem todos os Digimons possuem AoE',
        'Verifique na página do Digimon se possui skill AoE',
      ]},
    ],
  },

  skillDigiCode: {
    icon: '📜', title: 'Skill DigiCode',
    desc: 'Sistema de upgrade de skills dos Digimons.',
    sections: [
      { title: 'Info', items: [
        'Skill DigiCode é usado para melhorar skills existentes',
        'Pode aumentar dano, reduzir cooldown ou adicionar efeitos',
        'Obtido via drops e NPCs específicos',
      ]},
    ],
  },
};

// ═══════════════════════════════════════════════════════════════
// GAME SYSTEMS (Chat, Guild, Deck, etc.)
// ═══════════════════════════════════════════════════════════════

export const GAME_SYSTEMS = {
  chatCommands: {
    icon: '💬', title: 'Chat Commands',
    desc: 'Comandos do chat in-game.',
    sections: [
      { title: 'Comandos básicos', items: [
        '/shout [msg] — Mensagem para todos no mapa',
        '/whisper [nome] [msg] — Mensagem privada',
        '/guild [msg] — Mensagem para guild',
        '/party [msg] — Mensagem para party',
        '/trade [nome] — Solicitar trade',
      ]},
    ],
  },

  guild: {
    icon: '🏰', title: 'Guild',
    desc: 'Sistema de guildas para jogadores.',
    sections: [
      { title: 'Info', items: [
        'Crie ou entre em uma Guild',
        'Guild pode ter ranks e permissões',
        'Guild battles e eventos especiais',
        'Requer nível mínimo para criar',
      ]},
    ],
  },

  deckSystem: {
    icon: '🃏', title: 'Deck System',
    desc: 'Buffs passivos obtidos coletando Digimons específicos.',
    sections: [
      { title: 'Como funciona', items: [
        'Complete "Decks" registrando Digimons específicos',
        'Cada deck completo dá buffs passivos',
        'Buffs stackam entre decks diferentes',
      ]},
    ],
  },

  rebornSystem: {
    icon: '♻️', title: 'Reborn System',
    desc: 'Sistema de Reborn para resetar e fortalecer Digimon.',
    sections: [
      { title: 'Info', items: [
        'Permite resetar o level do Digimon',
        'Ao renascer, o Digimon ganha bônus permanentes',
        'Múltiplas "vidas" possíveis',
      ]},
    ],
  },

  unionSystem: {
    icon: '🤝', title: 'Union System',
    desc: 'Sistema de União entre jogadores.',
    sections: [
      { title: 'Info', items: [
        'Uniões são alianças maiores entre guilds',
        'Eventos e benefícios exclusivos de Union',
      ]},
    ],
  },

  passiveBuffs: {
    icon: '📈', title: 'Passive Buff System',
    desc: 'Buffs passivos que melhoram stats automaticamente.',
    sections: [
      { title: 'Info', items: [
        'Buffs passivos são obtidos via Deck, Titles, Seal Master',
        'Aplicam automaticamente em combate',
        'Verificar requisitos para cada buff',
      ]},
    ],
  },

  debuffSystem: {
    icon: '📉', title: 'Debuff System',
    desc: 'Status negativos que podem afetar Digimon.',
    sections: [
      { title: 'Debuffs comuns', items: [
        'Stun — Paralisa temporariamente',
        'Poison — Dano contínuo (DoT)',
        'Slow — Reduz velocidade de movimento',
        'Confusion — Ataque errado de alvo',
      ]},
    ],
  },

  milestoneSystem: {
    icon: '🎯', title: 'Milestone System',
    desc: 'Sistema de marcos de progresso com recompensas.',
    sections: [
      { title: 'Info', items: [
        'Complete milestones para ganhar recompensas',
        'Milestones incluem level, quests, achievements',
        'Rewards incluem items, bits e mais',
      ]},
    ],
  },

  tourSystem: {
    icon: '🗺️', title: 'Tour System',
    desc: 'Sistema de tours guiados pelo mundo do jogo.',
    sections: [
      { title: 'Info', items: [
        'Complete tours para ganhar recompensas',
        'Tours guiam por mapas e NPCs importantes',
        'Ideal para iniciantes',
      ]},
    ],
  },

  sealMaster: {
    icon: '🔮', title: 'Seal Master',
    desc: 'Seals que fornecem buffs passivos poderosos.',
    sections: [
      { title: 'Info', items: [
        'Seals são obtidos derrotando Digimons específicos',
        'Cada Seal completo dá buffs permanentes',
        'Sistema end-game muito importante',
      ]},
    ],
  },

  instanceDungeons: {
    icon: '🏔️', title: 'Instance Dungeons',
    desc: 'Dungeons instanciadas com drops exclusivos.',
    sections: [
      { title: 'Dungeons conhecidas', items: [
        "Kaiser's Laboratory — Chimairamon drops",
        "Infinite Mountain Dungeon — Mega/Giga Box",
        "Infinite Mountain 2.0 — Heroic/Satanic Box",
        "Crack of Devimon (Normal/Hard) — Holy Artifacts",
        "Gizumon's Dungeon — Transcendence Chips (Savers)",
        'Digimon Maze F1-F3 — DigiClone A, drops variados',
        'D-Terminal Dungeon B2 — Accelerators',
      ]},
    ],
  },

  colosseum: {
    icon: '⚔️', title: 'Colosseum',
    desc: 'Arena PvE com ondas de inimigos.',
    sections: [
      { title: 'Info', items: [
        'Enfrente ondas progressivas de Digimons',
        'Recompensas por progressão',
        'Teste o poder do seu Digimon',
      ]},
    ],
  },

  expMap: {
    icon: '📊', title: 'EXP Map',
    desc: 'Mapas dedicados para ganhar experiência rapidamente.',
    sections: [
      { title: 'Info', items: [
        'Mapas com Digimons que dão muito EXP',
        'Ideal para levar Digimons de low level ao 100+',
        'Tempo limitado em algumas áreas',
      ]},
    ],
  },

  monsterCard: {
    icon: '🃏', title: 'Monster Card',
    desc: 'Cartas com drops aleatórios obtidas de Digimons derrotados.',
    sections: [
      { title: 'Níveis', items: [
        'MC Lv1-3 — DigiClone D, items básicos',
        'MC Lv4 — DigiClone C',
        'MC Lv5-6 — DigiClone B',
        'MC Lv7 — DigiClone A',
        'High Rank MC — DigiClone S, Chipsets, items raros',
      ]},
    ],
  },

  shadowLabyrinth: {
    icon: '🌑', title: 'Shadow Labyrinth',
    desc: 'Dungeon sombria com desafios únicos.',
    sections: [
      { title: 'Info', items: [
        'Dungeon end-game com drops exclusivos',
        'Difícil, requer Digimon bem equipado',
        'Drops incluem items raros e materiais de craft',
      ]},
    ],
  },

  loginRewards: {
    icon: '🎁', title: 'Log-in Time Rewards',
    desc: 'Recompensas por tempo logado.',
    sections: [
      { title: 'Info', items: [
        'Receba rewards por ficar online',
        'Rewards acumulam ao longo do tempo',
        'Incluem Data, DigiClone, Backup Disk e mais',
      ]},
    ],
  },
};

// NPCs
export const SPECIAL_NPCS = [
  { name: 'Digitamamon', icon: '🥚', role: 'Item Make / Arena Voucher Exchange', location: 'DATS Center', desc: 'Crafta items, troca Arena Vouchers, upgrade chipsets' },
  { name: 'Taichi', icon: '👦', role: 'NPC de Quests', location: 'Vários', desc: 'Quest NPC para evoluções e eventos' },
  { name: 'Gotsumon', icon: '🪨', role: 'Exchange NPC', location: 'DATS Center', desc: 'Troca de materiais e items' },
  { name: 'Nanomon', icon: '🔧', role: 'Item Craft / Attribute Upgrade', location: 'DATS Center', desc: 'Upgrade de Attribute Ranks, craft de ConvertChips' },
  { name: 'Alphamon', icon: '⚔️', role: 'Exchange / Drop Boss', location: 'Vários', desc: 'NPC de troca e boss com drops de Backup Disk' },
  { name: 'Takato', icon: '🎴', role: 'NPC de Quest', location: 'Vários', desc: 'Quests relacionadas a Guilmon line' },
  { name: 'Kamemon', icon: '🐢', role: 'Digicore Merchant', location: 'DATS Center', desc: 'Vende DigiClone D-S por Digicores' },
  { name: 'Mary', icon: '🏟️', role: 'Arena Voucher Exchange', location: 'DATS Center', desc: 'Troca Arena Vouchers por items valiosos' },
  { name: 'Akihiro Kurata', icon: '💎', role: 'Chipset Store', location: 'DATS Center', desc: 'Vende ChipSet R de todas as famílias' },
  { name: 'Doruphin', icon: '🛡️', role: 'Equipment Management', location: 'DATS Center', desc: 'Analisa e faz merge de Equipment Attributes' },
  { name: 'Richard Sampson', icon: '👔', role: 'DATS Leader', location: 'DATS Center', desc: 'Entrada para DATS Center interior (DigiClone room)' },
];

// TRANSCENDENCE EXP TABLE
export const TRANS_EXP_TABLE = {
  headers: ['Level', 'Clone 0', 'Clone 6', 'Clone 12', 'Clone 18', 'Clone 24', 'Clone 30', 'Clone 36', 'Clone 42', 'Clone 48', 'Clone 54', 'Clone 60'],
  rows: [
    ['Lv1', 7.17, 8.03, 8.89, 9.74, 10.6, 11.46, 12.31, 13.17, 14.03, 14.89, 15.74],
    ['Lv10', 7.43, 8.29, 9.14, 10, 10.86, 11.71, 12.57, 13.43, 14.29, 15.14, 16],
    ['Lv20', 7.71, 8.57, 9.43, 10.29, 11.14, 12, 12.86, 13.71, 14.57, 15.43, 16.29],
    ['Lv30', 8, 8.86, 9.71, 10.57, 11.43, 12.29, 13.14, 14, 14.86, 15.71, 16.57],
    ['Lv40', 8.29, 9.14, 10, 10.86, 11.71, 12.57, 13.43, 14.29, 15.14, 16, 16.86],
    ['Lv50', 8.57, 9.43, 10.29, 11.14, 12, 12.86, 13.71, 14.57, 15.43, 16.29, 17.14],
    ['Lv60', 8.86, 9.71, 10.57, 11.43, 12.29, 13.14, 14, 14.86, 15.71, 16.57, 17.43],
    ['Lv70', 9.14, 10, 10.86, 11.71, 12.57, 13.43, 14.29, 15.14, 16, 16.86, 17.71],
    ['Lv80', 9.43, 10.29, 11.14, 12, 12.86, 13.71, 14.57, 15.43, 16.29, 17.14, 18],
    ['Lv90', 9.71, 10.57, 11.43, 12.29, 13.14, 14, 14.86, 15.71, 16.57, 17.43, 18.29],
    ['Lv99', 9.97, 10.83, 11.69, 12.54, 13.4, 14.26, 15.11, 15.97, 16.83, 17.68, 18.54],
    ['Lv100', 10, 10.86, 11.71, 12.57, 13.43, 14.29, 15.14, 16, 16.86, 17.71, 18.57],
    ['Lv110', 10.29, 11.14, 12, 12.86, 13.71, 14.57, 15.43, 16.29, 17.14, 18, 18.86],
    ['Lv120', 10.57, 11.43, 12.29, 13.14, 14, 14.86, 15.71, 16.57, 17.43, 18.29, 19.14],
  ],
};
