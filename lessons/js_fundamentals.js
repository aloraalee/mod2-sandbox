/*
JS Fundamentals Lesson Scratchpad

To run the code in this file, run the command:
      node lessons/js_fundamentals.js
*/ 
console.log("js_fundamentals.js is running")


/*
JS Variables & Data Types Examples
*/ 

var firstName = 'Ben';
var age = 26;
const isNice = true;

const policeSketchDescription = {
  hair: 'blond',
  eyes: 'brown',
  isTall: false,
  visibleTattoos: 1
}

let favoriteFoods = ['pizza', 'blueberries', 'ice cream', 'sushi']

let partnerName = null;
let jobTitle;

console.log('policeSketchDescription eyes:', policeSketchDescription.eyes)
console.log('brown eyes:', policeSketchDescription['eyes'])

console.log('police sketch description number of tattoos: ', policeSketchDescription.visibleTattoos)
console.log('number of tattoos:', policeSketchDescription['visibleTattoos'])

console.log('array pizza:', favoriteFoods[0])

console.log('array last:', favoriteFoods[3])


console.log('Job Title', jobTitle)


// Declare two variables, one called quantity and one called mythical creatures

var quantity = 28;

var mythicalCreatures = 'fairies';

//concatenation
function printNumberOfCreatures() {
  console.log('number of creatures:', quantity + ' ' + mythicalCreatures)
// JS uses type coercion to convert the quantity from a number to a string so 
// that it can be a string together with mythicalCreatures
}
printNumberOfCreatures()

//interpolation
function interpolateCreature() {
  let interpolation = `${quantity} ${mythicalCreatures}`
console.log('interpolation:', interpolation )
}
interpolateCreature()


function printDynamicCreature(number, creature) {
  let statement = `I have ${number} very fancy ${creature}!`
  return statement
}
// This one is working properly and, but the statement isn't being shown
printDynamicCreature(28, 'fairies')
// This is being logged:
console.log('dynamic creature statement:', printDynamicCreature(3, 'french hens'))


// Scope is different in JS compared to Ruby. In JS, we can access global 
// variables from any part of our code, including within functions. They
// don't HAVE to be passed in as arguments. 



function multiplyNumbers(num1, num2) {
  let product = num1 * num2
  return num1 * num2
}

console.log('product of 4 and 5:', multiplyNumbers(4,5))


function greeting(name) {
  var Bonjour = `Bonjour ${name}, ca va?`
  return Bonjour
}
console.log(greeting('Alora'))

/*
RETURNS
1) a function can only return ONE value on any given invocation
2) when we return a value from a function, it HALTS the execution of that 
function ... no code after the return will run.
*/



/*
JS Conditionals
*/ 

function checkAge(age) {
  if (age < 21) {
    return "Sorry, come back when you're 21"
  } else {
  return "Welcome!"
  }
}

console.log('age is 20;', checkAge(20))
console.log('age is 21:', checkAge(21))
console.log('age is 40:', checkAge(40))



function identifyCookie(cookie) {
  if (cookie === "chocolate chip") {
    console.log("This cookie is a chocolate chip cookie!");
  } else if (cookie === "oatmeal raisin") {
    console.log("This should not even be called a cookie :(");
  } else {
    console.log("I bet you wish you had a chocolate chip cookie");
  }
}

// identifyCookie("chocolate chip")
// identifyCookie("oatmeal raisin")
// identifyCookie("sugar")

function evaluateSleep(hoursOfSleep) {  
  if (hoursOfSleep < 6) {
    console.log('I am groggy.');
  } else {
    console.log('I feel fantastic!');
  }
}

// evaluateSleep(8)
// evaluateSleep(4)







/*
JS For Loops
*/ 

for (let i = 0; i < 10; i++) {
  console.log('i:', i)
}

// let fruits = ['apples', 'oranges', 'bananas'];
//   for (let i = 0;)



// Write a for loop in the shout At Children function.
// On each loop, use .UpperCase() to 'shout the child's name in a console log

let kids = ['chris', 'heather', 'erica', 'rachel', 'becca'];

function shoutAtChildren() {
  for (let i = 0; i <kids.length; i++) {
    console.log (kids[i].toUpperCase())
  }
}

shoutAtChildren()