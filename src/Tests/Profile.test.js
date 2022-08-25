import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';
import renderWithRouterAndRedux from './Helpers/renderWithRouterAndRedux';

const login = () => {
  const inputEmail = screen.getByTestId("email-input");
  expect(inputEmail).toBeDefined();

  const inputPassword = screen.getByTestId("password-input");
  expect(inputPassword).toBeDefined();

  const submitButton = screen.getByTestId("login-submit-btn");
  expect(submitButton).toBeDefined();   
  
  userEvent.type(inputEmail, 'juca@trybe.com');
  userEvent.type(inputPassword, '1234567');
  userEvent.click(submitButton);
}

describe('Testando a página Profile', () => {
  test('se os botões de receita favorita, receitas e logout estão na tela', () => {
    const { history } = renderWithRouterAndRedux(<App/>);
    login();
    history.push('/profile');
    const btnRecipesFavorites = screen.getByTestId("profile-favorite-btn");
    expect(btnRecipesFavorites).toBeDefined();
  
    const btnDoneRecipes = screen.getByTestId("profile-done-btn");
    expect(btnDoneRecipes).toBeDefined();
  
    const btnLogout = screen.getByTestId("profile-logout-btn");
    expect(btnLogout).toBeDefined();  
  });
  test('testa se o e-mail aparece correto na tela', () => {
    const { history } = renderWithRouterAndRedux(<App/>);
    login();
    history.push('/profile');
    const emailLocalStorage = screen.getByTestId("profile-email");
    expect(emailLocalStorage).toBeDefined();
    expect(emailLocalStorage).toHaveTextContent('juca@trybe.com');
  });
  test('se os botão de receita favorita foi para a rota correta', () => {
    const { history } = renderWithRouterAndRedux(<App />, undefined, '/profile');
    const btnRecipesFavorites = screen.getByTestId("profile-favorite-btn");
    expect(btnRecipesFavorites).toBeDefined();
    userEvent.click(btnRecipesFavorites);
    const currentPage = history.location.pathname;
    expect(currentPage).toBe('/favorite-recipes');
  });
  test('se os botão de done receitas foi para a rota correta', () => {
    const { history } = renderWithRouterAndRedux(<App />, undefined, '/profile');
    const btnDoneRecipes = screen.getByTestId("profile-done-btn");
    expect(btnDoneRecipes).toBeDefined();
    userEvent.click(btnDoneRecipes);
    const currentPage = history.location.pathname;
    expect(currentPage).toBe('/done-recipes');
  });
  test('se os botão de logout foi para a rota correta', () => {
    const { history } = renderWithRouterAndRedux(<App />, undefined, '/profile');
    const btnLogout = screen.getByTestId("profile-logout-btn");
    expect(btnLogout).toBeDefined();
    userEvent.click(btnLogout);
    const currentPage = history.location.pathname;
    expect(currentPage).toBe('/');
  });
});
