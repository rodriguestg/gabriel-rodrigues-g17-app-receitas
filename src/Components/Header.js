import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

class Header extends Component {
  constructor() {
    super();
    this.state = { searchBar: false };
    // Quando usar é necessário passar duas props.
    // renderOnScreen e title
    // renderOnScreen é um bool
    // title é uma string
  }

  render() {
    const { renderOnScreen, title } = this.props;
    const { searchBar } = this.state;
    const searchElement = (
      <div>
        <button
          type="button"
          onClick={ () => this.setState((prev) => ({ searchBar: !prev.searchBar })) }
        >
          <img src={ searchIcon } data-testid="search-top-btn" alt="search-icon" />
        </button>
        {
          searchBar && <input type="text" />
        }
      </div>
    );
    return (
      <header>
        <Link to="/">
          <img src={ profileIcon } data-testid="profile-top-btn" alt="user-icon" />
        </Link>
        {
          renderOnScreen && searchElement
        }
        <h1 data-testid="page-title">{title}</h1>
      </header>
    );
  }
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
  renderOnScreen: PropTypes.bool.isRequired,
};
export default Header;
