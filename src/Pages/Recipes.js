import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

class Recipes extends React.Component {
  render() {
    return (
      <div>
        <Header renderOnScreen title="Receitas" />
        <Footer />
      </div>
    );
  }
}

export default Recipes;
