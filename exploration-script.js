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
            "Corrupted Celestial",
            "Aberration bent on corruption or domination",
            "Fiend bent on corruption or personal gain",
            "Dragon bent on domination and plunder",
            "Demon bent on chaos and destruction",
            "Giant bent on plunder",
            "Fey with a mysterious goal",
            "Cultist(s)",
            "Conqueror",
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
        /*const weatherIndex = Math.floor(Math.random() * weather.length)
        blurt({
            title: 'Weather',
            text: weather[weatherIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });*/
    }