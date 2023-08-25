# Online Recipe Book

## Description

You are tasked with creating a simple online recipe book where users can view, add, and modify recipes.

## Features and Breakdown

### 1. Homepage

- Display a `Hello, world!` message.
- List all available recipes using an array and a `for` loop.

### 2. Add a Recipe

- Prompt the user for the recipe name, ingredients, and steps.
- Store each recipe as an object with properties for name, ingredients (array), and steps.
- Use the `push` method to add the recipe object to the recipes array.

### 3. View a Recipe

- Prompt the user for the recipe name they want to view.
- Use a `for...of` loop to search the recipes array and display the recipe details if found. If not found, display an appropriate message.

### 4. Modify a Recipe

- Prompt the user for the recipe name they want to modify.
- Use a `for...in` loop to find the recipe in the recipes array.
- Allow the user to modify the name, ingredients, or steps using dot and bracket notation.
- Use the spread operator to ensure you don't modify the original recipe object directly.

### 5. Delete a Recipe

- Prompt the user for the recipe name they want to delete.
- Use array methods like `pop`, `shift`, or `splice` to remove the recipe from the recipes array.

### 6. Extra Features

- Use `const` when declaring arrays or objects that won't be reassigned.
- Implement error handling using `if...else` statements, ternary operators, and `switch` statements. For example, handle cases where a user tries to view a recipe that doesn't exist.
- Use template strings to display messages to the user.
- Use array and object destructuring where appropriate.

### 7. Advanced

- Allow users to rate recipes. Each recipe object can have a ratings property, which is an array of numbers. Users can add a rating, and you can calculate the average rating for each recipe.
- Implement a function that suggests recipes based on ingredients the user has. This function takes an array of ingredients as input and returns an array of recipe names that use those ingredients.

## Test

Once you've implemented the above features, test your application by:

- Adding a few recipes.
- Viewing a recipe.
- Modifying a recipe.
- Deleting a recipe.
- Rating a recipe.
- Getting recipe suggestions based on ingredients.

Remember, the goal is to apply the concepts you've learned in real-world scenarios. Take your time, and if you get stuck, refer back to the topics you've studied. Good luck!
