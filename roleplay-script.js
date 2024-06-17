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


    
