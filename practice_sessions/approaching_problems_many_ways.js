/*
JS Approaching Problems Many Ways Scratchpad

To run the code in this file, run the command:
  node practice_sessions/approaching_problems_many_ways.js
*/ 
console.log("approaching_problems_many_ways.js is running")


/*  PROMPT:
Write a function findCheapToys that returns an array of toy names that cost less than $20.

Expected output => [ 'Tamagotchi', 'Super Soaker', 'Pogs' ]
*/

const ninetiesToys = [
  {
      name: "Tamagotchi",
      releaseYear: 1996,
      price: 15.99
  },
  {
      name: "Furby",
      releaseYear: 1998,
      price: 29.99
  },
  {
      name: "Super Soaker",
      releaseYear: 1989,
      price: 19.99
  },
  {
      name: "Pogs",
      releaseYear: 1991,
      price: 5.99
  },
  {
      name: "Game Boy",
      releaseYear: 1989,
      price: 89.99
  }
];


/* Round 1: forEach
Solve the prompt using a forEach. You may not use any other iterator methods.
*/

function findCheapToys() {
    // console.log('ninetiesToys:', ninetiesToys)
    var cheapToyNames = []
    ninetiesToys.forEach((toy) => {
        // console.log('toy:', toy)
        // console.log('toy.price:', toy.price)
        // console.log('toy.name:', toy.name)
     if (toy.price < 20) {
        cheapToyNames.push(toy.name)
    }
    })
    // console.log('cheapToys:', cheapToys)
    return cheapToyNames
}
console.log('for each cheap toys:', findCheapToys())

// There are a lot of console.logs in the function above to see that I am using the 
// data as expected. This lets me see the data I am accessing at each step. 
// You chan check exactly hot to get each data point before using it in your code and 
// you can check to confirm that a piece of code you just wrote is doing exactly what you 
// wanted and expected 

// Steps
// 1. Make an empty array
// 2. iterate through each toy
// 3. Use conditionals that if the toy.price is less than 20 
// 4. then I want to add the toy.name to the new array I created
// 5. return the array that contains the name of toys that are less than $20

//What are some pros and cons of using forEach? Pros it uses conditional logic which is 
// clear to any reader. Cons you have to create a new array seperately. 



/* Round 2: filter and map
Solve the prompt using a filter and map. You may not use any other iterator methods.
*/

function filterCheapToys() {
    var cheapToys = ninetiesToys.filter((toy) => {
        return toy.price < 20
    })
    // console.log(cheapToys)
    var cheapToyNames = cheapToys.map((toy) => {
        return toy.name
    })
    return cheapToyNames
}
console.log('filter cheap toys:', filterCheapToys())

function findCheapToys() {
    return ninetiesToys.filter((toy) => {
        return toy.price < 20
    }).map((toy) => {
        return toy.name
    })
}


// Steps:
// 1. create a variable that will hold the return of the filter() method 
// 2. filter through the ninetiesToys array to find all the toys that are less than 20
// 3. write return with what I want to return from the filter() method
// 4. create a variable  that will hold the cheap toy names, since this will use map, 
// this variable will be an array
// 5. use map to iterate through only the cheap toys and return only toy name

/* Round 3: reduce
Solve the prompt using a reduce. You may not use any other iterator methods.
*/

function reduceCheapToys() {
    var cheapToyNames = ninetiesToys.reduce((accumulator, toy) => {
        if (toy.price < 20) {
            accumulator.push(toy.name)
        }
        return accumulator
    }, [])
    return cheapToyNames
}
console.log('reduce cheap toys:', reduceCheapToys())


// Steps:
/* 
1. Build my function
2. create variable with array to store the daya in 
3. iterate with REDUCE
    to look at each toy object in the array one at a time
    WHILE IM LOOKING AT JUST ONE OBJECT...
        eval whether price is less than 20
4. if it is, push just the name into the new array
    after you've looped at every single toy one at a time
5. return the new array



*/


// PLOT TWIST:

const eightiesToys = [
    {
      name: "Rubik's Cube",
      releaseYear: 1980,
      price: 9.99
    },
    {
      name: "Transformers",
      releaseYear: 1984,
      price: 19.99
    },
    {
      name: "My Little Pony",
      releaseYear: 1983,
      price: 12.99
    },
    {
      name: "Cabbage Patch Kids",
      releaseYear: 1982,
      price: 24.99
    },
    {
      name: "Nintendo Entertainment System",
      releaseYear: 1985,
      price: 89.99
    },
    {
      name: "He-Man and the Masters of the Universe",
      releaseYear: 1982,
      price: 14.99
    }
  ];


// Round 1: 

function findCheapToysUniversal(array) {
    var cheapToyNames = []
    array.forEach((toy) => {
     if (toy.price < 20) {
        cheapToyNames.push(toy.name)
    }
    })
    return cheapToyNames
}
console.log('for each cheap toys universal:', findCheapToysUniversal(eightiesToys))

// Round 2:

function filterCheapToysUniversal(array) {
    var cheapToys = array.filter((toy) => {
        return toy.price < 20
    })
    var cheapToyNames = cheapToys.map((toy) => {
        return toy.name
    })
    return cheapToyNames
}
console.log('filter cheap toys universal:', filterCheapToysUniversal(eightiesToys))

// Round 3: 

function reduceCheapToysUniversal(array) {
    var cheapToyNames = array.reduce((accumulator, toy) => {
        if (toy.price < 20) {
            accumulator.push(toy.name)
        }
        return accumulator
    }, [])
    return cheapToyNames
}
console.log('reduce cheap toys universal:', reduceCheapToysUniversal(eightiesToys))