import * as model from './model.js';
import recipeView from './views/recipeView.js';

// Polyfilling everything else
import 'core-js/stable';
// Polyfilling async/await
import 'regenerator-runtime/runtime';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // Loading recipe
    // async function returns a promise that we need to handle whenever we call that async function
    await model.loadRecipe(id);

    // Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

// controlRecipes();

// DRY code for two different event listeners using the same callback function - note 'load' is necessary for changing tabs, etc.
['hashchange', 'load'].forEach(e => window.addEventListener(e, controlRecipes));

// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);
