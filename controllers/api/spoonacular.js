const mysql = require('mysql2/promise')
require('dotenv').config()

exports.getRecipe = async function (cuisine, diet, tolerances, maxCalories) {
    console.log('-------------spoonacular-----------')
    const apiKey = process.env.API_KEY;
    const baseUrl = "https://api.spoonacular.com/recipes";
    let finalRecipe
    let randomRecipeId
    const parameters = {
      apiKey: apiKey,
      diet: diet,
      cuisine: cuisine,
      tolerances: tolerances,
      calories: maxCalories,
    };

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '32289216',
        database: 'newtritious_db'
    })
    const [rows] = await connection.execute('SELECT * FROM user WHERE id = ?', [randomRecipeId]);
    const recipeName = rows[0].name;
    console.log(`Recipe name: ${recipeName}`)
    
    let queryString = new URLSearchParams(parameters).toString();
    await fetch(`${baseUrl}/complexSearch?${queryString}`)
    .then(response => response.json())
    .then(data => {
        randomRecipeId = data.results[Math.floor(Math.random() * data.results.length)].id;
    })
    await fetch(`${baseUrl}/${randomRecipeId}/information?apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        finalRecipe = data
    })
    

    return finalRecipe
    // const randomRecipeId = data.results[Math.floor(Math.random() * data.results.length)].id;
    // const randomRecipeResponse = await fetch(`${recipeUrl}/?${randomRecipeId}/information`);
    // // to return all the data just type "return data"
    // return randomRecipe; // returns a random meal from the list
}

