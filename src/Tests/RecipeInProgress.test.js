import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';
import renderWithRouterAndRedux from './Helpers/renderWithRouterAndRedux';
import { mockedResolvedIngredientRequest, mockedResolvedNameAndFirstLetterRequest, mockedResolvedOneItemRequest } from './mocks/mockData';
import fetchFoodsObject from '../services/fetchFoodAPIs';
import RecipeInProgress from '../Pages/RecipeInProgress';

describe('RecipesInProgress', () => {
  test('if the correct elements are on the screen', async () => {
    jest.spyOn(fetchFoodsObject, 'fetchFoodsById').mockResolvedValue(mockedResolvedOneItemRequest);
    renderWithRouterAndRedux(<App />, undefined, '/foods/52792/in-progress');

    expect(fetchFoodsObject.fetchFoodsById).toHaveBeenCalled();
    const photo = screen.getByTestId("recipe-photo");
    expect(photo).toBeDefined();
    const title = screen.getByTestId("recipe-title");
    expect(title).toBeDefined();
    const shareBtn = screen. getByTestId("share-btn");
    userEvent.click(shareBtn);
    const favBtn = screen. getByTestId("favorite-btn");
    userEvent.click(favBtn);
    const instructions = screen.getByTestId("instructions");
    expect(instructions).toBeDefined();
  })
})