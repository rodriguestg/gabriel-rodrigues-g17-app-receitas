const DRINK_ENDPOINT_CATEGORIES = 'www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const DRINK_ENDPOINT_NAME = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const DRINK_ENDPOINT_FIRST_LETTER = 'www.thecocktaildb.com/api/json/v1/1/search.php?f=';
const DRINK_ENDPOINT_MAIN_INGREDIEN = 'www.thecocktaildb.com/api/json/v1/1/search.php?i=';

const fetchDrinkObject = {
  fetchDrinkCategories: async () => {
    const response = await fetch(`${DRINK_ENDPOINT_CATEGORIES}`);
    const json = await response.json();

    return json;
  },
  fetchDrinkName: async (drinkName) => {
    const response = await fetch(`${DRINK_ENDPOINT_NAME}${drinkName}`);
    const json = await response.json();

    return json;
  },
  fetchDrinkFirstLetter: async (firstLetter) => {
    const response = await fetch(`${DRINK_ENDPOINT_FIRST_LETTER}${firstLetter}`);
    const json = await response.json();

    return json;
  },
  fetchDrinkMainIngredient: async (ingredient) => {
    const response = await fetch(`${DRINK_ENDPOINT_MAIN_INGREDIEN}${ingredient}`);
    const json = await response.json();

    return json;
  },
};

// fetchDrinkObject.fetchDrinkCategories();

export default fetchDrinkObject;
