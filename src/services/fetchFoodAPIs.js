const FOOD_ENDPOINT_CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const FOOD_ENDPOINT_NAME = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const FOOD_ENDPOINT_FIRST_LETTER = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
const FOOD_ENDPOINT_MAIN_INGREDIENT = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';

const fetchFoodsObject = {
  fetchFoodsCategories: async () => {
    const response = await fetch(`${FOOD_ENDPOINT_CATEGORIES}`);
    const json = await response.json();

    return json;
  },
  fetchFoodsName: async (foodName) => {
    const response = await fetch(`${FOOD_ENDPOINT_NAME}${foodName}`);
    const json = await response.json();

    return json;
  },
  fetchFoodsFirstLetter: async (firstLetter) => {
    const response = await fetch(`${FOOD_ENDPOINT_FIRST_LETTER}${firstLetter}`);
    const json = await response.json();
    console.log(json);
    return json;
  },
  fetchFoodsMainIngredient: async (ingredient) => {
    const response = await fetch(`${FOOD_ENDPOINT_MAIN_INGREDIENT}${ingredient}`);
    const json = await response.json();
    console.log(json);
    return json;
  },
};

export default fetchFoodsObject;
