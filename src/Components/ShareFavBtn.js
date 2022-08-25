import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

class ShareFavBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      favorite: false,
      copy: false,
    };
  }

  handleUrl() {
    const url = window.location.href;
    const newUrl = url.slice(0, url.lastIndexOf('/'));
    if (url.includes('in-progress')) {
      return newUrl;
    }
    return url;
  }

  handleShare = () => {
    const { copy } = this.state;
    // const RANGE = 99999;
    const TIMER = 1200;
    const urlElement = document.createElement('input');
    const link = document.querySelector('#shareBtn');
    urlElement.focus();
    urlElement.select();
    // urlElement.setSelectionRange(0, RANGE); /* Para mobile devices */
    navigator.clipboard.writeText(this.handleUrl());
    link.style.display = 'block';
    setTimeout(() => { link.style.display = 'none'; },
      TIMER);
    console.log(copy);
    this.setState({ copy: true });
    console.log(copy);
  };

  handleFavoriteRecipes = () => {
    const { favorite } = this.state;
    const { infoObj: inf } = this.props;
    const getStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favorite) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([...getStorage, inf]));
    } else {
      const getcorrect = getStorage
        .find((inObj) => inObj.idMeal === inf.idMeal || inObj.idDrink === inf.idDrink);
      const updatedFavRecipes = getStorage
        .filter((inObj) => inObj.idMeal !== getcorrect.idMeal
        || inObj.idDrink !== getcorrect.idDrink);
      localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavRecipes));
    }
  }

  render() {
    const { favorite, copy } = this.state;
    return (
      <div>
        <div id="shareBtn">
          { copy ? (<h3>Link copied!</h3>) : (null) }
          <button
            type="button"
            data-testid="share-btn"
            onClick={ this.handleShare }
          >
            <img src={ shareIcon } alt="shareIcon" />
          </button>
        </div>
        <button
          type="button"
          data-testid="favorite-btn"
          onClick={ () => {
            this.setState((prevState) => ({
              favorite: !prevState.favorite,
            }), () => this.handleFavoriteRecipes());
          } }
        >
          <img src={ favorite ? blackHeartIcon : whiteHeartIcon } alt="whiteHeartIcon" />
        </button>
      </div>
    );
  }
}

ShareFavBtn.propTypes = {
  infoObj: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ShareFavBtn;
