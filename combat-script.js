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
            "Necrotic Shroud - non-undead creatures gain a vulnerability to necrotic damage. Undead creatures have advantage on attack rolls and ability checks.",
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
            "",
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


    
