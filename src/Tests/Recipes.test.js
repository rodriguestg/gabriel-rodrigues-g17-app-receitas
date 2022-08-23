import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';
import renderWithRouterAndRedux from './Helpers/renderWithRouterAndRedux';
import { mockedResolvedIngredientRequest, mockedResolvedNameAndFirstLetterRequest, mockedResolvedOneItemRequest } from './mocks/mockData';
import fetchFoodsObject from '../services/fetchFoodAPIs';

describe('Recipes page tests', () => {
  test('Check if the components are rendered', async () => {
    jest.spyOn(fetchFoodsObject, 'fetchFoodsMainIngredient').mockResolvedValue(mockedResolvedIngredientRequest);
    jest.spyOn(fetchFoodsObject, 'fetchFoodsName').mockResolvedValue(mockedResolvedNameAndFirstLetterRequest)
    jest.spyOn(fetchFoodsObject, 'fetchFoodsFirstLetter').mockResolvedValue(mockedResolvedNameAndFirstLetterRequest);

    const { history } = renderWithRouterAndRedux(<App />, undefined, '/foods');

    const topBtnForSearch = screen.getByTestId('search-top-btn');
    userEvent.click(topBtnForSearch);

    const foodInput = screen.getByTestId('search-input');
    const ingredientRadio = screen.getByTestId('ingredient-search-radio');
    const nameRadio = screen.getByTestId('name-search-radio');
    const firstLetterRadio = screen.getByTestId('first-letter-search-radio');
    const subBtn = screen.getByTestId('exec-search-btn');

    userEvent.type(foodInput, 'bread');
    userEvent.click(ingredientRadio);
    userEvent.click(subBtn);
    await waitFor(() => expect(fetchFoodsObject.fetchFoodsMainIngredient).toHaveBeenCalled());
    foodInput.value = '';

    userEvent.type(foodInput, 'lasagna');
    userEvent.click(nameRadio);
    userEvent.click(subBtn);
    await waitFor(() => expect(fetchFoodsObject.fetchFoodsName).toHaveBeenCalled());
    foodInput.value = '';

    userEvent.type(foodInput, 'l');
    userEvent.click(firstLetterRadio);
    userEvent.click(subBtn)
    await waitFor(() => expect(fetchFoodsObject.fetchFoodsFirstLetter).toHaveBeenCalled());
    foodInput.value = '';

    window.alert = jest.fn().mockImplementation(() => 'Your search must have only 1 (one) character');
    userEvent.type(foodInput, 'lasagna');
    userEvent.click(firstLetterRadio);
    userEvent.click(subBtn);
    expect(window.alert).toHaveBeenCalled();
    expect(window.alert()).toBe('Your search must have only 1 (one) character');
    foodInput.value = '';

    window.alert = jest.fn().mockImplementation(() => 'Sorry, we haven\'t found any recipes for these filters.');
    jest.spyOn(fetchFoodsObject, 'fetchFoodsFirstLetter').mockResolvedValue({ meals: null });
    userEvent.type(foodInput, 'y');
    userEvent.click(firstLetterRadio);
    userEvent.click(subBtn);
    await waitFor(() => expect(fetchFoodsObject.fetchFoodsFirstLetter).toHaveBeenCalled());
    expect(window.alert).toHaveBeenCalled();
    expect(window.alert()).toBe('Sorry, we haven\'t found any recipes for these filters.');
    foodInput.value = '';

    jest.spyOn(fetchFoodsObject, 'fetchFoodsName').mockResolvedValue(mockedResolvedOneItemRequest);
    userEvent.type(foodInput, 'bread');
    userEvent.click(nameRadio);
    userEvent.click(subBtn);
    await waitFor(() => expect(fetchFoodsObject.fetchFoodsFirstLetter).toHaveBeenCalled());

    expect(history.location.pathname).toBe('/foods/52792');
  });
});