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

console.log('police sketch description number of tattoos: ', policeSketchDescription.visibleTattoos)

console.log('array pizza:', favoriteFoods[0])

console.log('array last: ', favoriteFoods[3])


console.log('Job Title', jobTitle)


// Declare two variables, one called quantity and one called mythical creatures

var quantity = 28;

var mythicalCreatures = 'fairies';



/*
JS Concatenation & Interpolation
*/ 










/*
JS Functions
*/ 







/*
JS Conditionals
*/ 

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

