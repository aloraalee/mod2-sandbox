/* To run the code in this file, run the command:
  node data_types_and_variables_playground.js
*/

console.log("data_types_and_variables_playground.js is running")

// PART 1: Declaring variables.  
// Be intentional when naming your variables.  Choose a name that is clear and specific about the data being held by that variable.
    // TIP - when printing to the console, put a label on your console log so it's easier to tell what you're seeing.
      // For example:  
      var helloWorld = 'hello world'
      console.log('helloWorld: ', helloWorld)

// 1a. Declare a variable and assign it a value of a string of your middle name. Then print it to the console.
      var middle_name = 'Lee Christiana'
      console.log('Middle name: ', middle_name)
// 1b. Declare a variable and assign it a value of the number of pets you have. Then print it to the console.
      var pet_nums = 0
      console.log('Number of pets:', pet_nums)
// 1c. Declare a variable and assign it a value of null.  Then print it to the console.
      var broken_bones = null
      console.log('Broken bones:', broken_bones)
// 1d. Declare a variable and assign it a value of whether you have ever gone bunjee jumping (true/false).  Then print it to the console. 
      var bunjee_jumping = false
      console.log('Bunjee jumping?:', bunjee_jumping)
// 1e. Declare a variable and assign it a value of an empty string.  Then print it to the console.
      var nothing_man = ''
      console.log('Nothing Man:', nothing_man)
// 1f. Declare a variable and assign it a value of the expression 2 + 5.  Then print it to the console.
      var math = 2 + 5
      console.log('Math:', math)
// 1g. Declare a variable and assign it a value of the expression (100 - 20) / 2.  Then print it to the console.
      var complex_math = (100 - 20) / 2
      console.log('Complex math:', complex_math)
// 1h. Declare a variable "potato" but do not assign it a value yet. Did you know you can do this? Print it to the console. What do you get?
    var potato
    console.log('Potato:', potato)
// 1i. Now, on a new line (not the line where you declared it) assign a string of your fav potato dish to your already-declared "potato" variable.  Print it to the console.
    var potato = 'french fries'
    console.log('Potato:', potato)
// 1j. Look at the console log below.  Notice that gobblyGoop has not been declared as a variable anywhere yet. Think about what will show in the console when you uncomment and run that line.  Try it! 
//       console.log(gobblyGoop)

//       console.log(gobblyGoop)
//                   ^

// ReferenceError: gobblyGoop is not defined


// PART 2: Does naming matter?  (Hint - yes it sure does!)
// Clear, specific, consistent naming helps ensure you and other devs don't get confused. 
// Rename each of the variables below to be more clear and specific about the value(s) they hold.

// 2a.
var name = 'Jennifer'

// 2b.
var studentCount = 15

// 2c. 
var candyName = ['snickers', 'twix', 'milky way', '3 musketeers']

// 2d.
var bikeInfo = {
  name: 'bicycle',
  numWheels: 2,
  goesFast: true,
  isBoring: false,
  parts: ['pedals', 'frame', 'handlebars', 'wheels', 'brakes']
}

// 2d. What's a better name than 'login' for a variable used to track if a user is logged in or not at any given time?
var loginCurrent = true  




// PART 3: Reassigning variable values
// When reassigning variables, you do not use the keyword "var"

// 3a. Declare a variable "userName" that holds a string of your first name.  Print it to the console.
      var userName = 'Alora'
      console.log('Username:', userName)
// 3b. On a new line, reassign the value of your "userName" variable to be a friend's name.  Print it to the console again.  
// Notice how the 2 console logs give you a different value based on the variable's value at that moment
userName = 'Diane'
console.log('New username:', userName)

// 3c. 
var num1 = 3
console.log('num1: ', num1)
// Uncomment the variable "num1" Print it.

var num2 = num1 + 2
console.log('num2: ', num2)
// Uncomment the variable "num2". Print it.

console.log('num1 again: ', num1)
// Uncomment the console log above to print num1 again.  
    // Notice that the value hasn't changed even though we added 2 to it when declaring num2. Why?
// Because we saved that change in the variable called num2 and did not rename num1
// Declare another variable "num3" and assign it a value of num1 * num2.  Print it.
var num3 = num1 * num2
console.log('Num3', num3)
// 3d. 
// Declare a variable "myNumber" and assign it a value of 0.  Print it.
var myNumber = 0
console.log('My number:', myNumber)
// On a new line, reassign the myNumber variable to a value of myNumber + 2.  Print it again.
myNumber = myNumber + 2
console.log('My number + two', myNumber)
  // Notice how the value does change this time.  Why?
// because this time we reasigned the variable so the value stored in the variable will change
// 3e. Look at the declaration and reassignments below.  Guess what will log each time and why.  Then uncomment them and run it.
    var counter = 0;
    console.log(counter)
    counter = counter + 1
    console.log(counter)
    counter += 1
    console.log(counter)
    counter ++
    console.log(counter)







// PART 7: More
// 7a. Declare a variable and assign it a value of an empty array.  Then print it to the console.
    var dogs = []
    console.log("Dogs:", dogs)
// 7b. Declare a variable and assign it a value of an empty object.  Then print it to the console.
    goodSmells = {}
    console.log("Good smells:", goodSmells)
// 7c. Declare a variable and assign it a value of an array of 3 of your friends' names.  Then print it to the console.
    var friendsNames = ['Brian', 'Ellen', 'Kaylee']
    console.log("Friends' names:", friendsNames)
// 7d. Declare a variable and assign it a value of a car object with 2 key-value pairs: make and model.  Then print it to the console.
    var makeAndModel = {make: 'Toyota', model: 'Pruis'}
    console.log('Make and model:', makeAndModel)