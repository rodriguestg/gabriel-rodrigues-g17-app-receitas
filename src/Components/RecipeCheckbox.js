import PropTypes from 'prop-types';
import React from 'react';
import '../Style/RecipeCheckbox.css';
// import {
//   addRecipe,
//   // getRecipesInProgress,
//   removeRecipeInProgress,
// } from '../services/recipesProgress';

class RecipeCheckbox extends React.Component {
  constructor() {
    super();
    this.state = {
      isChecked: false,
    };
  }

  componentDidMount() {
    // this.getRecipeProgressBack();
    this.handleClassName();
  }

  // getRecipeProgressBack = () => {
  //   const { element } = this.props;
  //   const progress = getRecipesInProgress();

  //   const setProgress = progress.some((ingredient) => ingredient.element === element);

  //   this.setState({
  //     isChecked: setProgress,
  //   });
  // }

  // addOrRemoveProgress = () => {
  //   const { element, index, id, pathname } = this.props;
  //   const { isChecked } = this.state;

  //   if (pathname.includes('foods') && !isChecked) {
  //     // const recipe = { meals: { [id]: [element] } };
  //     addRecipe(element);
  //   } else {
  //     const recipe = { meals: { [id]: { element } } };
  //     removeRecipeInProgress(recipe);
  //   }
  // }

  handleClassName = () => {
    const checkBox = document.querySelectorAll('.undone');
    return checkBox.forEach((element) => {
      if (element.checked) {
        const father = element.parentElement;
        father.className = 'done';
      }
    });
  }

  handleCheck = () => {
    this.setState((prevState) => ({
      isChecked: !prevState.isChecked,
    }));

    // this.addOrRemoveProgress();
  }

  render() {
    const { isChecked } = this.state;
    const { element, index } = this.props;

    return (
      <label
        data-testid={ `${index}-ingredient-step` }
        className={ isChecked ? 'done' : 'undone' }
        htmlFor={ `${element}-${index}` }
      >
        <input
          type="checkbox"
          id={ `${element}-${index}` }
          name={ element }
          checked={ isChecked }
          onChange={ this.handleCheck }
        />
        {element}
      </label>
    );
  }
}

RecipeCheckbox.propTypes = {
  element: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeCheckbox;
