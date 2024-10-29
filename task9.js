"use strict";
// Task 4: Nested Interfaces
// Define a Nested Interface for a Recipe:
// Sample recipe object
const recipe = [
    {
        title: "Pasta Carbonara",
        ingredients: [
            { name: "Pasta", amount: 200, unit: "grams" },
            { name: "Eggs", amount: 2, unit: "unit" },
            { name: "Cheese", amount: 100, unit: "grams" },
            { name: "Bacon", amount: 100, unit: "grams" },
            { name: "Garlic", amount: 2, unit: "cloves" },
            { name: "Black Pepper", amount: 1, unit: "teaspoon" },
            { name: "Salt", amount: 1, unit: "teaspoon" },
        ],
        instructions: "Cook the pasta, fry the bacon, mix the eggs, cheese, and seasonings, and serve over the pasta.",
    },
    {
        title: "Pasta Carbonara",
        ingredients: [
            { name: "Pasta", amount: 200, unit: "grams" },
            { name: "Eggs", amount: 2, unit: "unit" },
            { name: "Cheese", amount: 100, unit: "grams" },
            { name: "Bacon", amount: 100, unit: "grams" },
            { name: "Garlic", amount: 2, unit: "cloves" },
            { name: "Black Pepper", amount: 1, unit: "teaspoon" },
            { name: "Salt", amount: 1, unit: "teaspoon" },
        ],
        instructions: "Cook the pasta, fry the bacon, mix the eggs, cheese, and seasonings, and serve over the pasta.",
    },
    {
        title: "Pasta Carbonara",
        ingredients: [
            { name: "Pasta", amount: 200, unit: "grams" },
            { name: "Eggs", amount: 2, unit: "unit" },
            { name: "Cheese", amount: 100, unit: "grams" },
            { name: "Bacon", amount: 100, unit: "grams" },
            { name: "Garlic", amount: 2, unit: "cloves" },
            { name: "Black Pepper", amount: 1, unit: "teaspoon" },
            { name: "Salt", amount: 1, unit: "teaspoon" },
        ],
        instructions: "Cook the pasta, fry the bacon, mix the eggs, cheese, and seasonings, and serve over the pasta.",
    }
];
// Function to display recipe information by recipe name
function findRecipeByName(recipeName) {
    const foundRecipe = recipe.find(r => r.title.toLowerCase() === recipeName.toLowerCase());
    if (foundRecipe) {
        console.log(`Recipe: ${foundRecipe.title}`);
        console.log("Ingredients:");
        foundRecipe.ingredients.forEach((ingredient) => {
            console.log(`${ingredient.name} - ${ingredient.amount} ${ingredient.unit}`);
        });
        console.log("Instructions:");
        console.log(foundRecipe.instructions);
    }
    else {
        console.log(`Recipe with name "${recipeName}" not found.`);
    }
}
// Function to display all recipes
findRecipeByName("Pasta Carbonara");
