'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT;
app.use(cors());

let myMemory = {};


// let myMemory = {
//   fish : 'bla bla bla',
//   chicken: 'aaaaa'
// }

app.get('/recipes', getRecipes);

function getRecipes(request, response) {
  const ingredient = request.query.ingredient;
  
  if(myMemory[ingredient] !== undefined)
  {
    console.log('get the data from Memory');
    //get the data from the memory
    response.send(myMemory[ingredient]);
  }
  else
  {
    const url = `https://api.edamam.com/search?q=${ingredient}&app_id=${process.env.FOOD_APP_ID}&app_key=${process.env.FOOD_APP_KEY}`;
    axios
      .get(url)
      .then(res => {
        const recipeArr = res.data.hits.map(recipe => new Recipe(recipe.recipe));
        
        // save the data in my memory
        myMemory[ingredient] = recipeArr;
        
        console.log('get the data from API');
        response.status(200).send(recipeArr);
      })
      .catch(err => {
        console.err('error', err);
        response.status(500).send('error', err);
      })
  }
  
 
}

class Recipe {
  constructor(recipe) {
    this.uri = recipe.uri;
    this.label = recipe.label;
    this.image_url = recipe.image;
    this.ingredients = recipe.ingredientLines;
    this.totalTime = recipe.totalTime;
  }
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));