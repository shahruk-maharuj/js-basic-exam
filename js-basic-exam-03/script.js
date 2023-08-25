/* // ### 1. Homepage
// Display a `Hello, world!` message.
// List all available recipes using an array and a `for` loop.

alert("Hello, world!");

let recipes = [
    {
        name: "Chicken Curry",
        ingredients: ["Chicken", "Curry Powder", "Onions", "Tomatoes"],
        steps: "Cook chicken with onions, add tomatoes and curry powder."
    },
    {
        name: "Fish Fry",
        ingredients: ["Fish", "Salt", "Pepper"],
        steps: "Season fish with salt and pepper, then fry."
    }
];

console.log("Available recipes:");
for (let recipe of recipes) {
    console.log(recipe.name);
}

// ### 2. Add a Recipe
// Prompt the user for the recipe name, ingredients, and steps.
// Store each recipe as an object with properties for name, ingredients (array), and steps.
// Use the `push` method to add the recipe object to the recipes array.

let recipeName = prompt("Enter the name of your recipe:");
let recipeIngredients = prompt("Enter the ingredients, separated by commas:").split(",");
let recipeSteps = prompt("Enter the steps:");

let newRecipe = {
    name: recipeName,
    ingredients: recipeIngredients,
    steps: recipeSteps
};

recipes.push(newRecipe);

// ### 3. View a Recipe
// Prompt the user for the recipe name they want to view.
// Use a `for...of` loop to search the recipes array and display the recipe details if found. If not found, display an appropriate message.

let recipeToView = prompt("Which recipe would you like to view?");
let recipeFound = false;

for (let recipe of recipes) {
    if (recipe.name === recipeToView) {
        console.log(`Recipe Name: ${recipe.name}`);
        console.log(`Ingredients: ${recipe.ingredients.join(", ")}`);
        console.log(`Steps: ${recipe.steps}`);
        recipeFound = true;
        break;
    }
}

if (!recipeFound) {
    console.log("Sorry, we couldn't find that recipe.");
}
 */

function addTask(name, description, status) {
  // Implementation here
}

addTask("DM", "Best website", "done")