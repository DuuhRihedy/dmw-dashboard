export const NPC_CRAFTING = [
  {
    id: "digitamamon",
    npc: "Digitamamon (Item Make)",
    description: "Item Make System consists in bringing specific materials to Digitamamon on the eastern side of DATS Center, who will immediately exchange them for certain items.",
    categories: [
      {
        name: "Miscellaneous - Digimon Reinforcement",
        recipes: [
          {
            product: "DigiClone Cube",
            materials: ["DigiClone [S] x1", "DigiClone [A] x1", "DigiClone [B] x1", "DigiClone [C] x1", "DigiClone [D] x1", "Digicore x20"],
            cost: "10 Mega"
          },
          {
            product: "DigiClone [S]",
            materials: ["DigiClone [A] x10"],
            cost: "10 Mega"
          },
          {
            product: "DigiClone [A]",
            materials: ["DigiClone [B] x10"],
            cost: "10 Mega"
          },
          {
            product: "DigiClone [B]",
            materials: ["DigiClone [C] x10"],
            cost: "10 Mega"
          },
          {
            product: "DigiClone [C]",
            materials: ["DigiClone [D] x10"],
            cost: "10 Mega"
          }
        ]
      },
      {
        name: "Miscellaneous - Digimon Evolution",
        recipes: [
          {
            product: "Cube of Overload",
            materials: ["Data of Overload x3", "Digicore x20"],
            cost: "50 Mega"
          }
        ]
      },
      {
        name: "Miscellaneous - Skill Memory",
        recipes: [
          {
            product: "Skill Memory Capsule [Attack]",
            materials: ["Memory Skill [DATA] x2", "Memory Chip x50", "Digicore x10"],
            cost: "500 Mega"
          },
          {
            product: "Skill Memory Capsule [Support]",
            materials: ["Memory Skill [DATA] x2", "Memory Chip x50", "Digicore x10"],
            cost: "500 Mega"
          },
          {
            product: "Skill Memory Capsule [Defense]",
            materials: ["Memory Skill [DATA] x2", "Memory Chip x50", "Digicore x10"],
            cost: "500 Mega"
          },
          {
            product: "Skill Memory Cube [Attack]",
            materials: ["Memory Card [DATA] x2", "Memory Chip x50", "Digicore x10"],
            cost: "500 Mega"
          },
          {
            product: "Skill Memory Cube [Support]",
            materials: ["Memory Card [DATA] x2", "Memory Chip x50", "Digicore x10"],
            cost: "500 Mega"
          },
          {
            product: "Skill Memory Cube [Defense]",
            materials: ["Memory Card [DATA] x2", "Memory Chip x50", "Digicore x10"],
            cost: "500 Mega"
          },
          {
            product: "Skill Memory Capsule [Critical]",
            materials: ["Memory Crit [DATA] x2", "Memory Chip x50", "Digicore x10"],
            cost: "500 Mega"
          },
          {
            product: "Skill Memory Cube [Critical]",
            materials: ["Memory Crit [DATA] x2", "Memory Chip x50", "Digicore x10"],
            cost: "500 Mega"
          }
        ]
      },
      {
        name: "Make Bracelet",
        recipes: [
          { product: "X-Antibody - CORE", materials: ["X-Antibody - DATA x30"], cost: "Free", successRate: "50%" },
          { product: "X-Antibody - CORE (HACK)", materials: ["X-Antibody - DATA x10", "X-Antibody - HACK x1"], cost: "Free", successRate: "100%" },
          { product: "Sealed [Rusty Bracelet]", materials: ["Crude Rusty Bracelet x1", "X-Antibody - CORE x3"], cost: "Free", successRate: "100%" },
          { product: "Sealed [Knight's Bracelet]", materials: ["Rusty Bracelet x1", "X-Antibody - CORE x5"], cost: "Free", successRate: "100%" },
          { product: "Sealed [Radiant Knight's Bracelet]", materials: ["Knight's Bracelet x1", "X-Antibody - CORE x8"], cost: "Free", successRate: "100%" },
          { product: "Sealed [Royal: Knight's Bracelet]", materials: ["Radiant Knight's Bracelet x1", "X-Antibody - CORE x11", "Dexmon's Memory x1"], cost: "Free", successRate: "100%" },
          { product: "Sealed [Royal : Radiant Knight's Bracelet]", materials: ["Royal : Knight's Bracelet x1", "X-Antibody - CORE x15", "Dexmon's Memory x5"], cost: "Free", successRate: "100%" },
          { product: "Sealed [Royal : X-Knight's Bracelet]", materials: ["Royal : Radiant Knight's Bracelet x1", "X-Antibody - CORE x21", "Dexmon's Memory x20", "Yggdrasil's Records x1"], cost: "Free", successRate: "100%" },
          { product: "Sealed [Royal : Yggdrasil Bracelet]", materials: ["Royal : X-Knight's Bracelet x1", "Yggdrasil's Records x20", "Yggdrasil Core x50"], cost: "5 Tera", successRate: "100%" },
          { product: "Sealed [Royal : Yggdrasil Bracelet]", materials: ["Royal : Yggdrasil Bracelet x1", "Divine Crystal x1", "Fanronkou x50", "Yggdrasil Core x30"], cost: "5 Tera", successRate: "100%" }
        ]
      },
      {
        name: "Material Convert",
        recipes: [
          { product: "X-Antibody - DATA x5", materials: ["X-Antibody - CORE x1"], cost: "Free", successRate: "100%" },
          { product: "X-Antibody - CORE x2", materials: ["Dexmon's Memory x1"], cost: "Free", successRate: "100%" },
          { product: "Dexmon's Memory x2", materials: ["Yggdrasil's Records x1"], cost: "Free", successRate: "100%" }
        ]
      },
      {
        name: "Make XAI",
        recipes: [
          { product: "XAI Ver II (7 Days)", materials: ["X-Antibody - DATA x200"], cost: "Free", successRate: "100%" },
          { product: "XAI Ver II (15 Days)", materials: ["X-Antibody - DATA x350"], cost: "Free", successRate: "100%" },
          { product: "XAI Ver II (30 Days)", materials: ["X-Antibody - DATA x500"], cost: "Free", successRate: "100%" },
          { product: "XAI Ver III (7 Days)", materials: ["X-Antibody - CORE x10"], cost: "Free", successRate: "100%" },
          { product: "XAI Ver III (15 Days)", materials: ["X-Antibody - CORE x18"], cost: "Free", successRate: "100%" },
          { product: "XAI Ver III (30 Days)", materials: ["X-Antibody - CORE x25"], cost: "Free", successRate: "100%" }
        ]
      }
    ]
  },
  {
    id: "takato",
    npc: "Takato (Digital Area Craft)",
    description: "Item Make System consists in bringing specific materials to Takato on the eastern side of DATS Center, who will immediately exchange them for certain items.",
    categories: [
      {
        name: "Goggle Craft",
        recipes: [
          { product: "Mysterious Goggles", materials: ["Broken Goggles x100", "Wasteland Essence x1000", "Bancho Data x20"], cost: "Free", successRate: "100%" }
        ]
      },
      {
        name: "Goggles",
        recipes: [
          { product: "Shining Goggles", materials: ["Goggles x1", "Cloud Essence x1000", "Mugen Data x40", "Chaos Data x40"], cost: "10 Tera", successRate: "100%" },
          { product: "Digital Goggles", materials: ["Shining Goggles x1", "Forest Essence x1000", "Orochimon Data x50"], cost: "20 Tera", successRate: "100%" },
          { product: "Digital Hazard Goggles", materials: ["Digital Goggles x1", "Ocean Essence x1000", "Megidramon Data x50", "Beelzemon Data x50"], cost: "30 Tera", successRate: "100%" },
          { product: "Tamer's Goggles", materials: ["Digital Hazard Goggles x1", "Beast Essence x1000", "Zhuqiaomon Data x50"], cost: "40 Tera", successRate: "100%" },
          { product: "Complete Tamer's Goggles", materials: ["Tamer's Goggles x1", "Mark of Digital Hazard x20", "Crown of Greed x20", "Incandescent Flame x20"], cost: "50 Tera", successRate: "100%" }
        ]
      },
      {
        name: "D-Ark Vice - Upgrade",
        recipes: [
          { product: "Digizoid D-Ark", materials: ["D-Ark [Version 5] x1", "Mark of Digital Hazard x100", "Crown of Greed x200"], cost: "50 Tera", successRate: "100%" },
          { product: "Rage D-Ark", materials: ["D-Ark [Version 5] x1", "Mark of Digital Hazard x200", "Crown of Greed x100"], cost: "50 Tera", successRate: "100%" },
          { product: "ChromeDigizoid D-Ark", materials: ["Digizoid D-Ark x1", "Mark of Digital Hazard x50", "Crown of Greed x100", "Incandescent Flame x200"], cost: "100 Tera", successRate: "100%" },
          { product: "Uncontrollable Rage D-Ark", materials: ["Rage D-Ark x1", "Mark of Digital Hazard x100", "Crown of Greed x50", "Incandescent Flame x200"], cost: "100 Tera", successRate: "100%" }
        ]
      },
      {
        name: "D-Ark Vice - Reroll",
        recipes: [
          { product: "ChromeDigizoid D-Ark", materials: ["ChromeDigizoid D-Ark x1", "Mark of Digital Hazard x10", "Crown of Greed x20", "Incandescent Flame x20"], cost: "Free", successRate: "100%" },
          { product: "Uncontrollable Rage D-Ark", materials: ["Uncontrollable Rage D-Ark x1", "Mark of Digital Hazard x20", "Crown of Greed x10", "Incandescent Flame x20"], cost: "Free", successRate: "100%" }
        ]
      },
      {
        name: "Reborn",
        recipes: [
          { product: "Reborn Capsule [Level 1]", materials: ["Reborn Capsule Material A x1", "Reborn Capsule Material B x1", "Mark of Digital Hazard x30", "Crown of Greed x30", "Incandescent Flame x30"], cost: "Free", successRate: "100%" },
          { product: "Reborn Capsule [Level 1]", materials: ["Reborn Capsule Material A x1", "Reborn Capsule Material B x1", "Crest of Bravery x30", "Crest of Friendship x30", "Complete Virus x30"], cost: "Free", successRate: "100%" },
          { product: "Reborn Capsule [Level 1]", materials: ["Reborn Capsule Material A x1", "Reborn Capsule Material B x1", "Marine Dragon Core x20"], cost: "Free", successRate: "100%" },
          { product: "Reborn Capsule [Level 1]", materials: ["Reborn Capsule Material A x1", "Reborn Capsule Material B x1", "Wooden Puppet Core x20"], cost: "Free", successRate: "100%" },
          { product: "Reborn Capsule [Level 1]", materials: ["Reborn Capsule Material A x1", "Reborn Capsule Material B x1", "Metalic Beast Core x20"], cost: "Free", successRate: "100%" },
          { product: "Reborn Capsule [Level 1]", materials: ["Reborn Capsule Material A x1", "Reborn Capsule Material B x1", "Cruelty Clown Core x20"], cost: "Free", successRate: "100%" },
          { product: "Reborn Capsule Material A", materials: ["Wasteland Essence x1000", "Cloud Essence x1000", "Forest Essence x1000", "Ocean Essence x1000", "Beast Essence x1000"], cost: "Free", successRate: "100%" },
          { product: "Reborn Capsule Material A", materials: ["Wasteland Essence x5000"], cost: "Free", successRate: "100%" },
          { product: "Reborn Capsule Material B", materials: ["Bancho Data x30", "Mugen Data x30", "Chaos Data x30", "Orochimon Data x30", "Megidramon Data x30", "Beelzemon Data x30", "Zhuqiaomon Data x30"], cost: "Free", successRate: "100%" },
          { product: "Reborn Capsule Material B", materials: ["Aura of Domination [MetalSeadramon] x30"], cost: "Free", successRate: "100%" },
          { product: "Reborn Capsule Material B", materials: ["Aura of Domination [Puppetmon] x30"], cost: "Free", successRate: "100%" },
          { product: "Reborn Capsule Material B", materials: ["Aura of Domination [MugenDramon] x30"], cost: "Free", successRate: "100%" },
          { product: "Reborn Capsule Material B", materials: ["Aura of Domination [Piedmon] x30"], cost: "Free", successRate: "100%" }
        ]
      },
      {
        name: "Essence",
        recipes: [
          { product: "Essence Voucher", materials: ["Mark of Digital Hazard x1"], cost: "Free", successRate: "100%" },
          { product: "Essence Voucher", materials: ["Crown of Greed x1"], cost: "Free", successRate: "100%" },
          { product: "Essence Voucher", materials: ["Incandescent Flame x1"], cost: "Free", successRate: "100%" },
          { product: "Wasteland Essence x2", materials: ["Essence Voucher x1"], cost: "Free", successRate: "100%" },
          { product: "Cloud Essence x2", materials: ["Essence Voucher x1"], cost: "Free", successRate: "100%" },
          { product: "Forest Essence x2", materials: ["Essence Voucher x1"], cost: "Free", successRate: "100%" },
          { product: "Ocean Essence x2", materials: ["Essence Voucher x1"], cost: "Free", successRate: "100%" },
          { product: "Beast Essence x2", materials: ["Essence Voucher x1"], cost: "Free", successRate: "100%" }
        ]
      }
    ]
  },
  {
    id: "taichi",
    npc: "Taichi (Spiral Mountain)",
    description: "Item Make System consists in bringing specific materials to Taichi on the North-west side of DATS Center, who will immediately exchange them for certain items.",
    categories: [
      {
        name: "Spiral KeyRing [AA]",
        recipes: [
          { product: "Spiral KeyRing [AA] Lv.1", materials: ["Simple KeyRing x1", "Spiral Essence x100"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [AA] Lv.2", materials: ["Spiral KeyRing [AA] Lv.1 x1", "Spiral Essence x200", "Marine Dragon Core x10"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [AA] Lv.3", materials: ["Spiral KeyRing [AA] Lv.2 x1", "Spiral Essence x200", "Marine Dragon Core x20"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [AA] Lv.4", materials: ["Spiral KeyRing [AA] Lv.3 x1", "Spiral Essence x300", "Wooden Puppet Core x10"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [AA] Lv.5", materials: ["Spiral KeyRing [AA] Lv.4 x1", "Spiral Essence x300", "Wooden Puppet Core x20"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [AA] Lv.6", materials: ["Spiral KeyRing [AA] Lv.5 x1", "Spiral Essence x400", "Metalic Beast Core x10"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [AA] Lv.7", materials: ["Spiral KeyRing [AA] Lv.6 x1", "Spiral Essence x400", "Metalic Beast Core x20"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [AA] Lv.8", materials: ["Spiral KeyRing [AA] Lv.7 x1", "Spiral Essence x500", "Cruelty Clown Core x10"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [AA] Lv.9", materials: ["Spiral KeyRing [AA] Lv.8 x1", "Spiral Essence x500", "Cruelty Clown Core x20"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [AA] Lv.10", materials: ["Spiral KeyRing [AA] Lv.9 x1", "Spiral Essence x1100", "Core of Nothingness x30"], cost: "20 Tera", successRate: "100%" }
        ]
      },
      {
        name: "Spiral KeyRing [SK]",
        recipes: [
          { product: "Spiral KeyRing [SK] Lv.1", materials: ["Simple KeyRing x1", "Spiral Essence x100"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [SK] Lv.2", materials: ["Spiral KeyRing [SK] Lv.1 x1", "Spiral Essence x200", "Marine Dragon Core x10"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [SK] Lv.3", materials: ["Spiral KeyRing [SK] Lv.2 x1", "Spiral Essence x200", "Marine Dragon Core x20"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [SK] Lv.4", materials: ["Spiral KeyRing [SK] Lv.3 x1", "Spiral Essence x300", "Wooden Puppet Core x10"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [SK] Lv.5", materials: ["Spiral KeyRing [SK] Lv.4 x1", "Spiral Essence x300", "Wooden Puppet Core x20"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [SK] Lv.6", materials: ["Spiral KeyRing [SK] Lv.5 x1", "Spiral Essence x400", "Metalic Beast Core x10"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [SK] Lv.7", materials: ["Spiral KeyRing [SK] Lv.6 x1", "Spiral Essence x400", "Metalic Beast Core x20"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [SK] Lv.8", materials: ["Spiral KeyRing [SK] Lv.7 x1", "Spiral Essence x500", "Cruelty Clown Core x10"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [SK] Lv.9", materials: ["Spiral KeyRing [SK] Lv.8 x1", "Spiral Essence x500", "Cruelty Clown Core x20"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [SK] Lv.10", materials: ["Spiral KeyRing [SK] Lv.9 x1", "Spiral Essence x1100", "Core of Nothingness x30"], cost: "20 Tera", successRate: "100%" }
        ]
      },
      {
        name: "Spiral KeyRing [TANK]",
        recipes: [
          { product: "Spiral KeyRing [TANK] Lv.1", materials: ["Simple KeyRing x1", "Spiral Essence x100"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [TANK] Lv.2", materials: ["Spiral KeyRing [TANK] Lv.1 x1", "Spiral Essence x200", "Marine Dragon Core x10"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [TANK] Lv.3", materials: ["Spiral KeyRing [TANK] Lv.2 x1", "Spiral Essence x200", "Marine Dragon Core x20"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [TANK] Lv.4", materials: ["Spiral KeyRing [TANK] Lv.3 x1", "Spiral Essence x300", "Wooden Puppet Core x10"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [TANK] Lv.5", materials: ["Spiral KeyRing [TANK] Lv.4 x1", "Spiral Essence x300", "Wooden Puppet Core x20"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [TANK] Lv.6", materials: ["Spiral KeyRing [TANK] Lv.5 x1", "Spiral Essence x400", "Metalic Beast Core x10"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [TANK] Lv.7", materials: ["Spiral KeyRing [TANK] Lv.6 x1", "Spiral Essence x400", "Metalic Beast Core x20"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [TA] Lv.8", materials: ["Spiral KeyRing [TANK] Lv.7 x1", "Spiral Essence x500", "Cruelty Clown Core x10"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [TA] Lv.9", materials: ["Spiral KeyRing [TA] Lv.8 x1", "Spiral Essence x500", "Cruelty Clown Core x20"], cost: "20 Tera", successRate: "100%" },
          { product: "Spiral KeyRing [TA] Lv.10", materials: ["Spiral KeyRing [TA] Lv.9 x1", "Spiral Essence x1100", "Core of Nothingness x30"], cost: "20 Tera", successRate: "100%" }
        ]
      },
      {
        name: "Spiral Gear - Ring",
        recipes: [
          { product: "Ring of the Marine Dragon [AA]", materials: ["Fanglongmon's Ultimate Ancient Earring [Lv.10] x1", "Spiral Essence x500", "Marine Dragon Core x100"], cost: "10 Tera", successRate: "100%" },
          { product: "Ring of the Marine Dragon [SK]", materials: ["Fanglongmon's Ultimate Ancient Earring [Lv.10] x1", "Spiral Essence x500", "Marine Dragon Core x100"], cost: "10 Tera", successRate: "100%" },
          { product: "Ring of the Marine Dragon [TANK]", materials: ["Fanglongmon's Ultimate Ancient Earring [Lv.10] x1", "Spiral Essence x500", "Marine Dragon Core x100"], cost: "50 Tera", successRate: "100%" }
        ]
      },
      {
        name: "Spiral Gear - Necklace",
        recipes: [
          { product: "Necklace of the Wooden Puppet [AA]", materials: ["Fanglongmon's Ultimate Ancient Necklace [Lv.10] x1", "Spiral Essence x500", "Wooden Puppet Core x100", "Marine Dragon Core x100"], cost: "10 Tera", successRate: "100%" },
          { product: "Necklace of the Wooden Puppet [SK]", materials: ["Fanglongmon's Ultimate Ancient Necklace [Lv.10] x1", "Spiral Essence x500", "Wooden Puppet Core x100", "Marine Dragon Core x100"], cost: "10 Tera", successRate: "100%" },
          { product: "Necklace of the Wooden Puppet [TANK]", materials: ["Fanglongmon's Ultimate Ancient Necklace [Lv.10] x1", "Spiral Essence x500", "Wooden Puppet Core x100", "Marine Dragon Core x100"], cost: "10 Tera", successRate: "100%" }
        ]
      },
      {
        name: "Spiral Gear - Earring",
        recipes: [
          { product: "Earring of the Metalic Beast [AA]", materials: ["Fanglongmon's Ultimate Ancient Ring [Lv.10] x1", "Spiral Essence x500", "Metalic Beast Core x100", "Wooden Puppet Core x25", "Marine Dragon Core x25"], cost: "10 Tera", successRate: "100%" },
          { product: "Earring of the Metalic Beast [SK]", materials: ["Fanglongmon's Ultimate Ancient Ring [Lv.10] x1", "Spiral Essence x500", "Metalic Beast Core x100", "Wooden Puppet Core x25", "Marine Dragon Core x25"], cost: "10 Tera", successRate: "100%" },
          { product: "Earring of the Metalic Beast [TANK]", materials: ["Fanglongmon's Ultimate Ancient Ring [Lv.10] x1", "Spiral Essence x500", "Metalic Beast Core x100", "Wooden Puppet Core x25", "Marine Dragon Core x25"], cost: "10 Tera", successRate: "100%" }
        ]
      },
      {
        name: "Spiral Gear - Bracelet",
        recipes: [
          { product: "Bracelet of the Cruel Clown [AA]", materials: ["Ultimate : Yggdrasil Bracelet x1", "Spiral Essence x500", "Cruelty Clown Core x100", "Metalic Beast Core x25", "Wooden Puppet Core x25", "Marine Dragon Core x25"], cost: "10 Tera", successRate: "100%" },
          { product: "Bracelet of the Cruel Clown [SK]", materials: ["Ultimate : Yggdrasil Bracelet x1", "Spiral Essence x500", "Cruelty Clown Core x100", "Metalic Beast Core x25", "Wooden Puppet Core x25", "Marine Dragon Core x25"], cost: "10 Tera", successRate: "100%" },
          { product: "Bracelet of the Cruel Clown [TANK]", materials: ["Ultimate : Yggdrasil Bracelet x1", "Spiral Essence x500", "Cruelty Clown Core x100", "Metalic Beast Core x25", "Wooden Puppet Core x25", "Marine Dragon Core x25"], cost: "10 Tera", successRate: "100%" }
        ]
      },
      {
        name: "Spiral Gear - DigiVice",
        recipes: [
          { product: "Void DigiVice [AA]", materials: ["Uncontrollable Rage D-Ark x1", "Core of Nothingness x50", "Cruelty Clown Core x50", "Metalic Beast Core x50", "Wooden Puppet Core x50", "Marine Dragon Core x50"], cost: "10 Tera", successRate: "100%" },
          { product: "Void DigiVice [SK]", materials: ["True DigiVice Data x3", "Core of Nothingness x50", "Cruelty Clown Core x50", "Metalic Beast Core x50", "Wooden Puppet Core x50", "Marine Dragon Core x50"], cost: "10 Tera", successRate: "100%" },
          { product: "Void DigiVice [TA]", materials: ["ChromeDigizoid D-Ark x1", "Core of Nothingness x50", "Cruelty Clown Core x50", "Metalic Beast Core x50", "Wooden Puppet Core x50", "Marine Dragon Core x50"], cost: "10 Tera", successRate: "100%" }
        ]
      },
      {
        name: "Corrupted Accessory",
        recipes: [
          { product: "Corrupted Ring of the Marine Dragon [AA]", materials: ["Ring of the Marine Dragon [AA] x1", "Void Space x1"], cost: "50 Tera", successRate: "100%" },
          { product: "Corrupted Ring of the Marine Dragon [SK]", materials: ["Ring of the Marine Dragon [SK] x1", "Void Space x1"], cost: "50 Tera", successRate: "100%" },
          { product: "Corrupted Ring of the Marine Dragon [TA]", materials: ["Ring of the Marine Dragon [TA] x1", "Void Space x1"], cost: "50 Tera", successRate: "100%" },
          { product: "Corrupted Necklace of the Wooden Puppet [AA]", materials: ["Necklace of the Wooden Puppet [AA] x1", "Void Space x1"], cost: "50 Tera", successRate: "100%" },
          { product: "Corrupted Necklace of the Wooden Puppet [SK]", materials: ["Necklace of the Wooden Puppet [SK] x1", "Void Space x1"], cost: "50 Tera", successRate: "100%" },
          { product: "Corrupted Necklace of the Wooden Puppet [TA]", materials: ["Necklace of the Wooden Puppet [TA] x1", "Void Space x1"], cost: "50 Tera", successRate: "100%" },
          { product: "Corrupted Earring of the Metallic Beast [AA]", materials: ["Earring of the Metallic Beast [AA] x1", "Void Space x1"], cost: "50 Tera", successRate: "100%" },
          { product: "Corrupted Earring of the Metallic Beast [SK]", materials: ["Earring of the Metallic Beast [SK] x1", "Void Space x1"], cost: "50 Tera", successRate: "100%" },
          { product: "Corrupted Earring of the Metallic Beast [TA]", materials: ["Earring of the Metallic Beast [TA] x1", "Void Space x1"], cost: "50 Tera", successRate: "100%" },
          { product: "Corrupted Bracelet of the Cruel Clown [AA]", materials: ["Bracelet of the Cruel Clown [AA] x1", "Void Space x1"], cost: "50 Tera", successRate: "100%" },
          { product: "Corrupted Bracelet of the Cruel Clown [SK]", materials: ["Bracelet of the Cruel Clown [SK] x1", "Void Space x1"], cost: "50 Tera", successRate: "100%" },
          { product: "Corrupted Bracelet of the Cruel Clown [TA]", materials: ["Bracelet of the Cruel Clown [TA] x1", "Void Space x1"], cost: "50 Tera", successRate: "100%" }
        ]
      },
      {
        name: "Assistance Exchange",
        recipes: [
          { product: "Corrupted Gear Set [AA]", materials: ["Ring of the Marine Ring [AA] x1", "Necklace of the Wooden Puppet [AA] x1", "Earring of the Metallic Beast [AA] x1", "Bracelet of the Cruel Clown [AA] x1", "Void Crystal [Event] x1"], cost: "50 Tera", successRate: "100%" },
          { product: "Corrupted Gear Set [SK]", materials: ["Ring of the Marine Ring [SK] x1", "Necklace of the Wooden Puppet [SK] x1", "Earring of the Metallic Beast [SK] x1", "Bracelet of the Cruel Clown [SK] x1", "Void Crystal [Event] x1"], cost: "50 Tera", successRate: "100%" },
          { product: "Corrupted Gear Set [TA]", materials: ["Ring of the Marine Ring [TA] x1", "Necklace of the Wooden Puppet [TA] x1", "Earring of the Metallic Beast [TA] x1", "Bracelet of the Cruel Clown [TA] x1", "Void Crystal [Event] x1"], cost: "50 Tera", successRate: "100%" }
        ]
      },
      {
        name: "Material / Consumables / Exchanges",
        recipes: [
          { product: "Void Crystal", materials: ["Core of Nothingness x150"], cost: "50 Tera", successRate: "100%" },
          { product: "Void Power Stone", materials: ["Core of Nothingness x20"], cost: "Free", successRate: "100%" },
          { product: "Unsealed Box of Nothingness", materials: ["Sealed Box of Nothingness x1", "DNA of Darkness x1", "Apocalypse Catalyst x1"], cost: "Free", successRate: "100%" },
          { product: "Marine Dragon Domain Entry", materials: ["Marine Essence x200"], cost: "Free", successRate: "100%" },
          { product: "Front Yard of Marionette Mansion Entry", materials: ["Flora Essence x200"], cost: "Free", successRate: "100%" },
          { product: "Back of the Empire Entry", materials: ["Metalic Essence x200"], cost: "Free", successRate: "100%" },
          { product: "Stage of Clown Dungeon Entry", materials: ["Nightmare Essence x200"], cost: "Free", successRate: "100%" },
          { product: "Aura of Domination [MetalSeadramon] x2", materials: ["Raid Essence x10"], cost: "Free", successRate: "100%" },
          { product: "Aura of Domination [Puppetmon] x2", materials: ["Raid Essence x10"], cost: "Free", successRate: "100%" },
          { product: "Aura of Domination [MugenDramon] x2", materials: ["Raid Essence x10"], cost: "Free", successRate: "100%" },
          { product: "Aura of Domination [Piedmon] x2", materials: ["Raid Essence x10"], cost: "Free", successRate: "100%" },
          { product: "Reborn Reinforced DigiClone Cube x2", materials: ["Marine Dragon Core x1"], cost: "Free", successRate: "100%" },
          { product: "Reborn Reinforced DigiClone Cube x2", materials: ["Wooden Puppet Core x1"], cost: "Free", successRate: "100%" },
          { product: "Reborn Reinforced DigiClone Cube x2", materials: ["Metalic Beast Core x1"], cost: "Free", successRate: "100%" },
          { product: "Reborn Reinforced DigiClone Cube x2", materials: ["Cruelty Clown Core x1"], cost: "Free", successRate: "100%" },
          { product: "Reborn Reinforced DigiClone Cube x2", materials: ["Core of Nothingness x1"], cost: "Free", successRate: "100%" }
        ]
      }
    ]
  },
  {
    id: "pawnchessmon",
    npc: "PawnChessmon W (Quest Rewards)",
    description: "The Rewards from specific main quests are useful items that you can obtain from the NPC PawnChessmon W (Quest Rewards) located in DATS Center near Calumon. You need to complete all of the main quests on the specific map to be rewarded.",
    customHeaders: ["Completion Region", "Rewards", "Required Quest"],
    categories: [
      {
        name: "Main Quest Completions",
        recipes: [
          {
            product: "Ice Area Completion",
            materials: ["Dungeon Ticket Box [Beginner] x1", "Red Light of Life x500", "Blue Light of DigiSoul x500", "Reinforced Digiclone Set x20", "Seal Exchange Ticket x600", "Spooky Halloween Costume Set [30 Days]"],
            cost: "Req: Mercurimon's Summons"
          },
          {
            product: "Western Area (Digimon Maze)",
            materials: ["Fruit of Yggdrasil x200", "Luminous Light Box x1", "Option Change Stone Package x2", "Number Change Stone Package x2", "Mega Reinforced Digiclone Set x3"],
            cost: "Req: Frontier Prologue"
          },
          {
            product: "File Island Completion",
            materials: ["Special Chicken Combo x100", "Yardie's Fried Chicken x50", "Fruit of Yggdrasil x200", "Backup Disk x200", "Amplification Booster +1000% x10", "Seal Opener x300"],
            cost: "Req: Final Battle!!"
          },
          {
            product: "Server Continent Area",
            materials: ["Reinforced Digiclone Set x20", "Rechargeable Energy x200", "Sakura XAI Ver. VI Box [30 Days] x1", "Inventory Expansion x25", "Warehouse Expansion x25", "Mercenary Slot Expansion x1"],
            cost: "Req: Fake card is!"
          },
          {
            product: "Tokyo Area Completion",
            materials: ["Skill Code Exchange Ticket x1", "Digimon Archive Expansion x5"],
            cost: "Req: Finally the Peace"
          },
          {
            product: "Shinjuku Area Completion",
            materials: ["Essence of Vajramon x300", "Essence of Vikaralamon x300", "Tamer Skill Exchange Ticket x2"],
            cost: "Req: Calumon"
          },
          {
            product: "Digital Area Completion",
            materials: ["High Skill Memory Set x2", "Zhuqiaomon Aura Box [30D] x1", "Mega Reinforced Digiclone Set x3"],
            cost: "Req: Final Battle"
          },
          {
            product: "Spiral Mountain Area",
            materials: ["Reborn Assistance Package x1", "Lotus Fruit x1000"],
            cost: "Req: Saying Goodbye"
          },
          {
            product: "Ice Area & Western Area",
            materials: ["Growth Fruit (Savers) x1"],
            cost: "Req: Both Completions"
          }
        ]
      }
    ]
  },
  {
    id: "alphamon",
    npc: "Alphamon (Raid Token Exchange)",
    description: "Raid Token is an item obtained after defeating Mugendramon, Garurumon X, Belphemon Rage Mode, Dukemon, MegaGalgomon, and Sakuyamon. It can be exchanged for various items at the Alphamon NPC in DATS.",
    categories: [
      {
        name: "Token Exchange",
        recipes: [
          { product: "Dark Chocolate x5", materials: ["Raid Token x10"], cost: "Free", successRate: "100%" },
          { product: "Seal Exchange Ticket x4", materials: ["Raid Token x15"], cost: "Free", successRate: "100%" },
          { product: "Backup Disk x3", materials: ["Raid Token x15"], cost: "Free", successRate: "100%" },
          { product: "Seal Opener x2", materials: ["Raid Token x25"], cost: "Free", successRate: "100%" },
          { product: "Seal Closer x2", materials: ["Raid Token x25"], cost: "Free", successRate: "100%" },
          { product: "Digimon Enhancement Buff Package [NEW] x2", materials: ["Raid Token x25"], cost: "Free", successRate: "100%" },
          { product: "Option Change Stone x5", materials: ["Raid Token x30"], cost: "Free", successRate: "100%" },
          { product: "Number Change Stone x5", materials: ["Raid Token x30"], cost: "Free", successRate: "100%" },
          { product: "Random Reinforced Digiclone [B~S] Box x2", materials: ["Raid Token x40"], cost: "Free", successRate: "100%" },
          { product: "Random Mid Class T. ConvertChip Box x1", materials: ["Raid Token x60"], cost: "Free", successRate: "100%" }
        ]
      }
    ]
  },
  {
    id: "pawnchessmon_x",
    npc: "PawnChessmon W (X-Antibody Factor Exchange)",
    description: "X-Antibody Factor Exchange can craft several kinds of X-Antibody Factor items using a certain number of X-Antibody Factor Exchange Tickets. You can access X-Antibody Factor Exchange through PawnChessmon (White) in D-terminal or Digitamamon in Verdandi Terminal.",
    categories: [
      {
        name: "X-Antibody Factor",
        recipes: [
          { product: "X-Antibody Factor: Agumon", materials: ["X-Antibody Factor Exchange Ticket x200"], cost: "250 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: Greymon", materials: ["X-Antibody Factor Exchange Ticket x1000"], cost: "750 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: MetalGreymon", materials: ["X-Antibody Factor Exchange Ticket x2000"], cost: "2 Tera 500 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: WarGreymon", materials: ["X-Antibody Factor Exchange Ticket x4000"], cost: "5 Tera", successRate: "100%" },
          { product: "X-Antibody Factor: Gabumon", materials: ["X-Antibody Factor Exchange Ticket x200"], cost: "250 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: Garurumon", materials: ["X-Antibody Factor Exchange Ticket x1000"], cost: "750 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: WereGarurumon", materials: ["X-Antibody Factor Exchange Ticket x2000"], cost: "2 Tera 500 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: MetalGarurumon", materials: ["X-Antibody Factor Exchange Ticket x4000"], cost: "5 Tera", successRate: "100%" },
          { product: "X-Antibody Factor: Ryuudamon", materials: ["X-Antibody Factor Exchange Ticket x100"], cost: "250 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: GinRyuumon", materials: ["X-Antibody Factor Exchange Ticket x500"], cost: "750 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: HisyaRyuumon", materials: ["X-Antibody Factor Exchange Ticket x1000"], cost: "2 Tera 500 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: OuRyuumon", materials: ["X-Antibody Factor Exchange Ticket x1500"], cost: "5 Tera", successRate: "100%" },
          { product: "X-Antibody Factor: Dorumon (Alphamon)", materials: ["X-Antibody Factor Exchange Ticket x100"], cost: "250 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: RaptorDramon", materials: ["X-Antibody Factor Exchange Ticket x500"], cost: "750 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: Grademon", materials: ["X-Antibody Factor Exchange Ticket x1000"], cost: "2 Tera 500 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: Alphamon", materials: ["X-Antibody Factor Exchange Ticket x1500"], cost: "5 Tera", successRate: "100%" },
          { product: "X-Antibody Factor: Dorumon (Dex)", materials: ["X-Antibody Factor Exchange Ticket x100"], cost: "250 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: DexDorugamon", materials: ["X-Antibody Factor Exchange Ticket x500"], cost: "750 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: DexDoruGreymon", materials: ["X-Antibody Factor Exchange Ticket x1000"], cost: "2 Tera 500 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: DexDorugoramon", materials: ["X-Antibody Factor Exchange Ticket x1500"], cost: "5 Tera", successRate: "100%" },
          { product: "X-Antibody Factor: Dorumon (Dorugoramon)", materials: ["X-Antibody Factor Exchange Ticket x100"], cost: "250 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: Dorugamon", materials: ["X-Antibody Factor Exchange Ticket x500"], cost: "750 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: DoruGreymon", materials: ["X-Antibody Factor Exchange Ticket x1000"], cost: "2 Tera 500 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: Dorugoramon", materials: ["X-Antibody Factor Exchange Ticket x1500"], cost: "5 Tera", successRate: "100%" },
          { product: "X-Antibody Factor: Dracmon", materials: ["X-Antibody Factor Exchange Ticket x100"], cost: "250 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: Sangloupmon", materials: ["X-Antibody Factor Exchange Ticket x500"], cost: "750 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: Matadormon", materials: ["X-Antibody Factor Exchange Ticket x1000"], cost: "2 Tera 500 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: GranDracmon", materials: ["X-Antibody Factor Exchange Ticket x1500"], cost: "5 Tera", successRate: "100%" },
          { product: "X-Antibody Factor: FanBeemon", materials: ["X-Antibody Factor Exchange Ticket x100"], cost: "250 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: Waspmon", materials: ["X-Antibody Factor Exchange Ticket x500"], cost: "750 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: CannonBeemon", materials: ["X-Antibody Factor Exchange Ticket x1000"], cost: "2 Tera 500 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: TigerVespamon", materials: ["X-Antibody Factor Exchange Ticket x1500"], cost: "5 Tera", successRate: "100%" },
          { product: "X-Antibody Factor: DinoTigermon", materials: ["X-Antibody Factor Exchange Ticket x1500"], cost: "5 Tera", successRate: "100%" },
          { product: "X-Antibody Factor: Guilmon", materials: ["X-Antibody Factor Exchange Ticket x300"], cost: "250 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: Growlmon", materials: ["X-Antibody Factor Exchange Ticket x1500"], cost: "750 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: WarGrowlmon", materials: ["X-Antibody Factor Exchange Ticket x3000"], cost: "2 Tera 500 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: Palmon", materials: ["X-Antibody Factor Exchange Ticket x100"], cost: "250 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: Togemon", materials: ["X-Antibody Factor Exchange Ticket x500"], cost: "750 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: Lillymon", materials: ["X-Antibody Factor Exchange Ticket x1000"], cost: "2 Tera 500 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: Rosemon", materials: ["X-Antibody Factor Exchange Ticket x1500"], cost: "5 Tera", successRate: "100%" }
        ]
      },
      {
        name: "Special X-Antibody Factor",
        recipes: [
          { product: "X-Antibody Factor: Omegamon - Alpha", materials: ["Omegamon’s Chance of Evolution x1", "Anti-Heterogen Voucher x20", "X-Evolution Disk x20", "Death-X Disk x20", "Yggdrasil's Records x20", "Warrior Core x90"], cost: "5 Tera", successRate: "100%" },
          { product: "X-Antibody Factor: Kokuwamon", materials: ["X-Antibody Factor Exchange Ticket x4500"], cost: "2 Tera 500 Mega", successRate: "100%" },
          { product: "X-Antibody Factor: Gallantmon", materials: ["X-Antibody Factor Exchange Ticket x4500"], cost: "5 Tera", successRate: "100%" },
          { product: "X-Antibody Factor: Dexmon", materials: ["X-Antibody Factor Exchange Ticket x3000"], cost: "5 Tera", successRate: "100%" },
          { product: "X-Antibody Factor: Duftmon", materials: ["X-Antibody Factor Exchange Ticket x7000"], cost: "5 Tera", successRate: "100%" },
          { product: "X-Antibody Factor: Dynasmon", materials: ["X-Antibody Factor Exchange Ticket x7000"], cost: "5 Tera", successRate: "100%" },
          { product: "X-Antibody Factor: ChaosDukemon", materials: ["X-Antibody Factor Exchange Ticket x8000"], cost: "5 Tera", successRate: "100%" },
          { product: "X-Antibody Factor: Magnamon", materials: ["X-Antibody Factor Exchange Ticket x7000"], cost: "5 Tera", successRate: "100%" },
          { product: "X-Antibody Factor: GrandisKuwagamon", materials: ["X-Antibody Factor Exchange Ticket x7000"], cost: "5 Tera", successRate: "100%" }
        ]
      }
    ]
  },
  {
    id: "gotsumon",
    npc: "Gotsumon (Item Craft)",
    description: "Item Make System consists in to bring specific materials to Gotsumon on the eastern side of D-Terminal who will immediately exchange them for certain items. Note: You can increase the Craft chance with Fanglongmon's Blessing.",
    categories: [
      {
        name: "Scar of Water Crystal (Hard Mode)",
        recipes: [
          { product: "Sealed Ring of Four Holy Beasts [Lv.1]", materials: ["Xuanwumon Shiny Ring x1", "Jack Frost of Water Crystal x5"], cost: "500 Mega", successRate: "100%" },
          { product: "Sealed Ring of Four Holy Beasts [Lv.2]", materials: ["Ring of Four Holy Beasts [Lv.1] x1", "Xuanwumon Shiny Ring x1", "Jack Frost of Water Crystal x10"], cost: "500 Mega", successRate: "100%" },
          { product: "Sealed Ring of Four Holy Beasts [Lv.3]", materials: ["Ring of Four Holy Beasts [Lv.2] x1", "Xuanwumon Shiny Ring x1", "Jack Frost of Water Crystal x15"], cost: "800 Mega", successRate: "100%" },
          { product: "Sealed Ring of Four Holy Beasts [Lv.4]", materials: ["Ring of Four Holy Beasts [Lv.3] x1", "Xuanwumon Shiny Ring x2", "Jack Frost of Water Crystal x20"], cost: "1 Tera", successRate: "100%" },
          { product: "Sealed Ring of Four Holy Beasts [Lv.5]", materials: ["Ring of Four Holy Beasts [Lv.4] x1", "Xuanwumon Shiny Ring x2", "Jack Frost of Water Crystal x25"], cost: "1 Tera 500 Mega", successRate: "100%" }
        ]
      },
      {
        name: "Uprising Flame (Hard Mode)",
        recipes: [
          { product: "Sealed Necklace of Four Holy Beasts [Lv.1]", materials: ["Flame Necklace of Zhuqiaomon x1", "Uprising Infernal Flame Crystal x5"], cost: "500 Mega", successRate: "100%" },
          { product: "Sealed Necklace of Four Holy Beasts [Lv.2]", materials: ["Necklace of Four Holy Beasts [Lv.1] x1", "Flame Necklace of Zhuqiaomon x1", "Uprising Infernal Flame Crystal x10"], cost: "500 Mega", successRate: "100%" },
          { product: "Sealed Necklace of Four Holy Beasts [Lv.3]", materials: ["Necklace of Four Holy Beasts [Lv.2] x1", "Flame Necklace of Zhuqiaomon x1", "Uprising Infernal Flame Crystal x15"], cost: "800 Mega", successRate: "100%" },
          { product: "Sealed Necklace of Four Holy Beasts [Lv.4]", materials: ["Necklace of Four Holy Beasts [Lv.3] x1", "Flame Necklace of Zhuqiaomon x2", "Uprising Infernal Flame Crystal x20"], cost: "1 Tera", successRate: "100%" },
          { product: "Sealed Necklace of Four Holy Beasts [Lv.5]", materials: ["Necklace of Four Holy Beasts [Lv.4] x1", "Flame Necklace of Zhuqiaomon x2", "Uprising Infernal Flame Crystal x25"], cost: "1 Tera 500 Mega", successRate: "100%" }
        ]
      },
      {
        name: "Trace of the Black Steel (Hard Mode)",
        recipes: [
          { product: "Sealed Earrings of Four Holy Beasts [Lv.1]", materials: ["Aural Earring of Baihumon x1", "Flawless Crystal of Trace x5"], cost: "500 Mega", successRate: "100%" },
          { product: "Sealed Earrings of Four Holy Beasts [Lv.2]", materials: ["Earrings of Four Holy Beasts [Lv.1] x1", "Aural Earring of Baihumon x1", "Flawless Crystal of Trace x10"], cost: "500 Mega", successRate: "100%" },
          { product: "Sealed Earrings of Four Holy Beasts [Lv.3]", materials: ["Earrings of Four Holy Beasts [Lv.2] x1", "Aural Earring of Baihumon x1", "Flawless Crystal of Trace x15"], cost: "800 Mega", successRate: "100%" },
          { product: "Sealed Earrings of Four Holy Beasts [Lv.4]", materials: ["Earrings of Four Holy Beasts [Lv.3] x1", "Aural Earring of Baihumon x2", "Flawless Crystal of Trace x20"], cost: "1 Tera", successRate: "100%" },
          { product: "Sealed Earrings of Four Holy Beasts [Lv.5]", materials: ["Earrings of Four Holy Beasts [Lv.4] x1", "Aural Earring of Baihumon x2", "Flawless Crystal of Trace x25"], cost: "1 Tera 500 Mega", successRate: "100%" }
        ]
      },
      {
        name: "Descending Thunder God (Hard Mode)",
        recipes: [
          { product: "Sealed Radiant Ring of Four Holy Beasts [Lv.1]", materials: ["Ring of Four Holy Beasts [Lv.5] x1", "Qinglongmon's Radiant Ring x1", "Thunder God's Lightning Crystal x5"], cost: "500 Mega", successRate: "100%" },
          { product: "Sealed Radiant Ring of Four Holy Beasts [Lv.2]", materials: ["Radiant Ring of Four Holy Beasts [Lv.1] x1", "Qinglongmon's Radiant Ring x1", "Thunder God's Lightning Crystal x10"], cost: "500 Mega", successRate: "100%" },
          { product: "Sealed Radiant Ring of Four Holy Beasts [Lv.3]", materials: ["Radiant Ring of Four Holy Beasts [Lv.2] x1", "Qinglongmon's Radiant Ring x1", "Thunder God's Lightning Crystal x15"], cost: "800 Mega", successRate: "100%" },
          { product: "Sealed Radiant Ring of Four Holy Beasts [Lv.4]", materials: ["Radiant Ring of Four Holy Beasts [Lv.3] x1", "Qinglongmon's Radiant Ring x2", "Thunder God's Lightning Crystal x20"], cost: "1 Tera", successRate: "100%" },
          { product: "Sealed Radiant Ring of Four Holy Beasts [Lv.5]", materials: ["Radiant Ring of Four Holy Beasts [Lv.4] x1", "Qinglongmon's Radiant Ring x2", "Thunder God's Lightning Crystal x25"], cost: "1 Tera 500 Mega", successRate: "100%" },
          { product: "Sealed Radiant Necklace of Four Holy Beasts [Lv.1]", materials: ["Necklace of Four Holy Beasts [Lv.5] x1", "Qinglongmon's Radiant Necklace x1", "Thunder God's Lightning Crystal x5"], cost: "500 Mega", successRate: "100%" },
          { product: "Sealed Radiant Necklace of Four Holy Beasts [Lv.2]", materials: ["Radiant Necklace of Four Holy Beasts [Lv.1] x1", "Qinglongmon's Radiant Necklace x1", "Thunder God's Lightning Crystal x10"], cost: "500 Mega", successRate: "100%" },
          { product: "Sealed Radiant Necklace of Four Holy Beasts [Lv.3]", materials: ["Radiant Necklace of Four Holy Beasts [Lv.2] x1", "Qinglongmon's Radiant Necklace x1", "Thunder God's Lightning Crystal x15"], cost: "800 Mega", successRate: "100%" },
          { product: "Sealed Radiant Necklace of Four Holy Beasts [Lv.4]", materials: ["Radiant Necklace of Four Holy Beasts [Lv.3] x1", "Qinglongmon's Radiant Necklace x2", "Thunder God's Lightning Crystal x20"], cost: "1 Tera", successRate: "100%" },
          { product: "Sealed Radiant Necklace of Four Holy Beasts [Lv.5]", materials: ["Radiant Necklace of Four Holy Beasts [Lv.4] x1", "Qinglongmon's Radiant Necklace x2", "Thunder God's Lightning Crystal x25"], cost: "1 Tera 500 Mega", successRate: "100%" },
          { product: "Sealed Radiant Earrings of Four Holy Beasts [Lv.1]", materials: ["Earrings of Four Holy Beasts [Lv.5] x1", "Qinglongmon's Radiant Earring x1", "Thunder God's Lightning Crystal x5"], cost: "500 Mega", successRate: "100%" },
          { product: "Sealed Radiant Earrings of Four Holy Beasts [Lv.2]", materials: ["Radiant Earrings of Four Holy Beasts [Lv.1] x1", "Qinglongmon's Radiant Earring x1", "Thunder God's Lightning Crystal x10"], cost: "500 Mega", successRate: "100%" },
          { product: "Sealed Radiant Earrings of Four Holy Beasts [Lv.3]", materials: ["Radiant Earrings of Four Holy Beasts [Lv.2] x1", "Qinglongmon's Radiant Earring x1", "Thunder God's Lightning Crystal x15"], cost: "800 Mega", successRate: "100%" },
          { product: "Sealed Radiant Earrings of Four Holy Beasts [Lv.4]", materials: ["Radiant Earrings of Four Holy Beasts [Lv.3] x1", "Qinglongmon's Radiant Earring x2", "Thunder God's Lightning Crystal x20"], cost: "1 Tera", successRate: "100%" },
          { product: "Sealed Radiant Earrings of Four Holy Beasts [Lv.5]", materials: ["Radiant Earrings of Four Holy Beasts [Lv.4] x1", "Qinglongmon's Radiant Earring x2", "Thunder God's Lightning Crystal x25"], cost: "1 Tera 500 Mega", successRate: "100%" }
        ]
      },
      {
        name: "Holy Beasts Divine Gear",
        recipes: [
          { product: "Sealed Divine Ring of Four Holy Beasts [Lv.5]", materials: ["Radiant Ring of Four Holy Beasts [Lv.5] x1", "Divine Crystal x1"], cost: "5 Tera", successRate: "100%" },
          { product: "Sealed Divine Necklace of Four Holy Beasts [Lv.5]", materials: ["Radiant Necklace of Four Holy Beasts [Lv.5] x1", "Divine Crystal x1"], cost: "5 Tera", successRate: "100%" },
          { product: "Sealed Divine Earrings of Four Holy Beasts [Lv.5]", materials: ["Radiant Earrings of Four Holy Beasts [Lv.5] x1", "Divine Crystal x1"], cost: "5 Tera", successRate: "100%" }
        ]
      },
      {
        name: "Fanglongmon's Ancient Ring",
        recipes: [
          { product: "Fanglongmon's Ancient Ring [Lv.2]", materials: ["Fanglongmon's Ancient Ring [Lv.1] x1", "Sealed Xuanwumon Ring x1", "Fanronkou x5"], cost: "200 Mega", successRate: "100%" },
          { product: "Fanglongmon's Ancient Ring [Lv.3]", materials: ["Fanglongmon's Ancient Ring [Lv.2] x1", "Sealed Xuanwumon Ring x2", "Fanronkou x10"], cost: "300 Mega", successRate: "90%" },
          { product: "Fanglongmon's Ancient Ring [Lv.4]", materials: ["Fanglongmon's Ancient Ring [Lv.3] x1", "Ring of Sealed Zhuqiaomon x1", "Fanronkou x10"], cost: "400 Mega", successRate: "75%" },
          { product: "Fanglongmon's Ancient Ring [Lv.5]", materials: ["Fanglongmon's Ancient Ring [Lv.4] x1", "Ring of Sealed Zhuqiaomon x2", "Fanronkou x15"], cost: "500 Mega", successRate: "65%" },
          { product: "Fanglongmon's Ancient Ring [Lv.6]", materials: ["Fanglongmon's Ancient Ring [Lv.5] x1", "Ring of Sealed Zhuqiaomon x2", "Fanronkou x15"], cost: "600 Mega", successRate: "55%" },
          { product: "Fanglongmon's Ancient Ring [Lv.7]", materials: ["Fanglongmon's Ancient Ring [Lv.6] x1", "Ring of Sealed Baihumon x1", "Fanronkou x20"], cost: "700 Mega", successRate: "45%" },
          { product: "Fanglongmon's Ancient Ring [Lv.8]", materials: ["Fanglongmon's Ancient Ring [Lv.7] x1", "Ring of Sealed Baihumon x2", "Fanronkou x20"], cost: "800 Mega", successRate: "40%" },
          { product: "Fanglongmon's Ancient Ring [Lv.9]", materials: ["Fanglongmon's Ancient Ring [Lv.8] x1", "Qinglongmon's Sealed Ring x1", "Fanronkou x25"], cost: "900 Mega", successRate: "35%" },
          { product: "Fanglongmon's Ancient Ring [Lv.10]", materials: ["Fanglongmon's Ancient Ring [Lv.9] x1", "Qinglongmon's Sealed Ring x2", "Fanronkou x25"], cost: "1 Tera", successRate: "30%" }
        ]
      },
      {
        name: "Fanglongmon's Ancient Necklace",
        recipes: [
          { product: "Fanglongmon's Ancient Necklace [Lv.2]", materials: ["Fanglongmon's Ancient Necklace [Lv.1] x1", "Sealed Xuanwumon Necklace x1", "Fanronkou x5"], cost: "200 Mega", successRate: "100%" },
          { product: "Fanglongmon's Ancient Necklace [Lv.3]", materials: ["Fanglongmon's Ancient Necklace [Lv.2] x1", "Sealed Xuanwumon Necklace x2", "Fanronkou x10"], cost: "300 Mega", successRate: "90%" },
          { product: "Fanglongmon's Ancient Necklace [Lv.4]", materials: ["Fanglongmon's Ancient Necklace [Lv.3] x1", "Necklace of Sealed Zhuqiaomon x1", "Fanronkou x10"], cost: "400 Mega", successRate: "75%" },
          { product: "Fanglongmon's Ancient Necklace [Lv.5]", materials: ["Fanglongmon's Ancient Necklace [Lv.4] x1", "Necklace of Sealed Zhuqiaomon x2", "Fanronkou x15"], cost: "500 Mega", successRate: "65%" },
          { product: "Fanglongmon's Ancient Necklace [Lv.6]", materials: ["Fanglongmon's Ancient Necklace [Lv.5] x1", "Necklace of Sealed Zhuqiaomon x2", "Fanronkou x15"], cost: "600 Mega", successRate: "55%" },
          { product: "Fanglongmon's Ancient Necklace [Lv.7]", materials: ["Fanglongmon's Ancient Necklace [Lv.6] x1", "Necklace of Sealed Baihumon x1", "Fanronkou x20"], cost: "700 Mega", successRate: "45%" },
          { product: "Fanglongmon's Ancient Necklace [Lv.8]", materials: ["Fanglongmon's Ancient Necklace [Lv.7] x1", "Necklace of Sealed Baihumon x2", "Fanronkou x20"], cost: "800 Mega", successRate: "40%" },
          { product: "Fanglongmon's Ancient Necklace [Lv.9]", materials: ["Fanglongmon's Ancient Necklace [Lv.8] x1", "Qinglongmon's Sealed Necklace x1", "Fanronkou x25"], cost: "900 Mega", successRate: "35%" },
          { product: "Fanglongmon's Ancient Necklace [Lv.10]", materials: ["Fanglongmon's Ancient Necklace [Lv.9] x1", "Qinglongmon's Sealed Necklace x2", "Fanronkou x25"], cost: "1 Tera", successRate: "30%" }
        ]
      },
      {
        name: "Fanglongmon's Ancient Earring",
        recipes: [
          { product: "Fanglongmon's Ancient Earring [Lv.2]", materials: ["Fanglongmon's Ancient Earring [Lv.1] x1", "Earring of Sealed Zhuqiaomon x1", "Fanronkou x5"], cost: "200 Mega", successRate: "100%" },
          { product: "Fanglongmon's Ancient Earring [Lv.3]", materials: ["Fanglongmon's Ancient Earring [Lv.2] x1", "Earring of Sealed Zhuqiaomon x2", "Fanronkou x10"], cost: "300 Mega", successRate: "90%" },
          { product: "Fanglongmon's Ancient Earring [Lv.4]", materials: ["Fanglongmon's Ancient Earring [Lv.3] x1", "Earring of Sealed Zhuqiaomon x2", "Fanronkou x10"], cost: "400 Mega", successRate: "75%" },
          { product: "Fanglongmon's Ancient Earring [Lv.5]", materials: ["Fanglongmon's Ancient Earring [Lv.4] x1", "Earring of Sealed Baihumon x1", "Fanronkou x15"], cost: "500 Mega", successRate: "65%" },
          { product: "Fanglongmon's Ancient Earring [Lv.6]", materials: ["Fanglongmon's Ancient Earring [Lv.5] x1", "Earring of Sealed Baihumon x2", "Fanronkou x15"], cost: "600 Mega", successRate: "55%" },
          { product: "Fanglongmon's Ancient Earring [Lv.7]", materials: ["Fanglongmon's Ancient Earring [Lv.6] x1", "Earring of Sealed Baihumon x2", "Fanronkou x20"], cost: "700 Mega", successRate: "45%" },
          { product: "Fanglongmon's Ancient Earring [Lv.8]", materials: ["Fanglongmon's Ancient Earring [Lv.7] x1", "Qinglongmon's Sealed Earring x1", "Fanronkou x20"], cost: "800 Mega", successRate: "40%" },
          { product: "Fanglongmon's Ancient Earring [Lv.9]", materials: ["Fanglongmon's Ancient Earring [Lv.8] x1", "Qinglongmon's Sealed Earring x2", "Fanronkou x25"], cost: "900 Mega", successRate: "35%" },
          { product: "Fanglongmon's Ancient Earring [Lv.10]", materials: ["Fanglongmon's Ancient Earring [Lv.9] x1", "Qinglongmon's Sealed Earring x2", "Fanronkou x25"], cost: "1 Tera", successRate: "30%" }
        ]
      },
      {
        name: "Fanglongmon's Ultimate Gear",
        recipes: [
          { product: "Sealed Fanglongmon's Ultimate Ancient Ring [Lv.10]", materials: ["Fanglongmon's Ancient Ring [Lv.10] x1", "Divine Ring of Four Holy Beasts [Lv.5] x1", "Fanronkou x20"], cost: "1 Tera", successRate: "100%" },
          { product: "Sealed Fanglongmon's Ultimate Ancient Necklace [Lv.10]", materials: ["Fanglongmon's Ancient Necklace [Lv.10] x1", "Divine Necklace of Four Holy Beasts [Lv.5] x1", "Fanronkou x20"], cost: "5 Tera", successRate: "100%" },
          { product: "Sealed Fanglongmon's Ultimate Ancient Earring [Lv.10]", materials: ["Fanglongmon's Ancient Earring [Lv.10] x1", "Divine Earrings of Four Holy Beasts [Lv.5] x1", "Fanronkou x20"], cost: "5 Tera", successRate: "100%" }
        ]
      },
      {
        name: "Fanglongmon's Ticket Exchange",
        recipes: [
          { product: "Fanglongmon's Ancient Earring [Lv.10]", materials: ["Fanglongmon's Ancient Earring [Lv.1] x1", "Fanronkou x100", "Fanglongmon Earring Voucher x1"], cost: "5 Tera", successRate: "100%" },
          { product: "Fanglongmon's Ancient Necklace [Lv.10]", materials: ["Fanglongmon's Ancient Necklace [Lv.1] x1", "Fanronkou x100", "Fanglongmon Necklace Voucher x1"], cost: "5 Tera", successRate: "100%" },
          { product: "Sealed Fanglongmon's Ancient Ring [Lv.10]", materials: ["Fanglongmon's Ring [Lv.1] x1", "Fanronkou x100", "Fanglongmon Ring Voucher x1"], cost: "5 Tera", successRate: "100%" }
        ]
      },
      {
        name: "Fanglongmon's Shining Clothing (Ornament)",
        recipes: [
          { product: "Fanglongmon's Shining Ornament Lv2", materials: ["Fanglongmon's Shining Ornament Lv1 x1", "Shining Fanronkou [CB] x10", "Fanronkou x6"], cost: "5 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Ornament Lv3", materials: ["Fanglongmon's Shining Ornament Lv2 x1", "Shining Fanronkou [CB] x15", "Fanronkou x10"], cost: "10 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Ornament Lv4", materials: ["Fanglongmon's Shining Ornament Lv3 x1", "Shining Fanronkou [CB] x18", "Fanronkou x12"], cost: "15 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Ornament Lv5", materials: ["Fanglongmon's Shining Ornament Lv4 x1", "Shining Fanronkou [CB] x25", "Fanronkou x17"], cost: "20 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Ornament [AA]", materials: ["Fanglongmon's Shining Ornament Lv5 x1", "Baihumon's Flawless Ornament x1", "Shining Fanronkou [CB] x32", "Fanronkou x25", "Flawless Crystal of Trace x50"], cost: "25 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Ornament [SK]", materials: ["Fanglongmon's Shining Ornament Lv5 x1", "Zhuqiaomon's Infernal Ornament x1", "Shining Fanronkou [CB] x32", "Fanronkou x25", "Uprising Infernal Flame Crystal x50"], cost: "25 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Ornament [TA]", materials: ["Fanglongmon's Shining Ornament Lv5 x1", "Xuanwumon's Aquatic Ornament x1", "Shining Fanronkou [CB] x32", "Fanronkou x25", "Jack Frost of Water Crystal x50"], cost: "25 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Ornament [SU]", materials: ["Fanglongmon's Shining Ornament Lv5 x1", "Qinglongmon's Lightning Ornament x1", "Shining Fanronkou [CB] x32", "Fanronkou x25", "Thunder Gods Lightning Crystal x100"], cost: "25 Tera", successRate: "100%" }
        ]
      },
      {
        name: "Fanglongmon's Shining Clothing (Cape)",
        recipes: [
          { product: "Fanglongmon's Shining Cape Lv2", materials: ["Fanglongmon's Shining Cape Lv1 x1", "Shining Fanronkou [CB] x10", "Fanronkou x6"], cost: "5 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Cape Lv3", materials: ["Fanglongmon's Shining Cape Lv2 x1", "Shining Fanronkou [CB] x15", "Fanronkou x10"], cost: "10 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Cape Lv4", materials: ["Fanglongmon's Shining Cape Lv3 x1", "Shining Fanronkou [CB] x18", "Fanronkou x12"], cost: "15 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Cape Lv5", materials: ["Fanglongmon's Shining Cape Lv4 x1", "Shining Fanronkou [CB] x25", "Fanronkou x17"], cost: "20 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Cape [AA]", materials: ["Fanglongmon's Shining Cape Lv5 x1", "Baihumon's Flawless Cape x1", "Shining Fanronkou [CB] x32", "Fanronkou x25", "Flawless Crystal of Trace x50"], cost: "25 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Cape [SK]", materials: ["Fanglongmon's Shining Cape Lv5 x1", "Zhuqiaomon's Infernal Cape x1", "Shining Fanronkou [CB] x32", "Fanronkou x25", "Uprising Infernal Flame Crystal x50"], cost: "25 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Cape [TA]", materials: ["Fanglongmon's Shining Cape Lv5 x1", "Xuanwumon's Aquatic Cape x1", "Shining Fanronkou [CB] x32", "Fanronkou x25", "Jack Frost of Water Crystal x50"], cost: "25 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Cape [SU]", materials: ["Fanglongmon's Shining Cape Lv5 x1", "Qinglongmon's Lightning Cape x1", "Shining Fanronkou [CB] x32", "Fanronkou x25", "Thunder Gods Lightning Crystal x100"], cost: "25 Tera", successRate: "100%" }
        ]
      },
      {
        name: "Fanglongmon's Shining Clothing (Hooded Shirt)",
        recipes: [
          { product: "Fanglongmon's Shining Hooded Shirt Lv2", materials: ["Fanglongmon's Shining Hooded Shirt Lv1 x1", "Shining Fanronkou [CB] x10", "Fanronkou x6"], cost: "5 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Hooded Shirt Lv3", materials: ["Fanglongmon's Shining Hooded Shirt Lv2 x1", "Shining Fanronkou [CB] x15", "Fanronkou x10"], cost: "10 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Hooded Shirt Lv4", materials: ["Fanglongmon's Shining Hooded Shirt Lv3 x1", "Shining Fanronkou [CB] x18", "Fanronkou x12"], cost: "15 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Hooded Shirt Lv5", materials: ["Fanglongmon's Shining Hooded Shirt Lv4 x1", "Shining Fanronkou [CB] x25", "Fanronkou x17"], cost: "20 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Hooded Shirt [AA]", materials: ["Fanglongmon's Shining Hooded Shirt Lv5 x1", "Baihumon's Flawless Hooded Shirt x1", "Shining Fanronkou [CB] x32", "Fanronkou x25", "Flawless Crystal of Trace x50"], cost: "25 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Hooded Shirt [SK]", materials: ["Fanglongmon's Shining Hooded Shirt Lv5 x1", "Zhuqiaomon's Infernal Hooded Shirt x1", "Shining Fanronkou [CB] x32", "Fanronkou x25", "Uprising Infernal Flame Crystal x50"], cost: "25 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Hooded Shirt [TA]", materials: ["Fanglongmon's Shining Hooded Shirt Lv5 x1", "Xuanwumon's Aquatic Hooded Shirt x1", "Shining Fanronkou [CB] x32", "Fanronkou x25", "Jack Frost of Water Crystal x50"], cost: "25 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Hooded Shirt [SU]", materials: ["Fanglongmon's Shining Hooded Shirt Lv5 x1", "Qinglongmon's Lightning Hooded Shirt x1", "Shining Fanronkou [CB] x32", "Fanronkou x25", "Thunder Gods Lightning Crystal x100"], cost: "25 Tera", successRate: "100%" }
        ]
      },
      {
        name: "Fanglongmon's Shining Clothing (Pants)",
        recipes: [
          { product: "Fanglongmon's Shining Pants Lv2", materials: ["Fanglongmon's Shining Pants Lv1 x1", "Shining Fanronkou [CB] x10", "Fanronkou x6"], cost: "5 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Pants Lv3", materials: ["Fanglongmon's Shining Pants Lv2 x1", "Shining Fanronkou [CB] x15", "Fanronkou x10"], cost: "10 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Pants Lv4", materials: ["Fanglongmon's Shining Pants Lv3 x1", "Shining Fanronkou [CB] x18", "Fanronkou x12"], cost: "15 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Pants Lv5", materials: ["Fanglongmon's Shining Pants Lv4 x1", "Shining Fanronkou [CB] x25", "Fanronkou x17"], cost: "20 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Pants [AA]", materials: ["Fanglongmon's Shining Pants Lv5 x1", "Baihumon's Flawless Short Pants x1", "Shining Fanronkou [CB] x32", "Fanronkou x25", "Flawless Crystal of Trace x50"], cost: "25 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Pants [SK]", materials: ["Fanglongmon's Shining Pants Lv5 x1", "Zhuqiaomon's Infernal Short Pants x1", "Shining Fanronkou [CB] x32", "Fanronkou x25", "Uprising Infernal Flame Crystal x50"], cost: "25 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Pants [TA]", materials: ["Fanglongmon's Shining Pants Lv5 x1", "Xuanwumon's Aquatic Short Pants x1", "Shining Fanronkou [CB] x32", "Fanronkou x25", "Jack Frost of Water Crystal x50"], cost: "25 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Pants [SU]", materials: ["Fanglongmon's Shining Pants Lv5 x1", "Qinglongmon's Lightning Short Pants x1", "Shining Fanronkou [CB] x32", "Fanronkou x25", "Thunder Gods Lightning Crystal x100"], cost: "25 Tera", successRate: "100%" }
        ]
      },
      {
        name: "Fanglongmon's Shining Clothing (Gloves)",
        recipes: [
          { product: "Fanglongmon's Shining Gloves Lv2", materials: ["Fanglongmon's Shining Gloves Lv1 x1", "Shining Fanronkou [CB] x10", "Fanronkou x6"], cost: "5 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Gloves Lv3", materials: ["Fanglongmon's Shining Gloves Lv2 x1", "Shining Fanronkou [CB] x15", "Fanronkou x10"], cost: "10 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Gloves Lv4", materials: ["Fanglongmon's Shining Gloves Lv3 x1", "Shining Fanronkou [CB] x18", "Fanronkou x12"], cost: "15 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Gloves Lv5", materials: ["Fanglongmon's Shining Gloves Lv4 x1", "Shining Fanronkou [CB] x25", "Fanronkou x17"], cost: "20 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Gloves [AA]", materials: ["Fanglongmon's Shining Gloves Lv5 x1", "Baihumon's Flawless Gloves x1", "Shining Fanronkou [CB] x32", "Fanronkou x25", "Flawless Crystal of Trace x50"], cost: "25 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Gloves [SK]", materials: ["Fanglongmon's Shining Gloves Lv5 x1", "Zhuqiaomon's Infernal Gloves x1", "Shining Fanronkou [CB] x32", "Fanronkou x25", "Uprising Infernal Flame Crystal x50"], cost: "25 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Gloves [TA]", materials: ["Fanglongmon's Shining Gloves Lv5 x1", "Xuanwumon's Aquatic Gloves x1", "Shining Fanronkou [CB] x32", "Fanronkou x25", "Jack Frost of Water Crystal x50"], cost: "25 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Gloves [SU]", materials: ["Fanglongmon's Shining Gloves Lv5 x1", "Qinglongmon's Lightning Gloves x1", "Shining Fanronkou [CB] x32", "Fanronkou x25", "Thunder Gods Lightning Crystal x100"], cost: "25 Tera", successRate: "100%" }
        ]
      },
      {
        name: "Fanglongmon's Shining Clothing (Shoes)",
        recipes: [
          { product: "Fanglongmon's Shining Shoes Lv2", materials: ["Fanglongmon's Shining Shoes Lv1 x1", "Shining Fanronkou [CB] x10", "Fanronkou x6"], cost: "5 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Shoes Lv3", materials: ["Fanglongmon's Shining Shoes Lv2 x1", "Shining Fanronkou [CB] x15", "Fanronkou x10"], cost: "10 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Shoes Lv4", materials: ["Fanglongmon's Shining Shoes Lv3 x1", "Shining Fanronkou [CB] x18", "Fanronkou x12"], cost: "15 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Shoes Lv5", materials: ["Fanglongmon's Shining Shoes Lv4 x1", "Shining Fanronkou [CB] x25", "Fanronkou x17"], cost: "20 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Shoes [AA]", materials: ["Fanglongmon's Shining Shoes Lv5 x1", "Shining Fanronkou [CB] x32", "Fanronkou x25", "Flawless Crystal of Trace x50"], cost: "25 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Shoes [SK]", materials: ["Fanglongmon's Shining Shoes Lv5 x1", "Shining Fanronkou [CB] x32", "Fanronkou x25", "Uprising Infernal Flame Crystal x50"], cost: "25 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Shoes [TA]", materials: ["Fanglongmon's Shining Shoes Lv5 x1", "Shining Fanronkou [CB] x32", "Fanronkou x25", "Jack Frost of Water Crystal x50"], cost: "25 Tera", successRate: "100%" },
          { product: "Fanglongmon's Shining Shoes [SU]", materials: ["Fanglongmon's Shining Shoes Lv5 x1", "Shining Fanronkou [CB] x32", "Fanronkou x25", "Thunder Gods Lightning Crystal x100"], cost: "25 Tera", successRate: "100%" }
        ]
      },
      {
        name: "Misc / Exchange",
        recipes: [
          { product: "Shining Fanronkou [CB]", materials: ["Shining Fanronkou x1"], cost: "Free", successRate: "100%" },
          { product: "Golden Option Change Stone [Event]", materials: ["Option Change Stone x200"], cost: "Free", successRate: "100% (Limit: 20)" },
          { product: "Golden Number Change Stone [Event]", materials: ["Number Change Stone x200"], cost: "Free", successRate: "100% (Limit: 20)" }
        ]
      }
    ]
  },
  {
    id: "nanomon",
    npc: "Nanomon (Item Crafter)",
    description: "Item Make System consists in to bring specific materials to Nanomon on the western side of DATS Center, who will immediately exchange them for certain items.",
    categories: [
      {
        name: "Make Digivice",
        recipes: [
          { product: "Digivice of Beginning Lv. 1", materials: ["Digivice of Beginning Lv. 0 x1", "Essence of Evolution x149", "Fragment of Evolution x8"], cost: "200 Mega", successRate: "100%" },
          { product: "Digivice of Beginning Lv. 2", materials: ["Digivice of Beginning Lv. 1 x1", "Essence of Evolution x211", "Piece of Evolution x11", "Myotismon's Digicore x6"], cost: "600 Mega", successRate: "100%" },
          { product: "Digivice of Adventure Lv. 0", materials: ["Digivice of Beginning Lv. 2 x1", "Essence of Evolution x287", "Infective Virus x8", "Digimon's Bionic Energy x7", "Digital Energy x7"], cost: "1 Tera 500 Mega", successRate: "100%" },
          { product: "Digivice of Adventure Lv. 1", materials: ["Digivice of Adventure Lv. 0 x1", "Essence of Evolution x301", "SkullMeramon's Digicore x7", "Absolute Essence of Evolution x5"], cost: "2 Tera 700 Mega", successRate: "100%" },
          { product: "Digivice of Adventure Lv. 2", materials: ["Digivice of Adventure Lv. 1 x1", "Essence of Evolution x307", "Soul of Myotismon x6", "Heinous Digicore x3"], cost: "4 Tera 500 Mega", successRate: "100%" },
          { product: "True Digivice", materials: ["Digivice of Adventure Lv. 2 x1", "Essence of Evolution x318", "VenomMyotismon's Venom x7", "Condensed Dark Energy x4"], cost: "8 Tera", successRate: "100%" },
          { product: "True Digivice", materials: ["103-OT-Blue Digivice x1", "Essence of Evolution x318", "VenomMyotismon's Venom x7", "Condensed Dark Energy x4"], cost: "8 Tera", successRate: "100%" },
          { product: "True Digivice", materials: ["103-OT-Orange Digivice x1", "Essence of Evolution x318", "VenomMyotismon's Venom x7", "Condensed Dark Energy x4"], cost: "8 Tera", successRate: "100%" },
          { product: "True Digivice", materials: ["103-OT-Purple Digivice x1", "Essence of Evolution x318", "VenomMyotismon's Venom x7", "Condensed Dark Energy x4"], cost: "8 Tera", successRate: "100%" }
        ]
      },
      {
        name: "Digivice Material",
        recipes: [
          { product: "Absolute Essence of Evolution", materials: ["Fragment of Evolution x3", "Piece of Evolution x3"], cost: "100 Mega", successRate: "100%" },
          { product: "Heinous Digicore", materials: ["SkullMeramon's Digicore x1", "Myotismon's Digicore x3", "Infective Virus x3"], cost: "300 Mega", successRate: "100%" },
          { product: "Condensed Dark Energy", materials: ["Myotismon's Digicore x1", "SkullMeramon's Digicore x2", "Soul of Myotismon x1"], cost: "700 Mega", successRate: "100%" },
          { product: "Fragment of Evolution", materials: ["Powder of Evolution x2"], cost: "Free", successRate: "100%" },
          { product: "Piece of Evolution", materials: ["Powder of Evolution x2"], cost: "Free", successRate: "100%" },
          { product: "Myotismons Digicore", materials: ["Powder of Evolution x2"], cost: "Free", successRate: "100%" },
          { product: "Infective Virus", materials: ["Powder of Evolution x2"], cost: "Free", successRate: "100%" },
          { product: "Digimon's Bionic Energy", materials: ["Powder of Evolution x2"], cost: "Free", successRate: "100%" },
          { product: "Digital Energy", materials: ["Powder of Evolution x2"], cost: "Free", successRate: "100%" },
          { product: "Fragment of Evolution (Convert)", materials: ["Fragment of Evolution x1"], cost: "Free", successRate: "100%" },
          { product: "Piece of Evolution (Convert)", materials: ["Piece of Evolution x1"], cost: "Free", successRate: "100%" },
          { product: "Myotismons Digicore (Convert)", materials: ["Myotismons Digicore x1"], cost: "Free", successRate: "100%" },
          { product: "Infective Virus (Convert)", materials: ["Infective Virus x1"], cost: "Free", successRate: "100%" },
          { product: "Digimon's Bionic Energy (Convert)", materials: ["Digimon's Bionic Energy x1"], cost: "Free", successRate: "100%" },
          { product: "Digital Energy (Convert)", materials: ["Digital Energy x1"], cost: "Free", successRate: "100%" }
        ]
      },
      {
        name: "True Digivice",
        recipes: [
          { product: "True Digivice", materials: ["Digivice of Courage x1", "VenomMyotismon's Venom x1", "Soul of Myotismon x2", "SkullMeramon's Digicore x4", "Essence of Evolution x710"], cost: "4 Tera", successRate: "100%" },
          { product: "True Digivice", materials: ["Digivice of Friendship x1", "VenomMyotismon's Venom x1", "Soul of Myotismon x2", "SkullMeramon's Digicore x4", "Essence of Evolution x710"], cost: "4 Tera", successRate: "100%" },
          { product: "True Digivice", materials: ["Digivice of Love x1", "VenomMyotismon's Venom x1", "Soul of Myotismon x2", "SkullMeramon's Digicore x4", "Essence of Evolution x710"], cost: "4 Tera", successRate: "100%" },
          { product: "True Digivice", materials: ["Digivice of Purity x1", "VenomMyotismon's Venom x1", "Soul of Myotismon x2", "SkullMeramon's Digicore x4", "Essence of Evolution x710"], cost: "4 Tera", successRate: "100%" },
          { product: "True Digivice", materials: ["Digivice of Knowledge x1", "VenomMyotismon's Venom x1", "Soul of Myotismon x2", "SkullMeramon's Digicore x4", "Essence of Evolution x710"], cost: "4 Tera", successRate: "100%" },
          { product: "True Digivice", materials: ["Digivice of Sincerity x1", "VenomMyotismon's Venom x1", "Soul of Myotismon x2", "SkullMeramon's Digicore x4", "Essence of Evolution x710"], cost: "4 Tera", successRate: "100%" },
          { product: "True Digivice", materials: ["Digivice of Hope x1", "VenomMyotismon's Venom x1", "Soul of Myotismon x2", "SkullMeramon's Digicore x4", "Essence of Evolution x710"], cost: "4 Tera", successRate: "100%" },
          { product: "True Digivice", materials: ["Digivice of Light x1", "VenomMyotismon's Venom x1", "Soul of Myotismon x2", "SkullMeramon's Digicore x4", "Essence of Evolution x710"], cost: "4 Tera", successRate: "100%" },
          { product: "True Digivice", materials: ["Digivice of Kindness x1", "VenomMyotismon's Venom x1", "Soul of Myotismon x2", "SkullMeramon's Digicore x4", "Essence of Evolution x710"], cost: "4 Tera", successRate: "100%" },
          { product: "True Digivice", materials: ["Digivice of Fate x1", "VenomMyotismon's Venom x1", "Soul of Myotismon x2", "SkullMeramon's Digicore x4", "Essence of Evolution x710"], cost: "4 Tera", successRate: "100%" },
          { product: "True Digivice", materials: ["Digivice of Miracle x1", "VenomMyotismon's Venom x1", "Soul of Myotismon x2", "SkullMeramon's Digicore x4", "Essence of Evolution x710"], cost: "4 Tera", successRate: "100%" }
        ]
      },
      {
        name: "True Digivice Advanced (From Basic)",
        recipes: [
          { product: "True Digivice (Advanced)", materials: ["Digivice of Courage x1", "Crest of Bravery x100", "Crest of Friendship x100", "Complete Virus x100", "Essence of Evolution x250"], cost: "100 Tera", successRate: "100%" },
          { product: "True Digivice (Advanced)", materials: ["Digivice of Friendship x1", "Crest of Bravery x100", "Crest of Friendship x100", "Complete Virus x100", "Essence of Evolution x250"], cost: "100 Tera", successRate: "100%" },
          { product: "True Digivice (Advanced)", materials: ["Digivice of Love x1", "Crest of Bravery x100", "Crest of Friendship x100", "Complete Virus x100", "Essence of Evolution x250"], cost: "100 Tera", successRate: "100%" },
          { product: "True Digivice (Advanced)", materials: ["Digivice of Purity x1", "Crest of Bravery x100", "Crest of Friendship x100", "Complete Virus x100", "Essence of Evolution x250"], cost: "100 Tera", successRate: "100%" },
          { product: "True Digivice (Advanced)", materials: ["Digivice of Knowledge x1", "Crest of Bravery x100", "Crest of Friendship x100", "Complete Virus x100", "Essence of Evolution x250"], cost: "100 Tera", successRate: "100%" },
          { product: "True Digivice (Advanced)", materials: ["Digivice of Sincerity x1", "Crest of Bravery x100", "Crest of Friendship x100", "Complete Virus x100", "Essence of Evolution x250"], cost: "100 Tera", successRate: "100%" },
          { product: "True Digivice (Advanced)", materials: ["Digivice of Hope x1", "Crest of Bravery x100", "Crest of Friendship x100", "Complete Virus x100", "Essence of Evolution x250"], cost: "100 Tera", successRate: "100%" },
          { product: "True Digivice (Advanced)", materials: ["Digivice of Light x1", "Crest of Bravery x100", "Crest of Friendship x100", "Complete Virus x100", "Essence of Evolution x250"], cost: "100 Tera", successRate: "100%" },
          { product: "True Digivice (Advanced)", materials: ["Digivice of Kindness x1", "Crest of Bravery x100", "Crest of Friendship x100", "Complete Virus x100", "Essence of Evolution x250"], cost: "100 Tera", successRate: "100%" },
          { product: "True Digivice (Advanced)", materials: ["Digivice of Fate x1", "Crest of Bravery x100", "Crest of Friendship x100", "Complete Virus x100", "Essence of Evolution x250"], cost: "100 Tera", successRate: "100%" },
          { product: "True Digivice (Advanced)", materials: ["Digivice of Miracle x1", "Crest of Bravery x100", "Crest of Friendship x100", "Complete Virus x100", "Essence of Evolution x250"], cost: "100 Tera", successRate: "100%" },
          { product: "True Digivice (Advanced)", materials: ["103-OT-Blue Digivice x1", "Crest of Bravery x100", "Crest of Friendship x100", "Complete Virus x100", "Essence of Evolution x250"], cost: "100 Tera", successRate: "100%" },
          { product: "True Digivice (Advanced)", materials: ["103-OT-Orange Digivice x1", "Crest of Bravery x100", "Crest of Friendship x100", "Complete Virus x100", "Essence of Evolution x250"], cost: "100 Tera", successRate: "100%" },
          { product: "True Digivice (Advanced)", materials: ["103-OT-Purple Digivice x1", "Crest of Bravery x100", "Crest of Friendship x100", "Complete Virus x100", "Essence of Evolution x250"], cost: "100 Tera", successRate: "100%" }
        ]
      },
      {
        name: "True Digivice Advanced (From Advanced)",
        recipes: [
          { product: "True Digivice (Advanced)", materials: ["Digivice of Courage (Advanced) x1", "Crest of Bravery x20", "Crest of Friendship x20", "Complete Virus x20", "Essence of Evolution x100"], cost: "2 Tera", successRate: "100%" },
          { product: "True Digivice (Advanced)", materials: ["Digivice of Friendship (Advanced) x1", "Crest of Bravery x20", "Crest of Friendship x20", "Complete Virus x20", "Essence of Evolution x100"], cost: "2 Tera", successRate: "100%" },
          { product: "True Digivice (Advanced)", materials: ["Digivice of Love (Advanced) x1", "Crest of Bravery x20", "Crest of Friendship x20", "Complete Virus x20", "Essence of Evolution x100"], cost: "2 Tera", successRate: "100%" },
          { product: "True Digivice (Advanced)", materials: ["Digivice of Purity (Advanced) x1", "Crest of Bravery x20", "Crest of Friendship x20", "Complete Virus x20", "Essence of Evolution x100"], cost: "2 Tera", successRate: "100%" },
          { product: "True Digivice (Advanced)", materials: ["Digivice of Knowledge (Advanced) x1", "Crest of Bravery x20", "Crest of Friendship x20", "Complete Virus x20", "Essence of Evolution x100"], cost: "2 Tera", successRate: "100%" },
          { product: "True Digivice (Advanced)", materials: ["Digivice of Sincerity (Advanced) x1", "Crest of Bravery x20", "Crest of Friendship x20", "Complete Virus x20", "Essence of Evolution x100"], cost: "2 Tera", successRate: "100%" },
          { product: "True Digivice (Advanced)", materials: ["Digivice of Hope (Advanced) x1", "Crest of Bravery x20", "Crest of Friendship x20", "Complete Virus x20", "Essence of Evolution x100"], cost: "2 Tera", successRate: "100%" },
          { product: "True Digivice (Advanced)", materials: ["Digivice of Light (Advanced) x1", "Crest of Bravery x20", "Crest of Friendship x20", "Complete Virus x20", "Essence of Evolution x100"], cost: "2 Tera", successRate: "100%" },
          { product: "True Digivice (Advanced)", materials: ["Digivice of Kindness (Advanced) x1", "Crest of Bravery x20", "Crest of Friendship x20", "Complete Virus x20", "Essence of Evolution x100"], cost: "2 Tera", successRate: "100%" },
          { product: "True Digivice (Advanced)", materials: ["Digivice of Fate (Advanced) x1", "Crest of Bravery x20", "Crest of Friendship x20", "Complete Virus x20", "Essence of Evolution x100"], cost: "2 Tera", successRate: "100%" },
          { product: "True Digivice (Advanced)", materials: ["Digivice of Miracle (Advanced) x1", "Crest of Bravery x20", "Crest of Friendship x20", "Complete Virus x20", "Essence of Evolution x100"], cost: "2 Tera", successRate: "100%" },
          { product: "True Digivice (Advanced)", materials: ["103 OT Digivice Orange (Advanced) x1", "Crest of Bravery x20", "Crest of Friendship x20", "Complete Virus x20", "Essence of Evolution x100"], cost: "2 Tera", successRate: "100%" },
          { product: "True Digivice (Advanced)", materials: ["103 OT Digivice Purple (Advanced) x1", "Crest of Bravery x20", "Crest of Friendship x20", "Complete Virus x20", "Essence of Evolution x100"], cost: "2 Tera", successRate: "100%" }
        ]
      },
      {
        name: "Skill DigiCode (Max 15)",
        recipes: [
          { product: "Skill DigiCode (Rookie-Mega) Lv15", materials: ["Simple Data String x100", "Low Quality Data Chip x100"], cost: "5 Tera", successRate: "100%" },
          { product: "Skill DigiCode (Rookie X-Mega X) Lv15", materials: ["Simple Data String x100", "Low Quality Data Chip x100"], cost: "5 Tera", successRate: "100%" },
          { product: "Skill DigiCode (Burst Mode) Lv15", materials: ["Refined Data String x100", "Mid Quality Data Chip x100"], cost: "7 Tera 500 Mega", successRate: "100%" },
          { product: "Skill DigiCode (Burst Mode X) Lv15", materials: ["Refined Data String x100", "Mid Quality Data Chip x100"], cost: "7 Tera 500 Mega", successRate: "100%" },
          { product: "Skill DigiCode (Jogress) Lv15", materials: ["Complex Data String x100", "High Quality Data Chip x100"], cost: "9 Tera", successRate: "100%" },
          { product: "Skill DigiCode (Jogress X) Lv15", materials: ["Complex Data String x100", "High Quality Data Chip x100"], cost: "9 Tera", successRate: "100%" },
          { product: "Skill DigiCode (Armor) Lv15", materials: ["Simple Data String x100", "Low Quality Data Chip x100"], cost: "5 Tera", successRate: "100%" },
          { product: "Skill DigiCode (Hybrid) Lv15", materials: ["Refined Data String x100", "Mid Quality Data Chip x100"], cost: "7 Tera 500 Mega", successRate: "100%" },
          { product: "Skill DigiCode (Extra) Lv15", materials: ["Complex Data String x100", "High Quality Data Chip x100"], cost: "9 Tera", successRate: "100%" }
        ]
      },
      {
        name: "Skill DigiCode (Max 20)",
        recipes: [
          { product: "Skill DigiCode (Rookie-Mega) Lv20", materials: ["Skill DigiCode (Rookie-Mega) Lv15 x3"], cost: "3 Tera", successRate: "100%" },
          { product: "Skill DigiCode (Rookie X-Mega X) Lv20", materials: ["Skill DigiCode (Rookie X-Mega X) Lv15 x3"], cost: "3 Tera", successRate: "100%" },
          { product: "Skill DigiCode (Burst Mode) Lv20", materials: ["Skill DigiCode (Burst Mode) Lv15 x3"], cost: "4 Tera", successRate: "100%" },
          { product: "Skill DigiCode (Burst Mode X) Lv20", materials: ["Skill DigiCode (Burst Mode X) Lv15 x3"], cost: "4 Tera", successRate: "100%" },
          { product: "Skill DigiCode (Jogress) Lv20", materials: ["Skill DigiCode (Jogress) Lv15 x3"], cost: "5 Tera", successRate: "100%" },
          { product: "Skill DigiCode (Jogress X) Lv20", materials: ["Skill DigiCode (Jogress X) Lv15 x3"], cost: "5 Tera", successRate: "100%" },
          { product: "Skill DigiCode (Armor) Lv20", materials: ["Skill DigiCode (Armor) Lv15 x3"], cost: "3 Tera", successRate: "100%" },
          { product: "Skill DigiCode (Hybrid) Lv20", materials: ["Skill DigiCode (Hybrid) Lv15 x3"], cost: "4 Tera", successRate: "100%" },
          { product: "Skill DigiCode (Extra) Lv20", materials: ["Skill DigiCode (Extra) Lv15 x3"], cost: "5 Tera", successRate: "100%" }
        ]
      },
      {
        name: "Skill DigiCode (Max 25)",
        recipes: [
          { product: "Skill DigiCode (Rookie-Mega) Lv25", materials: ["Skill DigiCode (Rookie-Mega) Lv20 x3"], cost: "6 Tera", successRate: "100%" },
          { product: "Skill DigiCode (Rookie X-Mega X) Lv25", materials: ["Skill DigiCode (Rookie X-Mega X) Lv20 x3"], cost: "6 Tera", successRate: "100%" },
          { product: "Skill DigiCode (Burst Mode) Lv25", materials: ["Skill DigiCode (Burst Mode) Lv20 x3"], cost: "7 Tera", successRate: "100%" },
          { product: "Skill DigiCode (Burst Mode X) Lv25", materials: ["Skill DigiCode (Burst Mode X) Lv20 x3"], cost: "7 Tera", successRate: "100%" },
          { product: "Skill DigiCode (Jogress) Lv25", materials: ["Skill DigiCode (Jogress) Lv20 x3"], cost: "9 Tera", successRate: "100%" },
          { product: "Skill DigiCode (Jogress X) Lv25", materials: ["Skill DigiCode (Jogress X) Lv20 x3"], cost: "9 Tera", successRate: "100%" },
          { product: "Skill DigiCode (Armor) Lv25", materials: ["Skill DigiCode (Armor) Lv20 x3"], cost: "6 Tera", successRate: "100%" },
          { product: "Skill DigiCode (Hybrid) Lv25", materials: ["Skill DigiCode (Hybrid) Lv20 x3"], cost: "7 Tera", successRate: "100%" },
          { product: "Skill DigiCode (Extra) Lv25", materials: ["Skill DigiCode (Extra) Lv20 x3"], cost: "9 Tera", successRate: "100%" }
        ]
      },
      {
        name: "Chipset Upgrade (R4 - R8)",
        recipes: [
          { product: "Chipset Box (HP) R4", materials: ["Chipset Box (HP) R3 x2"], cost: "38 Mega 800 Bit", successRate: "60%" },
          { product: "Chipset Box (AT) R4", materials: ["Chipset Box (AT) R3 x2"], cost: "38 Mega 800 Bit", successRate: "60%" },
          { product: "Chipset Box (DS) R4", materials: ["Chipset Box (DS) R3 x2"], cost: "38 Mega 800 Bit", successRate: "60%" },
          { product: "Chipset Box (DE) R4", materials: ["Chipset Box (DE) R3 x2"], cost: "38 Mega 800 Bit", successRate: "60%" },
          { product: "Chipset Box (HT) R4", materials: ["Chipset Box (HT) R3 x2"], cost: "38 Mega 800 Bit", successRate: "60%" },
          { product: "Chipset Box (HP) R5", materials: ["Chipset Box (HP) R4 x2"], cost: "51 Mega 900 Bit", successRate: "60%" },
          { product: "Chipset Box (AT) R5", materials: ["Chipset Box (AT) R4 x2"], cost: "51 Mega 900 Bit", successRate: "60%" },
          { product: "Chipset Box (DS) R5", materials: ["Chipset Box (DS) R4 x2"], cost: "51 Mega 900 Bit", successRate: "60%" },
          { product: "Chipset Box (DE) R5", materials: ["Chipset Box (DE) R4 x2"], cost: "51 Mega 900 Bit", successRate: "60%" },
          { product: "Chipset Box (HT) R5", materials: ["Chipset Box (HT) R4 x2"], cost: "51 Mega 900 Bit", successRate: "60%" },
          { product: "Chipset Box (HP) R6", materials: ["Chipset Box (HP) R5 x2"], cost: "68 Mega 800 Bit", successRate: "60%" },
          { product: "Chipset Box (AT) R6", materials: ["Chipset Box (AT) R5 x2"], cost: "68 Mega 800 Bit", successRate: "60%" },
          { product: "Chipset Box (DS) R6", materials: ["Chipset Box (DS) R5 x2"], cost: "68 Mega 800 Bit", successRate: "60%" },
          { product: "Chipset Box (DE) R6", materials: ["Chipset Box (DE) R5 x2"], cost: "68 Mega 800 Bit", successRate: "60%" },
          { product: "Chipset Box (HT) R6", materials: ["Chipset Box (HT) R5 x2"], cost: "68 Mega 800 Bit", successRate: "60%" },
          { product: "Chipset Box (HP) R7", materials: ["Chipset Box (HP) R6 x2", "Chipset Conversion Kit R1 x1"], cost: "90 Mega 900 Bit", successRate: "60%" },
          { product: "Chipset Box (AT) R7", materials: ["Chipset Box (AT) R6 x2", "Chipset Conversion Kit R1 x1"], cost: "90 Mega 900 Bit", successRate: "60%" },
          { product: "Chipset Box (DS) R7", materials: ["Chipset Box (DS) R6 x2", "Chipset Conversion Kit R1 x1"], cost: "90 Mega 900 Bit", successRate: "60%" },
          { product: "Chipset Box (DE) R7", materials: ["Chipset Box (DE) R6 x2", "Chipset Conversion Kit R1 x1"], cost: "90 Mega 900 Bit", successRate: "60%" },
          { product: "Chipset Box (HT) R7", materials: ["Chipset Box (HT) R6 x2", "Chipset Conversion Kit R1 x1"], cost: "90 Mega 900 Bit", successRate: "60%" },
          { product: "Chipset Box (HP) R8", materials: ["Chipset Box (HP) R7 x2", "Chipset Conversion Kit R1 x3"], cost: "119 Mega 500 Bit", successRate: "60%" },
          { product: "Chipset Box (AT) R8", materials: ["Chipset Box (AT) R7 x2", "Chipset Conversion Kit R1 x3"], cost: "119 Mega 500 Bit", successRate: "60%" },
          { product: "Chipset Box (DS) R8", materials: ["Chipset Box (DS) R7 x2", "Chipset Conversion Kit R1 x3"], cost: "119 Mega 500 Bit", successRate: "60%" },
          { product: "Chipset Box (DE) R8", materials: ["Chipset Box (DE) R7 x2", "Chipset Conversion Kit R1 x3"], cost: "119 Mega 500 Bit", successRate: "60%" },
          { product: "Chipset Box (HT) R8", materials: ["Chipset Box (HT) R7 x2", "Chipset Conversion Kit R1 x3"], cost: "119 Mega 500 Bit", successRate: "60%" }
        ]
      },
      {
        name: "Chipset Upgrade (R9 - R14)",
        recipes: [
          { product: "Chipset Box (HP) R9", materials: ["Chipset Box (HP) R8 x2", "Chipset Conversion Kit R1 x10"], cost: "156 Mega 900 Bit", successRate: "60%" },
          { product: "Chipset Box (AT) R9", materials: ["Chipset Box (AT) R8 x2", "Chipset Conversion Kit R1 x10"], cost: "156 Mega 900 Bit", successRate: "60%" },
          { product: "Chipset Box (DS) R9", materials: ["Chipset Box (DS) R8 x2", "Chipset Conversion Kit R1 x10"], cost: "156 Mega 900 Bit", successRate: "60%" },
          { product: "Chipset Box (DE) R9", materials: ["Chipset Box (DE) R8 x2", "Chipset Conversion Kit R1 x10"], cost: "156 Mega 900 Bit", successRate: "60%" },
          { product: "Chipset Box (HT) R9", materials: ["Chipset Box (HT) R8 x2", "Chipset Conversion Kit R1 x10"], cost: "156 Mega 900 Bit", successRate: "60%" },
          { product: "Chipset Box (HP) R10", materials: ["Chipset Box (HP) R9 x2", "Chipset Conversion Kit R2 x1"], cost: "205 Mega 300 Bit", successRate: "60%" },
          { product: "Chipset Box (AT) R10", materials: ["Chipset Box (AT) R9 x2", "Chipset Conversion Kit R2 x1"], cost: "205 Mega 300 Bit", successRate: "60%" },
          { product: "Chipset Box (DS) R10", materials: ["Chipset Box (DS) R9 x2", "Chipset Conversion Kit R2 x1"], cost: "205 Mega 300 Bit", successRate: "60%" },
          { product: "Chipset Box (DE) R10", materials: ["Chipset Box (DE) R9 x2", "Chipset Conversion Kit R2 x1"], cost: "205 Mega 300 Bit", successRate: "60%" },
          { product: "Chipset Box (HT) R10", materials: ["Chipset Box (HT) R9 x2", "Chipset Conversion Kit R2 x1"], cost: "205 Mega 300 Bit", successRate: "60%" },
          { product: "Chipset Box (HP) R11", materials: ["Chipset Box (HP) R10 x2", "Chipset Conversion Kit R2 x3"], cost: "268 Mega 300 Bit", successRate: "60%" },
          { product: "Chipset Box (AT) R11", materials: ["Chipset Box (AT) R10 x2", "Chipset Conversion Kit R2 x3"], cost: "268 Mega 300 Bit", successRate: "60%" },
          { product: "Chipset Box (DS) R11", materials: ["Chipset Box (DS) R10 x2", "Chipset Conversion Kit R2 x3"], cost: "268 Mega 300 Bit", successRate: "60%" },
          { product: "Chipset Box (DE) R11", materials: ["Chipset Box (DE) R10 x2", "Chipset Conversion Kit R2 x3"], cost: "268 Mega 300 Bit", successRate: "60%" },
          { product: "Chipset Box (HT) R11", materials: ["Chipset Box (HT) R10 x2", "Chipset Conversion Kit R2 x3"], cost: "268 Mega 300 Bit", successRate: "60%" },
          { product: "Chipset Box (HP) R12", materials: ["Chipset Box (HP) R11 x2", "Chipset Conversion Kit R2 x10"], cost: "350 Mega 200 Bit", successRate: "60%" },
          { product: "Chipset Box (AT) R12", materials: ["Chipset Box (AT) R11 x2", "Chipset Conversion Kit R2 x10"], cost: "350 Mega 200 Bit", successRate: "60%" },
          { product: "Chipset Box (DS) R12", materials: ["Chipset Box (DS) R11 x2", "Chipset Conversion Kit R2 x10"], cost: "350 Mega 200 Bit", successRate: "60%" },
          { product: "Chipset Box (DE) R12", materials: ["Chipset Box (DE) R11 x2", "Chipset Conversion Kit R2 x10"], cost: "350 Mega 200 Bit", successRate: "60%" },
          { product: "Chipset Box (HT) R12", materials: ["Chipset Box (HT) R11 x2", "Chipset Conversion Kit R2 x10"], cost: "350 Mega 200 Bit", successRate: "60%" },
          { product: "Chipset Box (HP) R13", materials: ["Chipset Box (HP) R12 x2", "Chipset Conversion Kit R3 x2"], cost: "456 Mega 700 Bit", successRate: "60%" },
          { product: "Chipset Box (AT) R13", materials: ["Chipset Box (AT) R12 x2", "Chipset Conversion Kit R3 x2"], cost: "456 Mega 700 Bit", successRate: "60%" },
          { product: "Chipset Box (DS) R13", materials: ["Chipset Box (DS) R12 x2", "Chipset Conversion Kit R3 x2"], cost: "456 Mega 700 Bit", successRate: "60%" },
          { product: "Chipset Box (DE) R13", materials: ["Chipset Box (DE) R12 x2", "Chipset Conversion Kit R2 x2"], cost: "456 Mega 700 Bit", successRate: "60%" },
          { product: "Chipset Box (HT) R13", materials: ["Chipset Box (HT) R12 x2", "Chipset Conversion Kit R3 x2"], cost: "456 Mega 700 Bit", successRate: "60%" },
          { product: "Chipset Box (HP) R14", materials: ["Chipset Box (HP) R13 x2", "Chipset Conversion Kit R3 x5"], cost: "595 Mega 200 Bit", successRate: "60%" },
          { product: "Chipset Box (AT) R14", materials: ["Chipset Box (AT) R13 x2", "Chipset Conversion Kit R3 x5"], cost: "595 Mega 200 Bit", successRate: "60%" },
          { product: "Chipset Box (DS) R14", materials: ["Chipset Box (DS) R13 x2", "Chipset Conversion Kit R3 x5"], cost: "595 Mega 200 Bit", successRate: "60%" },
          { product: "Chipset Box (DE) R14", materials: ["Chipset Box (DE) R13 x2", "Chipset Conversion Kit R2 x5"], cost: "595 Mega 200 Bit", successRate: "60%" },
          { product: "Chipset Box (HT) R14", materials: ["Chipset Box (HT) R13 x2", "Chipset Conversion Kit R3 x5"], cost: "595 Mega 200 Bit", successRate: "60%" }
        ]
      },
      {
        name: "DATA Enhancement",
        recipes: [
          { product: "Beast Mid Class Data", materials: ["Beast Low Class Data x100", "Digicore x5"], cost: "48 Mega 900 Bit", successRate: "100%" },
          { product: "Rock Mid Class Data", materials: ["Rock Low Class Data x100", "Digicore x5"], cost: "48 Mega 900 Bit", successRate: "100%" },
          { product: "Devil Mid Class Data", materials: ["Devil Low Class Data x100", "Digicore x5"], cost: "48 Mega 900 Bit", successRate: "100%" },
          { product: "Bird Mid Class Data", materials: ["Bird Low Class Data x100", "Digicore x5"], cost: "48 Mega 900 Bit", successRate: "100%" },
          { product: "Dragon Mid Class Data", materials: ["Dragon Low Class Data x100", "Digicore x5"], cost: "48 Mega 900 Bit", successRate: "100%" },
          { product: "Plant Mid Class Data", materials: ["Plant Low Class Data x100", "Digicore x5"], cost: "48 Mega 900 Bit", successRate: "100%" },
          { product: "Fire Mid Class Data", materials: ["Fire Low Class Data x100", "Digicore x5"], cost: "48 Mega 900 Bit", successRate: "100%" },
          { product: "Insectoid Mid Class Data", materials: ["Insectoid Low Class Data x100", "Digicore x5"], cost: "48 Mega 900 Bit", successRate: "100%" },
          { product: "Aquatic Mid Class Data", materials: ["Aquatic Low Class Data x100", "Digicore x5"], cost: "48 Mega 900 Bit", successRate: "100%" }
        ]
      },
      {
        name: "Transcendence ConvertChip",
        recipes: [
          { product: "Low Class Beast Transcendence ConvertChip", materials: ["Beast Mid Class Data x3", "Digicore x5"], cost: "48 Mega 900 Bit", successRate: "100%" },
          { product: "Low Class Rock Transcendence ConvertChip", materials: ["Rock Mid Class Data x3", "Digicore x5"], cost: "48 Mega 900 Bit", successRate: "100%" },
          { product: "Low Class Devil Transcendence ConvertChip", materials: ["Devil Mid Class Data x3", "Digicore x5"], cost: "48 Mega 900 Bit", successRate: "100%" },
          { product: "Low Class Bird Transcendence ConvertChip", materials: ["Bird Mid Class Data x3", "Digicore x5"], cost: "48 Mega 900 Bit", successRate: "100%" },
          { product: "Low Class Dragon Transcendence ConvertChip", materials: ["Dragon Mid Class Data x3", "Digicore x5"], cost: "48 Mega 900 Bit", successRate: "100%" },
          { product: "Low Class Plant Transcendence ConvertChip", materials: ["Plant Mid Class Data x3", "Digicore x5"], cost: "48 Mega 900 Bit", successRate: "100%" },
          { product: "Low Class Fire Transcendence ConvertChip", materials: ["Fire Mid Class Data x3", "Digicore x5"], cost: "48 Mega 900 Bit", successRate: "100%" },
          { product: "Low Class Insectoid Transcendence ConvertChip", materials: ["Insectoid Mid Class Data x3", "Digicore x5"], cost: "48 Mega 900 Bit", successRate: "100%" },
          { product: "Low Class Aquatic Transcendence ConvertChip", materials: ["Aquatic Mid Class Data x3", "Digicore x5"], cost: "48 Mega 900 Bit", successRate: "100%" },
          { product: "Low Class Hybrid Transcendence ConvertChip x3", materials: ["Bokomon's Book of Knowledge x1", "Digicore x5"], cost: "48 Mega 900 Bit", successRate: "100%" },
          { product: "Low Class ExtraOrdinary Transcendence ConvertChip", materials: ["Devil Mid Class Data x3", "Digicore x5"], cost: "48 Mega 900 Bit", successRate: "100%" }
        ]
      },
      {
        name: "Attribute Craft (HP)",
        recipes: [
          { product: "[HP] Attribute Rank A Lv1 (Max HP 25~30)", materials: ["Digicore x10"], cost: "12 Mega", successRate: "100%" },
          { product: "[HP] Attribute Rank A Lv2 (Max HP 50~100)", materials: ["[HP] Attribute Rank A Lv1 x2", "Digicore x13"], cost: "15 Mega 400 Bit", successRate: "100%" },
          { product: "[HP] Attribute Rank A Lv3 (Max HP 100~150)", materials: ["[HP] Attribute Rank A Lv2 x2", "Digicore x16"], cost: "19 Mega 400 Bit", successRate: "100%" },
          { product: "[HP] Attribute Rank A Lv4 (Max HP 150~200)", materials: ["[HP] Attribute Rank A Lv3 x2", "Digicore x20"], cost: "24 Mega 200 Bit", successRate: "100%" },
          { product: "[HP] Attribute Rank A LvMax (Max HP 200~250)", materials: ["[HP] Attribute Rank A Lv4 x2", "Digicore x25"], cost: "30 Mega", successRate: "100%" },
          { product: "[HP] Attribute Rank B Lv1 (Max HP 252~300)", materials: ["[HP] Attribute Rank A LvMax x2", "Digicore x31"], cost: "37 Mega", successRate: "100%" },
          { product: "[HP] Attribute Rank B Lv2 (Max HP 301~350)", materials: ["[HP] Attribute Rank B Lv1 x2", "Digicore x38"], cost: "45 Mega 400 Bit", successRate: "100%" },
          { product: "[HP] Attribute Rank B Lv3 (Max HP 352~400)", materials: ["[HP] Attribute Rank B Lv2 x2", "Digicore x46"], cost: "55 Mega 400 Bit", successRate: "100%" },
          { product: "[HP] Attribute Rank B Lv4 (Max HP 400~450)", materials: ["[HP] Attribute Rank B Lv3 x2", "Digicore x56"], cost: "67 Mega 400 Bit", successRate: "100%" },
          { product: "[HP] Attribute Rank B LvMax (Max HP 450~500)", materials: ["[HP] Attribute Rank B Lv4 x2", "Digicore x68"], cost: "81 Mega 800 Bit", successRate: "100%" },
          { product: "[HP] Attribute Rank C Lv1 (Max HP 495~550)", materials: ["[HP] Attribute Rank B LvMax x2", "Digicore x82"], cost: "99 Mega 100 Bit", successRate: "100%" },
          { product: "[HP] Attribute Rank C Lv2 (Max HP 540~600)", materials: ["[HP] Attribute Rank C Lv1 x2", "Digicore x99"], cost: "119 Mega 900 Bit", successRate: "100%" },
          { product: "[HP] Attribute Rank C Lv3 (Max HP 585~650)", materials: ["[HP] Attribute Rank C Lv2 x2", "Digicore x144"], cost: "174 Mega 800 Bit", successRate: "100%" }
        ]
      },
      {
        name: "Attribute Craft (DS)",
        recipes: [
          { product: "[DS] Attribute Rank A Lv1 (Max DS 25~30)", materials: ["Digicore x10"], cost: "12 Mega", successRate: "100%" },
          { product: "[DS] Attribute Rank A Lv2 (Max DS 50~100)", materials: ["[DS] Attribute Rank A Lv1 x2", "Digicore x13"], cost: "15 Mega 400 Bit", successRate: "100%" },
          { product: "[DS] Attribute Rank A Lv3 (Max DS 100~150)", materials: ["[DS] Attribute Rank A Lv2 x2", "Digicore x16"], cost: "19 Mega 400 Bit", successRate: "100%" },
          { product: "[DS] Attribute Rank A Lv4 (Max DS 150~200)", materials: ["[DS] Attribute Rank A Lv3 x2", "Digicore x20"], cost: "24 Mega 200 Bit", successRate: "100%" },
          { product: "[DS] Attribute Rank A LvMax (Max DS 200~250)", materials: ["[DS] Attribute Rank A Lv4 x2", "Digicore x25"], cost: "30 Mega", successRate: "100%" },
          { product: "[DS] Attribute Rank B Lv1 (Max DS 252~300)", materials: ["[DS] Attribute Rank A LvMax x2", "Digicore x31"], cost: "37 Mega", successRate: "100%" },
          { product: "[DS] Attribute Rank B Lv2 (Max DS 301~350)", materials: ["[DS] Attribute Rank B Lv1 x2", "Digicore x38"], cost: "45 Mega 400 Bit", successRate: "100%" },
          { product: "[DS] Attribute Rank B Lv3 (Max DS 352~400)", materials: ["[DS] Attribute Rank B Lv2 x2", "Digicore x46"], cost: "55 Mega 400 Bit", successRate: "100%" },
          { product: "[DS] Attribute Rank B Lv4 (Max DS 400~450)", materials: ["[DS] Attribute Rank B Lv3 x2", "Digicore x56"], cost: "67 Mega 400 Bit", successRate: "100%" },
          { product: "[DS] Attribute Rank B LvMax (Max DS 450~500)", materials: ["[DS] Attribute Rank B Lv4 x2", "Digicore x68"], cost: "81 Mega 800 Bit", successRate: "100%" },
          { product: "[DS] Attribute Rank C Lv1 (Max DS 495~550)", materials: ["[DS] Attribute Rank B LvMax x2", "Digicore x82"], cost: "99 Mega 100 Bit", successRate: "100%" },
          { product: "[DS] Attribute Rank C Lv2 (Max DS 540~600)", materials: ["[DS] Attribute Rank C Lv1 x2", "Digicore x99"], cost: "119 Mega 900 Bit", successRate: "100%" },
          { product: "[DS] Attribute Rank C Lv3 (Max DS 585~650)", materials: ["[DS] Attribute Rank C Lv2 x2", "Digicore x144"], cost: "174 Mega 800 Bit", successRate: "100%" }
        ]
      },
      {
        name: "Attribute Craft (AT)",
        recipes: [
          { product: "[AT] Attribute Rank A Lv1 (Max AT 14~28)", materials: ["Digicore x10"], cost: "12 Mega", successRate: "100%" },
          { product: "[AT] Attribute Rank A Lv2 (Max AT 28~56)", materials: ["[AT] Attribute Rank A Lv1 x2", "Digicore x13"], cost: "15 Mega 400 Bit", successRate: "100%" },
          { product: "[AT] Attribute Rank A Lv3 (Max AT 56~84)", materials: ["[AT] Attribute Rank A Lv2 x2", "Digicore x16"], cost: "19 Mega 400 Bit", successRate: "100%" },
          { product: "[AT] Attribute Rank A Lv4 (Max AT 84~112)", materials: ["[AT] Attribute Rank A Lv3 x2", "Digicore x20"], cost: "24 Mega 200 Bit", successRate: "100%" },
          { product: "[AT] Attribute Rank A LvMax (Max AT 112~140)", materials: ["[AT] Attribute Rank A Lv4 x2", "Digicore x25"], cost: "30 Mega", successRate: "100%" },
          { product: "[AT] Attribute Rank B Lv1 (Max AT 141~168)", materials: ["[AT] Attribute Rank A LvMax x2", "Digicore x31"], cost: "37 Mega", successRate: "100%" },
          { product: "[AT] Attribute Rank B Lv2 (Max AT 168~196)", materials: ["[AT] Attribute Rank B Lv1 x2", "Digicore x38"], cost: "45 Mega 400 Bit", successRate: "100%" },
          { product: "[AT] Attribute Rank B Lv3 (Max AT 197~224)", materials: ["[AT] Attribute Rank B Lv2 x2", "Digicore x46"], cost: "55 Mega 400 Bit", successRate: "100%" },
          { product: "[AT] Attribute Rank B Lv4 (Max AT 224~252)", materials: ["[AT] Attribute Rank B Lv3 x2", "Digicore x56"], cost: "67 Mega 400 Bit", successRate: "100%" },
          { product: "[AT] Attribute Rank B LvMax (Max AT 252~280)", materials: ["[AT] Attribute Rank B Lv4 x2", "Digicore x68"], cost: "81 Mega 800 Bit", successRate: "100%" },
          { product: "[AT] Attribute Rank C Lv1 (Max AT 277~308)", materials: ["[AT] Attribute Rank B LvMax x2", "Digicore x82"], cost: "99 Mega 100 Bit", successRate: "100%" },
          { product: "[AT] Attribute Rank C Lv2 (Max AT 302~336)", materials: ["[AT] Attribute Rank C Lv1 x2", "Digicore x99"], cost: "119 Mega 900 Bit", successRate: "100%" },
          { product: "[AT] Attribute Rank C Lv3 (Max AT 327~364)", materials: ["[AT] Attribute Rank C Lv2 x2", "Digicore x144"], cost: "174 Mega 800 Bit", successRate: "100%" }
        ]
      },
      {
        name: "Attribute Craft (DE)",
        recipes: [
          { product: "[DE] Attribute Rank A Lv1 (Max DE 7~14)", materials: ["Digicore x10"], cost: "12 Mega", successRate: "100%" },
          { product: "[DE] Attribute Rank A Lv2 (Max DE 14~29)", materials: ["[DE] Attribute Rank A Lv1 x2", "Digicore x13"], cost: "15 Mega 400 Bit", successRate: "100%" },
          { product: "[DE] Attribute Rank A Lv3 (Max DE 29~44)", materials: ["[DE] Attribute Rank A Lv2 x2", "Digicore x16"], cost: "19 Mega 400 Bit", successRate: "100%" },
          { product: "[DE] Attribute Rank A Lv4 (Max DE 44~60)", materials: ["[DE] Attribute Rank A Lv3 x2", "Digicore x20"], cost: "24 Mega 200 Bit", successRate: "100%" },
          { product: "[DE] Attribute Rank A LvMax (Max DE 60~74)", materials: ["[DE] Attribute Rank A Lv4 x2", "Digicore x25"], cost: "30 Mega", successRate: "100%" },
          { product: "[DE] Attribute Rank B Lv1 (Max DE 74~89)", materials: ["[DE] Attribute Rank A LvMax x2", "Digicore x31"], cost: "37 Mega", successRate: "100%" },
          { product: "[DE] Attribute Rank B Lv2 (Max DE 89~105)", materials: ["[DE] Attribute Rank B Lv1 x2", "Digicore x38"], cost: "45 Mega 400 Bit", successRate: "100%" },
          { product: "[DE] Attribute Rank B Lv3 (Max DE 105~120)", materials: ["[DE] Attribute Rank B Lv2 x2", "Digicore x46"], cost: "55 Mega 400 Bit", successRate: "100%" },
          { product: "[DE] Attribute Rank B Lv4 (Max DE 120~135)", materials: ["[DE] Attribute Rank B Lv3 x2", "Digicore x56"], cost: "67 Mega 400 Bit", successRate: "100%" },
          { product: "[DE] Attribute Rank B LvMax (Max DE 135~150)", materials: ["[DE] Attribute Rank B Lv4 x2", "Digicore x68"], cost: "81 Mega 800 Bit", successRate: "100%" },
          { product: "[DE] Attribute Rank C Lv1 (Max DE 148~165)", materials: ["[DE] Attribute Rank B LvMax x2", "Digicore x82"], cost: "99 Mega 100 Bit", successRate: "100%" },
          { product: "[DE] Attribute Rank C Lv2 (Max DE 162~180)", materials: ["[DE] Attribute Rank C Lv1 x2", "Digicore x99"], cost: "119 Mega 900 Bit", successRate: "100%" },
          { product: "[DE] Attribute Rank C Lv3 (Max DE 175~195)", materials: ["[DE] Attribute Rank C Lv2 x2", "Digicore x144"], cost: "174 Mega 800 Bit", successRate: "100%" }
        ]
      },
      {
        name: "X-Antibody Craft",
        recipes: [
          { product: "X-Antibody: Dual", materials: ["X-Antibody x3"], cost: "30 Mega", successRate: "100%" },
          { product: "X-Antibody: Triple", materials: ["X-Antibody x6"], cost: "90 Mega", successRate: "100%" }
        ]
      }
    ]
  },
  {
    id: "mary",
    npc: "Mary (Arena Voucher)",
    description: "Exchange your Arena Vouchers for various rewards.",
    customHeaders: { materials: "Vouchers Required", cost: null, successRate: null },
    categories: [
      {
        name: "Weekly (Consumables)",
        recipes: [
          { product: "Essential Vitamins x20", materials: ["[Weekly] Arena Voucher x1"] },
          { product: "Rare Coin (Event) x3", materials: ["[Weekly] Arena Voucher x1"] },
          { product: "Fruit of the Goddess x5", materials: ["[Weekly] Arena Voucher x1"] },
          { product: "Fruit of Overload x3", materials: ["[Weekly] Arena Voucher x1"] },
          { product: "Fruit of Genesis x2", materials: ["[Weekly] Arena Voucher x1"] },
          { product: "Fruit of Darkness x3", materials: ["[Weekly] Arena Voucher x1"] },
          { product: "X-Antibody x25", materials: ["[Weekly] Arena Voucher x1"] },
          { product: "Fruit of Chaos x1", materials: ["[Weekly] Arena Voucher x2"] },
          { product: "Fruit of Yggdrasil x1", materials: ["[Weekly] Arena Voucher x2"] },
          { product: "Adventure Tamer Box x1", materials: ["[Weekly] Arena Voucher x2"] },
          { product: "Tamer Exchange Item x1", materials: ["[Weekly] Arena Voucher x2"] },
          { product: "Digimon Enhancement Buff Pack x1", materials: ["[Weekly] Arena Voucher x3"] },
          { product: "Boundless Chivalry x1", materials: ["[Weekly] Arena Voucher x4"] },
          { product: "Special Chicken Combo x3", materials: ["[Weekly] Arena Voucher x5"] },
          { product: "Enhanced Brezerker(7D) x1", materials: ["[Weekly] Arena Voucher x7"] },
          { product: "Enhanced Cheer(7D) x1", materials: ["[Weekly] Arena Voucher x7"] },
          { product: "Enhanced Impregnableness(7D) x1", materials: ["[Weekly] Arena Voucher x7"] },
          { product: "Enhanced Pray(7D) x1", materials: ["[Weekly] Arena Voucher x7"] },
          { product: "Enhanced Protection(7D) x1", materials: ["[Weekly] Arena Voucher x7"] },
          { product: "Enhanced Encouragement(7D) x1", materials: ["[Weekly] Arena Voucher x7"] },
          { product: "Enhanced Analysis(7D) x1", materials: ["[Weekly] Arena Voucher x7"] },
          { product: "Enhanced Evade(7D) x1", materials: ["[Weekly] Arena Voucher x7"] },
          { product: "Enhanced Vigor(7D) x1", materials: ["[Weekly] Arena Voucher x7"] }
        ]
      },
      {
        name: "Weekly (EXP & Skill Memory)",
        recipes: [
          { product: "Amplification Booster +500% x2", materials: ["[Weekly] Arena Voucher x1"] },
          { product: "Memory Skill Capsule (Attack) x1", materials: ["[Weekly] Arena Voucher x2"] },
          { product: "Memory Skill Capsule (Defense) x1", materials: ["[Weekly] Arena Voucher x2"] },
          { product: "Memory Skill Capsule (Support) x1", materials: ["[Weekly] Arena Voucher x2"] },
          { product: "Amplification Booster +1000% x1", materials: ["[Weekly] Arena Voucher x3"] },
          { product: "Skill Memory Cube (Vaccine) x1", materials: ["[Weekly] Arena Voucher x5"] },
          { product: "Skill Memory Cube (Virus) x1", materials: ["[Weekly] Arena Voucher x5"] },
          { product: "Skill Memory Cube (Data) x1", materials: ["[Weekly] Arena Voucher x5"] },
          { product: "Memory Skill Cube (Attack) x1", materials: ["[Weekly] Arena Voucher x5"] },
          { product: "Memory Skill Cube (Defense) x1", materials: ["[Weekly] Arena Voucher x5"] },
          { product: "Memory Skill Cube (Support) x1", materials: ["[Weekly] Arena Voucher x5"] }
        ]
      },
      {
        name: "Weekly (DigiEggs)",
        recipes: [
          { product: "Mystery Mercenary DigiEgg - Alpha x1", materials: ["[Weekly] Arena Voucher x7"] },
          { product: "Mystery Mercenary DigiEgg - Beta x1", materials: ["[Weekly] Arena Voucher x7"] },
          { product: "Jogress Reinforced DigiEgg x1", materials: ["[Weekly] Arena Voucher x10"] },
          { product: "Transcendance Material - Raremon Reinforced DigiEgg x1", materials: ["[Weekly] Arena Voucher x20"] },
          { product: "Mysterious Mercenary DigiEgg (4~5) x1", materials: ["[Weekly] Arena Voucher x35"] }
        ]
      },
      {
        name: "Weekly (Hatch & Reinforcement)",
        recipes: [
          { product: "Reset Capsule x1", materials: ["[Weekly] Arena Voucher x1"] },
          { product: "DigiClone (D) x3", materials: ["[Weekly] Arena Voucher x1"] },
          { product: "DigiClone (C) x3", materials: ["[Weekly] Arena Voucher x1"] },
          { product: "DigiClone (B) x3", materials: ["[Weekly] Arena Voucher x1"] },
          { product: "DigiClone (A) x3", materials: ["[Weekly] Arena Voucher x1"] },
          { product: "DigiClone (S) x3", materials: ["[Weekly] Arena Voucher x1"] },
          { product: "Backup Disk x3", materials: ["[Weekly] Arena Voucher x1"] },
          { product: "Reinforced Digiclone Cube x1", materials: ["[Weekly] Arena Voucher x2"] },
          { product: "Reset Capsule A x1", materials: ["[Weekly] Arena Voucher x5"] },
          { product: "Diversion Chipset Kit(Bronze) x1", materials: ["[Weekly] Arena Voucher x5"] },
          { product: "Chipset Conversion Kit R1 x1", materials: ["[Weekly] Arena Voucher x10"] },
          { product: "Hatch Backup Lv.4 x1", materials: ["[Weekly] Arena Voucher x10"] }
        ]
      },
      {
        name: "Weekly (Ride Mode Items)",
        recipes: [
          { product: "ModeSelector x1", materials: ["[Weekly] Arena Voucher x5"] },
          { product: "Grani x1", materials: ["[Weekly] Arena Voucher x20"] },
          { product: "Behemoth x1", materials: ["[Weekly] Arena Voucher x20"] },
          { product: "Chaotic Seat x1", materials: ["[Weekly] Arena Voucher x20"] },
          { product: "White Blade x1", materials: ["[Weekly] Arena Voucher x20"] },
          { product: "Death-X Seat x1", materials: ["[Weekly] Arena Voucher x20"] },
          { product: "Sodom x1", materials: ["[Weekly] Arena Voucher x20"] },
          { product: "Cyclone x1", materials: ["[Weekly] Arena Voucher x20"] },
          { product: "Lampranthus x1", materials: ["[Weekly] Arena Voucher x20"] },
          { product: "Tree of Antiquity x1", materials: ["[Weekly] Arena Voucher x20"] },
          { product: "Tyrant King x1", materials: ["[Weekly] Arena Voucher x20"] },
          { product: "Black Data Wing x1", materials: ["[Weekly] Arena Voucher x20"] },
          { product: "Wings of the Seabird x1", materials: ["[Weekly] Arena Voucher x20"] },
          { product: "Proof of Dragon Emperor x1", materials: ["[Weekly] Arena Voucher x20"] },
          { product: "Will of Light x1", materials: ["[Weekly] Arena Voucher x20"] },
          { product: "Code in Alpha x1", materials: ["[Weekly] Arena Voucher x20"] },
          { product: "Will of Darkness x1", materials: ["[Weekly] Arena Voucher x20"] },
          { product: "Footstep of Gold Dragon x1", materials: ["[Weekly] Arena Voucher x20"] }
        ]
      },
      {
        name: "Weekly (Burst Mode Items)",
        recipes: [
          { product: "Digital Hazard x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Toy Gun x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Holy Spear x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Dramon Breaker x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Z'dHou x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Great King Suit x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Gungnir x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Gakuran x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Angel Ring x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Monks Staff x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Duo Solar Spear x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Critical Arms x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Tyrant Crow x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Trojan Horse x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Holy Wing x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Giga Scale x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Ornis Wing x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Shadow Wing x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Black Saint Wing x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Hyper Cannon x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Trump Sword x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Black Tentacle x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Furious Claw x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Sodom and Gomorrah x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Death-X Antibody x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Alarm Clock x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Source of the Darkness x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Tria Knuckle x1", materials: ["[Weekly] Arena Voucher x25"] },
          { product: "Royal Ornament x1", materials: ["[Weekly] Arena Voucher x25"] }
        ]
      },
      {
        name: "Weekly (Tamer Equipment & Accessories)",
        recipes: [
          { product: "Avatar Box - (15 Days) x1", materials: ["[Weekly] Arena Voucher x6"] },
          { product: "Slim Fit Original School Uniform (Marcus) (15 Days) x1", materials: ["[Weekly] Arena Voucher x8"] },
          { product: "Slim Fit Original School Uniform (Keenan) (15 Days) x1", materials: ["[Weekly] Arena Voucher x8"] },
          { product: "Maid Costume (Yoshino) (15 Days) x1", materials: ["[Weekly] Arena Voucher x8"] },
          { product: "Bellboy Costume (Thomas) (15 Days) x1", materials: ["[Weekly] Arena Voucher x8"] },
          { product: "Graceful Princess Dress (Mimi) (15 Days) x1", materials: ["[Weekly] Arena Voucher x8"] },
          { product: "Cute Sumo Referee Costume (T.K.) (15 Days) x1", materials: ["[Weekly] Arena Voucher x8"] },
          { product: "Slim Fit Smart School Uniform (15 Days) x1", materials: ["[Weekly] Arena Voucher x8"] },
          { product: "XAI Ver II (15 Days) x1", materials: ["[Weekly] Arena Voucher x8"] },
          { product: "Jogress Chip (15 Days) x1", materials: ["[Weekly] Arena Voucher x8"] },
          { product: "DigiAura (15 Days) x1", materials: ["[Weekly] Arena Voucher x8"] },
          { product: "Energy Patch (15 Days) x1", materials: ["[Weekly] Arena Voucher x8"] },
          { product: "Avatar Box - (30 Days) x1", materials: ["[Weekly] Arena Voucher x10"] },
          { product: "Option Change Stone x1", materials: ["[Weekly] Arena Voucher x1"] },
          { product: "Number Change Stone x1", materials: ["[Weekly] Arena Voucher x1"] },
          { product: "Amazing Renewal Increase Stone x1", materials: ["[Weekly] Arena Voucher x2"] },
          { product: "Amazing Digitary Power Stone x1", materials: ["[Weekly] Arena Voucher x2"] }
        ]
      },
      {
        name: "Monthly (Consumables)",
        recipes: [
          { product: "Red Light of Life x50", materials: ["[Monthly] Arena Voucher x1"] },
          { product: "Blue Light of Life x50", materials: ["[Monthly] Arena Voucher x1"] },
          { product: "Special Chicken Combo x5", materials: ["[Monthly] Arena Voucher x2"] },
          { product: "X-Antibody x50", materials: ["[Monthly] Arena Voucher x1"] },
          { product: "Digimon Enhancement Buff Pack x1", materials: ["[Monthly] Arena Voucher x2"] },
          { product: "Rare Coin (Event) x4", materials: ["[Monthly] Arena Voucher x1"] },
          { product: "Fruit of the Goddess x7", materials: ["[Monthly] Arena Voucher x1"] },
          { product: "Fruit of Genesis x3", materials: ["[Monthly] Arena Voucher x2"] },
          { product: "Fruit of Chaos x3", materials: ["[Monthly] Arena Voucher x2"] },
          { product: "Fruit of Yggdrasil x2", materials: ["[Monthly] Arena Voucher x2"] },
          { product: "Fruit of Homeostasis x1", materials: ["[Monthly] Arena Voucher x4"] },
          { product: "Tamer Exchange (Tai) x1", materials: ["[Monthly] Arena Voucher x5"] },
          { product: "Tamer Exchange (Mimi) x1", materials: ["[Monthly] Arena Voucher x5"] },
          { product: "Tamer Exchange (Matt) x1", materials: ["[Monthly] Arena Voucher x5"] },
          { product: "Tamer Exchange (TK) x1", materials: ["[Monthly] Arena Voucher x5"] },
          { product: "Tamer Exchange (Hikari) x1", materials: ["[Monthly] Arena Voucher x5"] },
          { product: "Tamer Exchange (Sora) x1", materials: ["[Monthly] Arena Voucher x5"] },
          { product: "Tamer Exchange (Izzy) x1", materials: ["[Monthly] Arena Voucher x5"] },
          { product: "Tamer Exchange (Joe) x1", materials: ["[Monthly] Arena Voucher x5"] },
          { product: "Tamer Exchange Savers x1", materials: ["[Monthly] Arena Voucher x1"] },
          { product: "Boundless Chivalry x1", materials: ["[Monthly] Arena Voucher x3"] }
        ]
      },
      {
        name: "Monthly (EXP & Skill Memory)",
        recipes: [
          { product: "Amplification Booster +1000% x2", materials: ["[Monthly] Arena Voucher x1"] },
          { product: "High Skill Memory Capsule (Attack) x1", materials: ["[Monthly] Arena Voucher x4"] },
          { product: "High Skill Memory Capsule (Defense) x1", materials: ["[Monthly] Arena Voucher x4"] },
          { product: "High Skill Memory Capsule (Support) x1", materials: ["[Monthly] Arena Voucher x4"] },
          { product: "Skill Memory Cube (Vaccine) x1", materials: ["[Monthly] Arena Voucher x3"] },
          { product: "Skill Memory Cube (Virus) x1", materials: ["[Monthly] Arena Voucher x3"] },
          { product: "Skill Memory Cube (Data) x1", materials: ["[Monthly] Arena Voucher x3"] },
          { product: "Memory Skill Capsule (Attack) x1", materials: ["[Monthly] Arena Voucher x3"] },
          { product: "Memory Skill Capsule (Defense) x1", materials: ["[Monthly] Arena Voucher x3"] },
          { product: "Memory Skill Capsule (Support) x1", materials: ["[Monthly] Arena Voucher x3"] }
        ]
      },
      {
        name: "Monthly (DigiEggs)",
        recipes: [
          { product: "Jogress Reinforced DigiEgg x1", materials: ["[Monthly] Arena Voucher x7"] },
          { product: "Random Reinforced DigiEgg Lv. 4-5 x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Mysterious Mercenary DigiEgg (4~5) x1", materials: ["[Monthly] Arena Voucher x30"] },
          { product: "Extra Mercenary DigiEgg x1", materials: ["[Monthly] Arena Voucher x35"] },
          { product: "Random Reinforced DigiEgg Lv.5 x1", materials: ["[Monthly] Arena Voucher x40"] }
        ]
      },
      {
        name: "Monthly (Hatch & Reinforcement)",
        recipes: [
          { product: "DigiClone (A) x6", materials: ["[Monthly] Arena Voucher x1"] },
          { product: "DigiClone (S) x6", materials: ["[Monthly] Arena Voucher x1"] },
          { product: "Backup Disk x6", materials: ["[Monthly] Arena Voucher x1"] },
          { product: "Reset Capsule x3", materials: ["[Monthly] Arena Voucher x1"] },
          { product: "Reset Capsule A x1", materials: ["[Monthly] Arena Voucher x2"] },
          { product: "Hatch Backup Lv.4 x1", materials: ["[Monthly] Arena Voucher x3"] },
          { product: "Reinforced DigiClone (D) x3", materials: ["[Monthly] Arena Voucher x1"] },
          { product: "Reinforced DigiClone (C) x3", materials: ["[Monthly] Arena Voucher x2"] },
          { product: "Reinforced DigiClone (B) x3", materials: ["[Monthly] Arena Voucher x3"] },
          { product: "Reinforced DigiClone (A) x3", materials: ["[Monthly] Arena Voucher x4"] },
          { product: "Reinforced DigiClone (S) x3", materials: ["[Monthly] Arena Voucher x5"] },
          { product: "Mega Reinforced Digiclone Cube x1", materials: ["[Monthly] Arena Voucher x10"] }
        ]
      },
      {
        name: "Monthly (Digimon Evolution)",
        recipes: [
          { product: "Digital Hazard x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Toy Gun x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Holy Spear x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Dramon Breaker x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Z'dHou x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Great King Suit x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Gungnir x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Gakuran x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Angel Ring x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Monks Staff x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Duo Solar Spear x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Critical Arms x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Tyrant Crow x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Trojan Horse x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Holy Wing x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Giga Scale x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Ornis Wing x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Shadow Wing x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Black Saint Wing x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Hyper Cannon x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Trump Sword x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Black Tentacle x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Furious Claw x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Sodom and Gomorrah x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Death-X Antibody x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Alarm Clock x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Source of the Darkness x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Tria Knuckle x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Royal Ornament x1", materials: ["[Monthly] Arena Voucher x10"] },
          { product: "Black Gear Evolution Program x1", materials: ["[Monthly] Arena Voucher x15"] }
        ]
      },
      {
        name: "Monthly (Tamer Equipment & Accessories)",
        recipes: [
          { product: "Newbie's Yellow Soccer Uniform - 30 Days x1", materials: ["[Monthly] Arena Voucher x20"] },
          { product: "Beginner's Orange Soccer Uniform - 30 Days x1", materials: ["[Monthly] Arena Voucher x20"] },
          { product: "Expert's Green Soccer Uniform - 30 Days x1", materials: ["[Monthly] Arena Voucher x20"] },
          { product: "Veteran's Red Soccer Uniform - 30 Days x1", materials: ["[Monthly] Arena Voucher x20"] },
          { product: "Professional's Black Soccer Uniform - 30 Days x1", materials: ["[Monthly] Arena Voucher x20"] },
          { product: "Jogress Chip (30 Days) x1", materials: ["[Monthly] Arena Voucher x15"] },
          { product: "DigiAura (30 Days) x1", materials: ["[Monthly] Arena Voucher x15"] },
          { product: "XAI Ver III (15 Days) x1", materials: ["[Monthly] Arena Voucher x9"] },
          { product: "XAI Ver III (30 Days) x1", materials: ["[Monthly] Arena Voucher x15"] },
          { product: "Boundless Inferior Shirt Box x1", materials: ["[Monthly] Arena Voucher x6"] },
          { product: "Boundless Inferior Pants Box x1", materials: ["[Monthly] Arena Voucher x6"] },
          { product: "Boundless Inferior Gloves Box x1", materials: ["[Monthly] Arena Voucher x6"] },
          { product: "Option Change Stone x3", materials: ["[Monthly] Arena Voucher x1"] },
          { product: "Number Change Stone x3", materials: ["[Monthly] Arena Voucher x1"] },
          { product: "Amazing Renewal Increase Stone x3", materials: ["[Monthly] Arena Voucher x1"] },
          { product: "Amazing Digitary Power Stone x3", materials: ["[Monthly] Arena Voucher x1"] },
          { product: "High-Powered Quad-core Ring x1", materials: ["[Monthly] Arena Voucher x20"] },
          { product: "Boundless Inferior Ring x1", materials: ["[Monthly] Arena Voucher x30"] },
          { product: "Boundless Inferior Necklace x1", materials: ["[Monthly] Arena Voucher x30"] },
          { product: "Boundless Inferior Earring x1", materials: ["[Monthly] Arena Voucher x30"] }
        ]
      },
      {
        name: "Seasonal (Consumables)",
        recipes: [
          { product: "Red Light of Life x150", materials: ["[Seasonal] Arena Voucher x1"] },
          { product: "Blue Light of Life x150", materials: ["[Seasonal] Arena Voucher x1"] },
          { product: "Boundless Chivalry x1", materials: ["[Seasonal] Arena Voucher x1"] },
          { product: "Rare Coin (Event) x7", materials: ["[Seasonal] Arena Voucher x1"] },
          { product: "Digimon Enhancement Buff Pack x10", materials: ["[Seasonal] Arena Voucher x3"] },
          { product: "Special Chicken Combo x20", materials: ["[Seasonal] Arena Voucher x3"] },
          { product: "Fruit of Chaos x15", materials: ["[Seasonal] Arena Voucher x3"] },
          { product: "Fruit of Genesis x25", materials: ["[Seasonal] Arena Voucher x5"] },
          { product: "Fruit of Yggdrasil x25", materials: ["[Seasonal] Arena Voucher x5"] },
          { product: "Fruit of Homeostasis x15", materials: ["[Seasonal] Arena Voucher x5"] },
          { product: "Yardie's Fried Chicken x15", materials: ["[Seasonal] Arena Voucher x5"] },
          { product: "Seal Opener x25", materials: ["[Seasonal] Arena Voucher x7"] },
          { product: "Seal Closer x25", materials: ["[Seasonal] Arena Voucher x7"] },
          { product: "Change Digimon Name x1", materials: ["[Seasonal] Arena Voucher x10"] },
          { product: "Change Tamer Name x1", materials: ["[Seasonal] Arena Voucher x10"] },
          { product: "Growth Fruit x1", materials: ["[Seasonal] Arena Voucher x15"] },
          { product: "Mercenary Slot Expansion x1", materials: ["[Seasonal] Arena Voucher x20"] }
        ]
      },
      {
        name: "Seasonal (EXP & Skill Memory)",
        recipes: [
          { product: "Amplification Booster +1000% x3", materials: ["[Seasonal] Arena Voucher x1"] },
          { product: "Attribute EXP Booster 30 Day x1", materials: ["[Seasonal] Arena Voucher x10"] }
        ]
      },
      {
        name: "Seasonal (DigiEggs)",
        recipes: [
          { product: "Raremon DigiEgg Lv. 5 x1", materials: ["[Seasonal] Arena Voucher x10"] },
          { product: "Random Reinforced DigiEgg Lv.5 x1", materials: ["[Seasonal] Arena Voucher x15"] },
          { product: "Kamemon DigiEgg Lv. 5 x1", materials: ["[Seasonal] Arena Voucher x20"] },
          { product: "Tanemon DigiEgg Lv. 5 x1", materials: ["[Seasonal] Arena Voucher x20"] },
          { product: "Kudamon DigiEgg Lv. 5 x1", materials: ["[Seasonal] Arena Voucher x20"] },
          { product: "PawnChessmonW DigiEgg Lv. 5 x1", materials: ["[Seasonal] Arena Voucher x20"] },
          { product: "PawnChessmonB DigiEgg Lv. 5 x1", materials: ["[Seasonal] Arena Voucher x20"] },
          { product: "Gizumon DigiEgg Lv. 5 x1", materials: ["[Seasonal] Arena Voucher x20"] },
          { product: "Agumon(Black)(BlitzGreymon) DigiEgg Lv. 5 x1", materials: ["[Seasonal] Arena Voucher x20"] },
          { product: "Gabumon(CresGarurumon) DigiEgg Lv. 5 x1", materials: ["[Seasonal] Arena Voucher x20"] },
          { product: "Veemon(Imperialdramon) DigiEgg Lv. 5 x1", materials: ["[Seasonal] Arena Voucher x20"] },
          { product: "Wormmon(Imperialdramon) DigiEgg Lv. 5 x1", materials: ["[Seasonal] Arena Voucher x20"] },
          { product: "Hawkmon(Silphymon) DigiEgg Lv. 5 x1", materials: ["[Seasonal] Arena Voucher x20"] },
          { product: "Salamon(Silphymon) DigiEgg Lv. 5 x1", materials: ["[Seasonal] Arena Voucher x20"] },
          { product: "Guilmon(ChaosGallantmon) DigiEgg Lv. 5 x1", materials: ["[Seasonal] Arena Voucher x20"] },
          { product: "Elecmon(Duftmon) DigiEgg Lv. 5 x1", materials: ["[Seasonal] Arena Voucher x20"] },
          { product: "Kokuwamon DigiEgg Lv. 5 x1", materials: ["[Seasonal] Arena Voucher x20"] },
          { product: "Burst Mode Random Reinforced DigiEgg Lv.5 x1", materials: ["[Seasonal] Arena Voucher x20"] },
          { product: "Lucemon DigiEgg Lv. 5 x1", materials: ["[Seasonal] Arena Voucher x25"] },
          { product: "Jogress Random Reinforced DigiEgg Lv.5 x1", materials: ["[Seasonal] Arena Voucher x25"] }
        ]
      },
      {
        name: "Seasonal (Hatch & Reinforcement)",
        recipes: [
          { product: "Reset Capsule x20", materials: ["[Seasonal] Arena Voucher x3"] },
          { product: "Backup Disk x30", materials: ["[Seasonal] Arena Voucher x3"] },
          { product: "Hatch Backup Lv.4 x3", materials: ["[Seasonal] Arena Voucher x4"] },
          { product: "Hatch Backup Lv.5 x3", materials: ["[Seasonal] Arena Voucher x7"] },
          { product: "Mega Reinforced DigiClone (D) x3", materials: ["[Seasonal] Arena Voucher x1"] },
          { product: "Mega Reinforced DigiClone (C) x3", materials: ["[Seasonal] Arena Voucher x2"] },
          { product: "Mega Reinforced DigiClone (B) x3", materials: ["[Seasonal] Arena Voucher x3"] },
          { product: "Mega Reinforced DigiClone (A) x3", materials: ["[Seasonal] Arena Voucher x4"] },
          { product: "Mega Reinforced DigiClone (S) x3", materials: ["[Seasonal] Arena Voucher x5"] }
        ]
      },
      {
        name: "Seasonal (Digimon Evolution)",
        recipes: [
          { product: "Gehenna x1", materials: ["[Seasonal] Arena Voucher x40"] },
          { product: "X-Antibody Factor-UlforceVeedramon x1", materials: ["[Seasonal] Arena Voucher x60"] }
        ]
      },
      {
        name: "Seasonal (Tamer Equipment & Accessories)",
        recipes: [
          { product: "Colosseum Armor (DS) x1", materials: ["[Seasonal] Arena Voucher x12"] },
          { product: "Colosseum Armor (HP) x1", materials: ["[Seasonal] Arena Voucher x12"] },
          { product: "Colosseum Armor (AT) x1", materials: ["[Seasonal] Arena Voucher x12"] },
          { product: "103-Purple-BT x1", materials: ["[Seasonal] Arena Voucher x5"] },
          { product: "Boundless Inferior Shirt Box x1", materials: ["[Seasonal] Arena Voucher x3"] },
          { product: "Boundless Inferior Pants Box x1", materials: ["[Seasonal] Arena Voucher x3"] },
          { product: "Boundless Inferior Gloves Box x1", materials: ["[Seasonal] Arena Voucher x4"] },
          { product: "Option Change Stone x30", materials: ["[Seasonal] Arena Voucher x5"] },
          { product: "Number Change Stone x30", materials: ["[Seasonal] Arena Voucher x5"] },
          { product: "Amazing Renewal Increase Stone x20", materials: ["[Seasonal] Arena Voucher x5"] },
          { product: "Amazing Digitary Power Stone x20", materials: ["[Seasonal] Arena Voucher x5"] },
          { product: "Boundless Inferior Ring x1", materials: ["[Seasonal] Arena Voucher x5"] },
          { product: "Boundless Inferior Necklace x1", materials: ["[Seasonal] Arena Voucher x5"] },
          { product: "Boundless Inferior Earring x1", materials: ["[Seasonal] Arena Voucher x10"] }
        ]
      }
    ]
  }
];
