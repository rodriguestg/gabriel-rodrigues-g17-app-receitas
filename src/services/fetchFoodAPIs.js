const FOOD_ENDPOINT_CATEGORIES = 'www.themealdb.com/api/json/v1/1/categories.php';
const FOOD_ENDPOINT_NAME = 'www.themealdb.com/api/json/v1/1/search.php?s=';
const FOOD_ENDPOINT_FIRST_LETTER = 'www.themealdb.com/api/json/v1/1/search.php?f=';
const FOOD_ENDPOINT_MAIN_INGREDIENT = 'www.themealdb.com/api/json/v1/1/filter.php?i=';

const fetchFoodObject = {
  fetchFoodCategories: async () => {
    const response = await fetch(`${FOOD_ENDPOINT_CATEGORIES}`);
    const json = await response.json();

    return json;
  },
  fetchFoodName: async (foodName) => {
    const response = await fetch(`${FOOD_ENDPOINT_NAME}${foodName}`);
    const json = await response.json();

    return json;
  },
  fetchFoodFirstLetter: async (firstLetter) => {
    const response = await fetch(`${FOOD_ENDPOINT_FIRST_LETTER}${firstLetter}`);
    const json = await response.json();

    return json;
  },
  fetchFoodMainIngredient: async (ingredient) => {
    const response = await fetch(`${FOOD_ENDPOINT_MAIN_INGREDIENT}${ingredient}`);
    const json = await response.json();

    return json;
  },
};

export default fetchFoodObject;
