/*
I object! - JS Iteration Station practice

To run the code in this file, run the command:
  node practice_sessions/i_object.js
*/ 
console.log("i_object.js is running")






const craftSupplies = {
  crossStitching: [
    { name: 'fabric', amountNeeded: 0.25 }, 
    { name: 'needle', amountNeeded: 1 }, 
    { name: 'thread', amountNeeded: 10 }, 
    { name: 'scissors', amountNeeded: 1 },
    { name: 'hoop', amountNeeded: 1 }
  ],
  weaving: [
    { name: 'loom', amountNeeded: 1 }, 
    { name: 'needle', amountNeeded: 1 }, 
    { name: 'yarn', amountNeeded: 6 }, 
    { name: 'scissors', amountNeeded: 1 }
  ],
  knitting: [    
    { name: 'needle', amountNeeded: 2 }, 
    { name: 'yarn', amountNeeded: 4 }, 
    { name: 'scissors', amountNeeded: 1 }
  ],
  crocheting: [
    { name: 'hook', amountNeeded: 1 }, 
    { name: 'yarn', amountNeeded: 3 }, 
    { name: 'scissors', amountNeeded: 1 }
  ]
};

// Write a function that takes in a parameter of craft and returns a list of supplies needed

//getSupplyList('crossStitching') 
    // --> ['fabric', 'needle', 'thread', 'scissors', 'hoop']

//getSupplyList('crocheting') 
    // --> ['hook', 'yarn', 'scissors']


function getSupplyList(craft) {
  // console.log('craft supplies:', craftSupplies)
  // console.log('craft:', craft)
  // console.log('the data I want:', craftSupplies[craft])

  var result = craftSupplies[craft].map((supply) => {
    // console.log('supply:', supply)
    // console.log(supply.name)
    return supply.name
  })

// pseudo code:
// First I need to get to the specific craft's array before I can use an iterator. 
// I think that to access this info I will need to use bracket notation because it is used with parameters. 
// I know that I will need to return the name information only, so use map to return an array of just the name information. 

  // console.log('result:', result)
  return result
}

// console.log('get supply list cross stiching:', getSupplyList('crossStitching'))
// console.log('get supply list cross stiching:', getSupplyList('crocheting'))


function reduceSupplyList(craft) {
  var result = craftSupplies[craft].reduce((acc, supply) => {
    // console.log('acc', acc)
    // console.log('supply', supply)
    acc.push(supply.name)
    return acc
  }, [])
  return result
}
// console.log('reduce supply list', reduceSupplyList('crossStitching'))



const coloradoPlants = [
  {
    name: "Colorado Blue Columbine",
    scientificName: "Aquilegia caerulea",
    bloomingSeason: "Spring to Early Summer",
    habitat: "meadows",
    height: 12,
  },
  {
    name: "Aspen Tree",
    scientificName: "Populus tremuloides",
    bloomingSeason: "Spring",
    habitat: "forests",
    height: 100,
  },
  {
    name: "Columbian Lily",
    scientificName: "Lilium columbianum",
    bloomingSeason: "Late Spring to Early Summer",
    habitat: "mountains",
    height: 24,
  },
  {
    name: "Rocky Mountain Bristlecone Pine",
    scientificName: "Pinus aristata",
    bloomingSeason: "Spring",
    habitat: "mountains",
    height: 120,
  },
  {
    name: "Alpine Forget-Me-Not",
    scientificName: "Myosotis alpestris",
    bloomingSeason: "Summer",
    habitat: "meadows",
    height: 6,
  },
  {
    name: "Indian Paintbrush",
    scientificName: "Castilleja spp.",
    bloomingSeason: "Spring to Summer",
    habitat: "grasslands",
    height: 18,
  },
  {
    name: "Engelmann Spruce",
    scientificName: "Picea engelmannii",
    bloomingSeason: "Spring",
    habitat: "forests",
    height: 180,
  },
  {
    name: "Fireweed",
    scientificName: "Chamerion angustifolium",
    bloomingSeason: "Summer",
    habitat: "meadows",
    height: 36,
  },
  {
    name: "Blue Spruce",
    scientificName: "Picea pungens",
    bloomingSeason: "Spring",
    habitat: "forests",
    height: 72,
  },
  {
    name: "Scarlet Gilia",
    scientificName: "Ipomopsis aggregata",
    bloomingSeason: "Late Spring to Summer",
    habitat: "mountains",
    height: 24,
  },
];

// Write a function that creates an object that organizes the plants by habitat.
// This is a common thing you will need to do on your assessment

// pseudo code:
// I am starting off with an array of objects. 
// I want to return an object where the key is the habitat value and the value is an array of the names of plants that belong.
// 1. I need to figure out how to access the habitat values. 
// 2. I need to make the habitat values a key in a new object
// 3. Need the value to be an empty array
// 4. Push names into the array if they match the habitat



function organizeByHabitat() {
  var result = coloradoPlants.reduce((acc, plant) => {
    if (!acc[plant.habitat]) {
      acc[plant.habitat] = []
    }
   acc[plant.habitat].push(plant.name)
    return acc
  }, {})
  return result
}
console.log('organized by habitat:', organizeByHabitat())


//organizeByHabitat() // expected result ==> 
    // {
    //   meadows: [ 'Colorado Blue Columbine', 'Alpine Forget-Me-Not',      'Fireweed' ],
    //   forests: [ 'Aspen Tree', 'Engelmann Spruce', 'Blue Spruce' ],
    //   moutains: [ 'Columbian Lily' ],
    //   mountains: [ 'Rocky Mountain Bristlecone Pine', 'Scarlet Gilia' ],
    //   grasslands: [ 'Indian Paintbrush' ]
    // }


    