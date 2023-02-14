
require('dotenv').config()

exports.getRecipe = async function (cuisine, diet, tolerances, maxCalories) {
    console.log('spoonacular')
    const apiKey = process.env.API_KEY;
    const baseUrl = "https://api.spoonacular.com/recipes/complexSearch";
    const parameters = {
      apiKey: apiKey,
      diet: diet,
      cuisine: cuisine,
      tolerances: tolerances,
      calories: maxCalories,
    };
    console.log(apiKey)

    const queryString = new URLSearchParams(parameters).toString();
    const response = await fetch(`${baseUrl}?${queryString}`);
    const data = await response.json();
//     // // const recipe = data.results[0];
//   `/getRecipe?${examplequery}&`
    return data;
}

