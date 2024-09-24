/* To run the code in this file, run the command:
      node type_coercion_concatenation_interpolation_playground.js
*/

console.log("type_coercion_concatenation_interpolation_playground.js is running")

// PART 1: Type Coercion

// 1a. Look at the variable declarations and assignments below.  Guess what will log for creatureCount.  Uncomment and run it.
        var quantity = 3;
        var mythicalCreature = " unicorns";
        var creatureCount = quantity + mythicalCreature;
        console.log(creatureCount)
        console.log(typeof(creatureCount))

// 1b. In the example above, what is the data type of the quantity variable?
// number
// 1c. In the example above, what is the data type of the mythicalCreature variable?
// string
// 1d. In the example above, what is the data type of the creatureCount variable?  
// string
//     How can a number plus a string equal a string?
// string concatination 
//     Take a few minutes to look up and read about Type Coercion in the MDN docs.




// PART 2: Concatenation
  var brag = "I have " + quantity + " fancy" + mythicalCreature +"!"
      console.log(brag)
// 2a. Ensure the quantity, mythicalCreature, and brag variables above are not commented out. 

// 2b. The value of brag above is being created using concatenation. A way to link multiple values (strings, numbers, variables, etc) together into one string using the + operator.  
//Let's try it!
   // Declare a variable and assign it a string value of a friend's name.
   var bestie = 'Brian'
   // Declare a variable and assign it a string value of a nice gesture.
   var nice_gesture = 'changing your flight to attend my birthday weekend'
   // Declare a variable "gratitude" and assign it a statement of thanks that uses concatenation and your other 2 variables.  For example:  "Thank you Kayla for pointing out the food in my teeth."
      var gratitude = "Hey " + bestie + ", thank you for " + nice_gesture + "!"
      console.log(gratitude)
// 2c. Use the variables below to make a concatenated string.
      var activity = 'talk'
      var estrangedUncle = 'Bruno'

      var brunoSong = "We don't " + activity + " about " +estrangedUncle +", no, no, no!"
      console.log(brunoSong)

// PART 3: Interpolation
  var bigBrag = `I have ${quantity} VERY fancy and sophisticated${mythicalCreature}!`  
  console.log(bigBrag)
        //Note the weird spacing between sophisticated and mythicalCreature above due to how we already included a space in the mythicalCreature value previously.

// 3a. Ensure the quantity, mythicalCreature, and bigBrag variables above are not commented out. Click Run.

// 3b. The bigBrag variable above uses a different way of combining values called interpolation. It accomplishes the same goal as concatenation but uses different syntax - 
//backticks instead of quotes(``) and these guys ${}.  Let's try it!
     // Declare a variable and assign it a string value of a name.
     var studyAbroadFriend = "Sara"
     // Declare a variable and assign it a string value of a celebratory exclamation ("congrats", "woohoo", etc)
     var exclamation = "Yay, yay, yay"
     // Declare a variable and assign it to a string value of a nice characteristic ("cute", "nice", etc)
     var characteristic = "cute"
     // Declare a variable "babyNote" and assign it a statement of new baby congratulations that uses interpolation and your other 3 variables.  For example: "Congratulations Trisha! I heard your new baby is adorable!"
      var babyNote =  `${exclamation}, ${studyAbroadFriend}, I saw on instagram you're prego. Your baby is going to be soooo ${characteristic}`
      console.log(babyNote)
// 3c. Use the variables below to make an interpolated string.
      var celebration = 'birthday'
      var age = 25

      var aging_comment = `I wish this ${celebration} I was turing ${age}...`
      console.log(aging_comment)
