(() => {
    const treasureTables = {
        "0-3": [
            [1, 1, "Bent tin fork (1 cp)"],
            [2, 3, "Muddy torch (2 cp)"],
            [4, 5, "Bag of smooth pebbles (2 cp)"],
            [6, 7, "10 cp in a greasy pouch"],
            [8, 9, "Rusty lantern with shattered glass (1 gp)"],
            [10, 11, "Silver tooth (1 gp)"],
            [12, 13, "Dull dagger (1 gp)"],
            [14, 15, "Two empty glass vials (6 gp)"],
            [16, 17, "60 sp in a rotten boot"],
            [18, 19, "Cracked, handheld mirror (8 gp)"],
            [20, 21, "Chipped greataxe (9 gp)"],
            [22, 23, "10 gp in a moldy, wood box"],
            [24, 25, "Chip of an emerald (10 gp)"],
            [26, 27, "Longbow and bundle of 40 arrows (10 gp)"],
            [28, 29, "Dusty, leather armor dyed black (10 gp)"],
            [30, 31, "Scuffed, heavy shield (10 gp)"],
            [32, 33, "Simple, well-made bastard sword (10 gp)"],
            [34, 35, "12 gp in the pocket of a ripped cloak"],
            [36, 37, "Wavy-bladed greatsword (12 gp)"],
            [38, 39, "Pair of elf-forged shortswords (14 gp)"],
            [40, 41, "Golden bowl (15 gp)"],
            [42, 43, "Obsidian statuette of Shune the Vile (15 gp)"],
            [44, 45, "Undersized pearl (20 gp)"],
            [46, 47, "Jade-and-gold scarab pin (20 gp)"],
            [48, 49, "Bag of 10 silver spikes (2 gp each)"],
            [50, 53, "Mithral locket with a painting of a halfling (20 gp)"],
            [54, 55, "Two finely forged dwarven shields (20 gp)"],
            [56, 57, "Pair of silvered daggers (10 gp each)"],
            [58, 59, "Copper-and-gold mead tankard (20 gp)"],
            [60, 61, "Bundle of five red dragon scales (5 gp each)"],
            [62, 63, "Light, warm cloak woven of spidersilk (25 gp)"],
            [64, 65, "Fine set of ivory game pieces (25 gp)"],
            [66, 67, "Half-finished suit of chainmail (30 gp)"],
            [68, 69, "Matched trio of warhammers (10 gp each)"],
            [70, 71, "Fragment of a sapphire (30 gp)"],
            [72, 73, "Set of silk slippers and a robe (35 gp)"],
            [74, 75, "Silver-and-gold circlet (40 gp)"],
            [76, 77, "Radiant, polished pearl (40 gp)"],
            [78, 79, "Mithral shield etched with soaring dragons (40 gp)"],
            [80, 81, "Gold monkey idol with a ruby gripped in its teeth (60 gp)"],
            [82, 83, "Fine suit of chainmail (60 gp)"],
            [84, 85, "Cracked emerald (60 gp)"],
            [86, 87, "Two lustrous pearls (40 gp each)"],
            [88, 89, "1st-tier spell scroll (80 gp)"],
            [90, 91, "Potion of Invisibility (80 gp)"],
            [92, 93, "Magic wand, 2nd-tier spell (100 gp)"],
            [94, 95, "Egg of The Cockatrice (100 gp)"],
            [96, 97, "+1 armor (benefit, curse) (150 gp)"],
            [98, 99, "Bag of Holding (virtue, flaw) (150 gp)"],
            [100, 100, "+1 magic weapon (benefit) (200 gp)"]
        ],
        "4-6": [
            [1, 1, "Scattering of 3 cp"],
            [2, 3, "Wooden ring carved with knot pattern (5 cp)"],
            [4, 5, "Heavy iron key (1 sp)"],
            [6, 7, "Steel-banded wooden shield (10 gp)"],
            [8, 9, "Golden anchor necklace (10 gp)"],
            [10, 11, "Bag of 20 glass marbles (5 sp each)"],
            [12, 13, "Serrated greatsword (12 gp)"],
            [14, 15, "Three silver-tipped javelins (4 gp each)"],
            [16, 17, "Bag of rare spices (15 gp)"],
            [18, 19, "Mahogany pipe with ivory inlay (25 gp)"],
            [20, 21, "Set of polished bone dice (25 gp)"],
            [22, 23, "Copper flask etched with an owl (30 gp)"],
            [24, 25, "Eyepatch made of batwing leather (30 gp)"],
            [26, 27, "Leather bandoleer with 10 blue bottles (3 gp each)"],
            [28, 29, "Small oil painting of an elf woman (35 gp)"],
            [30, 31, "Opalescent pearl (40 gp)"],
            [32, 33, "Ceremonial, gold-capped warhammer (40 gp)"],
            [34, 35, "Silver ring with a miniature emerald (40 gp)"],
            [36, 37, "Tapestry of a unicorn in a forest glade (45 gp)"],
            [38, 39, "Goblin-made clockwork dragon doll (45 gp)"],
            [40, 41, "Half-complete suit of chainmail (50 gp)"],
            [42, 43, "Mace inlaid with gold holy symbols (50 gp)"],
            [44, 45, "Delicate, ancient vase of Myrkhosian make (50 gp)"],
            [46, 47, "Rare incense that is repulsive to undead (50 gp)"],
            [48, 49, "Minotaur hoof with a gold horseshoe (50 gp)"],
            [50, 53, "Longsword with a fiery pearl set in the pommel (50 gp)"],
            [54, 55, "Green crystal statuette of Memnon (50 gp)"],
            [56, 57, "Crimson holy symbol of Ramlaat with small ruby (55 gp)"],
            [58, 59, "Six black candles traced with gold runes (10 gp each)"],
            [60, 61, "Suit of dwarf-made chainmail (60 gp)"],
            [62, 63, "Dragonbone crossbow carved as roaring dragon (60 gp)"],
            [64, 65, "Half-complete suit of plate mail (65 gp)"],
            [66, 67, "Magnetic, iridescent chunk of meteorite (70 gp)"],
            [68, 69, "Full-length mirror set in gold frame (70 gp)"],
            [70, 71, "Large, green scarab encased in amber (75 gp)"],
            [72, 73, "Lute carved from ironwood with gold hardware (75 gp)"],
            [74, 75, "Ivory tusk carved with angels battling demons (80 gp)"],
            [76, 77, "Mithral shield inlaid with small, blue pearls (80 gp)"],
            [78, 79, "Two intact griffon eggs (40 gp each)"],
            [80, 81, "Suit of blackened-steel plate mail (130 gp)"],
            [82, 83, "2nd-tier spell scroll (140 gp)"],
            [84, 85, "Potion of Healing (150 gp)"],
            [86, 87, "3rd-tier spell scroll (200 gp)"],
            [88, 89, "Potion of Flying (200 gp)"],
            [90, 91, "Potion of Giant Strength (200 gp)"],
            [92, 93, "Magic wand, 3rd-tier spell (curse) (250 gp)"],
            [94, 95, "Ring of Feather Falling (250 gp)"],
            [96, 97, "+2 magic armor (benefit, curse) (300 gp)"],
            [98, 99, "Kytherian Cog (300 gp)"],
            [100, 100, "+2 magic weapon (benefit, curse) (500 gp)"]
        ],
        "7-9": [
            [1, 1, "Broken glass shards (2 cp)"],
            [2, 3, "Pair of muddy boots (5 sp)"],
            [4, 5, "Rotting, leather pouch with 12 sp"],
            [6, 7, "Greatsword made of blue steel (15 gp)"],
            [8, 9, "Tall, thin mirror in a bronze frame (20 gp)"],
            [10, 11, "Pair of bastard swords with griffon pommels (20 gp)"],
            [12, 13, "Silver-and-gold statuette of an elf archer (25 gp)"],
            [14, 15, "Taxidermied smilodon (30 gp)"],
            [16, 17, "Cameo necklace of a human's profile (30 gp)"],
            [18, 19, "Ivory horn mug carved with drinking dwarves (35 gp)"],
            [20, 21, "Ironwood longbow engraved with silver leaves (35 gp)"],
            [22, 23, "Mahogany chess board with silver pieces (40 gp)"],
            [24, 25, "Mithral shield polished to a mirror-shine (45 gp)"],
            [26, 27, "Iridescent, spiralled unicorn horn (50 gp)"],
            [28, 29, "Basilisk egg in a silk bag (55 gp)"],
            [30, 31, "Gold holy symbol of Madeera with a large pearl (60 gp)"],
            [32, 33, "Red dragon mask with gold filigree (65 gp)"],
            [34, 35, "Gold censer with hooded, skeletal figures (70 gp)"],
            [36, 37, "Large, marble statue of an armored angel (70 gp)"],
            [38, 39, "Chainmail with several rows of gold links (75 gp)"],
            [40, 41, "Clutch of three green cockatrice eggs (25 gp each)"],
            [42, 43, "Oak lockbox filled to the brim with 80 gp"],
            [44, 45, "Blue silk robe embroidered with silver moons (80 gp)"],
            [46, 47, "Radiant giant pearl (80 gp)"],
            [48, 49, "Lantern made of intricate stained glass (80 gp)"],
            [50, 53, "Life-sized, jointed python of polished gold (80 gp)"],
            [54, 55, "Oil painting of a famous bard (85 gp)"],
            [56, 57, "Chunk of meteorite sculpted into a tentacled idol (85 gp)"],
            [58, 59, "Black silk surcoat embroidered with a gold lion (90 gp)"],
            [60, 61, "Pair of lustrous pearls in a silver lockbox (90 gp)"],
            [62, 63, "Gilded helm plumed with roc feathers (95 gp)"],
            [64, 65, "Hand-drawn bestiary of rare creatures (95 gp)"],
            [66, 67, "Wyvern hatchling encased in amber (110 gp)"],
            [68, 69, "Pendant with three lambent pearls (120 gp)"],
            [70, 71, "Life-sized, obsidian statue of a galloping horse (120 gp)"],
            [72, 73, "Glittering, faceted emerald (120 gp)"],
            [74, 75, "Potion of Healing (150 gp)"],
            [76, 77, "Potion of Polymorph (200 gp)"],
            [78, 79, "Magic wand, 3rd-tier spell (250 gp)"],
            [80, 81, "4th-tier spell scroll (260 gp)"],
            [82, 83, "Crystal Ball (260 gp)"],
            [84, 85, "Magic wand, 4th-tier spell (flaw) (300 gp)"],
            [86, 87, "Immovable Rod (300 gp)"],
            [88, 89, "+2 magic armor (benefit) (300 gp)"],
            [90, 91, "+2 mithral magic armor (benefit, virtue) (320 gp)"],
            [92, 93, "Scorpion idol, one Death's Sting blessing (320 gp)"],
            [94, 95, "Necromancy circle, one Ghostwalk blessing (350 gp)"],
            [96, 97, "Owl statue, one Arcane Eye blessing (350 gp)"],
            [98, 99, "+2 magic weapon (benefit, flaw) (500 gp)"],
            [100, 100, "+3 magic weapon (benefit, virtue) (900 gp)"]
        ],
        "10+": [
            [1, 1, "Three tarnished silver plates (5 sp each)"],
            [2, 3, "Soapstone statuette of Gede with crumbled head (3 gp)"],
            [4, 5, "Half-empty cask of dwarvish honey mead (5 gp)"],
            [6, 7, "Damaged chainmail in need of repair (50 gp)"],
            [8, 9, "Five matching, ceremonial greatswords (12 gp each)"],
            [10, 11, "Chipped emerald worth half its value (60 gp)"],
            [12, 13, "Gold ring with a large, black pearl (65 gp)"],
            [14, 15, "Suit of crimson chainmail with matching shield (70 gp)"],
            [16, 17, "Giant pearl in the mouth of a gold-dipped bat (100 gp)"],
            [18, 19, "Stained glass pane of St. Terragnis vs. a dragon (110 gp)"],
            [20, 21, "Marble throne with giant pearl in headrest (115 gp)"],
            [22, 23, "Dagger with emerald in the pommel (120 gp)"],
            [24, 25, "A trio of pearls with blue and violet hues (40 gp each)"],
            [26, 27, "Suit of plate mail shaped to look like a minotaur (130 gp)"],
            [28, 29, "Suit of blue plate mail with crashing wave motif (130 gp)"],
            [30, 31, "Jade sculpture of a meditating elephant-man (140 gp)"],
            [32, 33, "Masterwork lute by realm's most famous luthier (140 gp)"],
            [34, 35, "Dragonbone greataxe with a ruby in pommel (220 gp)"],
            [36, 37, "Gold scarab dotted with miniature emeralds (220 gp)"],
            [38, 39, "Chest brimming with 230 gp"],
            [40, 41, "Silvered staff tipped with a ruby held in a claw (220 gp)"],
            [42, 43, "Only existing painting of an ancient king (240 gp)"],
            [44, 45, "Gold pendant bearing a teardrop-cut ruby (240 gp)"],
            [46, 47, "Giant, egg-shaped emerald (240 gp)"],
            [48, 49, "Silk robe with four pearls as buttons (240 gp)"],
            [50, 53, "Silver skull with a ruby in the eye (240 gp)"],
            [54, 55, "Mithral suit of elvish chainmail (240 gp)"],
            [56, 57, "Opalized giant conch shell with silver inlay (250 gp)"],
            [58, 59, "Gold sarcophagus inscribed with lost language (250 gp)"],
            [60, 61, "Chunk of meteorite wrapped around a ruby (250 gp)"],
            [62, 63, "4th-tier spell scroll (260 gp)"],
            [64, 65, "Velvet bag holding a lustrous sapphire (280 gp)"],
            [66, 67, "2 Potions of Healing (300 gp)"],
            [68, 69, "Silver torc with a sapphire and two pearls (360 gp)"],
            [70, 71, "Flawless, dazzling diamond (360 gp)"],
            [72, 73, "Taxidermied adult dragon (360 gp)"],
            [74, 75, "5th-tier spell scroll (360 gp)"],
            [76, 77, "Potion of Extirpation (360 gp)"],
            [78, 79, "Magic wand, 5th-tier spell (virtue, flaw) (360 gp)"],
            [80, 81, "Giant diamond, casts wish once without fail (720 gp)"],
            [82, 83, "Portable Hole (720 gp)"],
            [84, 85, "Ruby-eyed, gold idol, 3 Demonskin blessings (840 gp)"],
            [86, 87, "Scroll of the Covenant, 3 Divine Halo blessings (840 gp)"],
            [88, 89, "Brak's Cube of Perfection (840 gp)"],
            [90, 91, "Richly woven Flying Carpet (840 gp)"],
            [92, 93, "+3 mithral magic armor (benefit, virtue) (900 gp)"],
            [94, 95, "+3 magic weapon (2 benefits) (900 gp)"],
            [96, 97, "The fearsome Obsidian Witchknife (1,200 gp)"],
            [98, 99, "The hallowed Armor of Saint Terragnis (1,200 gp)"],
            [100, 100, "The mighty Staff of Ord (1,200 gp)"]
        ]
    };

    const luxuryTable = [
        ["Life-sized humanoid figure", "Golden"],
        ["1d4: 1. tusk, 2. horn, 3. fang, 4. skull", "Etched-copper"],
        ["Altar, 1d4: 1. Memnon, 2. Ord, 3-4. Madeera", "Dragonscaled"],
        ["Gilded", "Statuette, 1d4: 1. fox, 2. cat, 3. dog, 4. owl"],
        ["1d4: 1. chest, 2. table, 3. lockbox, 4. chair", "Bone-carved"],
        ["Amber-encased", "Icon, 1d4: 1. Chaos, 2. Neutrality, 3-4. Law"],
        ["Painting of", "Bust, 1d4: 1. god, 2. ruler, 3. hero, 4. bard"],
        ["Egg, 1d4: 1. dragon, 2. basilisk, 3-4. griffon", "Silver"],
        ["1d4: 1. charm, 2. amulet, 3. locket, 4. signet", "Jade"],
        ["Tapestry of", "Mask, 1d4: 1. crow, 2. jester, 3. thief, 4. god"],
        ["White marble", "1d4: 1. mirror, 2. vase, 3. pottery, 4. ewer"],
        ["1d4: 1. chalice, 2. plate, 3. cutlery, 4. mug", "Ivory"],
        ["1d4: 1. circlet, 2. ring, 3. chain, 4. torc", "Crystal"],
        ["Bottle, 1d4: 1. wine, 2. grog, 3. mead, 4. ale", "Mithral"],
        ["Dragonbone", "1d4: 1-2. scroll case, 3. ink pot, 4. quill"],
        ["Holy relic", "1d4: 1. shield, 2. helm, 3. bracers 4. greaves"],
        ["Meteorite", "1d4: 1. lute, 2. viol, 3. harp, 4. flute"],
        ["1d4: 1. urn, 2. coffin, 3. bier, 4. sarcophagus", "Masterwork"],
        ["1d4: 1. crown, 2. scepter, 3. orb, 4. throne", "Silk-wrapped"],
        ["1d4: 1-2. beetle, 3. butterfly, 4. spider", "Stained glass"]
    ];

    const oaths = [
        "The duke will procure you an audience with the queen",
        "The City Watch will pardon a crime you've committed",
        "A dryad will protect you while you're in her grove",
        "A Thieves' Guild member will get you into the gem vault",
        "A unicorn will heal a grave wound or affliction",
        "A dwarven forgemaster will make you a spectacular sword",
        "A baron will grant you the title of knight or constable",
        "The Circle of Mages will magically teleport you anywhere"
    ];

    const secrets = [
        ["The True Name of", "The king"],
        ["The one manipulating", "A powerful demon"],
        ["The killer of", "A legendary swordmaster"],
        ["The impersonator of", "The head of the church"],
        ["The horrifying plan of", "A mighty sorcerer"],
        ["The secret location of", "A rival adventuring party"],
        ["The beloved of", "The Thieves' Guild boss"],
        ["Proof of the crimes by", "A revered knight of St. Terragnis"],
        ["The treasure hoard of", "A famous dragon-slayer"],
        ["The weakness of", "The settlement's leadership"],
        ["The secret identity of", "A fearsome lich-queen"],
        ["The one blackmailing", "A cherished NPC"]
    ];

    const blessings = [
        "Wraithsight. You can see invisible and hidden creatures",
        "Nine Lives. The next nine times you go to 0 HP, regain 1 HP",
        "Demonskin. You are immune to damage from fire",
        "Spiderwalk. You can crawl on walls and sheer surfaces",
        "Merfolk's Kiss. You can breathe water as though it were air",
        "Gede's Blessing. You can speak to and understand animals",
        "Arcane Eye. Three times per day, advantage to cast a spell",
        "Shune's Mark. When you kill a creature, heal 1d6 hit points",
        "Ghostwalk. Once per day, turn incorporeal for 1d4 rounds",
        "Death's Sting. You are immune to the effects of poison",
        "Rite of Rage. Once per day, deal double damage",
        "Divine Halo. Hostile spells that target you are DC 15 to cast"
    ];

    const magicIdeas = [
        ["The Crimson", "Blade", "of Thundering Death"],
        ["The Ashen", "Poultice", "of Ages"],
        ["Ortival's", "Rite", "of the Archmage"],
        ["The Doom", "Axe", "of Destruction"],
        ["The Twilight", "Hammer", "of Brak"],
        ["The Astral", "Wand", "of Power"],
        ["Krull's", "Cape", "of the Covenant"],
        ["The Vicious", "Tome", "of the Wilds"],
        ["Memnon's", "Litany", "of the Horde"],
        ["The Blessed", "Staff", "of Blood"],
        ["The Infernal", "Scroll", "of Time"],
        ["Madeera's", "Skull", "of the Lich Queen"],
        ["The Whispering", "Bow", "of the Elders"],
        ["The Unholy", "Sword", "of Madness"],
        ["Shune's", "Shield", "of Withering"],
        ["The Lost", "Dagger", "of Annihilation"],
        ["Ord's", "Armor", "of the Dragon"],
        ["The Righteous", "Orb", "of the Risen"],
        ["The Demonic", "Eye", "of Elemental Fury"],
        ["The Primordial", "Elixir", "of the Spirits"]
    ];

    const magicTypes = ["Armor", "Potion", "Scroll", "Utility", "Wand", "Weapon"];

    const armorTypes = [
        [2, 5, "Leather"], [6, 7, "Chainmail"], [8, 9, "Shield"], [10, 11, "Plate mail"], [12, 12, "Mithral"]
    ];
    const armorBonuses = [
        [2, 5, "+0"], [6, 8, "+1"], [9, 11, "+2"], [12, 12, "+3"]
    ];
    const armorFeatures = [
        "Demonic horned face", "Oak leaf motif", "Studded with shark teeth", "Dragon scales", "Bone or metal spikes",
        "Faint arcane runes", "Turtle shell plating", "Made of scorpion chitin", "Gilded metal/gold thread", "Scorched, smells burned",
        "Pearl-white fish scales", "Oozes blood", "Festooned with fungi", "Distant sound of ocean", "Set with crystals",
        "Draped in holy symbols", "Exudes tree sap", "Blurry, indistinct edges", "Large golden cat eye", "Covered in frost"
    ];
    const armorBenefits = [
        "Once per day, deflect a ranged attack that would hit you",
        "Checks to stabilize you are easy (DC 9)",
        "You cannot be knocked over while you are conscious",
        "Undetected creatures do not have advantage to attack you",
        "You know Diabolic and are immune to fire, lava, and magma",
        "You are immune to the curses of one item you choose",
        "Once per day, gain advantage on all attacks for 3 rounds",
        "You have a +4 bonus to your death timers",
        "Gain immunity to a poison after suffering its effects once",
        "You know Celestial and can fly for 3 rounds once per day",
        "Treat critical hits against you as normal hits",
        "Ignore any damage dealt to you of 3 points or below"
    ];
    const armorCurses = [
        "You take 2d10 damage if you remove this armor",
        "Your party cannot add CHA bonuses to reaction checks",
        "Mounts fear you and will not allow you to ride them",
        "DC 15 WIS first round of combat or attack nearest creature",
        "You take double damage from blunt/bludgeoning weapons",
        "Armor uses 5 gear slots and is extremely loud and clunky",
        "Ranged attacks against you have advantage",
        "Treat a natural 1 attack roll against you as a critical hit",
        "Beneficial spells that target you are hard to cast (DC 15)",
        "You have disadvantage on Dexterity checks",
        "There's a secret 1-in-6 chance each NPC ally will betray you",
        "You take double damage from silvered weapons"
    ];

    const potionFeatures = [
        ["Spicy", "Pickled spider inside", "Bubbling"],
        ["Clear as water", "Green fumes", "Purple streaks"],
        ["Deep blue", "Tiny stars and moon", "Flames on surface"],
        ["Citrus smell", "Gold flakes in liquid", "Floral smell"],
        ["Sulfurous", "Swirling vortex", "Skull on bottle"],
        ["Fizzy", "Quiet whistling", "Warm"],
        ["Chilly", "Rattles and shakes", "Large molar inside"],
        ["Blood red", "Eyeball inside", "Pink starbursts"]
    ];
    const potionBenefits = [
        "Immune 5 rounds, 1d4: 1. fire, 2. cold, 3. electricity, 4. poison",
        "Heals, 1d4: 1. 1d4, 2. 2d6, 3. 3d8, 4. 4d10",
        "Read the minds of all creatures within near for 1 hour",
        "Fly a near distance for 5 rounds",
        "For 5 rounds, move far on your turn and still take an action",
        "Become invisible for 5 rounds",
        "Breathe underwater and know Merran language for 1 hour",
        "A stat becomes 18 (+4) for 5 rounds",
        "Turn into purple, flying gas for 5 rounds",
        "Cures any disease or affliction affecting drinker",
        "Speak to and understand animals for 1 hour",
        "You are immune to all damage for 5 rounds"
    ];
    const potionCurses = [
        "DC 15 WIS check or attack nearest creature for 3 rounds",
        "Turn into a 1 HP newt for 3 rounds",
        "A stat becomes 3 (-4) for 1 hour",
        "DC 15 CON check or take 2d10 damage",
        "Forget all languages you know for 1 hour",
        "Shrink to half size and disadvantage on attacks for 5 rounds",
        "Sing at the top of your lungs for 3 rounds",
        "You become magnetic to all metal near to you for 1 hour",
        "You are compelled to jump into any pits you see for 1 hour",
        "DC 15 CON check or go blind for 5 rounds",
        "You are the source of an antimagic shell spell for 1 hour",
        "Two limbs petrify for 5 rounds, 1d4: 1-2. arms, 3-4. legs"
    ];

    const scrollFeatures = [
        "Branded on leather", "Etched on copper leaf", "Faded papyrus", "Stained parchment roll",
        "Carved into bone", "Chiseled on stone slates", "Etched into glass", "Tattooed on dragon skin"
    ];
    const wandFeatures = [
        "Carved from bone", "Blinking eye in handle", "Sleek starmetal", "Polished wood",
        "Obsidian with ivory tips", "Electrical sparks", "Jagged crystal", "Made of tiny skulls"
    ];

    const utilityTypes = [
        "Brooch", "Ring", "Boots", "Cloak", "Amulet", "Flask", "Tome", "Circlet", "Eyepatch", "Gauntlets",
        "Holy symbol", "Hat", "Goblet", "Helm", "Statuette", "Goggles", "Bag", "Rock", "Surcoat", "Mask"
    ];
    const utilityFeatures = [
        "Shaped like a raven", "Iridescent", "Cruel spikes and spines", "Made from a big frog", "Gem-studded",
        "Gold thread/hardware", "Made of basilisk hide", "Possessed by a spirit", "Made of shaped smoke", "Covered in small thorns",
        "Made with rare feathers", "Has tiny wings", "Slowly changes colors", "Shaped like a bat", "Tarnished silver hardware",
        "Made of spidersilk", "Hums quiet, sweet tones", "Jolt of pain at first touch", "Throbs like a heart", "Trails faint mist"
    ];
    const utilityBenefits = [
        "You can't be magically scryed upon or detected",
        "Connects to an interdimensional pocket with 5 gear slots",
        "A stat becomes 18 (+4) while using/wearing item",
        "Once per day, teleport a near distance",
        "Harmful spells that target you are DC 15 to cast",
        "You're immune to 1d4: 1. fire, 2. cold, 3. electricity, 4. poison",
        "Sense secret doors when they're within close range",
        "You can see invisible and incorporeal creatures",
        "Your movement isn't hindered by any terrain",
        "You can hold your breath for 1 hour",
        "You do not need to eat or drink to survive",
        "You can walk on non-solid surfaces for 2 rounds at a time"
    ];
    const utilityCurses = [
        "Slowly rots all other non-magical items that touch it",
        "Deals 1d4 damage and leaves blisters whenever used",
        "Item attracts bad weather to its location",
        "You cannot be healed by magic; only by resting",
        "Crashes like a gong whenever wielder slays a creature",
        "Item attracts all undead within a far distance",
        "Temporarily loses magic if doused in water",
        "You have disadvantage on CON checks",
        "You are compelled to light parchment objects on fire",
        "You must drink blood once a day or take 1d8 damage",
        "Item must eat 1d10 gp a day or it loses its magic until fed",
        "Item has horrid smell that makes all your CHA checks hard"
    ];

    const weaponTypes = [
        [1, 1, "Arrows (2d6)"], [2, 3, "Bastard sword"], [4, 4, "Club"], [5, 5, "Crossbow"], [6, 6, "Crossbow bolts (2d6)"],
        [7, 8, "Dagger"], [9, 9, "Greataxe"], [10, 10, "Greatsword"], [11, 11, "Javelin"], [12, 12, "Longbow"],
        [13, 14, "Longsword"], [15, 15, "Mace"], [16, 16, "Shortbow"], [17, 18, "Shortsword"], [19, 19, "Staff"], [20, 20, "Warhammer"]
    ];
    const weaponBonuses = [[2, 3, "+0"], [4, 9, "+1"], [10, 11, "+2"], [12, 12, "+3"]];
    const weaponFeatures = [
        "Trails sparkles", "Starmetal", "Rusted and chipped", "Gem in pommel/handle", "Drips green ichor",
        "Moon motif and silvered", "Galaxies swirl on surface", "Ironwood", "Rune-scribed", "Faint, ghostly aura",
        "Inlaid with gold", "Trails incense", "Studded with gemstones", "Sparks dance on surface", "Shaped like an animal",
        "Carved from granite", "Dragonbone hardware", "Whispers in a language", "Drips ocean water", "Turns blood to rose petals"
    ];
    const weaponBenefits = [
        "Cut or smash through any material",
        "Once per day, ignites for 5 rounds, deals 1d4 extra damage",
        "DC 15 CHA check to command a wild animal within far",
        "Behead the enemy on a critical hit",
        "When you hit a creature, learn its True Name (see pg. 319)",
        "Shoot a bolt of energy near with DEX, 1d6 damage",
        "Once per day, deflect a melee attack that would hit you",
        "Regain 1d6 hit points when you slay a creature",
        "You have advantage on initiative rolls",
        "Has thrown property (pg. 37), near distance, returns to you",
        "Double damage to 1d4: 1-2. undead, 3. demons, 4. dragons",
        "Reroll natural 1s once each when attacking with this weapon"
    ];
    const weaponCurses = [
        "You can't see 1d4: 1. undead, 2. demons, 3. snakes, 4. spiders",
        "You are compelled to swallow all gemstones at first sight",
        "Burn a straw doll daily or weapon temporarily loses magic",
        "Any light source you hold immediately extinguishes",
        "You must loudly praise a god whenever you see its symbol",
        "Venomous creatures always target you with attacks",
        "You turn into a rat every day at midnight for one hour",
        "Your checks to swim are always extreme (DC 18)",
        "You are burned by the touch of gold",
        "Bathe weapon in blood daily or it temporarily loses its magic",
        "You cannot wear armor while wielding this weapon",
        "Weapon can possess you by winning contested CHA (+2)"
    ];

    const spells = {
        1: ["Alarm", "Burning hands", "Charm person", "Detect magic", "Feather fall", "Floating disk", "Hold portal", "Light", "Mage armor", "Magic missile", "Protection from evil", "Sleep"],
        2: ["Acid arrow", "Alter self", "Detect thoughts", "Fixed object", "Hold person", "Invisibility", "Knock", "Levitate", "Mirror image", "Misty step", "Silence", "Web"],
        3: ["Animate dead", "Dispel magic", "Fabricate", "Fireball", "Fly", "Gaseous form", "Illusion", "Lightning bolt", "Magic circle", "Protection from energy", "Sending", "Speak with dead"],
        4: ["Arcane eye", "Cloudkill", "Confusion", "Control water", "Dimension door", "Divination", "Passwall", "Polymorph", "Resilient sphere", "Stoneskin", "Telekinesis", "Wall of force"],
        5: ["Antimagic shell", "Create undead", "Disintegrate", "Hold monster", "Plane shift", "Power word kill", "Prismatic orb", "Scrying", "Shapechange", "Summon extraplanar", "Teleport", "Wish"]
    };

    const d = (sides) => Math.floor(Math.random() * sides) + 1;
    const roll2d6 = () => d(6) + d(6);

    function fromRangeTable(table, roll) {
        return table.find(row => roll >= row[0] && roll <= row[1])[2];
    }

    function rollCountFrom2d6() {
        const r = roll2d6();
        if (r <= 3) return { roll: r, benefits: 0, curses: 1 };
        if (r <= 7) return { roll: r, benefits: 1, curses: 1 };
        if (r <= 11) return { roll: r, benefits: 1, curses: 0 };
        return { roll: r, benefits: 2, curses: 0 };
    }

    function rollPersonalityCounts() {
        const r = roll2d6();
        if (r <= 3) return { roll: r, virtue: 0, flaw: 1 };
        if (r <= 9) return { roll: r, virtue: 0, flaw: 0 };
        if (r <= 11) return { roll: r, virtue: 1, flaw: 1 };
        return { roll: r, virtue: 1, flaw: 0 };
    }

    function pick(arr) {
        return arr[d(arr.length) - 1];
    }

    function rollLuxurySubroll(text) {
        if (!text.includes("1d4:")) return text;
        const r = d(4);
        const patterns = [
            { test: /1d4: 1\. tusk, 2\. horn, 3\. fang, 4\. skull/, values: ["tusk", "horn", "fang", "skull"] },
            { test: /1d4: 1\. Memnon, 2\. Ord, 3-4\. Madeera/, values: ["Memnon", "Ord", "Madeera", "Madeera"] },
            { test: /1d4: 1\. fox, 2\. cat, 3\. dog, 4\. owl/, values: ["fox", "cat", "dog", "owl"] },
            { test: /1d4: 1\. chest, 2\. table, 3\. lockbox, 4\. chair/, values: ["chest", "table", "lockbox", "chair"] },
            { test: /1d4: 1\. Chaos, 2\. Neutrality, 3-4\. Law/, values: ["Chaos", "Neutrality", "Law", "Law"] },
            { test: /1d4: 1\. god, 2\. ruler, 3\. hero, 4\. bard/, values: ["god", "ruler", "hero", "bard"] },
            { test: /1d4: 1\. dragon, 2\. basilisk, 3-4\. griffon/, values: ["dragon", "basilisk", "griffon", "griffon"] },
            { test: /1d4: 1\. charm, 2\. amulet, 3\. locket, 4\. signet/, values: ["charm", "amulet", "locket", "signet"] },
            { test: /1d4: 1\. crow, 2\. jester, 3\. thief, 4\. god/, values: ["crow", "jester", "thief", "god"] },
            { test: /1d4: 1\. mirror, 2\. vase, 3\. pottery, 4\. ewer/, values: ["mirror", "vase", "pottery", "ewer"] },
            { test: /1d4: 1\. chalice, 2\. plate, 3\. cutlery, 4\. mug/, values: ["chalice", "plate", "cutlery", "mug"] },
            { test: /1d4: 1\. circlet, 2\. ring, 3\. chain, 4\. torc/, values: ["circlet", "ring", "chain", "torc"] },
            { test: /1d4: 1\. wine, 2\. grog, 3\. mead, 4\. ale/, values: ["wine", "grog", "mead", "ale"] },
            { test: /1d4: 1-2\. scroll case, 3\. ink pot, 4\. quill/, values: ["scroll case", "scroll case", "ink pot", "quill"] },
            { test: /1d4: 1\. shield, 2\. helm, 3\. bracers 4\. greaves/, values: ["shield", "helm", "bracers", "greaves"] },
            { test: /1d4: 1\. lute, 2\. viol, 3\. harp, 4\. flute/, values: ["lute", "viol", "harp", "flute"] },
            { test: /1d4: 1\. urn, 2\. coffin, 3\. bier, 4\. sarcophagus/, values: ["urn", "coffin", "bier", "sarcophagus"] },
            { test: /1d4: 1\. crown, 2\. scepter, 3\. orb, 4\. throne/, values: ["crown", "scepter", "orb", "throne"] },
            { test: /1d4: 1-2\. beetle, 3\. butterfly, 4\. spider/, values: ["beetle", "beetle", "butterfly", "spider"] }
        ];
        for (const p of patterns) {
            if (p.test.test(text)) return text.replace(p.test, p.values[r - 1]);
        }
        return text;
    }

    function generateMundane() {
        const row = luxuryTable[d(20) - 1];
        const feature = rollLuxurySubroll(row[0]);
        const item = rollLuxurySubroll(row[1]);
        return {
            result: `${feature} ${item}`.replace(/\s+/g, " ").trim(),
            roll: `Luxury Items Generator d20: rolled ${luxuryTable.indexOf(row) + 1}`
        };
    }

    function generateBoon() {
        const category = d(3);
        if (category === 1) {
            const r = d(8);
            return { result: `Oath: ${oaths[r - 1]}`, roll: `Oaths d8: ${r}` };
        }
        if (category === 2) {
            const r = d(12);
            return { result: `Secret: ${secrets[r - 1][0]} ${secrets[r - 1][1]}`, roll: `Secrets d12: ${r}` };
        }
        const r = d(12);
        return { result: `Blessing: ${blessings[r - 1]}`, roll: `Blessings d12: ${r}` };
    }

    function generateMagic() {
        const typeIndex = d(6) - 1;
        const type = magicTypes[typeIndex];
        const idea = pick(magicIdeas);
        const name = `${idea[0]} ${idea[1]} ${idea[2]}`;
        const quality = rollCountFrom2d6();
        const lines = [`${name}`, `Type: ${type}`, `Qualities 2d6: ${quality.roll}`];

        if (type === "Armor") {
            let armorRoll = roll2d6();
            let armorType = fromRangeTable(armorTypes, armorRoll);
            if (armorType === "Mithral") {
                const reroll = roll2d6();
                armorRoll = reroll;
                armorType = "Mithral + " + fromRangeTable(armorTypes.slice(0, 4), Math.min(reroll, 11));
            }
            const bonusRoll = roll2d6();
            lines.push(`Armor Type 2d6: ${armorRoll} -> ${armorType}`);
            lines.push(`Armor Bonus 2d6: ${bonusRoll} -> ${fromRangeTable(armorBonuses, bonusRoll)}`);
            lines.push(`Feature d20: ${armorFeatures[d(20) - 1]}`);
            for (let i = 0; i < quality.benefits; i++) lines.push(`Benefit: ${armorBenefits[d(12) - 1]}`);
            for (let i = 0; i < quality.curses; i++) lines.push(`Curse: ${armorCurses[d(12) - 1]}`);
        } else if (type === "Potion") {
            const feature = pick(potionFeatures);
            lines.push(`Feature d8: ${feature.join(" / ")}`);
            for (let i = 0; i < quality.benefits; i++) lines.push(`Benefit: ${potionBenefits[d(12) - 1]}`);
            for (let i = 0; i < quality.curses; i++) lines.push(`Curse: ${potionCurses[d(12) - 1]}`);
        } else if (type === "Scroll" || type === "Wand") {
            const feature = type === "Scroll" ? pick(scrollFeatures) : pick(wandFeatures);
            const tierRoll = roll2d6();
            let tier;
            if (tierRoll <= 5) tier = 1;
            else if (tierRoll <= 7) tier = 2;
            else if (tierRoll <= 9) tier = 3;
            else if (tierRoll <= 11) tier = 4;
            else tier = 5;
            const spell = pick(spells[tier]);
            lines.push(`Feature d8: ${feature}`);
            lines.push(`Spell Tier 2d6: ${tierRoll} -> Tier ${tier}`);
            lines.push(`Spell d12: ${spell}`);
            for (let i = 0; i < quality.benefits; i++) lines.push(`Benefit: ${armorBenefits[d(12) - 1]}`);
            for (let i = 0; i < quality.curses; i++) lines.push(`Curse: ${armorCurses[d(12) - 1]}`);
        } else if (type === "Utility") {
            lines.push(`Utility Type d20: ${pick(utilityTypes)}`);
            lines.push(`Feature d20: ${pick(utilityFeatures)}`);
            for (let i = 0; i < quality.benefits; i++) lines.push(`Benefit: ${utilityBenefits[d(12) - 1]}`);
            for (let i = 0; i < quality.curses; i++) lines.push(`Curse: ${utilityCurses[d(12) - 1]}`);
        } else if (type === "Weapon") {
            const weaponRoll = d(20);
            const weaponType = fromRangeTable(weaponTypes, weaponRoll);
            const bonusRoll = roll2d6();
            lines.push(`Weapon Type d20: ${weaponRoll} -> ${weaponType}`);
            lines.push(`Weapon Bonus 2d6: ${bonusRoll} -> ${fromRangeTable(weaponBonuses, bonusRoll)}`);
            lines.push(`Feature d20: ${pick(weaponFeatures)}`);
            for (let i = 0; i < quality.benefits; i++) lines.push(`Benefit: ${weaponBenefits[d(12) - 1]}`);
            for (let i = 0; i < quality.curses; i++) lines.push(`Curse: ${weaponCurses[d(12) - 1]}`);
        }

        return {
            result: lines.join("\n"),
            roll: `Magic Item Type d6: ${typeIndex + 1}`
        };
    }

    function generateTreasureResult() {
        const mode = document.getElementById("treasureMode").value;
        let generated;

        if (mode === "treasure") {
            const level = document.getElementById("treasureLevel").value;
            const roll = d(100);
            generated = {
                result: fromRangeTable(treasureTables[level], roll),
                roll: `Treasure ${level} d100: ${roll}`
            };
        } else if (mode === "mundane") {
            generated = generateMundane();
        } else if (mode === "boon") {
            generated = generateBoon();
        } else {
            generated = generateMagic();
        }

        document.getElementById("treasureResult").textContent = generated.result;
        document.getElementById("treasureRoll").textContent = generated.roll;
        window.generatedTreasure = generated;
    }

    document.getElementById("generateTreasure").addEventListener("click", generateTreasureResult);

    document.getElementById("copyTreasure").addEventListener("click", async () => {
        if (!window.generatedTreasure) return;
        const text = `${window.generatedTreasure.result}\n${window.generatedTreasure.roll}`;

        try {
            await navigator.clipboard.writeText(text);
            const button = document.getElementById("copyTreasure");
            const original = button.textContent;
            button.textContent = "Copied";
            setTimeout(() => button.textContent = original, 900);
        } catch {
            alert(text);
        }
    });

    document.getElementById("treasureMode").addEventListener("change", () => {
        const level = document.getElementById("treasureLevel");
        level.disabled = document.getElementById("treasureMode").value !== "treasure";
    });

    generateTreasureResult();
})();




const T = {
    purpose: [
        ["Ancestral Rites", "A Fallen Hero"], ["Arcane Library", "A Fanatical Cult"], ["Astral Trading Hub", "A Forgotten Empire"], ["Bestial Creations", "A Long-Dead Poet"], ["Breeding Grounds", "A Militant Order"], ["Burial Site", "A Renowned Alchemist"], ["Celestial Observations", "A Royal Dynasty"], ["Covert Experiments", "A Secret Society"], ["Forbidden Trysts", "A Tyrannical Ruler"], ["Forge for a Great Weapon", "A Warrior Tribe"], ["Hideout", "A Wealthy Recluse"], ["Impenetrable Vault", "Desperate Rebels"], ["Invasion of Dreams", "Heretical Alchemists"], ["Isolated Refuge", "Heretical Monks"], ["Military Outpost", "Immoral Sorcerers"], ["Observatory", "Inverted Astrologers"], ["Pilgrimage Site", "Mob Families"], ["Protection of Rare Artifacts", "Opulent Merchants"], ["Secret Meeting Place", "Pilgrims to a Dead God"], ["Treasure Horde", "Rogue Scholars"]
    ],

    construction: [
        ["A Creature's Lair", "Bone"], ["A Dream", "Coral"], ["A Massive Tree", "Crystal"], ["A Well", "Earth"], ["An Enormous Grave", "Ethereal Fabric"], ["Behind a Waterfall", "Flesh"], ["Between Menhirs", "Floating Platforms"], ["Cave", "Fungi"], ["Center of a Maze", "Glass"], ["Cliff door", "Ice"], ["Hollow Statue", "Living Plants"], ["Illusory Wall", "Marble"], ["Mine Shaft", "Metal"], ["Sinking Sand", "Obsidian"], ["Skyward Beam of Light", "Petrified Wood"], ["Starlight Path", "Sand"], ["Through a Painting", "Shadow Material"], ["Under a Bridge", "Stone"], ["Underwater Tunnel", "Webs"], ["Veil of Mist", "Wood"]
    ],

    ruination: [
        ["Corpse", "Alchemical Accident"], ["Crumbling", "Ancient Curse"], ["Cursed", "Cataclysmic Flood"], ["Desecrated", "Civil War"], ["Devoured", "Competing Rituals"], ["Displaced", "Consumed by a Beast"], ["Divided", "Disease"], ["Frozen", "Hedonism"], ["Haunted", "Invasion"], ["Infested", "Long-Term Abandonment"], ["Overgrown", "Magic Gone Awry"], ["Overpopulated", "Magical Seal"], ["Petrified", "Natural Disaster"], ["Plundered", "Natural Erosion"], ["Poisoned", "Obfuscation"], ["Scorched", "Overrun with Monsters"], ["Shrouded in Mist", "Sudden Change in Climate"], ["Submerged", "Teleported to Another Realm"], ["Unending", "Turned to Stone"], ["Warped", "Unresolved Spirits"]
    ],

    traits: [
        ["Compassionate", "Absent-Minded"], ["Courageous", "Aloof"], ["Creative", "Critical"], ["Deductive", "Cynical"], ["Honest", "Greedy"], ["Incisive", "Impulsive"], ["Incorruptible", "Inflexible"], ["Individualistic", "Naive"], ["Loyal", "Obstinate"], ["Methodical", "Passive"], ["Polite", "Pedantic"], ["Practical", "Perfectionist"], ["Resilient", "Sarcastic"], ["Scholarly", "Selfish"], ["Self-Sufficient", "Skeptical"], ["Solid", "Stubborn"], ["Studious", "Superficial"], ["Suave", "Unfocused"], ["Unwavering", "Unimaginative"], ["Witty", "Vain"]
    ],

    agenda: [
        ["Ascension", "Conflict"], ["Creation", "Corruption"], ["Destruction", "Cost"], ["Dominion", "Danger"], ["Enlightenment", "Decay"], ["Exploration", "Discord"], ["Growth", "Division"], ["Innovation", "Dogma"], ["Justice", "Exposure"], ["Knowledge", "Factionalism"], ["Liberation", "Fear"], ["Peace", "Ignorance"], ["Power", "Incompetence"], ["Preservation", "Injustice"], ["Protection", "Isolation"], ["Redemption", "Opposition"], ["Revenge", "Sacrifice"], ["Survival", "Stagnation"], ["Transformation", "Tradition"], ["Wealth", "Weakness"]
    ],

    monster: [
        ["Avian", "Building"], ["Beast", "Devouring"], ["Behemoth", "Dying"], ["Construct", "Fighting"], ["Demon", "Growing"], ["Extraplanar", "Haunting"], ["Fey", "Hiding"], ["Giant", "Killing"], ["Goblinoid", "Mating"], ["Humanoid", "Mourning"], ["Hybrid", "Patrolling"], ["Incorporeal", "Praying"], ["Insectoid", "Protecting"], ["Lizard", "Recuperating"], ["Magical", "Scheming"], ["Mythical", "Sleeping"], ["Plant", "Stalking"], ["Shape Shifter", "Torturing"], ["Undead", "Training"], ["Unusual", "Trapped"]
    ],

    lore: [
        ["Armory", "Decay"], ["Barracks", "Decor"], ["Bath", "Draft"], ["Cistern", "Echoes"], ["Court", "Footprints"], ["Crypt", "Leavings"], ["Den", "Light"], ["Dining Hall", "Markings"], ["Guard Post", "Moisture"], ["Infirmary", "Noise"], ["Kitchen", "Paraphernalia"], ["Latrine", "Residue"], ["Library", "Scurrying"], ["Shrine", "Signs"], ["Smith", "Smell"], ["Stable", "Stains"], ["Storage", "Tapping"], ["Study", "Temperature"], ["Vault", "Vibrations"], ["Workshop", "Writing"]
    ],

    special: [
        ["Books", "Ages"], ["Bridge", "Alarms"], ["Contraption", "Animates"], ["Creature", "Attracts"], ["Door", "Charges"], ["Flames", "Closes"], ["Furniture", "Falls"], ["Hole", "Glows"], ["Liquid", "Grows"], ["Mirror", "Illusion"], ["Mural", "Levitates"], ["Pool", "Locks"], ["Shadows", "Opens"], ["Smoke", "Reflects"], ["Statue", "Repels"], ["Surface", "Reveals"], ["Treasure", "Shifts"], ["Voices", "Silences"], ["Wheel", "Teleport"], ["Writing", "Transforms"]
    ],

    trap: [
        ["Ages", "Activating"], ["Burns", "Breaking"], ["Captures", "Crossing"], ["Carries", "Disturbing"], ["Confuses", "Entering"], ["Crushes", "Extinguishing"], ["Curses", "Focusing"], ["Cuts", "Interacting"], ["Deafens", "Lighting"], ["Drops", "Moving"], ["Drowns", "Opening"], ["Freezes", "Pulling"], ["Glues", "Pushing"], ["Hypnotizes", "Reading"], ["Impales", "Speaking"], ["Infects", "Stepping"], ["Lifts", "Taking"], ["Poisons", "Talking"], ["Shocks", "Touching"], ["Shoots", "Tripping"]
    ]
};

// Roll a random row from a table.
const roll = a => a[Math.floor(Math.random() * a.length)];

// Roll one random entry from a specific column.
const rollColumn = (table, column) =>
    table[Math.floor(Math.random() * table.length)][column];

let dungeon = {};

function generate() {

    // Each column rolled independently.
    const p = [
        rollColumn(T.purpose, 0),
        rollColumn(T.purpose, 1)
    ];

    const c = [
        rollColumn(T.construction, 0),
        rollColumn(T.construction, 1)
    ];

    const r = [
        rollColumn(T.ruination, 0),
        rollColumn(T.ruination, 1)
    ];

    const tr = [
        rollColumn(T.traits, 0),
        rollColumn(T.traits, 1)
    ];

    dungeon = {
        p,
        c,
        r,
        tr,
        factions: [
            roll(T.agenda),
            roll(T.agenda)
        ],
        rooms: []
    };

    let n = document.getElementById("roomCount").value;

    n = n === "random"
        ? Math.floor(Math.random() * 15) + 6
        : +n;

    const types = [];

    for (let i = 0; i < n; i++) {
        const d = Math.floor(Math.random() * 6) + 1;

        types.push(
            d === 1
                ? "Monster"
                : d <= 3
                    ? "Lore"
                    : d === 4
                        ? "Special"
                        : "Trap"
        );
    }

    // scatter rooms while maintaining reasonable spacing
    const pts = [];

    for (let i = 0; i < n; i++) {
        let x, y, ok = false, tries = 0;

        while (!ok && tries++ < 500) {
            x = 45 + Math.random() * 530;
            y = 45 + Math.random() * 370;

            ok = pts.every(q =>
                Math.hypot(q.x - x, q.y - y) > 52
            );
        }

        pts.push({ x, y });
    }

    // entrance = closest to border
    let ei = 0, best = Infinity;

    pts.forEach((q, i) => {
        const d = Math.min(
            q.x,
            620 - q.x,
            q.y,
            460 - q.y
        );

        if (d < best) {
            best = d;
            ei = i;
        }
    });

    dungeon.rooms = pts.map((pt, i) => ({
        i: i + 1,
        ...pt,
        type: types[i]
    }));

    // connect each room to nearest prior room, plus some extra edges
    const edges = [];

    for (let i = 1; i < n; i++) {
        let nearest = 0;
        let bd = 1e9;

        for (let j = 0; j < i; j++) {
            const d = Math.hypot(
                pts[i].x - pts[j].x,
                pts[i].y - pts[j].y
            );

            if (d < bd) {
                bd = d;
                nearest = j;
            }
        }

        edges.push([
            nearest,
            i,
            Math.random() < .12
                ? "hidden"
                : Math.random() < .16
                    ? "conditional"
                    : "standard"
        ]);
    }

    for (let k = 0; k < Math.floor(n * .25); k++) {
        const a = Math.floor(Math.random() * n);
        const b = Math.floor(Math.random() * n);

        if (
            a !== b &&
            !edges.some(e =>
                (e[0] === a && e[1] === b) ||
                (e[0] === b && e[1] === a)
            )
        ) {
            edges.push([
                a,
                b,
                Math.random() < .5
                    ? "hidden"
                    : "standard"
            ]);
        }
    }

    dungeon.edges = edges;
    dungeon.entrance = ei;

    dungeon.rooms.forEach(room => {

        if (room.type === "Monster") {
            room.detail = [
                rollColumn(T.monster, 0),
                rollColumn(T.monster, 1)
            ];
        }

        if (room.type === "Lore") {
            room.detail = [
                rollColumn(T.lore, 0),
                rollColumn(T.lore, 1)
            ];
        }

        if (room.type === "Special") {
            room.detail = [
                rollColumn(T.special, 0),
                rollColumn(T.special, 1)
            ];
        }

        if (room.type === "Trap") {
            room.detail = [
                rollColumn(T.trap, 0),
                rollColumn(T.trap, 1)
            ];
        }

    });

    render();
}

function render() {

    document.getElementById("seed").innerHTML = `
    <div class=item>
        <div class=label>Original Use</div>
        <div class=value>${dungeon.p[0]}</div>
    </div>

    <div class=item>
        <div class=label>Built By</div>
        <div class=value>${dungeon.p[1]}</div>
    </div>

    <div class=item>
        <div class=label>Entrance</div>
        <div class=value>${dungeon.c[0]}</div>
    </div>

    <div class=item>
        <div class=label>Composition</div>
        <div class=value>${dungeon.c[1]}</div>
    </div>

    <div class=item>
        <div class=label>Condition</div>
        <div class=value>${dungeon.r[0]}</div>
    </div>

    <div class=item>
        <div class=label>Cause</div>
        <div class=value>${dungeon.r[1]}</div>
    </div>

    <div class=item>
        <div class=label>Denizens</div>
        <div class=value>${dungeon.tr[0]} / ${dungeon.tr[1]}</div>
    </div>

    <div class=item>
        <div class=label>Rooms</div>
        <div class=value>${dungeon.rooms.length}</div>
    </div>
`;

    document.getElementById("theme").innerHTML = `
    <div class=label>Dungeon Premise</div>
    A ${dungeon.p[0].toLowerCase()}
    built by ${dungeon.p[1].toLowerCase()},
    entered via ${dungeon.c[0].toLowerCase()},
    and made from ${dungeon.c[1].toLowerCase()}.
    It is now ${dungeon.r[0].toLowerCase()}
    because of ${dungeon.r[1].toLowerCase()}.
    Its denizens are ${dungeon.tr[0].toLowerCase()}
    but ${dungeon.tr[1].toLowerCase()}.
`;

    document.getElementById("factions").innerHTML = `
    <div class=seed>
        <div class=item>
            <div class=label>Faction A</div>
            <div class=value>${dungeon.factions[0][0]}</div>
            <div>Obstacle: ${dungeon.factions[0][1]}</div>
        </div>

        <div class=item>
            <div class=label>Faction B</div>
            <div class=value>${dungeon.factions[1][0]}</div>
            <div>Obstacle: ${dungeon.factions[1][1]}</div>
        </div>
    </div>
`;

    const map = document.getElementById("map");
    map.innerHTML = "";

    const edgeHtml = dungeon.edges.map(e => {
        const a = dungeon.rooms[e[0]];
        const b = dungeon.rooms[e[1]];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const len = Math.hypot(dx, dy);
        const ang = Math.atan2(dy, dx) * 180 / Math.PI;

        return `
        <i
            class="path ${e[2]}"
            style="left:${a.x}px;top:${a.y}px;width:${len}px;transform:rotate(${ang}deg)"
        ></i>
    `;
    }).join("");

    map.insertAdjacentHTML("beforeend", edgeHtml);

    dungeon.rooms.forEach((r, i) => {
        map.insertAdjacentHTML(
            "beforeend",
            `
        <div
            class="room ${i === dungeon.entrance ? "entrance" : ""}"
            style="left:${r.x}px;top:${r.y}px"
            title="${r.type}: ${r.detail[0]} / ${r.detail[1]}"
        >
            ${i + 1}
            <small>
                ${i === dungeon.entrance ? "Entrance · " : ""}
                ${r.type}
            </small>
        </div>
        `
        );
    });

    document.getElementById("rooms").innerHTML =
        dungeon.rooms.map(r => `
        <article class=roomcard>
            <div class=roomtitle>
                <span>Room ${r.i}</span>
                <span class=tag>${r.type}</span>
            </div>
            <div>
                <strong>${r.detail[0]}</strong> — ${r.detail[1]}
            </div>
        </article>
    `).join("");
}

function textResults() {

    let s = `DUNGEON SEED
Original Use: ${dungeon.p[0]}
Built By: ${dungeon.p[1]}
Entrance: ${dungeon.c[0]}
Composition: ${dungeon.c[1]}
Condition: ${dungeon.r[0]}
Cause: ${dungeon.r[1]}
Denizens: ${dungeon.tr[0]}, but ${dungeon.tr[1]}

FACTIONS
Faction A: ${dungeon.factions[0][0]} / Obstacle: ${dungeon.factions[0][1]}
Faction B: ${dungeon.factions[1][0]} / Obstacle: ${dungeon.factions[1][1]}

ROOMS
`;

    dungeon.rooms.forEach(r => {
        s += `${r.i}. ${r.type}: ${r.detail[0]} — ${r.detail[1]}${r.i - 1 === dungeon.entrance ? " [ENTRANCE]" : ""}
`;
    });

    return s;
}

document.getElementById("generate").onclick = generate;

document.getElementById("rerollSeed").onclick = generate;

document.getElementById("copy").onclick = () =>
    navigator.clipboard.writeText(textResults()).then(() => {
        const b = document.getElementById("copy");
        b.textContent = "Copied";

        setTimeout(
            () => b.textContent = "Copy Results",
            900
        );
    });

generate();




(() => {
    const adventureTable = [
        ["Rescue the", "Goblet", "Of the evil wizard"],
        ["Find the", "Prisoner", "Stalking the wastes"],
        ["Destroy the", "Sword", "At the bottom of the river"],
        ["Infiltrate the", "Vault", "In the city sewers"],
        ["Bypass the", "Cult", "Under the barrow mounds"],
        ["Return the", "Spirit", "Of the fallen hero"],
        ["Defeat the", "Killer", "In the magical library"],
        ["Spy on the", "Demon", "In the king's court"],
        ["Bribe the", "Noble", "Of the ancient lineage"],
        ["Deliver the", "Hunter", "In the sorcerer's tower"],
        ["Escape the", "Hostage", "In the Murkwood"],
        ["Imprison the", "Thief", "Hiding in the slums"],
        ["Stop the", "Spy", "Of the Dwarven lord"],
        ["Befriend the", "Werewolf", "In the musty tomb"],
        ["Pacify the", "Relic", "Of the royal knights"],
        ["Persuade the", "High priest", "Sacrificing innocents"],
        ["Steal the", "Merchant", "In the catacombs"],
        ["Escort the", "Witch", "Blackmailing the baron"],
        ["Banish the", "Ritual", "In the Thieves' Guild"],
        ["Free the", "Vampire", "Murdering townsfolk"]
    ];

    const siteNameTable = [
        ["Mines of the", "Cursed", "Flame"],
        ["Abbey of the", "Whispering", "Ghost"],
        ["Tower of the", "Bleeding", "Darkness"],
        ["Caves of the", "Shrouded", "Peak"],
        ["Barrow of the", "Lost", "Borderlands"],
        ["Warrens of the", "Dead", "King"],
        ["Crypt of the", "Deepwood", "Twilight"],
        ["Monastery of the", "Fallen", "Depths"],
        ["Ruin of the", "Revenant", "Jewel"],
        ["Tunnels of the", "Frozen", "God"],
        ["Citadel of the", "Shimmering", "Lands"],
        ["Tomb of the", "Chaos", "Storm"],
        ["Castle of the", "Abandoned", "Swamp"],
        ["Temple of the", "Blighted", "Ravine"],
        ["Fortress of the", "Forgotten", "Valley"],
        ["Isle of the", "Slumbering", "Horde"],
        ["Keep of the", "Savage", "Skull"],
        ["Dungeon of the", "Unholy", "Queen"],
        ["Necropolis of the", "Enchanted", "Wastes"],
        ["Shrine of the", "Immortal", "Hero"]
    ];

    const d20 = () => Math.floor(Math.random() * 20);

    function renderTable(table, targetId) {
        document.getElementById(targetId).innerHTML = table.map((row, i) =>
            `<tr><td><strong>${i + 1}</strong></td><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`
        ).join("");
    }

    function generateAdventure() {
        const roll1 = d20();
        const roll2 = d20();
        const roll3 = d20();

        const adventureText =
            `${adventureTable[roll1][0]} ` +
            `${adventureTable[roll2][1]} ` +
            `${adventureTable[roll3][2]}`;

        document.getElementById("adventureResult").textContent = adventureText;

        document.getElementById("adventureRoll").textContent =
            `d20: ${roll1 + 1}, d20: ${roll2 + 1}, d20: ${roll3 + 1}`;

        const siteRoll1 = d20();
        const siteRoll2 = d20();
        const siteRoll3 = d20();

        const siteText =
            `${siteNameTable[siteRoll1][0]} ` +
            `${siteNameTable[siteRoll2][1]} ` +
            `${siteNameTable[siteRoll3][2]}`;

        document.getElementById("siteNameResult").textContent = siteText;

        document.getElementById("siteNameRoll").textContent =
            `d20: ${siteRoll1 + 1}, d20: ${siteRoll2 + 1}, d20: ${siteRoll3 + 1}`;

        window.generatedAdventure = {
            adventure: {
                rolls: [roll1 + 1, roll2 + 1, roll3 + 1],
                result: adventureText
            },
            site: {
                rolls: [siteRoll1 + 1, siteRoll2 + 1, siteRoll3 + 1],
                result: siteText
            }
        };
    }

    document.getElementById("generateAdventure").addEventListener("click", generateAdventure);

    document.getElementById("copyAdventure").addEventListener("click", async () => {
        const g = window.generatedAdventure;
        if (!g) return;

        const text =
            `ADVENTURE
d20: ${g.adventure.rolls.join(", ")}
${g.adventure.result}

ADVENTURING SITE NAME
d20: ${g.site.rolls.join(", ")}
${g.site.result}`;

        try {
            await navigator.clipboard.writeText(text);
            const button = document.getElementById("copyAdventure");
            const original = button.textContent;
            button.textContent = "Copied";
            setTimeout(() => button.textContent = original, 900);
        } catch {
            alert(text);
        }
    });

    renderTable(adventureTable, "adventureTableBody");
    renderTable(siteNameTable, "siteNameTableBody");
    generateAdventure();
})();



const MONSTERS = [
    [{ "Name": "Aboleth", "Source": "CR", "Flavor Text": "Enormous, antediluvian catfish covered in slime and tentacles. They hate all intelligent beings.", "AC": "16", "HP": "39", "ATK": "2 tentacle (near) +5 (1d8 + curse) or 1 tail +5 (3d6)", "MV": "near (swim)", "S": "4", "D": "-1", "C": "3", "I": "4", "W": "2", "Ch": "2", "AL": "C", "Level": "8", "Ability 1": "Curse: DC 15 CON or target gains a magical curse, turning into a deep one over 2d10 days.", "Ability 2": "Enslave: In place of attacks, one creature within far DC 15 WIS or aboleth controls for 1d4 rounds.", "Ability 3": "Telepathic: Read the thoughts of all creatures within far." }, { "Name": "Acolyte", "Source": "CR", "Flavor Text": "A religious trainee who knows basic rites and rituals.", "AC": "12", "HP": "4", "ATK": "1 mace +1 (1d6) or 1 spell +2", "MV": "near", "S": "1", "D": "-1", "C": "0", "I": "-1", "W": "2", "Ch": "0", "AL": "L", "Level": "1", "Ability 1": "Healing Touch (WIS Spell): DC 11. Heal one creature within close for 1d4 HP." }, { "Name": "Angel, Archangel", "Source": "CR", "Flavor Text": "A radiant being with a crown of fire, snowy wings, golden armor, and a blazing greatsword.", "AC": "18 (+3 plate mail)", "HP": "76", "ATK": "3 flaming greatsword +10 (2d12)", "MV": "double near (fly)", "S": "5", "D": "2", "C": "4", "I": "4", "W": "5", "Ch": "5", "AL": "L", "Level": "16", "Ability 1": "Command: DC 18 CHA to resist an archangel's command.", "Ability 2": "Crown of Fire: Hostile spells targeting the archangel are extreme (DC 18) to cast." }, { "Name": "Angel, Domini", "Source": "CR", "Flavor Text": "Winged, flawless humans glowing with bronze sunlight.", "AC": "17 (plate mail + shield)", "HP": "42", "ATK": "3 bastard sword +7 (1d8) or 1 horn", "MV": "near (fly)", "S": "4", "D": "1", "C": "2", "I": "3", "W": "4", "Ch": "4", "AL": "L", "Level": "9", "Ability 1": "Horn: All enemies in near DC 15 CHA or paralyzed 1d4 rounds." }, { "Name": "Angel, Principi", "Source": "CR", "Flavor Text": "Serene humans sculpted from alabaster. Golden orbs for eyes.", "AC": "16 (+1 plate mail)", "HP": "53", "ATK": "3 silvered bastard sword +9 (1d10)", "MV": "double near (fly)", "S": "4", "D": "2", "C": "4", "I": "4", "W": "4", "Ch": "4", "AL": "L", "Level": "11", "Ability 1": "Moonlight Aura: Hostile spells targeting the principi are DC 15.", "Ability 2": "Truesight: Can see all invisible creatures and objects." }, { "Name": "Angel, Seraph", "Source": "CR", "Flavor Text": "Beautiful, luminous humanoids with white-feathered wings.", "AC": "14 (chainmail)", "HP": "14", "ATK": "2 longsword +3 (1d8)", "MV": "near (fly)", "S": "3", "D": "1", "C": "1", "I": "2", "W": "3", "Ch": "3", "AL": "L", "Level": "3", "Ability 1": "Bless: 3/day, touch one target to give it a luck token." }, { "Name": "Animated Armor", "Source": "CR", "Flavor Text": "An old suit of armor magically animated by a vengeful spirit. ", "AC": "15", "HP": "11", "ATK": "1 longsword +3 (1d8)", "MV": "near", "S": "3", "D": "-1", "C": "2", "I": "-1", "W": "1", "Ch": "0", "AL": "C", "Level": "2", "Ability 1": "Statue. When standing still, looks exactly like a suit of armor." }, { "Name": "Ankheg", "Source": "CR", "Flavor Text": "Horse-sized, rust-brown insects. They burrow vast, underground warrens into the bedrock.", "AC": "14", "HP": "14", "ATK": "1 bite +4 (1d6) or 1 acid spray (near) +4 (2d6)", "MV": "near (burrow)", "S": "2", "D": "2", "C": "1", "I": "-2", "W": "1", "Ch": "-2", "AL": "N", "Level": "3" }, { "Name": "Ape", "Source": "CR", "Flavor Text": "Hooting, omnivorous apes that live in trees.", "AC": "12", "HP": "10", "ATK": "1 fist +2 (1d6) or 1 rock (far) +2 (1d4)", "MV": "near (climb)", "S": "2", "D": "2", "C": "1", "I": "-2", "W": "1", "Ch": "0", "AL": "N", "Level": "2" }, { "Name": "Ape, Snow", "Source": "CR", "Flavor Text": "White-haired, carnivorous gorillas that stalk", "AC": "13", "HP": "19", "ATK": "2 fist +4 (1d6) or 1 rock (far) +4 (2d6)", "MV": "near (climb)", "S": "3", "D": "1", "C": "1", "I": "-2", "W": "1", "Ch": "0", "AL": "N", "Level": "4", "Ability 1": "Thick Fur. Cold immune." }, { "Name": "Apprentice", "Source": "CR", "Flavor Text": "A cloaked magician with a thin, freshly bound", "AC": "11", "HP": "3", "ATK": "1 dagger (close/near) +1 (1d4) or 1 spell +2", "MV": "near", "S": "-1", "D": "1", "C": "-1", "I": "2", "W": "0", "Ch": "0", "AL": "N", "Level": "1", "Ability 1": "Beguile (INT Spell). DC 11. Focus. One target in near of LV 2 or less is stupefied for the duration.", "Ability 2": "Magic Bolt (INT Spell). DC 11. 1d4 damage to one target within far." }, { "Name": "Archmage", "Source": "CR", "Flavor Text": "A wizened magic-user crackling with arcane power.", "AC": "12", "HP": "44", "ATK": "2 spell +7", "MV": "near", "S": "-1", "D": "2", "C": "-1", "I": "4", "W": "2", "Ch": "1", "AL": "L", "Level": "10", "Ability 1": "Death Bolt (INT Spell). DC 15. One target of LV 9 or less within near DC 15 CON or go to 0 HP. Enervate (INT Spell). DC 14. Focus. One target within near is stupefied for the duration. Fireblast (INT Spell). DC 14. 4d6 damage to all within a near-sized cube within far.", "Ability 2": "Float (INT Spell). Self. DC 14. Fly double near for 5 rounds. Mithralskin (INT Spell). Self. DC 14. AC becomes 18 for 5 rounds. Void Step (INT Spell). Self and up to 4 willing targets. DC 15. Teleport up to 100 miles." }, { "Name": "Assassin", "Source": "CR", "Flavor Text": "A black-cloaked, skulking killer.", "AC": "15", "HP": "38", "ATK": "2 poisoned dagger (close/near) +6 (2d4)", "MV": "near (climb)", "S": "2", "D": "4", "C": "2", "I": "2", "W": "3", "Ch": "3", "AL": "C", "Level": "8", "Ability 1": "Execute. Deals x3 damage against surprised targets." }, { "Name": "Azer", "Source": "CR", "Flavor Text": "Dwarves with bronze, metallic skin and flames for hair.", "AC": "15", "HP": "15", "ATK": "2 flaming warhammer +3 (1d10, ignites flammables) or 1 crossbow (far) +0 (1d6)", "MV": "near", "S": "3", "D": "0", "C": "2", "I": "0", "W": "0", "Ch": "0", "AL": "L", "Level": "3", "Ability 1": "Impervious. Fire immune." }, { "Name": "Badger", "Source": "CR", "Flavor Text": "Fierce, clawed burrowers with black-and-white face stripes", "AC": "11", "HP": "5", "ATK": "2 claw +2 (1d4)", "MV": "near (burrow)", "S": "2", "D": "0", "C": "1", "I": "-3", "W": "1", "Ch": "-2", "AL": "N", "Level": "1", "Ability 1": "Rage. 1/day, immune to morale checks, +1d4 damage (3 rounds)." }, { "Name": "Bandit", "Source": "CR", "Flavor Text": "Hard-bitten rogue in tattered leathers and a hooded cloak.", "AC": "13", "HP": "4", "ATK": "1 club +1 (1d4) or 1 shortbow (far) +0 (1d4)", "MV": "near", "S": "1", "D": "0", "C": "0", "I": "-1", "W": "0", "Ch": "-1", "AL": "C", "Level": "1", "Ability 1": "Ambush. Deal an extra die of damage when undetected." }, { "Name": "Basilisk", "Source": "CR", "Flavor Text": "Massive, muscled lizards with six legs and gray, tough hide.", "AC": "14", "HP": "25", "ATK": "2 bite +4 (2d6 + petrify)", "MV": "near", "S": "3", "D": "1", "C": "3", "I": "-3", "W": "1", "Ch": "-3", "AL": "N", "Level": "5", "Ability 1": "Petrify. Any creature that touches the basilisk or meets its gaze, DC 15 CON or petrified." }, { "Name": "Bat, Giant", "Source": "CR", "Flavor Text": "Leathery, eagle-sized mammal with a taste for flesh.", "AC": "12", "HP": "9", "ATK": "1 bite +2 (1d6)", "MV": "near (fly)", "S": "-1", "D": "2", "C": "0", "I": "-3", "W": "1", "Ch": "-3", "AL": "N", "Level": "2" }, { "Name": "Bat, Swarm", "Source": "CR", "Flavor Text": "A whirling cloud of screeching, bloodthirsty bats.", "AC": "12", "HP": "18", "ATK": "3 bite +2 (1d6)", "MV": "near (fly)", "S": "-3", "D": "2", "C": "0", "I": "-3", "W": "1", "Ch": "-3", "AL": "N", "Level": "4" }, { "Name": "Bear, Brown", "Source": "CR", "Flavor Text": "A hulking, swaying brute with claws as long as a finger.", "AC": "13", "HP": "25", "ATK": "2 claw +4 (1d8)", "MV": "near (climb)", "S": "4", "D": "1", "C": "3", "I": "-2", "W": "1", "Ch": "-2", "AL": "N", "Level": "5", "Ability 1": "Crush. Deals an extra die of damage if it hits the same target with both claws." }, { "Name": "Bear, Polar", "Source": "CR", "Flavor Text": "A mighty, white bear that thrives in arctic environments.", "AC": "13", "HP": "34", "ATK": "2 claw +6 (2d6)", "MV": "near (climb)", "S": "4", "D": "1", "C": "3", "I": "-2", "W": "1", "Ch": "-2", "AL": "N", "Level": "7", "Ability 1": "Crush. Deals an extra die of damage if it hits the same target with both claws.", "Ability 2": "Thick Fur. Cold immune." }, { "Name": "Beastman", "Source": "CR", "Flavor Text": "A cave hominid with scraggly fur and a stone-tipped spear.", "AC": "12 (leather)", "HP": "5", "ATK": "1 spear (close/near) +2 (1d6 + 1)", "MV": "near", "S": "2", "D": "1", "C": "1", "I": "-2", "W": "1", "Ch": "-1", "AL": "C", "Level": "1", "Ability 1": "Brutal. +1 damage with melee weapons (included)." }, { "Name": "Berserker", "Source": "CR", "Flavor Text": "Howling, battleraging warriors.", "AC": "12", "HP": "10", "ATK": "greataxe +2 (1d10) or 1", "MV": "near", "S": "2", "D": "1", "C": "1", "I": "0", "W": "1", "Ch": "0", "AL": "N", "Level": "2", "Ability 1": "Rage. 1/day, immune to morale checks, +1d4 damage (3 rounds)." }, { "Name": "Black Pudding", "Source": "CR", "Flavor Text": "A black, ice-cold mass of sludge.", "AC": "9", "HP": "30", "ATK": "3 tentacle +4 (2d6)", "MV": "near (climb)", "S": "2", "D": "-1", "C": "3", "I": "-4", "W": "-3", "Ch": "-4", "AL": "N", "Level": "6", "Ability 1": "Impervious. Only damaged by fire.", "Ability 2": "Corrosive. Wood or metal that touches the ooze dissolves on a d6 roll of 1-3." }, { "Name": "Boar", "Source": "CR", "Flavor Text": "Ornery wild pig with bristly, russet hair and yellowed tusks.", "AC": "12", "HP": "14", "ATK": "2 tusk +3 (1d6)", "MV": "near", "S": "3", "D": "0", "C": "1", "I": "-2", "W": "1", "Ch": "-2", "AL": "N", "Level": "3", "Ability 1": "Gore. Deals an extra die of damage if it hits the same target with both tusks." }, { "Name": "Brain Eater", "Source": "CR", "Flavor Text": "Purple, gaunt humanoids with squidlike heads and four face tentacles.", "AC": "14", "HP": "36", "ATK": "4 tentacle +5 (1d8 + latch) or 1 mind blast or 1 mind control", "MV": "near", "S": "2", "D": "3", "C": "0", "I": "4", "W": "2", "Ch": "4", "AL": "C", "Level": "8", "Ability 1": "Hear Thoughts. Can hear the surface thoughts of all intelligent creatures within near. ", "Ability 2": "Latch. Tentacles attach to hit targets, automatically hitting the next round (DC 12 STR to remove 1d4 tentacles). If all four remain latched onto the same humanoid target for 1 round, the target's brain is ripped out and devoured.", "Ability 3": "Mind Blast. Fills a near-sized cube extending from brain eater. DC 15 INT or 3d6 damage and paralyzed 1d4 rounds.", "Ability 4": "Mind Control. One target in near DC 15 CHA or brain eater controls for 1d4 rounds." }, { "Name": "Bugbear", "Source": "CR", "Flavor Text": "Brutish, bat-eared goblinoids covered in brown fur.", "AC": "13", "HP": "14", "ATK": "2 spiked mace +3 (1d6)", "MV": "near", "S": "3", "D": "0", "C": "1", "I": "-1", "W": "0", "Ch": "-2", "AL": "C", "Level": "3", "Ability 1": "Stealthy. ADV on checks to sneak and hide." }, { "Name": "Bulette", "Source": "CR", "Flavor Text": "A hulking, shark-sized lizard with a steely, arrow-shaped carapace and a massive gullet.", "AC": "17", "HP": "40", "ATK": "3 bite +5 (2d6) or 1 leap", "MV": "near (burrow)", "S": "5", "D": "1", "C": "4", "I": "-3", "W": "1", "Ch": "-2", "AL": "N", "Level": "8", "Ability 1": "Leap. Jump up to near in height and double near in distance, then make 2 bite attacks." }, { "Name": "Camel", "Source": "CR", "Flavor Text": "Ornery, tan-furred desert beasts.", "AC": "10", "HP": "12", "ATK": "1 hoof +3 (1d6) or 1 spit", "MV": "double near", "S": "3", "D": "0", "C": "3", "I": "-2", "W": "1", "Ch": "-3", "AL": "N", "Level": "2" }, { "Name": "Cave Brute", "Source": "CR", "Flavor Text": "Clawed apes with sandy, matted hair and reflective eyes. Carnivorous ambush hunters.", "AC": "14", "HP": "28", "ATK": "2 claw +5 (1d8) and 1 mandible +5 (1d10)", "MV": "near (burrow)", "S": "4", "D": "1", "C": "1", "I": "-3", "W": "1", "Ch": "-3", "AL": "N", "Level": "6", "Ability 1": "Bewilder. Creatures within near that see the cave brute's eyes, DC 12 CHA at start of their turn or dazed and no action." }, { "Name": "Cave Creeper", "Source": "CR", "Flavor Text": "A hulking, insectoid beast with\nlong mandibles, four eyes, and\nthick arms covered in bristles.", "AC": "12", "HP": "18", "ATK": "1 bite +3 (1d6) and 1 tentacles +3 (1d8 + toxin)", "MV": "near (climb)", "S": "2", "D": "2", "C": "0", "I": "-3", "W": "1", "Ch": "-3", "AL": "N", "Level": "4", "Ability 1": "Toxin. DC 12 CON or paralyzed 1d4 rounds." }, { "Name": "Centaur", "Source": "CR", "Flavor Text": "Herd-dwelling beings with the upper body of a human and lower body of a horse.", "AC": "12 (leather)", "HP": "14", "ATK": "2 spear (close/near) +2 (1d6) or 1 longbow (far) +1 (1d8)", "MV": "double near", "S": "2", "D": "1", "C": "1", "I": "0", "W": "2", "Ch": "1", "AL": "N", "Level": "3" }, { "Name": "Centipede, Giant", "Source": "CR", "Flavor Text": "Blood-red, feathery centipedes the size of a human arm. Their bite injects a burning poison that cramps muscles.", "AC": "11", "HP": "4", "ATK": "1 bite +1 (1d4 + poison)", "MV": "near (climb)", "S": "-3", "D": "1", "C": "0", "I": "-4", "W": "-3", "Ch": "-4", "AL": "N", "Level": "1", "Ability 1": "Poison. DC 12 CON or paralyzed 1d4 rounds." }, { "Name": "Centipede, Swarm", "Source": "CR", "Flavor Text": "A crawling mass of weaving, sinuous centipedes.", "AC": "11", "HP": "18", "ATK": "3 bite +1 (1d4 + poison)", "MV": "near (climb)", "S": "-3", "D": "1", "C": "0", "I": "-4", "W": "-3", "Ch": "-4", "AL": "N", "Level": "4", "Ability 1": "Poison. DC 12 CON or paralyzed 1d4 rounds." }, { "Name": "Chimera", "Source": "CR", "Flavor Text": "A monstrous beast with a half-goat, half-lion body, wide dragon wings, and the heads of a goat, lion, and dragon.", "AC": "16", "HP": "49", "ATK": "4 rend +7 (2d8) and 1 fire breath", "MV": "double near (fly)", "S": "5", "D": "4", "C": "4", "I": "-3", "W": "2", "Ch": "-1", "AL": "C", "Level": "10", "Ability 1": "Fire Breath. Fills a near-sized cube extending from chimera. DC 15 DEX or 4d6 damage." }, { "Name": "Chuul", "Source": "CR", "Flavor Text": "Brown, horse-sized lobster bugs with tentacles and pincers.", "AC": "15", "HP": "25", "ATK": "2 pincer +4 (1d8 + grab)", "MV": "near (swim)", "S": "3", "D": "-1", "C": "3", "I": "-1", "W": "1", "Ch": "-2", "AL": "C", "Level": "5", "Ability 1": "Grab. DC 15 STR or held in pincer. DC 15 STR to break free on turn." }, { "Name": "Cloaker", "Source": "CR", "Flavor Text": "A midnight blue manta ray with a bony tail and crescent-shaped maw above its belly. It swoops through deep, lightless caverns.", "AC": "13", "HP": "28", "ATK": "3 lash +4 (1d8) or 1 screech", "MV": "near (fly)", "S": "2", "D": "3", "C": "1", "I": "1", "W": "1", "Ch": "0", "AL": "C", "Level": "6", "Ability 1": "Phantoms. 1/day, in place of attacks. Create 3 illusory duplicates that disappear when hit. Determine randomly if an attack hits cloaker or illusions.", "Ability 2": "Screech. Enemies within double near DC 15 WIS or DISADV on attacks and checks 1d4 rounds." }, { "Name": "Cockatrice", "Source": "CR", "Flavor Text": "A molting, lizard-chicken hybrid with a crimson, razorlike crest.", "AC": "11", "HP": "14", "ATK": "1 bite +1 (1d4 + petrify)", "MV": "near (fly)", "S": "-2", "D": "1", "C": "1", "I": "-3", "W": "1", "Ch": "-3", "AL": "N", "Level": "3", "Ability 1": "Petrify. DC 12 CON or petrified." }, { "Name": "Couatl", "Source": "CR", "Flavor Text": "A human-sized snake with scales made of jewels and a corona of iridescent feathers.", "AC": "16", "HP": "42", "ATK": "3 bite +6 (2d6 + poison)", "MV": "near (fly)", "S": "2", "D": "3", "C": "2", "I": "4", "W": "4", "Ch": "5", "AL": "L", "Level": "9", "Ability 1": "Change Shape. In place of attacks, transform into any similarly-sized creature.", "Ability 2": "Poison. DC 15 CON or fall into natural, deep sleep for 1d8 hours.", "Ability 3": "Restore. In place of attacks, touch one creature to remove a curse, affliction, or heal 3d8 HP." }, { "Name": "Crab, Giant", "Source": "CR", "Flavor Text": "A wagon-sized, armored crab with two crushing pincers.", "AC": "15", "HP": "24", "ATK": "2 pincer +4 (1d8 + crush)", "MV": "near (swim)", "S": "3", "D": "0", "C": "2", "I": "-3", "W": "0", "Ch": "-3", "AL": "N", "Level": "5", "Ability 1": "Crush. DC 15 STR or target takes 1d8 damage." }, { "Name": "Crocodile", "Source": "CR", "Flavor Text": "Fat, scaly reptiles with stumpy legs and long, thrashing tails.", "AC": "14", "HP": "20", "ATK": "2 bite +3 (1d8)", "MV": "near (swim)", "S": "3", "D": "1", "C": "2", "I": "-2", "W": "1", "Ch": "-2", "AL": "N", "Level": "4" }, { "Name": "Cultist", "Source": "CR", "Flavor Text": "A cloaked, wild-eyed zealot chanting the guttural prayers of a dark god.", "AC": "14 (chainmail + shield)", "HP": "9", "ATK": "1 longsword +1 (1d8) or 1 spell +2", "MV": "near", "S": "1", "D": "-1", "C": "0", "I": "-1", "W": "2", "Ch": "0", "AL": "C", "Level": "2", "Ability 1": "Fearless. Immune to morale checks.", "Ability 2": "Deathtouch (WIS Spell). DC 12. 2d4 damage to one creature within close." }, { "Name": "Cyclops", "Source": "CR", "Flavor Text": "Reclusive, one-eyed giants towering 20' high. They live simply on remote farmlands.", "AC": "11 (leather)", "HP": "38", "ATK": "2 greatclub +7 (2d8) or 1 rock (far) +5 (1d12)", "MV": "double near", "S": "5", "D": "0", "C": "2", "I": "-1", "W": "-2", "Ch": "0", "AL": "C", "Level": "8" }, { "Name": "Darkmantle", "Source": "CR", "Flavor Text": "A floating, black octopus with rows of red eyes and a webbed skirt of tentacles.", "AC": "13", "HP": "4", "ATK": "1 bite +3 (1d4) or 1 darkness", "MV": "near (fly)", "S": "-2", "D": "3", "C": "0", "I": "-3", "W": "0", "Ch": "-3", "AL": "N", "Level": "1", "Ability 1": "Darkness. Extinguish all light sources in near." }, { "Name": "Deep One", "Source": "CR", "Flavor Text": "Cultish, amphibious fish-people with bulbous eyes. They lurk in deep water and sunless caverns.", "AC": "13", "HP": "10", "ATK": "2 spear (close/near) +2 (1d6)", "MV": "near (swim)", "S": "2", "D": "1", "C": "1", "I": "-2", "W": "0", "Ch": "-2", "AL": "C", "Level": "2", "Ability 1": "Sunblind. Blinded in bright light." }, { "Name": "Demon, Balor", "Source": "CR", "Flavor Text": "Colossal, horned bat-beasts wreathed in the flames of hell itself. Their mighty swords and cracking whips of fire can slice through stone.", "AC": "19", "HP": "77", "ATK": "3 greatsword +10 (2d12 + hellfire) and 1 fire\nwhip (near) +10 (2d6 + grab),", "MV": "double near (fly)", "S": "6", "D": "2", "C": "5", "I": "4", "W": "3", "Ch": "4", "AL": "C", "Level": "16", "Ability 1": "Impervious. Fire immune. Only damaged by magical sources.", "Ability 2": "Grab. DC 18 STR or target bound in whip. 2d6 damage per round held, DC 18 STR to break free on turn. In place of fire whip attack, balor can fling a grabbed target double near on its turn.", "Ability 3": "Hellfire. DC 18 DEX or 2d8 damage per round until flames extinguished." }, { "Name": "Demon, Dretch", "Source": "CR", "Flavor Text": "Green, pig-faced demons with thick claws and an oily stench.", "AC": "12", "HP": "11", "ATK": "1 claw +2 (1d6)", "MV": "near", "S": "2", "D": "0", "C": "2", "I": "-2", "W": "-1", "Ch": "-3", "AL": "C", "Level": "2", "Ability 1": "Gas. All in near DC 12 CON or blinded for 1d4 rounds." }, { "Name": "Demon, Glabrezu", "Source": "CR", "Flavor Text": "Horse-headed, fanged creatures\nwho walk upright and have four\narms; two shriveled, and two\nending in hulking pincers. ", "AC": "15", "HP": "40", "ATK": "2 pincer +7 (2d8 + crush)", "MV": "near", "S": "4", "D": "1", "C": "4", "I": "3", "W": "2", "Ch": "2", "AL": "C", "Level": "8", "Ability 1": "Crush. DC 15 STR or target takes\n2d8 damage." }, { "Name": "Demon, Marilith", "Source": "CR", "Flavor Text": "Hissing, armored women with six limbs and the lower bodies of giant snakes. Six whirling blades flash in their hands.", "AC": "17", "HP": "44", "ATK": "6 longsword +7 (1d8)", "MV": "near (climb)", "S": "5", "D": "4", "C": "3", "I": "3", "W": "3", "Ch": "4", "AL": "C", "Level": "9", "Ability 1": "Parry. Trade 2 longsword attacks next round to deflect a melee attack that would hit." }, { "Name": "Demon, Vrock", "Source": "CR", "Flavor Text": "Wagon-sized, filthy vultures with four limbs, midnight-blue skin, and a rash of mangy feathers.", "AC": "14", "HP": "24", "ATK": "2 talons +4 (1d8)", "MV": "near (fly)", "S": "2", "D": "2", "C": "2", "I": "-1", "W": "1", "Ch": "0", "AL": "C", "Level": "5", "Ability 1": "Carrion Mist. Each time vrock hit, 3:6 chance of carrion mist in near-sized cube centered on vrock. All enemies DC 15 CON or violent vomiting 1d4 rounds.", "Ability 2": "Screech. All enemies in double near DC 12 WIS or DISADV on checks and attacks for 1d4 rounds." }, { "Name": "Devil, Archdevil", "Source": "CR", "Flavor Text": "A stunningly beautiful, horned human with burning, red eyes and a halo of seven black stars. Two stitched-up gashes weep blood from its shoulder blades.", "AC": "19", "HP": "76", "ATK": "4 iron scepter +10 (3d10) or 1 soulbind", "MV": "far (teleport)", "S": "5", "D": "4", "C": "4", "I": "5", "W": "4", "Ch": "7", "AL": "C", "Level": "16", "Ability 1": "Impervious. Fire immune. Only damaged by magical sources.", "Ability 2": "Crown of Darkness. All hostile spells are reflected at caster with a spellcasting check less than 20.", "Ability 3": "Soulbind. All targets within near DC 20 CHA or fall under control of archdevil for 1d4 rounds. DC 20 CHA each turn to end the effect." }, { "Name": "Devil, Barbed", "Source": "CR", "Flavor Text": "Lanky, green-mottled fiends bristling with hooked spines.", "AC": "13", "HP": "14", "ATK": "2 spine (near) +3 (1d6 + barb) or 1 fire blast (far) +3 (1d8)", "MV": "near", "S": "2", "D": "3", "C": "1", "I": "1", "W": "1", "Ch": "1", "AL": "C", "Level": "3", "Ability 1": "Barb. Each spine sticks, dealing 1d4 damage each round. DC 12 STR check on turn to remove." }, { "Name": "Devil, Cubi", "Source": "CR", "Flavor Text": "Entrancing humanoids with bat wings and devilish charm.", "AC": "14", "HP": "29", "ATK": "1 kiss +4 (1d6 + drain) or 1 charm", "MV": "near (fly)", "S": "2", "D": "4", "C": "2", "I": "3", "W": "2", "Ch": "5", "AL": "C", "Level": "6", "Ability 1": "Change Shape. In place of attacks, transform into any similarly-sized humanoid.", "Ability 2": "Charm. One humanoid in near DC 15 CHA or bewitched by cubi for 1d6 hours.", "Ability 3": "Drain. The target takes 1d6 temporary WIS damage. A target reduced to 0 WIS this way swears its soul to an archdevil." }, { "Name": "Devil, Erinyes", "Source": "CR", "Flavor Text": "Raven-winged, resplendent beings in polished, black armor and helms with curved horns.", "AC": "17 (+1 plate mail)", "HP": "43", "ATK": "3 greatsword +8 (1d12) or 2 longbow (far) +8 (1d8 + poison)", "MV": "double near (fly)", "S": "4", "D": "4", "C": "3", "I": "4", "W": "4", "Ch": "5", "AL": "C", "Level": "9", "Ability 1": "Poison. DC 15 CON or target's eyes go jet black and it turns on its allies for 1d4 rounds. DC 15 WIS on turn to end effect." }, { "Name": "Devil, Horned", "Source": "CR", "Flavor Text": "Iron-scaled hellions as big as ogres with weighty ram horns, lashing tails, and leathery wings. They are opportunistic and craven in battle.", "AC": "16", "HP": "35", "ATK": "2 burning trident (near) +7 (2d6) or 1 fire blast (far) +4 (2d8)", "MV": "double near (fly)", "S": "5", "D": "2", "C": "4", "I": "2", "W": "1", "Ch": "2", "AL": "C", "Level": "7", "Ability 1": "Iron Hide. Half damage from non-magical weapons." }, { "Name": "Devil, Imp", "Source": "CR", "Flavor Text": "Cat-sized, red devils with oversized wings and tail, tiny horns, and cowardly demeanors.", "AC": "13", "HP": "9", "ATK": "1 stinger +3 (1d4 + poison)", "MV": "near (fly)", "S": "-2", "D": "3", "C": "0", "I": "1", "W": "0", "Ch": "2", "AL": "C", "Level": "2", "Ability 1": "Impervious. Fire immune.", "Ability 2": "Contract. Can grant mighty boons and patronage on behalf of an archdevil in exchange for a sworn soul. ADV on related Charisma checks.", "Ability 3": "Poison. DC 12 CON or fitful sleep for 1d4 hours." }, { "Name": "Dinosaur, Brachiosaurus", "Source": "CR", "Flavor Text": "Colossal, long-necked tree grazers. Slow and peaceful.", "AC": "13", "HP": "57", "ATK": "3 stomp +7 (2d10)", "MV": "double near", "S": "6", "D": "-1", "C": "3", "I": "-3", "W": "1", "Ch": "-3", "AL": "N", "Level": "12" }, { "Name": "Dinosaur, Plesiosaurus", "Source": "CR", "Flavor Text": "Aquatic reptiles as big as elephants. Flat flippers and narrow, toothy maws on long necks.", "AC": "13", "HP": "30", "ATK": "2 bite +5 (2d8)", "MV": "double near (swim)", "S": "4", "D": "3", "C": "3", "I": "-3", "W": "1", "Ch": "-3", "AL": "N", "Level": "6" }, { "Name": "Dinosaur, Pterodactyl", "Source": "CR", "Flavor Text": "Long-beaked beasts with wide, triangular wings. Large enough to carry off a human.", "AC": "14", "HP": "20", "ATK": "2 beak +4 (1d8 + grab)", "MV": "double near (fly)", "S": "2", "D": "4", "C": "2", "I": "-2", "W": "1", "Ch": "-3", "AL": "N", "Level": "4", "Ability 1": "Grab. DC 15 STR or held. DC 15 STR on turn to break free." }, { "Name": "Dinosaur, Triceratops", "Source": "CR", "Flavor Text": "Plodding herbivores with a wide, bony skull frill and three horns.", "AC": "17", "HP": "35", "ATK": "2 horns +6 (1d10) or 1 charge", "MV": "near", "S": "4", "D": "-1", "C": "4", "I": "-3", "W": "1", "Ch": "-3", "AL": "N", "Level": "7", "Ability 1": "Charge. Move up to double near in straight line and make 1 horn attack. If hit, x3 damage." }, { "Name": "Dinosaur, Tyrannosaurus", "Source": "CR", "Flavor Text": "Towering, bipedal lizards with a massive head, jaws, and neck.", "AC": "13", "HP": "44", "ATK": "3 bite +8 (2d12)", "MV": "double near", "S": "5", "D": "1", "C": "4", "I": "-3", "W": "1", "Ch": "-3", "AL": "N", "Level": "9" }, { "Name": "Dinosaur, Velociraptor", "Source": "CR", "Flavor Text": "Fast, turkey-sized raptors with vicious toe claws. Pack hunters.", "AC": "13", "HP": "10", "ATK": "1 claw +3 (1d6)", "MV": "double near", "S": "-1", "D": "3", "C": "1", "I": "-2", "W": "1", "Ch": "-3", "AL": "N", "Level": "2", "Ability 1": "Clever. +1d4 damage when attacking with surprise." }, { "Name": "Djinni", "Source": "CR", "Flavor Text": "Azure-blue, jovial humanoids made of air and wind", "AC": "14", "HP": "48", "ATK": "3 scimitar +7 (1d12) or 1 whirlwind", "MV": "double near (fly)", "S": "4", "D": "4", "C": "3", "I": "4", "W": "3", "Ch": "3", "AL": "N", "Level": "10", "Ability 1": "Impervious. Only damaged by magical sources.", "Ability 2": "Whirlwind. Transform into a lashing tornado. All enemies within near DC 18 DEX or thrown 2d100 feet in a random direction.", "Ability 3": "Wish. Cast wish once per week for a mortal without making a spellcasting check." }, { "Name": "Doppelganger", "Source": "CR", "Flavor Text": "Gray, featureless humanoids sowing chaos", "AC": "12", "HP": "20", "ATK": "1 dagger (close/near) +2 (1d4)", "MV": "near", "S": "1", "D": "2", "C": "2", "I": "1", "W": "0", "Ch": "4", "AL": "C", "Level": "4", "Ability 1": "Change Shape. In place of attacks, transform into any similarly-sized humanoid.", "Ability 2": "Telepathy. Can secretly hear the surface thoughts of all humanoids within near" }, { "Name": "Dragon, Desert", "Source": "CR", "Flavor Text": "The smell of ozone precedes this desert-dwelling dragon. Its dazzling scales of brass and lapis lazuli shimmer in the baking heat.", "AC": "17", "HP": "61", "ATK": "3 rend +9 (2d10) or 1 lightning breath", "MV": "double near (fly)", "S": "5", "D": "3", "C": "3", "I": "4", "W": "5", "Ch": "5", "AL": "L", "Level": "13", "Ability 1": "Stormblood. Electricity immune.", "Ability 2": "Lightning Breath. A straight line (5' wide) extending double near from dragon. DC 15 DEX or 4d8 damage (DISADV on check if wearing metal armor).", "Ability 3": "Mirage. 1/day, in place of attacks. Create 3 illusory duplicates that disappear when hit. Determine randomly if an attack hits dragon or illusions." }, { "Name": "Dragon, Fire", "Source": "CR", "Flavor Text": "Blood-red scales cover the hide of this mighty, volcanic wyrm. Leaping flames glow at the back of its throat.", "AC": "18", "HP": "80", "ATK": "4 rend +11 (2d12) or 1 fire breath", "MV": "double near (fly)", "S": "6", "D": "5", "C": "4", "I": "4", "W": "4", "Ch": "5", "AL": "C", "Level": "17", "Ability 1": "Fireblood. Fire immune.", "Ability 2": "Fire Breath. Fills a double near-sized cube extending from dragon. DC 15 DEX or 6d10 damage." }, { "Name": "Dragon, Forest", "Source": "CR", "Flavor Text": "The smell of wet loam follows this dragon. Its jade scales bristle with barbed thorns.", "AC": "16", "HP": "58", "ATK": "3 rend +8 (2d8) or 1 poison breath", "MV": "double near (fly)", "S": "4", "D": "3", "C": "4", "I": "3", "W": "3", "Ch": "4", "AL": "N", "Level": "12", "Ability 1": "Animate Plants. 1/day, in place of attacks. Vines grab at all enemies within double near of dragon. DC 15 DEX or unable to move 1d4 rounds.", "Ability 2": "Poison Breath. Fills a near-sized cube extending from dragon. DC 15 CON or 3d8 damage." }, { "Name": "Dragon, Frost", "Source": "CR", "Flavor Text": "Prismatic ice lines the horns, spines, and wings of this pearly dragon. Clouds of steam hiss from its ice-rimed jaws.", "AC": "17", "HP": "68", "ATK": "4 rend +9 (2d10) or 1 ice breath", "MV": "double near (fly)", "S": "4", "D": "3", "C": "5", "I": "3", "W": "4", "Ch": "3", "AL": "N", "Level": "14", "Ability 1": "Frostblood. Cold immune.", "Ability 2": "Ice Breath. Fills a double near-sized cube extending from dragon. DC 15 DEX or 4d8 damage and frozen for 1 round." }, { "Name": "Dragon, Sea", "Source": "CR", "Flavor Text": "A warm sea breeze blows around this amphibious, gold-scaled wyrm. A beard of tendrils covers its snout, and a blue mane billows along its neck.", "AC": "17", "HP": "76", "ATK": "4 rend +10 (2d10) or 1 steam breath or 1 water spout", "MV": "double near (fly, swim)", "S": "5", "D": "6", "C": "4", "I": "4", "W": "5", "Ch": "5", "AL": "L", "Level": "16", "Ability 1": "Steam Breath. Fills a double near-sized cube extending from dragon. DC 15 DEX or 4d12 damage.", "Ability 2": "Water Spout. Fills a near-sized cube within far. DC 15 STR or creatures inside flung 2d100 feet in a random direction." }, { "Name": "Dragon, Swamp", "Source": "CR", "Flavor Text": "This black, wingless beast slithers through dank swamps.", "AC": "16", "HP": "58", "ATK": "3 rend +8 (2d10) or 1 smog breath", "MV": "double near (burrow, swim)", "S": "5", "D": "3", "C": "4", "I": "4", "W": "3", "Ch": "3", "AL": "C", "Level": "12", "Ability 1": "Smog Breath. Fills a near-sized cube extending from dragon. DC 15 CON or 2d10 damage and blinded for 1 round." }, { "Name": "Drow", "Source": "CR", "Flavor Text": "A graceful, shadowy elf that pounces like a spider.", "AC": "16", "HP": "9", "ATK": "1 poison dart (near) +3 (1d4 + poison) or 1 longsword +1 (1d8)", "MV": "near", "S": "0", "D": "3", "C": "0", "I": "1", "W": "1", "Ch": "1", "AL": "C", "Level": "2", "Ability 1": "Poison. DC 15 CON or sleep.", "Ability 2": "Sunblind. Blinded in bright light." }, { "Name": "Drow, Drider", "Source": "CR", "Flavor Text": "A monstrosity with the body of a giant spider and torso of a drow.", "AC": "16", "HP": "29", "ATK": "3 longsword +3 (1d8) or 2 longbow (far) +3 (1d8 + poison)", "MV": "near (climb)", "S": "3", "D": "3", "C": "2", "I": "2", "W": "2", "Ch": "0", "AL": "C", "Level": "6", "Ability 1": "Poison. DC 15 CON or paralyzed 1d4 rounds.", "Ability 2": "Sunblind. Blinded in bright light." }, { "Name": "Drow, Priestess", "Source": "CR", "Flavor Text": "A statuesque female drow with a crown of metal spider webs and an imperious gaze.", "AC": "16", "HP": "28", "ATK": "3 snake whip (near) +4 (1d8 + poison) or 1 spell +4", "MV": "near", "S": "2", "D": "3", "C": "1", "I": "3", "W": "4", "Ch": "3", "AL": "C", "Level": "6", "Ability 1": "Poison. DC 15 CON or paralyzed 1d4 rounds.", "Ability 2": "Sunblind. Blinded in bright light.", "Ability 3": "Snuff (WIS Spell). DC 12. Extinguish all light sources (even\nmagical) within near. ", "Ability 4": "Summon Spiders (WIS Spell).\nDC 14. Summon 2d4 loyal giant\nspiders that appear within near.\nThey stay for 5 rounds. ", "Ability 5": "Web (WIS Spell). DC 13. A nearsized cube of webs within far immobilizes all inside it for 5 rounds. DC 15 STR on turn to break free." }, { "Name": "Druid", "Source": "CR", "Flavor Text": "A wizard of the wilds holding a knotted staff and wearing a mossy cloak of deep viridian.", "AC": "11", "HP": "31", "ATK": "1 staff +0 (1d4) or 2 spell +5", "MV": "near", "S": "0", "D": "1", "C": "0", "I": "4", "W": "3", "Ch": "0", "AL": "N", "Level": "7", "Ability 1": "Barkskin (INT Spell). Self. DC 13. AC becomes 15 for 5 rounds.", "Ability 2": "Conjure Flames (INT Spell). DC 12. One target in far takes 2d6 damage.", "Ability 3": "Imbue (INT Spell). Self. DC 13. Staff becomes a +3 magic weapon for 10 rounds.", "Ability 4": "Summon Bear (INT Spell). DC 14. Summon a loyal brown bear that appears within near. It stays for 5 rounds.", "Ability 5": "Thunderclap (INT Spell). DC 13. Fills a near-sized cube extending from druid. Creatures within are thrown 2d20 feet in a random direction." }, { "Name": "Dryad", "Source": "CR", "Flavor Text": "A coy, emerald-skinned fey covered in leaves. It bonds with and protects a tree.", "AC": "13", "HP": "19", "ATK": "1 staff -1 (1d4) or 1 charm", "MV": "near", "S": "-1", "D": "2", "C": "1", "I": "1", "W": "3", "Ch": "4", "AL": "N", "Level": "4", "Ability 1": "Charm. Near, one creature, DC 14 CHA or friendship for 1d8 days.", "Ability 2": "Meld. Step inside bonded tree." }, { "Name": "Duergar", "Source": "CR", "Flavor Text": "Gray-skinned, greedy dwarves with bald pates and white beards. They dwell in somber castles deep within the earth filled with stolen treasures and enslaved prisoners.", "AC": "15 (chainmail + shield)", "HP": "12", "ATK": "1 war pick +2 (1d6)", "MV": "near", "S": "2", "D": "0", "C": "3", "I": "0", "W": "-1", "Ch": "-1", "AL": "C", "Level": "2", "Ability 1": "Enlarge. 1/day, +1d6 damage on melee attacks and ADV on STR checks for 3 rounds.", "Ability 2": "Invisibility. 1/day, turn invisible for 3 rounds. Ends if duergar attacks.", "Ability 3": "Sunblind. Blinded in bright light." }, { "Name": "Dung Beetle, Giant", "Source": "CR", "Flavor Text": "A trundling, barrel-sized beetle with a T-shaped horn.", "AC": "13", "HP": "10", "ATK": "1 horn +1 (1d4 + knock)", "MV": "near", "S": "1", "D": "-1", "C": "1", "I": "-3", "W": "-1", "Ch": "-3", "AL": "N", "Level": "2", "Ability 1": "Knock. DC 9 STR or pushed a close distance and fall down." }, { "Name": "Efreeti", "Source": "CR", "Flavor Text": "Blood-red, towering humanoids formed of lava and ash. Short, black horns and snarling grins.", "AC": "15", "HP": "43", "ATK": "3 scimitar +8 (2d10) or 2 fire bolt +5 (2d6)", "MV": "near (fly)", "S": "5", "D": "2", "C": "3", "I": "3", "W": "2", "Ch": "3", "AL": "C", "Level": "9", "Ability 1": "Impervious. Only damaged by magical sources. Fire immune.", "Ability 2": "Wall of Flame. 1/day, 20' high curtain of fire, double near length. Touching it deals 4d8 damage. Lasts 2d4 rounds.", "Ability 3": "Wish. Cast wish once a week for a mortal, no spellcasting check." }, { "Name": "Elemental, Air", "Source": "CR", "Flavor Text": "A howling tornado of wind.", "AC": "16", "HP": "29/42", "ATK": "3 slam +7 (2/3d6) or 1 whirlwind", "MV": "double near (fly)", "S": "3", "D": "5", "C": "2", "I": "-2", "W": "1", "Ch": "-2", "AL": "N", "Level": "6/9", "Ability 1": "Impervious. Only damaged by magical sources.", "Ability 2": "Whirlwind. All within close DC 15 DEX or flung 2d20 feet in random direction." }, { "Name": "Elemental, Earth", "Source": "CR", "Flavor Text": "A thundering pillar of earth.", "AC": "17", "HP": "31/44", "ATK": "3 slam +7 (2/3d8) or 1 avalanche", "MV": "near (burrow)", "S": "5", "D": "0", "C": "4", "I": "-2", "W": "1", "Ch": "-2", "AL": "N", "Level": "6/9", "Ability 1": "Impervious. Only damaged by magical sources.", "Ability 2": "Avalanche. All within close DC 15 STR or entombed for 1d4 rounds under mounds of earth." }, { "Name": "Elemental, Fire", "Source": "CR", "Flavor Text": "A roaring column of flames.", "AC": "15", "HP": "30/43", "ATK": "3 slam +6 (2/3d10) or 1 inferno", "MV": "near (fly)", "S": "4", "D": "3", "C": "3", "I": "-2", "W": "1", "Ch": "-2", "AL": "N", "Level": "6/9", "Ability 1": "Impervious. Only damaged by magical sources. Fire immune.", "Ability 2": "Inferno. All within near DC 15 DEX or 3d8 damage." }, { "Name": "Elemental, Water", "Source": "CR", "Flavor Text": "A crashing vortex of water.", "AC": "15", "HP": "29/42", "ATK": "3 slam +6 (2/3d6) or 1 whirlpool", "MV": "double near (swim)", "S": "4", "D": "2", "C": "2", "I": "-2", "W": "1", "Ch": "-2", "AL": "N", "Level": "6/9", "Ability 1": "Impervious. Only damaged by magical sources.", "Ability 2": "Whirlpool. All within close DC 15 STR or immobilized inside water elemental (treat as underwater). DC 15 STR to escape on turn." }, { "Name": "Elephant", "Source": "CR", "Flavor Text": "Mighty mammals with tough hide, flappy ears, and a trunk.", "AC": "14", "HP": "34", "ATK": "2 tusks +6 (1d8)", "MV": "near", "S": "5", "D": "0", "C": "3", "I": "-2", "W": "1", "Ch": "0", "AL": "N", "Level": "7", "Ability 1": "Charge. Move up to double near in straight line and make 1 tusks attack. If hit, x3 damage." }, { "Name": "Elf", "Source": "CR", "Flavor Text": "Ethereal, ageless fey-people infused with ancient magic.", "AC": "13", "HP": "9", "ATK": "1 longbow (far) +3 (1d8) or 1 longsword +1 (1d8)", "MV": "near", "S": "0", "D": "3", "C": "0", "I": "1", "W": "1", "Ch": "1", "AL": "L", "Level": "2", "Ability 1": "Feyblood. ADV on DEX checks while in the natural wilds." }, { "Name": "Ettercap", "Source": "CR", "Flavor Text": "Bipedal, eight-eyed spiderfolk with spindly legs and purple fur.", "AC": "12", "HP": "14", "ATK": "2 bite +2 (1d6) or 1 poison web (near) +2", "MV": "near (climb)", "S": "0", "D": "2", "C": "1", "I": "0", "W": "0", "Ch": "-1", "AL": "C", "Level": "3", "Ability 1": "Poison Web. One target stuck in place and 1d4 damage/round. DC 12 DEX to escape on turn." }, { "Name": "Fairy", "Source": "CR", "Flavor Text": "Miniature fey folk with fluttering moth or butterfly wings.", "AC": "13", "HP": "4", "ATK": "1 needle +3 (1 + poison)", "MV": "near (fly)", "S": "-2", "D": "3", "C": "0", "I": "1", "W": "0", "Ch": "1", "AL": "N", "Level": "1", "Ability 1": "Poison. DC 12 CON or fall into deep sleep for 1d4 hours." }, { "Name": "Frog, Giant", "Source": "CR", "Flavor Text": "Human-sized frogs with warty skin and long, sticky tongues.", "AC": "12", "HP": "10", "ATK": "1 tongue and 1 bite +2 (1d6)", "MV": "near (swim)", "S": "2", "D": "2", "C": "1", "I": "-3", "W": "0", "Ch": "-3", "AL": "N", "Level": "2", "Ability 1": "Tongue. 1 creature in near DC 12 DEX or pulled to close range." }, { "Name": "Gargoyle", "Source": "CR", "Flavor Text": "Leering, winged fiends that look like stone statues. They can hold perfectly still for long stretches of time.", "AC": "16", "HP": "20", "ATK": "2 claw +3 (1d6)", "MV": "near (fly)", "S": "3", "D": "1", "C": "2", "I": "0", "W": "1", "Ch": "-1", "AL": "C", "Level": "4", "Ability 1": "Impervious. Only damaged by magical sources." }, { "Name": "Gelatinous Cube", "Source": "CR", "Flavor Text": "A translucent cube of slime that silently mows through tunnels.", "AC": "11", "HP": "24", "ATK": "1 touch +4 (1d8 + toxin + engulf)", "MV": "near S +3, D +1", "S": "2", "D": "-4", "C": "1", "I": "-4", "W": "1", "Ch": "-4", "AL": "N", "Level": "5", "Ability 1": "Engulf. DC 12 STR or trapped inside cube. Touch attack autohits engulfed targets each round. DC 12 STR on turn to escape. Fail checks if paralyzed.", "Ability 2": "Rubbery. Half damage from stabbing weapons.", "Ability 3": "Toxin. DC 15 CON or paralyzed 1d4 rounds." }, { "Name": "Ghast", "Source": "CR", "Flavor Text": "Greater ghouls who retain the intelligence they had in life.", "AC": "11", "HP": "20", "ATK": "2 claw +4 (1d8 + paralyze)", "MV": "near", "S": "3", "D": "1", "C": "2", "I": "0", "W": "0", "Ch": "2", "AL": "C", "Level": "4", "Ability 1": "Undead. Immune to morale checks.", "Ability 2": "Carrion Stench. Living creatures DC 12 CON the first time within near or DISADV on attacks and spellcasting for 5 rounds.", "Ability 3": "Paralyze. DC 12 CON or paralyzed 1d4 rounds." }, { "Name": "Ghost", "Source": "CR", "Flavor Text": "A wavering spirit with a face contorted in rage or sadness.", "AC": "13", "HP": "27", "ATK": "2 death touch +5 (1d8 + life drain) or 1 possess", "MV": "near (fly)", "S": "-2", "D": "3", "C": "0", "I": "0", "W": "0", "Ch": "4", "AL": "C", "Level": "6", "Ability 1": "Greater Undead. Immune to morale checks. Only damaged by silver or magical sources.", "Ability 2": "Life Drain. 1d4 CON damage. Death if reduced to 0 CON.", "Ability 3": "Possess. One target, close range. Contested Charisma check. If ghost wins, it inhabits the target's body and controls its actions for 2d4 rounds." }, { "Name": "Ghoul", "Source": "CR", "Flavor Text": "Gray-skinned, slavering undead with whipping tongues and flat, reptilian faces.", "AC": "11", "HP": "11", "ATK": "1 claw +2 (1d6 + paralyze)", "MV": "near", "S": "2", "D": "1", "C": "2", "I": "-3", "W": "-1", "Ch": "0", "AL": "C", "Level": "2", "Ability 1": "Undead. Immune to morale checks.", "Ability 2": "Paralyze. DC 12 CON or paralyzed 1d4 rounds." }, { "Name": "Giant, Cloud", "Source": "CR", "Flavor Text": "Pale, angular giants with blue-gray hair, light eyes, and silk robes. They do not allow outsiders into their enclaves.", "AC": "15", "HP": "48", "ATK": "3 morningstar +9 (2d10)", "MV": "double near", "S": "5", "D": "4", "C": "3", "I": "3", "W": "3", "Ch": "3", "AL": "N", "Level": "10", "Ability 1": "Alert. ADV on checks to detect sneaking or hiding creatures." }, { "Name": "Giant, Fire", "Source": "CR", "Flavor Text": "Bulky, muscled giants with coppery skin and red hair. Heavily armored in iron plate mail studded with bronze rivets.", "AC": "15", "HP": "44", "ATK": "3 greatsword +9 (2d12)", "MV": "double near", "S": "6", "D": "0", "C": "4", "I": "1", "W": "2", "Ch": "1", "AL": "C", "Level": "9", "Ability 1": "Fireblood. Fire immune." }, { "Name": "Giant, Frost", "Source": "CR", "Flavor Text": "Blue-skinned warriors with broad shoulders and braided hair. They sound war horns during their frequent raids.", "AC": "14", "HP": "44", "ATK": "3 greataxe +8 (2d10)", "MV": "double near", "S": "5", "D": "1", "C": "4", "I": "2", "W": "3", "Ch": "2", "AL": "C", "Level": "9", "Ability 1": "Frostblood. Cold immune." }, { "Name": "Giant, Goat", "Source": "CR", "Flavor Text": "Highland-dwelling, barbaric giants with goatlike legs, horns, and horizontal pupils.", "AC": "12", "HP": "39", "ATK": "2 greatclub +7 (2d8) or 1 boulder(far) +7 (2d10)", "MV": "double near (climb)", "S": "4", "D": "1", "C": "3", "I": "-2", "W": "0", "Ch": "-2", "AL": "C", "Level": "8" }, { "Name": "Giant, Hill", "Source": "CR", "Flavor Text": "Fleshy hulks with leathery skin and broad, sloping foreheads. Cruel, boorish, and dim-witted.", "AC": "11", "HP": "34", "ATK": "2 greatclub +6 (2d8) or 1 boulder (far) +6 (2d10)", "MV": "double near", "S": "4", "D": "0", "C": "3", "I": "-2", "W": "-2", "Ch": "-2", "AL": "C", "Level": "7" }, { "Name": "Giant, Stone", "Source": "CR", "Flavor Text": "Lean, sinewy giants with stony skin and deep-set eyes. They are quiet and poised, often sitting motionless.", "AC": "17", "HP": "40", "ATK": "2 greatclub +7 (2d8)", "MV": "double near", "S": "4", "D": "2", "C": "4", "I": "1", "W": "1", "Ch": "-1", "AL": "N", "Level": "8", "Ability 1": "Stone Hide. Half damage from stabbing and cutting weapons." }, { "Name": "Giant, Storm", "Source": "CR", "Flavor Text": "Regal titans with sea-green skin, flowing white hair, and thundering voices. They breathe water as easily as air.", "AC": "15", "HP": "58", "ATK": "3 greatsword +10 (2d12) or 1 lightning bolt", "MV": "double near (swim)", "S": "6", "D": "2", "C": "4", "I": "3", "W": "4", "Ch": "4", "AL": "L", "Level": "12", "Ability 1": "Stormblood. Electricity immune.", "Ability 2": "Lightning Bolt. 3/day, 5' wide line extending far from giant. All creatures in line DC 15 DEX or 5d10 damage. DISADV on check if in water." }, { "Name": "Gibbering Mouther", "Source": "CR", "Flavor Text": "Crawling masses of slime with dozens of screeching, lipless mouths and wet eyeballs.", "AC": "8", "HP": "21", "ATK": "2 bite +3 (1d8 + latch)", "MV": "near (climb, swim)", "S": "2", "D": "-2", "C": "3", "I": "-3", "W": "0", "Ch": "-3", "AL": "N", "Level": "4", "Ability 1": "Gibbering. Creatures within near DC 12 WIS on turn or take a random action (d8): 1-3. do nothing, 4-5. move in random direction, 6-7. attack nearest creature, 8. flee.", "Ability 2": "Latch. Attach to bitten target; bites auto-hit next round. DC 12 STR on turn to tear off." }, { "Name": "Gladiator", "Source": "CR", "Flavor Text": "Veteran warriors seasoned in arena fights to the death.", "AC": "16 (chainmail + shield)", "HP": "15", "ATK": "2 longsword +3 (1d8) or 1 spear (close/near) +3 (1d6)", "MV": "near (burrow)", "S": "2", "D": "1", "C": "2", "I": "0", "W": "0", "Ch": "1", "AL": "N", "Level": "3" }, { "Name": "Gnoll", "Source": "CR", "Flavor Text": "Barbaric, opportunistic hyenafolk who range in large packs.", "AC": "12 (leather)", "HP": "10", "ATK": "1 spear (close/near) +1 (1d6) or 1 longbow (far) +1 (1d8)", "MV": "near", "S": "1", "D": "1", "C": "1", "I": "-1", "W": "0", "Ch": "-1", "AL": "C", "Level": "2", "Ability 1": "Rage. 1/day, immune to morale checks, +1d4 damage (3 rounds)." }, { "Name": "Gnome, Deep", "Source": "CR", "Flavor Text": "Gray-skinned, white-haired fey the size of halflings. They hunt for gems and rare cave flora.", "AC": "14 (leather + shield)", "HP": "14", "ATK": "1 pick +3 (1d6) or 1 dart (near) +2 (1d4)", "MV": "near", "S": "2", "D": "1", "C": "1", "I": "1", "W": "1", "Ch": "1", "AL": "L", "Level": "3", "Ability 1": "Stone Meld. 2/day, underground only. Turn invisible for 3 rounds." }, { "Name": "Goblin", "Source": "CR", "Flavor Text": "A short, hairless humanoid with green skin and pointy ears.", "AC": "11", "HP": "5", "ATK": "1 club +0 (1d4) or 1 shortbow (far) +1 (1d4)", "MV": "near", "S": "0", "D": "1", "C": "1", "I": "-1", "W": "-1", "Ch": "-2", "AL": "C", "Level": "1", "Ability 1": "Keen Senses: Can't be surprised." }, { "Name": "Goblin, Boss", "Source": "CR", "Flavor Text": "A scarred goblin with knotted muscles and a crown of iron.", "AC": "14", "HP": "20", "ATK": "1 spear (close/near) +3 (1d6)", "MV": "near", "S": "2", "D": "1", "C": "2", "I": "-1", "W": "0", "Ch": "1", "AL": "C", "Level": "4", "Ability 1": "Keen Senses: Can't be surprised." }, { "Name": "Goblin, Shaman", "Source": "CR", "Flavor Text": "A swaying, chanting goblin wearing necklaces of teeth and a", "AC": "12", "HP": "19", "ATK": "1 staff +0 (1d4) or 1 spell +3", "MV": "near", "S": "0", "D": "1", "C": "1", "I": "0", "W": "2", "Ch": "1", "AL": "C", "Level": "4", "Ability 1": "Keen Senses: Can't be surprised.", "Ability 2": "Bug Brain (WIS Spell). DC 13. Near range, one target. Target's INT drops to 1 for 1d4 rounds.", "Ability 3": "Skitter (WIS Spell). DC 12. Self. Climb like a spider for 5 rounds.", "Ability 4": "Stink Bomb (WIS Spell). DC 12. One target within far range takes 2d4 damage and must make a DC 12 CON save or have DISADV on their next check/attack." }, { "Name": "Golem, Clay", "Source": "CR", "Flavor Text": "A towering, faceless humanoid shaped from glistening clay", "AC": "14", "HP": "40", "ATK": "3 slam +6 (1d8)", "MV": "near", "S": "4", "D": "0", "C": "4", "I": "-2", "W": "0", "Ch": "-2", "AL": "N", "Level": "8", "Ability 1": "Golem. Immune to damage from fire, cold, electricity, or non-magical sources. Healed by acid.", "Ability 2": "Curse. Slam damage can only be healed by level 5+ priest." }, { "Name": "Golem, Flesh", "Source": "CR", "Flavor Text": "A ghastly monstrosity made of sewn-together corpses.", "AC": "9", "HP": "35", "ATK": "3 slam +6 (1d8)", "MV": "near", "S": "4", "D": "-1", "C": "4", "I": "-1", "W": "1", "Ch": "-3", "AL": "N", "Level": "7", "Ability 1": "Golem. Immune to damage from fire, cold, or non-magical sources. Healed by electricity.", "Ability 2": "Berserk. When at or below 20 HP, +1 slam attack and slams deal double damage." }, { "Name": "Golem, Iron", "Source": "CR", "Flavor Text": "A bulky iron suit that squeals and sparks with each step", "AC": "19", "HP": "49", "ATK": "3 slam +8 (2d8)", "MV": "near", "S": "5", "D": "-1", "C": "4", "I": "-2", "W": "0", "Ch": "-2", "AL": "N", "Level": "10", "Ability 1": "Golem. Immune to damage from cold or non-magical sources. Healed by fire.", "Ability 2": "Poison Breath. All within near, DC 15 CON or 8d6 damage." }, { "Name": "Golem, Stone", "Source": "CR", "Flavor Text": "A wide-limbed, lumbering statue that shakes the ground.", "AC": "18", "HP": "40", "ATK": "3 slam +6 (1d10) and 1 slow", "MV": "near", "S": "4", "D": "-1", "C": "4", "I": "-2", "W": "0", "Ch": "-2", "AL": "N", "Level": "8", "Ability 1": "Golem. Immune to damage from fire, cold, electricity, or non-magical sources.", "Ability 2": "Slow. Far range, one target. DC 15 CON or speed halved 1d4 rds." }, { "Name": "Gorgon", "Source": "CR", "Flavor Text": "A snorting bull made entirely of iron plating. A cloud of green fog billows from its nostrils.", "AC": "18", "HP": "33", "ATK": "2 gore +6 (2d8) or 1 charge or 1 petrify fog", "MV": "double near", "S": "4", "D": "0", "C": "2", "I": "-3", "W": "1", "Ch": "-3", "AL": "C", "Level": "7", "Ability 1": "Charge. Move up to double near in straight line and make 1 gore attack. If hit, x3 damage.", "Ability 2": "Petrifying Breath. Fills a near-sized cube extending from gorgon. DC 15 CON or petrified (gorgons immune)." }, { "Name": "Gorilla", "Source": "CR", "Flavor Text": "Mighty, jungle-dwelling apes.", "AC": "12", "HP": "20", "ATK": "2 rend +5 (2d6)", "MV": "near (climb)", "S": "4", "D": "2", "C": "2", "I": "-1", "W": "1", "Ch": "-1", "AL": "N", "Level": "4" }, { "Name": "Gray Ooze", "Source": "CR", "Flavor Text": "Slick puddles the color of stone.", "AC": "11", "HP": "9", "ATK": "1 tentacle +2 (1d6)", "MV": "near (climb)", "S": "1", "D": "1", "C": "0", "I": "-4", "W": "-3", "Ch": "-4", "AL": "N", "Level": "2", "Ability 1": "Impervious. Immune to damage from acid, cold, or fire.", "Ability 2": "Corrosive. Nonmagical metal that touches the ooze dissolves on a d6 roll of 1-3." }, { "Name": "Grick", "Source": "CR", "Flavor Text": "A huge worm with four suckered tentacles and a snapping beak.", "AC": "14", "HP": "19", "ATK": "1 beak +3 (1d8) and 1 tentacle +3 (1d6 + grab)", "MV": "near (climb)", "S": "3", "D": "2", "C": "1", "I": "-3", "W": "1", "Ch": "-3", "AL": "N", "Level": "4", "Ability 1": "Camouflage. Hard to see in cave terrain or rocks.", "Ability 2": "Grab. Target is immobilized. DC 15 Strength check on turn to break free." }, { "Name": "Griffon", "Source": "CR", "Flavor Text": "Winged hunters with the head of an eagle and body of a lion. Their favored food is horses.", "AC": "12", "HP": "19", "ATK": "2 rend +4 (1d10)", "MV": "double near (fly)", "S": "4", "D": "2", "C": "1", "I": "-3", "W": "1", "Ch": "-1", "AL": "N", "Level": "4" }, { "Name": "Grimlow", "Source": "CR", "Flavor Text": "A tall, oval-shaped mammal. A giant, half-moon maw hides on its belly beneath its gray fur.", "AC": "12", "HP": "43", "ATK": "1 grab and 3 bite +6 (2d8)", "MV": "near", "S": "4", "D": "2", "C": "3", "I": "-3", "W": "1", "Ch": "-2", "AL": "N", "Level": "9", "Ability 1": "Grab. One target in near DC 15 STR or wrapped in grimlow's tongue and pulled into its mouth. Bite attacks automatically hit the target. Can only grab 1 target at a time. DC 15 STR on turn to break free." }, { "Name": "Guard", "Source": "CR", "Flavor Text": "A sentry equipped with sturdy weapons and armor.", "AC": "15", "HP": "4", "ATK": "1 spear +1 (1d6)", "MV": "near", "S": "1", "D": "0", "C": "0", "I": "0", "W": "1", "Ch": "0", "AL": "L", "Level": "1" }, { "Name": "Hag, Night", "Source": "CR", "Flavor Text": "A purple-skinned, stooped woman with stringy, white hair and a mouth full of iron teeth.", "AC": "14", "HP": "37", "ATK": "2 bite +6 (1d10) and 1 blind", "MV": "near", "S": "4", "D": "2", "C": "1", "I": "2", "W": "3", "Ch": "3", "AL": "C", "Level": "8", "Ability 1": "Blind. One target within near DC 15 CHA or blinded for 1d4 days.", "Ability 2": "Shapechange. Instantly change to look like any other humanoid." }, { "Name": "Hag, Sea", "Source": "CR", "Flavor Text": "A green, sunken-faced woman. Seaweed hair and oozing flesh.", "AC": "15", "HP": "28", "ATK": "2 claw +4 (1d8)", "MV": "near (swim)", "S": "2", "D": "3", "C": "1", "I": "1", "W": "2", "Ch": "2", "AL": "C", "Level": "6", "Ability 1": "Shapechange. Instantly change to look like any other humanoid.", "Ability 2": "Terrify. A creature who first sees her true form DC 15 CHA or DISADV on attacks 1d4 rounds." }, { "Name": "Hag, Weald", "Source": "CR", "Flavor Text": "Eyes dark as moonless nights, skin made of rotting wood, hair of tangled roots and vines.", "AC": "14", "HP": "28", "ATK": "2 claw +4 (1d8) or 1 drink pain", "MV": "near", "S": "3", "D": "2", "C": "1", "I": "1", "W": "2", "Ch": "3", "AL": "C", "Level": "6", "Ability 1": "Drink Pain. Near range. DC 12 CHA to deal 2d4 damage to a creature; regain that many HP.", "Ability 2": "Shapechange. Instantly change to look like any other humanoid." }, { "Name": "Harpy", "Source": "CR", "Flavor Text": "Horrific, winged women with vulture-like lower bodies. They keen a hypnotic song.", "AC": "13", "HP": "14", "ATK": "2 claw +3 (1d6) or 1 song", "MV": "near (fly)", "S": "1", "D": "3", "C": "1", "I": "0", "W": "0", "Ch": "1", "AL": "C", "Level": "3", "Ability 1": "Song. Enemies who can hear within double near DC 12 CHA or dazed and drawn to harpy for 1d4 rounds. Immune for 1 day if passed check." }, { "Name": "Hell Hound", "Source": "CR", "Flavor Text": "Black wolfhounds with red eyes and jaws dripping with flames.", "AC": "13", "HP": "19", "ATK": "2 bite +4 (1d8) or 1 fire breath", "MV": "double near", "S": "2", "D": "1", "C": "1", "I": "-2", "W": "1", "Ch": "-3", "AL": "C", "Level": "4", "Ability 1": "Impervious. Fire immune. ", "Ability 2": "Fire Breath. Fills a near-sized cube extending from hell hound. DC 15 DEX or 3d8 damage. Cannot use again for 1d4 rounds." }, { "Name": "Hippogriff", "Source": "CR", "Flavor Text": "Fierce, winged creatures with the lower body of a horse and upper body of a giant eagle.", "AC": "13", "HP": "14", "ATK": "2 rend +3 (1d8)", "MV": "double near (fly)", "S": "3", "D": "3", "C": "1", "I": "-3", "W": "1", "Ch": "-2", "AL": "N", "Level": "3" }, { "Name": "Hippopotamus", "Source": "CR", "Flavor Text": "Ornery river-beasts as large as cows with round, purple bodies and bulbous snouts.", "AC": "12", "HP": "24", "ATK": "2 bite +4 (1d10)", "MV": "near (swim)", "S": "4", "D": "0", "C": "2", "I": "-3", "W": "0", "Ch": "-3", "AL": "N", "Level": "5", "Ability 1": "Stumpy. ADV on STR checks to grab or drag other creatures." }, { "Name": "Hobgoblin", "Source": "CR", "Flavor Text": "A sturdy, tall goblin with russet skin. Militant and strategic.", "AC": "15", "HP": "10", "ATK": "1 longsword +3 (1d8) or 1 longbow (far) +0 (1d8)", "MV": "near", "S": "3", "D": "0", "C": "1", "I": "2", "W": "1", "Ch": "1", "AL": "C", "Level": "2", "Ability 1": "Phalanx. +1 to attacks and AC when in close range of an allied hobgoblin." }, { "Name": "Horse", "Source": "CR", "Flavor Text": "Powerful, swift herd animals that roam open plains.", "AC": "11", "HP": "11", "ATK": "1 hooves +3 (1d6)", "MV": "double near", "S": "3", "D": "1", "C": "2", "I": "-3", "W": "1", "Ch": "-2", "AL": "N", "Level": "2" }, { "Name": "Hydra", "Source": "CR", "Flavor Text": "A towering, amphibious reptile with a bouquet of snake heads writhing on long necks.", "AC": "15", "HP": "11", "ATK": "1 bite (near) +6 (1d8)", "MV": "near (swim)", "S": "5", "D": "1", "C": "2", "I": "-2", "W": "1", "Ch": "-2", "AL": "N", "Level": "*", "Ability 1": "Heads. Choose how many heads the hydra has. Each is LV 2, AC 15, and can make 1 bite attack. A killed head sprouts into two new heads at the start of the hydra's turn unless cauterized beforehand. Treat the hydra's LV as all the heads combined." }, { "Name": "Invisible Stalker", "Source": "CR", "Flavor Text": "Intelligent creatures made of flowing air. Often bound to the bidding of evil sorcerers.", "AC": "13", "HP": "29", "ATK": "3 pummel +4 (1d6)", "MV": "near (fly)", "S": "2", "D": "3", "C": "2", "I": "2", "W": "1", "Ch": "0", "AL": "N", "Level": "6", "Ability 1": "Bound. A secret, mundane contingency (such as the touch of a feather) ends the invisible stalker's magical servitude.", "Ability 2": "Invisible. Naturally invisible.", "Ability 3": "Tracking. Can always sense the direction of its chosen quarry." }, { "Name": "Jellyfish", "Source": "CR", "Flavor Text": "Hand-sized, purple sea jellies with stinging tentacles.", "AC": "11", "HP": "1", "ATK": "1 sting +1 (1 + toxin)", "MV": "close (swim)", "S": "-4", "D": "1", "C": "0", "I": "-4", "W": "1", "Ch": "-4", "AL": "N", "Level": "0", "Ability 1": "Toxin. DC 9 CON or paralyzed 1d4 rounds." }, { "Name": "Knight", "Source": "CR", "Flavor Text": "A warrior in shining plate mail and the surcoat of a knightly order.", "AC": "17", "HP": "14", "ATK": "2 bastard sword +3 (1d8)", "MV": "near", "S": "3", "D": "0", "C": "1", "I": "0", "W": "0", "Ch": "1", "AL": "L", "Level": "3", "Ability 1": "Oath. 3/day, ADV on a roll made in service of knight's order." }, { "Name": "Kobold", "Source": "CR", "Flavor Text": "Puny, scaled coyote-lizards that dwell underground.", "AC": "13", "HP": "1", "ATK": "1 spear (close/near) +0 (1d6)", "MV": "near", "S": "-2", "D": "2", "C": "0", "I": "-1", "W": "0", "Ch": "-1", "AL": "C", "Level": "0", "Ability 1": "Dodge. 1/day, an attack that would hit misses instead." }, { "Name": "Kobold, Sorcerer", "Source": "CR", "Flavor Text": "A scaly dog-lizard painted with colorful stripes and rattling a hefty leg bone strung with beads and feathers.", "AC": "13", "HP": "13", "ATK": "1 club +1 (1d4) or 1 spell +2", "MV": "near", "S": "-2", "D": "2", "C": "0", "I": "-1", "W": "1", "Ch": "2", "AL": "C", "Level": "3", "Ability 1": "Dodge. 1/day, an attack that would hit misses instead.", "Ability 2": "Scorpion Sting (CHA Spell). DC 11. Near range, one target. 1d6 damage and target has DISADV on next attack roll or check.", "Ability 3": "Spider Swarm (CHA Spell). DC 12. A spider swarm appears within near. Stays 1d4 rounds. Follows sorcerer's commands." }, { "Name": "Kraken", "Source": "CR", "Flavor Text": "Primordial, tentacled leviathans the size of war galleons. They live in the lightless depths of the deep ocean.", "AC": "18", "HP": "80", "ATK": "4 tentacle (near) +9 (2d12) or 1 storm or 1d4 lightning bolt", "MV": "double near (swim)", "S": "6", "D": "3", "C": "4", "I": "4", "W": "3", "Ch": "4", "AL": "C", "Level": "17", "Ability 1": "Impervious. Electricity immune.", "Ability 2": "Crush. Tentacle attacks deal double damage against objects.", "Ability 3": "Lighting Bolt. Straight line (5' wide) extending far from kraken. DC 15 DEX or 6d6 damage.", "Ability 4": "Storm. Seas become violently turbulent in 1 mile radius around kraken. Lasts 2d4 rounds. Seaborne vessels have a 1:6 chance of capsizing each round." }, { "Name": "Leech, Giant", "Source": "CR", "Flavor Text": "A glossy black, blood-drinking slug as large as a cat.", "AC": "9", "HP": "10", "ATK": "1 bite +1 (1d4 + attach)", "MV": "near (swim)", "S": "1", "D": "-1", "C": "1", "I": "-3", "W": "-1", "Ch": "-3", "AL": "N", "Level": "2", "Ability 1": "Attach. Attach to target; bite auto-hits next round. DC 12 STR on turn to tear off." }, { "Name": "Leprechaun", "Source": "CR", "Flavor Text": "Impish fey who favor green garb and love fooling \"tall folk\" with promises of gold.", "AC": "13", "HP": "19", "ATK": "1 spell +4", "MV": "near", "S": "1", "D": "3", "C": "1", "I": "2", "W": "1", "Ch": "3", "AL": "N", "Level": "4", "Ability 1": "Alert. Cannot be surprised.", "Ability 2": "Slippery. Hostile spells targeting the leprechaun are DC 15 to cast.", "Ability 3": "Fool's Gold (CHA Spell). DC 12. Close. One small object or small group of similar objects. Turn objects into silver or gold pieces. Lasts 1 day.", "Ability 4": "Illusion (CHA Spell). DC 11. Create a convincing visual and/or auditory illusion within near. Lasts until dismissed.", "Ability 5": "Invisibility (CHA Spell). DC 12. Self. Become invisible for 2d4 rounds." }, { "Name": "Lich", "Source": "CR", "Flavor Text": "A wizard who has completed a necromantic ritual to become a mighty, undead sorcerer. Its withered body is draped in moldering, silk robes, and red marshlights burn in its eyes.", "AC": "16", "HP": "62", "ATK": "2 touch +6 (2d8 + paralysis) and 2 spell +7", "MV": "near", "S": "3", "D": "1", "C": "4", "I": "4", "W": "3", "Ch": "3", "AL": "C", "Level": "13", "Ability 1": "Supreme Undead. Immune to morale checks. Only damaged by magical sources.", "Ability 2": "Phylactery. Can't be killed while spirit vessel (an object) is intact.", "Ability 3": "Paralysis. DC 15 CON or paralyzed 1d4 rounds.", "Ability 4": "Flight (INT Spell). Self. DC 13. Fly double near for 5 rounds", "Ability 5": "Null (INT Spell). Self. DC 14. Hostile spells targeting lich are DC 18 to cast. Lasts 1d4 rounds.", "Ability 6": "Shadow Leap (INT Spell). Self. DC 14. Teleport up to 100 miles. ", "Ability 7": "Sigil of Doom (INT Spell). DC 15. One target of LV 9 or less within near DC 15 CON or go to 0 HP. ", "Ability 8": "Wither (INT Spell). DC 14. 4d8 damage to enemies within a near-sized cube centered on lich." }, { "Name": "Lion", "Source": "CR", "Flavor Text": "Tawny great cats that hunt open planes. Males have manes.", "AC": "12", "HP": "15", "ATK": "2 rend +4 (1d8)", "MV": "near", "S": "4", "D": "2", "C": "2", "I": "-3", "W": "1", "Ch": "-3", "AL": "N", "Level": "3" }, { "Name": "Lizardfolk", "Source": "CR", "Flavor Text": "Crocodilian humanoids with scaly faces, claws, and tails. They dwell in swamps and rivers.", "AC": "14 (leather + shield)", "HP": "11", "ATK": "1 spear (close/near) +2 (1d6)", "MV": "near (swim)", "S": "1", "D": "1", "C": "2", "I": "-1", "W": "1", "Ch": "-2", "AL": "C", "Level": "2" }, { "Name": "Mage", "Source": "CR", "Flavor Text": "Trained wizards who are often members of a sorcerous order.", "AC": "11", "HP": "27", "ATK": "1 spell +5", "MV": "near", "S": "-1", "D": "1", "C": "0", "I": "3", "W": "1", "Ch": "0", "AL": "L", "Level": "6", "Ability 1": "Arcane Armor (INT Spell). Self. DC 12. AC 16 for 2d4 rounds.", "Ability 2": "Blast (INT Spell). DC 12. Far, one target. 2d6 damage.", "Ability 3": "Cancel (INT Spell). DC 13. End one spell affecting a target within near.", "Ability 4": "Levitate (INT Spell). DC 12. Close. Focus. Hover near for duration, vertical movement only.", "Ability 5": "Snare (INT Spell). DC 13. Focus. One humanoid target within near paralyzed for duration." }, { "Name": "Mammoth", "Source": "CR", "Flavor Text": "Massive, shaggy elephants with tusks that reach the ground.", "AC": "15", "HP": "44", "ATK": "2 tusks +7 (1d12)", "MV": "near", "S": "5", "D": "0", "C": "4", "I": "-2", "W": "1", "Ch": "0", "AL": "N", "Level": "9", "Ability 1": "Thick Fur. Cold immune.", "Ability 2": "Charge. Move up to double near in straight line and make 1 tusks attack. If hit, x3 damage." }, { "Name": "Manta Ray, Giant", "Source": "CR", "Flavor Text": "Swooping manta rays as large", "AC": "13", "HP": "37", "ATK": "2 sting +5 (1d12 + poison)", "MV": "double near (swim)", "S": "3", "D": "3", "C": "1", "I": "-2", "W": "1", "Ch": "-3", "AL": "N", "Level": "8", "Ability 1": "Poison. DC 15 CON or drop to 0 hit points in 1d4 rounds." }, { "Name": "Manticore", "Source": "CR", "Flavor Text": "Human-faced lions with bat", "AC": "14", "HP": "29", "ATK": "2 rend +6 (2d6) or 2 tail spike (far) +4 (1d8)", "MV": "double near (fly)", "S": "4", "D": "2", "C": "2", "I": "-2", "W": "1", "Ch": "-2", "AL": "C", "Level": "6", "Ability 1": "Spikes. Manticores have 4d6 tail spikes. They regrow each day." }, { "Name": "Mastiff", "Source": "CR", "Flavor Text": "Muscled guard dogs with fierce", "AC": "11", "HP": "4", "ATK": "1 bite +1 (1d6)", "MV": "near", "S": "1", "D": "1", "C": "0", "I": "-2", "W": "1", "Ch": "-2", "AL": "N", "Level": "1" }, { "Name": "Medusa", "Source": "CR", "Flavor Text": "Immortal women with coiling", "AC": "14", "HP": "38", "ATK": "1 snake bite +6 (1d6 + poison)", "MV": "near", "S": "2", "D": "1", "C": "2", "I": "2", "W": "3", "Ch": "4", "AL": "C", "Level": "8", "Ability 1": "Godborn. Hostile spells targeting the medusa are DC 15 to cast.", "Ability 2": "Petrify. Any creature (including medusa) who looks directly at medusa, DC 15 CON or petrified.", "Ability 3": "Poison. DC 15 CON or go to 0 HP." }, { "Name": "Merfolk", "Source": "CR", "Flavor Text": "Ocean dwellers with human", "AC": "11", "HP": "9", "ATK": "1 spear (close/near) +2 (1d6)", "MV": "near(swim)", "S": "1", "D": "1", "C": "0", "I": "0", "W": "1", "Ch": "1", "AL": "L", "Level": "2" }, { "Name": "Mimic", "Source": "CR", "Flavor Text": "Beasts that look like objects.", "AC": "12", "HP": "23", "ATK": "2 bite +5 (1d8 + stick)", "MV": "near", "S": "2", "D": "0", "C": "1", "I": "-2", "W": "0", "Ch": "-3", "AL": "N", "Level": "5", "Ability 1": "Stick. DC 15 STR or adhere to target; auto-hit with bite. DC 15 STR on turn to remove." }, { "Name": "Minotaur", "Source": "CR", "Flavor Text": "Ferocious bull-men with hooves and curved horns. They live in mazelike tunnels.", "AC": "14", "HP": "34", "ATK": "2 greataxe +6 (1d10) and 1 horns +6 (1d12)", "MV": "near", "S": "4", "D": "1", "C": "3", "I": "1", "W": "2", "Ch": "1", "AL": "C", "Level": "7", "Ability 1": "Charge: In place of attacks, move up to double near in a straight line and make 1 horn attack. If hit, x2 damage." }, { "Name": "Moose", "Source": "CR", "Flavor Text": "A towering, brown-haired grazer with weighty, flat antlers.", "AC": "11", "HP": "19", "ATK": "2 antler +3 (1d6)", "MV": "double near", "S": "3", "D": "0", "C": "1", "I": "-2", "W": "0", "Ch": "-2", "AL": "N", "Level": "4" }, { "Name": "Mordanticus The Flayed", "Source": "CR", "Flavor Text": "A skinless mummy-lich wearing a crown set with nine bright gems. Once the head of the ancient, wizardly order of Gehemna, Mordanticus now lives in secret within the sanctum of Gehemna's reigning archmage. He has served as an advisor and historian for centuries, but an enduring enchantment prevents him from speaking of two topics: his origins, and The Ten-Eyed Oracle.", "AC": "17", "HP": "89", "ATK": "1 rot touch +8 (1d10 + necrosis) and 3 spell +8", "MV": "near", "S": "4", "D": "4", "C": "4", "I": "5", "W": "4", "Ch": "5", "AL": "N", "Level": "19", "Ability 1": "Legendary Undead. Immune to morale checks. Only damaged by magical sources. Hostile spells targeting Mordanticus are DC 18 to cast.", "Ability 2": "Crown of Gehemna. 3/day, cause a spell being cast within far to fail.", "Ability 3": "Necrosis. DC 15 CON or go to 0 HP. Healing spells are DC 15 to cast on target while affected by necrosis.", "Ability 4": "Phylactery. Cannot be killed while spirit vessel (a diamond) is intact.", "Ability 5": "Absorb (INT Spell). DC 13. Near, one target. Target loses the ability to cast one random spell until completing a rest, and Mordanticus regains a lost spell of the same tier or less.", "Ability 6": "Banish (INT Spell). DC 14. All extradimensional creatures within near DC 15 CHA or sent back to their home planes.", "Ability 7": "Bind (INT Spell). DC 12. One humanoid in far paralyzed 1d4 rounds.", "Ability 8": "Blast (INT Spell). DC 14. One creature in near takes 5d8 damage", "Ability 9": "Phase (INT Spell). DC 13. Self. Teleport up to one mile." }, { "Name": "Mummy", "Source": "CR", "Flavor Text": "A desiccated, linen-wrapped zombie.", "AC": "13", "HP": "47", "ATK": "3 rot touch +8", "MV": "near", "S": "3", "D": "0", "C": "2", "I": "3", "W": "2", "Ch": "3", "AL": "C", "Level": "10", "Ability 1": "Supreme Undead. Immune to morale checks. Only damaged by magical sources.", "Ability 2": "Dessicated. Can be damaged by fire. Takes x2 damage from it.", "Ability 3": "Necrosis. DC 15 CON or drop to 0 HP. Healing spells are DC 15 to cast on target while affected by necrosis." }, { "Name": "Mushroomfolk", "Source": "CR", "Flavor Text": "Lumbering humanoids with spongy, elongated bodies.", "AC": "13", "HP": "15", "ATK": "2 slam +2 (1d6)", "MV": "near (swim)", "S": "2", "D": "-1", "C": "2", "I": "0", "W": "1", "Ch": "0", "AL": "N", "Level": "3", "Ability 1": "Sunblind. Blinded in bright light.", "Ability 2": "Telepathic. Speak mentally with creatures within double near." }, { "Name": "Naga", "Source": "CR", "Flavor Text": "Magic-wielding cobras towering ten feet high.", "AC": "16", "HP": "43", "ATK": "2 bite +7", "MV": "near (climb)", "S": "4", "D": "1", "C": "3", "I": "2", "W": "2", "Ch": "4", "AL": "C", "Level": "9", "Ability 1": "Poison. DC 15 CON or paralyzed 1d4 rounds.", "Ability 2": "Agony (CHA Spell). DC 14. One target in near takes 3d8 damage.", "Ability 3": "Hypnotize (CHA Spell). DC 13. Focus. One target in near range who can see naga is helplessly stupefied for duration.", "Ability 4": "Whispers (CHA Spell). DC 12. Hostile spells cast on one target in near are DC 9 for 1d4 rounds." }, { "Name": "Naga, Bone", "Source": "CR", "Flavor Text": "Mindless, skeletal husks of nagas reanimated by sorcery.", "AC": "13", "HP": "31", "ATK": "2 bite +5", "MV": "near (burrow, climb)", "S": "3", "D": "2", "C": "4", "I": "-3", "W": "0", "Ch": "4", "AL": "C", "Level": "6", "Ability 1": "Greater Undead. Immune to morale checks. Only damaged by silver or magical sources." }, { "Name": "Nightmare", "Source": "CR", "Flavor Text": "Black warhorses with flaming manes, hooves, and eyes.", "AC": "13", "HP": "29", "ATK": "2 hooves +5", "MV": "double near (fly)", "S": "3", "D": "3", "C": "2", "I": "-1", "W": "1", "Ch": "-2", "AL": "C", "Level": "6", "Ability 1": "Impervious. Nightmare and its rider immune to fire." }, { "Name": "Obe-Ixx Of Azarumme", "Source": "CR", "Flavor Text": "A pale, angular woman in translucent plate mail fashioned from giant scorpion chitin. Obe-Ixx, daughter of Azarumme, rose up from the prehistoric barbarian tribes of Tal-Yool to conquer all in her path. One day, she stood at the steps of an obsidian ziggurat deep within the trackless jungle. Forty nights later, Obe-Ixx emerged as the ur-vampire, bloodlust made flesh. Her dynasty would rise and fall again and again over the coming millennia.", "AC": "18 (+3 plate mail)", "HP": "76", "ATK": "4 greatsword (near) +11 (1d12 + 2 + Moonbite properties) and 1 bite + 9 (1d8 + blood drain) and 1 charm", "MV": "near (climb, fly)", "S": "5", "D": "3", "C": "4", "I": "3", "W": "4", "Ch": "5", "AL": "C", "Level": "16", "Ability 1": "Immune to morale checks. Only damaged by magical sources. Hostile spells targeting Obe-Ixx are DC 18 to cast.", "Ability 2": "Blood Drain. Obe-Ixx heals 2d8 HP, target loses 1d6 CON. At 0 CON, target dies and rises as a loyal vampire or vampire spawn (Obe-Ixx chooses).", "Ability 3": "Charm. One humanoid target who can see Obe-Ixx within near, DC 15 CHA or under Obe-Ixx's control for 1d4 days.", "Ability 4": "Moonbite Properties. +2 greatsword, thrown weapon, returns after being thrown. Spells to heal damage it inflicts are DC 15 to cast.", "Ability 5": "Shapechange. In place of attacks, turn into a giant bat, dire wolf, or back into regular form.", "Ability 6": "Ur-Vampire. Must sleep in sarcophagus at least once per moon cycle or loses 2d8 HP per day that cannot heal until sleeping in sarcophagus. Takes 3d8 damage each round while in direct sunlight. Cannot be killed unless pierced through heart while at 0 HP with a wooden stake carved from a tree from the Tal-Yool jungle." }, { "Name": "Ochre Jelly", "Source": "CR", "Flavor Text": "An orange puddle of quivering slime.", "AC": "9", "HP": "20", "ATK": "2 tentacle +3 (1d6)", "MV": "near (climb)", "S": "2", "D": "-1", "C": "2", "I": "-4", "W": "-3", "Ch": "-4", "AL": "N", "Level": "4", "Ability 1": "Split. If cut or chopped, split into two smaller oozes (divide remaining HP between both). Can split up to four times." }, { "Name": "Octopus, Giant", "Source": "CR", "Flavor Text": "Octopi as large as sailing skiffs.", "AC": "13", "HP": "23", "ATK": "2 tentacle (near) +4 (1d8 + grab)", "MV": "near (swim)", "S": "3", "D": "3", "C": "1", "I": "-2", "W": "1", "Ch": "-3", "AL": "N", "Level": "5", "Ability 1": "Grab. DC 15 STR or immobilized. Tentacle auto-hits each round. DC 15 STR on turn to break free. Ink. In place of attacks, ink cloud blinds all in near for 1d4 rounds." }, { "Name": "Ogre", "Source": "CR", "Flavor Text": "A massive, dim-witted brute with tusks and a heavy frame. Often lords over goblins or orcs.", "AC": "9", "HP": "30", "ATK": "2 greatclub +6 (2d6)", "MV": "near", "S": "4", "D": "-1", "C": "3", "I": "-2", "W": "-2", "Ch": "-2", "AL": "C", "Level": "6" }, { "Name": "Oni", "Source": "CR", "Flavor Text": "Cunning and sorcerous ogre-demons with shaggy white hair, blue skin, and yellow eyes.", "AC": "11", "HP": "33", "ATK": "1 glaive (near) +6 (1d10) or 1 spell +5", "MV": "near", "S": "5", "D": "1", "C": "2", "I": "2", "W": "1", "Ch": "3", "AL": "C", "Level": "7", "Ability 1": "Shapeshift. In place of attacks, turn into any humanoid or back into original form.", "Ability 2": "Fade (CHA Spell). DC 13. Self. Become invisible for 1d4 rounds.", "Ability 3": "Hellfrost (CHA Spell). DC 13. All within near-sized cube extending from oni 3d6 damage.", "Ability 4": "Mist (CHA Spell). DC 13. Self. Turn into mist that can fly double near. Lasts 2d4 rounds." }, { "Name": "Orc", "Source": "CR", "Flavor Text": "A tusked, tall humanoid with gray skin and pointed ears.", "AC": "15", "HP": "4", "ATK": "1 greataxe +2 (1d8)", "MV": "near", "S": "2", "D": "0", "C": "0", "I": "-1", "W": "0", "Ch": "-1", "AL": "C", "Level": "1", "Ability 1": "Rage. 1/day, immune to morale checks, +1d4 damage (3 rounds)." }, { "Name": "Orc, Chieftain", "Source": "CR", "Flavor Text": "An imposing orc with scars crisscrossing its body.", "AC": "14", "HP": "19", "ATK": "2 greataxe +4 (1d10)", "MV": "near", "S": "2", "D": "1", "C": "1", "I": "-1", "W": "0", "Ch": "-1", "AL": "C", "Level": "4", "Ability 1": "Rage. 1/day, immune to morale checks, +1d4 damage (3 rounds)." }, { "Name": "Otyugh", "Source": "CR", "Flavor Text": "Stumpy, three-legged beasts with barbed tentacles and vast", "AC": "13", "HP": "35", "ATK": "2 tentacle +5 (1d8) and", "MV": "near", "S": "4", "D": "-1", "C": "4", "I": "-2", "W": "0", "Ch": "-3", "AL": "N", "Level": "7", "Ability 1": "Disease. DC 15 CON or infected. DC 15 CON each day or lose 1d6 HP (can't heal). Ends on success." }, { "Name": "Outsider, Primordial Slime", "Source": "CR", "Flavor Text": "A mass of clear ooze strobing with sick pulses of violet light.", "AC": "9", "HP": "30", "ATK": "2 tentacle +4 (1d10 + dissolve)", "MV": "near (climb)", "S": "3", "D": "2", "C": "3", "I": "-4", "W": "-3", "Ch": "-4", "AL": "C", "Level": "6", "Ability 1": "Impervious. Only harmed by fire.", "Ability 2": "Dissolve. One random piece of non-magical gear is destroyed" }, { "Name": "Outsider, Rime Walker", "Source": "CR", "Flavor Text": "Human-shaped beings formed from black space ice. Their eyes are two flickering, white lights.", "AC": "16", "HP": "43", "ATK": "4 claw +8 (1d12)", "MV": "near (fly)", "S": "4", "D": "4", "C": "3", "I": "2", "W": "2", "Ch": "2", "AL": "C", "Level": "9", "Ability 1": "Impervious. Immune to cold.", "Ability 2": "Ice Aura. Enemies within near of rime walker DC 12 CON or lose action" }, { "Name": "Outsider, Void Spawn", "Source": "CR", "Flavor Text": "Scythe-like limbs jut from a purple bulb as big as an ogre. Its lower half is a nest of tentacles.", "AC": "13", "HP": "34", "ATK": "2 scythe +6 (1d10)", "MV": "near (fly)", "S": "4", "D": "1", "C": "3", "I": "0", "W": "1", "Ch": "-1", "AL": "C", "Level": "7", "Ability 1": "Impervious. Immune to cold.", "Ability 2": "Toxin. DC 12 CON or paralyzed for 1d4 rounds" }, { "Name": "Outsider, Void Spider", "Source": "CR", "Flavor Text": "Pale, horse-sized arachnids that become ghostly and intangible.", "AC": "13", "HP": "23", "ATK": "2 bite +4 (1d8 + poison)", "MV": "near (climb)", "S": "3", "D": "3", "C": "1", "I": "-1", "W": "1", "Ch": "-2", "AL": "C", "Level": "5", "Ability 1": "Impervious. Immune to cold.", "Ability 2": "Phase. Once per round, become corporeal or incorporeal", "Ability 3": "Poison. DC 12 CON or drop to 0 HP in 1d4 rounds" }, { "Name": "Owlbear", "Source": "CR", "Flavor Text": "Cantankerous bears with owl eyes, beaks, and feathers.", "AC": "13", "HP": "30", "ATK": "2 claw +5 (1d10)", "MV": "near (climb) S +4", "S": "4", "D": "1", "C": "3", "I": "-2", "W": "2", "Ch": "-3", "AL": "N", "Level": "6", "Ability 1": "Crush. Deals an extra die of damage if it hits the same target with both claws." }, { "Name": "Panther", "Source": "CR", "Flavor Text": "Supple large cats with blue-black fur. Stealthy hunters.", "AC": "14", "HP": "14", "ATK": "2 rend +3 (1d6)", "MV": "near (climb) S +3", "S": "3", "D": "4", "C": "1", "I": "-2", "W": "1", "Ch": "-3", "AL": "N", "Level": "3" }, { "Name": "Peasant", "Source": "CR", "Flavor Text": "A commoner in worn clothes.", "AC": "10", "HP": "4", "ATK": "1 club +0 (1d4)", "MV": "near", "S": "0", "D": "0", "C": "0", "I": "0", "W": "0", "Ch": "0", "AL": "L", "Level": "1" }, { "Name": "Pegasus", "Source": "CR", "Flavor Text": "Winged horses with noble bearings and pearly white coats.", "AC": "12", "HP": "15", "ATK": "2 hooves +3 (1d6)", "MV": "double near (fly) S +3", "S": "3", "D": "2", "C": "2", "I": "-3", "W": "1", "Ch": "0", "AL": "N", "Level": "3" }, { "Name": "Phoenix", "Source": "CR", "Flavor Text": "Huge, soaring eagles made of searing flames. Intelligent and imbued with immortal magic.", "AC": "16", "HP": "60", "ATK": "4 rend +8 (2d12)", "MV": "double near (fly)", "S": "3", "D": "4", "C": "2", "I": "3", "W": "3", "Ch": "3", "AL": "L", "Level": "13", "Ability 1": "Impervious. Immune to fire. Only damaged by magical sources.", "Ability 2": "Explosion. Upon death, creatures within double near of phoenix DC 18 DEX or 10d6 damage.", "Ability 3": "Heat Aura. Creatures within near of phoenix at start of turn DC 15 CON or 2d6 damage.", "Ability 4": "Rebirth. A red-hot egg remains after death. Phoenix hatches from it in 1d4 days." }, { "Name": "Piranha, Swarm", "Source": "CR", "Flavor Text": "A school of flat, silvery fish with vicious fangs.", "AC": "12", "HP": "13", "ATK": "2 bite +2 (1d6)", "MV": "near (swim)", "S": "-2", "D": "2", "C": "0", "I": "-3", "W": "0", "Ch": "-3", "AL": "N", "Level": "3", "Ability 1": "Savage. ADV on attacks against creatures below half their HP." }, { "Name": "Pirate", "Source": "CR", "Flavor Text": "Seafaring scoundrels who live to steal and hoard treasure.", "AC": "12 (leather)", "HP": "4", "ATK": "1 cutlass +1 (1d6) or 1 dagger (close/near) +1 (1d4)", "MV": "near", "S": "1", "D": "1", "C": "0", "I": "0", "W": "0", "Ch": "0", "AL": "C", "Level": "1" }, { "Name": "Priest", "Source": "CR", "Flavor Text": "A respected member of a clergy who leads holy rituals and rites.", "AC": "15 (chainmail + shield)", "HP": "23", "ATK": "2 mace +3 (1d6) or 1 spell +3", "MV": "near", "S": "1", "D": "0", "C": "1", "I": "0", "W": "2", "Ch": "1", "AL": "L", "Level": "5", "Ability 1": "Anoint (WIS Spell). DC 12. Close. One weapon or armor becomes a magic +2 version for 10 rounds.", "Ability 2": "Healing Touch (WIS Spell). DC 11. Heal one creature within close for 2d4 HP.", "Ability 3": "Holy Flame (WIS Spell). DC 13. Self. Weapons ignite in magic flames and deal an additional 1d6 damage for 5 rounds.", "Ability 4": "Rebuke (WIS Spell). DC 13. Focus. Chaotic creatures cannot attack priest or come within near range for duration." }, { "Name": "Purple Worm", "Source": "CR", "Flavor Text": "A massive worm as tall as a castle keep. Has a rotating maw and is covered in purple chitin.", "AC": "18", "HP": "57", "ATK": "2 bite +9 (2d12 + swallow) and 1 sting (1d10 + poison)", "MV": "double near (burrow)", "S": "5", "D": "1", "C": "3", "I": "-3", "W": "1", "Ch": "-3", "AL": "N", "Level": "12", "Ability 1": "Poison. DC 15 CON or go to 0 HP.", "Ability 2": "Swallow. On a natural attack roll of 18-20, target is swallowed. Total darkness inside and 2d10 damage per round. Worm regurgitates all swallowed if dealt at least 20 damage in one round to the inside of its gullet." }, { "Name": "Rakshasa", "Source": "CR", "Flavor Text": "Demonic illusionists whose true form is of a humanlike great cat with backwards hands.", "AC": "16", "HP": "39", "ATK": "2 claw +6 (1d8)", "MV": "near", "S": "1", "D": "3", "C": "3", "I": "3", "W": "3", "Ch": "4", "AL": "C", "Level": "8", "Ability 1": "Impervious. Only damaged by magical sources. Immune to hostile spells of 3rd tier or lower.", "Ability 2": "Mesmerism. Can read the minds of all creatures within near. Can instantly take on the illusory appearance of any humanoid.", "Ability 3": "Weakness. A crossbow bolt under the effects of the holy weapon spell kills the rakshasa." }, { "Name": "Rat", "Source": "CR", "Flavor Text": "Rangy, plague-carrying rodents that infest underground places.", "AC": "10", "HP": "1", "ATK": "1 bite +0 (1 + disease)", "MV": "near", "S": "-3", "D": "0", "C": "1", "I": "-3", "W": "1", "Ch": "-3", "AL": "N", "Level": "0", "Ability 1": "Disease. DC 9 CON or 1d4 CON damage (can't heal while ill). Repeat check once per day; ends on success. Die at 0 CON." }, { "Name": "Rat, Dire", "Source": "CR", "Flavor Text": "Child-sized, savage rats bristling with bony face and spine ridges.", "AC": "12", "HP": "10", "ATK": "1 bite +2 (1d6 + disease)", "MV": "near", "S": "1", "D": "2", "C": "1", "I": "-2", "W": "1", "Ch": "-2", "AL": "N", "Level": "2", "Ability 1": "Disease. DC 12 CON or 1d4 CON damage (can't heal while ill). Repeat check once per day; ends on success. Die at 0 CON." }, { "Name": "Rat, Giant", "Source": "CR", "Flavor Text": "Cunning rats as large as cats. Mangy fur and wormlike tails.", "AC": "11", "HP": "5", "ATK": "1 bite +1 (1d4 + disease)", "MV": "near", "S": "-2", "D": "1", "C": "1", "I": "-2", "W": "1", "Ch": "-2", "AL": "N", "Level": "1", "Ability 1": "Disease. DC 12 CON or 1d4 CON damage (can't heal while ill). Repeat check once per day; ends on success. Die at 0 CON." }, { "Name": "Rat, Swarm", "Source": "CR", "Flavor Text": "A screeching tidal wave of clawing and biting rats.", "AC": "10", "HP": "28", "ATK": "4 bite +0 (1 + disease)", "MV": "near", "S": "-3", "D": "0", "C": "1", "I": "-3", "W": "1", "Ch": "-3", "AL": "N", "Level": "6", "Ability 1": "Disease. DC 9 CON or 1d4 CON damage (can't heal while ill). Repeat check once per day; ends on success. Die at 0 CON." }, { "Name": "Rathgamnon", "Source": "CR", "Flavor Text": "A pearl-white lion with feathered wings that stands twenty feet tall. Rathgamnon is Madeera the Covenant's mightiest servant; his blank eyes see far into the depths of time and space. He spends all eternity watching the whirl of the stars from the highest mountain in the realm of mortals, waiting for the celestial alignments that prophesy epochs of weal and woe, titanic changes to the balance of power in the cosmos, or threats to the laws of reality itself.", "AC": "17", "HP": "89", "ATK": "2 rend (near) +9 (2d10) and 2 spell +8", "MV": "double near (fly)", "S": "5", "D": "3", "C": "4", "I": "5", "W": "6", "Ch": "5", "AL": "L", "Level": "19", "Ability 1": "Legendary. Only damaged by magical sources. Hostile spells\ntargeting Rathgamnon are DC 18 to cast.", "Ability 2": "Roar. In place of attacks, all creatures who can hear within far DC 18 CHA or be rendered blind and speechless for 1d4 days.", "Ability 3": "Abjure (WIS Spell). DC 13. Self. End any hostile magical effects affecting Rathgamnon.", "Ability 4": "Abolish (WIS Spell). DC 13. One target in far takes 5d8 damage.", "Ability 5": "Anchor (WIS Spell). DC 14. One target in far DC 18 STR or bound and anchored by chains of golden runes for 1d4 rounds.", "Ability 6": "Gate (WIS Spell). DC 14. Open a portal at a point within near to another location on any plane. Lasts 1d6 rounds or until dismissed.", "Ability 7": "Portent (WIS Spell). DC 14. Lasts 2d4 rounds. One target in near has advantage or disadvantage on all attack rolls and checks.", "Ability 8": "Time Stop (WIS Spell). DC 15. Self. Time freezes for everyone except Rathgamnon for 1d4 rounds. Everything that occurs during the time freeze happens simultaneously when the spell ends." }, { "Name": "Reaver", "Source": "CR", "Flavor Text": "A knight in blackened armor riddled with cruel barbs.", "AC": "17 (plate mail + shield)", "HP": "28", "ATK": "3 bastard sword +4 (1d8 + 2)", "MV": "near", "S": "3", "D": "0", "C": "1", "I": "0", "W": "0", "Ch": "2", "AL": "C", "Level": "6", "Ability 1": "Bloodlust. +2 damage with melee weapons (included)." }, { "Name": "Remorhaz", "Source": "CR", "Flavor Text": "Massive, blue centipedes with neck hoods and red-hot spine spikes. Dwell in arctic climates.", "AC": "16", "HP": "47", "ATK": "3 bite +7 (2d6 + swallow)", "MV": "near (burrow)", "S": "5", "D": "1", "C": "2", "I": "-3", "W": "1", "Ch": "-3", "AL": "N", "Level": "10", "Ability 1": "Impervious. Immune to cold and fire.", "Ability 2": "Melt. Non-magical metal objects that touch the remorhaz melt on a d6 roll of 1-3.", "Ability 3": "Swallow. On a natural attack roll of 18-20, target is swallowed. Total darkness inside and 2d10 damage per round. Remorhaz regurgitates all swallowed if dealt at least 20 damage in one round to the inside of its gullet." }, { "Name": "Rhinoceros", "Source": "CR", "Flavor Text": "Gray-skinned bulls with single nose horns. Dwell in grasslands.", "AC": "14", "HP": "25", "ATK": "2 horn +4 (1d8)", "MV": "near", "S": "4", "D": "-1", "C": "3", "I": "-3", "W": "0", "Ch": "-3", "AL": "N", "Level": "5", "Ability 1": "Charge. Move up to double near in straight line and make 1 horn attack. If hit, x3 damage." }, { "Name": "Roc", "Source": "CR", "Flavor Text": "Dragon-sized hawks that nest in remote mountains.", "AC": "15", "HP": "69", "ATK": "4 rend +9 (2d10 + grab)", "MV": "double near (fly)", "S": "5", "D": "3", "C": "2", "I": "-2", "W": "2", "Ch": "-2", "AL": "N", "Level": "15", "Ability 1": "Grab. DC 18 STR or target held. DC 18 STR on turn to break free." }, { "Name": "Roper", "Source": "CR", "Flavor Text": "Ravenous monstrosities that look like cave rocks when their single eye and maw are closed.", "AC": "14", "HP": "31", "ATK": "4 tendril (double near) +4 (1d6 + grab) and 1 bite +4 (2d8)", "MV": "close (climb)", "S": "3", "D": "-2", "C": "4", "I": "-1", "W": "2", "Ch": "1", "AL": "N", "Level": "6", "Ability 1": "Impervious. Can only be damaged by magical sources.", "Ability 2": "Grab. DC 15 STR or target trapped in tendril. Tendril autohits target next round. DC 15 STR on turn to break free.", "Ability 3": "Pull. In place of a tendril attack, pull a grabbed target a near distance.", "Ability 4": "Tendrils. Four total. AC 18 each. 4+ damage to one severs it." }, { "Name": "Rot Flower", "Source": "CR", "Flavor Text": "Carnivorous flowers as large as a human. They reek of carrion.", "AC": "9", "HP": "10", "ATK": "1 bite +1 (1d4 + toxin)", "MV": "none", "S": "1", "D": "-3", "C": "1", "I": "-4", "W": "-3", "Ch": "-4", "AL": "N", "Level": "2", "Ability 1": "Toxin. DC 12 CON or unconscious for 1d4 rounds." }, { "Name": "Rust Monster", "Source": "CR", "Flavor Text": "A mud-brown insect as big as a wolf with two feathery antennae. Consumes metal.", "AC": "13", "HP": "19", "ATK": "2 claw +3 (1d6)", "MV": "near (climb)", "S": "2", "D": "3", "C": "1", "I": "-3", "W": "1", "Ch": "-3", "AL": "N", "Level": "4", "Ability 1": "Corrosive. Metal that touches the rust monster is destroyed on a d6 roll of 1-3." }, { "Name": "Sahuagin", "Source": "CR", "Flavor Text": "Humanoids with sea-green skin, webbed limbs, and shark teeth. Vicious hunters.", "AC": "14", "HP": "9", "ATK": "2 trident (near) +1 (1d6)", "MV": "near (swim)", "S": "1", "D": "1", "C": "0", "I": "-1", "W": "0", "Ch": "-1", "AL": "C", "Level": "2", "Ability 1": "Half-Amphibious. Must be submerged in water every 4 hours or suffocates." }, { "Name": "Salamander", "Source": "CR", "Flavor Text": "Fire-colored lizardfolk with long tails. Flame-like frills run down their backs.", "AC": "13", "HP": "24", "ATK": "2 flaming spear (close/near) +4 (1d6, ignites flammables) or 1 iron longbow (far) +2 (1d8)", "MV": "near", "S": "2", "D": "0", "C": "2", "I": "-1", "W": "1", "Ch": "-1", "AL": "C", "Level": "5", "Ability 1": "Impervious. Fire immune. Heat Aura. Creatures in close DC 12 CON on turn or 1d8 damage." }, { "Name": "Scarab, Swarm", "Source": "CR", "Flavor Text": "A chittering cloud of iridescent, oval-shaped beetles.", "AC": "13", "HP": "14", "ATK": "2 bite +3 (1d6)", "MV": "near (fly)", "S": "-1", "D": "3", "C": "1", "I": "-3", "W": "0", "Ch": "-3", "AL": "N", "Level": "3" }, { "Name": "Scarecrow", "Source": "CR", "Flavor Text": "Ragged clothes and a painted burlap head stuffed with straw. Possessed by a malicious spirit.", "AC": "12", "HP": "15", "ATK": "2 claws +2 (1d6) or 1 scream", "MV": "near", "S": "2", "D": "2", "C": "2", "I": "0", "W": "0", "Ch": "2", "AL": "C", "Level": "3", "Ability 1": "Scream. Creatures who hear in double near DC 12 CHA or paralyzed for 1d4 rounds." }, { "Name": "Scorpion", "Source": "CR", "Flavor Text": "Desert-dwelling arachnids with pincers and curved tail stingers.", "AC": "11", "HP": "1", "ATK": "1 sting +1 (1 + poison)", "MV": "near (climb)", "S": "-4", "D": "1", "C": "0", "I": "-4", "W": "0", "Ch": "-4", "AL": "N", "Level": "0", "Ability 1": "Poison. DC 9 CON or go to 0 HP." }, { "Name": "Scorpion, Giant", "Source": "CR", "Flavor Text": "Chitin-plated scorpions as big as camels.", "AC": "14", "HP": "13", "ATK": "1 claw +2 (1d6 + grab) and 1 sting +2 (1d4 + poison)", "MV": "near (climb)", "S": "2", "D": "2", "C": "0", "I": "-4", "W": "0", "Ch": "-4", "AL": "N", "Level": "3", "Ability 1": "Grab. DC 12 STR or target held. DC 12 STR on turn to break free. Poison. DC 12 CON or go to 0 HP." }, { "Name": "Shadow", "Source": "CR", "Flavor Text": "Flitting, sentient shadows in the vague shape of a human.", "AC": "12", "HP": "15", "ATK": "2 touch +2 (1d4 + drain)", "MV": "near (fly)", "S": "-4", "D": "2", "C": "2", "I": "-2", "W": "0", "Ch": "-1", "AL": "C", "Level": "3", "Ability 1": "Drain. DC 12 CON or target's STR reduced by 1. At 0 STR, target dies and becomes a shadow." }, { "Name": "Shambling Mound", "Source": "CR", "Flavor Text": "Fetid piles of slimy vegetation animated to life by lightning.", "AC": "14", "HP": "20", "ATK": "2 slam +3 (1d6 + engulf)", "MV": "near", "S": "3", "D": "-2", "C": "2", "I": "-3", "W": "0", "Ch": "-3", "AL": "N", "Level": "4", "Ability 1": "Impervious. Fire immune. Healed by electricity.", "Ability 2": "Engulf. If a target is hit by both slams in same round, it is pulled into shambling mound's body and suffocates in 2d4 rounds. DC 15 STR on turn to escape." }, { "Name": "Shark", "Source": "CR", "Flavor Text": "Bloodthirsty apex predators of the sea. Gray, torpedo-like body.", "AC": "11", "HP": "15", "ATK": "1 bite +3 (1d10)", "MV": "near (swim)", "S": "3", "D": "1", "C": "2", "I": "-3", "W": "1", "Ch": "-3", "AL": "N", "Level": "3" }, { "Name": "Shark, Megalodon", "Source": "CR", "Flavor Text": "Primordial sharks the size of whales. Savage hunters.", "AC": "13", "HP": "8", "ATK": "3 bite +7 (2d8)", "MV": "Double near (swim)", "S": "5", "D": "1", "C": "2", "I": "-3", "W": "1", "Ch": "-3", "AL": "N", "Level": "8", "Ability 1": "Fearless. Immune to morale checks." }, { "Name": "Siren", "Source": "CR", "Flavor Text": "Baleful fey with dove wings and iridescent fish scales. Their singing entrances listeners.", "AC": "12", "HP": "18", "ATK": "2 claw +2 (1d6) or 1 song", "MV": "near (swim, fly)", "S": "0", "D": "2", "C": "0", "I": "2", "W": "2", "Ch": "4", "AL": "C", "Level": "4", "Ability 1": "Song. Enemies who can hear within double near DC 15 CHA or paralyzed 1d4 rounds. Immune for 1 day if passed check." }, { "Name": "Skeleton", "Source": "CR", "Flavor Text": "A bleach-boned skeleton with red pinpoints of light in its eyes.", "AC": "13 (chainmail)", "HP": "11", "ATK": "1 shortsword +1 (1d6) or 1 shortbow (far) +0 (1d4)", "MV": "near", "S": "1", "D": "0", "C": "2", "I": "-2", "W": "0", "Ch": "-1", "AL": "C", "Level": "2", "Ability 1": "Undead. Immune to morale checks." }, { "Name": "Smilodon", "Source": "CR", "Flavor Text": "Prehistoric tigers with long canine fangs. They hunt grasslands and ice fields.", "AC": "12", "HP": "14", "ATK": "2 bite +3 (1d6)", "MV": "near", "S": "3", "D": "2", "C": "1", "I": "-3", "W": "1", "Ch": "-3", "AL": "N", "Level": "3" }, { "Name": "Snake, Cobra", "Source": "CR", "Flavor Text": "A weaving serpent with a neck hood and lethal venom.", "AC": "12", "HP": "4", "ATK": "1 bite +2 (1 + poison)", "MV": "near", "S": "-3", "D": "2", "C": "0", "I": "-3", "W": "0", "Ch": "-3", "AL": "N", "Level": "1", "Ability 1": "Poison. DC 18 CON or go to 0 HP with a death timer of 1." }, { "Name": "Snake, Giant", "Source": "CR", "Flavor Text": "An enormous, mottled serpent that can swallow a cow whole.", "AC": "12", "HP": "23", "ATK": "2 bite +4 (1d6) and 1 constrict (near)", "MV": "near (climb)", "S": "3", "D": "2", "C": "1", "I": "-2", "W": "0", "Ch": "-2", "AL": "N", "Level": "5", "Ability 1": "Constrict. Contested STR to hold target immobile for one round." }, { "Name": "Snake, Swarm", "Source": "CR", "Flavor Text": "A roiling wave of snakes darting and flowing across the ground.", "AC": "12", "HP": "19", "ATK": "3 bite +2 (1d4 + poison)", "MV": "near", "S": "-3", "D": "2", "C": "1", "I": "-3", "W": "0", "Ch": "-3", "AL": "N", "Level": "4", "Ability 1": "Poison. DC 12 CON or go to 0 HP in 1d4 rounds." }, { "Name": "Soldier", "Source": "CR", "Flavor Text": "An armed footsoldier trained in the ways of battlefield combat.", "AC": "15 (chainmail + shield)", "HP": "10", "ATK": "1 longsword +2 (1d8) or 1 crossbow (far) +1 (1d6)", "MV": "near", "S": "1", "D": "0", "C": "1", "I": "0", "W": "0", "Ch": "0", "AL": "L", "Level": "2" }, { "Name": "Sphinx", "Source": "CR", "Flavor Text": "A winged, leonine oracle who can see into time and space and often speaks in riddles. Lives in isolated mountains.", "AC": "16", "HP": "42", "ATK": "3 claw +7 (1d10) or 2 spell +5", "MV": "double near (fly)", "S": "4", "D": "1", "C": "2", "I": "4", "W": "4", "Ch": "3", "AL": "L", "Level": "9", "Ability 1": "Roar. In place of attacks, all creatures who can hear within far DC 18 CHA or paralyzed 1d4 rounds.", "Ability 2": "Gate (WIS Spell). DC 14. Open a portal at a point within near to another location on any plane. Lasts 1d6 rounds or until dismissed.", "Ability 3": "Omens (WIS Spell). DC 12. Self. ADV on all actions for 1d4 rounds.", "Ability 4": "Riddle (WIS Spell). DC 12. One target in far DC 15 INT or stupefied 1d4 rounds.", "Ability 5": "Time Bend (WIS Spell). DC 14. One target in near frozen in time for 1d4 rounds.", "Ability 6": "Unmake (WIS Spell). DC 13. One target in far takes 3d8 damage." }, { "Name": "Spider", "Source": "CR", "Flavor Text": "Silent, web-weaving arachnids with a flesh-dissolving venom.", "AC": "11", "HP": "1", "ATK": "1 bite +1 (1 + poison)", "MV": "near (climb)", "S": "-4", "D": "1", "C": "0", "I": "-4", "W": "0", "Ch": "-4", "AL": "N", "Level": "0", "Ability 1": "Poison. DC 9 CON or take 1d4 damage." }, { "Name": "Spider, Giant", "Source": "CR", "Flavor Text": "Bulbous abdomen and eight, spindly legs. Dwells high in trees or caves and ambushes prey, capturing them to eat later.", "AC": "13", "HP": "13", "ATK": "1 bite +3 (1d4 + poison)", "MV": "near (climb)", "S": "2", "D": "3", "C": "0", "I": "-2", "W": "1", "Ch": "-2", "AL": "N", "Level": "3", "Ability 1": "Poison. DC 12 CON or paralyzed 1d4 hours." }, { "Name": "Spider, Swarm", "Source": "CR", "Flavor Text": "A scurrying carpet of spiders.", "AC": "13", "HP": "9", "ATK": "1 bite +3 (1d4 + poison)", "MV": "near (climb)", "S": "-1", "D": "3", "C": "0", "I": "-3", "W": "1", "Ch": "-3", "AL": "N", "Level": "2", "Ability 1": "Poison. DC 12 CON or paralyzed 1d4 rounds." }, { "Name": "Stingbat", "Source": "CR", "Flavor Text": "Darting, orange insect-bat with four wings and needlelike beak.", "AC": "12", "HP": "4", "ATK": "1 beak +2 (1d4 + blood drain)", "MV": "near (fly)", "S": "-2", "D": "2", "C": "0", "I": "-2", "W": "0", "Ch": "-2", "AL": "N", "Level": "1", "Ability 1": "Blood Drain. Attach to bitten target; auto-hit the next round. DC 9 STR on turn to remove." }, { "Name": "Strangler", "Source": "CR", "Flavor Text": "A gray-skinned, gaunt creature with four ropy limbs tipped in sucker-lined claws.", "AC": "12", "HP": "14", "ATK": "2 claws +2 (1d6)", "MV": "near (climb)", "S": "-2", "D": "2", "C": "1", "I": "-2", "W": "0", "Ch": "-2", "AL": "C", "Level": "3", "Ability 1": "Stealthy. ADV on DEX checks to hide and sneak.", "Ability 2": "Strangle. Deals x2 damage against surprised creatures." }, { "Name": "The Tarrasque", "Source": "CR", "Flavor Text": "A colossal, four-legged reptile with crocodilian jaws, amber scales, and a diamond-hard, spiked carapace. It towers overhead like a mountain, able to swallow entire villages in one gulp. The tarrasque hibernates deep in the earth or at the bottom of the sea for centuries, only awakening long enough to fill its vast belly in an indiscriminate rampage of terror and destruction. There is only one tarrasque, and it is the most dreaded creature to walk the earth.", "AC": "22", "HP": "140", "ATK": "4 thrash (near) +13 (3d10 + sever) and 1 bite (near) +13 (5d10 + sever + swallow)", "MV": "triple near (burrow, swim)", "S": "7", "D": "2", "C": "5", "I": "-3", "W": "1", "Ch": "-3", "AL": "N", "Level": "30", "Ability 1": "Legendary. Only damaged by magical sources. Hostile spells targeting the tarrasque are DC 18 to cast.", "Ability 2": "Deep Dweller. Immune to harm from fire and cold. Amphibious.", "Ability 3": "Permanent Death. Cannot be permanently killed unless a wish spell is cast on it while it is at 0 HP.", "Ability 4": "Rampage. In place of attacks, move far in a straight line and make one bite attack. On a hit, triple damage.", "Ability 5": "Reflective Carapace. Immune to rays, blasts, or bolts of energy. 1:6 chance these are reflected back at their originator.", "Ability 6": "Regeneration. Regains 4d10 lost HP at the beginning of its turn.", "Ability 7": "Sever. On a natural attack roll of 18+, the attack also severs a random limb. 1d6: 1. Head, 2-4. Arm, 5-6. Leg.", "Ability 8": "Swallow. DC 18 STR or swallowed whole. Total darkness inside and 4d10 damage per round. Tarrasque regurgitates all swallowed if dealt at least 30 damage in one round to the inside of its gullet." }, { "Name": "The Ten-Eyed Oracle", "Source": "CR", "Flavor Text": "A floating mass of rubbery skin crusted with barnacles. Its ten eyestalks writhe like snakes, and a deep, circular scar mars its central body, blinding what was once a large eye above a lipless maw. The Ten-Eyed Oracle stalks the Shadowdark, burbling mad prophesies and somehow moving freely between the lightless fathoms of the earth. The keepers of the deep lore suspect The Ten-Eyed Oracle was once a benevolent ally of mankind, but an unknown calamity drove it to insanity and reckless hatred.", "AC": "17", "HP": "85", "ATK": "2d4 eyestalk ray", "MV": "near (fly)", "S": "4", "D": "5", "C": "4", "I": "5", "W": "4", "Ch": "4", "AL": "C", "Level": "18", "Ability 1": "Legendary. Only damaged by magical sources. Hostile spells targeting The Ten-Eyed Oracle are DC 18 to cast.", "Ability 2": "Eyestalk Ray. Each ray can shoot once per round and target one creature or an object up to 1,000 pounds (up to four on same target).\n1. Charm. DC 15 CHA or become ally for 1d4 rounds.\n2. Hold. DC 15 STR or paralyzed 1d4 rounds.\n3. Sleep. DC 15 WIS or asleep 1d4 rounds.\n4. Polymorph. DC 15 INT or turned into vermin for 1d4 rounds.\n5. Cancel. DC 15 DEX or all magical effects on target end.\n6. Confusion. DC 15 WIS or attack a random ally within near.\n7. Telekinesis. DC 15 STR or hover target up to double near.\n8. Disintegrate. DC 15 DEX or 5d8 damage (object destroyed).\n9. Petrify. DC 15 CON or petrified.\n10. Death. DC 15 CON or drop to 0 HP with a death timer of 1." }, { "Name": "The Wandering Merchant", "Source": "CR", "Flavor Text": "A cheerful merchant who appears to be a hale, middle-aged human man with a handlebar mustache. He wears a white shirt, breeches, and leather apron, and he hauls a towering backpack bursting at the seams. Few know the merchant's true nature and origins, though some theorize he is an immortal being or a god (they are not entirely incorrect). The Wandering Merchant always has something useful, far-flung, or incredible to sell at a reasonable price, and there's no telling when or where he'll show up next...", "AC": "16 (mithral chainmail)", "HP": "71", "ATK": "4 +3 vorpal bastard sword +9 (1d10 + lop)", "MV": "near", "S": "3", "D": "3", "C": "4", "I": "3", "W": "4", "Ch": "5", "AL": "L", "Level": "15", "Ability 1": "Legendary. Only damaged by magical sources. Hostile spells targeting The Wandering Merchant are DC 18 to cast.", "Ability 2": "Amulet of Rahm-Hotep. In place of attacks, teleport to a random location in the multiverse.", "Ability 3": "Bottomless Bag: Contains 200 gear slots in magical sub-pockets. Weighs as much as a normal backpack. The Wandering Merchant can summon it to himself from anywhere by snapping his fingers.", "Ability 4": "Dice of Truth: A set of three six-sided dice whose rolls cannot be magically or mundanely altered in any way.", "Ability 5": "Lop. On a natural attack roll of 18-20, behead the target.", "Ability 6": "Reckoning. Any creature who steals from The Wandering Merchant develops a curse. Over the next 2d8 days, that creature turns into a cockatrice. This curse can only be lifted by a wish spell or by returning the stolen goods.", "Ability 7": "Strange Lands. The Wandering Merchant does not suffer any ill effects from the natural environment he does not wish to suffer." }, { "Name": "Thief", "Source": "CR", "Flavor Text": "A cat burglar in a black cloak.", "AC": "13 (leather)", "HP": "13", "ATK": "1 dagger (close/near) +2 (1d4) or 1 shortsword +0 (1d6)", "MV": "near", "S": "0", "D": "2", "C": "0", "I": "0", "W": "0", "Ch": "1", "AL": "N", "Level": "3", "Ability 1": "Stealthy. ADV on DEX checks to sneak and hide.", "Ability 2": "Backstab. Deal x2 damage against surprised creatures." }, { "Name": "Thug", "Source": "CR", "Flavor Text": "A bruised and boorish ruffian.", "AC": "13 (leather + shield)", "HP": "4", "ATK": "1 shortsword +1 (1d6)", "MV": "near", "S": "1", "D": "0", "C": "0", "I": "-1", "W": "1", "Ch": "-1", "AL": "C", "Level": "1" }, { "Name": "Treant", "Source": "CR", "Flavor Text": "Peaceful, slow-moving trees with merry eyes and tremulous voices. They protect the forest.", "AC": "14", "HP": "38", "ATK": "3 slam +8 (1d10) or 1 rock (far) +8 (2d12)", "MV": "near", "S": "4", "D": "-1", "C": "2", "I": "2", "W": "3", "Ch": "1", "AL": "N", "Level": "8", "Ability 1": "Animate Tree. 2/day. In place of attacks, one tree within near awakens as a treant ally without this ability. Reverts back in 1 day." }, { "Name": "Troll", "Source": "CR", "Flavor Text": "Green, lanky giants with warty skin and territorial rage. Lair in deep forests and swamps.", "AC": "12", "HP": "24", "ATK": "2 claw +4 (1d6) and 1 bite +4 (1d10)", "MV": "near", "S": "3", "D": "2", "C": "2", "I": "-1", "W": "0", "Ch": "-1", "AL": "C", "Level": "5", "Ability 1": "Regenerate. Regains 2d6 HP on its turn unless its wounds are cauterized with fire or acid." }, { "Name": "Troll, Frost", "Source": "CR", "Flavor Text": "Rime-covered trolls with blue skin and flinty, black eyes. They stalk arctic lands and frozen boreal forests.", "AC": "13", "HP": "34", "ATK": "2 claw +5 (1d8) and 1 bite +5 (1d12)", "MV": "near", "S": "3", "D": "2", "C": "3", "I": "-1", "W": "0", "Ch": "-1", "AL": "C", "Level": "7", "Ability 1": "Impervious. Cold and fire immune.", "Ability 2": "Regenerate. Regains 2d6 HP on its turn unless its wounds are cauterized with acid." }, { "Name": "Unicorn", "Source": "CR", "Flavor Text": "A silvery horse with a flowing mane and a single spiral horn.", "AC": "12", "HP": "20", "ATK": "1 hooves +3 (1d6)", "MV": "double near", "S": "3", "D": "2", "C": "2", "I": "1", "W": "2", "Ch": "3", "AL": "L", "Level": "4", "Ability 1": "Healing Horn. A touch heals 2d6 HP or ends one curse or disease." }, { "Name": "Vampire", "Source": "CR", "Flavor Text": "Pale, blood-drinking undead of supreme power and wickedness. They loathe sunlight and protect", "AC": "15", "HP": "52", "ATK": "3 bite +7 (1d8 + blood drain) or 1 charm", "MV": "near (climb)", "S": "4", "D": "3", "C": "3", "I": "1", "W": "3", "Ch": "4", "AL": "C", "Level": "11", "Ability 1": "Supreme Undead. Immune to morale checks. Only damaged by magical sources.", "Ability 2": "Blood Drain. Vampire heals 2d6 HP and target loses 1d4 CON. At 0 CON, target dies and rises as a", "Ability 3": "Charm. One humanoid target who can see vampire within near, DC 15 CHA or under vampire's control", "Ability 4": "Shapechange. In place of attacks, turn into a bat, wolf, or back into regular form.", "Ability 5": "Vampire. Must sleep in a coffin daily or loses 2d6 HP each day that can't be healed until resting in coffin. Takes 3d8 damage each round while in direct sunlight. Cannot be killed unless pierced through heart with a wooden stake while at 0 HP." }, { "Name": "Vampire Spawn", "Source": "CR", "Flavor Text": "Lesser, feral vampires born from the bite of their vampiric sires. Bloodthirsty and savage. They rarely leave a victim alive.", "AC": "13 (leather)", "HP": "25", "ATK": "2 bite +4 (1d8 + blood drain)", "MV": "near (climb)", "S": "3", "D": "2", "C": "3", "I": "-1", "W": "1", "Ch": "2", "AL": "C", "Level": "5", "Ability 1": "Greater Undead. Immune to morale checks. Only damaged by silver or magical sources.", "Ability 2": "Blood Drain. Vampire heals 2d6 HP and target loses 1d4 CON. At 0 CON, target dies and rises as an allied vampire spawn.", "Ability 3": "Vampire. Must sleep in a coffin daily or loses 2d6 HP each day that can't be healed until resting in coffin. Takes 3d8 damage each round while in direct sunlight. Cannot be killed unless pierced through heart with a wooden stake while at 0 HP." }, { "Name": "Violet Fungus", "Source": "CR", "Flavor Text": "Child-sized, creeping fungi with neon purple caps. Their whiplike roots decompose living flesh.", "AC": "7", "HP": "9", "ATK": "2 tendril (near) +0 (1d4)", "MV": "close", "S": "-3", "D": "-2", "C": "0", "I": "-4", "W": "-3", "Ch": "-4", "AL": "N", "Level": "2" }, { "Name": "Viperian", "Source": "CR", "Flavor Text": "Lithe, snake-headed people with cobra hoods and emerald green scales covering their bodies.", "AC": "13", "HP": "13", "ATK": "2 scimitar +2 (1d6) or 1 javelin (close/far) +2 (1d4)", "MV": "near", "S": "1", "D": "1", "C": "0", "I": "0", "W": "1", "Ch": "0", "AL": "C", "Level": "3" }, { "Name": "Viperian, Ophid", "Source": "CR", "Flavor Text": "A giant anaconda body merges into a humanoid torso with a large snake head. It wears golden torcs and strings of glittering moonstones.", "AC": "14", "HP": "28", "ATK": "3 falchion +5 (1d10) or 2 longbow (far) +3 (1d8)", "MV": "near (climb)", "S": "4", "D": "2", "C": "1", "I": "1", "W": "1", "Ch": "1", "AL": "C", "Level": "6", "Ability 1": "Impervious. Can only be harmed by magical sources." }, { "Name": "Viperian, Wizard", "Source": "CR", "Flavor Text": "Thin viperians with scales tinged in black. They wear silk robes and silver, serpentine jewelry.", "AC": "13", "HP": "37", "ATK": "1 dagger (close/near) +2 (1d4) or 2 spell +5", "MV": "near", "S": "0", "D": "1", "C": "0", "I": "3", "W": "1", "Ch": "1", "AL": "C", "Level": "8", "Ability 1": "Hiss (INT Spell). DC 12. End one spell within far.", "Ability 2": "Summon Cobra (INT Spell). DC 13. Summon 1d4 loyal cobras that appear within near. They leave in 1d4 rounds.", "Ability 3": "Venom (INT Spell). DC 12. One target in far takes 2d8 damage.", "Ability 4": "Whispers (INT Spell). DC 14. Focus. All enemies within near of viperian wizard have DISADV on spellcasting checks for the duration." }, { "Name": "Vulture", "Source": "CR", "Flavor Text": "Scavenger birds with black feathers, hunched backs, and bald heads.", "AC": "10", "HP": "5", "ATK": "1 tear +1 (1d4)", "MV": "near (fly)", "S": "1", "D": "0", "C": "1", "I": "-3", "W": "1", "Ch": "-3", "AL": "N", "Level": "1", "Ability 1": "Carrion Tracker. Can track dead flesh unerringly within a mile." }, { "Name": "Wasp, Giant", "Source": "CR", "Flavor Text": "Man-sized wasps with glossy, yellow-striped abdomens.", "AC": "13", "HP": "9", "ATK": "1 sting +3 (1d6+venom)", "MV": "near (fly)", "S": "1", "D": "3", "C": "0", "I": "-3", "W": "0", "Ch": "-3", "AL": "N", "Level": "2", "Ability 1": "Venom. DC 9 CON or go to 0 HP." }, { "Name": "Wererat", "Source": "CR", "Flavor Text": "A slinking, rat-faced humanoid covered in mangy fur.", "AC": "13 (leather)", "HP": "14", "ATK": "2 bite +2 (1d6)", "MV": "near (climb)", "S": "1", "D": "2", "C": "1", "I": "-1", "W": "1", "Ch": "-1", "AL": "C", "Level": "3", "Ability 1": "Impervious. Only damaged by silver or magic sources.", "Ability 2": "Lycanthropy. If 12 or more damage from the same wererat, contract lycanthropy." }, { "Name": "Werewolf", "Source": "CR", "Flavor Text": "A bipedal, wolf-faced humanoid covered in brown fur.", "AC": "12", "HP": "20", "ATK": "2 rend +3 (1d6)", "MV": "double near", "S": "3", "D": "2", "C": "2", "I": "0", "W": "1", "Ch": "0", "AL": "C", "Level": "4", "Ability 1": "Impervious. Only damaged by silver or magic sources.", "Ability 2": "Lycanthropy. If 12 or more damage from the same werewolf, contract lycanthropy." }, { "Name": "Wight", "Source": "CR", "Flavor Text": "A pale, armored undead warrior with sinister intelligence.", "AC": "14 (chainmail)", "HP": "15", "ATK": "1 bastard sword +3 (1d10) and 1 life drain +3", "MV": "near", "S": "3", "D": "1", "C": "2", "I": "1", "W": "0", "Ch": "3", "AL": "C", "Level": "3", "Ability 1": "Greater Undead. Immune to morale checks. Only damaged by silver or magical sources.", "Ability 2": "Life Drain. 1d4 CON damage. Death if reduced to 0 CON." }, { "Name": "Will-O'-Wisp", "Source": "CR", "Flavor Text": "A bobbing marsh light animated by an evil spirit. It tries to lead the living into danger.", "AC": "13", "HP": "10", "ATK": "1 life drain +3", "MV": "near (fly)", "S": "-3", "D": "3", "C": "1", "I": "-1", "W": "-1", "Ch": "-2", "AL": "C", "Level": "2", "Ability 1": "Life Drain. 1d4 CON damage. Death if reduced to 0 CON." }, { "Name": "Wolf", "Source": "CR", "Flavor Text": "A giant canine with a gray pelt, yellow eyes, and dripping jaws.", "AC": "12", "HP": "10", "ATK": "1 bite +2 (1d6)", "MV": "double near", "S": "2", "D": "2", "C": "1", "I": "-2", "W": "1", "Ch": "0", "AL": "N", "Level": "2", "Ability 1": "Pack Hunter. Deals +1 damage while an ally is close." }, { "Name": "Wolf, Dire", "Source": "CR", "Flavor Text": "A massive wolf with spines of black bone along its brow ridge and back.", "AC": "12", "HP": "19", "ATK": "2 bite +4 (1d8)", "MV": "double near", "S": "3", "D": "2", "C": "1", "I": "-1", "W": "1", "Ch": "0", "AL": "N", "Level": "4", "Ability 1": "Pack Hunter. Deals +1 damage while next to an ally." }, { "Name": "Wolf, Winter", "Source": "CR", "Flavor Text": "Sinister, white-pelted wolves with piercing blue eyes. From the fey realms of eternal winter.", "AC": "12", "HP": "23", "ATK": "2 bite +4 (1d6)", "MV": "double near", "S": "3", "D": "2", "C": "1", "I": "0", "W": "1", "Ch": "0", "AL": "C", "Level": "5", "Ability 1": "Impervious. Cold immune.", "Ability 2": "Frost Breath. Fills a near-sized cube extending from winter wolf. DC 15 DEX or 3d8 damage. Cannot use again for 1d4 rounds." }, { "Name": "Worg", "Source": "CR", "Flavor Text": "Bat-faced wolves that speak Goblin and often serve as war mounts for goblinkind.", "AC": "11", "HP": "14", "ATK": "1 bite +3 (1d6)", "MV": "double near", "S": "2", "D": "1", "C": "1", "I": "-2", "W": "1", "Ch": "-2", "AL": "C", "Level": "3" }, { "Name": "Wraith", "Source": "CR", "Flavor Text": "A shadowy spirit seething with anger and malice. Its presence is unsettling to animals.", "AC": "14", "HP": "36", "ATK": "3 death touch +6 (1d10 + life drain)", "MV": "near (fly)", "S": "-4", "D": "4", "C": "0", "I": "0", "W": "0", "Ch": "3", "AL": "C", "Level": "8", "Ability 1": "Greater Undead. Immune to morale checks. Only damaged by silver or magical sources. ", "Ability 2": "Incorporeal. In place of attacks, become corporeal or incorporeal.", "Ability 3": "Life Drain. 1d4 CON damage. Death if reduced to 0 CON." }, { "Name": "Wyvern", "Source": "CR", "Flavor Text": "Dragon-cousins with a large tail stinger, mottled lizard skin, and leathery wings.", "AC": "15", "HP": "37", "ATK": "2 rend +6 (1d8) and 1 stinger +6 (1d6 + poison)", "MV": "double near (fly)", "S": "4", "D": "2", "C": "1", "I": "-3", "W": "1", "Ch": "-3", "AL": "N", "Level": "8", "Ability 1": "Poison. DC 15 CON or take 2d10 damage." }, { "Name": "Zombie", "Source": "CR", "Flavor Text": "Lurching and decomposed undead that hunt in mobs.", "AC": "8", "HP": "11", "ATK": "1 slam +2 (1d6)", "MV": "near", "S": "2", "D": "-2", "C": "2", "I": "-2", "W": "-2", "Ch": "-3", "AL": "C", "Level": "2", "Ability 1": "Undead. Immune to morale checks.", "Ability 2": "Relentless. If zombie reduced to 0 HP by a non-magical source, DC 15 CON to go to 1 HP instead." }]
];

(function () {

    const ALL_MONSTERS = Array.isArray(MONSTERS[0])
        ? MONSTERS[0]
        : MONSTERS;

    const card = document.getElementById("monsterCard");
    const search = document.getElementById("monsterSearch");
    const levelFilter = document.getElementById("monsterLevelFilter");
    const monsterSelect = document.getElementById("monsterSelect");

    let currentMonster = null;

    const levels = [
        ...new Set(
            ALL_MONSTERS
                .filter(m => m && m.Level)
                .map(m => m.Level)
                .filter(level => level !== "*")
        )
    ].sort((a, b) => Number(a) - Number(b));

    levels.forEach(level => {

        const option = document.createElement("option");

        option.value = level;
        option.textContent = `Level ${level}`;

        levelFilter.appendChild(option);

    });

    function populateMonsterDropdown() {

        const currentValue = monsterSelect.value;

        monsterSelect.innerHTML =
            '<option value="">Select Monster...</option>';

        getFilteredMonsters()
            .sort((a, b) => {

                const levelA =
                    parseInt(a.Level) || 0;

                const levelB =
                    parseInt(b.Level) || 0;

                if (levelA !== levelB) {
                    return levelA - levelB;
                }

                return a.Name.localeCompare(b.Name);

            })
            .forEach(monster => {

                const option =
                    document.createElement("option");

                option.value =
                    monster.Name;

                option.textContent =
                    `Lv ${monster.Level} - ${monster.Name}`;

                monsterSelect.appendChild(option);

            });

        if (
            [...monsterSelect.options]
                .some(o => o.value === currentValue)
        ) {
            monsterSelect.value = currentValue;
        }

    }

    function getAbilities(monster) {

        let output = "";

        for (let i = 1; i <= 10; i++) {

            const key = `Ability ${i}`;

            if (monster[key]) {
                output += `
            <li>${monster[key]}</li>
        `;
            }
        }

        return output;

    }

    function renderMonster(monster) {

        if (!monster) {

            card.innerHTML =
                "<p>No monster selected.</p>";

            return;

        }

        currentMonster = monster;

        monsterSelect.value =
            monster.Name;

        const abilities =
            getAbilities(monster);

        card.innerHTML = `

    <div class="monster-name">
        ${monster.Name || ""}
    </div>

    <div class="monster-flavor">
        ${monster["Flavor Text"] || ""}
    </div>

    <div class="monster-main-stats">

        <div class="monster-main-stat">
            <strong>AC</strong> ${monster.AC || "-"}
        </div>

        <div class="monster-main-stat">
            <strong>HP</strong> ${monster.HP || "-"}
        </div>

        <div class="monster-main-stat">
            <strong>MV</strong> ${monster.MV || "-"}
        </div>

        <div class="monster-main-stat">
            <strong>AL</strong> ${monster.AL || "-"}
        </div>

        <div class="monster-main-stat">
            <strong>LV</strong> ${monster.Level || "-"}
        </div>

        <div class="monster-main-stat">
            <strong>ATK</strong> ${monster.ATK || "-"}
        </div>

    </div>

    <div class="monster-stat-grid">

        <div class="monster-stat">
            <div class="monster-stat-label">STR</div>
            <div class="monster-stat-value">${monster.S || 0}</div>
        </div>

        <div class="monster-stat">
            <div class="monster-stat-label">DEX</div>
            <div class="monster-stat-value">${monster.D || 0}</div>
        </div>

        <div class="monster-stat">
            <div class="monster-stat-label">CON</div>
            <div class="monster-stat-value">${monster.C || 0}</div>
        </div>

        <div class="monster-stat">
            <div class="monster-stat-label">INT</div>
            <div class="monster-stat-value">${monster.I || 0}</div>
        </div>

        <div class="monster-stat">
            <div class="monster-stat-label">WIS</div>
            <div class="monster-stat-value">${monster.W || 0}</div>
        </div>

        <div class="monster-stat">
            <div class="monster-stat-label">CHA</div>
            <div class="monster-stat-value">${monster.Ch || 0}</div>
        </div>

    </div>

    ${abilities
                ? `
        <div class="monster-abilities">
            <strong>Abilities</strong>
            <ul>
                ${abilities}
            </ul>
        </div>
        `
                : ""
            }
`;

    }

    function getFilteredMonsters() {

        const searchText =
            search.value
                .toLowerCase()
                .trim();

        const level =
            levelFilter.value;

        return ALL_MONSTERS.filter(monster => {

            if (
                !monster ||
                !monster.Name
            ) {
                return false;
            }

            const nameMatch =
                monster.Name
                    .toLowerCase()
                    .includes(searchText);

            const levelMatch =
                !level ||
                String(monster.Level) === level;

            return (
                nameMatch &&
                levelMatch
            );

        });

    }

    function refreshDisplay() {

        populateMonsterDropdown();

        const results =
            getFilteredMonsters();

        if (results.length) {

            renderMonster(results[0]);

        } else {

            card.innerHTML =
                "<p>No monsters found.</p>";

        }

    }

    search.addEventListener(
        "input",
        refreshDisplay
    );

    levelFilter.addEventListener(
        "change",
        refreshDisplay
    );

    monsterSelect.addEventListener(
        "change",
        () => {

            const monster =
                ALL_MONSTERS.find(
                    m =>
                        m.Name ===
                        monsterSelect.value
                );

            if (monster) {

                renderMonster(
                    monster
                );

            }

        }
    );

    document
        .getElementById(
            "randomMonster"
        )
        .addEventListener(
            "click",
            () => {

                const results =
                    getFilteredMonsters();

                if (!results.length)
                    return;

                const monster =
                    results[
                    Math.floor(
                        Math.random() *
                        results.length
                    )
                    ];

                renderMonster(
                    monster
                );

            }
        );

    /* ---------- Pinned monsters ---------- */

    const PIN_KEY = "shadowdarkToolboxPinnedMonsters";
    const pinnedWrap = document.getElementById("pinnedMonsters");
    const pinnedCount = document.getElementById("pinnedCount");
    let pinned = [];

    function esc(value) {
        return String(value).replace(/[&<>"']/g, c => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[c]));
    }

    function parseHp(value) {
        const n = parseInt(value, 10);
        return Number.isNaN(n) ? null : n;
    }

    function findMonster(name) {
        return ALL_MONSTERS.find(m => m && m.Name === name);
    }

    function savePinned() {
        try {
            localStorage.setItem(PIN_KEY, JSON.stringify(pinned));
        } catch (e) { }
    }

    function loadPinned() {
        try {
            const raw = localStorage.getItem(PIN_KEY);
            if (!raw) return [];
            const data = JSON.parse(raw);
            if (!Array.isArray(data)) return [];
            return data.filter(p => p && findMonster(p.name));
        } catch (e) {
            return [];
        }
    }

    function pinMonster(monster) {
        if (!monster) return;

        const sameName = pinned.filter(p => p.name === monster.Name);
        const num = sameName.length
            ? Math.max(...sameName.map(p => p.num)) + 1
            : 1;
        const hp = parseHp(monster.HP);

        pinned.push({
            id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
            name: monster.Name,
            num: num,
            hp: hp,
            maxHp: hp,
            note: ""
        });

        savePinned();
        renderPinned();
    }

    function refreshHp(el, pin, syncInputs) {
        if (syncInputs) {
            el.querySelector(".pin-hp-cur").value = pin.hp === null ? "" : pin.hp;
            el.querySelector(".pin-hp-max").value = pin.maxHp === null ? "" : pin.maxHp;
        }

        const pct = (pin.maxHp > 0 && pin.hp !== null)
            ? Math.max(0, Math.min(100, (pin.hp / pin.maxHp) * 100))
            : 0;

        const fill = el.querySelector(".pin-bar-fill");
        fill.style.width = pct + "%";
        fill.classList.toggle("low", pct <= 50);

        el.classList.toggle("is-down", pin.hp !== null && pin.hp <= 0);
    }

    function buildPinCard(pin) {
        const monster = findMonster(pin.name);
        const el = document.createElement("div");
        el.className = "pin-card";

        const statDefs = [
            ["STR", "S"], ["DEX", "D"], ["CON", "C"],
            ["INT", "I"], ["WIS", "W"], ["CHA", "Ch"]
        ];

        const statGrid = statDefs.map(([label, key]) => `
            <div class="monster-stat">
                <div class="monster-stat-label">${label}</div>
                <div class="monster-stat-value">${esc(monster[key] || 0)}</div>
            </div>`).join("");

        const abilities = getAbilities(monster);

        el.innerHTML = `
            <div class="pin-head">
                <div class="pin-title">
                    <span class="pin-title-text">${esc(monster.Name)}</span><span class="pin-num">#${pin.num}</span>
                </div>
                <button type="button" class="pin-unpin" title="Unpin" aria-label="Unpin ${esc(monster.Name)} ${pin.num}">&times;</button>
            </div>

            <div class="pin-quick">
                <span><strong>AC</strong> ${esc(monster.AC || "-")}</span>
                <span><strong>MV</strong> ${esc(monster.MV || "-")}</span>
                <span><strong>LV</strong> ${esc(monster.Level || "-")}</span>
                <span><strong>AL</strong> ${esc(monster.AL || "-")}</span>
            </div>

            <div class="pin-atk"><strong>ATK</strong> ${esc(monster.ATK || "-")}</div>

            <details class="pin-details">
                <summary>Stats and abilities</summary>
                <div class="monster-stat-grid">${statGrid}</div>
                ${abilities ? `<ul>${abilities}</ul>` : ""}
            </details>

            <div class="pin-hp">
                <span class="pin-hp-label">HP</span>
                <button type="button" class="pin-hp-minus" aria-label="Lose 1 HP">-</button>
                <input type="number" class="pin-hp-cur" min="0" inputmode="numeric" aria-label="Current HP">
                <span>/</span>
                <input type="number" class="pin-hp-max" min="0" inputmode="numeric" aria-label="Max HP">
                <button type="button" class="pin-hp-plus" aria-label="Gain 1 HP">+</button>
            </div>

            <div class="pin-bar"><div class="pin-bar-fill"></div></div>

            <textarea class="pin-note" rows="2" placeholder="Note..." aria-label="Note"></textarea>
        `;

        const curInput = el.querySelector(".pin-hp-cur");
        const maxInput = el.querySelector(".pin-hp-max");
        const note = el.querySelector(".pin-note");

        note.value = pin.note || "";
        refreshHp(el, pin, true);

        el.querySelector(".pin-unpin").addEventListener("click", () => {
            pinned = pinned.filter(p => p.id !== pin.id);
            savePinned();
            renderPinned();
        });

        el.querySelector(".pin-hp-minus").addEventListener("click", () => {
            pin.hp = Math.max(0, (pin.hp === null ? 0 : pin.hp) - 1);
            refreshHp(el, pin, true);
            savePinned();
        });

        el.querySelector(".pin-hp-plus").addEventListener("click", () => {
            let next = (pin.hp === null ? 0 : pin.hp) + 1;
            if (pin.maxHp !== null) next = Math.min(next, pin.maxHp);
            pin.hp = next;
            refreshHp(el, pin, true);
            savePinned();
        });

        curInput.addEventListener("input", () => {
            const v = parseHp(curInput.value);
            pin.hp = v === null ? null : Math.max(0, v);
            refreshHp(el, pin, false);
            savePinned();
        });

        curInput.addEventListener("change", () => {
            if (pin.hp !== null && pin.maxHp !== null) {
                pin.hp = Math.min(pin.hp, pin.maxHp);
            }
            refreshHp(el, pin, true);
            savePinned();
        });

        let maxBeforeEdit = pin.maxHp;

        maxInput.addEventListener("focus", () => {
            maxBeforeEdit = pin.maxHp;
        });

        maxInput.addEventListener("input", () => {
            const v = parseHp(maxInput.value);
            pin.maxHp = v === null ? null : Math.max(0, v);
            refreshHp(el, pin, false);
            savePinned();
        });

        maxInput.addEventListener("change", () => {
            if (pin.maxHp !== null) {
                // Keep a full-health (or unset) monster at full when its max changes
                if (pin.hp === null || pin.hp === maxBeforeEdit) {
                    pin.hp = pin.maxHp;
                }
                pin.hp = Math.min(pin.hp, pin.maxHp);
            }
            maxBeforeEdit = pin.maxHp;
            refreshHp(el, pin, true);
            savePinned();
        });

        note.addEventListener("input", () => {
            pin.note = note.value;
            savePinned();
        });

        return el;
    }

    function renderPinned() {
        pinnedWrap.innerHTML = "";
        pinnedCount.textContent = pinned.length ? `(${pinned.length})` : "";

        if (!pinned.length) {
            pinnedWrap.innerHTML =
                '<div class="pinned-empty">Nothing pinned yet. Pick a monster and press Pin Monster.</div>';
            return;
        }

        const grid = document.createElement("div");
        grid.className = "pinned-grid";
        pinned.forEach(pin => grid.appendChild(buildPinCard(pin)));
        pinnedWrap.appendChild(grid);
    }

    document
        .getElementById("pinMonster")
        .addEventListener("click", () => pinMonster(currentMonster));

    pinned = loadPinned();
    renderPinned();

    populateMonsterDropdown();

    if (ALL_MONSTERS.length) {
        renderMonster(
            ALL_MONSTERS[0]
        );
    }

})();



(() => {
    const landmarkTable = [
        ["The Pillar of First Blood", "A 15ft dark stone pillar that has engraved writing on each side \"The spot where the first blood was split between a batch of common devils\"."],
        ["The Drawing Moss", "A smooth stone with a bunch of growing moss on it. Touching the stone with a bare hand results in the moss slowing moving to wherever was touched. On the stone are several hand prints and doodles perfectly covered over with the moss."],
        ["Curci's Crypt", "A small white stone structure deep in the woods with carvings of trees on each side. Entering brings you into the hidden crypt of Curci."],
        ["The Crumbling Shack", "Far away from any civilization lays what once was a small shack. The windows are broken, some walls have crumbled away and parts of the roof are open and fallen in."],
        ["Trio of Faces", "On the side of a rocky cliff are a well carved trio of protruding faces all looking the same direction"],
        ["Cone Shaped Prison", "In the middle of a grassy field stands a 8ft slim cone made of iron bars, in the middle of the structure lies a sun bleached skeleton bound in iron shackles."],
        ["The Tree of Sacrifice", "A abnormally large and oddly pale brown tree where the branches are twisted and the leaves are a sickly saturated green color. At the base of the tree lies a blood stained alter that the roots of the tree have grown around it and now hold it it place. The base of the tree as well as the ground around the alter are permanently stained a deep red. If the tree is cut, a thick blood sap seeps out of wound. If a creature is sacrificed on the alter, the blood pools near where the roots touch the alter and are absorbed while what appear to be veins appear on the tree that go up into the branches."],
        ["The Bone Pit", "In a open field there is a 10ft wide and 50ft deep pit with no life growing around it. The walls of this chasm are lined with dark cobblestone and going down there are three uneven sized holes that are covered by iron bars. At the bottom there are a large pile of bones."],
        ["The Odd Stone Slab", "A big square stone slab rests hidden near the side of the road. Carved into the slab is a symbol and a riddle that upon answering correctly leads to a small dungeon."],
        ["The Copper Fox", "A 4ft oxidized copper statute of a fox with a small locked box in its mouth and two ruby eyes."],
        ["The Pointing Eagle", "On top of a large rock formation is a big iron statue of an eagle pointing its body to the east."],
        ["The Feasting Table", "Out away from any kind of civilization sits a large gray solid stone table with ancient carvings on the sides. Upon its surface are newly lit candles and a banquet of food that seems to be warm, fresh, and untouched by its surroundings. If one where to eat or take anything from the table, the next day it would be completely restocked and replenished."],
        ["The Jeweled Bush", "A seemingly average looking berry bush that happens to grow small jewels instead of berries. If one where to try and consume one of the jewels picked off of the bush within 24hrs, that person gains a temporary magical effect or bonus, otherwise its a normal jewel."],
        ["The Ice Blood Spot", "Located on the cliff face of a large mound of ice there is one spot that is dark red instead of the pure blue that surrounds it."],
        ["Dragon's Graveyard", "In a valley, there are 8-10 adult dragon skeletons, half-buried."],
        ["Petunia, the Land Whale", "A large whale skeleton surrounded by petunias. The whale is miles away from the sea and the petunias aren't native to this location"],
        ["Wondrous Obelisk", "an obelisk, comprised of rose quartz and decorated with sylvan runes, appears to be of fey origin. it is surrounded in a 120-foot field of wild magic."],
        ["The Old Folk Hero", "A half erected statue of an old folk hero. Either under construction or half crumbled"],
        ["The Hope Tree", "It's an oak tree with the word hope carved into it in large letters. No one knows who did it or why, but it's turned into a useful landmark for the local village."],
        ["The Moon's Egg", "It's a massive dome-like stone formation that shines pearlescent in the moonlight. It lays in a bare outcropping of rock and is warm to the touch."],
        ["Hollering Pit", "A 50ft deep sinkhole. Well-hidden at the bottom is the lair of an accomplished burglar who calls himself the Jeweler. He's too old to do much in the way of harm, but the countless traps he installed are not."],
        ["The Painted Cliff Face", "A cliff that has been entirely covered in paint from hundreds of people"],
        ["Threeshades Tower", "A weathered, ivy-mantled square tower atop a small hill. Has three levels, and each is built from a different kind of stone. The longsword stuck in one of the bricks on the top level is +1 and can project the bearer's voice up to 50' away."],
        ["Pigeons' Chest", "An ornate, but empty, chest of silver and pearl sitting by the road. It will not move by any means yet discovered, material nor magical."],
        ["The Ol' Inn", "The ancient ruins of a strangely \"modern-looking\" tavern located in the deepests patches of forest. No path leads to it, no other buildings or ruins are found besides it, but dozens of deformed footsteps can be found heading out of the site. At night, the faint, muffled sound of a single viol can be heard coming out of the muddy floor."],
        ["The Forgotten Emperor's Statue", "An incredibly detailed, broken bust of a young wood elf, bearing a red crown. Its nose and left ear are missing and where its left eye should be, the socket is destroyed and a monstrously decomposed snake eye can be found. The base has a bronze plaque which reads (in broken Celestial): \"The only one truly meant to rule\", followed by a name which seems scratched out."],
        ["The Candle Trees", "Deep in the woods, a small group of trees whose leaves are bright red. They contrast starkly with the normal trees around them. The Candle trees appear otherwise normal, but the dried leaves can be brewed into a tea that warms the bones even on the coldest nights."],
        ["Tale of a Desert's Origin", "A granite obelisk in the desert with glyphs on it. It seems to tell the tale of a very powerful magic user stealing all the life from this area, killing all the plants and turning it into a desert."],
        ["The Waning Waterfall", "A small waterfall that appears to reverse direction on every night with a bright full moon, running up instead of down."],
        ["The Sandmount", "There's a strange dune of sand in the middle of this grassy field, covered in scorpions."],
        ["The Awoken Stones", "Three stone pillars at the top of a hill, each engraved with a different rune of no known language. The pillars appear to change positions, but how this is done is unknown."],
        ["Ghost Village", "There's a half-buried village in the sand, with sandstone walls being the only remnants... except for one house, which has a simple roof and door carved into the stone."],
        ["Impossible Shipwreck", "Dashed upon the rocks are the remains of a large merchant ship. Weathered and ancient, the skeletons of the crew still scattered around though most everything of value has long since been looted. The most peculiar thing about this is that the rocks, and ship, are in a cavern 100ft underground, miles from the nearest navigable waters."],
        ["Sapphire Beach", "A small stretch of coast line hidden between two nigh-inaccessible cliff faces. The sand is particularly fine and a brilliant blue. Rumor has it that the sand was formed when giants destroyed the jewel horde of a local dragon. There are also rumors of a dragon being sighted in the oceans nearby. Digging deep into the sands turn up giant bones."],
        ["The Lovers' Spring", "A secluded hot spring, with the initials of many young lovers carved into nearby rocks. Discarded and forgotten undergarments can be found on tree branches in the area."],
        ["The Arms of the Last Bard", "A broken but thick 15ft wide half-circle embedded to the ground made of quartz and intricately laced with gold strips. An assortment of precious gems are embedded in its surface. Any attempt to collect and/or destroy this construct will cause severe psychic damage and a loud high-pitched tone to play loudly. The half-circle aligns perfectly with sunset/sunrise and every time it does, the most beautiful flute melody plays that is sourceless."],
        ["The Iron Tree", "A big, old tree which seems to be made of iron, but as far as anyone can tell, is alive and growing, if slowly."],
        ["Hades' Hand", "A 15ft tall stone hand stretches from the ground, reaching for the sky."],
        ["The Stone Toad", "A gigantic stone carving of a toad's head, crumbling, half-buried, and covered in moss."],
        ["The Wrecked Ship", "The sun-bleached wreckage of a ship that ran aground long ago. Inside the hull is a massive cage with thick steel bars that appear to have been smashed outward from the inside."],
        ["The Three Sided Tower", "A half-collapsed stone tower with curious triangular architecture. The bones of a lonely watchman sitting in a chair lie atop it. The watchman wears a helmet shaped like a triangular pyramid. Several towers of this type can be found around the same area."],
        ["Giant's Playground", "This field is entirely stone, and many massive footprints can be seen stomped into it. There are boulders laying around, some cracked."],
        ["The Fallen Hero", "The legs of a giant metal statue standing beside the top of a waterfall overlooking the valley below. At the bottom of the lake below the falls, the head and torso can be found. It appears to be the likeness of a famous ancient hero that a PC might recognize."],
        ["The Charity Cave", "A cave with a chest that says \"if you take something, leave something.\" It's unlocked and has several trinkets inside."],
        ["The Eye of the Moon", "On top of this hill is a pool surrounded with stone. The water is always cool, and at night the full moon can always be seen in its reflection, regardless of clouds or moon cycle."],
        ["Bigfoot", "A large tree in the forest that bends and splits in such a way that the bottom looks like a foot, with toes."],
        ["Goddess of Death Statue", "A worn smooth but still recognizable ancient statue of a goddess of death. At her feet sets a black stone bowl filled with fresh rose petals. If you were to kneel down at the bowl and look up at her, you would see her eyes stare unwaveringly into yours."],
        ["The Red Altar", "In the middle of a copse in a strange swamp lies a smooth altar made of red stone, with strange carvings of trees and water all around its base. Upon touching the altar, you will hear a voice in your mind \"sacrifice\" and you will feel a strange primal urge to sacrifice a creature on top of it."],
        ["Timnar's Beard", "A copse of trees growing in a single spot on an otherwise barren mountain. Unbeknownst to the world, it is the burial place of a great wizard of earthen magics. It is watched over by a trio of stone golems and a handful of slumbering treants to guard the immense knowledge held within the tomb."],
        ["The Sundered Mount", "A mountain that appears to have been cleaved in two and creating two crumbling peaks with a narrow cut of a valley between them. It does not appear naturally created."],
        ["The Mage Wastes", "A region where fertile grassland suddenly stops and abruptly becomes a barren wasteland of decaying grass and reddish soil. It seems as if it was the sight of some magical battle. The ground is pocked with craters and scorch marks, yet it seems as if this battle was an ancient long finished but the battlefield has remained a wasteland frozen in time."],
        ["The Dragons Maw", "A series of jutting tooth like spires of black igneous rock which rise out from the sea. These \"teeth\" have proven to be an extreme hazard to sailors and shipping which pass too near to them. Tearing hulls and ripping sails."],
        ["The Gods Sacrament Statue", "A old weathered statue of a god with beautiful gems inlaid and surrounded with wicker basket offerings of gold, flowers, food, and trinkets. Stealing from the statue result in a curse (permanent level of exhaustion) from the deity until either greater restoration is cast on the thief or they repent and make a offering of twice the amount stolen. Award inspiration for respectful offerings or prayers given to the statue."],
        ["The Dragonblood", "A massive artwork carved into a boulder placed some ways away from the banks of a nearby river. The artwork seems to depict a struggle between giants and dragons, with the giants as the victors. The faintly red runes which line it are giantish, and anyone who can decipher them will read that it marks a momentous battle between giants and dragons, over which should decide the course of the river."],
        ["The Daughter of the Sun", "An enormous stone of a singular soft yellow colour. It is hot to the touch but by day it is warm and comfortable simply standing near it. By night however the stone begins to glow brightly, illuminating its surroundings in radiant golden light. Large chips of the same stone can be found in the foliage growing around it, with similar glowing properties."],
        ["Would You Kindly", "A sentient door in the side of a mountain that has short term memory loss. He has no idea of his name or how to open himself but enjoys talking with travelers none the less. Speaking the magic word \"please\" will cause the door to open revealing a shortcut through the mountain. No form of magic or otherwise can lead through or get around this door without speaking the magic word due to an ancient magical barrier."],
        ["The Bread Boy", "A small statue in a park depicting a street urchin. In one hand he has what is left of a small loaf of bread. With the other hand he is spreading crumbs for the birds so they do not go hungry too. A place where the street kids gather."],
        ["Sculpture Garden", "A small clearing in a forest, near a cave mouth, contains dozens of statues of humanoid creatures, many armed & armored, all with looks of surprise & horror on their stone faces."],
        ["Saben's Cauldron", "A large, circular pool off of a main river which is geothermally heated."],
        ["The Teeth", "A series of vaguely conic stone spires lined up along a gentle arc. Each is over 15ft tall and 5ft across at the base, and tapers to a narrow tip. Nobody knows the origin of this formation. Some say the teeth are all that remains from some colossal dragon skeleton, others think the stones were placed there by a dragon cult, or as a sign from a great wyrm."],
        ["Mage-Crater", "A 120ft diameter crater. Now filled with water and inhabited by pond creatures."],
        ["The Old Man", "A natural rock formation that just happens to look like the face of an old man with a long beard. Ruins of temples from several ancient civilizations can be found in the valley below, apparently attracted there to worship the face, or perhaps just to be under his watchful gaze. Most humanoid races in the region are sure the old man looks like their race, and have their own legend about him."],
        ["The Deino Flats", "Roughly 40 acres of salt flats. A long dried up saltwater marsh from ancient times."],
        ["Grand Defender", "A large, symmetrical hill where the site of a great battle once was. Stone rubble and ruins barely peaks out from the top. Flowers are left there every so often."],
        ["The Adventurers Billiard Hall", "A stone statue of a local adventurer rests on a green glass dome in the center of a public lake. The dome is lit gently from beneath. Somewhere nearby lies a dilapidated entrance which runs through a small puzzle focused dungeon."],
        ["Turned-Inn", "An inn that has been carefully constructed to appear as if it was turned upside-down."],
        ["The Signposts", "A collection of several dozen poles each with a dozen or more signs mounted to them pointing towards various distant lands, nearby businesses, and bizarre joke locations. It started with travelers who erected a signpost pointing to their distant homelands which other travelers added to. Eventually it got out of hand."],
        ["Worm's Desert", "A small sandy desert only a couple hundred acres in size or so. A great desert-making worm arrived from another world and sought to convert the world into an ecosystem like its home but caught a local disease it was unresistant to and died before it made much progress. The residual poison from the worm's body deters plants from overtaking the sand."],
        ["Lightning Lab", "A bizarre building with a strange mushroom-shaped metal lattice on top. It was the lab of a researcher studying non-magical electricity who died from electrocution."],
        ["The Sandlot", "A square of property with no building where children come to play. A greedy landlord raised the rent on a long-term elderly tenant when they purchased the property, driving the tenant into poverty and eventually death. The tenant cursed the land with their dying breath that no one would ever profit from the property. Every future tenant was driven out by terrifying haunts, and eventually the building was burned down."],
        ["Dwarven Monument", "An enormous high relief of six dwarven warriors cut from a cliff pointing the way along, commemorating their epic journey."],
        ["Atlas Boulders", "A series of differently-sized large stone spheres far too large for a man to lift. The strongest giants would lift them to prove their strength. They sometimes move, so perhaps the giants still use them."],
        ["Ancient Battlefield", "Ramparts, high hills, and trenches filled with water that stretch for miles marking the location of an ancient battlefield. It has grown over."],
        ["The Epicenter", "A large swath of woods where all the trees in a massive circle have been bent at a 90 degree angle towards the center, but continue to grow that way. There is nothing (currently) anomalous at the center, but a powerful coven of druids hold it as one of their holiest places and guards it closely."],
        ["Ol' Demon's Place", "A once portal to the abyss, sealed by heroes long ago, now just a crumbling arch with an unsettling aura."],
        ["The Broken Hill", "A hill that you need to walk uphill to get to, and walk uphill to get away from."],
        ["The Rooster of Mourning", "An enormous statue of a rooster, made from a strange metal, finely detailed and colored. It is hollow, and when the first ray of sunrise strikes it, a great, sad-sounding crow arises from it. Legend says that it commemorates a great battle in the distant past."],
        ["The Angry Spot", "A small stone platform on the top of a hill, standing on the platform makes a person irrationally angry. Barbarians may involuntarily rage as a result."],
        ["The Altar of A Thousand Arms", "At a crossroads sits an unusual statue, made of stone it stands over 10 feet tall and has arms sticking out in every direction with their palms turned upwards. In nearly every hand there is a candle, some still lit but most are fully melted. Placing a candle in one of the hands and lighting it will give the player the blessing of \"a helping hand\". When a player next fails a roll they may roll an additional d6 and add it to their total."],
        ["The Weeping Sister", "A fifteen foot statue of a girl unmarred by time. Next to her are the shattered remains of another statue, close enough that the body may have once held her outstretched hand. The feet of this larger statue are all that remain affixed to the earth - the rest is scattered throughout the clearing. Water, clean and pure, travels down her face in steady rivulets but leaves no erosion there."],
        ["The Sensible Stone Head", "A large stone head protruding from the surface of a glacier. It is the head of an earth elemental and if you get his attention he is friendly. If asked what he is doing there he replies \"swimming in the river\"; given he exists at a geological pace, the slow flow of the glacier is like a river to him."],
        ["Glass Tree", "A fairly tall and elaborate tree made entirely out of glass rises from the earth. At its base there is a plaque written in dwarven, commemorating a dwarf leader who fell in battle."],
        ["The Titan's Blade", "A 50 ft rust covered sword driven into the earth. The whole area has a magical aura and no wildlife lingers within a quarter mile of the sword."],
        ["The Well of Good Tidings", "A well by the side of the road that is a base in a local halfling tradition that if one were to lose a tooth, it is to be tossed in the well with a tip of the hat. When doing so, good fortune is sure to come. Characters that throw in teeth later find small amounts of wet coins in various locations on their person. Characters that throw rubbish, or are otherwise disrespectful of the well, find their respective objects on their person once more, soaking wet and covered in bite marks."],
        ["Skilltown", "A small but clearly once-bustling town lays abandoned inside of a titan's skull. The skull is half buried in the sand; its eye sockets and mouth aim up at an angle. Walking through its mouth is the only way to enter the town. The skull looks to be that of an enormous version of whatever scariest creature lives in that area. It provides ample shade during most of the day."],
        ["Best Rest Graveyard", "A cleric once prayed over a graveyard that all within would \"rest well.\" Now anyone who falls asleep in that graveyard has the best night of sleep they've ever had."],
        ["Bird Hill", "A grassy hill of noticeable height rises from the otherwise flat plains. On the hill are several lines of cobblestone that do not grow grass, and have no discernible pattern from the surface. If flying, however, you see the cobblestone lines form the shape of a bird, along with some arcane symbols. If you happen to look up during the spring or fall, you'll see migratory birds alter their course to fly over this hill."],
        ["Stairway to Nowhere", "All that remains of an ancient fortress, the remarkably well constructed staircase rises for 3 stories out of the ground at the end of an ancient road, and then just abruptly stops."],
        ["The Crossroads", "This is the place where four kingdoms meet. The main road for each leads to a massive stone pillar. Many years ago, all four kingdoms were at war, and a pillar was placed there as a symbol that none from neighboring kingdoms would be allowed to cross. It is now an annual meeting place for the four to discuss their continued amnesty."],
        ["Cloudland Canyon", "It's a canyon nestled in a northern mountain range that's so high even the base of the canyon is a higher elevation than most of the other mountains in this world. Wondrously magical things occur here."],
        ["Stone Tree Garden", "It was a garden from a former ancient culture, which vanished for unknown reasons. One of the only things found was this tree garden. Are the trees made of stone, or turned to stone? No one knows."],
        ["The Circle", "There once was a meteorite which crashed into the land. The first to arrive found weird writing in a wide diameter circle. No one could read what was written. In the center of the circle, where the meteor should have been, there was nothing, not even a small crater."],
        ["The Well", "A seemingly normal well on the top of a hill. Anything that is placed into it is immediately tossed back out of it."],
        ["The Pariah's Mountain", "One mountain among an otherwise unimpressive range, its only defining feature is that it's completely upside down. The base measures about 60ft across, but the peak 3,000ft up is easily a mile across. Stairs may have been carved into the side, but the climb down to the summit (or is it up to the base? The locals aren't quite sure) is precarious at times. The locals are also similarly vague when asked about what's on top..."],
        ["Worried Stones", "A group of 3 standing stones with anxiety. When encountered in their clearing, they will disappear once all eyes are off them. Careful inspection will reveal them hiding nearby - peeking from behind a nearby tree, the bottom of a lake, hidden by bushes, behind where the party is now looking, etc. If discovered, they disappear again if not observed. The stones are not malicious, and do not harm the party. They would just rather you all left them to it, thank you."],
        ["The Quiet Creek", "An otherwise ordinary creek that runs through a forest. It is abnormally quiet near the stream, such that there is almost no echo around it, and it is surprisingly hard to hear from a distance. All along its course stand small boulders, almost fully grown over with moss."],
        ["The Shifting Hills", "A large field of hills, dotted with rocks, grasses, and flowers. Careful study has found the hills are constantly moving, as though old creatures crawl along under a carpet of earth. Magics which call upon the earth always seem to produce unexpected results when among them."],
        ["The Devil's Wager", "A large disc shaped stone at the base of a long dormant volcano. Visitors toss a copper coin at it for good luck. There are a couple hundred coppers around it. It is considered extraordinarily bad luck to take the coppers."],
        ["The Swordleaf Trees", "There is a patch of trees here with a non-stop turbulent wind rustling the leaves and branches violently. The leaves' edges appear to be razor sharp."],
        ["Beacon Mountain", "A mountain that, on some nights, has a bright ball of light form over it which slowly dissipates over several hours. Local religion strictly forbids climbing the mountain."]
    ];

    function renderLandmarkTable() {
        document.getElementById("landmarkTableBody").innerHTML = landmarkTable.map((row, i) =>
            `<tr><td><strong>${i + 1}</strong></td><td>${row[0]}</td><td>${row[1]}</td></tr>`
        ).join("");
    }

    function generateLandmark() {
        const roll = Math.floor(Math.random() * landmarkTable.length);
        const [name, desc] = landmarkTable[roll];

        document.getElementById("landmarkName").textContent = name;
        document.getElementById("landmarkResult").textContent = desc;
        document.getElementById("landmarkRoll").textContent = `d100: ${roll + 1}`;

        window.generatedLandmark = { roll: roll + 1, name, desc };
    }

    document.getElementById("generateLandmark").addEventListener("click", generateLandmark);

    document.getElementById("copyLandmark").addEventListener("click", async () => {
        const g = window.generatedLandmark;
        if (!g) return;

        const text = `LANDMARK\nd100: ${g.roll}\n${g.name}\n${g.desc}`;

        try {
            await navigator.clipboard.writeText(text);
            const button = document.getElementById("copyLandmark");
            const original = button.textContent;
            button.textContent = "Copied";
            setTimeout(() => button.textContent = original, 900);
        } catch {
            alert(text);
        }
    });

    renderLandmarkTable();
    generateLandmark();
})();



(() => {
    const INITIAL_SECONDS = 3600;
    const timeEl = document.getElementById('torch-time');
    const statusEl = document.getElementById('torch-status');
    const toggleBtn = document.getElementById('torch-start-pause');
    const resetBtn = document.getElementById('torch-reset');
    const burnRect = document.getElementById('flame-burn-rect');
    let remaining = INITIAL_SECONDS, running = false, deadline = 0, intervalId = null;

    const formatTime = value => {
        const seconds = Math.max(0, Math.ceil(value));
        return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
    };
    function render() {
        timeEl.textContent = formatTime(remaining);
        const height = 52.31 * Math.max(0, Math.min(1, remaining / INITIAL_SECONDS));
        burnRect.setAttribute('y', 52.31 - height);
        burnRect.setAttribute('height', height);
        statusEl.textContent = remaining <= 0 ? 'Beware the darkness' : running ? 'Burning' : remaining < INITIAL_SECONDS ? 'Paused' : 'Ready';
        toggleBtn.textContent = running ? 'Pause' : remaining < INITIAL_SECONDS ? 'Resume' : 'Start';
        toggleBtn.disabled = remaining <= 0;
        if (remaining <= 0) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }
    function stop() {
        clearInterval(intervalId);
        intervalId = null;
    }
    function tick() {
        remaining = Math.max(0, (deadline - Date.now()) / 1000);
        if (!remaining) { running = false; stop(); }
        render();
    }
    function toggle() {
        if (running) {
            tick();
            if (running) { running = false; stop(); render(); }
        } else if (remaining > 0) {
            running = true;
            deadline = Date.now() + remaining * 1000;
            intervalId = setInterval(tick, 100);
            render();
        }
    }
    function reset() {
        stop(); running = false; remaining = INITIAL_SECONDS; render();
    }
    function adjust(delta) {
        if (running) {
            tick();
            if (running) deadline += delta * 1000;
            else return;
            remaining = Math.max(0, (deadline - Date.now()) / 1000);
        } else remaining = Math.max(0, remaining + delta);
        if (!remaining) { running = false; stop(); }
        render();
    }
    toggleBtn.addEventListener('click', toggle);
    resetBtn.addEventListener('click', reset);
    document.getElementById('torch-minus-five').addEventListener('click', () => adjust(-300));
    document.getElementById('torch-plus-five').addEventListener('click', () => adjust(300));
    render();
})();



(() => {
    const LADDER = [
        { name: 'Terrible', vis: 0, terrain: '+2 steps', rest: 'DC 15 CON' },
        { name: 'Bad', vis: 1, terrain: '+1 step', rest: 'DC 12 CON' },
        { name: 'Fair', vis: 1, terrain: 'None', rest: 'None' },
        { name: 'Good', vis: 1, terrain: 'None', rest: 'None' },
        { name: 'Beautiful', vis: 2, terrain: 'None', rest: 'ADV on CON checks' }
    ];
    const toward = (name, target) => ({ label: `1 step toward ${name}`, apply: b => b + Math.sign(target - b) });
    const setTo = (name, i) => ({ label: `Set to ${name}`, apply: () => i });
    const SEASONS = {
        mild: r => r <= 4 ? toward('terrible', 0) : r <= 7 ? toward('fair', 2) : r <= 11 ? toward('beautiful', 4) : setTo('good', 3),
        harsh: r => r <= 5 ? toward('terrible', 0) : r <= 7 ? toward('fair', 2) : r <= 10 ? toward('good', 3) : setTo('bad', 1)
    };
    const el = id => document.getElementById(id);
    const roll2d6 = () => [1 + Math.floor(Math.random() * 6), 1 + Math.floor(Math.random() * 6)];
    const clamp = i => Math.max(0, Math.min(4, i));
    let base = null, boost = 0, rollText = '', log = [];
    const HEX_KEY = 'shadowdark-hex-weather';
    function saveWeather() {
        try {
            localStorage.setItem(HEX_KEY, JSON.stringify({
                base, boost, rollText, log,
                season: el('hexSeason').value,
                elevation: el('hexElevation').value
            }));
        } catch (e) { }
    }
    function loadWeather() {
        try {
            const d = JSON.parse(localStorage.getItem(HEX_KEY));
            if (!d || typeof d !== 'object') return;
            if (Number.isInteger(d.base) && d.base >= 0 && d.base <= 4) base = d.base;
            if (Number.isInteger(d.boost) && d.boost >= 0 && d.boost <= 4) boost = d.boost;
            if (typeof d.rollText === 'string') rollText = d.rollText;
            if (Array.isArray(d.log)) log = d.log.filter(t => typeof t === 'string').slice(0, 8);
            if (d.season === 'mild' || d.season === 'harsh') el('hexSeason').value = d.season;
            if (['0', '2', '5'].includes(d.elevation)) el('hexElevation').value = d.elevation;
        } catch (e) { }
    }

    const season = () => el('hexSeason').value;
    const hexes = n => n === 0 ? 'None' : n === 1 ? '1 hex' : `${n} hexes`;
    const current = () => base === null ? null : LADDER[clamp(base + boost)];
    const stateText = () => {
        const w = current();
        if (!w) return '';
        return `Weather: ${w.name}. Visibility ${hexes(w.vis + Number(el('hexElevation').value))}, terrain ${w.terrain}, rest ${w.rest}.`;
    };
    function addLog(text) {
        log.unshift(text);
        log = log.slice(0, 8);
        el('hexLog').innerHTML = '';
        log.forEach(t => { const li = document.createElement('li'); li.textContent = t; el('hexLog').appendChild(li); });
    }
    function render() {
        saveWeather();
        const w = current();
        const eff = base === null ? -1 : clamp(base + boost);
        el('hexLadder').querySelectorAll('button').forEach((b, i) => {
            b.classList.toggle('on', i === eff);
            b.setAttribute('aria-pressed', i === eff);
        });
        if (!w) return;
        el('hexName').textContent = w.name + (boost && base !== clamp(base + boost) ? ` (base ${LADDER[base].name}, +${boost} step${boost > 1 ? 's' : ''})` : '');
        el('hexStats').innerHTML = '';
        [['Visibility', hexes(w.vis + Number(el('hexElevation').value))], ['Terrain', w.terrain], ['Rest', w.rest]].forEach(([l, v]) => {
            const d = document.createElement('div');
            d.className = 'item';
            d.innerHTML = '<div class="label"></div><div class="value"></div>';
            d.firstChild.textContent = l;
            d.lastChild.textContent = v;
            el('hexStats').appendChild(d);
        });
        el('hexRoll').textContent = rollText;
    }
    LADDER.forEach((w, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = w.name;
        b.addEventListener('click', () => {
            base = i; boost = 0; rollText = 'Set manually.';
            addLog(`Set to ${w.name}`);
            render();
        });
        el('hexLadder').appendChild(b);
    });
    el('hexStart').addEventListener('click', () => {
        const [a, b] = roll2d6(), t = a + b;
        base = t <= 2 ? 0 : t <= 5 ? 1 : t <= 8 ? 2 : t <= 11 ? 3 : 4;
        boost = 0;
        rollText = `Starting roll 2d6: ${a} + ${b} = ${t}`;
        addLog(`Start (${t}): ${LADDER[base].name}`);
        render();
    });
    el('hexDaily').addEventListener('click', () => {
        if (base === null) { el('hexStart').click(); return; }
        const [a, b] = roll2d6(), t = a + b, adj = SEASONS[season()](t), from = LADDER[base].name;
        base = clamp(adj.apply(base));
        boost = 0;
        rollText = `${season() === 'mild' ? 'Mild' : 'Harsh'} season 2d6: ${a} + ${b} = ${t}. ${adj.label}.`;
        addLog(`Day (${t}): ${from} to ${LADDER[base].name}`);
        render();
    });
    el('hexBoost').addEventListener('click', () => {
        if (base === null) return;
        boost = Math.min(boost + 1, 4);
        rollText = 'Forecast or Batten Down applied. Resets on the next daily roll.';
        addLog(`One step better: ${current().name}`);
        render();
    });
    el('hexPredict').addEventListener('click', () => {
        if (base === null) { el('hexPredictOut').textContent = 'Set the current weather first.'; return; }
        let b = base;
        const out = [];
        for (let d = 1; d <= 3; d++) {
            const t = roll2d6().reduce((x, y) => x + y, 0);
            b = clamp(SEASONS[season()](t).apply(b));
            out.push(`Day ${d}: ${LADDER[b].name}`);
        }
        el('hexPredictOut').textContent = 'Forecast (not applied). ' + out.join(', ');
    });
    el('hexElevation').addEventListener('change', render);
    el('hexCopy').addEventListener('click', async () => {
        const text = stateText();
        if (!text) return;
        try {
            await navigator.clipboard.writeText(text);
            const btn = el('hexCopy');
            btn.textContent = 'Copied';
            setTimeout(() => { btn.textContent = 'Copy'; }, 1200);
        } catch (e) { /* clipboard unavailable */ }
    });
    el('hexSeason').addEventListener('change', saveWeather);
    loadWeather();
    log.forEach(t => { const li = document.createElement('li'); li.textContent = t; el('hexLog').appendChild(li); });
    render();
})();

(() => {
    const el = id => document.getElementById(id);
    const BEN = `Terrible luck dogs you; re-roll this benefit as a mishap
You drank with a gossiper and learned a random rumor
A helpful, friendly raven follows you around for 1 week
A soothsayer reads your palm; gain a luck token
A sea wolf raider offers you free passage on his ship
You stopped a zombie; the Charnel-Men owe you a favor
A falling gargoyle missed you by an inch; gain a luck token
Children like you for 1 week thanks to a clever magic trick
You converted a street thug to piety; gain an acolyte ally
You've been knighted and don't remember how or why
You saved a boat; Rowers transport you for free for a month
You mistakenly receive a sealed letter meant for a noble
A priest mistakes your revelry for worship; gain a priest ally
A street cat befriends you; you can't be surprised for 1 week
You win an arm-wrestling contest; +1 renown
You distracted a Thieves' Guild mark; gain a thief ally
A shaman offers you free spiritual cleansing (see pg. 26)
You got lucky this time; roll your next benefit with ADV
You won a pit fight; gain +1 renown and a gladiator ally
An eager, helpful acolyte follows you around for 1 week
An honest heart-to-heart turns a former enemy into an ally
You testified for a barrister; he helps you for free next time
You unwittingly aided in a murder; gain an assassin ally
You fall in the river and find something you lost long ago
You caught a thief; gain a City Guard ally (guard), +1 renown
An ancient beggar gives you a gutter trinket (see pg. 68)
You're a regular now; +1 on next carousing event roll
A minor nobles offers you his heir's hand in marriage
A retiring farmer gave you his best horse and a grumpy pig
You found and returned a lost wizard hat; gain a mage ally
You won 50 gp against a famous gambler; +1 renown
A stray mastiff likes you; it defends you in your next combat
The Onyx Eye clears you of your next crime accusation
You discover a codex in the sewers; learn one rare language
You learn you have a secret ally in The Shroud helping you
A swordsman offers you free martial training (see pg. 26)
You earned a flattering nickname or title; +1 renown
You survived the Rat Plague (see rat); now you're immune
The Thieves' Guild helps you; cancel your next mishap
A silk trader from Alkesh gifts you a fine horse worth 100 gp
You got an epic tattoo in a visible location; gain +1 renown
Merchants charge you 10% less than normal for 1 week
You loot a dead body; gain a roll on the Treasure 0-3 Table
You publicly busted a cheating dice trickster; +1 renown
You saved a mage's pet; he identifies a magic item for you
You won a philosophy debate; +1d4 INT points for 1 week
You sang a beloved sea shanty; gain a pirate ally, +1 renown
Good rest cleared your mind; +1d4 WIS points for 1 week
You find a note in your bag: "I.O.U., Montmar Castle, noon"
You find a discarded bag; roll on your level's Treasure Table
You start an iconic new fashion trend; +2 renown
You find the secret sewer entrance to a noble's mansion
You break into a warrior's tomb and find mithral chainmail
A beggar gave you herbal oils; +1d4 CON points for 1 week
You win a well-made dingy after gambling with a fisherman
You gracefully dodged a bull; +1 renown, +1d4 temporary HP
You impressed a bard; +2 on your next carousing event roll
The warlord Krell (berserker) now owes you a blood debt
You woke up in a lab; gain two random magic potions
You discover an iron key to the Duke's Donjon in your bag
You won a weight lifting match; +1d4 STR points for 1 week
You tossed a thug from a bar; +2 to next carousing event roll
You beat a wizard at dice and won a Potion of Polymorph
A retiring street magician gifts you an uncuttable rope
You filled in for a sick performer at the theater; +2 renown
You aided a cartographer; gain a useful map of your choice
A member of the clergy gave you a Potion of Healing
You won at five-finger filet; +1d4 DEX points for 1 week
A chatty parrot reveals the name of a noble's illicit paramour
A thug offers to commit a free crime for you (see pg. 26)
The Undertaker, a beggar gladiator, protects you for 1 week
You won a bull-riding match; +1 renown, +1d6 temporary HP
Treat your renown as 12 for 1 week thanks to a famous bard
You win The Pumpkin Toss; eat free at this tavern for life
You freed a pegasus; it serves as your mount for 1 week
Find a flask of Van Dinkle Whisky (SD pg. 137) with 5 sips left
You saved a life; gain a City Guard (guard) ally, +2 renown
Fantastic haircut; +1 renown, +1d4 CHA points for 1 week
You learn the True Name of a member of the Duke's family
A nobleman was impressed by your sharp wit; +3 renown
You find the Golden Rook; trade it for any merchant's item
You find a Kytherian Cog (SD pg. 305) in a strange place
A famous sculptor made a public statue of you; +3 renown
You outsing a famous bard; +5 to next carousing event roll
A legendary tailor gifts you an 800 gp outfit; +2 renown
You won at fencing against the Duke's cousin; +3 renown
You won the annual Jester's Leap contest; +4 renown
You find a one-time, one-person teleporter to anywhere
You drank something magical; permanently gain 1 HP
An exotic animal handler gives you a trained panther
You stop a noble's assassination; +5 renown and noble ally
You prayed at the Ducal Tomb; gain Wraithsight (SD pg. 281)
A kind old lady gifts you a roll on your level's Treasure Table
A disguised archangel follows you for 1 week to defend you
You have earned a major favor from the Duke
Divine favor: permanently gain 1 stat point of your choice
You get one roll at +15% on your level's Treasure Table
You get one roll at +20% on your level's Treasure Table
You get one roll at +20% on the next highest Treasure Table
You get one roll at +20% on the LV 10+ Treasure Table`.split('\n');
    const MIS = `You wake up in the Duke's Donjon accused of a major crime
You wake up in the stocks accused of a minor crime
A gloating thief burgled 50% of your wealth; -3 renown
You offended an important advisor to the Duke; -5 renown
You wake up robbed in a gutter; lose 40% of your wealth
You lost 35% of your wealth to a notorious con artist
You lost 30% of your wealth in a string of gambling failures
You blew a high-level spy's cover; gain an enemy assassin
You accidentally burned down a tavern; -4 renown
A pickpocket successfully lifted 1d4 pieces of your gear
You traded your best weapon for a cooked turkey leg
You hit your head; lose one common language you spoke
A seemingly kind old lady stole a random piece of your gear
A nobleman overheard your joke about him; -3 renown
Wizard duel crossfire; you are turned into a frog for a week
The City Guard hunts for you regarding a major crime
A demagogue priest declared you possessed; -2 renown
A rival threw a random piece of your gear into the river
Your cheers distracted a pit fighter; gain an enemy knight
You deeply insulted a wizard; gain an enemy mage
You unwittingly interfered in a heist; gain an enemy thief
You broke the taboos of a church; gain an enemy priest
You lost a bet to a hated rival; -1 renown and lose 50 gp
A corrupt City Guard member blackmailed you for 50 gp
You agreed to a marriage with a disgraced noble in 1 week
A prophet saw bad omens; roll next mishap with DISADV
You got an awful tattoo in a visible location; -2 renown
A pack of children humiliated you with a prank; -2 renown
You got mugged by the Bywater Barons for 40 gp
A snide bard performed a rude song about you; -2 renown
You lost a 40 gp to an amateur gambler; -1 renown
You sank a boat; Rowers won't transport you for a month
You wake up wearing a famous noble's missing outfit
You witnessed a crime; the Thieves' Guild now hunts you
You bribed a door guard 40 gp to look the other way
A fashion critic eviscerated your choice in garb; -2 renown
A rival crawler challenged you to a duel at midday today
You wake up wearing the signet ring of a murdered noble
You contract the Rat Plague (see rat) from a poxy old crone
You upset a barrister; the next one you hire charges 900 gp
You angered a bard; -2 on your next carousing event roll
You borrowed 500 gp from a loan shark and lost it all
You gave 40 gp to a tiny, dancing monkey in a vest and hat
You've been cursed; you can't use luck tokens for 2 weeks
Awful haircut; -1 renown, lower CHA 1d4 points for 1 week
You awake in an alley manacled to an escaped criminal
You spent 40 gp to win a gold ring; it turned out to be fake
The Charnel-Men thought you dead; you wake up in a coffin
The City Guard hunts for you regarding a minor crime
You got locked in the stocks for three days; -2 renown
Exhaustion; you have DISADV on all checks for 1d4 days
An irritating and tricksome ghost has begun haunting you
You got fleas; -1 HP (min. 1) from itchy sores until treated
A gambling disagreement turns a former ally into an enemy
You smell strongly of pickled herring for a week; -1 renown
You wake up locked inside a tomb in the city's graveyard
You let 2d6 prize mastiffs escape a kennel; find them or else
You got an awful, hidden tattoo; -1 renown if anyone sees it
You joined a strict cult of (d6) 1-2: evil, 3-4: nature, 5-6: purity
An annoying apprentice has become your clingy admirer
You confessed a dark secret to a manipulative beggar
Your nice new boots turned out to be Boots of Dancing
You've earned an unflattering new nickname; -1 renown
A robber took pity on you; now you owe him a major favor
Merchants charge you 20% more than normal for 1 week
A sorcerer tricked you into looking into a Mirror of Mischief
Bad concussion; DISADV on INT checks for 1 week
A fake City Guard "fined" you 30 gp; you'd recognize her
An angry wizard made you dance like a puppet; -1 renown
Poked in the eye; DISADV on WIS checks for 1 week
You dropped a small item into a sewer grate; it's still there!
You wake up holding a basket with a sleeping baby in it
Violent food poisoning; DISADV on CON checks for 1 week
You tipped a raft; Rowers won't transport you for 1 week
You awake with a contract to buy a 1,000 gp elephant today
Wrenched your back; DISADV on STR checks for 1 week
A fortune teller has hexed you; you can't use luck for 1 week
You forgot to pay a tab; -1 on next carousing event roll
Knife throwing accident; DISADV on DEX checks for 1 week
You started a massive fight in a tavern and are now banned
Your most expensive garb is completely soiled; -1 renown
Punched in the face; DISADV on CHA checks for 1 week
You insulted a famous tailor; you can't buy garb for 1 month
A press gang of 2d6 bandits tries to abduct you by night
You slapped a street mime; children dislike you for 1 week
An ally helps you escape arrest; now you owe them a favor
You stole a tavern's sign; you're in big trouble if you return
A witch tricked you into drinking a Potion of Forgetfulness
You wake up with a manor house deed; it might be fake
You begin to appear on wanted posters around the city
You find a bloody mask from The Shroud in your bag
You learned your True Name and told it to 1d4 strangers
You find a note in your bag: "The Onyx Eye is watching you."
You fell into sewage; -1 renown and check vs. rat disease
You awake dangling by a fraying rope tied to a high bridge
You find a note written in blood in your bag: "I'll be back."
Total blackout; you can't remember the last two weeks
You dropped 30 gp into a cursed well; lose all luck tokens
A bard writes a heroic ode to you but misstates your name
Misfortune favors you; re-roll this mishap as a benefit`.split('\n');
    const EVENTS = [[30, 'Night at the tavern to toast and gossip'], [100, 'Festive day of high spirits and revelry'], [300, 'Full day and night of raucous celebration'], [600, 'Three days of merrymaking and antics'], [900, 'Five-day spree of exuberant feasting'], [1200, 'Full week of total excess and indulgence'], [1800, 'Hazy, weeklong voyage into splendid luxury'], [2400, 'Lavish, weeklong party of outrageous finery'], [3000, '2-week, city-wide festival of supreme opulence'], [4000, "Extravagant, 2-week fete in the Duke's court"]];
    // totals 1..25+: [mishaps, benefits, % modifier, xp]
    const OUT = [null, [2, 0, -20, 2], [1, 0, -20, 2], [1, 0, -15, 3], [1, 1, -15, 3], [0, 1, -10, 3], [1, 0, 0, 4], [1, 1, 0, 4], [0, 1, 0, 4], [1, 0, 0, 5], [1, 1, 0, 5], [0, 1, 5, 5], [0, 2, 5, 5], [1, 1, 5, 6], [0, 1, 5, 6], [0, 2, 5, 6], [1, 1, 10, 7], [0, 1, 10, 7], [0, 2, 10, 7], [1, 1, 15, 8], [0, 1, 15, 8], [0, 2, 15, 8], [1, 1, 20, 9], [0, 2, 20, 9], [0, 2, 25, 10], [0, 3, 25, 10]];
    const d = n => 1 + Math.floor(Math.random() * n);
    const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
    const fmt = n => n > 0 ? '+' + n : String(n);
    const outcome = t => OUT[clamp(t, 1, 25)];
    const row = cells => {
        const tr = document.createElement('tr');
        cells.forEach(c => { const td = document.createElement('td'); td.textContent = c; tr.appendChild(td); });
        return tr;
    };
    const line = text => { const x = document.createElement('div'); x.textContent = text; return x; };

    EVENTS.forEach(([cost, text], i) => {
        const o = document.createElement('option');
        o.value = i;
        o.textContent = `${cost.toLocaleString()} gp: ${text} (${fmt(i)})`;
        el('carEvent').appendChild(o);
        el('carEventBody').appendChild(row([cost.toLocaleString() + ' gp', text, fmt(i)]));
    });
    OUT.forEach((o, i) => { if (o) el('carOutBody').appendChild(row([i === 25 ? '25+' : i, o[0] || '0', o[1] || '0', o[2] ? fmt(o[2]) : '0', o[3]])); });
    BEN.forEach((t, i) => el('carBenBody').appendChild(row([String(i + 1).padStart(2, '0'), t])));
    MIS.forEach((t, i) => el('carMisBody').appendChild(row([String(i + 1).padStart(2, '0'), t])));

    const outcomeText = (t, o) => `Total ${t}: ${o[0]} mishap${o[0] === 1 ? '' : 's'}, ${o[1]} benefit${o[1] === 1 ? '' : 's'}, ${o[2] ? fmt(o[2]) : '0'}% modifier, ${o[3]} XP`;

    el('carRoll').addEventListener('click', () => {
        const bonus = Number(el('carEvent').value) + (Number(el('carExtra').value) || 0);
        const r = d(8), total = r + bonus, o = outcome(total);
        el('carHead').textContent = `d8 ${r} ${fmt(bonus)} = ${total}`;
        const box = el('carLines');
        box.innerHTML = '';
        box.appendChild(line(outcomeText(total, o)));
        for (let i = 0; i < o[1]; i++) { const x = d(100), f = clamp(x + o[2], 1, 100); box.appendChild(line(`Benefit (rolled ${x}${o[2] ? ' ' + fmt(o[2]) : ''} = ${f}): ${BEN[f - 1]}`)); }
        for (let i = 0; i < o[0]; i++) { const x = d(100), f = clamp(x + o[2], 1, 100); box.appendChild(line(`Mishap (rolled ${x}${o[2] ? ' ' + fmt(o[2]) : ''} = ${f}): ${MIS[f - 1]}`)); }
    });

    function lookup() {
        const parts = [];
        const t = parseInt(el('carOutIn').value, 10), b = parseInt(el('carBenIn').value, 10), m = parseInt(el('carMisIn').value, 10);
        if (t >= 1) parts.push(outcomeText(t, outcome(t)));
        if (b >= 1) parts.push(`Benefit ${clamp(b, 1, 100)}: ${BEN[clamp(b, 1, 100) - 1]}`);
        if (m >= 1) parts.push(`Mishap ${clamp(m, 1, 100)}: ${MIS[clamp(m, 1, 100) - 1]}`);
        const box = el('carLookup');
        box.innerHTML = '';
        if (!parts.length) box.textContent = 'Enter the final d100 number after adding the % modifier.';
        parts.forEach(p => box.appendChild(line(p)));
    }
    ['carOutIn', 'carBenIn', 'carMisIn'].forEach(id => el(id).addEventListener('input', lookup));
})();
