/*
Pair Practice 3 - Pantry

To run the code in this file, run the command:
  node practice_sessions/pair_practice_3_pantry.js
*/ 
// console.log("pair_practice_3_pantry.js is running")



const pantry = ['flour', 'sugar', 'butter', 'eggs', 'baking powder', 'milk', 'vanilla extract'];

const recipe1 = ['flour', 'milk', 'yeast', 'sugar', 'butter'];
const recipe2 = ['eggs', 'milk', 'cheese', 'ham'];
const recipe3 = ['flour', 'sugar', 'butter', 'eggs', 'baking powder'];


/* LEVEL ONE
Write a function that takes in a recipe and outputs the ingredients the pantry is missing for that recipe.

getMissingIngredients(recipe1) --> ["yeast"]
getMissingIngredients(recipe2) --> ["cheese", "ham"]
getMissingIngredients(recipe3) --> []
*/


/* Level TWO
Refactor your function so that instead of returning an array of missing ingredients, it returns a string stating what you need to buy.  

getMissingIngredients(recipe1) --> "You need to buy: yeast."
getMissingIngredients(recipe2) --> "You need to buy: cheese, ham."
getMissingIngredients(recipe3) --> "You have all the ingredients for this recipe."
*/

function getMissingIngredients(recipe) {
  var missingIngredients = []
  recipe.forEach(ingredient => {
    if  (!pantry.includes(ingredient)) {
      missingIngredients.push(ingredient)
    }
  });
  if (missingIngredients.length == 0) {
    return "You have all the ingredients for this recipe."
   } else {
  return `You need to buy: ${missingIngredients.join(', ')}.`
}}
console.log('recipe 1', getMissingIngredients(recipe1))
console.log('recipe 2', getMissingIngredients(recipe2))
console.log('recipe 3', getMissingIngredients(recipe3))


