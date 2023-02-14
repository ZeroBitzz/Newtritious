
require('dotenv').config()

exports.getRecipe = async function (diet, cuisine, allergies, calories) {
    console.log('spoonacular')
    const apiKey = process.env.API_KEY;
    const baseUrl = "https://api.spoonacular.com/recipes/complexSearch";
    const parameters = {
      apiKey: apiKey,
      diet: diet,
      cuisine: cuisine,
      allergies: allergies,
      calories: calories,
    };
    console.log(apiKey)

    const queryString = new URLSearchParams(parameters).toString();
    const response = await fetch(`${baseUrl}?${queryString}`);
    const data = await response.json();
//     // // const recipe = data.results[0];
//   `/getRecipe?${examplequery}&`
    return data;
}

