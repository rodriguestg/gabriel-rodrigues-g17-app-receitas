import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Foods from '../Components/Foods';
import Drinks from '../Components/Drinks';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

class Recipes extends React.Component {
  render() {
    const { history: { location: { pathname } }, history } = this.props;

    return (
      <div>
        <Header renderOnScreen title="Receitas" url={ pathname } history={ history } />
        { pathname === '/foods' ? <Foods /> : <Drinks /> }
        <Footer />
      </div>
    );
  }
}

Recipes.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(null, null)(Recipes);
