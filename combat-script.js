    //REFERENCES
    // const messages = [
    // “...”,
    // “...”,
    // “...”
    // ]
    
    // const randIndex = Math.floor(Math.random() * messages.length) // Get random index 
    
    // console.log(messages[randIndex]) // Get random message from messages array

    //================

    function rollEnemyType() {
        const enemyType= [
            "Aberration",
            "Beast",
            "Humanoid/Giant",
            "Celestial",
            "Construct",
            "Dragon",
            "Elemental",
            "Fey",
            "Fiend",
            "Monstrosity",
            "Ooze",
            "Plant",
            "Undead: Bony",
            "Undead: Bloody",
            "General/Misc"
        ]
        const enemyTypeIndex = Math.floor(Math.random() * enemyType.length)
        blurt({
            title: 'Enemy Type',
            text: enemyType[enemyTypeIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    function rollYesNo2() {
        const yesNo= [
            "Yes",
            "No",
            "Yes, and...",
            "No, and...",
            "Yes, but...",
            "No, but..."
        ]
        const yesNoIndex = Math.floor(Math.random() * yesNo.length)
        blurt({
            title: 'Yes/No, and/but?',
            text: yesNo[yesNoIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }


    function rollFate() {
        selectedFate = document.getElementById("fateSelect").value;
        if(selectedFate == "Lightly Wounded"){
            const fatum = [
                "Discolored",
                "Scratched",
                "Bruised",
                "Harmful",
                "Dented",
                "Hurt",
                "Marred",
                "Flustered",
                "Scraped",
                "Nicked",
                "Blotchy",
                "Grazed",
                "Damaged",
                "Slashed",
                "Stubborn"
            ]
            const fatumIndex = Math.floor(Math.random() * fatum.length)
            blurt({
                title: 'Enemy Health',
                text: fatum[fatumIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedFate == "Heavily Wounded"){
            const fatum = [
                "Ragged",
                "Injured",
                "Bloodied",
                "Hurt",
                "Cracked",
                "Distressed",
                "Bashed",
                "Shaken",
                "Pounded",
                "Mauled",
                "Wobbly",
                "Hacked",
                "Battered",
                "Torn",
                "Worried"
            ]
            const fatumIndex = Math.floor(Math.random() * fatum.length)
            blurt({
                title: 'Enemy Health',
                text: fatum[fatumIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedFate == "Near Death"){
            const fatum = [
                "Fragmented",
                "Thrashed",
                "Staggered",
                "Faded",
                "Fragile",
                "Wrecked",
                "Ruined",
                "Scathed",
                "Weak",
                "Beaten",
                "Sloshy",
                "Tattered",
                "Crumbling",
                "Mangled",
                "Pained"
            ]
            const fatumIndex = Math.floor(Math.random() * fatum.length)
            blurt({
                title: 'Enemy Health',
                text: fatum[fatumIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else{
            blurt({
                title: 'Error',
                text: "No fate selected.",
                type: 'error',
                okButtonText: 'Uh oh',
                escapable: true
            });
        }
    }

    function rollActivities() {
        selectedActivityType = document.getElementById("creatureSelect").value;
        if(selectedActivityType == "Mindless"){
            const activity = [
                "Being eaten/consumed",
                "Being killed/butchered/harvested",
                "Blind/lame/insensate",
                "Congregating/amassing/clustering",
                "Consuming/eating/feeding",
                "Decoy/construct/fake/illusion",
                "Digging/burrowing",
                "Diseased/sick/poisoned",
                "Dismembering/taking apart",
                "Dying/dead",
                "Fighting/battling",
                "Frenzied/berserk/rabid",
                "Giving birth/hatching/dividing",
                "Going in circles/lost",
                "Killing/butchering",
                "Meandering aimlessly",
                "Mutated/conjoined/albino",
                "Nothing",
                "Tangled/stuck",
                "Trapped/caged"
            ]
            const activityIndex = Math.floor(Math.random() * activity.length)
            blurt({
                title: 'What are those creatures doing?',
                text: activity[activityIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedActivityType == "Animalistic"){
            const activity = [
                "Being eaten/consumed",
                "Being killed/butchered/harvested",
                "Blind/lame/insensate",
                "Congregating/amassing/clustering",
                "Consuming/eating/feeding",
                "Decoy/construct/fake/illusion",
                "Digging/burrowing",
                "Diseased/sick/poisoned",
                "Dismembering/taking apart",
                "Dying/dead",
                "Fighting/battling",
                "Frenzied/berserk/rabid",
                "Giving birth/hatching/dividing",
                "Going in circles/lost",
                "Killing/butchering",
                "Meandering aimlessly",
                "Mutated/conjoined/albino",
                "Nothing",
                "Tangled/stuck",
                "Trapped/caged",
                "Being eaten/consumed",
                "Being killed/butchered/harvested",
                "Blind/lame/insensate",
                "Congregating/amassing/clustering",
                "Consuming/eating/feeding",
                "Decoy/construct/fake/illusion",
                "Digging/burrowing",
                "Diseased/sick/poisoned",
                "Dismembering/taking apart",
                "Dying/dead",
                "Fighting/battling",
                "Frenzied/berserk/rabid",
                "Giving birth/hatching/dividing",
                "Going in circles/lost",
                "Killing/butchering",
                "Meandering aimlessly",
                "Mutated/conjoined/albino",
                "Nothing",
                "Tangled/stuck",
                "Trapped/caged",

                "Caring for/watching over someone",
                "Chasing/pursuing",
                "Competing/challenging/tourneying",
                "Crying/mourning",
                "Displaying/signaling/calling",
                "Feasting/gorging",
                "Fleeing/routing",
                "Foraging/seeking food",
                "Gathering or marshalling resources",
                "Grooming/preening/dressing up",
                "Having a psychotic episode",
                "Huddling/cuddling/comforting",
                "Marking territory/claiming land",
                "Mating/flirting/trysting",
                "Migrating/moving to a new home",
                "Patrolling/guarding/watching",
                "Playing/frolicking/gaming/sporting",
                "Quarreling/scuffling/arguing",
                "Resting/meditating",
                "Searching/seeking",
                "Seeking shelter or higher ground",
                "Sleeping/napping",
                "Stalking/tracking",
                "Starving/begging",
                "Stumbling around disoriented",
                "Taking care of young/children",
                "Training/trained/domesticated",
                "Undead version of creature",
                "Wandering/drifting",
                "Wounded/injured",
                "Caring for/watching over someone",
                "Chasing/pursuing",
                "Competing/challenging/tourneying",
                "Crying/mourning",
                "Displaying/signaling/calling",
                "Feasting/gorging",
                "Fleeing/routing",
                "Foraging/seeking food",
                "Gathering or marshalling resources",
                "Grooming/preening/dressing up",
                "Having a psychotic episode",
                "Huddling/cuddling/comforting",
                "Marking territory/claiming land",
                "Mating/flirting/trysting",
                "Migrating/moving to a new home",
                "Patrolling/guarding/watching",
                "Playing/frolicking/gaming/sporting",
                "Quarreling/scuffling/arguing",
                "Resting/meditating",
                "Searching/seeking",
                "Seeking shelter or higher ground",
                "Sleeping/napping",
                "Stalking/tracking",
                "Starving/begging",
                "Stumbling around disoriented",
                "Taking care of young/children",
                "Training/trained/domesticated",
                "Undead version of creature",
                "Wandering/drifting",
                "Wounded/injured",
            ]
            const activityIndex = Math.floor(Math.random() * activity.length)
            blurt({
                title: 'What are those creatures doing?',
                text: activity[activityIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedActivityType == "Intelligent"){
            const activity = [
                "Being eaten/consumed",
                "Being killed/butchered/harvested",
                "Blind/lame/insensate",
                "Congregating/amassing/clustering",
                "Consuming/eating/feeding",
                "Decoy/construct/fake/illusion",
                "Digging/burrowing",
                "Diseased/sick/poisoned",
                "Dismembering/taking apart",
                "Dying/dead",
                "Fighting/battling",
                "Frenzied/berserk/rabid",
                "Giving birth/hatching/dividing",
                "Going in circles/lost",
                "Killing/butchering",
                "Meandering aimlessly",
                "Mutated/conjoined/albino",
                "Nothing",
                "Tangled/stuck",
                "Trapped/caged",
                "Caring for/watching over someone",
                "Chasing/pursuing",
                "Competing/challenging/tourneying",
                "Crying/mourning",
                "Displaying/signaling/calling",
                "Feasting/gorging",
                "Fleeing/routing",
                "Foraging/seeking food",
                "Gathering or marshalling resources",
                "Grooming/preening/dressing up",
                "Having a psychotic episode",
                "Huddling/cuddling/comforting",
                "Marking territory/claiming land",
                "Mating/flirting/trysting",
                "Migrating/moving to a new home",
                "Patrolling/guarding/watching",
                "Playing/frolicking/gaming/sporting",
                "Quarreling/scuffling/arguing",
                "Resting/meditating",
                "Searching/seeking",
                "Seeking shelter or higher ground",
                "Sleeping/napping",
                "Stalking/tracking",
                "Starving/begging",
                "Stumbling around disoriented",
                "Taking care of young/children",
                "Training/trained/domesticated",
                "Undead version of creature",
                "Wandering/drifting",
                "Wounded/injured",
                "Bathing/bathroom break",
                "Bestowing honors/awards",
                "Betraying/backstabbing",
                "Building/breaking ground",
                "Bullying/taunting/teasing",
                "Burying/having a funeral",
                "Buying/arranging to purchase",
                "Camping/making camp",
                "Caring for/maintaining tools",
                "Celebrating/partying/dancing"
            ]
            const activityIndex = Math.floor(Math.random() * activity.length)
            blurt({
                title: 'What are those creatures doing?',
                text: activity[activityIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else{
            blurt({
                title: 'Error',
                text: "No type selected.",
                type: 'error',
                okButtonText: 'Uh oh',
                escapable: true
            });
        }
    }

    function rollModifiers() {
        const modifiers= [
            "Reactive Antimagic Zone - once a spell has been cast in the battlefield, no further spells may be cast there until the fight is over.",
            "Antimagic Zone - no spells can be cast in the area until the fight is over.",
            "Wild Magic Storm - roll on the Wild Magic effects table every time a spell is cast.",
            "Corrupted Soil - all movement made on foot deals 1d4 necrotic damage for every 5ft covered. The damage increases to 2d4 at 5th character level, 3d4 at 10th level, and 4d4 at 15th level.",
            "Blinding Radiance - all creatures with sunlight sensitivity are completely blind. Undead creatures take 20 radiant damage every turn.",
            "Necrotic Shroud - non-undead creatures gain a vulnerability to necrotic damage and come back to life as zombies when killed. Undead creatures have advantage on attack rolls and ability checks.",
            "Wicked Thunderbolts - assign a number to every creature and roll a die with that amount of sides. The number rolled has to succeed on a DC 15 DEX saving throw or get hit by a 4d10 lightning damage thunderbolt. Make this roll at the beginning and end of a round.",
            "Raging Storms - flying speed is nullified. Ranged attacks are made at disadvantage. Lightning and Cold damage bypass resistances (but not immunities).",
            "Fey Field - whenever any creature finishes its turn, it must succeed on a DC 15 CHA saving throw or be teleported to a random location on the battlemap. Fey creatures (or those with fey ancestry) make the saving throw with advantage.",
            "Aura of Healing - a healing spirit floats around the battlefield, searching for the wounded. Once a round is over, the last creature to have taken damage receives Xd6+X healing, with X corresponding to its level.",
            "Strong Winds - flying speed is nullified. Ranged attacks are made at disadvantage.",
            "Foggy Terrain - roll 1d4+2. Place that many fog clouds all over the battlefield. They'll disperse once the fight is over.",
            "Magical Mist - the battlefield is covered in a mist that lightly obscures the vision of all creatures present. It is also highly explosive. If a damaging spell is cast inside of the mist, it will cause a reaction that deals 2d12 force damage to everyone inside. Once that happens or combat is over, the mist disperses.",
            "Aura of Harming - a harmful spirit floats around the battlefield, looking for those yet unharmed. Once a round is over, creatures who didn't take any damage receive Xd6+X damage that bypasses resistances and immunities, with X corresponding to their levels.",
            "Earth Tremors - burrowing speed is nullified. At the beginning of any standing creature's turn, it must succeed on a DC 12 STR saving throw or fall prone and take 1d12 bludgeoning damage.",
            "Slippery Ice - the surface of the battlefield is encased in ice that can be melted with fire damage. The ice counts as difficult terrain. Creatures who begin their turn on the ice must succeed on a DC 12 DEX saving throw or fall prone and take 1d8 cold damage.",
            "Twisting Vines - strange plants sprout onto the battlefield in random spots. Going 10ft near them forces out a DC 14 STR saving throw. Upon failure, a creature is grappled by the vines.",
            "Guiding Wind - all ranged attack rolls are made at advantage. For the duration of the fight, ''Guiding Bolt'' becomes a 100% hit spell (like Magic Missile).",
            "Vampiric Hunger - all physical attacks restore the attacker's hit points by an amount equal to damage dealt. Doesn't work against undead or constructs.",
            "Deafening Quiet - the battlefield becomes encased inside of a bubble that resembles the ''Silence'' spell. Thunder damage is nullified, no sounds can be heard, and spells with verbal components cannot be cast.",
            "Scorching Heat - all fire damage bypasses resistances and inflicts burning upon failing a DC 12 CON save (deals 1d6 fire damage every turn, makes target vulnerable to fire damage)",
            "Mechanus Intervention - creatures from the mechanus plane become overseers of the battle that's taking place. No critical successes or critical failures can occur (they must be rerolled).",
            "Eldritch Whispers - creatures with an INT score above 3 make a DC 14 INT saving throw at the start of their turns. Upon failure, they go insane from forbidden knowledge being poured into their minds, suffering 1d12 psychic damage and losing their turns, while also having to repeat the saving throw every other turn. Once they succeed, however, they are immune to the effect for the rest of the fight.",
            "Twisted Force - until the end of combat, force damage bypasses resistances and immunities.",
            "Lucky Charm - all creatures on the battlefield can reroll their natural ones.",
            "Low Gravity - jump height and/or distance of all creatures is tripled.",
            "Sudden Death - death saving throws are disabled. Whenever someone drops to 0 hit points, they instantly die.",
            "Disintegration Field - creatures who drop to 0 hit points during this fight are disintegrated.",
            "Aura of Vulnerability - all creatures present on the battlefield become vulnerable to all damage types.",
            "Aura of Resistance - all creatures present on the battlefield become resistant to all damage types.",
            "Life Drain - every time a creature takes damage, it gains a level of exhaustion, capping at level 6 - which is when the creature finally dies. All exhaustion levels gained this way are instantly dropped the moment combat is over.",
            "Dogfight - all creatures gain a 60ft flying speed for the rest of the battle. Creatures who already had it merely increase their flight speed by said amount.",
            "Cruel Crits - critical hit range for all creatures is expanded by 1. For example: creatures with already expanded range, such as 18-19, will now crit on a roll of 17-19."
        ]
        const modifiersIndex = Math.floor(Math.random() * modifiers.length)
        blurt({
            title: 'Modifier',
            text: modifiers[modifiersIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    function rollVariants() {
        const variants= [
            "Cursed - radiant resistance, attacks deal bonus 1d8 necrotic damage, vulnerable to fire, cold, poison, acid, and lightning damage. Attacks can spread the curse if the target fails a DC 10 WIS saving throw. A ''Remove Curse'' spell can undo it.",
            "Diseased - physical attacks force targets to make DC 14 CON saving throws. Upon failure, the target contracts Cackle Fever/Sewer Plague/Sight Rot (at random).",
            "Blessed - necrotic resistance, attacks deal bonus 1d4 radiant damage, has a rechargable (5-6) heal beam with a range of 60ft that heals an ally for 10d4+10 hit points.",
            "Blazing - fire resistance, attacks deal bonus 1d6 fire damage. Can summon a 60ft/120ft range AOE fire pillar with the area of a 15ft cube. DC 15 DEX saving throw or you take 4d6 fire damage. Upon success, you only take half. ",
            "Infernal - fire immunity, attacks deal bonus 2d6 fire damage. Can cast fireball with a 5-6 recharge.",
            "Fiendish - immune to fire, poison and being charmed, resists cold and bludgeoning/piercing/slashing made with non-silvered or non-magical weapons. Can cast Hellish Rebuke at will.",
            "Mutant - has 1d4 special traits taken from other creature stat blocks. Highest ability score is increased by 10, and the lowest decreased by 5.",
            "Draconic - immune to a damage type correlated to scale colour. Can spread wings for 1 minute as a bonus action (60ft flying speed). Has a rechargable (5-6) 15ft cone breath weapon with a DC 16 DEX or CON saving throw that deals 6d8 damage (depending on damage type).",
            "Glacial - cold resistance, attacks deal bonus 1d8 cold damage. Can cast the Ray of Frost cantrip at 11th level and with a +10 to-hit modifier.",
            "Iceborne - cold immunity, attacks deal bonus 2d8 cold damage and force out a DC 16 CON save against being frozen (restrained, disadvantage on all melee/ranged attacks).",
            "Fey-Touched - advantage on CHA saving throws, can cast Misty Step at will.",
            "Mechanus-Touched - cannot roll a natural one, but cannot roll a natural twenty either.",
            "Savage Sortilege - the creature's spell attacks crit on a roll of 19 or 20. Furthermore, if something rolls a natural 1 or 2 on a saving throw against that creature's spell, it takes double damage.",
            "Savage - this creature critically hits on a roll of 18, 19 or 20.",
            "Frenzied - blindly rushes to attack the nearest creature, no matter if it's friend or foe. Its melee attack rolls are always critical hits.",
            "Vampiric - the creature's melee weapon or natural attacks heal it for the amount of hit points equal to damage dealt. Doesn't work against undead or constructs.",
            "Chosen by a deity - after dying, comes back to life with 50% of maximum health and all wounds and ailments cured. Only once per battle.",
            "Sparking - lightning resistance, attacks deal bonus 1d12 lightning damage. Has a doubled movement speed.",
            "Lightning Rod - lightning immunity (heals from lightning damage), attacks deal bonus 1d12 lightning damage. Can cast a rechargable (5-6) Lightning Bolt spell and even target himself to heal for the amount of damage rolled.",
            "Partially Magicproof - immune to spells of a level lower than 6.",
            "Magically Resistant - advantage on saving throws against magic.",
            "Deflector - all ranged weapon attacks are deflected back at the shooter if they hit.",
            "Magic Mirror - all ranged spell attacks are deflected back at the caster if they hit.",
            "Fortified - resistant to all damage types except a randomly selected one - Roll a d12: (1 - Bludgeoning, 2 - Piercing, 3 - Slashing, 4 - Fire, 5 - Cold, 6 - Poison, 7 - Acid, 8 - Lightning, 9 - Force, 10 - Radiant, 11 - Necrotic, 12 - Thunder).",
            "Elemental - immune to fire, cold, poison, acid and lightning damage.",
            "Blastproof - immune to thunder damage, resistant to force damage, cannot be moved against its will.",
            "Eagle-Eyed - ranged attacks have twice the range and are made at advantage when fired from at least 100ft away.",
            "Spell Mimic - can cast any spell it sees used in battle and does so at will, without needing material components.",
            "Fast Learner - has advantage on saving throws it previously failed. Attack rolls that hit it will be made at disadvantage the next time.",
            "Evasive - takes only half damage when failing a saving throw, and takes no damage when succeeding. Can use its reaction to halve the damage of an incoming attack.",
            "Agile - has advantage on DEX saving throws and can dash as a bonus action. Doesn't provoke opportunity attacks.",
            "Indomitable - has a rechargeable (5-6) ability that allows it to automatically succeed on a saving throw.",
            "Fearless - immune to being frightened, has advantage on attack rolls made against creatures larger than itself.",
            "Inspiring - has a rechargeable (5-6) ability that allows it to add +10 to an ally's ability check, saving throw or attack roll.",
            "Tough - its hit points are twice of that creature's typical average.",
            "Resilient - makes all saving throws with advantage.",
            "Teleporting - can cast Misty Step at will, but suffers a -2 AC penalty.",
            "Immune to Magic - unaffected by spells of all kinds, even healing or divination.",
            "Bulky - resistant to bludgeoning, piercing and slashing damage.",
            "Demonic - immune to two random damage types, has two special traits of other demons, can cast three 1d4th level spells at will (roll for each one).",
            "Celestial - immune to radiant damage, attacks deal an additional 1d8 radiant damage. Below 10th level/CR, can cast Guiding Bolt or Cure Wounds (mutually exclusive) on a recharge of 5-6.  At 10th level/CR, can cast Sunbeam or Heal (mutually exclusive) on a recharge of 5-6.",
            "Automaton - actually a construct that merely resembles said creature. Has +1 to its AC, is immune to poison damage and being poisoned, can be healed with Mending. Doesn't need to eat, sleep, or drink. Can be a target of heat metal.",
            "Undead - undead version of said creature. If it doesn't have one, it instead gains a necrotic immunity, an added 2d6 necrotic damage to all of its attacks, a Turn Resistance, and a 50% chance to come back from the dead after being struck down with anything other than radiant damage."
        ]
        const variantsIndex = Math.floor(Math.random() * variants.length)
        blurt({
            title: 'Variant',
            text: variants[variantsIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    function rollMorale() {
        const morale= [
            "Will surrender after heavy casualties",
            "Will surrender after heavy casualties",
            "Will surrender after heavy casualties",
            "Will try to run away after heavy casualties",
            "Will try to run away after heavy casualties",
            "Will surrender after light casualties",
            "Will try to run away after light casualties",
            "Will tactically retreat and come back after light casualties.",
            "Will run away and plan an ambush after heavy casualties",
            "Will surrender after monetary loss",
            "Will run away after monetary loss",
            "Will run away after monetary loss",
            "Will run away after monetary loss",
            "Will surrender if equipment deteriorates",
            "Will run away if equipment deteriorates",
            "Will surrender if enough resources have been expended",
            "Will run away if enough resources have been expended",
            "Will run away if enough resources have been expended",
            "Will run away if enough resources have been expended",
            "Will surrender after failing its objective",
            "Will surrender after failing its objective",
            "Will run away after failing its objective",
            "Will fight to the death",
            "Will fight to the death",
            "Will fight to the death",
            "Will fight to the death",
            "Will fight to the death",
            "Will fight to the death",
            "Will fight to the death",
            "Will fight to the death",
            "Will fight to the death",
            "Will fight to the death",
            "Will negotiate peace at advantage",
            "Will negotiate peace at advantage",
            "Will negotiate surrender at disadvantage",
            "Will negotiate surrender at disadvantage",
            "Will negotiate surrender at disadvantage",
            "Will bargain mid-fight",
            "Will beg for mercy at disadvantage",
            "Will beg for mercy at disadvantage",
            "Doesn't want to fight. Can be persuaded to flee/surrender.",
            "Doesn't want to fight. Can be persuaded to flee/surrender.",
            "Doesn't want to fight. Can be persuaded to flee/surrender."
        ]
        const moraleIndex = Math.floor(Math.random() * morale.length)
        blurt({
            title: 'Morale',
            text: morale[moraleIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    function rollMotivation() {
        const motivation= [
            "Material Gain",
            "Material Gain",
            "Material Gain",
            "Material Gain",
            "Material Gain",
            "Material Gain",
            "Material Gain",
            "Material Gain",
            "Material Gain",
            "Material Gain",
            "Material Gain",
            "Material Gain",
            "Honour",
            "Honour",
            "Glory",
            "Glory",
            "Glory",
            "Glory",
            "Glory",
            "Domination",
            "Domination",
            "Domination",
            "Domination",
            "Domination",
            "Wrath",
            "Wrath",
            "Wrath",
            "Order/Duty",
            "Order/Duty",
            "Order/Duty",
            "Order/Duty",
            "Order/Duty",
            "Order/Duty",
            "Personal Investment",
            "Survival",
            "Survival",
            "Survival",
            "Bloodlust",
            "Bloodlust",
            "Project power",
            "Project power",
            "Project power",
            "Cause fear",
            "Cause fear",
            "Reach a place",
            "Escape from a place"
        ]
        const motivationIndex = Math.floor(Math.random() * motivation.length)
        blurt({
            title: 'Motivation',
            text: motivation[motivationIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    function rollObstacles() {
        const obstacles= [
            "1d4 small features (trees, rocks, smaller objects)",
            "1d4 small features (trees, rocks, smaller objects)",
            "1d4 small features (trees, rocks, smaller objects)",
            "1d4 small features (trees, rocks, smaller objects)",
            "1 medium feature (rows of trees, boulders, larger objects)",
            "1 medium feature (rows of trees, boulders, larger objects)",
            "1 medium feature (rows of trees, boulders, larger objects)",
            "1 medium and 1 small feature",
            "1d4 linear features (walls, fences, rows of objects)",
            "1d4 medium featuers and 1d4 linear features",
            "1d4 large features",
            "1 large features and 1d4 linear features",
            "1 large feature and 1d4 medium features"
        ]
        const obstaclesIndex = Math.floor(Math.random() * obstacles.length)
        blurt({
            title: 'Obstacle',
            text: obstacles[obstaclesIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    function rollWincon() {
        const wincon= [
            "Protect an NPC",
            "Protect an object",
            "Defend a location",
            "Survive for X rounds (for example, 1d4+1)",
            "Defeat all enemies (can be non-violent)",
            "Subdue as many enemies as possible",
            "Kill all enemies",
            "Defend innocent bystanders",
            "Rescue a hostage",
            "Save a captive",
            "Capture an enemy",
            "Take an object",
            "Retrieve an item",
            "Destroy an object",
            "Make a sacrifice",
            "Escape",
            "Eliminate healers first (otherwise their leader is impervious to damage)",
            "Reach a specific location",
            "Prevent enemies from reaching a specific location",
            "Stand your ground and endure 1d4 waves",
            "Make truce",
            "Obtain information",
            "Close a portal/gate"
        ]
        const winconIndex = Math.floor(Math.random() * wincon.length)
        blurt({
            title: 'Win Condition',
            text: wincon[winconIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    


    function npcRole() {
        const role= [
            "Criminal",
            "Healer",
            "Researcher",
            "Scholar",
            "Foreigner",
            "Merchant",
            "Collector",
            "Agent",
            "Ambassador",
            "Assassin",
            "Government official",
            "Adventurer",
            "Judge",
            "Historian",
            "Mage",
            "Military official",
            "Rebel",
            "Servant",
            "Spy",
            "Business owner",
            "Artisan",
            "Villain",
            "Gang leader/member",
            "Gambler",
            "Traveler",
            "Performance",
            "Socialite",
            "Mercenary",
            "Leader",
            "Mystic",
            "Artist",
            "Hunter",
            "Outcast",
            "Heretic",
            "Guard",
            "Investigator",
            "Aristocrat",
            "Apprentice/Student",
            "Emissary",
            "Fugitive",
            "Law enforcement",
            "Celebrity",
            "Bounty hunter",
            "Explorer",
            "Prophet",
            "Cultist",
            "Innkeeper",
            "Alchemist",
            "Farmer",
            "Smuggler",
            "Wanderer",
            "Outsider"
        ]
        const roleIndex = Math.floor(Math.random() * role.length)
        blurt({
            title: 'NPC Role',
            text: role[roleIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    function npcPersonality() {
        const personality= [
            "Stoic",
            "Intolerant",
            "Friendly",
            "Cunning",
            "Kind",
            "Pious",
            "Hardhearted",
            "Stern",
            "Wary",
            "Cynical",
            "Irritable",
            "Nervous",
            "Dangerous",
            "Cheery",
            "Smug",
            "Clever",
            "Bold",
            "Tenacious",
            "Cautious",
            "Hot-tempered",
            "Aggressive",
            "Greedy",
            "Obsessed",
            "Secretive",
            "Mischievous",
            "Paranoid",
            "Sarcastic",
            "Aloof",
            "Strong-willed",
            "Rude",
            "Bitter",
            "Charming",
            "Angry",
            "Suspicious",
            "Violent",
            "Cruel",
            "Gloomy",
            "Proud",
            "Relaxed",
            "Confident",
            "Generous",
            "Agreeable",
            "Apathetic",
            "Critical",
            "Deceitful",
            "Conceited",
            "Compassionate",
            "Crude",
            "Elitist",
            "Charitable",
            "Laconic",
            "Brave"
        ]
        const personalityIndex = Math.floor(Math.random() * personality.length)
        blurt({
            title: 'NPC Personality',
            text: personality[personalityIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    function npcGoal() {
        const goal= [
            "Build a relationship",
            "Undermine a relationship",
            "Restore a relationship",
            "Find a home",
            "Travel to a place",
            "Removal of political leader",
            "Rebel against power",
            "Escape the law",
            "Cure an ill",
            "Destruction of ancestral enemy",
            "Find a person",
            "Removal of spiritual leader",
            "Escape from a dangerous enemy",
            "Resolve a dispute",
            "Make an agreement",
            "Pay a debt",
            "Protect a secret",
            "Enrich themselves",
            "Protection from former compatriot",
            "Regain honor stolen by someone else",
            "Protect family interests",
            "Avenge a wrong",
            "Fulfill a duty",
            "Mystical knowledge/power",
            "Secure provisions",
            "Releasing an ancient evil",
            "Seize power",
            "Seek a truth",
            "Create an item",
            "Advance status",
            "Harm a rival",
            "Refute a falsehood",
            "Find a person",
            "Protect a person",
            "Fulfill the commands of their patron",
            "Undermine the status quo",
            "Protect the status quo",
            "Secure provisions",
            "Seize power",
            "Cause a dispute",
            "Collect a debt",
            "Spread faith",
            "Defend a place",
            "Help a friend",
            "Solve a dispute",
            "Prevent war or conflict",
            "Steal from former employer",
            "Protect an organization",
            "Cause dishonor/embarrassment to enemy",
            "Find lost knowledge",
            "Rescue loved one",
            "Protecting the world from an ancient evil"
        ]
        const goalIndex = Math.floor(Math.random() * goal.length)
        blurt({
            title: 'NPC Goal',
            text: goal[goalIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    function rollSpecial() {
        const encounter= [
            "A mysterious hooded figure",
            "Observed from afar",
            "A creature enters its lair",
            "Unfriendly inhabitants",
            "A strange glowing object",
            "An ominous gathering",
            "A wounded traveler",
            "Friendly inhabitants",
            "A spiritual entity",
            "A religious gathering",
            "A lone priest",
            "The emissary of a deity",
            "Corrupted by magic",
            "Check to spot a trap",
            "An evil entity",
            "Guards on duty",
            "Hostile animals",
            "An enemy patrol",
            "Organized labor",
            "An abandoned mystical object",
            "A hostile entity",
            "A runaway prisoner",
            "Hunted by an enemy",
            "A sacred site",
            "Someone seeks your death",
            "Assistance is asked",
            "A ritual gathering",
            "A magical guardian",
            "A portal to somewhere else",
            "Legacy of an ancient ritual",
            "A solvable roadblock",
            "An unsolvable roadblock (return later)",
            "Signs of a horrible fate",
            "Eldritch whispers",
            "A lone survivor",
            "A strange sealed container",
            "A magical barrier protecting an object",
            "Aftermath of a spell gone wrong",
            "A wild magic surge",
            "A meeting of leaders",
            "An outcast",
            "A dangerous discovery",
            "An ancient secret",
            "A group of prisoners",
            "A meeting of enemies",
            "A place of devastation",
            "An unknown artefact",
            "A summoning",
            "A cursed object",
            "Whispering voices",
            "A friendly gathering",
            "Your reputation precedes you",
            "An old friend"
        ]
        const encounterIndex = Math.floor(Math.random() * encounter.length)
        blurt({
            title: 'Special Encounter',
            text: encounter[encounterIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }


    
