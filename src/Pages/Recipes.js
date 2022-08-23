import PropTypes from "prop-types"
import React from 'react';
import { connect } from 'react-redux';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Loading from '../Components/Loading';
import RecipeCard from '../Components/RecipeCard';

class Recipes extends React.Component {
  constructor() {
    super();
    this.state = {
      recipesObj: {},
      categories: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    this.saveFirstRecipes();
  }

  saveFirstRecipes = async () => {
    const { history: { location: { pathname } } } = this.props;

    if (pathname === '/foods') {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const json = await response.json();

      this.setState({
        recipesObj: json.meals,
        isLoading: false,
      });
    }

    if (pathname === '/drinks') {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const json = await response.json();

      this.setState({
        recipesObj: json.drinks,
        isLoading: false,
      });
    }
  }

  renderRecipes = () => {
    const { recipesObj } = this.state;
    const { history: { location: { pathname } } } = this.props;
    const arrayLength = 12;
    const data = recipesObj.slice(0, arrayLength);

    if (pathname === '/foods') {
      return data.map((element, index) => (
        <div
          data-testid={ `${index}-recipe-card` }
          key={ element.idMeal }
        >
          <RecipeCard
            image={ element.strMealThumb }
            cardName={ element.strMeal }
            index={ index }
          />

        </div>
      ));
    }
    if (pathname === '/drinks') {
      return data.map((element, index) => (
        <div
          data-testid={ `${index}-recipe-card` }
          key={ element.idDrink }
        >
          <RecipeCard
            image={ element.strDrinkThumb }
            cardName={ element.strDrink }
            index={ index }
          />

        </div>
      ));
    }
  }

  render() {
    const { history: { location: { pathname } }, history } = this.props;
    const { isLoading, recipesObj } = this.state;

    return (
      <div>
        <Header renderOnScreen title="Receitas" url={ pathname } history={ history } />
        {
          isLoading ? <Loading /> : this.renderRecipes()
        }
        <Footer />
      </div>
    );
  }
}

Recipes.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(null, null)(Recipes);
