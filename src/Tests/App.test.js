import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';
import renderWithRouterAndRedux from './Helpers/renderWithRouterAndRedux';
import Recipes from '../Pages/Recipes';

describe('Testa a página de login', () => {
  test('se os componentes se encontram na tela', () => {
    renderWithRouterAndRedux(<App/>);

    const inputEmail = screen.getByTestId("email-input");
    expect(inputEmail).toBeDefined();

    const inputPassword = screen.getByTestId("password-input");
    expect(inputPassword).toBeDefined();

    const submitButton = screen.getByTestId("login-submit-btn");
    expect(submitButton).toBeDefined();   
    
    userEvent.type(inputEmail, 'juca@trybe.com');
    userEvent.type(inputPassword, '1234567');
    userEvent.click(submitButton);
  });

  describe('Testing Footer Component', () => {
    it('check footer elements', () => {
      renderWithRouterAndRedux(<Recipes/>);
      const footer = screen.getByTestId('footer');
      const drinksBtn = screen.getByTestId('drinks-bottom-btn');
      const foodBtn = screen.getByTestId('food-bottom-btn');
      expect(footer).toBeInTheDocument();
      expect(drinksBtn).toBeInTheDocument();
      expect(foodBtn).toBeInTheDocument();

      userEvent.click(foodBtn);
      userEvent.click(drinksBtn);
    });
  });
})
