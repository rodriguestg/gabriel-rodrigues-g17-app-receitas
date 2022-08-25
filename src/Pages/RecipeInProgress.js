// import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class RecipeInProgress extends React.Component {
  constructor() {
    super();
    this.state = {
      recipeName: '',
      recipeImage: '',
      recipeCategory: '',
      recipeInstructions: '',
      recipeIngredients: [],
      recipeMeasures: [],
    };
  }

  componentDidMount() {
    this.getRecipeById();
  }

  fetchDrinksById = async (id) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const json = await response.json();

    return json;
  }

  fetchFoodsById = async (id) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const json = await response.json();

    return json;
  }

  saveRecipeIngredientsAndMeasures = (obj) => {
    const array = Object.entries(obj[0]);

    const filteredArray = array.filter((element) => (element[0].includes('strIngredient')
    && element[1]) || (element[0].includes('strMeasure') && element[1]));

    filteredArray.map((element) => {
      if (element[0].includes('strIngredient')) {
        this.setState((prevState) => ({
          recipeIngredients: [...prevState.recipeIngredients, element[1]],
        }));
      }
      if (element[0].includes('strMeasure')) {
        this.setState((prevState) => ({
          recipeMeasures: [...prevState.recipeMeasures, element[1]],
        }));
      }
      return console.log(this.state);
    });
  }

  getRecipeById = async () => {
    const { location: { pathname } } = this.props;

    const pathnameArray = pathname.split('/');
    const pathnameId = pathnameArray[2];

    if (pathname.includes('drinks')) {
      const recipeData = await this.fetchDrinksById(pathnameId);

      recipeData.drinks.map((element) => (
        this.setState({
          recipeName: element.strDrink,
          recipeImage: element.strDrinkThumb,
          recipeCategory: element.strCategory,
          recipeInstructions: element.strInstructions,
        })
      ));
      this.saveRecipeIngredientsAndMeasures(recipeData.drinks);
    }

    if (pathname.includes('foods')) {
      const recipeData = await this.fetchFoodsById(pathnameId);
      console.log(recipeData);
      recipeData.meals.map((element) => (
        this.setState({
          recipeName: element.strMeal,
          recipeImage: element.strMealThumb,
          recipeCategory: element.strCategory,
          recipeInstructions: element.strInstructions,
        })
      ));
      this.saveRecipeIngredientsAndMeasures(recipeData.meals);
    }
  }

  renderRecipeIngredients = () => {
    const { recipeIngredients } = this.state;
    return recipeIngredients.map((element, index) => (
      <div key={ element }>
        <p data-testid={ `${index}-ingredient-step` }>{element}</p>
      </div>
    ));
  }

  render() {
    const {
      recipeName,
      recipeImage,
      recipeCategory,
      recipeInstructions,
    } = this.state;

    return (
      <div>
        <img
          src={ recipeImage }
          alt={ recipeName }
          data-testid="recipe-photo"
        />
        <div>
          <h2 data-testid="recipe-title">{ recipeName }</h2>
        </div>
        <div>
          <button
            type="button"
            data-testid="share-btn"
          >
            Compartilhar
          </button>
        </div>
        <div>
          <button
            type="button"
            data-testid="favorite-btn"
          >
            Favoritar
          </button>
        </div>
        <div>
          <p data-testid="recipe-category">
            { recipeCategory }
          </p>
        </div>
        {this.renderRecipeIngredients()}
        <div>
          <p data-testid="instructions">{ recipeInstructions }</p>
        </div>
        <div>
          <button
            type="button"
            data-testid="finish-recipe-btn"
          >
            Finalizar
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, null)(RecipeInProgress);
