import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailsComponent from '../Components/DetailsComponent';
import Loading from '../Components/Loading';

class RecipeDetails extends Component {
  constructor() {
    super();
    this.state = { unmount: false };
  }

  changeUnmount = () => {
    this.setState(() => ({
      unmount: true,
    }), () => {
      this.setState({
        unmount: false,
      });
    });
  }

  render() {
    const { match: { params: { id } }, match: { url } } = this.props;
    const { unmount } = this.state;
    return !unmount
      ? <DetailsComponent changeUnmount={ this.changeUnmount } id={ id } url={ url } />
      : <Loading />;
  }
}

RecipeDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default RecipeDetails;
