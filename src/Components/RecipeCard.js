import PropTypes from 'prop-types';
import React from 'react';

class RecipeCard extends React.Component {
  render() {
    const { image, cardName, index } = this.props;
    return (
      <div className="recipes">
        <img
          data-testid={ `${index}-card-img` }
          src={ image }
          alt={ cardName }
          className="recipe-img"
        />
        <p data-testid={ `${index}-card-name` }>{ cardName }</p>
      </div>
    );
  }
}

RecipeCard.propTypes = {
  cardName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeCard;
