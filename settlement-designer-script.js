const randomSize = [
    "Thorp",
    "Hamlet",
    "Village",
    "Small town",
    "Large town",
    "Small city",
    "Large city",
    "Metropolis"
]
const randomSpecialty = [
    "Delicious cuisine",
    "Rude people",
    "Friendly people",
    "Greedy merchants",
    "Bargain prices",
    "Artists and writers",
    "Great hero/savior",
    "Flowers/Gardens",
    "Hordes of beggars",
    "Tough warriors",
    "Talented mages",
    "Dark magic",
    "Decadence",
    "Piety",
    "Gambling",
    "Godlessness",
    "Education",
    "High fashion",
    "Political intrigue",
    "Blatant corruption",
    "Powerful guilds",
    "Strong drinks",
    "Technology",
    "Legends and folklore",
    "Rich history",
    "Humble people",
    "Stoic people",
    "Fighting spirit",
    "Patriotism",
]

const randomGovernment = [
    "Autocracy",
    "Bureaucracy",
    "Democracy",
    "Republic",
    "Dictatorship",
    "Feudality",
    "Hierarchy",
    "Monarchy",
    "Militocracy",
    "Plutocracy",
    "Technocracy",
    "Magocracy",
    "Kleptocracy",
    "Theocracy",
    "Oligarchy"
]

const randomNotable = [
    "Canals in place of streets",
    "Massive statue or monument",
    "Grand temple",
    "Large fortress",
    "Verdant parks and orchards",
    "River divides settlement",
    "Major trade center",
    "Headquarters of a powerful family or guild",
    "Population mostly wealthy",
    "Destitute, rundown",
    "Awful smell (tanneries, open sewers)",
    "Center of trade for one specific good",
    "Site of many battles",
    "Important library or archive",
    "Worship of all gods banned",
    "Sinister reputation",
    "Notable library or academy",
    "Site of important tomb or graveyard",
    "Built atop ancient ruins",
    "Former colony",
    "Lair of a powerful, sleeping monster"
]

const randomRelations = [
    "Harmony",
    "Tension or rivalry",
    "Racial minority are conquerors",
    "Racial minority are rulers",
    "Racial minority are refugees",
    "Racial majority oppresses minority",
    "Racial minority oppresses majority"
]

const randomCalamity = [
    "Suspected vampire infestation",
    "New cult seeks converts",
    "Suspected murder of an important figure",
    "War between rival thieves' guilds",
    "Plague (disease)",
    "Plague (insects, vermin, fungi)",
    "Famine",
    "Drought",
    "Flooding",
    "Earthquake",
    "Storms",
    "Riots",
    "Corrupt officials",
    "Marauding monsters",
    "Rampant monster attacks",
    "Undead outbreak",
    "Powerful wizard has moved into the settlement",
    "Economic depression",
    "Disrupted trade",
    "Prophecy of doom",
    "Brink of war",
    "Civil war brewing",
    "Internal strife",
    "Anarchy",
    "Besieged by enemies",
    "Dungeon discovered",
    "Chain of abductions",
    "Religious sects struggle for power",
    "Serial killer on the loose",
    "Monsters fight over territory",
    "Powerful faction/monster demands tributes"
]

const randomAuthority = [
    "Respected, fair, just",
    "Feared, tyrannical",
    "Iron-willed, respected",
    "Weak, unreliable",
    "Illegitimate",
    "Controlled by a powerful monster",
    "Mysterious, anonymous cabal",
    "Power vacuum, open fighting",
    "Cabal seized power openly",
    "Contested leadership, infighting",
    "Claimants/parties compete for power",
    "Stupid ruler/Idiocracy",
    "Heavy religious influence",
    "Heavy guild influence",
    "Heavy mafia influence"
]

  const randomEconomics = [
    "Regulated",
    "Free market",
    "State-controlled",
    "Autarky",
]

  const randomLaw = [
    "Fining",
    "Reform",
    "Punishment",
    "Harsh punishment"
  ]

  const randomMilitary = [
    "No army",
    "Standing army",
    "Army reserves",
    "Mercenary armies",
    "Citizen militias",
    "National guard",
    "Adventuring heroes"
]


function rollSettlement() {
    selectedName = document.getElementById("townName").value;
    selectedSize = document.getElementById("sizeSelect").value;
    selectedSpecialty = document.getElementById("specialtySelect").value;
    selectedGovernment = document.getElementById("governmentSelect").value;
    selectedNotable = document.getElementById("notableSelect").value;
    selectedRelations = document.getElementById("relationsSelect").value;
    selectedCalamity = document.getElementById("calamitySelect").value;
    selectedAuthority = document.getElementById("authoritySelect").value;
    selectedEconomics = document.getElementById("economicsSelect").value;
    selectedLaw = document.getElementById("lawSelect").value;
    selectedMilitary = document.getElementById("militarySelect").value;
   
    
        const randomSizeIndex = Math.floor(Math.random() * randomSize.length)
        const randomSpecialtyIndex = Math.floor(Math.random() * randomSpecialty.length)
        const randomGovernmentIndex = Math.floor(Math.random() * randomGovernment.length)
        const randomNotableIndex = Math.floor(Math.random() * randomNotable.length)
        const randomRelationsIndex = Math.floor(Math.random() * randomRelations.length)
        const randomCalamityIndex = Math.floor(Math.random() * randomCalamity.length)
        const randomAuthorityIndex = Math.floor(Math.random() * randomAuthority.length)
        const randomEconomicsIndex = Math.floor(Math.random() * randomEconomics.length)
        const randomLawIndex = Math.floor(Math.random() * randomLaw.length)
        const randomMilitaryIndex = Math.floor(Math.random() * randomMilitary.length)

        //Randomization

        if(selectedSize == "Random"){
            selectedSize = randomSize[randomSizeIndex];
        }
        if(selectedSpecialty == "Random"){
            selectedSpecialty = randomSpecialty[randomSpecialtyIndex];
        }
        if(selectedGovernment == "Random"){
            selectedGovernment = randomGovernment[randomGovernmentIndex];
        }
        if(selectedNotable == "Random"){
            selectedNotable = randomNotable[randomNotableIndex];
        }
        if(selectedRelations == "Random"){
            selectedRelations = randomRelations[randomRelationsIndex];
        }
        if(selectedCalamity == "Random"){
            selectedCalamity = randomCalamity[randomCalamityIndex];
        }
        if(selectedAuthority == "Random"){
            selectedAuthority = randomAuthority[randomAuthorityIndex];
        }
        if(selectedEconomics == "Random"){
            selectedEconomics = randomEconomics[randomEconomicsIndex];
        }
        if(selectedLaw == "Random"){
            selectedLaw = randomLaw[randomLawIndex];
        }
        if(selectedMilitary == "Random"){
            selectedMilitary = randomMilitary[randomMilitaryIndex];
        }

        //POPULATION BASED ON SIZE

        if(selectedSize == "Thorp"){
            settlementPopulation = Math.floor(Math.random() * (81 - 20) + 20);
        }
        else if(selectedSize == "Hamlet"){
            settlementPopulation = Math.floor(Math.random() * (401 - 82) + 82);
        }
        else if(selectedSize == "Village"){
            settlementPopulation = Math.floor(Math.random() * (1001 - 402) + 402);
        }
        else if(selectedSize == "Small town"){
            settlementPopulation = Math.floor(Math.random() * (2001 - 1002) + 1002);
        }
        else if(selectedSize == "Large town"){
            settlementPopulation = Math.floor(Math.random() * (5001 - 2002) + 2002);
        }
        else if(selectedSize == "Small city"){
            settlementPopulation = Math.floor(Math.random() * (12001 - 5002) + 5002);
        }
        else if(selectedSize == "Large city"){
            settlementPopulation = Math.floor(Math.random() * (25001 - 12002) + 12002);
        }
        else if(selectedSize == "Metropolis"){
            settlementPopulation = Math.floor(Math.random() * (2000000 - 25002) + 25002);
        }

        //Pop-up alert with results

        if(selectedName === ""){
            blurt({
                title: 'Error',
                text: `Please enter a name for your settlement!`,
                type: 'error',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
        else {
            blurt({
                title: 'Your settlement:',
                text: `${selectedName} is a ${selectedSize} with a population of ${settlementPopulation}. It's known for its: ${selectedSpecialty}. ${selectedGovernment} is its government model. Notable features include: ${selectedNotable}. As for race relations, we can see ${selectedRelations}. The ${selectedSize} is suffering from a certain calamity: ${selectedCalamity}. Its ruler/government status is as follows: ${selectedAuthority}. ${selectedName}'s economic policy is: ${selectedEconomics}. The preferred prosecution method is ${selectedLaw}. The settlement's military consists of: ${selectedMilitary}.`,
                type: 'warning',
                okButtonText: 'Click anywhere to exit',
                escapable: true
            });
        }
}