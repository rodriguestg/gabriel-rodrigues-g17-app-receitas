import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import Header from '../Components/Header';

class DoneRecipes extends React.Component {
  render() {
    return (
      <div>
        <button type="button" data-testid="filter-by-all-btn">All</button>
        <button type="button" data-testid="filter-by-food-btn">Foods</button>
        <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
        <img src="" alt="" data-testid={ `${index}-horizontal-image` } />
        <p data-testid={ `${index}-horizontal-top-text` }>Categoria</p>
        <p data-testid={ `${index}-horizontal-name` }>Nome</p>
        <p data-testid={ `${index}-horizontal-done-date` }>Data</p>
        <button type="button" data-testid={ `${index}-horizontal-share-btn` }>
          Compartilhar
        </button>
        <p data-testid={ `${index}-${tagName}-horizontal-tag` }>Tags</p>
      </div>
    );
  }
}

// DoneRecipes.propTypes = {
//   history: PropTypes.objectOf(PropTypes.any).isRequired,
// };

export default connect(null, null)(DoneRecipes);
