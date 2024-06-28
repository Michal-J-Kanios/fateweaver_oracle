    //REFERENCES
    // const messages = [
    // “...”,
    // “...”,
    // “...”
    // ]
    
    // const randIndex = Math.floor(Math.random() * messages.length) // Get random index 
    
    // console.log(messages[randIndex]) // Get random message from messages array

    //================

    function rollYesNo() {
        const yesNo= [
            "Yes",
            "No"
        ]
        const yesNoIndex = Math.floor(Math.random() * yesNo.length)
        blurt({
            title: 'Yes or No?',
            text: yesNo[yesNoIndex],
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
        if(selectedFate == "Almost Certain"){
            const fatum = [
                "Yes, and...",
                "Yes",
                "Yes, but...",
                "Yes, and...",
                "Yes",
                "Yes, but...",
                "Yes, and...",
                "Yes",
                "Yes, but...",
                "Yes, and...",
                "Yes",
                "Yes, but...",
                "No, but...",
                "No"
            ]
            const fatumIndex = Math.floor(Math.random() * fatum.length)
            blurt({
                title: 'Random Fate',
                text: fatum[fatumIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedFate == "Very Likely"){
            const fatum = [
                "Yes, and...",
                "Yes",
                "Yes, but...",
                "Yes, and...",
                "Yes",
                "Yes, but...",
                "Yes, and...",
                "Yes",
                "Yes, but...",
                "No, but...",
                "No",
                "No, and..."
            ]
            const fatumIndex = Math.floor(Math.random() * fatum.length)
            blurt({
                title: 'Random Fate',
                text: fatum[fatumIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedFate == "Likely"){
            const fatum = [
                "Yes, and...",
                "Yes, and...",
                "Yes",
                "Yes",
                "Yes, but...",
                "Yes, but...",
                "No, but...",
                "No",
                "No, and..."
            ]
            const fatumIndex = Math.floor(Math.random() * fatum.length)
            blurt({
                title: 'Random Fate',
                text: fatum[fatumIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedFate == "Unlikely"){
            const fatum = [
                "Yes, and...",
                "Yes",
                "Yes, but...",
                "No, but...",
                "No",
                "No, and...",
                "No, but...",
                "No",
                "No, and..."
            ]
            const fatumIndex = Math.floor(Math.random() * fatum.length)
            blurt({
                title: 'Random Fate',
                text: fatum[fatumIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedFate == "Very Unlikely"){
            const fatum = [
                "Yes, and...",
                "Yes",
                "Yes, but...",
                "No, but...",
                "No",
                "No, and...",
                "No, but...",
                "No",
                "No, and...",
                "No, but...",
                "No",
                "No, and..."
            ]
            const fatumIndex = Math.floor(Math.random() * fatum.length)
            blurt({
                title: 'Random Fate',
                text: fatum[fatumIndex],
                type: 'info',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else if(selectedFate == "Near Impossible"){
            const fatum = [
                "Yes, and...",
                "Yes",
                "No, but...",
                "No",
                "No, and...",
                "No, but...",
                "No",
                "No, and...",
                "No, but...",
                "No",
                "No, and...",
                "No, but...",
                "No",
                "No, and..."
            ]
            const fatumIndex = Math.floor(Math.random() * fatum.length)
            blurt({
                title: 'Random Fate',
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

    function rollReactions() {
        const reactions= [
            "Helpful",
            "Friendly",
            "Indifferent",
            "Indifferent",
            "Unfriendly",
            "Hostile"
        ]
        const reactionsIndex = Math.floor(Math.random() * reactions.length)
        blurt({
            title: 'NPC Attitude',
            text: reactions[reactionsIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    function rollFocus() {
        const foci= [
            "Remote event (ocurred when players were not present, characters learn about it remotely)",
            "Remote event (ocurred when players were not present, characters learn about it remotely)",
            "Remote event (ocurred when players were not present, characters learn about it remotely)",
            "Remote event (ocurred when players were not present, characters learn about it remotely)",
            "NPC takes action",
            "NPC takes action",
            "NPC takes action",
            "NPC takes action",
            "NPC takes action",
            "NPC takes action",
            "NPC takes action",
            "NPC takes action",
            "NPC takes action",
            "NPC takes action",
            "Introduce a new NPC",
            "Introduce a new NPC",
            "Introduce a new NPC",
            "Move toward a plot thread",
            "Move toward a plot thread",
            "Move toward a plot thread",
            "Move away from a plot thread",
            "Move away from a plot thread",
            "Move away from a plot thread",
            "Close a plot thread",
            "Negative to player",
            "Negative to player",
            "Negative to player",
            "Negative to player",
            "Negative to player",
            "Positive to player",
            "Positive to player",
            "Positive to player",
            "Positive to player",
            "Positive to player",
            "Ambiguous event (roll event meaning)",
            "Ambiguous event (roll event meaning)",
            "Ambiguous event (roll event meaning)",
            "Ambiguous event (roll event meaning)",
            "Ambiguous event (roll event meaning)",
            "Ambiguous event (roll event meaning)",
            "Ambiguous event (roll event meaning)",
            "Negative to NPC",
            "Negative to NPC",
            "Negative to NPC",
            "Negative to NPC",
            "Positive to NPC",
            "Positive to NPC",
            "Positive to NPC",
            "Positive to NPC"
        ]
        const fociIndex = Math.floor(Math.random() * foci.length)
        blurt({
            title: 'Event Focus',
            text: foci[fociIndex],
            type: 'info',
            okButtonText: 'Click anywhere to exit',
            escapable: true
        });
    }

    function rollMeaning() {
        const action= [
            "Attainment",
            "Starting",
            "Neglect",
            "Fight",
            "Recruit",
            "Triumph",
            "Violate",
            "Oppose",
            "Malice",
            "Communicate",
            "Persecute",
            "Increase",
            "Decrease",
            "Abandon",
            "Gratify",
            "Inquire",
            "Antagonise",
            "Move",
            "Waste",
            "Truce",
            "Release",
            "Befriend",
            "Judge",
            "Desert",
            "Dominate",
            "Procrastinate",
            "Praise",
            "Separate",
            "Take",
            "Break",
            "Heal",
            "Delay",
            "Stop",
            "Lie",
            "Return",
            "Immitate",
            "Struggle",
            "Inform",
            "Bestow",
            "Postpone",
            "Expose",
            "Haggle",
            "Imprison",
            "Release",
            "Celebrate",
            "Develop",
            "Travel",
            "Block",
            "Harm",
            "Debase",
            "Overindulge",
            "Adjourn",
            "Adversity",
            "Kill",
            "Disrupt",
            "Usurp",
            "Create",
            "Betray",
            "Agree",
            "Abuse",
            "Oppress",
            "Inspect",
            "Ambush",
            "Spy",
            "Attach",
            "Carry",
            "Open",
            "Carelessness",
            "Ruin",
            "Extravagance",
            "Trick",
            "Arrive",
            "Propose",
            "Divide",
            "Refuse",
            "Mistrust",
            "Deceive",
            "Cruelty",
            "Intolerance",
            "Trust",
            "Excitement",
            "Activity",
            "Assist",
            "Care",
            "Negligence",
            "Passion",
            "Work hard",
            "Control",
            "Attract",
            "Failure",
            "Pursue",
            "Vengeance",
            "Proceedings",
            "Dispute",
            "Punish",
            "Guide",
            "Transform",
            "Overthrow",
            "Oppress",
            "Change"
        ]
        const subject= [
            "goals",
            "dreams",
            "environment",
            "outside",
            "inside",
            "reality",
            "allies",
            "enemies",
            "evil",
            "good",
            "emotions",
            "opposition",
            "war",
            "peace",
            "the innocent",
            "love",
            "the spiritual",
            "the intellectual",
            "new ideas",
            "joy",
            "messages",
            "energy",
            "balance",
            "tension",
            "friendship",
            "the physical",
            "a project",
            "pleasures",
            "pain",
            "possessions",
            "benefits",
            "plans",
            "lies",
            "expectations",
            "legal matters",
            "bureaucracy",
            "business",
            "a path",
            "news",
            "exterior factors",
            "advice",
            "a plot",
            "competition",
            "prison",
            "illness",
            "food",
            "attention",
            "success",
            "failure",
            "travel",
            "jealousy",
            "dispute",
            "home",
            "investment",
            "suffering",
            "wishes",
            "tactics",
            "stalemate",
            "randomness",
            "misfortune",
            "death",
            "disruption",
            "power",
            "a burden",
            "intrigues",
            "fears",
            "ambush",
            "rumour",
            "wounds",
            "extravagance",
            "a representative",
            "adversities",
            "opulence",
            "liberty",
            "military",
            "the mundane",
            "trials",
            "masses",
            "vehicle",
            "art",
            "victory",
            "dispute",
            "riches",
            "status quo",
            "technology",
            "hope",
            "magic",
            "illusions",
            "portals",
            "danger",
            "weapons",
            "animals",
            "weather",
            "elements",
            "nature",
            "the public",
            "leadership",
            "fame",
            "anger",
            "information"
        ]
        const actionIndex = Math.floor(Math.random() * action.length)
        const subjectIndex = Math.floor(Math.random() * subject.length)
        blurt({
            title: 'Event Meaning',
            text: `${action[actionIndex]}, ${subject[subjectIndex]}`,
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


    
