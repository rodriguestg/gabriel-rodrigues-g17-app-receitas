
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';
import renderWithRouterAndRedux from './Helpers/renderWithRouterAndRedux';

describe('Recipes page tests', () => {
  test('Check if the components are rendered', async () => {
  renderWithRouterAndRedux(<App />, undefined, '/foods');

    const topBtnForSearch = screen.getByTestId('search-top-btn');
    userEvent.click(topBtnForSearch);
    const foodInput = screen.getByTestId('search-input');
    const subBtn = screen.getByTestId('exec-search-btn');
    window.alert = jest.fn().mockImplementation(() => 'Selecione uma opção');
    userEvent.type(foodInput, 'y');
    userEvent.click(subBtn);
    expect(window.alert).toHaveBeenCalled();
    expect(window.alert()).toBe('Selecione uma opção');
  });
  test('Check if the components are rendered', async () => {
    renderWithRouterAndRedux(<App />, undefined, '/drinks');
  
      const topBtnForSearch = screen.getByTestId('search-top-btn');
      userEvent.click(topBtnForSearch);
      const foodInput = screen.getByTestId('search-input');
      const subBtn = screen.getByTestId('exec-search-btn');
      window.alert = jest.fn().mockImplementation(() => 'Selecione uma opção');
      userEvent.type(foodInput, 'y');
      userEvent.click(subBtn);
    });
});
