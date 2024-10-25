/*
Pair Practice 2 - Pangram

To run the code in this file, run the command:
  node practice_sessions/pair_practice_2_pangram.js
*/ 
// console.log("pair_practice_2_pangram.js is running")



const pangram = "the quick brown fox jumps over the lazy dog"
const quote = "sucking at something is the first step towards being kinda good at something"

/* LEVEL ONE
Write a function that takes in a string and counts how many words are in that string.

/* 
Pseudo Code:
1. Want to return an integer that represents the count of words. 
2. Thinking about .includes() because I can see if it includes a space ' ' and I could use that to count words +1. 
3. Can I push something into an array for every space?
4. I can use .count on an array to count the number of spaces  
*/

function countWords(string) {
  var words = string.split(' ')
    return words.length
}
// console.log(countWords(pangram))
// console.log(countWords(quote))


// countWords(pangram) -->  9
// countWords(quote) -->  13






/* LEVEL TWO
Write a function that takes in a string and a number. The function should return the number of words in that string which are as long, 
or longer, than the given number.

countWordsByLength(pangram, 4) -->  5
countWordsByLength(quote, 5) -->  7
*/

function countLongWords(string, num) {
  var words = string.split(' ')
  var result = []
  words.forEach((word) =>{
    if(word.length >= num) {
      result.push(word)
    }
  })
  return result.length
}
console.log(countLongWords(pangram, 4))
console.log(countLongWords(quote, 5))



/* LEVEL THREE
Write a function that takes in a string and returns the words in that string as a single object.  The object's keys will be numbers representing the length of each word.  The values will be arrays containing the appropriate words. 

reorganizeWords(panagram) -->  {
  '3': [ 'the', 'fox', 'the', 'dog' ],
  '4': [ 'over', 'lazy' ],
  '5': [ 'quick', 'brown', 'jumps' ]
}
reorganizeWords(quote) -->  {
  '2': [ 'at', 'is', 'at' ],
  '3': [ 'the' ],
  '4': [ 'step', 'good' ],
  '5': [ 'first', 'being', 'kinda' ],
  '7': [ 'sucking', 'towards' ],
  '9': [ 'something', 'something' ]
}
*/
