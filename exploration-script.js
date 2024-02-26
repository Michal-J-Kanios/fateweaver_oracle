    //REFERENCES
    // const messages = [
    // “...”,
    // “...”,
    // “...”
    // ]
    
    // const randIndex = Math.floor(Math.random() * messages.length) // Get random index 
    
    // console.log(messages[randIndex]) // Get random message from messages array

    //PACING FUNCTIONS
    //================
    function rollPace() {
        const pacing = [
            "Foreshadow trouble",
            "Reveal a detail",
            "NPC activity",
            "Advance threat",
            "Advance a plot",
            "Advance a questline",
            "Roll one Action",
            "Roll two Actions"
        ]
        const pacingIndex = Math.floor(Math.random() * pacing.length)
        blurt({
            title: 'Pace',
            text: pacing[pacingIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    
    function rollAction() {
        const action = [
            "Ally action (friendlies do smth)",
            "Enemy action (hostiles do smth)",
            "Plot action (smth story-related happens)",
            "Player action (player does smth by accident)",
            "Environment action (smth happens by itself)",
            "Object action (thing does smth)",
            "Antagonist encounter (opposing force/forces)",
            "New NPC is generated"
        ]
        const actionIndex = Math.floor(Math.random() * action.length)
        blurt({
            title: 'Action',
            text: action[actionIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }


    function rollFailure() {
        const failure = [
            "Your ally is dead. Maybe they stepped in front of you, or pushed you out of the way and took the fatal damage in your place, perhaps you'll never know...",
            "All of your money has been stolen.",
            "All of your money AND 2 of your best magical items/weapons/armour have been stolen (the ones you use most -- decide ties by cost/rarity).",
            "You are tied up in a dungeon/prison cell or at your attackers' camp. How do you escape?",
            "You are maimed, and suffer Disadvantage on all STR, CON, DEX ability checks and saving throws. This condition can only be healed by a Greater Restoration spell.",
            "The trauma of what happened stays with you. Roll a d6 -- you gain a (1-3) Long-Term Madness or (4-6) - Indefinite Madness (DMG pg. 260, read the Madness rules and roll accordingly).",
            "The Wild Magic/Patron/Deity/Angelic Guide that saved you has also cursed you (roll on Minor Detrimental Properties table, DMG pg. 220, apply effects as if you were attuned to an artefact) OR placed you under a Geas spell with no saving roll.",
            "Your best magical item/weapon/armour took the brunt of what should have been the killing blow and was shattered. It cannot be repaired.",
            "You have died. If you roll on this table to SPECIFICALLY AVOID THIS OUTCOME, roll again.",
            "You came out unscathed. Maybe your enemies were scared away by someone else, maybe a friendly face showed up just in time, perhaps you'll never know. Whatever happened, be grateful..."
        ]
        const failureIndex = Math.floor(Math.random() * failure.length)
        blurt({
            title: 'Failure',
            text: failure[failureIndex],
            type: 'warning',
            okButtonText: 'I understand',
            escapable: true
        });
    }

    function rollRandomEvent() {
        const randomEvent = [
            "A mysterious event",
            "A neccessary resource runs out",
            "Impending doom",
            "Shady dealings",
            "An ambush",
            "An abduction",
            "A work-related gathering",
            "A figure from the past",
            "An unfortunate event",
            "A problem returns",
            "A savior",
            "A mysterious item",
            "Religious event",
            "The need to hide",
            "Conflict",
            "Escort duty",
            "A just cause gone wrong",
            "A confrontation",
            "Destruction",
            "A character disappears",
            "Neutral NPC appears",
            "Friendly NPC appears",
            "Hostile NPC appears",
            "A rare/unique gathering",
            "Someone is where they shouldn't be",
            "An influential person",
            "Useful information from an unknown source",
            "Useful information from a trusted source",
            "A scapegoat",
            "Death",
            "A group is in trouble",
            "Help, for a price",
            "Help, altruistic",
            "Injustice",
            "A standoff",
            "Theft",
            "Fraud/Deception",
            "Followed",
            "Meeting friend",
            "Asking for help",
            "A mysterious new person",
            "An argument",
            "An emotional gathering",
            "A fortunate find",
            "A catastrophe",
            "A crime is committed",
            "Something has been found",
            "A social gathering",
            "Suspicious behaviour",
            "A fight",
            "Enemies appear",
            "A character is harmed",
            "A new enemy",
            "A dangerous situation",
            "The promise of reward",
            "A fall from grace"
        ]
        const randomEventIndex = Math.floor(Math.random() * randomEvent.length)
        blurt({
            title: 'Random Event',
            text: randomEvent[randomEventIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }


    function rollObjective() {
        const objective = [
            "Eliminate a threat",
            "Resolve conflict",
            "Harm someone",
            "Slay a specific monster",
            "Hunt harmful pests/beasts/creatures",
            "Deal with local banditry",
            "Restore/fix something",
            "Escort something/someone",
            "Deliver something",
            "Retrieve information from an NPC",
            "Discover the nature and origin of a strange phenomenon (if you're confused, try rolling on the Weird Locales table)",
            "Save something",
            "Secure the aid of a character",
            "Retrieve a stolen item",
            "Rescue someone",
            "Fetch a specific item",
            "Steal a specific item",
            "Rescue a captive/Rescue hostages",
            "Kidnap someone/Take hostages",
            "Meet someone",
            "Solve mystery",
            "Arrest a criminal",
            "Investigate an area",
            "Help a villain find redemption",
            "Determine a villain's identity",
            "Clear the name of an innocent NPC",
            "Negotiate peace between hostile sides (warring nations, feuding families, etc.)",
            "Parley with a villain",
            "Stop a band of smugglers",
            "Uncover a conspiracy to overthrow a ruler",
            "Find a wanted fugitive",
            "Protect an important object",
            "Protect an important person",
            "Guard an important location",
            "Confirm/deny rumours"
        ]
        const objectiveIndex = Math.floor(Math.random() * objective.length)
        blurt({
            title: 'Objective',
            text: objective[objectiveIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    function rollTwist() {
        const twist = [
            "You are racing against other creatures with the same or opposite goal",
            "You are responsible for the safety of a noncombatant NPC",
            "You are prohibited from killing the villain, but the villain has no compunctions about killing you",
            "You have a time limit",
            "You have received false or extraneous information (by mistake or deliberately)",
            "Completing the quest goal fulfills a prophecy or prevents the fulfillment of a prophecy",
            "You have two different goals, but can only complete one",
            "Completing the goal secretly helps the villain",
            "You must cooperate with a known enemy to achieve the goal",
            "You are under magical compulsion (such as a Geas spell) to complete your goal",
            "Another adventurer or adventuring party is close to completing the quest (some of the objectives might be completed, or the reward might already be claimed)"
        ]
        const twistIndex = Math.floor(Math.random() * twist.length)
        blurt({
            title: 'Twist',
            text: twist[twistIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    function rollTheme() {
        const theme = [
            "Ancient",
            "Spooky (light horror)",
            "Creepy (moderate horror)",
            "Thriller (heavy horror)",
            "Relaxed (light action)",
            "Mad Max (intense action)",
            "Political (as in, intrigue)",
            "Fae (as in, Feywild)",
            "Shadowy (as in, Shadowfell)",
            "Aberrated (weird, gross, mutated)",
            "Infernal/Fiendish (as in, Nine Hells)",
            "Celestial",
            "Demonic",
            "Undead",
            "Wild (as in, Wild Magic)",
            "Mysterious",
            "Magical",
            "Military",
            "Exotic",
            "Giant",
            "Draconic",
            "Mechanical (clockworks, warforged, mechanus plane, etc.)",
            "Natural (as in, nature)",
            "No theme (reconsider spicing up this quest, maybe play it as is)"
        ]
        const themeIndex = Math.floor(Math.random() * theme.length)
        blurt({
            title: 'Theme',
            text: theme[themeIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    function rollEnemies() {
        const enemies = [
            "Beast or monstrosity with no particular agenda",
            "Charmed/Dominated Beast",
            "Corrupted Celestial",
            "Aberration bent on corruption or domination",
            "Fiend bent on corruption or personal gain",
            "Dragon bent on domination and plunder",
            "Demon bent on chaos and destruction",
            "Giant bent on plunder",
            "Fey with a mysterious goal",
            "Cultist(s)",
            "Conqueror",
            "Bandits",
            "Gangs",
            "Assassins",
            "Magic Society",
            "Insane Wizard",
            "Necromancer",
            "Person seeking revenge",
            "Main Villain (BBEG) or his minions",
            "Recurring Villain",
            "New Villain",
            "Villain of the week",
            "Undead with any agenda",
            "Schemer seeking to gain power/rule",
            "Criminal mastermind",
            "Raider/ravager (humanoid)",
            "Person under a curse",
            "Misguided zealot"
        ]
        const enemiesIndex = Math.floor(Math.random() * enemies.length)
        blurt({
            title: 'Enemies',
            text: enemies[enemiesIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    function rollAllies() {
        const allies = [
            "Skilled adventurer",
            "Inexperienced adventurer",
            "Enthusiastic commoner",
            "Unwilling commoner",
            "Soldier",
            "Sage",
            "Revenge seeker",
            "Raving lunatic",
            "Celestial ally",
            "Fey ally",
            "Disguised monster",
            "Villain posing as an ally",
            "Wandering Hero",
            "Local Hero",
            "Friendly adventuring party",
            "Rival adventuring party",
            "Generate an NPC"
        ]
        const alliesIndex = Math.floor(Math.random() * allies.length)
        blurt({
            title: 'Allies',
            text: allies[alliesIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }


    //WILDERNESS FUNCTIONS
    //================
    function rollWeather() {
        const weather = [
            "Pleasant",
            "Lukewarm",
            "Warm",
            "Chilly",
            "Cold",
            "Windy",
            "Breezy",
            "Static air (no winds)",
            "Sunny",
            "Cloudy",
            "Very Cloudy",
            "Rain/Snow",
            "Heavy Rain/Heavy Snow",
            "Clear Skies",
            "High Winds",
            "Scorching Heat",
            "Freezing Cold",
            "Thunder",
            "Hail",
            "Wildfires",
            "Wild Magic Storm"
        ]
        const weatherIndex = Math.floor(Math.random() * weather.length)
        blurt({
            title: 'Weather',
            text: weather[weatherIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    
    function rollArea() {
        const area = [
            "Being eaten/consumed",
            "Being killed/butchered/harvested",
            "Blind/insensate",
            "Congregating/amassing/clustering",
            "Decoy/construct/fake/illusion",
            "Digging/burrowing",
            "Diseased/Sick",
            "Poisoned",
            "Dismembering/taking apart",
            "Dying",
            "Dead",
            "Fighting",
            "Frenzied/Rabid/Berserk",
            "Giving Birth/Hatching",
            "Going in circles",
            "Lost",
            "Killing",
            "Wandering aimlessly",
            "Hanging around",
            "Nothing",
            "Stuck/Tangled",
            "Trapped/Ensnared/Caged",
            "Caring for someone/something",
            "Chasing/pursuing",
            "Protecting their offspring",
            "Competing/challenging",
            "Crying/mourning",
            "Displaying/signaling/calling",
            "Feasting/gorging",
            "Eating small meal",
            "Fleeing/routing",
            "Napping",
            "Resting",
            "Sleeping",
            "Foraging/seeking food",
            "Grooming/peening/dressing up",
            "Gathering resources",
            "Huddling/cuddling/comforting",
            "Marking territory/claiming land",
            "Having a psychotic episode",
            "Migrating",
            "Mating/flirting",
            "Patrolling/guarding",
            "Watching/observing",
            "Stalking",
            "Being stalked",
            "Playing/gaming/sporting",
            "Arguing/conflicted",
            "Searching/seeking",
            "Seeking shelter or higher ground",
            "Tracking",
            "Stumbling around disoriented",
            "Taking care of young/children",
            "Training/trained/domesticated",
            "Undead version of creature",
            "Wandering/drifting",
            "Bathing/bathroom break",
            "Bestowing honors/awards",
            "Betraying/backstabbing",
            "Building/breaking ground",
            "Bullying/taunting/teasing",
            "Burying/having funeral",
            "Buying/making a purchase",
            "Camping/making camp",
            "Maintaining tools",
            "Celebrating/partying/dancing"
            ]
        const areaIndex = Math.floor(Math.random() * area.length)
        blurt({
            title: 'Creatures',
            text: area[areaIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }


    function rollWeird() {
        const weird = [
            "Dead magic zone (no spells can be cast)",
            "Wild magic zone (roll on the Wild Magic Surge table whenever a spell is cast)",
            "Boulder carved with talking faces (might expend wisdom or fool travelers)",
            "Crystal cave that mystically answers questions",
            "Ancient tree containing a trapped spirit",
            "Battlefield where lingering fog occasionally assumes humanoid forms",
            "Permanent portal to another plane of existence",
            "Wishing well",
            "Giant crystal shard protruding from the ground",
            "Wrecked ship, which might be nowhere near water",
            "Haunted hill",
            "Barrow mound",
            "Healing fountain (drinking its water counts as Lesser Restoration)",
            "Giant statue",
            "Intact circle of standing stones",
            "Deactivated magic circle",
            "Abandoned druid ring",
            "River ferry guided by a skeletal captain",
            "Field of petrified soldiers or other creatures",
            "Forest of petrified trees",
            "Forest of awakened trees",
            "Canyon containing a dragons' graveyard",
            "Remains of a gargantuan creature (corpse or bones)",
            "A hidden Glyph of Warding activated when in near vicinity",
            "Floating earth mote with a tower on it",
            "Intact obelisk etched with a warning, historical lore, dedication, or religious iconography",
            "Chaotic Weather (the area's weather can only be Thunder/Hail/Wildfires/Wild Magic Storms)",
            "Underground Mind Flayer Colony",
            "An illusionary town"
        ]
        const weirdIndex = Math.floor(Math.random() * weird.length)
        blurt({
            title: 'Weird Locales',
            text: weird[weirdIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    //rolls encounter based on selected biome
    function rollEncounter() {
        selectedBiome = document.getElementById("biomes").value;
        if(selectedBiome == "Forest"){
            const forestEncounters = [
                "You are jumped by 1d4+2 lowlife bandits who will try to kill you if you don't surrender your weapon(s) and your money. They don't care about armour or magical items.",
                "In the middle of a deep forest, a well sits among what appears to have once been a lovely glade. Now, the trees around it are dying and rotting on the spot, and light appears to struggle to reach the glade.",
                "A child asks the PCs to help him find his pet dog. But this simple task leads them somewhere where they don't belong.",
                "Local children have been going missing. They are found wandering on the edge of the woods. They seem altered somehow and they tell stories of a witch who has been using them in her strange magics.",
                "A smiling stranger roasts rats, frogs, and squirrels on sticks. He offers a bite to the PCs.",
                "A chatty bard runs across the party, spreading rumours, exposition, and generally lore-dumping about this forest or the local state of affairs.",
                "There have been threats against a local noble. They require an escort to get them safely through the mysterious forest to the next larger town.",
                "Lizardfolk have been seen carving strange runes into the trees of the forest. No one has been able to decipher their meaning.",
                "Someone is clearly hunting you. A person, not a beast. Only question is: when will they strike?",
                "You feel like something is hunting you. Don't lose your head, or you might become that creature's next meal.",
                "A deer jumps in front of the party, stands up on two legs, mutters something in Sylvan, and promptly leaves.",
                "A door has appeared in the base of a mighty willow tree. The door has been locked for centuries, but one morning the door is wide open. Is it an invitation to enter? Or did something exit?",
                "1d4 Scouts with 1d4 Blink Dogs are patrolling the area.",
                "Roll 1d4-1. An enraged: (1 - black), (2 - brown), (3 - owl)...bear is rampaging across the forest. The bear has 4d12 temporary hit points and multiple turns, acting immediately after any other character in combat. If you rolled 0, the local druids have managed to quell the beast's anger, or the rangers got to it first. Pacifying the beast will attract friendly druids who'll reward the party with 1d100+50 GP and some food if needed.",
                "You stumble upon a very angry shambling mound that rushes towards your general direction.",
                "A talking crow flies up to you, and starts cawking about a danger lurking in the forest, persuading you to leave as soon as possible. There's a 50% chance that the crow is actually right, and a large or huge creature with a 1d8 Challenge Rating (CR) will soon appear to wreak havoc.",
                "You stumble upon a neutral wood woad, getting increasingly annoyed by your presence.",
                "A band of 1d4+2 Goblin archers is revealed when one of them misses an arrow that was supposed to go straight through your skull.",
                "Three Goblin Bosses riding on Worgs have come for your party. If you fail to defend yourselves, 'difficult' party members will be killed, while the weakest (or last standing) will be abducted and enslaved. During the third round of combat, 1d6 Goblins arrive as reinforcements.",
                "1d4 Gnolls and 2d4 Hyenas are hunting in your near vicinity, and are very close to smelling your presence.",
                "You stumble upon a baby Owlbear and its ferocious mother, who mistakenly thinks you've come to hurt her youngling (or maybe she was right?).",
                "You lock eyes with a beautiful Unicorn that is about to flee. If you speak Elvish, Celestial, or Sylvan, and are good-aligned, the Unicorn will warn you of any danger present nearby, or point to the nearest exit if you are lost",
                "An evil wizard is found slumped against the tree. He's alive, but his robes are ragged and his body is smoking, almost as if he just got blasted with a fire spell.",
                "A traveling caravan of Halflings is making its way through the valley. They sell trinkets, put on plays, and tell delightful stories.",
                "There is a mysterious flicker, and suddenly, one of your party members abruptly stops in their tracks. They're paralyzed.",
                "The forest has crept and expanded, consuming all nearby structures except one. A deep thrumming can be heard as you approach, and the vines struggle to maintain their grip on the loose stones.",
                "You see a man-sized shadow just up the trail waving its arms at you. “Over here, quickly, I've caught one!”",
                "A local lumberjack started chopping down a new area of forest. Every tree is completely hollow.",
                "You run into a tired lumberjack, who would be glad if someone took his place for a while so he could take a nap.",
                "Rumor is spreading of a huge centipede that's been devouring wolves and deer. It hides in the forest, sleeping by day.",
                "You find the body of a recently deceased adventurer. If you decide to loot the corpse, roll 1d20. On a roll of NAT 1, the corpse turns out to be a living adventurer just playing dead, presumably in order to trick other adventurers into lowering their guard. In any case, the adventurer's bag contains random pieces of starting equipment for your class, one item rolled from the ''Random Treasure'' table, and 1d20+10 GP.",
                "You find a decomposing, humanoid body. Roll 1d20. (1-10) - there's nothing to go along with it. (11-20) - near the corpse, you spot either a random trinket, a broken weapon, a torn letter, or a small beast feasting on the remains.",
                "A faction of dryads is in the middle of a war, making the forests extremely dangerous and stifling trade routes.",
                "The forest has begun to glow, for whatever reason.",
                "A pack of wolves has taken in a young girl to raise as one of their own. They're highly sophisticated, using silverware and everything.",
                "You hear the howling of multiple wolves. Roll a DC 15 perception check. If you fail, a pack of 1d4+2 Wolves will come for your party immediately. If you succeed, the wolves either give up chase, or stalk you and strike when you're vulnerable (toss a coin if you're unsure).",
                "There's something or someone watching you. You don't know what and from where, but you can tell that you're being watched. Resting might not be the best idea for now...",
                "A fish wriggles about the forest path. Nobody is sure where it came from, but it seems to be able to breathe air.",
                "The local woodsmen have complained about breaking their axes far more frequently than usual. They could use some help.",
                "As your party approaches a clearing, they are met by a group of what they initially thought to be wild horses. Upon closer look, these horses are all wearing saddles. One saddle still has what appears to be a human leg attached.",
                "An earthquake creates a huge fissure through the center of the forest, revealing a hidden valley filled with lush greenery. Scores of dinosaurs call this valley home.",
                "Thirteen leaves are arranged in a circle in a forest glade. Each holds a small amount of hot chicken broth.",
                "A worn rope hangs down from one of the tallest trees in the forest. It seems sturdy enough…",
                "A pack of 2d4+2 gray wolves stalk the players from afar, slowly but surely following them, awaiting the right moment to strike the weakest of the bunch.",
                "A wounded cow, who wandered away from her herd, cries for help. Upon inspecting her, the players realize that she has a magical wound under her belly, spreading into the ground like moss.",
                "You step in a hidden trap that activates a series of other strange mechanism. As the noises of clicking and clacking get louder, you anxiously await your fate (roll 3 times on the ''Random Trap'' table).",
                "Roll a DC 10 DEX saving throw. If you fail, you fall into a 15ft high pit with 1d8 spikes at the bottom. Each spike deals 2d4 piercing damage.",
                "A troll stops your party and demands a toll if you want to pass through. Persuading the Troll has a DC of 20.",
                "You are stopped by the body of a Giant Snake blocking your path. The snake body extends greatly across the path. If you follow the body, you will find a hole in the ground, which is the lair of the snake.",
                "A giant bird starts circling the players. Its shadow glooms over their presence. The bird tries to tries to snatch one of the adventurers to take them back to its nest.",
                "A pair of vines pull of one the adventurers by the legs, then, one by one they are all snatched by living vines, which drag them to a giant carnivore tree that wants eat them.",
                "A pack of 2d4 rabid dogs ambushes the party of adventurers.",
                "The party encounters a giant dead tree with a small space carved inside, where the bones of an adventurer lie.",
                "The players stumble upon a foul hamlet in a glade. It smells like corpse. If they investigate the houses, they will find 2d4 zombies, which proceed to attack the party.",
                "A brutish group of 1d4 ogres are looking for their next lunch, coming across you party, they attack you.",
                "The players come across an oppossing adventuring party of 1d4 warriors resting. They act friendly and kind, and try to trick the players to rest with them, so that they can loot their resources and treasure.",
                "The players meet a random adventuring party (use Fate Weaver's NPC generator) who also happened to be passing through the forest. Determine their current goal by rolling a quest in the ''Pacing'' section.",
                "A blue mist starts emerging from the woods. The adventurers enter a fey-like forest, enchanted and colourful.",
                "The party hears a loud and brash sound of a falling tree. A rampaging treant starts destroying everything around the party. It seems to be under some sort of dark influence.",
                "A giant undead bear charges against the party from the forest bush.",
                "An adventurers pack is left alone on the player's path. It contains useful resources, 1d4 potions of healing, 5d20 GP, and a little pack of 1d4 gems. Inside, there's a letter stained with blood about paying a debt.",
                "An adult green dragon circles the forest skies, looking for its next prey. The party must hide, or become the next target. The lair of the dragon is nearby.",
                "The party accidentally sneak up on a young dreen dragoness, whose wings have been torn apart during a particularly nasty crash landing. She is injured, and clearly trying to rest.",
                "The party stumbles upon Bandits/Goblins/Kobolds running away with green dragon eggs. If the party engages said thieves in combat, during round three, a young green dragon will swoop in and pick off anyone holding one of her eggs.",
                "A seemingly possessed, small animal of the forest's fauna seems to be staring intently at the party. A DC 18 investigation check reveals that the critter is acting as a spy for a rather cunning green dragon.",
                "You find an abandoned backpack filled to the brim with 1d4+3 rations of food. It might be a trap (coinflip or consult the fate table).",
                "A wandering and gloomy ranger passes by the party. It warms them of an strange danger deep in the woods. The ranger offers guidance to the nearest settlement. There's a 50% chance he's leading them to an ambush by thieves.",
                "The day suddenly turns into night. The party hears a distant choir of voices in cacophony. If they follow it, they find a group of druid cultists in the middle of a summoning ritual.",
                "A whimsical fairy is causing mischief until it suddenly spots your adventuring party, redirecting its pranks on you.",
                "Very strong winds take the party by surprise. If they follow the origin of the winds, they will find a pair of air elementals having a brawl.",
                "Two sentient black bears are sitting by a neatly polished tree stump. The two distinguished gentlemen seem to be playing cards.",
                "The players come across a small glade with large dirt mounds. If they investigate further, they are attacked by a 1d4 Ankheg. There's a hidden system cave underneath them.",
                "A sudden green mist starts moving towards the players. The mist is poisonous and deals 1d4 damage every turn. It comes from a static death plant, close to the party.",
                "Entering a dark and old part of the forest, the party runs into a giant fire beetle colony on the surface. There's at 1d20+5 beetles guarding the area. They aren't aggresive, but will attack intruders.",
                "The players find a stone statue of a man in combat pose. Touching it morphes the statue into a living human soldier. The soldier is confused and angry. He has been frozen in time for anywhere between 100-500 years.",
                "A previous adventuring party is killed by a group of 3d4 bandits, lead by one bandit captain. The players run into the aftermath of the battle, while the bandits are busy stealing the war spoils.",
                "A man is yelling for help! His wife is wounded an slowly bleeding out. He begs of you to come closer. There's a 50% chance he's actually the captain of a bandit team hidden inside the trees and bushes nearby, waiting for his signal. On his signal, the bandits will fire volleys of arrows and activate several traps. This can be avoided if you surrender your valuables, of course.",
                "You stumble upon two small trenches - one filled with Goblins, and the other one filled with Kobolds. They seem to be children, shooting each other with mudball-loaded slings, pretending they're in a war. If you have the Soldier background, they would pay you whatever they can in exchange for telling them some war stories.",
                "A sobbing healer is trying to revive someone recently deceased, but seemingly to no avail.",
                "A flock of 2d4 flying snakes descend into the ground, attacking the players. They are defending a nearby nest.",
                "The party comes across a little vertical hole in the ground. Inside, there's a small cave with 2d4 rust monsters.",
                "The adventurers come across a little pond of crystal-clear water. The bottom of the pond is only 1 meter deep, and it's made of small blue crystal. Drinking the water grants 3d6 temporary hit points and resistance against necrotic damage for 8 hours.",
                "The adventurers come across a little pond of ink-black water. The bottom of the pond is only 1 meter deep, and it's made of an otherworldly, rough material. Touching the water reveals it's actually Black Pudding, waiting for its next victim.",
                "The adventurers come across an abandoned stone temple, covered in vines and moss. The entrance is guarded by one gorgon. Inside, there's various useful items, weapons and treasure, but it's guarded by 1d4 lamias scattered around various rooms.",
                "An adult brass dragon spots the party from the sky. He lands near them and starts talking about how beautiful the forest is. The dragon won't leave, as he's really excited about talking.",
                "The party encounters a lost, very little green dragon wyrmling, screeching for its mother in Draconic baby-talk. Roll 1d100 - this is the amount of minutes in which the mother is going to arrive, looking for her baby. If you roll 100, its mother is dead. If you refuse to hand over her baby, she will attack your party.",
                "You find a parade of miserable-looking Elves, who are dressed in chains and skimpy clothing, and seem to be chanting something while gathering resources. Interacting with them reveals they are the slaves of a sadistic, ancient green dragon kingpin. If there's an Elf of any kind in the party, the parade will try to deceive you into believing they are a druidic grove seeking help - all in order to bring said Elf party member to their tyrannical overlord.",
                "You find the carcass of a young black dragon, its mouth bubbling with poison, and body half-eaten. In 1d20+10 minutes, an ancient green dragon will arrive to retrieve the rest of his lunch.",
                "The players find an abnormally large dead bear. He's dead and has its stomach wide open. Inside, there's 3 common martial weapons and an explorers pack.",
                "A crying hill giant is spotted by the party. He's next to the corpse of another giant, which has a giant axe piercing his skull. There's a weird haze of electricity surrounding the area.",
                "The players find a large pine-like tree with very vibrant yellow needles. It produces an exotic golden fruit, about 1d4-1 of them, similar to a pineapple. Eating it grants the same effects a long-rest produces.",
                "The party comes across a large bog in the middle of the forest. There's 4d6 giant frogs scattered around. While not aggresive, they are very territorial.",
                "A dead bird falls from the sky. After a few seconds, dozens of more dead birds start raining. The cause is a pair of Stirges, looking for their prey.",
                "You find a giant rats nest under the roots of a tree. It's filled with precious ornaments. There's a 4d4 small baby rats that start crying at the sight of the adventurers. After 5 minutes, 2d8 giant rats reach the nest.",
                "The party finds an abandoned barrel full of quality red wine.",
                "The adventurers are stopped by a massive ravine crossing across the forest. There's a wounded NPC screaming for help on the bottom of the ravine.",
                "The players run into a giant tree house. The place is occupied by 3d6+2 goblins.",
                "The party discovers an ancient temple, overgrown by the forest and hidden beneath trees. There's a small tunnel that leads into an ancient dungeon of forgotten origin.",
                "The party comes across the tree nest of a pack of 2d4 harpies. There's precious gems inside the nest, as well as harpy eggs, ready to hatch.",
                "The party stumbles upon an owlbear, eating the remains of a recent prey.",
                "The party hears distant screeching noises and echoing wails. If they investigate (DC 17), they spot a bone devil stalking them. If not, the bone devil appears during the first long rest they take, or at night.",
                "A couatl circles above the trees. The celestial creature is looking for a barbed devil. The players can help the couatl find it.",
                "A terrible earthquake shakes the land. Afterwards, a massive purple worm emerges from the ground, destroying everything left and right. It seems to be blinded by some sort of magically induced rage.",
                "A Hippogriff is fighting a Manticore in the skies, and seems to be badly losing.",
                "On the path of the party, they spot a distant watchtower on top of a hill. It's abandoned, except for a few 2d4 pesky giant rats. There's a lot of useful items inside, and they can even use it as a refuge.",
                "The forest suddenly turns darker and smells like rotten. They enter a swampy area, obscured by the old trees. There's a nearby cabin, surrounded by a mud pond, where a pair of green hags live. There's a 50% chance that a night hag comes to the cabin if the players get inside.",
                "The party disturbs the sleeping grounds of 2d4 giant bats that attack them on sight.",
                "A warband of 3d4 hobgoblin rushes past the party on foot. They are running towards a battle against an elven group of rangers.",
                "A pair of hunters (or rangers) stop the party, warning them about a powerful predator in the near area. The party can help the hunters tracking down and killing the predator, which is a powerful guardian naga (since the naga is good-aligned and the rangers are disturbing its territory for monetary gain, the players might side with the naga instead).",
                "The party enters a dark and eerie area of the forest. The trees are old, dark and wide, and there's spiderwebs everywhere. If they keep moving, they will find 3d6 giant spiders.",
                "A large wooden totem appears on the path. This totem can grant 3 simple wishes. There's a 50% chance that the wish granted is the contrary to what the player wished.",
                "The woods start to slowly flood. On the nearest body of water, there's a 1d4 water elementals wreaking havoc.",
                "The party discovers an abandoned military fort in a small glade. There's no one inside, as if everyone just vanished. Pieces of armor, clothes and weapons are randomly scattered around the fort.",
                "The players run into the aftermath of a battle between a barbarian and a giant. They are both dead, locked in combat. The barbarian carries a quest contract related to killing the giant.",
                "The party finds a hidden chest inside a tree. They must get it out of the tree to open it. If they cut the tree, it reveals to be an angry treant. The chest has a 50% chance of being empty.",
                "The party finds an abandoned caravan. Overgrown vines hide it among the forest. Inside, there's a man turned into some sort of vine-creature, formed out of branches and leaves. He asks to be free of this curse.",
                "The party finds a calm river with still and dark water. Underneath the water there's 2d4 Walking Fish, waiting to ambush someone.",
                "The party reaches a dead patch of woods, where the grass is decaying and the trees are dead. At the center of the area, a pile of corpses leave a terrible stench. If the players touch them, they contract a deadly disease.",
                "The players find an adventuring party of 1d4 explorers resting. They offer them food, warmth and a place to rest.",
                "A sudden wildfire ignites the forest. It lasts for 1d4 days before extinguishing.",
                "A parade of mystical elves walk across the players. They ignore the party and move gently across the forest. If the players follow them quietly, they will lead them to a hidden elven city in the forest.",
                "The sounds of a lyre enchants the forest. If players follow the sound, they will find a friendly faun, who offers them food and songs.",
                "A sudden thunderstorm of magical origin appears, covering the forest. A few minutes afterward, blue-colored fireflies and fairies start flying numbly across the forest. The storm last for 1d4 hours.",
                "A friendly explorer passes by the players. The explorer can give them directions and advice about traveling in the forest and also sells maps.",
                "An exotic bird is spotted resting on a branch. It's a magical creature that can grant great fortune to those who touch it, and great pain to those who hurt it.",
                "The party is ambushed by a group of 1d4 angry kobolds. They are armed with makeshift weapons and wood pikes.",
                "The forest turns completely silent all of a sudden. If the players start moving, they will hear cracking sounds of wooden being broken. Afterwards, a pair of giant ents stop the party and try to capture them.",
                "The players find a small cabin in a forest glade. There's nobody in the cabin, but there's plenty of beautiful gems and tasty food. If all the players get inside, the cabin suddenly shuts down and starts crushing the players, revealing to be a giant mimic. All the gems and food looted turn to be ash.",
                "The party comes across a shrine dedicated to a forest god.",
                "A giant ape, walking in two feet, charges against the party and abducts the smallest member of the party, taking them to its burrow in the depths of the woods.",
                "The party find a lone and mysterious elf resting on a campfire. He offers them food and heat. The elf can see into the future and may help one character see their destiny.",
                "The players reach an area with lots of fallen trees and destroyed landmarks. There's tons of rocks all around. A pair of basilisk ambushes the party and try to eat them or turn them into stone.",
                "A brown bear is enjoying its food, or rather WAS, until you showed up. Roll a DC 14 stealth check. Upon failure, you are spotted, and the bear charges at you aggressively, thinking you're out for its food supplies.",
                "A beautiful, young druid woman is gathering herbs for her signature herbal remedies that act as Lesser Restoration spells. She has a wisdom of 20 and is much older than she appears. There's a 1/20 chance (NAT 1 on a 1d20) that she's actually a green hag trying to trick you into helping her gather ingredients for various poisons and dark elixirs. If you uncover her ruse and still decide to help her, the hag will reward you with a vial of Midnight Tears (the poison)."
            ]
            const forestEncountersIndex = Math.floor(Math.random() * forestEncounters.length)
            blurt({
                title: 'Forest Encounter',
                text: forestEncounters[forestEncountersIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedBiome == "Hill"){
            const hillEncounters = [
                "2d4 Giant Eagles attacking 2 Hill Giants. (75%) The giants are winning (25%) the Eagles are winning.",
                "2d6 goats and 1d6 giant goats are having a ramming contest. There's a 50% chance that 1d6 of them flee, and a 50% chance they're angered by you meddling in their competition.",
                "1 or 2 Brown Bears (50% chance) are walking back to their home in the forest",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "test1"
            ]
            const hillEncountersIndex = Math.floor(Math.random() * hillEncounters.length)
            blurt({
                title: 'Hill Encounter',
                text: hillEncounters[hillEncountersIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }  
        else{
            blurt({
                title: 'Error',
                text: "No biome selected.",
                type: 'error',
                okButtonText: 'Uh oh',
                escapable: true
            });
        }
    }
    

    //rolls storms based on selected heavy weather
    function rollStorms() {
        selectedStorm = document.getElementById("weatherEffects").value;
        if(selectedStorm == "Thunder"){
            const thunderEffects = [
                "The thunder roars viciously. All are suddenly deafened.",
                "The storm's winds are intense. Movement reduced by half.",
                "A massive tornado of wind and lightning appears in the middle of the battlefield, sucking in everyone within the range of a 30ft sphere if they fail a DC 15 STR saving throw. Sucked creatures receive 2d12 lightning and 1d12 thunder damage, and are then catapulted 60ft away in a random direction, receiving further 1d12 bludgeoning damage. The tornado will change position after every round, and disappear after it has touched all corners of the battlemap.",
                "Roll a d8 every turn. (1-2) - A thunderbolt hits an ally (or you), (3-4) - A thunderbolt hits an enemy, (5-8) - A thunderbolt hits the ground. Thunderbolts deal 3d10 damage.",
                "An object is struck by lightning.",
                "A building is struck by lightning."
            ]
            const thunderEffectsIndex = Math.floor(Math.random() * thunderEffects.length)
            blurt({
                title: 'Thunder',
                text: thunderEffects[thunderEffectsIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedStorm == "Hail"){
            const hailEffects = [
                "Weapons containing strings, chains, or other dynamic mechanisms (bows, flails, crossbows, guns, etc.) become temporarily unusable, as their components freeze solid.",
                "An arcane chill fills the area. Spell attacks dealing cold damage gain a +4 bonus to hit or impose disadvantage on enemies' saving throws to resist them. Rolling NAT 1 on a saving throw to resist a cold damage spell results in becoming frozen solid (cannot act until thawed out).",
                "The freezing cold makes it difficult to focus on anything else. Ability checks are made at disadvantage, unless a creature has cold immunity.",
                "Roll a d8 every turn. (1-2) - An ally (or you) is pelted by ice, (3-4) - An enemy is pelted by ice, (5-8) - A random object is frozen solid. Pelted creatures receive 2d8 cold damage and have their movement speed reduced by 10ft for every time they're hit (can't go lower than 10ft).",
                "A wicked blizzard halts everyone in their tracks. Movement speed is reduced by half, and ranged weapon attacks are made at a disadvantage.",
                "Surfaces become slippery, and the air is obscured by intense snow. Whenever you start moving, make a DC 10 STR saving throw or fall prone. If you try climbing, swimming, or flying you take 3d6 cold damage, fall prone, and gain one level of exhaustion. Cold resistance nullifies exhaustion, and cold immunity nullifies all negative effects wahtsoever."
            ]
            const hailEffectsIndex = Math.floor(Math.random() * hailEffects.length)
            blurt({
                title: 'Hail',
                text: hailEffects[hailEffectsIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedStorm == "Wildfires"){
            const wildfireEffects = [
                "The heat is unbearable. Succeed on a DC 10 CON saving throw or gain a level of exhaustion. Repeat for all characters every round until you take cover/short rest/long rest/the encounter is over.",
                "All metals slowly overheat towards the point of melting. Everyone wearing heavy armor receives one exhaustion level per round until they don it off. Outside of combat, one exhaustion level is gained for every hour with armor equipped. Furthermore, all metal weapons receive a penalty of -3 to attack rolls made with them.",
                "The area feels stuffy, as if there wasn't any air. Melee attack rolls have disadvantage, spell attacks dealing fire damage gain a +4 bonus to hit and impose disadvantage on saving throws to resist them, and finally, movement speed is reduced by half.",
                "Roll a d8 every turn. (1-2) - A random ally (or you) catches on fire, taking 4d6 initial fire damage, and 1d6 fire damage every turn until they Disengage, (3-4) - an enemy catches on fire, (5-8) - a random flammable object catches on fire instead.",
                "Creatures with a CON lower than 15 suffer heatstrokes -- their CON is temporarily lowered by 1 at the end of their turns. Once their CON reaches 0, they fall unconscious, and die after 3 hours if not cooled down.",
                "Water evaporates. Travel requires twice the amount of rations of water. Create or Destroy Water spell can only be used for destroying water."
            ]
            const wildfireEffectsIndex = Math.floor(Math.random() * wildfireEffects.length)
            blurt({
                title: 'Wildfires',
                text: wildfireEffects[wildfireEffectsIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedStorm == "Wild Magic Storm"){
            const wildStormEffects = [
                "Casting spells triggers surges of Wild Magic. Increased chance of encountering sentient plants, apparitions of the dead, and other strange illusions.",
                "Casting spells triggers surges of Wild Magic. A random Mechanus plane creature appears to restore order, and will end the storm in 5 minutes. The creature will turn hostile if interrupted.",
                "Casting spells triggers surges of Wild Magic. A random Feywild creature appears to spread mischief, and will force everyone to roll for Wild Magic Surges every turn if not stopped within 5 minutes. The creature will turn hostile if interrupted.",
                "Roll a d8 every turn. (1-4) - An ally (or you) has to roll on the Wild Magic table, (5-8) - An enemy has to roll on the Wild Magic table",
                "Casting spells triggers surges of Wild Magic. Every time anyone tries to move, they must succeed on a DC 10 CHA saving throw, or be teleported 30ft in the opposite direction of where they wanted to go.",
                "The Wild Magic Storm abruptly ends, presumably moving to a different location."
            ]
            const wildStormEffectsIndex = Math.floor(Math.random() * wildStormEffects.length)
            blurt({
                title: 'Wild Magic Storm',
                text: wildStormEffects[wildStormEffectsIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        
        else{
            blurt({
                title: 'Error',
                text: "No weather effect selected (how did you even manage to do that?)",
                type: 'error',
                okButtonText: 'Uh oh',
                escapable: true
            });
        }
        //REFERENCE
        /*const weatherIndex = Math.floor(Math.random() * weather.length)
        blurt({
            title: 'Weather',
            text: weather[weatherIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });*/
    }


    function rollTerrain() {
        const terrain = [
            "Desecrated Ground - undead have advantage on all saving throws, have two lives (guaranteed bounce-back to full HP when hit points fall to zero), and radiant damage is reduced by half. Holy water purifies 10ft of the area, while the hallow spell purifies it completely. Detect Evil and Good senses this terrain.",
            "The area's water is frigid - a creature can be immersed in frigid water for a number of minutes equal to its CON score before suffering any ill effects. Each additional minute warrants a DC 10 CON saving throw to avoid gaining 1 level of exhaustion. Creatures with cold resistance/immunity autosucceed.",
            "Pits of quicksand are set up in the area - roughly a 10-foot-square area, walking into it causes a creature to sink 1d4+1 feet into the quicksand and restrains it. It sinks another 1d4 feet on the start of every turn. The creature can escape by succeeding on a DC 10 + N STR check, where N is equal to the amount of feet it has sunk into the quicksand. The DC changes to 5 + N if another creature is actively helping it.",
            "Razorvine is growing in abundance - a plant that grows in wild tangles and hedges or clings to buildings, 10-foot-high, 10-foot-wide, 5-foot-thick, AC of 11 and 25 HP, immunity to bludgeoning/piercing/slashing damage, direct contact requires a DC 10 DEX saving throw. Failing it results in 1d10 slashing damage beingtaken.",
            "Slippery ice covers large chunks of ground - difficult terrain, where someone's first move onto it requires succeeding on a DC 10 Acrobatics check or falling prone.",
            "High Ground - the enemies have higher ground and roll initiative with advantage.",
            "Player High Ground - the player has higher ground and rolls initiative with advantage.",
            "Scattered Props - explosive barrels, abandoned weapons, unused scrolls, bushes and boulders, etc. Several objects fill the battlemap. Interact with them as you please.",
            "Howling Winds - flying speed is nullified for medium or smaller creatures, walking speed is halved, climbing becomes impossible.",
            "Fae Grounds - violence committed in the area attracts angry creatures from the Feywild, seeking to punish those who disrupt their natural order.",
            "Mechanus Grounds - it's impossible to have disadvantage or advantage while in this area, furthermore, any Wild Magic Surge activated in the area attracts displeased creatures from the Mechanus plane, who seek to restore order to their territory.",
            "Scorched Earth - something or someone sabogated the logistics of the area, e.g. by burning its bridges, setting fire to nature, blowing up buildings, freezing the water, teleporting-in unnatural predators to destabilize ecosystems, or quite literally just scorching the earth",
            "Hunting territory - a hunter, be it humanoid or beast, is lurking in the area, and will seek an opportunity to strike at the perfect time, by (for example) prioritizing weaker targets, or even waiting until the foes kill each other off.",
            "Experiment - a scientist/mage/cosmic entity is using the area as a testing environment. If anything goes horribly wrong, an intervention will be issued.",
            "Holy Ground - paladins and clerics roll initiative with advantage, undead stay far away, and any water present in the area contains healing properties similar to that of a Lesser Restoration spell. Lastly, necrotic damage is reduced by half. Detect Evil and Good senses this terrain.",
            "Roll two terrain modifiers and add them at once. Can't be both Desecrated and Holy ground though. Furthermore, two high grounds cancel each other out."
        ]
        const terrainIndex = Math.floor(Math.random() * terrain.length)
        blurt({
            title: 'Terrain',
            text: terrain[terrainIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    //DUNGEON SECTION
    //===============

    function rollRoomType() {
        const RoomType = [
            "Empty",
            "Monster",
            "Monster with treasure",
            "Trap",
            "Trap with treasure",
            "Unguarded treasure",
            "Special Encounter"
        ]
        const RoomTypeIndex = Math.floor(Math.random() * RoomType.length)
        blurt({
            title: 'Room Type',
            text: RoomType[RoomTypeIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }


    function rollSencounter() {
        const sEncoun = [
            "A mysterious altar",
            "Observed from afar",
            "A lair",
            "A creature pen",
            "Unfriendly inhabitants",
            "A strange glowing object",
            "An ominous gathering",
            "Slain travelers",
            "Slain travelers (bones)",
            "Friendly inhabitants",
            "A spiritual entity",
            "A religious gathering",
            "A lone priest",
            "The emissary of a deity",
            "Corrupted by magic",
            "A trap for the unwary",
            "An evil entity",
            "Guards on duty",
            "Hostile animals/pets",
            "An enemy patrol",
            "Organized labor",
            "An abandoned mystical object",
            "A hostile entity",
            "A captive",
            "Hunted by an enemy",
            "A sacred site",
            "Someone seeks your death",
            "Assistance is asked",
            "A ritual gathering",
            "A magical guardian",
            "A portal to somewhere else",
            "Legacy of an ancient ritual",
            "A sleeping enemy",
            "A blocked or broken path",
            "Signs of a horrible fate",
            "An enemy lying in wait",
            "A lone survivor",
            "A secret meeting",
            "A strange, sealed container",
            "A magical barrier protecting an object",
            "Aftermath of a spell gone wrong",
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
            "Roll two Special Encounters"
        ]
        const sEncounIndex = Math.floor(Math.random() * sEncoun.length)
        blurt({
            title: 'Special Encounter',
            text: sEncoun[sEncounIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }
    
