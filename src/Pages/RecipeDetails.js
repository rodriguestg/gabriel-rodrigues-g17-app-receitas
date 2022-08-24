import React, { Component } from 'react';
import ReactPlayer from 'react-player/youtube';
import PropTypes from 'prop-types';

import '../Style/RecipesDetails.css';

class RecipeDetails extends Component {
  constructor() {
    super();
    this.SIX = 6;
    this.state = { info: {}, typeOf: '' };
  }

  componentDidMount() {
    this.requestRecipeDetails();
  }

  requestRecipeDetails = async () => {
    const { match: { params: { id } } } = this.props;
    const APIUrl = this.useCorrectAPI();
    const request = await fetch(`${APIUrl}${id}`);
    const data = await request.json();

    const drinkOrFood = data.meals ? 'meals' : 'drinks';

    this.setState(() => ({
      typeOf: drinkOrFood,
    }), () => {
      const { typeOf } = this.state;
      this.setState({
        info: { ...data[typeOf][0] },
      });
    });
    console.log(this.state);
  }

  useCorrectAPI = () => {
    const { match: { url } } = this.props;
    const formatedUrl = url.slice(1, this.SIX);
    if (formatedUrl === 'foods') return 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
    return 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
  }

  formateMealInfo = (info) => {
    let formatedInfo = [];
    const infoIng = Object.entries(info)
      .filter((findIng) => findIng[0].includes('strIng') && findIng[1])
      .map((ing) => ing[1]);
    const infoMeas = Object.entries(info)
      .filter((findMea) => findMea[0].includes('strMeasu') && findMea[1])
      .map((meas) => meas[1]);
    for (let index = 0; index < infoIng.length; index += 1) {
      const getInfo = `${infoIng[index]}: ${infoMeas[index]}`;
      formatedInfo = [...formatedInfo, getInfo];
    }

    return formatedInfo;
  }

  render() {
    const { info } = this.state;
    return (
      <main>
        <img
          className="recipe-detail-img"
          src={ info.strMealThumb }
          width="200"
          alt={ info.strMeal }
          data-testid="recipe-photo"
        />
        <h2 data-testid="recipe-title">{info.strMeal}</h2>
        <h3 data-testid="recipe-category">{info.strCategory}</h3>
        <ReactPlayer
          width="80%"
          height="100%"
          className="video"
          data-testid="video"
          url={ (info.strYoutube) }
          config={ {
            youtube: {
              playerVars: { origin: 'http://localhost:3000/', showinfo: 0 },
            },
          } }
        />
        <article className="instructions">
          <h2>Instructions</h2>
          <p data-testid="instructions">{ info.strInstructions }</p>
        </article>
        <article className="ingredients">
          <h2>Ingredients:</h2>
          {
            this.formateMealInfo(info).map((getMeasAndIng, index) => (
              <p
                key={ `${getMeasAndIng}${index}` }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                { getMeasAndIng }
              </p>
            ))
          }
        </article>
      </main>
    );
  }
}

RecipeDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default RecipeDetails;
