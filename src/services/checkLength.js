const alertNoResults = () => {
  const mensage = 'Sorry, we haven\'t found any recipes for these filters.';
  global.alert(mensage);
};

export default async function checkLength(item, url, history) {
  const items = await item;
  const typeOf = items.meals ? items.meals : items.drinks;
  if (!typeOf) {
    alertNoResults();
  } else if (typeOf.length === 1) {
    const idType = typeOf[0].idMeal || typeOf[0].idDrink;
    history.push(`${url}/${idType}`);
  } else if (typeOf.length > 1) {
    return items;
  }
}
