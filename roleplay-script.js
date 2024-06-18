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
            title: 'NPC Reactions',
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


    
