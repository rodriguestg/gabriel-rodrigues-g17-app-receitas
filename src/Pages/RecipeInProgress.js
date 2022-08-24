import PropTypes from 'prop-types';
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
    this.saveRecipeInfoToState();
    this.getRecipe();
  }

  getRecipe = () => {
    console.log('oi');
    // PEGAR RECEITA PELO ID E FAZER O RESTANTE
    // 2 ENDPOINTS DIFERENTES, UM PARA BEBIDA E OUTRO PARA COMIDA
  }

  saveRecipeInfoToState = () => {
    const { stateFoods } = this.props;

    stateFoods.map((element) => (
      this.setState({
        recipeName: element.strDrink,
        recipeImage: element.strDrinkThumb,
        recipeCategory: element.strCategory,
        recipeInstructions: element.strInstructions,
      })
    ));

    const array = Object.entries(stateFoods[0]);

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
          <p data-testid="recipe-category">
            { recipeCategory }
          </p>
        </div>
        {this.renderRecipeIngredients()}
        <div>
          <p>{ recipeInstructions }</p>
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

// RecipeInProgress.propTypes = {
//   stateFoods: PropTypes.shape({
//     map: PropTypes.func,
//   }).isRequired,
// };

export default connect(null, null)(RecipeInProgress);
