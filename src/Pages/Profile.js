import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Profile extends React.Component {
  getRecipes = () => {
    const { history } = this.props;
    history.push('/done-recipes');
  };

  getFavoriteRecipes = () => {
    const { history } = this.props;
    history.push('/favorite-recipes');
  };

  logout = () => {
    const { history } = this.props;
    localStorage.clear();
    history.push('/');
  };

  render() {
    const usuario = localStorage.getItem('user');
    const { email } = JSON.parse(usuario);

    return (
      <div>
        <h1 data-testid="profile-email">{ email }</h1>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ this.getRecipes }
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ this.getFavoriteRecipes }
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ this.logout }
        >
          Logout
        </button>
      </div>
    );
  }
}

Profile.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(null, null)(Profile);
