import React from 'react';
import { Link } from 'react-router-dom';
import CategoryButton from './CategoryButton';
import RecipeCard from './RecipeCard';
import Loading from './Loading';
import AllButton from './AllButton';

class Foods extends React.Component {
  constructor() {
    super();
    this.state = {
      recipesObj: {},
      categories: {},
      isLoadingCategories: true,
      isLoadingRecipes: true,
      filteredCategories: [],
    };
  }

  componentDidMount() {
    this.saveFirstRecipes();
    this.saveCategories();
  }

  fetchFoodByCategories = async (category) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const json = await response.json();

    return json;
  }

  handleClickCategoryButton = async ({ target }) => {
    this.setState({
      isLoadingRecipes: true,
    });
    const formatedCategoryName = target.name;
    const categoriesFilter = await this.fetchFoodByCategories(formatedCategoryName);
    this.setState({
      recipesObj: categoriesFilter.meals,
      isLoadingRecipes: false,
    });
    this.toggleFilter(formatedCategoryName);
  }

  toggleFilter = (element) => {
    const { filteredCategories } = this.state;
    if (filteredCategories.includes(element)) {
      this.setState({
        filteredCategories: [],
      }, () => this.handleClickAllButton());
    }
    if (!filteredCategories.includes(element)) {
      this.setState({
        filteredCategories: [element],
      });
    }
  }

  handleClickAllButton = () => {
    this.saveFirstRecipes();
    this.saveCategories();
  }

  saveCategories = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const json = await response.json();

    this.setState({
      categories: json.meals,
      isLoadingCategories: false,
    });
  }

  renderCategoryButtons = () => {
    const { categories } = this.state;
    const arrayLength = 5;
    const data = categories.slice(0, arrayLength);

    return data.map((element) => (
      <div
        key={ element.strCategory }
      >
        <CategoryButton
          categoryName={ element.strCategory }
          handleClick={ this.handleClickCategoryButton }
        />
      </div>
    ));
  }

  saveFirstRecipes = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const json = await response.json();

    this.setState({
      recipesObj: json.meals,
      isLoadingRecipes: false,
    });
  }

  renderRecipes = () => {
    const { recipesObj } = this.state;
    const arrayLength = 12;
    const data = recipesObj.slice(0, arrayLength);

    const render = data.map((element, index) => (
      <div
        data-testid={ `${index}-recipe-card` }
        key={ element.idMeal }
      >
        <Link to={ `/foods/${element.idMeal}` }>
          <RecipeCard
            image={ element.strMealThumb }
            cardName={ element.strMeal }
            index={ index }
          />
        </Link>
      </div>
    ));
    return render;
  }

  render() {
    const { isLoadingCategories, isLoadingRecipes } = this.state;
    return (
      <div>
        { isLoadingCategories ? <Loading /> : this.renderCategoryButtons() }
        <AllButton handleClick={ () => this.handleClickAllButton() } />
        { isLoadingRecipes ? <Loading /> : this.renderRecipes() }
      </div>
    );
  }
}

export default Foods;
