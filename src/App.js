import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Recipes from './Pages/Recipes';
import RecipeDetails from './Pages/RecipeDetails';
import Profile from './Pages/Profile';
import FavoriteRecipes from './Pages/FavoriteRecipes';
import DoneRecipes from './Pages/DoneRecipes';
import RecipeInProgress from './Pages/RecipeInProgress';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Recipes } />
      <Route exact path="/drinks" component={ Recipes } />
      <Route exact path="/foods/:id" component={ RecipeDetails } />
      <Route exact path="/drinks/:id" component={ RecipeDetails } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
      <Route exact path="/foods/:id/in-progress" component={ RecipeInProgress } />
      <Route exact path="/drinks/:id/in-progress" component={ RecipeInProgress } />
    </Switch>
  );
}

export default App;
