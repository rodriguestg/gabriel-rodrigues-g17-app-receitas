import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Loading from '../Components/Loading';
import RecipeCheckbox from '../Components/RecipeCheckbox';
import fetchFoodsObject from '../services/fetchFoodAPIs';

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
      isLoading: true,
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

  // fetchFoodsById = async (id) => {
  //   const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  //   const json = await response.json();

  //   return json;
  // }

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
      return 'oi';
    });
  }

  getRecipeById = async () => {
    const { location: { pathname } } = this.props;

    const pathnameArray = pathname.split('/');
    const pathnameId = pathnameArray[2];

    if (pathname.includes('drinks')) {
      const recipeData = await this.fetchDrinksById(pathnameId);

      const data = recipeData.drinks[0];
      this.setState({
        recipeName: data.strDrink,
        recipeImage: data.strDrinkThumb,
        recipeCategory: data.strCategory,
        recipeInstructions: data.strInstructions,
      });
      this.saveRecipeIngredientsAndMeasures(recipeData.drinks);
    }

    if (pathname.includes('foods')) {
      const recipeData = await fetchFoodsObject.fetchFoodsById(pathnameId);

      const data = recipeData.meals[0];
      this.setState({
        recipeName: data.strMeal,
        recipeImage: data.strMealThumb,
        recipeCategory: data.strCategory,
        recipeInstructions: data.strInstructions,
      });
      this.saveRecipeIngredientsAndMeasures(recipeData.meals);
    }
    this.setState({
      isLoading: false,
    });
  }

  renderRecipeIngredients = () => {
    const { recipeIngredients } = this.state;
    const { location: { pathname } } = this.props;
    const pathnameArray = pathname.split('/');
    const pathnameId = pathnameArray[2];

    return recipeIngredients.map((element, index) => (
      <div key={ `${element}-${index}` }>
        <RecipeCheckbox
          element={ element }
          index={ index }
          id={ pathnameId }
          pathname={ pathname }
        />
      </div>
    ));
  }

  // validateCheckBoxes = () => {
  //   const checkboxes = document.querySelectorAll('.done');
  //   console.log(checkboxes);
  // }

  render() {
    const {
      recipeName,
      recipeImage,
      recipeCategory,
      recipeInstructions,
      isLoading,
    } = this.state;

    return (
      <div>
        {
          isLoading && <Loading />
        }
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
        { this.renderRecipeIngredients() }
        <div>
          <p data-testid="instructions">{ recipeInstructions }</p>
        </div>
        <div>
          <button
            type="button"
            data-testid="finish-recipe-btn"
            onClick={ () => this.validateCheckBoxes() }
          >
            Finalizar
          </button>
        </div>
      </div>
    );
  }
}

RecipeInProgress.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    includes: PropTypes.func,
  }).isRequired,
};

export default connect(null, null)(RecipeInProgress);
