import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import Header from '../Components/Header';

class FavoriteRecipes extends React.Component {
  constructor() {
    super();
    this.state = {
      favoriteRecipes: [],
    };
  }

  componentDidMount() {
    this.stateRecipesFavorite();
  }

  filterAll = () => {
    this.stateRecipesFavorite();
  };

  stateRecipesFavorite = () => {
    const ae = localStorage.getItem('favoriteRecipes');
    const favoriteRecipes = JSON.parse(ae);
    this.setState = {
      favoriteRecipes,
    };
  }

  filterFoods = () => {
    const favoriteRecipes = localStorage.getItem('favoriteRecipes');
    const recipesFoods = favoriteRecipes.filter((recipe) => recipe.type === 'foods');
    this.setState = {
      favoriteRecipes: recipesFoods,
    };
  };

  filterDrinks = () => {
    const favoriteRecipes = localStorage.getItem('favoriteRecipes');
    const recipesDrinks = favoriteRecipes.filter((recipe) => recipe.type === 'drinks');
    this.setState = {
      favoriteRecipes: recipesDrinks,
    };
  };

  render() {
    const { favoriteRecipes } = this.state;
    // const { id } = JSON.parse(favoriteRecipes);

    return (
      <div>
        <button type="button" data-testid="filter-by-all-btn" onClick={ this.filterAll }>
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ this.filterFoods }
        >
          Foods
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ this.filterDrinks }
        >
          Drinks
        </button>
        {
          favoriteRecipes.map((recipe, index) => {
            const { id, type, nationality, category,
              alcoholicOrNot, name, image } = recipe;
            return (
              <div key={ id }>
                <Link to={ `/${type}/${id}` }>
                  <p data-testid={ `${index}-horizontal-name` }>{ name }</p>
                  <img
                    src={ image }
                    alt={ name }
                    data-testid={ `${index}-horizontal-image` }
                  />
                </Link>
                {
                  type === 'foods' ? (
                    <div>
                      <p data-testid={ `${index}-horizontal-top-text` }>{ category }</p>
                      <p>{ nationality }</p>
                    </div>
                  ) : <p>{ alcoholicOrNot }</p>
                }
                <button type="button" data-testid={ `${index}-horizontal-share-btn` }>
                  Compartilhar
                </button>
                <button type="button">
                  desfavoritar
                </button>
              </div>
            );
          })
        }
      </div>
    );
  }
}

// FavoriteRecipes.propTypes = {
//   history: PropTypes.objectOf(PropTypes.any).isRequired,
// };

export default connect(null, null)(FavoriteRecipes);
