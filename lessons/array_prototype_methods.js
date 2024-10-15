/*
JS Array Prototype Methods Lesson Scratchpad

To run the code in this file, run the command:
  node array_prototype_methods.js
*/ 
// console.log("array_prototype_methods.js is running")

const names = ['nick', 'ben', 'trisha', 'john', 'dustin'];

// Return a new array of the names that are 4 letters or less using the filter prototype method.


// 1. What am I trying to do? Look at each element in the array one at a time
// 2. While I'm looking at each element... what do I want to do? Does 'nick' have 4 letters or less?
// if so - give me nick, if not ignore it

// const result = words.filter((word) => word.length > 6);


function filterNames() {
  const result = names.filter((name) => name.length <= 4)
  console.log('result:', result)
}

filterNames()

// filter has the conditional if logic already built in - that's the point!
// you should not have to write an if statement in a filter

function filterNames() {
  const result = names.filter((name) => {
    return name.length <= 4
  })
  console.log('result:', result)
  return result
}

// console.log(filterNames())

// My work has the return keyword twice!
//    filter's callback function has to return the test statement in order to work
//    the larger filterNames function also needs to return the final value/final answer

// You might see examples of iterator method callback function that are one-liners. 
// no return statments, no curly brackets opened, these are a shorthand, the return is still happenning, 
// just implicitly.

// TIP - use the skeleton example I showed for your callback function until you're very comfortable, don't start off with the 
// one-line functions 

// SKELETON 


// Example 2:

//Create a new array of living beatles using the filter method and store them in a livingBeatles variable.

var beatles = [
  { name: 'John', living: false, instruments: ['guitar', 'bass', 'piano'] },
  { name: 'Paul', living: true, instruments: ['bass', 'guitar', 'piano'] },
  { name: 'George', living: false, instruments: ['guitar', 'sitar'] },
  { name: 'Ringo', living: true, instruments: ['drums', 'bongos'] },
];

function filterLivingBeatles() {
  const result = beatles.filter((beatle) => {
    return beatle.living
  })
  return result
}

// console.log(filterLivingBeatles())


// Example 3:

// Create another array of beatles that play the guitar using the filter method 
// and store them in a guitarPlayingBeatles variable. 
// (continue to use the data from above)

function filterGuitarPlayingBeatles() {
  const guitarPlayingBeatles = beatles.filter ((beatle) => {
    return beatle.instruments.includes('guitar')
  })
  return guitarPlayingBeatles
}

// console.log('guitar playing beatles:', filterGuitarPlayingBeatles())

// MAP

// Example A:

// Using map, iterate over the array of prices, increase the price by $1, 
// and return a new array of increased prices. Store them in a variable called increasedPrices.

const prices = [4.99, 5.50, 7.00, 10.25];

function mapIncreasedPrices() {
  const newPrices = prices.map((price) => {
    return price +=1
  })
  return newPrices
} 
console.log(mapIncreasedPrices())


// Example B

// Using an array of temperature data in Fahrenheit, convert the date to degrees 
// Celsius and store them in a variable called degreesC. Here is the formula to 
// convert from Fahrenheit to Celsius. *NOTE: dont worry about rounding the decimals, 
// that’s not our priority here.

const degreesF = [67, 32, 55, 102]

const degreesC = degreesF.map((numF) => {
  // convert to celcius
  console.log('numF',numF)
  let numC = (numF -32) * 5/9
  return numC
})
// console.log(degreesC)


// REDUCE
// Takes in callback function AND initial value
// - callback function takes in ACCULULATOR and ELEMENT

// Example I.
// Using reduce, sum up all of the numbers.

// I want to get a number
// Look at each num one at a time,
// while I'm looking at each num, I want to add that amount to my running total

const numbers = [1, 2, 3, 4, 5];


const sum = numbers.reduce((accumulator, num) => {
  console.log('num:', num)
  //accumulator = accumulator + num
  accumulator += num
  console.log('accumulator:',accumulator)
  return accumulator
}, 0)
// console.log('sum:',sum)



// const initialValue = 0
// const sum = numbers.reduce(
//   (accumulator, currentValue) => 
//     accumulator + initialValue,
// );

// console.log(sum);

// Example II.
// Using reduce, create a new object the stores the lengths of each word.

// const adjectives = ['fantastic', 'amazing', 'childish'];

// // console output
// => { fantastic: 9, amazing: 7, childish: 8 }


//Example III. 
// Using reduce, create a new object the stores the lengths of each word.

// ALWAYS RETRUN THE ACCUMULATOR AT THE END
// When using DOT NOTATION, think of it as LITERAL NOTATION
// When using BRACKET NOTATION, the variable is first evaluated
// and they stored as the key in the object

const adjectives = ['fantastic', 'amazing', 'childish'];

// console output
// => { fantastic: 9, amazing: 7, childish: 8 }


function countChars() {
  const countedChars = adjectives.reduce((acc, word) => {
    // console.log("ACC:", acc); // {}
    // console.log("WORD:", word); // 'fantastic'

    acc[word] = word.length
    return acc;
  },{}) // What is our initial value going to be? aka What is the final data type?
  return countedChars
}
console.log(countChars())



// FOR EACH:

// Example 1:

// Using forEach, iterate over the array of prices, 
//increase the price by $1, and add new increased prices to the increasedPrices array.
// I need to use forEach 
// and I need to interate through each price element
// increase the price by 1
// push the new price into the increasedPrice array


function newPriceArray() {
  const increasedPrices = [];
  prices.forEach((price) => {
    var newPrice = price + 1;
  increasedPrices.push(newPrice)
});
return increasedPrices;
}
// console.log(newPriceArray())


// Example 2:

//Using the dogs array above, log the dog’s name and how many legs it has.

const dogs = [
  {name: "Fido", numLegs: 4},
  {name: "Greg", numLegs: 5}
];

function logDogsAndLegs() {
  dogs.forEach(dog => {
    var statement = `${dog.name} has ${dog.numLegs} legs.`
    console.log(statement)
  })
}
logDogsAndLegs(dogs)



// SORT
// You need two returns one for the function container and one for the call-back function

// Exercise A:

const numbersListB = [15, 6, 14, 2, 22, 9, 45];
  
numbersListB.sort((a,b) => {
  return a - b
})

console.log('sort List B:', numbersListB)


// Exercise B:

const cities = [
  { name: 'New York', population: 8398748, country: 'United States' },
  { name: 'Tokyo', population: 37393000, country: 'Japan' },
  { name: 'London', population: 8908081, country: 'United Kingdom' },
  { name: 'Mumbai', population: 12478447, country: 'India' }
];

// Scope: What we have access to and where we have access to it (it being a variable)

function sortCitiesByPopulation(cities) {
  return cities.sort((a, b) => {
    // console.log("city:",city);
    return b.population - a.population;
  });
}

console.log(sortCitiesByPopulation(cities));
// Output: [
//   { name: 'Tokyo', population: 37393000, country: 'Japan' },
//   { name: 'Mumbai', population: 12478447, country: 'India' },
//   { name: 'London', population: 8908081, country: 'United Kingdom' }
//   { name: 'New York', population: 8398748, country: 'United States' },
// ]