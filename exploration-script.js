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
                "An adult green dragon circles the forest skies, looking for its next victims to extort or even eat. The party must hide, or become the next target. The lair of the dragon is nearby.",
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
                "Earth tremors reveal a crumbling shrine hidden away behind a line of mossy trees and a large rock. It's dedicated to some animal deity.",
                "A scent of spring covers the area around a large rock. Anyone within distance of 120ft (sphere) of the rock is unable to cast spells because of a present dead magic zone.",
                "A stampede of herd beasts blocks the path forward.",
                "1d4 spiders and 3 giant wolf spiders are investigating the area for cave entrances. They seem to be largely skittish.",
                "Three guards have set up camp on a wooded hill. One of them is trying to spot incoming danger from the surrounding thick fog, while the other two are busy eating their meals.",
                "1d4 Giant Hyenas are patrolling the area, searching for their next victim. Make a DC 14 stealth check or risk becoming their next meal.",
                "1d2 randomly generated NPCs are investigating a tomb entrance inside a crumbling well. They may possess a magic item (roll on the 'Magic Item' table in the roleplay section",
                "A bugbear priest is carving a giant chalk figure into the hillside.",
                "A manticore is guarding a farmer's field, but available for hire.",
                "Many commoners prepare for a race chasing a cheese wheel down a hill.",
                "A hill giant is trying to eat a tree. They believe they can no longer eat meat and are trying other foods with mixed success.",
                "Several gnomish artificers are trying to repair a clockwork device.",
                "An awakened poisonous snake (Deception +2, speaks Common, INT 10) is trying to sell local landmarks for anything it can get.",
                "A chubby Halfling under the name ''Andrew Cake'' is parading around on a Goliath mount who pretends to be his chariot. The Halfling is selling pastries and sweets that will supposedly ''turn you into an alpha male''.",
                "A jolly werewolf fond of bad jokes is hunting for a griffon to train.",
                "A pair of newly married Dwarven soldiers are starting a romantic trip through the hills. They will approach the first bard they see and ask said bard to paint a portrait of them together.",
                "A cowardly troll dressed in furs is prospecting for gold. No luck yet.",
                "A band of Goblins is sneaking up on a sleeping druid, playing Rock-Paper-Scissors to determine which one strikes first. Unbeknownst to you and them, the druid is awake, and merely pretending to be asleep to teach the Goblins a lesson.",
                "A friendly goblin boss with an excitable small beast pet (bat, spider, cat, owl) is hunting for other animals to tame, and dreams of finding a home outside goblin society.",
                "A relaxed druid who loves art offers to paint your party against a nearby hill.",
                "An aging noble is seeking business partners involving a local mine. 50% for it to be a pyramid scheme.",
                "A tribal warrior with a luxurious fur cloak keeps talking to trees and plants. They're an outcast from their society.",
                "A beastmaster ranger is taking his pet wolf on a walk, whistling and strolling peacefully. He seems to be comfortable with the area, and could provide some directions on moving forward.",
                "A vicious thunder suddenly kicks up. Select the 'Thunder' option and roll on the 'Storms' table.",
                "Suddenly there is heavy precipitation opposite of the current season. Roll for Hail or Wildfire effects on the 'Storms' table.",
                "Something is watching you from above. As you tilt your head upwards, you notice you're being circled by 1d3 Wyverns. They must've been stalking you for a while now, seeing as they're ready to strike. Will you try to lose them, fight, or die trying?",
                "Howling winds are making it difficult to move. Your travel is exceptionally exhausting, netting you a level of exhaustion once you arrive at your destination.",
                "You stumble upon an unstable bridge, almost ready to collapse.",
                "You stumble upon an unstable mine entrance, about to collapse. There are screams coming from the inside. Someone yelling for help? Better investigate. Or not. Maybe it's too risky...",
                "A magical mist descends around your party, completely obscuring the path you were taking. There is no way to tell which direction is which.",
                "A mudslide/rockslide occurs right by you. Succeed on a DC 14 DEX save or take 3d12 bludgeoning damage.",
                "You encounter a circle of stones that acts as an elemental portal. Your character doesn't know that yet, of course.",
                "You encounter a circle of stones that acts as a Feywild Crossing. You realise this, because a portal suddenly opens, and through it, a pixie flies out.",
                "A badly hurt Griffon is locked inside a beast pen next to an abandoned campsite. It lacks the strength or willpower to break out.",
                "As you approach a clear spring, 5 Stirges suddenly surround you, each of them attempting to latch onto you all at once.",
                "You hear the howling of wolves and follow the noise over a short distance, only to discover that they're in cages set up near a cave entrance. From the entrance, you can see a tunnel littered with torches. There must be some kind of group occupying that very cave system, ergo, it must hold something of value... Right?",
                "A bronze dragon wyrmling is playfully chasing herd animals.",
                "A young copper dragon is pestering an old wizard, begging him to share some of his adventuring stories.",
                "Two panthers are migrating somewhere, up until you accidentally stand in their way. They begin retreating and hissing loudly. If you fail to prove you're not a threat, they will retaliate.",
                "1d2 Lions are being attacked by an enraged Giant Hyena (has access to 2 actions and has 1d12+6 temporary hit points).",
                "An acolyte and 1d4 priests are foraging for herbs on the hillside, possibly to use them for medicine.",
                "1d4+1 Worgs are guarding a lush mushroom ring with several recently dug holes. More Goblin forces might be nearby. Whatever is inside that mushroom ring, it's probably something valuable if it requires such protection.",
                "1d4-1 Hill Giants are running away from an adult red dragon, having presumably stolen something from his horde. If you roll 0 on the amount of hill giants, there were 3, but they're all dead by the time you got to the scene.",
                "Someone has been stalking you. Not a beast. A PERSON. You barely noticed, but decided to act like you haven't. Your stalker is clearly unaware you've noticed their endeavours, netting you some time to think about your next move.",
                "Something has been hunting you for quite a long time. A beast? A monster? Certainly nothing humanoid, that's for sure. If you're wondering, yes, it knows you've just noticed :)",
                "A random NPC allergic to wasps is running away from 1d2 swarms of wasps.",
                "A hill giant is assaulting a local hamlet, throwing a temper tantrum because its villagers refuse to welcome the giant into their society.",
                "Two hill giants are bullying a farmer and his family, stomping on his crops and wrecking his home.",
                "Two hill giants are beating each other to death with rocks, presumably because of an argument gone wrong.",
                "As a shiver runs down your spine, a mighty roar from above makes your ears hurt. Once you tilt your head up, you see it very, very clearly. An adventurous adult red dragon is flying not far from your current location -- but is it after you, or after something else? Consult the 'Fate' table in the roleplay section or toss a coin.",
                "A rather large amount of harmless insects flies in front of you in the form of a cloud that obscures your vision. They are clearly fleeing, but from what?",
                "An earthquake causes various fissures to open. If there are mountains nearby, an avalanache might come down (50% chance). Either way, hefty damage will be dealt to local structures.",
                "As you trip, you start tumbling down the hill, stopping a few feet short of being impaled on a bed of stone spikes under a cliff. Perhaps it's your lucky day.",
                "You encounter a bush with strangely enticing berries (1d10+4 of them). Succeed on a DC 15 nature check to see whether they're poisonous berries or wild goodberries.",
                "As you attempt to cross through a rocky stream, 1d6+2 Mud Mephits surprise attack you. They seem to be worshipping a Water Elemental that resides in the stream. Said Water Elemental will enter combat during round two, spawning 3 more Mud Mephits and 2 Ice Mephits.",
                "You encounter a strange-looking statue holding a magic item. If you reach for the item, roll 1d4. On 1, the item is an illusion, and the statue is an explosive trap dealing 3d10+5 force damage. On a 2, the magic item is up for grabs. On a 3, the statue protecting the magic item is a Gargoyle surrounded by 5 Dust Mephits. On a 4, the statue is a Gargoyle, but the magic item is fake.",
                "A family of lions is relaxing on top of a grassy hill. Their guard is lowered, as they consider themselves the 'Kings' of this hill, and think nothing would dare attack them.",
                "On the other side of a turbulent stream, you spot an enraged (takes a turn after every other combat participant) Werebear devouring sheep while they're still alive. Next to you lies the headless body that was once their shepherd. You see the shepherd's head being carried away by the stream. As you ponder what to do, you lose track of the Werebear, and suddenly feel something warm breathing on your neck... Roll initiative.",
                "You notice a pair of random NPC adventurers walking towards a tomb with an ivy-covered cave entrance, presumably because it piqued their interest. If you succeed on a DC 18 Perception check, you spot 5 Gnolls and 6 Hyenas hiding among rocks near the cave entrance, preparing to strike at the adventurers. If you fail this skill check, the gnoll band gets to surprise attack the unsuspecting NPCs. Whether you want to intervene or not is up to you.",
                "You are spotted by a band of 1d6+3 Orc raiders using cave bears as mounts. They announce their presence by blowing into their War Horn, which seems to be a magical item capable of taming the beasts they're riding. As for their motives, the Orcs demand you give them everything you own, including your clothing, and will only leave you alone when you're naked and on the ground. If you choose to resist, the raiding band will attempt to coerce you with brute force.",
                "You step into a nest of 1d4 Giant Poisonous Snakes, 1d4 Giant Constrictor Snakes, and 1d6+2 Poisonous Snakes. It likely wasn't an accident, but rather an ambush, as in the distance you see 2 Swarms of Poisonous Snakes rapidly approaching your location. They will arrive during round two of combat in case their larger brethren haven't finished you off.",
                "You encounter 4 Ogres having a dispute with a Troll, and the argument keeps getting more and more heated. If you manage to solve their dispute, you might gain their trust or even friendship.",
                "A Troll stops you in your tracks, and demands you pay a fine for trespassing. If you refuse, it tries to give you a 'better deal', which is to pay it tribute. The tribute will not only spare you from fighting the Troll, but also allow you to continue moving through its territory (supposedly), however, the tribute is twice as expensive."
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
        else if(selectedBiome == "Mountain"){
            const mountainEncounters = [
                "A drakewarden ranger is taking their pet drake on a walk, whistling and strolling peacefully. He seems to be comfortable with the area, and could provide some directions on moving forward.",
                "A vicious thunder suddenly kicks up. Select the 'Thunder' option and roll on the 'Storms' table.",
                "While resting at the mountain peak, the players are ambushed by a group of rogue mountain goats. They are aggressive, enraged (additional action), and highly skilled climbers, making for a challenging battle.",
                "The players come upon a beautiful glen filled with colorful flowers and a crystal clear pond. However, they soon realize that the flowers are poisonous and the pond is infested with giant leeches.",
                "Players find a group of commoners fighting a group of 4d4 kobolds. The kobolds are trying to steal the people's chickens and goats. The kobolds are actually kobolds from a nearby nest. The nest is nearby, but it is hidden by magic.",
                "What's that? A rumbling of sorts. Look out, it's an avalanche! Make a DC 15 DEX saving throw or tumble down the mountain, rolling another encounter and taking 4d12 fall damage.",
                "Something has been hunting you for quite a long time. A beast? A monster? Certainly nothing humanoid, that's for sure. If you're wondering, yes, it knows you've just noticed :)",
                "Amidst a narrow pass, the adventurers stumble upon the remnants of a trader’s caravan, the goods scattered and abandoned. Inspecting the area reveals tracks that suggest an attack by mountain predators. The party can choose to track down the beasts, rescue any survivors, or salvage what’s left for clues and resources.",
                "A convocation of Giant Eagles descends gracefully from the sky, circling the party with curious eyes. They carry messages from a distant aerie, seeking help against an encroaching dragon that threatens their nests. This encounter could lead to an aerial alliance or a high-flying battle against a draconic foe.",
                "A sudden rumble precedes the appearance of an Earth Elemental, angered by the disturbance of its sacred ground. It demands restitution or a display of respect to the forces of nature. Players must navigate this tense meeting with diplomacy or prepare for a potential clash with this formidable guardian of the mountain.",
                "A bubbling spring infused with magical properties draws attention. Drinking from it may have beneficial effects, such as temporary enhancements to abilities, or it could result in unexpected consequences. Wise adventurers might investigate the source or guard this secret closely.",
                "A sudden cascade of boulders crashes down the mountain. It's a trap—either natural or by design—forcing the party to dodge for their lives or get swept up in its destructive path. This encounter tests agility and might lead to a mystery: was it a natural occurrence or a deliberate ambush?",
                "The adventurers come across a curious set of fossils embedded within the mountainside, remnants of some colossal, ancient beast. Scholars or collectors might pay handsomely for such a find, but extracting it undamaged requires skill and care. This discovery may also attract unwanted attention from grave robbers or rival archaeologists.",
                "A clearing atop the mountain is bathed in an ethereal glow, only visible during the full moon. It’s a place of power where druids convene or where the veil between worlds grows thin. Events here feel fated, and the party might experience visions, gain ancient knowledge, or confront creatures from other planes.",
                "On a wide snow-covered ledge, the shadow of a Frost Giant looms. This towering being might be open to parley, offering quests or trade in goods not found in the lowlands, or it might see the adventurers as trespassers, leading to an icy battle of monumental proportions.",
                " weathered shrine, dedicated to a long-forgotten deity, exudes a faint aura of magic. Disturbing it might awaken a curse or invoke a boon from the deity. The adventurers must decide whether to risk a potential divine encounter or to respectfully bypass this sacred relic of the past.",
                "The silence is broken by the sound of a crossbow's click. Mountain bandits, accustomed to the harsh terrain, surround the adventurers, demanding a toll for safe passage. This could result in a tactical skirmish or an opportunity to outwit the bandits, turning the tables on these highland thieves.",
                "A group of pilgrims seeks passage to a sacred site high in the mountains, plagued by environmental hazards and prowling predators. The adventurers could be their guardians, leading to a test of survival, faith, and determination.",
                "A young Stone Giant, painted with tribal marks, wanders alone, creating peculiar art with boulders. Its cryptic intentions could lead to enlightening interactions, offer quests related to Giantkind, or provoke a confrontation if misunderstood.",
                "A campsite littered with ominous totems gives off an aura of dread. Here, the party encounters a cursed adventurer, bound to the site until the curse is lifted. This adds an element of mystery to solve or a dark entity to appease.",
                "A group of 2d4+2 goblins is lurking behind craggy outcrops. Their idle chatter ceases as they notice the party, gripping their crude weapons with menacing intent. Prepare for their immediate and unhesitating attack.",
                "2d4+2 orcs, adorned in furs and war paint, stand guard in a seemingly random location. Their eyes are sharp, and their muscles tense; they have no intention other than to defend their territory fiercely as soon as they spot any intruders.",
                "A mealtime disagreement has turned sour among a pack of 2d4 orcs. The argument boils over, and as the party approaches, they turn their aggression outwards, abandoning their squabble in favor of a new unified target—the players.",
                "A procession of tired-looking dwarves heaves a wagon laden with mining supplies down the mountain trail. They urgently inquire about local ruffians causing turmoil in the area. Heed their warning, or perhaps investigate these miscreants for a reward.",
                "Skilled hunters with a retinue of wolves and hounds are on the prowl for game. They inquire if you’ve spotted any quarry, with a keen eye for deceit. Providing them truthful assistance or misleading them could have varied consequences.",
                "Three bards journey through, instruments in tow, seeking the echo of a cliffside or the acoustics of a canyon to complement their ballads. Should the party know of such a locale, their gratitude might just be rewarded with a performance or a helpful tune.",
                "Your party stumbles upon a group of randomly generated Adventurers. Vibrant and brimming with curiosity, this band of youths looks to the mountains for thrills and glory. If the party has information on nearby dangers or quests, these novices might just tag along for an unforeseen adventure.",
                "A blood-curdling screech fills the air as the party discovers villagers clashing with a predatory flock of giant eagles determined to snatch their sheep. Yet, unbeknownst to them, these aggressive birds are magically bound to resurface as vengeful revenants within hours of being slain—a dire warning for those who dare to intervene.",
                "Villagers who hoped for a tranquil day find themselves in a fierce contest with 4d4 kobolds. Their persistence in thievery feels almost ritualistic—a repeating cycle hinting at a nest blessed or cursed by unseen powers.",
                "The tranquility of the mountainside is pierced by the shouts of villagers defending their livestock from a ravenous group of 4d4 kobolds. These scaled pilferers, emboldened by the proximity of their mystically concealed nest, pose a relentless threat to the community's chickens and goats.",
                "A raucous peal of laughter and shouting draws the party's attention to a gathering of goblins, their fun centered around a rough game with a ball and chain. Be wary, as their amusement can quickly turn to hostility if interrupted.",
                "A dwarf, determined and a touch frantic, seeks aid in locating their cherished axe—misplaced and now embedded in a nearby tree. The promise of gold is an enticing lure for those willing to aid in its retrieval.",
                "In the quiet before an impending battle, four hardened mercenaries sharpen their blades and strategize for their next engagement. Unsolicited approaches are met with suspicion and, potentially, a steel-edged welcome.",
                "A parade of six merchants, anxious yet hopeful, makes their way toward a bustling city with heavyweight of goods and dreams. Their offer: fair prices for wares if brought safely to market—a chance for commerce and protection contracts.",
                "Furtive whispers and crashing twigs signal the flight of two young adults, their faces buried in the shadows of shame. An act of thievery has set their village against them, and empathy from the adventurers may be their only respite.",
                "The grunts and bellowing of an irate ogre roll down from its cave abode. Rocks rain from above as warnings, promising a brutal encounter should the party provoke this solitary titan any further.",
                "As a shiver runs down your spine, a mighty roar from above makes your ears hurt. Once you tilt your head up, you see it very, very clearly. An adventurous adult red dragon is flying not far from your current location -- but is it after you, or after something else? Consult the 'Fate' table in the roleplay section or toss a coin.",
                "A group of determined humans attempts a risky maneuver—caging a relentless horde of goblins. The turmoil is palpable; the threat of escape is imminent, casting a question over the situation: quell or capitalize on the goblins’ plight?",
                "The robust song and the stench of mead waft from a cave where orcs celebrate a cruel conquest. Their raucous revelry masks a sinister undertone, and to approach is to invite the fury of a drunken warband.",
                "Once again, humans are the aggressors, their eyes set on capturing orcs whose fight for freedom is fierce. The clash is a tumultuous vortex, daring the party to dive in and choose a side or, perhaps, play peacemaker.",
                "In an elegant yet forceful display, elven warriors seek to bind a group of orcs. Their methods are fluid, yet filled with tension, as the orcs resist. Should the adventurers get involved, they must be ready for fluid combat or a delicate negotiation amidst the chaos.",
                "Amid the tumult of clanging weapons and war cries, 3d4 humans and 3d4 orcs engage in a primal battle with clubs and axes. The cause of their conflict is unclear and the party must decide whether to intervene, broker peace, or seize the opportunity for their own ends.",
                "The party faces a daunting obstacle as fierce storms have wreaked havoc on the mountain path. Landslides have blocked the way, and the adventurers must navigate treacherous terrain, scaling precarious heights in search of a path unclaimed by nature’s wrath.",
                "A band of aspiring mercenaries, lacking both skill and experience, traverse the slopes toward the promise of employment. Offering the players a chance to mentor them en route to the nearest city, this alliance could prove lucrative if the mercenaries’ training advances sufficiently.",
                "A natural blockade—a cave entombed by rockslide—halts a randomly generated group of fellow adventurers. They seek assistance to excavate the entrance, hinting at the treasures or secrets that may lie within the mountain’s hollows.",
                "A  group of 4 randomly generated NPCs and their 4d4 bold adventuring companions (knights/mages/veterans) chart the treacherous wilds in search of an ancient dragon's lair, rumors of which have attracted challengers from far and wide. Intrigue and ancient wealth await those who would dare to journey with them.",
                "A cadre of 4d6 elves, skilled in the hunt, embarks on a perilous venture to locate a wyvern's den. As lethal as it is lucrative, their hunt might favor the addition of canny adventurers.",
                "Destined in search of their heritage, 4d4+4 elves rove the ranges in hopes of uncovering an elven ruin swallowed by time and earth. Mystery entwines their path, and aiding them may unravel forgotten lore.",
                "A group of 5d5+5 dwarves strides through rocky corridors with a single-minded goal: to discover the lair of a dragon whose existence has persisted through their stoutest tales and songs.",
                "The dwarven obsession with delving manifests as a gathering of 4d4+4 dwarves unearths clues pointing toward a halfling ruin of old, beckoning the party to uncover a slice of history seldom remembered.",
                "The adventurers cross paths with an ambitious group of tome-laden historians. They’ve uncovered references to a cache of documents enshrined in the mountains, which may rewrite history as the realms know it—a trove for the intellectually brave.",
                "Amidst the rugged landscape dart two young adults, their breaths caught between fear and elation. Their clandestine matrimony hangs like a secret between them and the party, posing a delicate situation that demands respect for their tale of love.",
                "A hidden entrance leads to caverns lined with glowing, mystic crystals. Their energy could be harnessed for magic items or spells but beware; the cavern is home to territorial creatures drawn to the crystals’ power. Rumours say there are aberrations hidden in the deep, dark, Underdark.",
                "A reclusive sage, versed in the ancient lore of the mountains, urgently waves down the party. He’s been plagued by visions of an impending natural disaster and requires aid in performing a ritual to appease the mountain spirits. This could be a race against time or a test of the party’s magical prowess.",
                "From far away, you spot a griffon flying over the highest peak at dawn.",
                "A chilling howl echoes through the mountain pass at night.",
                "You stumble upon a young red dragon's lair, with the dragon clearly home and protective of its hoard",
                "You encounter two red dragon wyrmlings fighting over corpses of an adventuring party, probably arguing who gets to hoard their valuables (including 5d20+100 GP and possibly an uncommon or rare magic item)",
                "You find a rare herb on a mountain ledge, known for its healing properties",
                "You end up in a secluded monastery where monks train in ancient martial arts",
                "An eerie fog sets in, leading your party to a ghostly procession",
                "A hidden trove of gemstones is guarded by a throng of earth elementals",
                "You stumble upon the frozen statue of a forgotten hero, holding a map to a hidden treasure",
                "On your way, you locate a secret mountain pass leading to an uncharted territory",
                "You spot an abandoned mine, reportedly haunted by the spirits of miners trapped long ago. Their treasures and equipment remains trapped inside the cave.",
                "You encounter a ferocious mountain lion guarding its cubs",
                "You meet a wandering merchant selling rare mountain herbs",
                "A narrow trail leads to the cave of a man-eating ogre, the bones of its victims are scattered near the entrance and the smell of rotting flesh lingers in the air",
                "A tribe of stone giants challenges the party to prove their worth",
                "You meet a deranged alchemist living in seclusion, conducting bizarre experiments. They're clearly uncomfortable with you around, but still invite you for a cup of tea",
                "You gaze upon a beautiful waterfall. Reaching into it, you notice it is hiding the entrance to a hidden cave",
                "Your path is blocked by a perilous rope bridge swaying over a deep chasm. Well, technically it's not blocked since you can try to cross it, but is it worth it?",
                "A group of friendly harpies offer to guide the players through a treacherous mountain pass in exchange for a favor. However, the favor may involve stealing from a powerful wizard or dragon.",
                "The party comes across a group of 2d6+3 mountain goats fighting over a patch of grass. If the players intervene and help one of the goats, they will gain a temporary ally and the group will offer them a small reward.",
                "A pack of 2d4 undead wolves ambush the party. They are being controlled by a wight nearby to attack and kill the party.",
                "A group of miners is trapped in a collapsed mine shaft on the mountain. If the party can rescue them, the miners will reward them with valuable gems and ore. But they will also have to deal with any dangers lurking in the deep, dark tunnels.",
                "The trail widens and suddenly, a group of a dozen humanoids come around the corner. They are dressed in leather armor and armed with short swords. They are on patrol to protect the mountain from intruders.",
                "A group of young adventurers challenges the players to a race up the mountain. The winner will be crowned the true mountain champion and receive a highly coveted prize.",
                "A group of 2d6 humans are trying to capture and cage a group of 2d4 orcs. The orcs are putting up a fight and there is a chance that one or more orcs might escape.",
                "Three stone giants are sitting at the top of the trail, playing cards and drinking.",
                "While walking through a narrow pass, the players hear the sound of rocks being thrown. When they look up, they see a group of 1d6+2 kobolds throwing rocks at them from a ledge above. If the players can climb up the ledge, they will find a small kobold village living in the mountains. The villagers will offer to help the players if they can retrieve a precious gem from the nearby cave that was taken by a group of orcs.",
                "Surprise attack! 2d6 Winged Kobolds bombard the party with rocks.",
                "The players see a strange figure sitting on the edge of a cliff, looking out at the vast expanse of the mountains. As they approach, the figure reveals itself to be a hermit with wild hair and a long beard. He tells the players he has been living in the mountains for many years and has seen many wondrous things. He offers to trade some of his knowledge for food, water, or a good story.",
                "A group of 2d6+4 men are walking down the trail. They are looking for work in a nearby town. They are willing to work for the party for 10 gold pieces per day per man.",
                "A pack of griffons are terrorizing the local farmers, stealing their livestock. The players must either drive away the griffons or find a way to communicate with them and convince them to stop.",
                "You see a blue dragon of unknown age flying overhead, its body casting a dark shadow on the ground. It seems to be heading towards a nearby village or town, most likely with the aim to subjugate its residents. The players must decide whether to intervene or stay out of the dragon's path.",
                "A group of 1d4 rangers are hiding nearby to attack and kill a group of 2d4 bandits.",
                "A randomly generated barbarian NPC is wrestling 1d4 Lizardfolk bandits, protecting their pet beast from becoming their next meal.",
                "A group of goblins is running away from a group of orcs. The orcs will chase and kill the goblins if they catch them.",
                "A giant eagle swoops down and steals a valuable item from one of the party members. Will they chase after the eagle and attempt to retrieve the stolen item or let it go and continue on their journey?",
                "A group of 1d4+4 men are gathered around a campfire, singing songs and telling stories about people who have passed through here or lived here in the past.",
                "The players come across a group of 2d4 goblins. They are armed with shortbows and short swords. They will yell 'Raaaargh' and attack without warning.",
                "You spot a wagon of farmers carrying supplies to a nearby village.",
                "The party comes across a wounded young dragon lying on the side of a cliff. As they approach, the dragon pleads for their help, explaining that it was tricked and attacked by a group of hunters seeking to capture and sell its scales and blood for profit. The players must decide whether to help heal the dragon or assist the hunters in exchange for a reward.",
                "The party passes a small, abandoned village. There is a small church and several small homes. The village was destroyed by a necromancer and his army of marching dead. There is a 50% chance (coinflip) that the necromancer is not only still nearby, but also returning to finish off the remaining villagers. Will you dart away, or stay and protect the villagers?.",
                "A band of mountain bandits demand a toll for safe passage. The toll, paid in GP, is equal to the amount of members in your party multiplied by 100.",
                "A group of 2d6 bandits attacks the players, demanding their money and magic items.",
                "A monstrous creature with three heads announces itself by roaring with each one. If the party fails to hide with a DC 17 Stealth Check, a Chimera descends upon them. It is ruthless, sadistic, and will keep chasing the party until it spots a Manticore, a Dragon or a Wyvern on its way. Only then will it divert its attention to something else.",
                "A fierce blizzard hits as the players are making their way through the mountains. They must find shelter or risk freezing to death. However, the only shelter they can find is a cave inhabited by a group of grumpy yetis who may not take kindly to uninvited guests.",
                "The players come across a group of giants using boulders as a game of boulder bowling. One of the players may be in the path of the next boulder - can they dodge it in time?",
                "A powerful sorcerer is conducting dark rituals in a hidden cave on the mountain. If the party interrupts the ritual, they will have to fight the sorcerer and their minions, but they will also have the opportunity to obtain powerful magical artifacts.",
                "A troll is wrestling two ogres, and winning. Turns out, the troll has been enhanced with magic of some kind. If you defeat him or help him win, he may share his secrets. However, if you help the ogres instead, they will be grateful for your help, and might reward you with electrum pieces or even an alliance of sorts.",
                "A stranded expedition group of 1d4-1 randomly generated characters is in need of rescue before a storm hits (roll thunder effects on the ''Storms'' table). If you rolled a 0 on your 1d4-1, there is but one adventure, albeit grievously injured."    
            ]
            const mountainEncountersIndex = Math.floor(Math.random() * mountainEncounters.length)
            blurt({
                title: 'Mountain Encounter',
                text: mountainEncounters[mountainEncountersIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedBiome == "Grassland"){
            const grasslandEncounters = [
                "A Chimera is fighting two manticores for territory. The chaos of the battle will attract a young red dragon in 1d4 rounds if not stopped. If there are any small locations nearby, they will be decimated by one of these fights.",
                "As the night nears slowly but surely, a randomly-generated NPC adventurer and their party of 1d4 commoner servants, 2 knights and 1 veteran are setting up camp for the day. Their quest, intentions, and competence are completely up to you. Let your imagination run wild!.",
                "An awakened poisonous snake (Deception +2, speaks Common, INT 10) is trying to sell local landmarks for anything it can get.",
                "A quarter of highly-intelligent Ogres are having an intellectual debate over large mugs of some sort of intoxicating beverage. If you interact with them, they'll invite you over for a drink, but said beverage will force a DC 18 CON saving throw. If you fail, you'll begin vomiting and convulsing for the next 30 minutes. At the end of it all, you'll gain a level of exhaustion. There's a 50% chance that the Ogres will try to steal your belongings while you're convulsing on the ground.",
                "A band of Goblins is sneaking up on a sleeping druid, playing Rock-Paper-Scissors to determine which one strikes first. Unbeknownst to you and them, the druid is awake, and merely pretending to be asleep to teach the Goblins a lesson.",
                "An ogre introduces himself as the fabled ''Quantum Ogre'', and will appear in front of you no matter which direction you turn. If you ignore it and walk away, the Ogre will appear in the next encounter you roll, and will CONTINUE doing so until it is defeated. The Ogre will also gain traits based on the biome you're in and the encounter you just rolled; for example - it will turn into a frost ogre in arctic terrain, a fire ogre if you encounter a dragon, a magic ogre if you find a wizard, tame the next wild beast you encounter, etc.",
                "A friendly goblin boss with an excitable small beast pet (bat, spider, cat, owl) is hunting for other animals to tame, and dreams of finding a home outside goblin society.",
                "A proud Griffon is fighting for territory with 2 Hippogriffs.",
                "You encounter a ruined caravan surrounded by screaming, running merchants and a noble having a panic attack. A griffon swooped in from the sky to kill and eat their horses. If you don't intervene, the Griffin will steal the caravan's riches and bring them to its lair. If you decide to help, the noble will allow you to keep some of their valuables. A DC 17 intimidation check will allow you to take ALL of their valuables instead.",
                "You are spotted by a raiding party of 1d6 Hobgoblins riding on Worgs. 50% they're at full strength and ready to extort you for your valuables, 50% they're actually returning from a big battle and are too battered and worn out to bother fighting.",
                "The ground around you trembles. As you try maneuver away with careful steps, 1d2 Ankhegs sprout from the ground, with the intent of turning you into their next meal.",
                "You were nearly trampled by a pack of 2d6 Elk. They seem to be running from something, but what exactly? If you choose to fight them, you would have food for days.",
                "You hear maniacal laughter and devious cackling as 2d6 Hyenas and 1d2 Giant Hyenas come out from the boulders and bushes they were hiding behind. They are hungry, and have been planning this ambush for a while now.",
                "The earth trembles and the ground eventually splits right open as an enraged Bulette finishes burrowing all the way from the Underdark to the surface. Something in the Underdark must've made it angry, and now, it wants to lash out on other, less-fortunate beings above.",
                "You are being stalked by a pack of 4d6 Wolves. If you decide to forage, rest, or just fight, the wolves will come, flanking your party from all sides.",
                "A man is standing on top of a hill and he is yelling at the party, “Come on over! I got some hot cider! Come on! It's cold out there! I got some food too! Come on over!”",
                "A group of men and women are celebrating the harvest with a party. The party is loud and they are singing and dancing. The party is across the river and across the road and behind a hill.",
                "A farmer is walking with his dog to check on his pigs.",
                "A randomly-generated NPC swoops in on a Giant Boar/Giant Elk/Griffon/Giant Goat. They introduce themselves as an ambitious adventurer looking for allies in their quest to bring down a Goblin slave camp in the area.",
                "An adult gold dragon can be seen soaring the skies above. Its majestic appearance can be quite dazzling.",
                "On the roadside, you spot a giant weasel being constricted by a giant poisonous snake. The weasel seems to be carrying some sort of note in its paws, but is losing its grip.",
                "You encounter a marching band of annoying Kenku bards that parrot everything you and your allies say. They will not budge unless you scare them away with force or threats. If you pay no attention to them, bear in mind that their antics can attract danger.",
                "A giant vulture is fighting with with 1d4 wolves for a giant goat carcass. Unbeknownst to them, the giant goat carcass is a trap set up by a band of clever Kobold bandits. If they so much as tug on its horns or hooves, the goat will explode thanks to being filled to the brim with smokepowder.",
                "A group of 1d8+4 orcs are returning from a raid on a nearby village. The orcs are carrying several sacks filled with supplies and valuables.",
                "A kobold rogue rushes you from behind, screams ''SNEAK ATTACK!'', and actually manages to land one, knocking you prone. As it stands over you, it holds a dagger to your throat and demands your most prized possessions, claiming that its friends are on their way to help it out with the extortion. There's a 50% chance that the Kobold is bluffing, and you'll be able to overpower it with little effort. In such case, the Kobold will break down crying and beg for mercy.",
                "The players come across a group of 1d6 men who are hunting orcs. They will ask the players to help them hunt down and kill the orcs in the area. If the players agree, they will get +2 to their attack rolls on their next encounter with orcs.",
                "A group of 1d4+6 Kobold bandits is engaging in battle with a group of 1d6+4 Goblin bandits. As both sides are about to clash, you notice that their leaders are the only ones eager to fight, and the rest are simply following orders out of fear. Perhaps a dash of diplomacy could resolve this conflict?",
                "The players come across a group of 2d6+4 farmers who are harvesting crops. The farmers will ask the players to help them harvest their crops for them. If the players agree, they will get a small amount of gold for their help - the amount is equal to the amount of farmers multiplied by 10.",
                "The players come across a group of 1d4+4 bandits who are hiding in the grassland, waiting for a passing merchant to pass by. The bandits are planning to ambush the merchant and steal his goods.",
                "An owl flies by and drops a note with a mysterious potion recipe inside it.",
                "An owl flies by and drops a note with a random 1st level scroll inside it.",
                "A group of 2d6 bandits attacks the players, demanding their money and magic items.",
                "A crazy wizard in cobalt-blue robes is destroying everything around him. His head, full of grey hair and adorned with a long, white beard, houses the face of an utter madman. This insane wizard uses the Mage statblock, and will spout nonsense about the end of the world unprompted. If the party confronts him, he will attack.",
                "A randomly generated NPC runs by, chased by a pack of 5 wolves. One wolf is bigger than the others and appears to be the leader (Dire Wolf who moves on initiative count 20, 10, and 0). The wolves look hungry...",
                "The party finds a group of men digging in a field. They appear to be looking for something. If the party asks, the men say they are looking for a sword that was lost in this field.",
                "A group of men on horses approach from the distance. They appear to be knights, but their armor is damaged and they are injured. They are looking for help.",
                "The party comes across a group of men who are wrestling in the grass. If asked, they will tell the players that this is the annual wrestling tournament and they are practicing for it.",
                "A group of men are singing and dancing around a campfire. If the party joins in, the men will give them a free drink from their wine skin and then continue to sing and dance around the fire.",
                "Three merchants stand around a campfire while they wait for their caravan to arrive. One merchant is selling bolts of cloth, one merchant is selling weapons and one merchant is selling food and other supplies.",
                "Players come across a clearing full of people throwing rocks at a target. The people will tell the players that they are practicing to become the best rock throwers in the world. They will ask the players to join them, but they will refuse and instead leave. The people in the clearing will attack the characters if they say bad things about them.",
                "Players come across four men arguing about the color of a dress. They will ask the players to settle their argument. If the players agree, they will be forced to wear an expensive and uncomfortable dress until they decide on a color.",
                "A group of 3d4 elves is hunting in the hills. The elves are looking for deer and will ask the party if they have seen one nearby. If the party asks, the elves know very little about the dragon's eggs in the hills.",
                "A group of rangers are camped in a small clearing. They are watching a small herd of unicorns. If the players approach, the rangers will try to keep them away from the herd.",
                "A small silver dragon is flying overhead. It is flying very high up in the air, and it is hard to tell from a distance whether it is an elven war-dragon or not.",
                "A group of 1d6 giant eagles are circling overhead. If the players look up, they will see them, but they will not attack unless the players start to attack them first.",
                "A group of 2d6 kobolds are sneaking around the bushes, looking for easy prey. Succeed on a DC 10 Perception check or be attacked and lose your first turn from surprise.",
                "A group of 3d8 orcs are walking along the road looking for easy prey.",
                "The players find a dead body. It has been recently killed by a wild animal. The body has been partially eaten by the animal. The body has been cleaned off by the rain, but it is easy to tell that the dead man was a mage.",
                "A group of men are carrying a large, wooden box. If the players approach, the men will attack. The box is full of gold coins and gems.",
                "The party hears a group of travelers singing an old song called ''The Song of Gah'ri''. The song is about a great bard who lived thousands of years ago. The singing is being done by a group of 1d6 bards who are traveling to the east.",
                "A group of men are carrying a box marked 'dangerous'. The box is full of weapons and armor. The men are transporting it to a nearby village for sale.",
                "A man is walking down the road singing a song. If the players stop him, they find out that he is trying to get to a nearby village to find work as a bard. He has been walking for days and has no money for food or lodging.",
                "Two men are sitting on a hill arguing about something. If the players approach, they will stop arguing and start fighting. They are drunk and will not put up much of a fight.",
                "A small pack of wolves attacks. They are led by a half-orc who claims to be a werewolf and will attack the party if they don't leave his territory. There is a 50% chance that he's telling the truth, and will transform into a Werewolf statblock after going down to 0 hit points.",
                "Players come across a campfire with two people sitting around it. One of them is drunk and is telling a story about how he killed a dragon by using a magical sword given to him by a mystical Druid..",
                "A man wearing robes and carrying a bag full of coins walks up to the party and offers to sell them magic items. If players accept, he will pull out a handful of copper coins and attempt to sell them as powerful artifacts.",
                "The sound of battle can be heard in the distance. Players can see two armies fighting each other in the distance. They are too far away to help, but they can watch from a nearby hilltop, or launch an expedition afterwards to collect the loot.",
                "A group of 1d4+2 mercenaries (Bandit stat block) are looking for work. They will offer to join the party for a price.",
                "Overhead, a large flock of birds is circling in the sky. Suddenly, they all fly away as if being scared away by something dangerous.",
                "A group of 4d4 gnolls are hunting for food in the grasslands. They will attack if players are near their prey.",
                "Vultures circle overhead. A half-eaten carcass is nearby.",
                "A strange, hissing sound can be heard. A hill nearby is the source of the sound.",
                "A large flock of crows fills the sky. The caws of the crows sound strange. A DC 11 nature check reveals the sounds are actually warnings about approaching danger.",
                "A group of 1d4+2 bandits rest under a tree. They will attack if they feel threatened. They carry purses filled with 1d10 copper pieces each.",
                "A group of 1d4+4 bandits are on their way to a nearby city to sell their loot. They are carrying 1d8 silver pieces each.",
                "You stumble upon an abandoned displacer beast kitten, stashed away in a potato sack stuck into a hollow tree stump. There's a 1 in 4 (NAT 1 on 1d4) chance that its mother will come back soon, mistaking the party for the people who stole her child, and promptly retaliate.",
                "As you approach a misty section of the plains, you hear something akin to ethereal singing, enamouring you with its beauty. As you come closer and closer, the singing turns into nightmarish wails, up until its source is finally revealed. A Banshee just disposed of an adventuring party who mistook her for a woman in need of help, and it seems like she just lured you over to do the same. This Banshee has legendary actions that allow her to teleport and disappear into the mist, move without provoking opportunity attacks, and take two additional turns in a round. Her HP is twice or even thrice the average, depending on your party level.",
                "An Owlbear mother is protecting its cubs from 2 ill-prepared hunters who wanted to make a quick buck. They have, however, a secret weapon that might completely collapse the cave where the fight is taking place: a barrel filled to the brim with instable runepowder. If the party doesn't intervene, either the Owlbear forces its hunters to blow up the cave, killing everyone inside it, or the hunters snatch their prey's baby.",
                "You hear the clopping of metal hooves. As the earth begins shaking around you, you are hit by a Gorgon's trampling charge (not to be confused with actual Gorgons, i.e., a Medusa. For some reason DND 5e got it wrong). On its way to trample you, the Gorgon left a trail of petrying gas leading directly to its home - an underground maze built as a prison for minotaurs and the like. This Gorgon was supposed to be their guardian, but a spell made it go mad.",
                "A manticore is engaged in aerial combat with a hippogrif. After a short while, they come crashing down near you. Then suddenly, a party comprised of 1d4 Bugbear assassins, 1d4 Goblin scouts and 2 Hobgoblin commanders arrives to kill and scavenge them both. They must've been following their dogfight for a while now.",
                "As you are taking a stroll through the grasslands, you begin having hallucinatory visions of a Gold Dragon asking for help. It says it's trapped inside the dungeon of an evil wizard, but the visions fade before the creature can tell you about the dungeon's whereabouts. A DC 14 Arcana check could potentially reestabilish your connection with the dragon.",
                "On a small rock sitting next to a pond, you meet a cat that speaks common.",
                "Out from a bush comes a poisonous snake that speaks common. It claims its venom can heal grave injuries, but only offers its services to those who are willing to pay. A DC 13 investigation check reveals the snake to be a wildshaped druid trying to scam you.",
                "1d4 Druids are trying to wrangle an Ankylosaurus gone mad. The Ankylosaurus had just killed a family of 3 boars, and has its sights set on a herd of deer.",
                "As you walk through the grasslands, a heavenly light shines upon you. A Couatl descends from the heavens, offering wisdom and safely directing you to your destination. Roll a D20. On a NAT 20, the Couatl stops you in your tracks, claiming you are the hero of a long-forgotten prophecy. It offers guidance and context but only if you can abandon your adventuring party to pursue this journey alone.",
                "A drakewarden ranger is taking their pet drake on a walk, whistling and strolling peacefully. He seems to be comfortable with the area, and could provide some directions on moving forward.",
                "A vicious thunder suddenly kicks up. Select the 'Thunder' option and roll on the 'Storms' table.",
                "You stumble upon an evil mage and their pet cockatrice. They are trying to extort money and minor magical items from a traveling merchant.",
                "In the distance, you see a giant boar charging into an ogre. A loud THUD can be heard, but a large dust cloud obscures your view.",
                "You are approached by a frivolous high elf lost in the forest, trying to ask for help without sounding desperate. If you help them, they'll reward you with some electrum or a common magical item.",
                "You spot two Goblins trying to pull out their friend from a Bag of Holding, but another one of them falls into the container. The last remaining Goblin pleads for your help. There's a 50% chance he will try to push you into the bag, lock it, and toss you into a nearby river. An elaborate prank, to be sure. The other Goblins? In case it was a prank, they will exit the Bag of Holding with a scroll spell. If it wasn't, they'll be grateful if you rescue them, and will make sure to tell their tribe not to mess with your party in the future.",
                "1d4+2 Swarms of Insects are destroying the crops of a broken farmer, desperately pleading to their god to make it stop.",
                "You find the bones of an allosaurus, still spewing pumes of potent acid. A black dragon must've left its swamp for a little adventure. There's a chance that the dragon is still in the area, carefully observing whether its recent prey is going to attract another one.",
                "An obnoxious red dragon wyrmling is proclaiming itself the ruler of these plains, but a Goblin/Orc/Bandit raiding party will soon attempt to catch it.",
                "Someone has been stalking you. Not a beast. A PERSON. You barely noticed, but decided to act like you haven't. Your stalker is clearly unaware you've noticed their endeavours, netting you some time to think about your next move.",
                "Something has been hunting you for quite a long time. A beast? A monster? Certainly nothing humanoid, that's for sure. If you're wondering, yes, it knows you've just noticed :)",
                "A random NPC allergic to wasps is running away from 1d2 swarms of wasps.",
                "1d4 Veterans on Riding Horses are patrolling the area for bandits, and will pay handsomely to those who offer to help them in their endeavours. If not, they would appreciate at least a hint on where the bandits might be. You can recall some information with a DC 13 Intelligence check, or give them the details of the last bandit party you have encountered.",
                "Four randomly-generated NPC adventurers are on a quest to slay a young green dragon whose lair is in a nearby forest, however, the forest is filled with quite intelligent, giant spiders that prey on unsuspecting adventuring parties by using masterfully constructed, guerilla-warfare web traps. There's a 50% chance that the spiders have already killed the dragon, and turned its carcass into their mindless puppet controlled by strings.",
                "You witness as a Hobgoblin captain is trying to tame a furious Manticore. His band of warriors is skeptical of the idea, but they ''let him cook'' regardless.",
                "You are knocked down by an overly-friendly giant goat who rammed into you so it can lick your face. If you give it more, 1d4 more Giant Goats will come. They'll remember you the next time you roll this encounter.",
                "1d4+2 Commoners are running away from a spore druid trying to infect them using their fungi zombies. If you intervene, the druid claims that the commoners were burning down their forest, and diplomacy failed to resolve the issue.",
                "You encounter a lioness guarding her cubs. Somewhere in the distance, you are able to spot what is presumably the carcass of the father of her young - being eaten by 1d4+2 hyenas infused with wild magic. The Hyenas will trigger a wild magic surge every time they hit with an attack. If you do not intervene, the Hyenas will strike the lioness at night, possibly wreaking even more havoc than intended if their wild magic surges go awry.",
                "You meet a wandering merchant selling rare mountain herbs.",
                "You arrive in a magical little hamlet whose Tabaxi residents house 4 or 6 cats on average. Once you turn back, the hamlet will disappear, so make sure to explore it thoroughly!",
                "4 Giant Wasps are terrorizing an amateur raiding party of 1d4+4 Goblins and their cowardly bugbear chieftain.",
                "1d4+4 Gnolls and 1d6+3 Hyenas, led by a Gnoll Fang of Yeenoghu with a whip that crackles lightning, are invading a small Half-Orc hamlet with the intent of causing the most amount of chaos possible.",
                "Under the shadow of a tree, you catch a faint glimpse of a vampire burying its fangs in a boar's neck. If the vampire spotted you (make a Stealth check), it will appear in your camp at night the next time you long rest (your character, obviously, doesn't know that).",
                "A cyclops is defending itself from 4 hill giants who relentlessly poke and laugh at it.",
                "A farmer is being harrassed by a Hill Giant throwing a temper tantrum over being exiled from his home in the hills."
            ]
            const grasslandEncountersIndex = Math.floor(Math.random() * grasslandEncounters.length)
            blurt({
                title: 'Grassland Encounter',
                text: grasslandEncounters[grasslandEncountersIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedBiome == "Swamp"){
            const swampEncounters = [
                "The party steps into a disgusting, gooey pile of decaying matter, and are now surrounded with 1d4 Swarms of Rot Grubs for every party member. They are slow enough to run away from, but are currently surrounding the party.",
                "The party trudges through a section of the swamp that has become increasingly muddy. In the midst of the mud is a patch of foul-smelling, bubbling water. If the players have an open flame and walk near the bubbles, the gas coming from the ground ignites with a burst of blue fire. Anyone nearby takes 1d10+2 fire damage from the explosion.",
                "The water seems shallower in a section and white river stones can be vaguely seen in the murky depths. If the party investigates, the white stones turn out to be skulls.",
                "A random party member accidently breaks open a hollow log and releases a huge swarm of biting flies. The flies immediately set on all exposed flesh, creeping into armor, sleeves, and pant legs, leaving stinging welts. Players who jump into the water are unscathed, but anyone who doesn't contracts a disease.",
                "The party spots a body with two arrow shafts protruding from the back, lying facedown in the middle of a deep water section of the swamp. Disturbing the body in any way causes the gas-bloated chest cavity to burst, releasing a cloud of hallucinogens.",
                "The party must trudge through waist deep mud to continue on their path. Characters must pass a DC 13 DEX check or they fall face first into the deep mud.",
                "The party finds a rare patch of raised dry ground, suitable for camping for the night without complication. There are several simple glyphs carved in the nearby trees.",
                "As the party walks through the swamp, they come across a large, ancient mangrove tree. Underneath the roots of the tree, the party finds the dilapidated, abandoned remnants of a primitive hovel of some sort.",
                "A tribe of Toad-people must be treated with in order to cross the territory without their harassments. They may or may not decide that one or more of the PCs are to be sacrifices to the Froghemoth as the price that must be paid for peace...",
                "The party unknowingly stumbles into the breeding territory of giant anacondas. They soon realize they are being hunted.",
                "A young green dragon and a young black dragon are having a terrain dispute in draconic. 50% chance it was a ruse to lure in overconfident adventurers looking to loot the spoils of their ''fight'', 50% chance the situation escalates into an actual, real dragon fight. Adjust the dragons to adult size once party is at least level 7.",
                "The party gets jumped by a Merfolk band of varying sizes. Only after one of them goes down, they begin speaking common to each other, mourning their fallen brethren. As it turns out, they were a regular, wholesome Merfolk family, albeit a bit distrustful of adventurers. Naturally, they considered you a threat to their family home, and attacked with the intent to imidate the party away.",
                "As you follow a trail of giant frog heads impaled on pikes, you stumble upon a small Merfolk warrior tribe, currently in the process of turning their fallen brethren into frogbait (explosive corpses). They seem to have felt the ripples in the water that preceded your arrival here. Roll a DC 16 stealth check, or be prepared to fight guerilla merfolk warriors in their natural terrain. All of them will go first.",
                "A distant Will-o'-Wisp attempts to lure one of the characters off the beaten path into a dangeroust trap. DC 12 Insight from a different character if they start suspecting the wisp's intentions.",
                "The party comes across a band of mercenaries, hired by a circus, attempting to capture a Hydra, with limited success.",
                "Trolls are fighting over the remains of a lizardfolk. The trolls claw and bite each other, trying to take possession of the remains.",
                "A colony of stirges hounds the party. The party might defeat it, but it returns again if the following condition is met: Once per short rest, roll a d6, on a 1, the colony attacks. Additionally, Once per long rest roll a d6, on a 1 or 2, the colony attacks again. Once the party has defeated the colony at least 1d3+1 times, the party is not troubled by this encounter again, having driven them off or moved outside their territory. A PC attempting to rest during these attacks must make a Easy-Medium DC Concentration or Constitution Check, or be unable to take advantage of the rest. To represent the colony, use 4x Swarms of Insects, reducing the number of Swarms by 1 each time the party faces them. Additionally, the swarm spawns 1d3 Stirges each round, but never more stirges than there are players on the board. The only way to stop the stirges from spawning is to kill the swarms.",
                "The party smells something rotting in the distance. Soon, they come across the decaying corpse of a massive dead crocodile. Other smaller creatures are eating its body.",
                "The party smells something rotting in the distance. Soon, they come across the decaying corpse of a massive dead crocodile. Other smaller creatures wish to eat its body, but are surprised when the croc carcass suddenly sprigns to motion and devours them instead. You get the harrowing realization that what you're seeing is an Undead Giant Crocodile.",
                "You just now noticed that throughout all of your recent swamp travels, you've been stalked by hungry crocodiles (one croc per party member). They have decided that you noticing this fact is the perfect reason to strike.",
                "During the evening, the party spots moving lights in the foggy distance. Upon closer inspection those look like a small caravan moving past, complete with (listening check: strangely muffled) sounds of hooves and armor. If the party tries to interact with the caravan or fails a stealth check, they have to fight the real culprit: a giant swamp anglerfish with arm-long razor-sharp teeth and illusion magic.",
                "A swarm of mosquitoes has spotted the adventurers and is going to follow them wherever they go. They attack every unprotected surface and can only be dissuaded by area effects or smoke (or, temporarily, nightfall). This is not a combat encounter but an extended stamina check. Characters that get stung and fail a willpower check get into a delirious fever dream where they have an audience with the swarm spirit, who offers them a quest: Bring us enough blood to last the summer (with or without body still attached), and we will teach you the magical secret of making the sun (dis)appear for 10 minutes whenever you want.",
                "A group of rough men are pushing a number of wagons through the swamp, but it appears the wagons are stuck. They attempt to deceive the party that they are merchants whose guide abandoned them or died (the story changes). The goods in the wagon are valuable and high quality, but heavy and awkward to carry.",
                "A number of well dressed (but mud covered) individuals panic when the party encounters them. Their wagons are stuck, and they attempt to fight off the party, thinking them to be bandits. If the party can diplomatically resolve the problem, it turns out the caravan are nobles fleeing a coup attempt and thier trusted guide betrayed them. The party will be richly rewarded if they help, but will also be pressured to join the cause of rebellion, a potentially tricky political situation. If the party joins the noble's cause, a string of slightly troubling morally gray missions may transpire.",
                "As you step on a loose rock, you slip and fall face-first into the mud. There, you find that you cannot lift your head. Something in the mud is trying to drown you. It's a Mud Mephit! And he brought 3d4 friends! You must succeed on a DC 13 STR saving throw on disadvantage if you wish to pry your head away. For every turn while you're being drowned, you lose 1/3 of your HP, and fall unconscious if you drop to zero.",
                "It rains heavily and the poor weather doesn't stop with frequent driving wind and crashing thunder for days on end; formerly traversable terrain becomes difficult terrain, and any terrain the would normally be swampy becomes flooded with at least 5 feet of water.",
                "There's something not right here about this rain, it lasts for days, driven by thrashing winds, and doesn't stop, and the air is filled with thunder and lightning. Water seems to seep its way into everything, spoiling rations, etc, with fiendish intent and power. The nearby terrain has been cursed with foul magics that drive people insane that have spent too long in the rain. The curse manifests as illusions of carved trees with evil sigils, evil magic talismans appearing in unlikely places, etc. Unless the party is able to keep dry while travelling, (which is made fiendishly difficult by the driving rain, Difficult DC Nature Check) all members must make a Moderate DC Nature check at the end of their Long Rest. If they fail they take a point of exhaustion. The curse is such that those who are exhausted must succeed each night on a Will save (which difficulty increases with each point of exhaustion), by an effect similar to a Night Hag's Nightmare Haunting ability.",
                "A series of covered mossy stones leads off the path and through the water. Following them removes an illusion revealing a small witches hut.",
                "You manage to safely traverse the swamps, but gain a level of exhaustion in the process.",
                "The party hears a woman scream, but can't see anything. Each time the sound is followed the party encounters a dangerous part of the swamp. It is crows that are trying to get the party killed so they can feed.",
                "The party notices a reptilian creature swimming through the swamp at incredible speeds. What is, presumably its head, has spines that protrude through the murky swamp waters as the beast swims. A DC 15 Survival check will confirm that the creature is a Young Black Dragon scouring the area for easy prey.",
                "There is a horse stuck in the mud. It is starving and requires healing.",
                "You come across an apothecary collecting mushrooms along with their two warrior body guards.",
                "You come across a paranoid druid, frantically gathering resources, seemingly afraid of the things that lurk in the swamps.",
                "Your party gets stuck between a rock and a hard place - which is, in the middle of a fight between a Giant Crocodile and a Young Black Dragon. The party is hidden, at least for now, but it's only a matter of time before one of these creatures accidentally thrashes the heroes' cover. What should the party do?",
                "The players find a large dinosaur skeleton trapped in the canopy with many more skeletons trapped in the trees as well.",
                "The players think they are walking on a hill with very thick ground foliage, before the see that they're walking on trees. They then proceed to fall down into a break of the tree hill.",
                "A cloud of 1d6+1 Lavender Fungi (reskinned Violet Fungus with an added flight ability), tending a herd of 1d6 Gas Spores (large fungi that look like faux-beholders): This rare, medium sized fungus resembles a sponge with a number of billowing sails and flagella on it. They seem to be tending or hunting prey within the field, using their flagella to goad the Gas Spore Herd into motion to remain with the cloud. A cluster of small light sensitive eyes glisten at the ends of each sail, giving them normal perception out to 60 feet, in addition to blind sense of 30 feet. They are very slightly buoyant in air, able to fly at a speed of 5 ft, but have been known to cleverly utilize air currents to spread further; they have Advantage on checks or saves to control or change their position using wind or air currents. As an action, the Lavender Fungi can attempt a DC12 Constitution adjust their orientation somewhat in up to a moderate gust of wind to increase their speed upwind by 10 ft, cross-wind by 20 ft, and downwind by 30 ft for the round. Use the stats from a Violet Fungus, and Gas Spore for this encounter.",
                "The party is confronted by a swarm of 2d4+4 Giant Crayfish (reskinned giant crabs). They seem to be neutral for as long as the party keeps them entertained or distracted.",
                "A Corpse Flower, a large-sized carnivorous plant monster with twisting vines and an overpowering stench of rot and death. Twisted into its vines are several humanoid corpses that the flower can either digest or animate into zombies for self-defense.",
                "A raging wildfire ravages the lands. Believe it or not, but the swamp can burn! The thick, acrid smoke of burning peat clogs the skies and fills the air, obscuring vision in places, and the fire, of course, would prove quite dangerous if it managed to cut the party off from the trail or surround them!",
                "A section of the swamp has been flooded with saltwater, killing the trees and allowing a nearby wereshark to extend his territory. He'll accept 2d6 meaty rations as a suitable bribe to allow the party to pass unharmed, otherwise he'll attack the easiest looking prey in the group.",
                "The party must drink something, but the swampwaters have suffered a golden algae bloom. Drinking the water requires a con save against poison. A detect magic or other appropriate investigative check will determine this algae is magical in nature, and may be traced to a hermit-sorceress trying to drive off bothersome neighbors.",
                "The party finds a bubbling pit of something resembling mud. If they wait, a singular chest eventually floats to the surface containing oddly shiny brass coins with fae writing imprinted on them. They are not worth money.",
                "A beautiful woman collecting ingredients around the swamp invites the party to her cottage not too far away on the other end of the swamp for a brief lunch and rest. As the cooking of vegetables in the soup stock continues, occasional perception checks may be undertaken to see the green hag's true form and to discern what protein she plans to put in the soup.",
                "A beautiful woman collecting ingredients around the swamp invites the party to her cottage not too far away on the other end of the swamp for a brief lunch and rest. As the cooking of vegetables in the soup stock continues, occasional perception check may be undertaken to determine whether the woman is a hag or not. The woman is not a hag, and will be greatly offended if you accuse her of being one.",
                "The water is high in this particular area of the swamp. The players must jump from one island of dry land to another. Make a 13 DC DEX check to keep from falling into the marsh.",
                "A giant crocodile is lying in the water near the road, waiting for an unsuspecting player to walk by. Spotting him requires a successful DC 16 perception check. If the players don't see him, he lunges at the last player in the marching order and attempts to drag them into the marsh.",
                "A crocodile is lying in the water near the road, waiting for an unsuspecting player to walk by. Spotting him requires a successful DC 18 perception check. If the players don't see him, he lunges at the last player in the marching order and attempts to drag them into the marsh.",
                "Perched on top of a dead tree is a shriveled humanoid corpse with a half-torn backpack danging from one arm. Inside the backpack is an unmarked potion and 1d20 gold pieces.",
                "The party meets an Aarakocra monk being eaten alive by vicious Lizardfolk tribal warriors. They do not scream, nor ask for help, and seem to have accepted their fate.",
                "You were sneakily abducted by a Shambling Mound, and your party must confront it if they wish to rescue you from its clutches. In case you are traveling alone, you wake up in its lair, and must come up with a plan to escape.",
                "The players come across a houseboat that has run aground. The residents of the houseboat beg the party for help, offering a reward if they can get the houseboat floating again.",
                "The players come across a ferry that will take them down the swamp for a small fee.",
                "The player stumble upon a randomly generated NPC being humiliated and bullied by 2d6+2 mud mephits. If they choose to watch instead of helping them, the NPC (if they survive of course) will remember this...",
                "A black dragon flies above the party holding its next meal in its mouth, you decide which creature has been caught. You can even roll to see if the creature escapes the dragon and falls close to the party.",
                "A nearby Adult Black Dragon is seen dissolving the carcass of a Giant Crocodile, presumably to help with digestion. The party doesn't know this yet, but the dragon is aware of their presence, and will pretend to leave, only to then strike again after a considerable amount of stalking. To realize the dragon's intentions, the scouting member of your party must succeed on a DC 18 Insight check.",
                "An evil undead dragon makes his lair within the swamp and recruits frogfolk to serve its needs and worship it as a god. The party hears of certain items and people going missing from residents in the area. Someone needs to investigate!",
                "The party comes across a rather chill herbalist floating down the river in a magical canoe-caravan, willing to barter potions and information for ingredients, provisions, and service.",
                "The party will come upon a trap created to catch humanoids and large creatures. A group of mixed specialized ogres will be nearby to try to catch them for their next meal and trophy.",
                "A troll will be hunting for food and may stumble upon the party and try to grab one and run back to their hideout in the difficult swampy terrain.",
                "Two conflicting orc war tribes will be at a standoff and the party will arrive in the middle of their heated argument that may end with violence and bloodshed. It will over some menial reason like land encroachment, love triangle, or not adhering to a previously held agreement.",
                "A group of lizardfolk shamans are undergoing a strange ritual in a marshy area. If it continues, mud cased zombies begin to rise from the wet ground and attack the party.",
                "A shambling mound sits expectantly hunched down camouflaged as a large rotten bush. Its presence is lightly telegraphed by the profuse smell that emanates in the area. The shambling mound will surprise the group if gone unnoticed and will predatorily grab the closest party member.",
                "You come upon a swamp village run by an elderly woman. Little does the party know, she is a green hag, and most of the villagers are her servants and followers. One random NPC villager will try to warm you of her, while others will be fully convinced and do everything to help the green hag. She will try to deceive the party into a binding agreement or have them do a task for her that is extremely dangerous or misrepresented.",
                "You find a Lizardfolk/Merfolk/Grung village being razed by a black dragon (young if party level < 6, adult if party level > 6). As the villagers notice your arrival, they are begging your party for help.",
                "You stumble upon a battlefield where scattered bandit groups are trying to best Grung Warriors mounting Giant Frogs. The Grungs are defending their territory from human invaders.",
                "You stumble upon a hellish battlefield, where brutal Lizardfolk raiders are attacking a Merfolk hamlet -- eating their children, burning down their huts, and killing their strongest warriors.",
                "The party finds or accidentally falls into a hole where there is a medium sized lizard colony underground. The Lizard King and Queen debate on what to do with your group. Whether to enslave, sacrifice, eat, or let go. Most of the lizards want to eat you as they are hungry.",
                "1d4+3 Merfolk hunters, each equipped with a +1 Spear and poisonous darts (additional 1d4 poison damage), are trying to take down 1d4+1 Giant Frogs. They're either doing it to protect the territory of their clan, or are merely here to hunt the beasts and later serve them as food.",
                "Giant Frogs hop around in a wet swamp region trying to catch and eat giant insects. One of the them moves in your direction and invites a misunderstanding to unfold as bugs buzz around the party.",
                "The party finds a clearing with the rests of an abandoned camp. A corpse is lying on the ground between a dying fire and a tent. Next to the corpse is a backpack, which is a mimic.",
                "You come to the end of dry land, where the water is knee deep as far as the eye can see. The whole area is abuzz with the sounds of small winged insects. You are constantly swarmed by mosquitos and other biting flies, and fail to notice the leeches creeping inside of your boots. The entire zone counts as difficult terrain. Party makes a DC 15 Con Save, if you fail, take one level of exhaustion.",
                "A Froghemoth is wrestling with a Giant Crocodile, however, a tribe of Grungs suddenly rushes in to aid the giant frog beast in its duel. They seem to be its worshippers.",
                "A long abandoned animal shelter looms in the swampy wetlands, a lone yelp is heard within. When looking inside a small puppy sits locked up in the far cages wagging its tail at the new visitors. Loud growling is heard and shadow mastiffs greet the party from the corners of the room, their teeth showing and saliva drooling on the floor ready to attack. The puppy reels back in fear and terror.",
                "You find a Gnomish flying machine that appears in good shape, but the mechanisms of which are far beyond repair, lodged between the trees on a steep slope rising out of the swamp.",
                "As the party wades through the waist-deep water, they are suddenly ambushed by a group of stealthy lizardfolk who have been hiding among the reeds. The lizardfolk use their camouflage to their advantage, and attack the party from all sides. A deal might be negotiated if the party is willing to part ways with their weapons and their strongest magic item.",
                "The group hears a loud splash and sees a giant crocodile dragging a villager into the water. When they rush to help, they find that the crocodile is being controlled by a mysterious figure standing on the shore.",
                "1d4 evil mages are carrying a large treasure chest on a ferry across the swamp river. Just what could be inside? Whatever it is they're transporting, they will die for it if need be.",
                "While trying to find a way through the swamp, the party is confronted by a group of bandits who were using the thick fog and treacherous murky waters to cover their illegal drug ring. They are using the very rare plants in the swamp to create a powerful and addictive drug.",
                "The party is making their way through the swamp when they come across a dense field of extremely poisonous vines and plants blocking their path forward. From behind them, they hear the noises of a predator closing in on them (froghemoth, a swarm of giant frogs, giant crocodile, young black dragon, adult black dragon, whatever, really). The vines are covered in toxic thorns and emit a poisonous gas that can make it difficult to breathe. Touching the vines causes them to produce a 20ft sphere cloud that, when inhaled, deals 5d6 damage poison on a failed DC 14 Con Save. The party must decide whether to force their way through the toxic shrubbery is better than facing the predator that is after them.",
                "The party stumbles upon a group of poachers hunting a rare and valuable creature. The creature is an orphaned black dragon wyrmling. The poachers will stop at nothing to capture the dragon and sell it to the highest bidder, and will attack the party if they try to interfere. A druid who is defending the swamp sees the dragon as a sacred and protected being, and will do whatever it takes to protect it from the poachers. When the dragon is full grown, it will be a danger to the surrounding villages.",
                "The party finds refuge in a swamp druid grove. Its residents have seemingly gross customs and live in disgusting conditions, but are otherwise kind and altruistic.",
                "The party finds refuge in a mushroom druid grove. Its residents are working in perfect harmony with nature, almost like clockworks. A DC 20 nature check or the presence of a druid in your party will reveal that this grove's only ''real'' beings are 1d4 spore druids. Everyone else is their undead thrall, masked with druidic illusion magic. If the party doesn't find out the grove's secret and decides to rest there, they will be awoken during the night, only to see the druids trying to implant them with parasitic fungi.",
                "The party comes across an ancient and crumbling temple hidden within the swamp. As they explore the ruins, they are confronted by a group of cultists performing a dark ritual to summon an Ancient Black Dragon.",
                "An Adult Black Dragon can be vaguely seen from below when looking up at the tightly packed tree crowns of the swamps. A DC 11 perception check made with disadvantage will allow the characters to tell that the dragon is about to perch, and they should probably leave before that happens.",
                "As the party treads through a valley of skulls and bloated corpses, they find an abandoned castle partially sunken in the swamp's bog. A dungeon with long abandoned loot lies ahead, but be wary, as the signs of Black Dragon activity are clearly present.",
                "The party comes to some scraggy trees with bat-like creatures hanging from them. Will they disturb the sleeping stirges or recognize the danger and sneak past?",
                "An obelisk rises from the muck and slime. It's white and beautiful. If and offering is laid here, a Black Dog will guide you through the swamp at night.",
                "A smoke demon is imprisoned in a cigarette, which is put in a random pack, which is found on whatever corpse the party searches next.",
                "Six women are sinking in the mud, calling for help. 1 of them is an Assassin sent for the party.",
                "Someone inscribed explosive runes on frenzied crocodiles. They rush you, clamp down on your leg, and try to tear it off before they explode.",
                "The party encounters a pool of water covered with a variety of an aquatic green slime. If it is burned away, the glint of a necklace can be seen at the bottom. The water is drinkable.",
                "A night hag leaps from a pool of black water, lashing out at a random party member. If it hits, it will attempt to drag that character into the water. If it succeeds, the character will contract one disease at random. It will then vanish.",
                "Magical swamp gas surrounds the party, clinging to them. It is invisible and intangible in every way unless a detect magic spell is used. If anyone in the party uses magic of any kind, it will explode, causing two random magical effects and 1d10+5 force damage to everyone in the party. The noise is 50% likely to draw a wandering monster. The gas will dissipate after two hours."
            ]
            const swampEncountersIndex = Math.floor(Math.random() * swampEncounters.length)
            blurt({
                title: 'Swamp Encounter',
                text: swampEncounters[swampEncountersIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedBiome == "Jungle"){
            const jungleEncounters = [
                "The party encounters a lost, very little green dragon wyrmling, screeching for its mother in Draconic baby-talk. Roll 1d100 - this is the amount of minutes in which the mother is going to arrive, looking for her baby. If you roll 100, its mother is dead. If you refuse to hand over her baby, she will attack your party.",
                "You find a parade of miserable-looking Elves, who are dressed in chains and skimpy clothing, and seem to be chanting something while gathering resources. Interacting with them reveals they are the slaves of a sadistic, ancient green dragon kingpin. If there's an Elf of any kind in the party, the parade will try to deceive you into believing they are a druidic grove seeking help - all in order to bring said Elf party member to their tyrannical overlord.",
                "The party comes across a cave filled with mushrooms that emit a strange blue glow.",
                "Whoever is last in the party feels a small tug on their pant leg. When they look down, a Chwinga is offering them a small necklace made of sea shells.",
                "You feel the bones of a long-dead creature crack beneath you. They have been picked clean by scavengers.",
                "You find the carcass of a young black dragon, its mouth bubbling with poison, and body half-eaten. In 1d20+10 minutes, an adult green dragon will arrive to retrieve the rest of its lunch.",
                "The players find the body of a triceratops. It's dead and has its stomach wide open. Inside, there's 3 common martial weapons and an explorers pack.",
                "Animal noises go quiet as the branches above you move and shake as if something is moving through them. Normal sounds continue a few minutes later.",
                "Along the path primitive markers are spaced every 50 feet, starting as man-made in shape, each seems progressively more demonic.",
                "A swarm of insects surrounds and follows the party. Not dangerous, but makes all tasks more difficult due to buzzing, biting and making it difficult to see. ",
                "A trio of jungle cats gnaw on the body of an unidentifiable creature. They scatter into the woods as the party nears.",
                "A witch's hut sits in a small clearing. When approached, the hut stands up on giant chicken legs and flees. As it runs away, you hear the echoes of screaming children.",
                "You enter into a clearing and shrieking starts. A patch of Shrieker plant is found a few yards ahead. The sound reaches anything within 300 feet of it. ",
                "You find five corpses hanging by their feet from the tree above you. All of the skin has been removed from their bodies. A few discarded items litter the ground beneath them. One of these items is a badge belonging to a brigade captain. If any players have the soldier background, they might recognize the name as someone they once served with.",
                "A giant stone head, toppled from some long perch, lies before you. In it's eyes, light flickers faintly. Could something be inside?",
                "A pool of bubbling tar is in front of you. You see an animal go in and screech in pain, then silence. Suddenly, the creature's skeleton covered in tar struts out and into the jungle as if nothing happened.",
                "A buzzing hive can be seen hanging low in a tree. Its honey is so delicious it's almost addictive.",
                "A jungle cat watches as her cubs attempts to kill a solitary goblin.",
                "A scattering of golden coins and ritual tools litter the mouth of a temple.",
                "As your party is trekking through the treacherous jungles, a familiar face jumps out of the trees and stands in your path. It's one of your party members, albeit rugged and beaten. They claim the party member they resemble are a doppelganger who latched onto the party and nobody has noticed since. Try to ask your party member questions only they would know the answers to. If that doesn't work, enter combat with one of the duplicates. After combat, toss a coin to determine whether you killed the wrong person or not.",
                "A stegosaurus is having a meal in the middle of the path. It has not seen the party, yet.",
                "The party hears a mighty roar. Behind them, a Tyrannosaurus rex comes barreling in. They only have a few seconds to react before it catches up.",
                "You feel like something is moving, just beyond your vision. When you take a look behind you, you could swear that the terrain was a bit different. It looks almost like it was... rearranged.",
                "You find a group of kobolds destroying the forest for pleasure.",
                "You meet a large, talking tree. The tree asks for assistance in ridding itself of a parasitic host and offers mushrooms that will shrink/grow the consumer.",
                "The party comes upon children playing Hide and Seek and are invited to play. If they accept (as the seekers), the skill checks are surprisingly high. The children are using magic to disguise themselves as trees, shrubs, flowers, etc. If the party wins, they get a few scrolls of disguise self, polymorph, and other basic transmutation spells.",
                "The party comes upon an area of jungle where all the vegetation is decaying and beasts litter the ground dead. Oddly, none have been scavenged.",
                "Hanging from one bound ankle, an irate Nobel dressed in the finest (and mostly useless) expedition gear money can buy swings before you, demanding you help them.",
                "You come to a blackened patch of the jungle where everything seems thorny. If these thorns spill blood, the blackened plants that surround them are almost immediately rejuvenated.",
                "A lonely Triceratops is looking for food, but all of the local area's vegetation has already been eaten, and its next available food source are leaves that are too high for the beast to reach.",
                "The party is surrounded by 1d4 insect swarms. Party members who applied a bug repelling spray on their bodies are seldom attacked. Even if they are, the swarms attack them with disadvantage.",
                "As you cross a rocky hill, you encounter 1d4+3 Axe Beaks are protecting their eggs from an aggressive Allosaurus and a band of 3 Velociraptors that is flanking them from behind.",
                "As you approach a dark cave, out come 2 duergar berserkers riding on giant bats, yelling something in Undercommon and clearly unhappy to see you.",
                "A bandit group of 2d4 Kenku cuts through the foliage with their scimitars from all sides, eventually surrounding your party. They mock and laugh at everything you say, slowly inching closer with every noise you make. A passive perception score of 15 will reveal that their daggers are laced with incredibly potent paralsying poison that numbs the joints.",
                "A giant crocodile is battling an ankylosaurus whose tail resembles a greataxe. It deas 5d8+4 slashing damage and forces out a DC 14 STR saving throw against 2d4 bleed damage every turn. On an attack roll of NAT 20, this tail can chop an entire limb off.",
                "Frostego, an icy stegosaurus of legends whose armor plates are made of icicles, can be seen majestically treading through the jungle. As it walks by, the air goes cold (if you're not using the Frostego homebrew, make it a buffed Stegosaurus with a projectile icicle attack and cold resistance).",
                "You stumble upon an isolated Lizardfolk village whose villagers somehow don't immediately want to eat you alive. Who knows, they might even offer shelter.",
                "An incredibly speedy Velociraptor zooms past you, leaving behind a 2d8 thunder damage sonic boom. There's a 50% chance it did that intentionally, and that it'll come back to finish you off (homebrew velociraptor with lightning abilities and incredible speed).",
                "A cyclops is journeying towards its home near a large body of water. It isn't looking for a fight, but any sudden moves or hostility from the characters might trigger one. The cyclops knows the region quite well, and it rarely sees adventurers around here.",
                "An ornery ankylosaurus is gorging on plants, but it attacks any characters who disturb it.",
                "The party's scent attracts 1d3 allosauruses, which appear 100 yards away when the party first notices them. Any character who succeeds on a DC 15 Survival check can find a safe refuge (a high branch, a small crevice, a hollow log, and so forth) that the predators can't reach or enter.",
                "A pack of 2d6 dimetrodons are spotted along a sunny riverbank or on rocks above the water. Roll any die. On an odd result, the dimetrodons take no notice of the characters; on an even result, they're hungry and attack at the slightest provocation, or if the characters approach within 100 feet of them.",
                "A herd of 3d6 hadrosauruses are grazing nearby, with 1d6 noncombatant young among them. The adults don't attack unless they're attacked or antagonized. The young are Small beasts that can be sold to dinosaur handlers for 50 gp each, or for 100 gp if a character succeeds on a DC 15 Persuasion check to negotiate the price. The young dinosaurs are easy to handle if separated from their parents, but the adults fight if their young are captured.",
                "Two plesiosauruses are fighting over a dead giant octopus. If the characters are on a river, the creatures are spotted at a distance of 300 feet, whereupon they bellow menacingly and move to attack the party. To paddle a canoe to a safe spot along the riverbank, one character in the canoe must succeed on a DC 13 Athletics check, with other characters in the canoe using the Help action. Canoes that don't reach the bank are flipped and demolished by the reptiles, which then attack swimmers in the water.",
                "A flock of 2d6 pteranodons is spotted overhead. They keep their distance and attack only if threatened.",
                "A flight of 1d4 + 1 quetzalcoatluses is spotted overhead. They keep their distance and attack only if threatened.",
                "A triceratops that appears to be grazing alone is actually a mother with a nearby nest containing one noncombatant hatchling and two unhatched eggs. The mother eyes the characters suspiciously but doesn't attack unless they position themselves between her and the nest.",
                "This lone stegosaurus is in a genial mood. It approaches the party out of curiosity, but anyone who touches it triggers a swipe from its tail.",
                "In the distance, the party spots a tyrannosaurus rex 900 feet away. There's a 50% chance that the hungry behemoth is fighting either a stegosaurus, a triceratops, a pair of giant constrictor snakes, a giant ape, or a mob of ghouls and zombies. None of these creatures will voluntarily team up with the party, but their presence might weaken the tyrannosaurus to the point where the characters have a chance of slaying it. In order to avoid the encounter, the party must succeed on a DC 15 group Stealth check.",
                "An invisible green faerie dragon takes an interest in the adventurers and follows them for a while. If the characters are in good spirits, the tiny dragon plays harmless pranks on them during the party's next short or long rest. If the characters are not angered by this trickery, the dragon appears and truthfully answers three of their questions before bidding the party farewell. If the characters seem dour or mean, or if the faerie dragon’s pranks sour them, it flutters off without providing any sort of aid.",
                "A friendly jungle guide offers his services for a measly sum of 30 copper per hour. The guide is actually a Weretiger with a 50% chance of possessing ill intentions towards the party, leading them into a trap. You roll for this chance on a short rest, long rest, or just at any opportunity where he could backstab you. This is done to avoid metagaming.",
                "Taking a wrong step, a party member steps on an active insect nest. What at first appear to be mere ants are actually small rust monsters. Act quickly, or say goodbye to your metal belongings.",
                "You hear the mighty roar of an adult red dragon somewhere far above you. If you investigate, you might find the corpse of a recently-beaten green dragon, probably with charred scales at that.",
                "The characters unwittingly enter the hunting grounds of 1d3 assassin vines. The vines are indistinguishable from normal plants and can’t be spotted with Wisdom (Perception) checks. However, they draw carrion to their roots, so characters might smell a dead body nearby. Because assassin vines can move, an encounter in the evening or at night might involve the vines creeping into the characters’ camp and strangling them as they sleep.",
                "A pack of 3d6 baboons take umbrage at the characters’ intrusion. The baboons can be distracted by tossing each of them a day’s supply of food. Otherwise, they attack.",
                "The characters stumble upon 2d4 apes enjoying some excellent fruit. The apes feel threatened and show signs of defending their food. If the characters immediately back away slowly, the apes do nothing but make threatening displays. Otherwise, they attack.",
                "Any character with a passive Wisdom (Perception) score of 12 or higher spots 1d6 almiraj 60 feet away. The almiraj run from any creature that they can see within 30 feet of them. Any character who successfully traps an almiraj can use an action to make a DC 14 Wisdom (Animal Handling) check. If the check succeeds, the almiraj becomes calm and doesn’t attack the character or run away unless it feels threatened or is harmed.",
                "The characters are shadowed by 1d4+1 aldani, which are noticed by any character with a passive Wisdom (Perception) score of 12 or higher. The aldani don’t communicate with others unless they must, and they won’t fight unless the characters refuse to take a bribe to leave the area. The aldani will aid the characters only if they’re offered something of great value in return — for example, an offer to drive off a pack of predatory dinosaurs encroaching on their territory.",
                "The characters spot 3d6 cannibal tribal warriors feeding on the rotting remains of a dismembered zombie. If the characters remain quiet and keep their distance, they can move away without being noticed by the cannibals.",
                "A Chwinga takes an interest in the characters. It attempts to steal something valuable from an unguarded pack or canoe, but is noticed by any character with a passive Wisdom (Perception) score of 17 or higher. The chwinga always leaves something else in exchange: a pretty shell, a handful of nuts, or an uncut gemstone (10 gp).",
                "Any character with a passive Wisdom (Perception) score of 12 or higher sees and hears 1d4 + 1 crocodiles moments before they attack; all other characters are surprised. A crocodile can capsize a canoe and throw its occupants into the water by using its action and succeeding on a DC 15 Strength (Athletics) check.",
                "The party stumbles across 1d4 + 1 Eblis living in reed huts built on stilts above a swampy marsh or pond. The eblis attack wounded or weak-looking characters but offer to trade information for precious gemstones if faced with a strong, well-armed group. For 50 gp worth of gems, they point the adventurers in the direction of nearby landmarks. If the characters follow these directions, they have advantage on checks made to reach those landmarks or just get to skip 1 or 2 negative random encounters. If the characters defeat the eblis and search the huts, roll three times on the Random Treasure table to determine what, if anything, the eblis have stashed in their homes.",
                "The party spots a charred elf's skeleton inside a charred constrictor snake's skeleton. (Both were killed by a lightning bolt spell.)",
                "You encounter f fresh human corpse stuffed into a hollow tree. (Girallons plan to return and devour it later.)",
                "On the path in front of you lie the crushed remains of an unarmored dwarf, showing signs that she was stomped to death by a rampaging dinosaur.",
                "You find a half-orc spiked to an enormous tree by the broken-off horn of a triceratops.",
                "The party treads through a valley of bones and decay, eventually finding its perpertator - a Catoblepas unaware of its disease-ridden nature. If the characters have met some of the local folk, they will be asked to exterminate the beast, even though it means no direct harm.",
                "Your party stumbles upon the desiccated husk of a gnome, cocooned in giant spider webs.",
                "As you attempt to take a short rest in a somewhat stinky yet safe hidey hole, you begin feeling ill. Make a DC 16 Constitution saving throw or be poisoned. As it turns out, you (and your party if they're in your presence) have intruded on the territory of a Catoblepas - a creature very unhappy to see you. Roll initative!",
                "As you trek through the jungle, you find the swollen, purple corpse of an elf adventurer, dead only a few days ago from the bite of a poisonous snake.",
                "The party runs into another band of explorers, consisting of a mage, a priest, a scout, and 1d6 tribal warriors. Roll a d6 to determine the group's situation: 1 or 2 - The explorers are lost and hungry. 3 or 4 - The explorers are in good shape but are actively hunted by firenewts, ghouls, goblins, or grungs. 5 - The explorers are healthy and headed toward the nearest landmark, intent on exploring it. 6 - The explorers are healthy and heading back to the nearest city for rest and supplies.",
                "An adult green dragon circles the jungle skies, looking for its next prey. The party must hide, or become the next target. The lair of the dragon is nearby.",
                "A light firenewt patrol consists of 1d4 firenewt warriors mounted on giant striders. A heavy patrol consists of 2d4 firenewt warriors and a firenewt warlock of Imix, all mounted on giant striders. Statistics for all these creatures appear in appendix D. The firenewts always strike their final blows with the intention of knocking out enemies, who are then taken back to the creatures’ cave lair to be tortured and eaten.",
                "Characters spot the slimy trail of a flail snail. If they wish to follow it, a successful DC 10 Wisdom (Survival) check correctly deduces which direction the snail was traveling.",
                "You find a sleeping halfling with a fishing pole on his lap.",
                "The sound of fluttering wings heralds the arrival of 3d6 flying monkeys, which swoop through the adventurers in a wave of grasping hands and feet. Each character must succeed on a DC 12 Dexterity saving throw or lose a useful piece of gear to the furry thieves. If this encounter occurs near the location of a hag hut, the monkeys are servants of a green hag.",
                "Roll a die. On an even result, the party encounters a single flying snake. On an odd result, the characters encounter 2d6 flying snakes. These snakes attack only when threatened. A flying snake that is successfully grappled can be stuffed in a sack or other soft container. After 1 hour of confinement, the snake settles down. A character who succeeds on a DC 13 Wisdom (Animal Handling) check can remove a calm snake from the container without causing it to attack or fly away.",
                "The characters hear the sound of huge creatures stomping through the wilderness. If they follow the noise, they encounter a search party of three frost giants accompanied by 1d2 winter wolves.",
                "The characters see and hear 1d4 + 1 giant boars foraging ahead of them. Skirting around the boars to prevent them from charging requires a successful DC 12 group Dexterity (Stealth) check.",
                "These 2d6 giant frogs have come together in hunger and try to eat everything that crosses their path. The characters have plenty of warning as the amphibians hop noisily toward them.",
                "The characters cross paths with 1d4 vegepygmies, each one mounted on a thorny. These vegepygmy hunters have wandered far from their tribe. They flee if outnumbered; otherwise, they attack.",
                "As you step on a branch while treading through the jungle, everything else goes quiet for a moment, up until you hear loud, thudding steps apporaching you. The ground begins to tremble as 1d4 Ogre Zombies charge from behind the trees to feast on your flesh and gnaw on your bones.",
                "You find a distressed ankylosaurus zombie, seemingly aware of the tragic nature of its existence.",
                "As you walk through the jungle, the ground begins to shake. A massive, undead beast announces its presence with a sickening roar. During its roar, a zombie fall out of its mouth. The creature is none other than a Tyrannosaurus Zombie.",
                "The evil remnant of a dead explorer has become a specter that attacks the party.",
                "The characters come across 3d6 skeletons. If the encounter occurs while the party is traveling, the skeletons are either lying on the ground or buried under it, ready to spring up when wayward explorers pass by. If the party is camped, the skeletons wander into the camp and attack.",
                "A hungry troll comes crashing out of the jungle, intent on eating the characters.",
                "The characters encounter three sea hags that comprise a coven. Their favorite trick is to pull a damaged or abandoned canoe onto a riverbank and pretend to be stranded or wounded explorers in need of rescue. If they are defeated and the area is searched, roll three times on the Random Treasure table.",
                "The characters see a salamander tending a nest of 1d6 fire snakes. The salamander has no interest in fighting and attacks only to protect itself and the snakes.",
                "A bank of blue mist drifts toward the party, covering an area of 1d6 20-foot squares. Any character with a passive Wisdom (Perception) score of 13 or higher notices the mist and can warn others of its approach. If the encounter occurs while the party is camped, the mist drifts through the camp at a speed of 5 feet per round. Characters who come into contact with the mist are exposed to blue mist fever.",
                "The characters encounter 2d4 lizardfolk and a lizardfolk shaman. These lizardfolk belong to a tribe or kingdom and can be appeased with food (one day’s supply per lizardfolk in the group). Otherwise they attack.",
                "Without warning, 1d6 jaculis launch themselves at the party from the trees. Any character with a passive Wisdom (Perception) score of 14 or higher is able to react, but all others are surprised.",
                "A grung hunting party consists of 2d6 grungs led by a grung elite warrior. The grungs have set up an ambush in the trees. Any character with a passive Wisdom (Perception) score of 14 or higher spots them just in time. All other characters are surprised.",
                "The characters encounter 1d6 giant lizards sunning themselves on warm rocks. The lizards pose no threat unless they’re attacked, and they’re too set in their ways to be trained as pack animals.",
                "Before it rises out of the water, make a Dexterity (Stealth) check for the giant crocodile. Any character with a passive Wisdom (Perception) score less than the check result is surprised when the monstrous creature attacks.",
                "Any character with a passive Wisdom (Perception) score of 11 or higher spots 1d3 giant scorpions moments before they emerge from hiding and attack. At the end of the encounter, any character damaged by a giant scorpion must succeed on a DC 11 Constitution saving throw or become infected with shivering sickness.",
                "A droning sound announces the presence of 1d6 giant wasps before the characters see them. The wasps attack at once, ignoring heavily armored targets in favor of those with little or no defensive protection. At the end of the encounter, any character damaged by a giant wasp must succeed on a DC 11 Constitution saving throw or become infected with shivering sickness.",
                "Two girallons hang in the trees, perch atop rocks, or lumber between crumbling, vine-covered ruins. The characters spot them automatically and can avoid a hostile encounter if they withdraw and succeed on a DC 13 group Dexterity (Stealth) check.",
                "The characters are attacked by 2d6 magmins, which flee if reduced to fewer than half their starting number.",
                "The characters blunder into a patch of 1d4 + 1 mantraps, which are undetectable until they attack. The plants are 10 feet apart, so that only one plant attacks on the first round. The others must wait until characters maneuver within 5 feet of them.",
                "The characters might encounter magma mephits, mud mephits, smoke mephits, or steam mephits (each appearing as a group of 2d6). The mephits don’t attack unless they outnumber the characters two to one, but they’re reluctant to be helpful unless they themselves are outnumbered.",
                "Looming in the sky, 1d4 + 2 pterafolk watch the characters' every move and wait until they blunder into danger. The next time a random encounter occurs, the pterafolk take advantage of the distraction and attack from the air, launching javelin attacks at wounded characters while staying out of melee. If they meet firm resistance, the pterafolk fly away, but they might regroup for a follow-up attack at your discretion.",
                "The characters pass close to a ruin inhabited by 3d6 yellow musk zombies. The zombies might be spread across the area or bunched together, depending on the terrain. In the heart of the ruin, a yellow musk creeper clings to a crumbling archway, statue, or polluted well. If this encounter occurs while the party is camped, the zombies emerge from a nearby ruin to attack the camp and attempt to knock characters unconscious. They then drag those characters back to the yellow musk creeper.",
                "The party spots 2d6 zorbos hiding in wukka trees. The creatures growl and bare their teeth if any characters approach them. If the characters act in a threatening manner, the zorbos attack.",
                "Perched on a cliff are 2d4 gargoyles that swoop down to attack. Two of them carry a net between them. As an action, either gargoyle can use the net to make a melee weapon attack (+4 to hit) against one Small or Medium creature. If the attack hits, the gargoyles hoist the character into the air and fly off with their catch. It takes both gargoyles to lift the net if it has a creature caught in it. The gargoyles flee if reduced to half their number.",
                "The characters are attacked by 1d6 giant wolf spiders living in hidey-holes in the nearby ruins. If they are defeated and their lair is explored, roll on the Random Treasure table. After looting the treasure, there is a 50% chance that double the amount of rolled Giant Wolf Spiders will appear from behind to surprise the party.",
                "[IF YOU'RE NOT PLAYING TOMB OF ANNIHILATION, SKIP THIS ENCOUNTER]. The characters encounter the tyrannosaurus rex known as the King of Feathers. See chapter 3 for more information on this unique beast.",
                "Roll any die when a shambling mound encounter occurs. On an even result, the characters hear the creature trudging through the muck before it attacks them. On an odd result, the shambling mound lurks within a mass of vegetation, where it can be noticed by any character with a passive Wisdom (Perception) score of 15 or higher.",
                "A constrictor snake attacks a random party member from hiding. The character targeted by the snake is surprised unless he or she has a passive Wisdom (Perception) score of 12 or higher.",
                "A giant constrictor snake attacks from hiding in the same manner as a constrictor snake.",
                "A giant poisonous snake shoots out from the undergrowth to attack a random character. The character targeted by the snake is surprised unless he or she has a passive Wisdom (Perception) score of 14 or higher.",
                "This encounter indicates that 1d4 swarms of quippers catch sight of the party, but these creatures are dangerous only if the characters are in the water with them. Creatures on the shore or in canoes are safe, but in both cases, the swarms follow the characters until they’re out of sight and away from the water.",
                "A tiger lies in wait for the party but is noticed by any character whose passive Wisdom (Perception) score is 16 or higher. If not detected, the tiger pounces at a character who comes within 40 feet of it. The tiger retreats if it loses more than half its hit points.",
                "A wereboar masquerading as a priest takes a dim view of explorers encroaching on its territory and demands that the characters turn back. Around its neck, it wears a crudely-made holy symbol of a random deity."
            ]
            const jungleEncountersIndex = Math.floor(Math.random() * jungleEncounters.length)
            blurt({
                title: 'Jungle Encounter',
                text: jungleEncounters[jungleEncountersIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }  
        else if(selectedBiome == "Arctic"){
            const arcticEncounters = [
                "Nearby, there is a colony of yetis who are protective of their territory, judging by the amount of heads impaled on ice spikes.",
                "A white dragon feasts on dead carriage horses in the center of a large field.",
                "You find your path blocked by a frozen lake, and must complete a skill challenge or a set of skill challenges to cross safely.",
                "A randomly generated NPC is trapped on a block of ice in the center of a lake, and will fall in without help.",
                "A blizzard has blown in, severely limiting visibility.",
                "Oh no! A hail! Roll for Hail effects on the ''Storms'' table.",
                "You are surprised by a puppy made of animated lichen. It's very friendly.",
                "A cold mist surrounds you. Out of the mist comes out a hazy Water Elemental, seeking to absorb the water out of your body. The creature can use a bonus action to turn into mist, and move for an additional 30ft without provoking opportunity attacks. Furthermore, non-magical weapon attack rolls made against it have disadvantage.",
                "A band of Orc raiders arrives with the sound of a war horn. Their chief is riding on a polar bear.",
                "You see a merchant with a sled pulled by a giant elk. If you shout for him, he will make a turn and offer some wares. 50% for his Elk to sprain his ankle while making the turn. If it does sprain its ankle, he will give you a free common magic item and 150 GP if you help the creature (DC 20 Medicine check).",
                "A baby yeti is crying, presumably because it lost its mother. Will you help it find its potentially agressive mother, or leave it to die?",
                "You meet the hunting party of a small artcic tribe. They are willing to trade.",
                "You stumble upon a small settlement of huts full of hunters that carve holes in the ice. They live with some druids that can call to giant whales who live under the ice and contain the wisom of the deep if you can speak to them.",
                "You hear cries of help and see a woman drowning inside a cracked, icy lake. Upon closer inspection, she is surrounded by dead bodies, and reveals herself to be a rather nasty Sea Hag. If you went to help her, you are grappled, and must succeed on an athletics skill contest against the hag. If you have any allies with you, 3 more Sea Hags appear.",
                "You come across a lake that is somehow not frozen. In the middle of the lake, a small, icy island floats quietly, absolutely stacked with valuables. If you disturb the water while on your way to the island, you will get surprise-attacked by a Water Weird that has been guarding these valuables, but has long since outlived his creator. Every two rounds, a new Water Weird will spawn until you either die or leave the area.",
                "You find an icy cave with a recently lit campfire and four bedrolls inside it. Your character doesn't know this, but if you try to rest here, the campfire will slowly reveal a Gelatinous Cube frozen into the bottom of the cave.",
                "You find a random treasure (roll in Dungeon section) encased in ice. 50% chance that the ice is a frozen water elemental, waiting to be thawed.",
                "You are approached by a gang of Goblins in sleds pulled by Worgs. They demand you surrender your weapons, give them all of your money, and let them take your weakest party member as a slave.",
                "A dragon flies over, cuasing an avalanche. Succeed on a DC 15 DEX saving throw or get trapped under the snow, awaiting either help or a painless death.",
                "A pack of 1d4+2 wolves has been following you for quite a while, and you've only just noticed. They are currently encircling you. What will you do?",
                "You come across a sunken ship, frozen under the ice. Its treasures should still be inside...",
                "You encounter a frozen lake with a massive dark shape in the middle, and on the frozen surface you spot cultists chanting and sacrifing frozen corpses to the aforementioned dark blob in the ice.",
                "A lone herder asks your party to help him catch 4 specific reindeer. 50% chance he will offer a lasso to help with the task. Those 8 reindeer have different shaped ears than others (DC 14 Perception). Catching them has a DC of 15, with the ability depending on your method. Doing the same thing every time increases the DC by 1, so think creatively or roll well.",
                "An old sailing ship has been locked in the ice for generations. Only the skeletons of the crew remain on board, along with a hold full of gold and treasure. At it's center, the skull of a dragon. The treasure, however, is cursed, although your character doesn't know that. Should one piece of gold leave the hold and make its way topside, the skeletons come to life, and should that piece of gold leave the ship, a giant skeletal dragon shall rise from within the ship to reclaim its treasure.",
                "A Bheur Hag starts stalking you. She won't directly attack unless you attack her first, but she will attempt to sabotage you at every opportunity.",
                "You encounter a wandering, randomly generated NPC who's searching for a lost ruin that is supposed to be in this area.",
                "You stumble upon a colossal igloo with it's only entrance being at the top. Inside the igloo is a Silver Dragon that has been protecting the people inside for generations. They worship it as a god and have no concept of the outside world.",
                "You spot a strange man just ahead. Upon closer inspection, you notice that it's just a snowman with a cloak on it. Roll a 1d20. On a NAT 1, the cloak is actually a Robe of Useful Items",
                "As you're walking, your foot gets stuck in a pond that instantly freezes over. You are then jumped by 1d4+1 Ice Mephits, who are maniacally cackling while thinking what they'll do with you. To break free, you must succeed on a DC 18 STR saving throw. While you are stuck, your movement is halted and your attack rolls are made at disadvantage.",
                "Your party is trudging across the ice alongside a freezing lake, and suddenly the ice cracks, leaving you stuck on an ice raft in the middle of a dangerously cold body of water. If you have other party members, they are separated from you.",
                "A crazed Wizard has made an illusion around your party, making you walk in circles.",
                "A white ooze is disguised as a snow drift and you just walked into it. Congrats!",
                "Up ahead, you hear a Remorhaz and a dragon fighting, but cannot see them yet.",
                "A band of Frost Giant hunters scour the icy wastes for Remorhaz nests and eggs. They seem to have found a few young Remorhazes, but then they move aside, revealing their mother, beaten and nearing death.",
                "You stumble upon a Remorhaz teaching its young to prey on a herd of Elks.",
                "You feel intense vibrations from deep below. A Remorhaz is burrowing its way towards you.",
                "You encounter a Remorhaz finishing off a polar bear. You can still try to run while it's feeding, but fail a DC 15 Stealth check, and it spots you.",
                "You meet a lonely Frost Giant, separated from his crew. He tells you a story about glory or conquest if you're willing to listen. If you ever roll this encounter again, you'll meet the same giant, who will be friendly and will ask you how you've been since the two of you have last met.",
                "You hear the war horns that heralds a march of Frost Giant warriors coming your way. Hopefully, they're not after you, specifically.",
                "You encounter two Frost Giants surrounded by slightly smaller Frost Giants. The bigger ones appear to be fighting for dominance in their clan.",
                "Your party stumbles upon a village of people who graciously offer you and you allies food and shelter. 50% chance they're hiding something, which is, the fact that they're all werebears and, while Neutral-Good, are wary of outsiders discovering their secret.",
                "A barren field where will-o'-wisps appear at night, these wisps trail colors behind them like the aurora. A massive battle happened here, but who was fighting and just how long ago? Investigating the area might reveal some details.",
                "The temperature drops DRAMATICALLY, making hypothermia/frost damage even more potent than before.",
                "A ripple waves against the icy ground, as the already cold air drops even more, and your party is temporarily warped to the Elemental Plane of Ice.",
                "You realize you are being stalked night and day by an enormous dire polar bear.",
                "A man encounters the party stark naked and raving mad. He's quite likely suffering from hypothermia. If you can help him survive, he will lead you and your allies to a village for refuge. In there, you'll find his family has been waiting for him, who are all very grateful for your help.",
                "Your party comes across an impass while crossing the ice. The ice has cracked, and several floating ice islands litter your path. Large enough to hold 4 medium creatures as they cross, said creatures must hop from island to island to cross this frozen body of water (DC 10 Acrobatics). Falling in results in hypothermia or 6d6 cold damage, or even death if nobody helps the person who just fell.",
                "On the horizon, you spot a castle made of ice. 50% chance it's an Ice Hag's illusion, leading you into a trap, and 50% chance it's actually an Ice Castle where Frost Giants store the loot from their plunder.",
                "You find an extinct creature, encased in ice for Gods know how long.",
                "An arctic fox is chaing a snowshoe hare.",
                "You and your party were actually dreaming for quite a while. You wake up at a secluded camp surrounded by magically enchanted snowmen (using the Scarecrow stat block). They act as guards for an Ice Hag, beckoning you to come closer to the witch's lair.",
                "You come across a caravan of pilgrims out to see a variant of the aurora that only comes out once a decade. They'll gladly take on anyone who wants to join, and can share valuable tips about food caches and shelter in the nearby area.",
                "Your party is being stalked by a chittering pack of ice and steam mehits, who are looking for victim upon which they can enact petty evils. They try to keep themselves hidden and motionless when they think your party might detect them, but swarm your party when they realize they've been noticed.",
                "A clan of Frost Giants, carrying sufficient amount of meat for them off a recent kill, come across your party. They demand your party retreat, or prove your might as warriors, throwing a few of their champions/captives/pets to fight. If you succeed, your party can pass, but is also invited for a feast."               
            ]
            const arcticEncountersIndex = Math.floor(Math.random() * arcticEncounters.length)
            blurt({
                title: 'Arctic Encounter',
                text: arcticEncounters[arcticEncountersIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedBiome == "Underdark"){
            const underdarkEncounters = [
                "A randomly-generated NPC stops the party to ask them whether they're willing to loot a bountiful underground fortress. A vengeful Sword Wratih Commander and 1d6+3 Sword Wraith Warriors are defending said dungeon, as it is built on top of a battle site. The only thing this NPC knows is that the dungeon houses a legendary item protected by several monsters (of the DM's choosing), and is unaware of the Sword Wraith's presence. The characters are not aware of the wraith's presence either, unless they succeed on a DC 20 Investigation or History check to determine what else might be defending the fortress.",
                "In the distance, you spot a Behir, darting out of the shadows at an unsuspecting party of 1 Champion, 1 Abjuration Wizard, 1 Master Thief and 1 Martial Arts Adept.",
                "The party encounters a huge chasm with a rope or a thin stone bridge stretching across it. Impressive acrobatics will be required if the party decides to venture forth...",
                "The ground shakes. The earth trembles. You hear the noises of a large creature burrowing its way towards you. A Bulette is coming! Your party must succeed on a DC 16 Stealth check to hide from the creature, otherwise the Bulette burrows straight into nearest person that isn't hidden.",
                "1d4 Minotaurs who had their maze taken over by an egomaniacal Beholder are looking for a new labyrinth to guard. If the party helps the Minotaurs defeat the Beholder and its minions, the Minotaurs will let the party loot some of its magical items (4 random very rare items or 1 legendary item).",
                "As the party makes their way through a tight, winding tunnel, they are ambushed by a Bulette (If above level 10, add an extra Bulette).",
                "The caverns shake as a huge purple dragon (check 5ESRD) is fighting a superfast, 230 HP Behir that can dash as a bonus action and has a stronger, 15d10 damage lightning breath.",
                "The party emerges into a spacious cavern, its walls glistening with gems. Inside, a lone, wounded Svirfnebli prospector huddles tight to a sack of precious stones, refusing to part with them under any circumstance.",
                "The party is extorted by a group of 1d4-1 (minimum of 1) Duergar Kavalrachni (riding Female Steeders) for every party member. If the combat goes bad for them, they release 1d6+4 Male Steeders that they have kept as food and mates for their Female Steeders.",
                "If throughout the campaign the party had killed a number of creatures equal (at least) to their party size, the same amount of Slithering Trackers (usually 4 or 5, depends on party size) will now surprise-attack the party by jumping out from a nearby water source or just attacking after the party fails a DC 18 Investigation check on their puddle disguise.",
                "The group encounters a makeshift “church” where a group of kuo toa are praising a purple worm, offering both themselves and and a presumably dead mind flayer as a sacrifice . Their ritual slowly grows louder and louder. After a few minutes of raising volume, a purple worm mouth breaks through the wall to the left, demolishing the room and eating everything in it. After it’s gigantic body passes through, all that is left is a staff, a mind flayer tentacle, and a pool of blood around a kuo toa arm.",
                "A friendly Duergar ranger with a pet Female Steeder approaches the party to guide them if they're lost. If they aren't, the Duergar will instead spoil the next Underdark Random Encounter by giving the party a word of caution of what might soon stand in their way.",
                "The party spots a Mind Flayer feasting on a family of Duergar who were most likely just foraging for food. Make a skill contest between the least stealthy party member and the Mind Flayer's active perception check. If the party member is spotted, the Mind Flayer will either flee and notify its colony, who might come to hunt the party down at a later date (opening up a new plot), or try to kill the party on his own if they're under level 5. This Mind Flayer will have 10 temporary hit points for every party member (nourishment from eating the Duergar family).",
                "In the distance, the party spots a Mind Flayer colony. How? They're taking too long with their brain-transporting caravans, and are letting their guard down. The colony is probably undermanned, as no self-respecting Mind Flayer campsite would allow anyone to spot it. Well, as it will turn out if the party tries rescuing the mind flayer's brain cattle, this whole campsite is actually a sting operation designed to lure in unsuspecting, heroic adventurers. Their real colony is still nearby though. Near enough for, let's say, 1d4+1 days of travel to reach.",
                "The party overhears a group of 1d4+1 explorers talking about a mysterious cultsite-turned-dungeon. A DC 18 history check will reveal ithouses a Star Spawn Larva Mage and is populated with fellow Star Spawns, such as Grues, Hulks, Manglers and possibly a Seer. The dungeon is filled to the brim with the cult's abandoned wealth and possibly even legendary magic items.",
                "A set of rails into a mine is discovered with a minecart on them. The cart is full of ore with some silver veins running through it. Sorting through the ore would take one pc an hour to do so, less time the more who help. This cart is actually a crafty mimic. It waits till at least two people are touching it before grappling. As soon as it has at least one held the mimic launches down the tracks pulling its prey after. Fortunately for any left behind, there is a real minecart they can put on the tracks to chase them.",
                "Cloakers in equal number to the party ambush the party. Any cloaker that misses its first attack leaves the battle and hides out of reach. Any cloaker below half HP or forcibly detached will disengage and fly away to hide.",
                "The PCs stumble upon a small village that stretches along a ravine. If they inquire with the locals, they will find that the unfathomably dark chasm leads to a place they call ''The Underdepths''. The locals have to fight back horrible abyssal beasts every night, and each time it only gets worse.",
                "The bones of an enormous creature are embedded in the walls of the tunnel. Ribs and a massive skull of an animal that resembled a gigantic deer poke partially out of the stone. Each one of its teeth are the size of a man's fist.",
                "A small group of flumphs have set up a small shop. They offer information on the general area around them. They also sell really smooth rocks for 1-3gp as well as small, inedible mushrooms for 2-4gp.",
                "The group enter what appears to be a gigantic crystalline geode, and while travelling through it, come across a small band of duergar. Spell casters quickly learn that the geode crystals actually refract magical spells causing chaos on the battlefield. (Roll a percentile to see who gets hit by refracting spells.)",
                "The party finds themselves in a wide tunnel, filled with stalagmites, stalactites and fissures. In the darkness a solitary Grell stalks the party, waiting for the opportunity to grapple a member of the party (ideally the squishiest) and disappearing into one of the fissures.",
                "The top part of the skull of a humanoid is resting in the middle of the tunnel. The tiny remains of a wick and blobs of wax from a melted candle flow over the bone.",
                "A drider spellcaster merchant has maps (or potent fungi) for sale. Makes good offers for loot of characters and can trade in favors.",
                "An unhappy wereboar is lost and wounded from fights with local creatures. Talks about wild parties in the moonlight.",
                "An eyeless beholder is chained to a cliff and used as an oracle by local tribes. Speaks several languages and talks of far off realms.",
                "A friendly spectator has memory less and cannot find his way back to the vault he was supposed to protect. Will you help him, or take advantage of him?",
                "A doppelganger in gnome form wants to pick delicious mushrooms. They are surrounded by deadly fungi that emit poisonous spores.",
                "A pair of otyughs look for a new home. Dark, toxic and waste-filled.",
                "An exiled Drow Matron Mother and her Drow Favored Consort seek the help of powerful adventurers willing to restore them to their throne. If the party shows any weakness, they will be backstabbed by the aforementioned drow.",
                "The party stumbles upon a small Drow settlement where an Eilistraee-aligned Drow Matron Mother (mother of rebellion) is organizing a war band to then march towards her formerly-ruled city and coup the lolth-aligned matron mother.",
                "As you travel through the underdark, you start dreaming of the place you'd rather be in right now. Suddenly, you spot a faint glimpse of it on the horizon. If you wish to ignore the urge of heading straight there, you must succeed on a DC 14 Wisdom saving throw. If you decide to venture forth regardless, you'll soon realize that what you're seeking is actually illusionary, and in reality, is a Balhannoth's lair. The Balhannoth rolls initiative with advantage and gets a surprise round.",
                "You stumble upon a lonely, wounded Choker, desperately gasping for air. If you don't run away immediately, 2d4 more Chokers will arrive after hearing its call for help.",
                "As you attempt to squeeze through a narrow crevice to move forward, 1d4+3 Chokers begin squeezing in from the other side. Given that they're boneless, they do not suffer difficult terrain penalties from narrow passages.",
                "You stumble upon a camp colony of 1d6+4 Chitines working for an especially bulky Choldrith. They seem to have formerly been the workes of a small mining settlement, but ones that must've gotten on Lolth's bad side.",
                "You encounter an adventuring Champion, Archer, Evoker Wizard and a Warlock of the Great Old One. They're an adventuring party with either the same quest goal as you or on the same destination as you (depends on your plot). They have a 50% chance of being helpful and sportsmanlike, but also a 50% chance of being traitorous backstabbers. You don't get to roll unless you stumble into a trap or combat encounter together. If you decide to ignore them, you'll see them again on your next 3 random encounters.",
                "You encounter a Conjurer Wizard trying to teach his Apprentice Wizard some basic 1st level spells, but they get interrupted by Drow Raiders on Giant Lizards. Their amount is equal to the player characters.",
                "1d4+1 Drow Arachnomancers are trying to turn their ally into a Draegloth by performing a terrible ritual. There's a 50% chance that the ritual will succeed, otherwise they'll attempt again with another member in an hour. There is also a 10% chance that their ritual summons a furious Glabrezu.",
                "You are ambushed with a surprise attack by 1d8+2 Derro. They have a surprise round on you and will try to use that to knock your party members prone.",
                "You stumble upon a small Derro settlement, inhabited by 1d12+8 Derro and a Derro Savant. They seem to have taken two Bards hostage. If your party knows a bard NPC, one of the captured Bard statblocks is that very person.",
                "The ground shakes and stalactites begin falling as a gargantuan creature can be seen burrowing through solid rock, leaving behind huge passages. It is without a doubt a Purple Worm. It would be best to steer away from it...",
                "You encounter a herd of 1d6+3 Deep Rothe in the middle of communicating with each other using the dancing lights spell. There's a 50% chance they're in their mating season, and will attack the party until they chase the heroes away.",
                "A few ragged duergar are starving and downcast. Will work for food.",
                "An awakened bat (speaks Undercommon) offers to guide group and scout for them. Wants to be a familiar and hear tales of the surface.",
                "A distraught ettin has had one head drained by intellect devourer (Int 0) and asks for help. Collapses in tears if refused or attacked.",
                "Several cautious lizardfolk escaped captivity from slavers and are trying to make sense of the Underdark. Considering living here.",
                "A grick alpha with an ornate collar is heavily wounded and retreats from any light. Pet of nearby creature, who is grateful for its return.",
                "Several deep gnome miners are trying to rescue an ore cart from a collapse.",
                "A docile purple worm has a magical carrying box fused with it (space for six Medium sized creatures). It waits expectantly for group. It can be used for fast travel between Underdark locations, but with every travel, you must roll a D20. On a roll of natural 1, the purple worm changes its mind and decides to attack by knocking you off.",
                "A strange shadow reforms when destroyed and slowly drains light instead of life. Is very confused and glows like a driftglobe.",
                "Your path is blocked by a maze of spiky fungi (treat as razorvine).",
                "You step into a sac that releases fungal spores. Succeed on a DC 11 CON saving throw or begin suffering from terrifying hallucinations. If you're not immune or resistant to the Frightened condition, roll on the short-term madnes table (in DMG or just google it).",
                "You make your way to the nearest settlement to rest, but end up in a myconid village with an an area of dead magic (as antimagic field) caused by weird fungi. They are largely neutral, but will respond with hostility to any and all offenses, including cultural ones.",
                "While you're distracted by the pretty lights and bioluminescent flora of underdark caverns, you walk straight into a covered, simple pit (DMG pg 122) or locking pit trap (DMG pg 122).",
                "An earthquake is causing fissures, rockfalls and tunnel collapses. Your path might be blocked, hell, it might even not exist anymore.",
                "The party spots a rogue pale screamer (see 5ESRD), pulling itself from a slow-moving subterranean river.",
                "1d4 + 2 basilisks are roused from their slumber by the encroaching party.",
                "A dark lake stretches out across a portion of the cave, and 2d4 cavefish zombies (see 5ESRD) lurch and slide from the water to attack the party.",
                "A humanoid figure moves in the shadows, darting around corners, letting the party catch glimpses of it but not enough to see it clearly. If the party follows it, the figure (a drow under the effect of myconid control) lures them to a cluster of bibberbangs (explosive, poisonous mushrooms) that deal 2d4 poison damage for every turn in their presence or 8d6 fire damage if they explode.",
                "On the party's way stands a disgusting, gibbering mouther followed by a swarm of 2d4 + 4 stirges.",
                "A seemingly empty cave is strewn with desiccated corpses. A 120 HP Huge Phase Spider waits within. It has 3 bite attacks that have +6 to hit and deal 2d10+4 damage. This spider is the queen of an entire colony of these. As soon as the fight starts or anyone touches the area's webs, 1d4+2 more Phase Spiders appear. The queen is positioned in a way that her body is shielding 1d6+3 Phase Spider eggs. If not destroyed, they will hatch after 1d4 rounds.",
                "The party encounters a hungry xorn on the hunt for precious metals and gemstones. 50% chance it can speak common and is actually really nice and friendly, even going as far as to ask adventurers for help with gathering gemstones - they'll help with gathering, and in return, will get some back.",
                "You stumble upon a backpack and the skeleton of a drow explorer. Inside is a lantern with heavily cracked glass that houses some kind of spirit. It sells for 10d20 GP. Merely touching it forces out a DC 19 WIS saving throw. Upon failure, the lantern's glass cracks, and an angry Dao appears in front of its liberator, mistaking them for their captor. Only a DC 20 persuasion check can calm the genie down. If that fails, the Dao summons a Wall of Stone and a Xorn to aid it in the fight. Stuck inside a stone prison or a rocky maze/labirynth, the party must now defeat a wall-bypassing Xorn and its Dao master.",
                "A thick, black goo drips down the wall—a black pudding waiting for a curious adventurer to get too close. Spotting it requires a passive perception of 16.",
                "A sound of skittering can be heard from right around the corner. Peeking reveals an ettercap herding 5d10 spiders.The spiders will attack in waves of 10 and continue to attack until the ettercap is killed, at which time they flee into the cracks and crevices of the cave.",
                "The party encounters a wounded, randomly-generated NPC warning them of a nearby roper, patient and waiting.",
                "As you pass by a valley of stalagmites, you are caught by a roper. Roll 1d4-1. Whether you free yourself or not, the outcome of the previous 1d4-1 roll determines how many of your best magic items (sorted by quality) have been eated by the roper. If you have no magic items, it goes after your weapons, then backpack, then armor.",
                "You stumble upon a seemingly nice and cozy resting spot. If you decide to take a short or long rest here, roll a D6. On a roll of 4-6, the area is safe. On a roll of 1-3, however, 3d4 swarms of bats in the company of 2 giant bats descend from the cave ceiling. They can be shoo'd away with a successful DC 18 animal handling check.",
                "You meet 2 drow in the company of a drider. They're neutral and seem to be avoiding dark areas in fear of a predator. If you inquire with some clever roleplay or DC 18 skill checks, they will reluctantly admit that the supply routes between their town and a larger drow city are being sabotaged by a bunch of Shadows and even a few Bodaks. Helping them out will allow safe passage to their town, unlocking a new, safe settlement in the underdark.",
                "You come across a hamlet of blue-painted hill dwarves pretending to be duergar. Their chief is an actual duergar and an enchantment wizard that dominates their minds using magic.",
                "A cloaker, trailing after the party, waiting for an opportunity to pick off a straggler or injured member.",
                "The players come across a wounded drow ranger with a pet Displacer Beast and a docile Cloaker tied around his neck. He claims he's on the run from a larger underdark city, and is being hunted by Drow raiders on Giant Lizards, Driders, and even a powerful Drow Arachnomancer. The drow ranger knows the underdark like the back of his hand, and can even offer escort services if the party decides to help him escape first.",
                "The party encounters a seemingly helpful Nothic who offers them",
                "The party stumbles upon 1d4 Duergar or 1d4 Drow fishermen hunting a large, angry Cave Fisher. Some other fishermen took the creature's eggs and it grew in size proportional to its fury.",
                "As you're trying to wash the dirt off your face in an underground river, something pinches your nose, only to then drag you into the water. Your party is surrounded by 1d2+1 Cave Fishers, while you're being dragged down the river by an additional one. If you're traveling alone, the Cave Fishers knock you out, but you wake up to the sight of an explorer party of 1d4+4 Dwarves (Hill/Mountain/Duergar) who just killed the creatures for their blood - an especially potent ingredient to some of their spirits. Berserker dwarves can even drink the blood straight.",
                "Someone has been stalking you for quite a while, and you've only just now noticed. As for your hunter, they are aware you have noticed, and are no longer stalking you anymore. Or are they? Maybe they're moving towards you at this very moment...",
                "You have a feeling you're being watched. As you travel further, the area around you becomes strange and distorted. If you venture further, you might stumble upon the lair of a Beholder. Great riches await if you're willing to deal with its multiple layers of carefully-prepared defenses waiting for you in its dungeon... Oh, and stealth? Forget about it. The Beholder already KNOWS you're near.",
                "A crazed Beholder can be seen floating away from its lair, terrified by 1d6+2 Death Kiss that now swarm his lair. One of them floats up to the party. Making googly eyes, it entices the softest party member to pet its eyeball-head-thing. Said party member must succeed on a DC 14 WIS saving throw or be grappled by the Death Kiss. Other Death Kiss will arrive in the next round of combat, if it comes to it.",
                "A Drow Inquisitor, accompanied by a Drow House Captain and 1d6+2 other Drow, is purging a group of 1d4+4 heretic Drow. The heretics, or rather, worshippers of Eilistraee, will happily take up arms if the party stand up for them. If the zealous drow inquisitor and her crew are somehow defeated, this random encounter could lead to an underdark-drow-city subplot that focuses on a brewing revolution against the now-weakened, lolth-aligned matron mother.",
                "The party arrives at a small Duergar city ruled by 3 Duergar Warlords. Each one of them has their own personal Duergar Xarrorn advisor that constructs Duergar Constructs as personal bodyguards. The city's defense force is a small army of Duergar Stone Guards. There is a 50% chance that a Duergar Mind Master or a band of Duergar Soulblades are willing to overthrow the warlords with the party's help. Not for any objectively good reason, they just seek power, that's all.",
                "1d4 Gricks ambush the party using their stone camouflage.",
                "A large, beefy Grick can be seen in the distance, returning from the surface with a randomly generated NPC and some other commoners that will serve as its next meals. The NPC and the commoners are all unconscious, and can still be saved. The Grick has 127 HP, an AC of 16, double damage on its ''Tentacles'' attack, and deals 3d6+3 piercing damage with its ''Beak'' attack. In addition to this, it has Magic Resistance (advantage on saving throws against magic) and can attack with its tentacles twice, but only as long as it attacks different targets each time.",
                "1d4 Carrion Crawlers are having a stare-down over who gets to eat a huge pile of carcasses. If you rolled a 1 on your 1d4 earlier, there is only one Carrion Crawler, but it has 50 temporary hit points from eating the corpse pile, and now has three additional tentacle attacks. It smells the party from far away and begins slithering towards it.",
                "1d6 Cockatrice are attacking a scouting party of 1d4 Drow. There are 2 petrified Drow statues in the area - one of them clutching a Cockatrice egg, and the other trying to sheathe its sword.",
                "Mind Flayers are invading a drow city with the intent of turning it into a large, colonial fortress to rebuild their empire from. This random encounter can serve as the basis for an entire adventure, or at the very least a long questline. If the Mind Flayers are fended off, the PCs will earn the trust of the city's Drow Matron Mothers. If the Mind Flayers win, there is now a huge city full of hostile Illithids that will influence the outside world from the shadows."
            ]
            const underdarkEncountersIndex = Math.floor(Math.random() * underdarkEncounters.length)
            blurt({
                title: 'Underdark Encounter',
                text: underdarkEncounters[underdarkEncountersIndex],
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
    function rollDungeonLocation() {
        const dunloc = [
            "In a forest",
            "In a building",
            "In a chasm",
            "In a cave",
            "In a small section of the underdark",
            "On a hill",
            "In a village",
            "In a town",
            "In a city",
            "In a cliff face",
            "In a jungle",
            "In a gorge",
            "In a mountain pass",
            "In a swamp",
            "In a glacier",
            "In a desert",
            "On a mountain peak",
            "On an island",
            "On a promontory",
            "Beneath a graveyard",
            "Beneath a castle",
            "Beneath a city",
            "Beneath a temple",
            "Beneath ruins",
            "Catacombs",
            "Underwater",
            "Exotic"
        ]
        const dunlocIndex = Math.floor(Math.random() * dunloc.length)
        blurt({
            title: 'Location',
            text: dunloc[dunlocIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    function rollExoticLocation() {
        const exoloc = [
            "Among tree branches",
            "Around a geyser",
            "Behind a waterfall",
            "Buried in an avalanche",
            "Buried in a sandstorm",
            "Sunken Structure",
            "In a castle",
            "Floating on the sea",
            "In a volcano",
            "In a meteorite",
            "In the Feywild",
            "In the Shadowfell",
            "On the back of a gargantuan",
            "Inside a magical dome of force",
            "Inside a magnificent mansion"
        ]
        const exolocIndex = Math.floor(Math.random() * exoloc.length)
        blurt({
            title: 'Exotic Location',
            text: exoloc[exolocIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    function rollDungeonCreator() {
        const duncreator = [
            "Beholder",
            "Devil-worshipping cult",
            "Demon-worshipping cult",
            "Elemental cult",
            "Worshippers of a good deity",
            "Worshippers of an evil deity",
            "Dwarves",
            "Elves",
            "Giants",
            "Goblinoids",
            "Humans",
            "Human NPC",
            "Randomly-generated NPC",
            "Mad Mage",
            "Kuo-toa",
            "Lich",
            "Mind Flayers",
            "Vampire",
            "No creator (natural caverns)",
            "Religious group",
            "Organised Bandits",
            "Archdruid",
            "Powerful Wizard",
            "Legendary Adventurer",
            "Rich Noble",
            "Paranoid wealth-hoarder",
            "Dragon",
            "Draconic cult",
            "Genius Inventor"
            ]
        const duncreatorIndex = Math.floor(Math.random() * duncreator.length)
        blurt({
            title: 'Dungeon Creator',
            text: duncreator[duncreatorIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    function rollDungeonAlignment() {
        const dunalign = [
            "Lawful Good",
            "Neutral Good",
            "Chaotic Good",
            "Lawful Neutral",
            "Neutral",
            "Chaotic Neutral",
            "Lawful Evil",
            "Neutral Evil",
            "Chaotic Evil"
            ]
        const dunalignIndex = Math.floor(Math.random() * dunalign.length)
        blurt({
            title: 'Dungeon Alignment',
            text: dunalign[dunalignIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    function rollDunClass() {
        const dunclass = [
            "Barbarian",
            "Bard",
            "Cleric",
            "Druid",
            "Fighter",
            "Monk",
            "Paladin",
            "Ranger",
            "Rogue",
            "Sorcerer",
            "Warlock",
            "Wizard",
            "Artificer"
            ]
        const dunclassIndex = Math.floor(Math.random() * dunclass.length)
        blurt({
            title: 'Dungeon NPC Class',
            text: dunclass[dunclassIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    function rollDungeonPurpose() {
        const dunpurpose = [
            "Death Trap",
            "Lair",
            "Lair",
            "Lair",
            "Lair",
            "Maze",
            "Labyrinth",
            "Mine",
            "Mine",
            "Mine",
            "Planar Gate",
            "Stronghold",
            "Stronghold",
            "Stronghold",
            "Stronghold",
            "Temple",
            "Temple",
            "Shrine",
            "Shrine",
            "Tomb",
            "Tomb",
            "Crypt",
            "Catacombs",
            "Treasure Vault",
            "Fortress",
            "Bunker"
            ]
        const dunpurposeIndex = Math.floor(Math.random() * dunpurpose.length)
        blurt({
            title: 'Dungeon Purpose',
            text: dunpurpose[dunpurposeIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    function rollDungeonHistory() {
        const dunhistory = [
            "Abandoned by creators",
            "Abandoned by creators",
            "Abandoned by creators",
            "Abandoned due to plague",
            "Conquered by invaders",
            "Conquered by invaders",
            "Conquered by invaders",
            "Conquered by invaders",
            "Creators destroyed by attacking raiders",
            "Creators destroyed by attacking raiders",
            "Creators destroyed by discovery made within the site",
            "Creators destroyed by internal conflict",
            "Creators destroyed by magical catastrophe",
            "Creators destroyed by natural disaster",
            "Original creator is shackled and serves the new master(s)",
            "It was designed as a prison",
            "It's a prison for its creator",
            "Original creator still in control",
            "Original creator still in control",
            "Original creator still in control",
            "Original creator still in control",
            "Original creator still in control",
            "Original creator still in control",
            "Overrun by planar creatures",
            "Site of a great miracle",
            "Lush, overgrown ecosystem",
            "Overgrown ruins",
            "Filled to the brim with the undead because of a curse or disease"
            ]
        const dunhistoryIndex = Math.floor(Math.random() * dunhistory.length)
        blurt({
            title: 'Dungeon History',
            text: dunhistory[dunhistoryIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    function rollDungeonObstacles() {
        const dunobst = [
            "Antilife aura with a radius of 1d10 x 10 ft.; while in the aura, living creatures can't regain hit points",
            "Battering winds reduce speed by half, impose disadvantage on ranged attack rolls",
            "Blade barrier blocks passage",
            "Cave-in",
            "Cave-in",
            "Cave-in",
            "Cave-in",
            "Cave-in",
            "Chasm 1d4 x 10ft. wide and 2d6 x 10ft. deep, possibly connected to other levels of the dungeon",
            "Chasm 1d4 x 10ft. wide and 2d6 x 10ft. deep, possibly connected to other levels of the dungeon",
            "Chasm 1d4 x 10ft. wide and 2d6 x 10ft. deep, possibly connected to other levels of the dungeon",
            "Chasm 1d4 x 10ft. wide and 2d6 x 10ft. deep, possibly connected to other levels of the dungeon",
            "Flooding leaves 2d10 ft. of water in the area; create nearby upward-sloping passages, raised floors, or rising stairs to contain the water",
            "Flooding leaves 2d10 ft. of water in the area; create nearby upward-sloping passages, raised floors, or rising stairs to contain the water",
            "Lava flows through the area (50 percent chance of a stone bridge crossing through it)",
            "Overgrown mushrooms block progress and must be hacked down (25 percent chance of a mold or fungus dungeon hazard hidden among them)",
            "Poisonous gas (deals 1d6 poison damage per minute of exposure)",
            "Reverse gravity effect causes creatures to fall toward the ceiling",
            "Wall of fire blocks passage",
            "Wall of force blocks passage",
            "Wall of stone blocks passage",
            "Lush razorvine hedge blocks passage",
            "Massive boulder stands in the way",
            "An earthquake leaves a trail of boulders that block passage",
            "An earthquake splits the party if they fail a DC 16 DEX saving throw",
            "A stubborn creature won't allow passage",
            "The path is magically blocked unless a puzzle is solved",
            "The path forward is blocked by a puzzle mechanism"
            ]
        const dunobstIndex = Math.floor(Math.random() * dunobst.length)
        blurt({
            title: 'Dungeon Obstacle',
            text: dunobst[dunobstIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    function rollRandomTrap() {
        const randomTrigger = [
            "Stepped on (floor, stairs, plate)",
            "Moved through (doorway, hallway, aura)",
            "Touched (doorknob, statue, lever)",
            "Looked at (mural, arcane symbol)",
            "Moved (cart, stone block)",
            "Opened (chest, coffin, sealed vase)",
        ]
        const randomSeverity = [
            "Setback",
            "Setback",
            "Dangerous",
            "Dangerous",
            "Dangerous",
            "Deadly"
        ]
        const randomEffects = [
            "Magic missiles shoot from a statue or object",
            "Magic missiles shoot from a statue or object",
            "Magic missiles shoot from a statue or object",
            "Magic missiles shoot from a statue or object",
            "Collapsing staircase creates a ramp that deposits characters into a pit at its lower end",
            "Collapsing staircase creates a ramp that deposits characters into a pit at its lower end",
            "Chute opens in floor",
            "Chute opens in floor (spikes/thorns/spears on the bottom)",
            "Chute opens in floor (seemingly bottomless)",
            "Chute opens in floor (another trap on the bottom)",
            "Noise attracts monsters",
            "Noise attracts monsters",
            "Noise attracts monsters",
            "Noise attracts monsters",
            "Noise attracts monsters",
            "Touch an object triggers a disintegrate spell",
            "Door or other object is coated with contact poison",
            "Fire shoots out from wall/floor/object",
            "Fire shoots out from wall/floor/object",
            "Fire shoots out from wall/floor/object",
            "Fire shoots out from wall/floor/object",
            "Vent releases blinding gas",
            "Vent releases poisonous gas",
            "Vent releases obscuring gas",
            "Vent releases paralyzing gas",
            "Vent releases sleep-inducing gas",
            "Floor tiles are electrified",
            "Floor tiles are electrified",
            "Floor tiles are electrified",
            "Glyph of Warding spell",
            "Glyph of Warding spell",
            "Glyph of Warding spell",
            "Glyph of Warding spell",
            "Floor collapses or is an illusion",
            "Floor collapses or is an illusion",
            "Floor collapses or is an illusion",
            "Huge wheeled statue rolls down corridor",
            "Huge wheeled statue rolls down corridor",
            "Lightning bolt shoots from wall or object",
            "Locked room floods with water",
            "Locked room floods with acid",
            "Darts shoot out of the wall/an opened chest/floor/ceiling",
            "Darts shoot out of the wall/an opened chest/floor/ceiling",
            "Darts shoot out of the wall/an opened chest/floor/ceiling",
            "Darts shoot out of the wall/an opened chest/floor/ceiling",
            "A weapon, suit of armor, or other object animates and attacks when touched (google ''Animated Objects'' or look up the rules in the Monster Manual)",
            "A weapon, suit of armor, or other object animates and attacks when touched (google ''Animated Objects'' or look up the rules in the Monster Manual)",
            "A weapon, suit of armor, or other object animates and attacks when touched (google ''Animated Objects'' or look up the rules in the Monster Manual)",
            "A weapon, suit of armor, or other object animates and attacks when touched (google ''Animated Objects'' or look up the rules in the Monster Manual)",
            "Pendulum, either bladed or weighted as a maul, swings across the room or hall",
            "Pendulum, either bladed or weighted as a maul, swings across the room or hall",
            "Pendulum, either bladed or weighted as a maul, swings across the room or hall",
            "Pendulum, either bladed or weighted as a maul, swings across the room or hall",
            "Hidden pit opens beneath characters",
            "Hidden pit opens beneath characters",
            "Hidden pit opens beneath characters",
            "Hidden pit opens beneath characters. A gelatinous cube fills the bottom of the pit",
            "Hidden pit opens beneath characters. A black pudding fills the bottom of the pit",
            "Hidden pit floods with acid",
            "Hidden pit floods with fire",
            "Symbol spell",
            "Symbol spell",
            "Symbol spell",
            "Thunderwave knocks characters into a pit, spikes, down the stairs, or whatever",
            "Thunderwave knocks characters into a pit, spikes, down the stairs, or whatever",
            "Thunderwave knocks characters into a pit, spikes, down the stairs, or whatever",
            "Thunderwave knocks characters into a pit, spikes, down the stairs, or whatever",
            "Thunderwave knocks characters into a pit, spikes, down the stairs, or whatever. Also alerts nearby monsters",
            "Thunderwave knocks characters into a pit, spikes, down the stairs, or whatever. Also alerts all dungeon monsters",
            "Locking pit floods with water",
            "Locking pit floods with water",
            "Locking pit floods with water",
            "Scything blade emerges from wall or object",
            "Scything blade emerges from wall or object",
            "Scything blade emerges from wall or object",
            "Scything blade emerges from wall or object",
            "Spears spring out",
            "Spears spring out",
            "Spears spring out",
            "Poisoned spears spring out",
            "Metal spikes spring out",
            "Tall spikes spring out",
            "Wooden stakes spring out, splintering into spike clusters",
            "Arrows fire from slits in the walls",
            "Arrows fire from slits in the walls",
            "Arrows fire from slits in the walls",
            "Flaming arrows fire from slits in the walls",
            "Poison-tipped arrows fire from slits in the walls",
            "Brittle stairs collapse over spikes",
            "Steel or stone jaws restrain a character",
            "Steel or stone jaws restrain a character",
            "Steel or stone jaws restrain a character",
            "A character and everyone within 5ft of them is caught inside a net (max 4 medium-sized characters)",
            "A character and everyone within 5ft of them is caught inside a net (max 4 medium-sized characters)",
            "A character and everyone within 5ft of them is caught inside a large, flexible metal net",
            "A character is caught inside an anti-magical net",
            "Walls slide together",
            "Walls slide together",
            "Walls slide together",
            "Ceiling lowers slowly in locked room",
            "Ceiling lowers slowly in locked room",
            "Floor rises slowly in locked room",
            "Floor rises slowly in locked room",
        ]
        const randomTriggerIndex = Math.floor(Math.random() * randomTrigger.length)
        const randomSeverityIndex = Math.floor(Math.random() * randomSeverity.length)
        const randomEffectsIndex = Math.floor(Math.random() * randomEffects.length)
        blurt({
            title: 'Random Trap',
            text: `Trap trigger: ${randomTrigger[randomTriggerIndex]}. Trap severity: ${randomSeverity[randomSeverityIndex]}. Trap effect: ${randomEffects[randomEffectsIndex]}.`,
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }


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


    function rollTreasure() {
        selectedTier = document.getElementById("treasureTier").value;
        if(selectedTier == "Challenge 0-4"){
            const tieredLoot = [
                "5d6 copper pieces",
                "6d6 copper pieces",
                "7d6 copper pieces",
                "4d6 silver pieces",
                "5d6 silver pieces",
                "6d6 silver pieces",
                "3d6 electrum pieces",
                "4d6 electrum pieces",
                "5d6 electrum pieces",
                "3d6 gold pieces",
                "4d6 gold pieces",
                "1d6 platinum pieces",
                "Roll once on Common Tier - (A) Magic Loot table"
            ]
            const tieredLootIndex = Math.floor(Math.random() * tieredLoot.length)
            blurt({
                title: 'Valuables',
                text: tieredLoot[tieredLootIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if (selectedTier == "Challenge 5-10"){
            const tieredLoot2 = [
                "4d6 x 100 copper pieces",
                "6d6 x 50 silver pieces",
                "1d6 x 10 electrum pieces + 1400 copper pieces",
                "6d6 x 10 silver pieces + 2d6 x 10 gold pieces",
                "2d4 x 100 gold pieces",
                "2d6 x 50 gold pieces",
                "3d6 x 10 electrum pieces + 2d6 x 10 gold pieces",
                "Roll 1d4 times on Common Tier - (A) Magic Loot table",
                "Roll 1d4 times on Uncommon Tier - (B) Magic Loot table",
                "Roll once on Uncommon Tier - (B) Magic Loot table",
                "Roll once on Rare Tier - (C) Magic Loot table"
            ]
            const tieredLoot2Index = Math.floor(Math.random() * tieredLoot2.length)
            blurt({
                title: 'Valuables',
                text: tieredLoot2[tieredLoot2Index],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if (selectedTier == "Challenge 11-16"){
            const tieredLoot3 = [
                "4d6 x 100 silver pieces + 1d6 x 100 gold pieces",
                "3d6 x 100 gold pieces",
                "6d6 x 100 silver pieces",
                "1d6 x 100 electrum pieces + 1d6 x 100 gold pieces",
                "1d6 x 10 platinum pieces + 2d6 x 100 gold pieces",
                "2d6 x 10 platinum pieces + 2d6 x 100 gold pieces",
                "1d4 x 20 platinum pieces + 2d6 x 100 gold pieces",
                "Roll 1d6 times on Common Tier - (A) Magic Loot table",
                "Roll 1d6 times on Uncommon Tier - (B) Magic Loot table",
                "Roll 1d4 times on Rare Tier - (C) Magic Loot table",
                "Roll once on Very Rare Tier - (D) Magic Loot table",
                "Roll once on Epic Tier - (E) Magic Loot table",
                "Roll once on Mythical Tier - (F) Magic Loot table",
            ]
            const tieredLoot3Index = Math.floor(Math.random() * tieredLoot3.length)
            blurt({
                title: 'Valuables',
                text: tieredLoot3[tieredLoot3Index],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if (selectedTier == "Challenge 17+"){
            const tieredLoot4 = [
                "2d6 x 100 electrum pieces + 8d6 x 100 gold pieces",
                "1d6 x 1000 gold pieces + 1d6 x 100 platinum pieces",
                "1d6 x 1000 gold pieces + 2d6 x 100 platinum pieces",
                "2d6 x 1000 gold pieces + 2d6 x 100 platinum pieces",
                "2d6 x 1000 gold pieces + 3d6 x 100 platinum pieces",
                "3d6 x 1000 gold pieces + 2d6 x 100 platinum pieces",
                "3d6 x 1000 gold pieces + 3d6 x 100 platinum pieces",
                "Roll 1d6 times on Very Rare Tier - (D) Magic Loot table",
                "Roll 1d4 times on Epic Tier - (E) Magic Loot table",
                "Roll 1d4 times on Mythical Tier - (F) Magic Loot table",
                "Roll once on Legend Tier - (G) Magic Loot table",
                "Roll once on Heroic Tier - (H) Magic Loot table",
                "Roll once on Iconic Tier - (I) Magic Loot table",
            ]
            const tieredLoot4Index = Math.floor(Math.random() * tieredLoot4.length)
            blurt({
                title: 'Valuables',
                text: tieredLoot4[tieredLoot4Index],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else{
            blurt({
                title: 'Error',
                text: "No challenge selected.",
                type: 'error',
                okButtonText: 'Uh oh',
                escapable: true
            });
        }
    }

    function rollGemstones() {
        selectedTier = document.getElementById("gemstonesTier").value;
        if(selectedTier == "10 GP Gemstones"){
            const tieredLoot1 = [
                "Azurite (opaque mottled deep blue)",
                "Banded agate (translucent striped brown, blue, white, or red)",
                "Blue quartz (transparent pale blue)",
                "Eye agate (translucent circles of gray, white, brown, blue, or green)",
                "Hematite (opaque gray-black)",
                "Lapis lazuli (opaque light and dark blue with yellow flecks)",
                "Malachite (opaque striated light and dark green)",
                "Moss agate (translucent pink or yellow-white with mossy gray or green markings",
                "Obsidian (opaque black)",
                "Rhodochrosite (opaque light pink)",
                "Tiger eye (translucent brown with golden center)",
                "Turquoise (opaque light blue-green)"
            ]
            const tieredLoot1Index = Math.floor(Math.random() * tieredLoot1.length)
            blurt({
                title: 'Gemstones',
                text: tieredLoot1[tieredLoot1Index],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if (selectedTier == "50 GP Gemstones"){
            const tieredLoot2 = [
                "Bloodstone (opaque dark gray with red flecks)",
                "Carnelian (opaque orange to red-brown)",
                "Chalcedony (opaque white)",
                "Chrysoprase (translucent green)",
                "Citrine (transparent pale yellow-brown)",
                "Jasper (opaque blue, black, or brown)",
                "Moonstone (translucent white with pale blue glow)",
                "Onyx (opaque bands of black and white, or pure black or white)",
                "Quartz (transparent white, smoky gray, or yellow)",
                "Sardonyx (opaque bands of red and white)",
                "Star rose quartz (translucent rosy stone with white star-shaped center)",
                "Zircon (transparent pale blue-green)"
            ]
            const tieredLoot2Index = Math.floor(Math.random() * tieredLoot2.length)
            blurt({
                title: 'Gemstones',
                text: tieredLoot2[tieredLoot2Index],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if (selectedTier == "100 GP Gemstones"){
            const tieredLoot3 = [
                "Amber (transparent watery gold to rich gold)",
                "Amethyst (transparent deep purple)",
                "Chrysoberyl (transparent yellow-green to pale green)",
                "Coral (opaque crimson)",
                "Garnet (transparent red, brown-green, or violet)",
                "Jade (translucent light green, deep green, or white)",
                "Jet (opaque deep black)",
                "Pearl (opaque lustrous white, yellow, or pink)",
                "Spinel (transparent red, red-brown, or deep green",
                "Tourmaline (transparent pale green, blue, brown, or red)"
            ]
            const tieredLoot3Index = Math.floor(Math.random() * tieredLoot3.length)
            blurt({
                title: 'Gemstones',
                text: tieredLoot3[tieredLoot3Index],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if (selectedTier == "500 GP Gemstones"){
            const tieredLoot4 = [
                "Alexandrite (transparent dark green)",
                "Aquamarine (transparent pale blue-green)",
                "Black pearl (opaque pure black)",
                "Blue spinel (transparent deep blue)",
                "Peridot (transparent rich olive green)",
                "Topaz (transparent golden yellow)"
            ]
            const tieredLoot4Index = Math.floor(Math.random() * tieredLoot4.length)
            blurt({
                title: 'Gemstones',
                text: tieredLoot4[tieredLoot4Index],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if (selectedTier == "1000 GP Gemstones"){
            const tieredLoot5 = [
                "Black opal (translucent dark green with black mottling and golden flecks)",
                "Blue sapphire transparent blue-white to medium blue)",
                "Emerald (transparent deep bright green)",
                "Fire opal (translucent fiery red)",
                "Opal (translucent pale blue with green and golden mottling)",
                "Star ruby (translucent ruby with white star-shaped center)",
                "Star sapphire (translucent blue sapphire with white star-shaped center)",
                "Yellow sapphire (transparent fiery yellow or yellow-green)"
            ]
            const tieredLoot5Index = Math.floor(Math.random() * tieredLoot5.length)
            blurt({
                title: 'Gemstones',
                text: tieredLoot5[tieredLoot5Index],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if (selectedTier == "5000 GP Gemstones"){
            const tieredLoot6 = [
                "Black sapphire (translucent lustrous black with glowing highlights)",
                "Diamond (transparent blue-white, canary, pink, brown, or blue)",
                "Jacinth (transparent fiery orange)",
                "Ruby (transparent clear red to deep crimson)"
            ]
            const tieredLoot6Index = Math.floor(Math.random() * tieredLoot6.length)
            blurt({
                title: 'Gemstones',
                text: tieredLoot6[tieredLoot6Index],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else{
            blurt({
                title: 'Error',
                text: "No value selected.",
                type: 'error',
                okButtonText: 'Uh oh',
                escapable: true
            });
        }
    }

    function rollArtObjects() {
        selectedTier = document.getElementById("artObjectsTier").value;
        if(selectedTier == "25 GP Art Objects"){
            const tieredLoot1 = [
                "Silver ewer",
                "Carved bone statuette",
                "Small gold bracelet",
                "Cloth-of-gold vestments",
                "Black velvet mask stitched with silver thread",
                "Copper chalice with silver filigree",
                "Pair of egraved bone dice",
                "Small mirror set in a painted wooden frame",
                "Embroidered silk handkerchief",
                "Gold locket with a painted portrait inside"
            ]
            const tieredLoot1Index = Math.floor(Math.random() * tieredLoot1.length)
            blurt({
                title: 'Art Objects',
                text: tieredLoot1[tieredLoot1Index],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if (selectedTier == "250 GP Art Objects"){
            const tieredLoot2 = [
                "Gold ring set with bloodstones",
                "Carved ivory statuette",
                "Large gold bracelet",
                "Silver necklace with a gemstone pendant",
                "Bronze crown",
                "Silk robe with gold embroidery",
                "Large well-made tapestry",
                "Brass mug with jade inlay",
                "Box of turquoise animal figurines",
                "Gold bird cage with electrum filigree"
            ]
            const tieredLoot2Index = Math.floor(Math.random() * tieredLoot2.length)
            blurt({
                title: 'Art Objects',
                text: tieredLoot2[tieredLoot2Index],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if (selectedTier == "750 GP Art Objects"){
            const tieredLoot3 = [
                "Silver chaice set with moonstones",
                "Silver-plated steel longsword with jet set in hilt",
                "Carved harp of exotic wood with ivory inlay and zircon gems",
                "Small gold idol",
                "Box of expensive, hand-painted wargaming miniatures",
                "Bottle stopper cork embossed with a gold leaf and set with amethysts",
                "Ceremonial electrum dagger with a black pearl in the pommel",
                "Silver and gold brooch",
                "Obsidian statuette with gold fittings and inlay",
                "Painted gold war mask"
            ]
            const tieredLoot3Index = Math.floor(Math.random() * tieredLoot3.length)
            blurt({
                title: 'Art Objects',
                text: tieredLoot3[tieredLoot3Index],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if (selectedTier == "2500 GP Art Objects"){
            const tieredLoot4 = [
                "Fine gold chain set with a fire opal",
                "Old masterpiece painting",
                "Embroidered silk and velvet mantle set with numerous moonstones",
                "Platinum bracelet set with a sapphire",
                "Embroidered glove set with jewel chips",
                "Jeweled anklet",
                "Gold music box",
                "Gold circlet set with four aquamarines",
                "Eye patch with a mock eye set in blue sapphire and moonstone",
                "A necklace string of small pink pearls"
            ]
            const tieredLoot4Index = Math.floor(Math.random() * tieredLoot4.length)
            blurt({
                title: 'Art Objects',
                text: tieredLoot4[tieredLoot4Index],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if (selectedTier == "7500 GP Art Objects"){
            const tieredLoot5 = [
                "Jeweled gold crown",
                "Jeweled platinum ring",
                "Small gold statuette set with rubies",
                "Gold cup set with emeralds",
                "Gold jewelry box with platinum filigree",
                "Painted gold child's sacrophagus",
                "Jade game board with solid gold playing pieces",
                "Bejeweled ivory drinking horn with gold filigree"
            ]
            const tieredLoot5Index = Math.floor(Math.random() * tieredLoot5.length)
            blurt({
                title: 'Art Objects',
                text: tieredLoot5[tieredLoot5Index],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else{
            blurt({
                title: 'Error',
                text: "No value selected.",
                type: 'error',
                okButtonText: 'Uh oh',
                escapable: true
            });
        }
    }

    function chamberPurpose(){
        selectedType = document.getElementById("dungeonType").value;
        if(selectedType == "Generic"){
            const chamber = [
                "Antechamber",
                "Armory",
                "Armory",
                "Audience chamber",
                "Aviary",
                "Banquet room",
                "Banquet room",
                "Barracks",
                "Barracks",
                "Barracks",
                "Bath or latrine",
                "Bedroom",
                "Bestiary",
                "Cell",
                "Cell",
                "Cell",
                "Chantry",
                "Chapel",
                "Cistern",
                "Cistern",
                "Classroom",
                "Closet",
                "Conjuring room",
                "Conjuring room",
                "Court",
                "Court",
                "Crypt",
                "Crypt",
                "Crypt",
                "Dining room",
                "Dining room",
                "Divination room",
                "Divination room",
                "Dormitory",
                "Dressing room",
                "Entry room or vestibule",
                "Gallery",
                "Gallery",
                "Game room",
                "Game room",
                "Guardroom",
                "Guardroom",
                "Guardroom",
                "Hall",
                "Hall",
                "Great Hall",
                "Great Hall",
                "Hallway",
                "Hallway",
                "Kennel",
                "Kitchen",
                "Kitchen",
                "Laboratory",
                "Laboratory",
                "Library",
                "Library",
                "Library",
                "Lounge",
                "Lounge",
                "Meditation chamber",
                "Observatory",
                "Office",
                "Pantry",
                "Pantry",
                "Pen",
                "Prison",
                "Reception room",
                "Refectory",
                "Refectory",
                "Robing room",
                "Salon",
                "Shrine",
                "Shrine",
                "Sitting room",
                "Sitting room",
                "Smithy",
                "Smithy",
                "Stable",
                "Storage room",
                "Storage room",
                "Vault",
                "Vault",
                "Heavily barricaded room",
                "Heavily barricaded room",
                "Study",
                "Study",
                "Temple",
                "Temple",
                "Temple",
                "Throne room",
                "Throne room",
                "Torture chamber",
                "Training or exercise room",
                "Gym",
                "Trophy room",
                "Hall of fame",
                "Museum",
                "Museum",
                "Waiting room",
                "Nursery",
                "Schoolroom",
                "Well",
                "Workshop",
                "Workshop",
                "Entrance to a connected dungeon"
            ]
            const chamberIndex = Math.floor(Math.random() * chamber.length)
            blurt({
                title: 'Chamber Purpose',
                text: chamber[chamberIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedType == "Maze"){
            const chamber = [
                "",
                ""
            ]
            const chamberIndex = Math.floor(Math.random() * chamber.length)
            blurt({
                title: 'Chamber Purpose',
                text: chamber[chamberIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedType == "Tomb"){
            const chamber = [
                "",
                ""
            ]
            const chamberIndex = Math.floor(Math.random() * chamber.length)
            blurt({
                title: 'Chamber Purpose',
                text: chamber[chamberIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedType == "Lair"){
            const chamber = [
                "",
                ""
            ]
            const chamberIndex = Math.floor(Math.random() * chamber.length)
            blurt({
                title: 'Chamber Purpose',
                text: chamber[chamberIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedType == "Mine"){
            const chamber = [
                "Barracks for miners",
                "Barracks for miners",
                "Bedroom for a supervisor or manager",
                "Chapel dedicated to a patron deity of miners, earth or protection",
                "Cistern providing drinking water for miners",
                "Guardroom",
                "Guardroom",
                "Kitchen used to feed workers",
                "Laboratory used to conduct tests on strange minerals extracted from the mine",
                "Lode where metal ore is mined (50% chance of being depleted)",
                "Lode where metal ore is mined (75% chance of being depleted)",
                "Lode where metal ore is mined (25% chance of being depleted)",
                "Lode where metal ore was mined (depleted)",
                "Lode where metal ore would be mined (untouched)",
                "Lode where metal ore is mined (50% chance of being depleted)",
                "Office used by the mine supervisor",
                "Smithy for repairing damaged tools",
                "Storage for tools and other equipment",
                "Storage for tools and other equipment",
                "Strong room or vault used to store ore for transport to the surface"
            ]
            const chamberIndex = Math.floor(Math.random() * chamber.length)
            blurt({
                title: 'Chamber Purpose',
                text: chamber[chamberIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedType == "Stronghold"){
            const chamber = [
                "",
                ""
            ]
            const chamberIndex = Math.floor(Math.random() * chamber.length)
            blurt({
                title: 'Chamber Purpose',
                text: chamber[chamberIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedType == "Treasure Vault"){
            const chamber = [
                "",
                ""
            ]
            const chamberIndex = Math.floor(Math.random() * chamber.length)
            blurt({
                title: 'Chamber Purpose',
                text: chamber[chamberIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedType == "Temple or Shrine"){
            const chamber = [
                "",
                ""
            ]
            const chamberIndex = Math.floor(Math.random() * chamber.length)
            blurt({
                title: 'Chamber Purpose',
                text: chamber[chamberIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedType == "Death Trap"){
            const chamber = [
                "Antechamber for spectators",
                "Waiting room",
                "Waiting room",
                "Guardroom fortified against intruders",
                "Guardroom fortified against intruders",
                "Guardroom fortified against intruders",
                "Guardroom fortified against intruders",
                "Guardroom fortified against intruders",
                "Guardroom fortified against intruders",
                "Guardroom fortified against intruders",
                "Vault for holding important treasures, accessible only by locked or secret door (75% chance of being trapped)",
                "Vault for holding important treasures, accessible only by locked or secret door (75% chance of being trapped)",
                "Vault for holding important treasures, accessible only by locked or secret door (75% chance of being trapped)",
                "Room containing a puzzle that must be solved to bypass a trap or monster",
                "Room containing a puzzle that must be solved to bypass a trap or monster",
                "Room containing a puzzle that must be solved to bypass a trap or monster",
                "Trap designed to kill creatures",
                "Trap designed to kill creatures",
                "Trap designed to capture creatures",
                "Trap designed to capture creatures",
                "Observation room, allowing guards or spectators to observe creatures moving through the dungeon"
            ]
            const chamberIndex = Math.floor(Math.random() * chamber.length)
            blurt({
                title: 'Chamber Purpose',
                text: chamber[chamberIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedType == "Planar Gate"){
            const chamber = [
                "",
                ""
            ]
            const chamberIndex = Math.floor(Math.random() * chamber.length)
            blurt({
                title: 'Chamber Purpose',
                text: chamber[chamberIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else{
            blurt({
                title: 'Error',
                text: "No dungeon selected.",
                type: 'error',
                okButtonText: 'Uh oh',
                escapable: true
            });
        }
    }

    function rollArtObjects() {
        selectedTier = document.getElementById("artObjectsTier").value;
        if(selectedTier == "25 GP Art Objects"){
            const tieredLoot1 = [
                "Silver ewer",
                "Carved bone statuette",
                "Small gold bracelet",
                "Cloth-of-gold vestments",
                "Black velvet mask stitched with silver thread",
                "Copper chalice with silver filigree",
                "Pair of egraved bone dice",
                "Small mirror set in a painted wooden frame",
                "Embroidered silk handkerchief",
                "Gold locket with a painted portrait inside"
            ]
            const tieredLoot1Index = Math.floor(Math.random() * tieredLoot1.length)
            blurt({
                title: 'Art Objects',
                text: tieredLoot1[tieredLoot1Index],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if (selectedTier == "250 GP Art Objects"){
            const tieredLoot2 = [
                "Gold ring set with bloodstones",
                "Carved ivory statuette",
                "Large gold bracelet",
                "Silver necklace with a gemstone pendant",
                "Bronze crown",
                "Silk robe with gold embroidery",
                "Large well-made tapestry",
                "Brass mug with jade inlay",
                "Box of turquoise animal figurines",
                "Gold bird cage with electrum filigree"
            ]
            const tieredLoot2Index = Math.floor(Math.random() * tieredLoot2.length)
            blurt({
                title: 'Art Objects',
                text: tieredLoot2[tieredLoot2Index],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if (selectedTier == "750 GP Art Objects"){
            const tieredLoot3 = [
                "Silver chaice set with moonstones",
                "Silver-plated steel longsword with jet set in hilt",
                "Carved harp of exotic wood with ivory inlay and zircon gems",
                "Small gold idol",
                "Box of expensive, hand-painted wargaming miniatures",
                "Bottle stopper cork embossed with a gold leaf and set with amethysts",
                "Ceremonial electrum dagger with a black pearl in the pommel",
                "Silver and gold brooch",
                "Obsidian statuette with gold fittings and inlay",
                "Painted gold war mask"
            ]
            const tieredLoot3Index = Math.floor(Math.random() * tieredLoot3.length)
            blurt({
                title: 'Art Objects',
                text: tieredLoot3[tieredLoot3Index],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if (selectedTier == "2500 GP Art Objects"){
            const tieredLoot4 = [
                "Fine gold chain set with a fire opal",
                "Old masterpiece painting",
                "Embroidered silk and velvet mantle set with numerous moonstones",
                "Platinum bracelet set with a sapphire",
                "Embroidered glove set with jewel chips",
                "Jeweled anklet",
                "Gold music box",
                "Gold circlet set with four aquamarines",
                "Eye patch with a mock eye set in blue sapphire and moonstone",
                "A necklace string of small pink pearls"
            ]
            const tieredLoot4Index = Math.floor(Math.random() * tieredLoot4.length)
            blurt({
                title: 'Art Objects',
                text: tieredLoot4[tieredLoot4Index],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if (selectedTier == "7500 GP Art Objects"){
            const tieredLoot5 = [
                "Jeweled gold crown",
                "Jeweled platinum ring",
                "Small gold statuette set with rubies",
                "Gold cup set with emeralds",
                "Gold jewelry box with platinum filigree",
                "Painted gold child's sacrophagus",
                "Jade game board with solid gold playing pieces",
                "Bejeweled ivory drinking horn with gold filigree"
            ]
            const tieredLoot5Index = Math.floor(Math.random() * tieredLoot5.length)
            blurt({
                title: 'Art Objects',
                text: tieredLoot5[tieredLoot5Index],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else{
            blurt({
                title: 'Error',
                text: "No value selected.",
                type: 'error',
                okButtonText: 'Uh oh',
                escapable: true
            });
        }


    }

    function rollMagLoot() {
        selectedTier = document.getElementById("magLootTier").value;
        if(selectedTier == "Common Tier (A)"){
            const commonLoot = [
                "Potion of healing",
                "Potion of healing",
                "Potion of healing",
                "Potion of healing",
                "Potion of healing",
                "Potion of healing",
                "Potion of healing",
                "Potion of healing",
                "Potion of healing",
                "Potion of healing",
                "Spell scroll (cantrip)",
                "Spell scroll (cantrip)",
                "Spell scroll (cantrip)",
                "Potion of climbing",
                "Potion of climbing",
                "Potion of climbing",
                "Spell scroll (1st level)",
                "Spell scroll (1st level)",
                "Spell scroll (1st level)",
                "Spell scroll (1st level)",
                "Potion of greater healing",
                "Potion of greater healing",
                "Bag of holding",
                "Driftglobe"
            ]
            const commonLootIndex = Math.floor(Math.random() * commonLoot.length)
            blurt({
                title: 'Magical Treasure',
                text: commonLoot[commonLootIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedTier == "Uncommon Tier (B)"){
            const uncommonLoot = [
                "Potion of greater healing",
                "Potion of greater healing",
                "Potion of greater healing",
                "Potion of fire breath",
                "Potion of fire breath",
                "Potion of fire breath",
                "Potion of fire resistance",
                "Potion of fire resistance",
                "Ammunition, +1",
                "Ammunition, +1",
                "Ammunition, +1",
                "Weapon, +1",
                "Potion of animal friendship",
                "Potion of hill giant's strength",
                "Potion of growth",
                "Potion of water breathing",
                "Spell scroll (2nd level)",
                "Spell scroll (3rd level)",
                "Bag of holding",
                "Keoghtom's ointment",
                "Oil of slipperines",
                "Dust of disappearance",
                "Dust of dryness",
                "Dust of sneezing and choking",
                "Elemental gem",
                "Philter of love",
                "Alchemy jug",
                "Cap of water breathing",
                "Cloak of the manta ray",
                "Goggles of the night",
                "Helm of comprehending languages",
                "Immovable rod",
                "Lantern of revealing",
                "Mariner's armor",
                "Mithral armor",
                "Potion of poison",
                "Ring of swimming",
                "Robe of useful items",
                "Rope of climbing",
                "Saddle of the cavalier",
                "Wand of magic detection",
                "Wand of secrets",
                "Driftglobe"
            ]
            const uncommonLootIndex = Math.floor(Math.random() * uncommonLoot.length)
            blurt({
                title: 'Magical Treasure',
                text: uncommonLoot[uncommonLootIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedTier == "Rare Tier (C)"){
            const rareLoot = [
                "Potion of superior healing",
                "Potion of superior healing",
                "Potion of superior healing",
                "Ammunition, +2",
                "Ammunition, +2",
                "Weapon, +1",
                "Weapon, +1",
                "Potion of clairvoyance",
                "Potion of diminution",
                "Potion of diminution",
                "Potion of gaseous form",
                "Potion of frost giant strength",
                "Potion of stone giant strength",
                "Potion of heroism",
                "Potion of heroism",
                "Potion of invulnerability",
                "Potion of mind reading",
                "Spell scroll (5th level)",
                "Elixir of health",
                "Elixir of health",
                "Oil of etherealness",
                "Oil of etherealness",
                "Potion of fire giant strength",
                "Quaal's feather token",
                "Scroll of protection",
                "Bag of beans",
                "Chime of opening",
                "Decanter of endless water",
                "Eyes of minute seeing",
                "Folding boat",
                "Heward's handy haversack",
                "Horseshoes of speed",
                "Necklace of fireballs",
                "Periapt of health",
                "Sending stones"
            ]
            const rareLootIndex = Math.floor(Math.random() * rareLoot.length)
            blurt({
                title: 'Magical Treasure',
                text: rareLoot[rareLootIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedTier == "Very Rare Tier (D)"){
            const veryRareLoot = [
                "Potion of supreme healing",
                "Potion of supreme healing",
                "Potion of supreme healing",
                "Potion of supreme healing",
                "Potion of invisibility",
                "Potion of invisibility",
                "Potion of invisibility",
                "Potion of speed",
                "Potion of speed",
                "Weapon, +1",
                "Weapon, +1",
                "Weapon, +1",
                "Weapon, +2",
                "Armor, +1",
                "Spell scroll (6th level)",
                "Spell scroll (6th level)",
                "Spell scroll (7th level)",
                "Ammunition, +3",
                "Ammunition, +3",
                "Bracers of archery",
                "Rod of the pact keeper, +1",
                "Oil of sharpness",
                "Potion of flying",
                "Potion of flying",
                "Potion of cloud giant strength",
                "Potion of longevity",
                "Potion of vitality",
                "Spell scroll (8th level)",
                "Horseshoes of a zephyr",
                "Nolzur's marvelous pigments",
                "Bag of devouring",
                "Portable hole"
            ]
            const veryRareLootIndex = Math.floor(Math.random() * veryRareLoot.length)
            blurt({
                title: 'Magical Treasure',
                text: veryRareLoot[veryRareLootIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedTier == "Epic Tier (E)"){
            const epicLoot = [
                "Spell scroll (7th level)",
                "Spell scroll (7th level)",
                "Spell scroll (7th level)",
                "Spell scroll (7th level)",
                "Spell scroll (8th level)",
                "Spell scroll (8th level)",
                "Bracers of archery",
                "Bracers of archery",
                "Weapon, +1",
                "Weapon, +1",
                "Weapon, +1",
                "Weapon, +1",
                "Weapon, +2",
                "Weapon, +2",
                "Armor, +1",
                "Armor, +1",
                "Shield, +1",
                "Potion of storm giant strength",
                "Potion of storm giant strength",
                "Potion of storm giant strength",
                "Potion of storm giant strength",
                "Potion of supreme healing",
                "Potion of supreme healing",
                "Potion of supreme healing",
                "Potion of supreme healing",
                "Spell scroll (9th-level) (can't be Wish)",
                "Spell scroll (9th-level) (1d20 chance of it being Wish on NAT 20)",
                "Universal solvent",
                "Universal solvent",
                "Arrow of slaying",
                "Sovereign glue"
            ]
            const epicLootIndex = Math.floor(Math.random() * epicLoot.length)
            blurt({
                title: 'Magical Treasure',
                text: epicLoot[epicLootIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedTier == "Mythical Tier (F)"){
            const mythicalLoot = [
                "Weapon, +1",
                "Weapon, +1",
                "Weapon, +1",
                "Weapon, +1",
                "Weapon, +1",
                "Weapon, +1",
                "Weapon, +1",
                "Weapon, +1",
                "Weapon, +1",
                "Weapon, +1",
                "Weapon, +2",
                "Weapon, +2",
                "Weapon, +2",
                "Armor, +1",
                "Armor, +1",
                "Armor, +1",
                "Armor, +2",
                "Shield, +1",
                "Shield, +1",
                "Sentinel shield",
                "Amulet of proof against detection and location",
                "Boots of elvenkind",
                "Bracers of archery",
                "Bracers of archery",
                "Bracers of archery",
                "Brooch of shielding",
                "Brooch of shielding",
                "Cloak of elvenkind",
                "Cloak of elvenkind",
                "Cloak of protection",
                "Cloak of protection",
                "Gauntlets of ogre power",
                "Gauntlets of ogre power",
                "Hat of disguise",
                "Hat of disguise",
                "Ring of protection",
                "Rod of the pact keeper, +1",
                "Rod of the pact keeper, +1",
                "Pearl of power",
                "Pearl of power",
                "Javelin of lightning",
                "Javelin of lightning",
                "Slippers of spider climbing",
                "Slippers of spider climbing",
                "Staff of the adder",
                "Staff of the adder",
                "Staff of the python",
                "Staff of the python",
                "Sword of vengeance",
                "Sword of vengeance",
                "Wand of magic missiles",
                "Wand of magic missiles",
                "Wand of the war mage, +1",
                "Wand of the war mage, +1",
                "Wand of web",
                "Wand of web",
                "Weapon of warning",
                "Weapon of warning",
                "Adamantine armor (chain mail)",
                "Adamantine armor (chain shirt)",
                "Adamantine armor (scale mail)",
                "Bag of tricks (gray)",
                "Bag of tricks (rust)",
                "Bag of tricks (tan)",
                "Boots of the winterlands",
                "Circlet of blasting",
                "Deck of illusions",
                "Eversmoking bottle",
                "Eyes of charming",
                "Eyes of the eagle",
                "Figurine of wondrous power (silver raven)",
                "Gem of brightness",
                "Gloves of missile snaring",
                "Gloves of missile snaring",
                "Gloves of swimming and climbing",
                "Gloves of thievery",
                "Gloves of thievery",
                "Headband of intellect",
                "Headband of intellect",
                "Earrings of confidence (homebrew, sets CHA to 19)",
                "Earrings of confidence (homebrew, sets CHA to 19)",
                "Instrument of the bards (doss lute)",
                "Instrument of the bards (fochlucan bandore)",
                "Instrument of the bards (Mac-Fuimidh cittern)",
                "Medallion of thoughts",
                "Helm of telepathy",
                "Necklace of adaptation",
                "Periapt of wound closure",
                "Pipes of haunting",
                "Pipes of the sewers",
                "Ring of jumping",
                "Ring of mind shielding",
                "Ring of warmth",
                "Ring of water walking",
                "Quiver of Ehlonna",
                "Stone of good luck",
                "Wind fan",
                "Winged boots"
            ]
            const mythicalLootIndex = Math.floor(Math.random() * mythicalLoot.length)
            blurt({
                title: 'Magical Treasure',
                text: mythicalLoot[mythicalLootIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedTier == "Legend Tier (G)"){
            const legendLoot = [
                "Weapon, +1",
                "Weapon, +1",
                "Weapon, +1",
                "Weapon, +1",
                "Weapon, +2",
                "Weapon, +2",
                "Weapon, +2",
                "Weapon, +2",
                "Weapon, +2",
                "Weapon, +2",
                "Armor, +1",
                "Armor, +1",
                "Armor, +2 scale mail",
                "Armor, +2 scale mail",
                "Shield, +1",
                "Shield, +1",
                "Shield, +2",
                "Figurine of wondrous power (roll 1d8 - bronze griffon/ebony fly/golden lions/ivory goats/marble elephant/onyx dog/serpentine owl/two silver raven figurines)",
                "Adamantine armor (breastplate)",
                "Adamantine armor (splint)",
                "Amulet of health",
                "Armor of vulnerability",
                "Arrow-catching shield",
                "Belt of dwarvenkind",
                "Belt of hill giant strength",
                "Berserker axe",
                "Boots of levitation",
                "Boots of speed",
                "Bowl of commanding water elementals",
                "Bracers of defense",
                "Brazier of commanding fire elementals",
                "Cape of the mountebank",
                "Censer of cotnrolling air elementals",
                "Armor of resistance (chain mail)",
                "Armor of resistance (chain shirt)",
                "Cloak of displacement",
                "Cloak of the bat",
                "Cube of force",
                "Daern's instant fortress",
                "Dagger of venom",
                "Dimensional shackles",
                "Dragon slayer weapon",
                "Elven chain",
                "Flame tongue weapon",
                "Gem of seeing",
                "Giant slayer weapon",
                "Vicious weapon",
                "Glamoured studded leather",
                "Helm of teleportation",
                "Horn of blasting",
                "Horn of Valhalla (silver/brass",
                "Instrument of the bards (Canaith mandolin)",
                "Instrument of the bards (Cli lyre)",
                "Ioun stone (awareness)",
                "Ioun stone (protection)",
                "Ioun stone (reserve)",
                "Ioun stone (sustenance)",
                "Iron bands of Bilarro",
                "Armor, +2 leather",
                "Armor of resistance (studded leather)",
                "Mace of disruption",
                "Mace of smiting",
                "Mace of terror",
                "Mantle of spell resistance",
                "Necklace of prayer beads",
                "Periapt of proof against poison",
                "Ring of animal influence",
                "Ring of evasion",
                "Ring of feather falling",
                "Ring of free action",
                "Ring of protection",
                "Ring of protection",
                "Ring of resistance",
                "Ring of spell storing",
                "Ring of the ram",
                "Ring of X-ray vision",
                "Robe of eyes",
                "Rod of rulership",
                "Rod of the pact keeper, +2",
                "Rope of entanglement",
                "Armor, +2 chainmail",
                "Armor of resistance (scale mail)",
                "Shield +2",
                "Shield of missile attraction",
                "Staff of charming",
                "Staff of healing",
                "Staff of swarming insects",
                "Staff of the woodlands",
                "Staff of withering",
                "Stone of controlling earth elementals",
                "Sun blade",
                "Sword of life stealing",
                "Sword of wounding",
                "Tentacle rod",
                "Vicious weapon",
                "Wand of binding",
                "Adamantine armor, breastplate",
                "Wand of enemy detection",
                "Wand of fear",
                "Wand of fireballs",
                "Wand of lightning bolts",
                "Wand of paralysis",
                "Wand of the war mage, +2",
                "Wand of wonder",
                "Wings of flying"
            ]
            const legendLootIndex = Math.floor(Math.random() * legendLoot.length)
            blurt({
                title: 'Magical Treasure',
                text: legendLoot[legendLootIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedTier == "Heroic Tier (H)"){
            const heroLoot = [
                "Weapon, +3",
                "Amulet of the planes",
                "Carpet of flying",
                "Crystal ball (very rare)",
                "Ring of regeneration",
                "Ring of shooting stars",
                "Ring of telekinesis",
                "Robe of scintillating colors",
                "Robe of stars",
                "Rod of absorption",
                "Rod of alertness",
                "Rod of security",
                "Rod of the pact keeper, +3",
                "Scimitar of Speed",
                "Shield, +3",
                "Staff of fire",
                "Staff of frost",
                "Staff of power",
                "Staff of striking",
                "Staff of thunder and lightning",
                "Sword of sharpness",
                "Wand of polymorph",
                "Wand of the war mage, +3",
                "Adamantine armor (half plate)",
                "Adamantine armor (plate)",
                "Animated shield",
                "Belt of fire giant strength",
                "Belt of frost giant strength",
                "Belt of stone giant strength",
                "Armor, +1 breastplate",
                "Armor of resistance (breastplate)",
                "Candle of invocation",
                "Armor, +2 (chain mail)",
                "Armor, +2 (chain shirt)",
                "Cloak of arachnida",
                "Dancing sword",
                "Demon armor",
                "Dragon scale mail",
                "Dwarven plate",
                "Dwarven thrower",
                "Efreeti bottle",
                "Figurine of wondrous power (obsidian steed)",
                "Frost brand weapon",
                "Helm of brilliance",
                "Horn of Valhalla (bronze)",
                "Instrument of the bards (Anstruth harp)",
                "Ioun stone (absorption)",
                "Ioun stone (agility)",
                "Ioun stone (fortitude)",
                "Ioun stone (insight)",
                "Ioun stone (intellect)",
                "Ioun stone (leadership)",
                "Ioun stone (strength)",
                "Armor, +2 studded leather",
                "Manual of bodily health",
                "Manual of gainful exercise",
                "Armor, +2 leather",
                "Armor, +2 scale mail",
                "Oathbow",
                "Armor, +1 splint",
                "Spellguard shield",
                "Nine lives stealer weapon",
                "Mirror of life trapping",
                "Manual of golems",
                "Manual of quickness of action",
                "Armor of resistance (splint)",
                "Armor of resistance (studded leather)",
                "Tome of clear thought",
                "Tome of leadership and influence",
                "Tome of understanding"
            ]
            const heroLootIndex = Math.floor(Math.random() * heroLoot.length)
            blurt({
                title: 'Magical Treasure',
                text: heroLoot[heroLootIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedTier == "Iconic Tier (I)"){
            const iconLoot = [
                "Defender",
                "Hammer of thunderbolts",
                "Luck blade",
                "Sword of answering",
                "Holy avenger",
                "Ring od djinni summoning",
                "Ring of invisibility",
                "Ring of spell turning",
                "Rod of lordly might",
                "Staff of the magi",
                "Vorpal sword",
                "Belt of cloud giant strength",
                "Armor, +2 breastplate",
                "Armor, +3 chain mail",
                "Armor, +3 chain shirt",
                "Cloak of invisibility",
                "Crystal ball (legendary)",
                "Armor, +1 half plate",
                "Armor, +2 half plate",
                "Armor, +1 plate",
                "Armor of resistance (plate)",
                "Adamantine armor (plate)",
                "Iron flask",
                "Armor, +3 (leather)",
                "Armor, +3 (studded leather)",
                "Weapon +3",
                "Well of many worlds",
                "Armor, +3 splint",
                "Armor, +2 plate",
                "Armor, +3 plate",
                "Armor, +3 half plate",
                "Apparatus of Kwalish",
                "Armor of invulnerability",
                "Belt of storm giant strength",
                "Cubic gate",
                "Deck of many things",
                "Efreeti chain",
                "Armor of resistance (half plate)",
                "Horn of Valhalla (iron)",
                "Instrument of the bards (Ollamh harp)",
                "Ioun stone (greater absorption)",
                "Ioun stone (mastery)",
                "Ioun stone (regeneration)",
                "Plate armor of etherealness",
                "Plate armor of resistance",
                "Ring of air elemental command",
                "Ring of water elemental command",
                "Ring of earth elemental command",
                "Ring of fire elemental command",
                "Ring of three wishes",
                "Sphere of annihilation",
                "Ring of winter",
                "Talisman of pure good",
                "Talisman of the sphere",
                "Talisman of ultimate evil",
                "Tome of the stilled tongue"
            ]
            const iconLootIndex = Math.floor(Math.random() * iconLoot.length)
            blurt({
                title: 'Magical Treasure',
                text: iconLoot[iconLootIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else{
            blurt({
                title: 'Error',
                text: "No tier selected.",
                type: 'error',
                okButtonText: 'Uh oh',
                escapable: true
            });
        }
    }
    
