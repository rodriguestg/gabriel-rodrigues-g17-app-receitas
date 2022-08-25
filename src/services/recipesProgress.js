const IN_PROGRESS_RECIPES = 'inProgressRecipes';

if (!JSON.parse(localStorage.getItem(IN_PROGRESS_RECIPES))) {
  localStorage.setItem(IN_PROGRESS_RECIPES, JSON.stringify({}));
}
const readRecipesInProgress = () => JSON.parse(localStorage.getItem(IN_PROGRESS_RECIPES));

const saveRecipesInProgress = (recipe) => localStorage
  .setItem(IN_PROGRESS_RECIPES, JSON.stringify(recipe));

export const getRecipesInProgress = () => {
  const recipesInProgress = readRecipesInProgress();
  return recipesInProgress;
};

export const addRecipe = (recipe) => {
  if (recipe) {
    const recipesInProgress = readRecipesInProgress();
    saveRecipesInProgress({ ...recipesInProgress.meals, recipe });
  }
};

export const removeRecipeInProgress = (recipe, ids) => {
  const recipesInProgress = readRecipesInProgress();
  saveRecipesInProgress(recipesInProgress.filter((r) => r.element !== recipe.meals[ids]));
};
