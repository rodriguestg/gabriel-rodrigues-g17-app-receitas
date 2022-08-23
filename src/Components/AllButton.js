import PropTypes from 'prop-types';
import React from 'react';

class AllButton extends React.Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button
        data-testid="All-category-filter"
        type="button"
        name="All-category"
        onClick={ handleClick }
      >
        All
      </button>
    );
  }
}

AllButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default AllButton;
