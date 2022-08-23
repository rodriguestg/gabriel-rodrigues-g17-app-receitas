import PropTypes from 'prop-types';
import React from 'react';
// import fetchFoodsObject from '../services/fetchFoodAPIs';

class CategoryButton extends React.Component {
  render() {
    const { categoryName, handleClick } = this.props;
    return (
      <button
        data-testid={ `${categoryName}-category-filter` }
        type="button"
        name={ categoryName }
        onClick={ handleClick }
      >
        { categoryName }

      </button>
    );
  }
}

CategoryButton.propTypes = {
  categoryName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CategoryButton;
