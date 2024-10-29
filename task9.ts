// Task 4: Nested Interfaces
// Define a Nested Interface for a Recipe:

// Create an interface Ingredient with properties name, amount, and unit.
// Define a Recipe interface that includes a title, ingredients (array of Ingredient), and instructions.
// Function to Log Recipe:

// Write a function logRecipe that takes a Recipe name and logs its title and ingredients to the console.

// Interface for an ingredient with required properties
interface Ingredient {
  name: string; // Name of the ingredient
  amount: number; // Quantity of the ingredient
  unit: string; // Unit of measurement
}

// Interface for a complete recipe
interface Recipe {
  title: string; // Title of the recipe
  ingredients: Ingredient[]; // Array of ingredients
  instructions: string; // Cooking instructions
}

// Sample recipe object
const recipe: Recipe[] = [
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
    instructions:
      "Cook the pasta, fry the bacon, mix the eggs, cheese, and seasonings, and serve over the pasta.",
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
    instructions:
      "Cook the pasta, fry the bacon, mix the eggs, cheese, and seasonings, and serve over the pasta.",
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
    instructions:
      "Cook the pasta, fry the bacon, mix the eggs, cheese, and seasonings, and serve over the pasta.",
  }
];

// Function to display recipe information by recipe name
function findRecipeByName(recipeName: string): void {
  const foundRecipe = recipe.find(r => r.title.toLowerCase() === recipeName.toLowerCase());
  
  if (foundRecipe) {
    console.log(`Recipe: ${foundRecipe.title}`);
    console.log("Ingredients:");
    foundRecipe.ingredients.forEach((ingredient) => {
      console.log(`${ingredient.name} - ${ingredient.amount} ${ingredient.unit}`);
    });
    console.log("Instructions:");
    console.log(foundRecipe.instructions);
  } else {
    console.log(`Recipe with name "${recipeName}" not found.`);
  }
}
// Function to display all recipes
findRecipeByName("Pasta Carbonara");