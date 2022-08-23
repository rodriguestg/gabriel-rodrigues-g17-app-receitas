import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Recipes from './Pages/Recipes';
import RecipeDetails from './Pages/RecipeDetails';
import Profile from './Pages/Profile';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Recipes } />
      <Route exact path="/drinks" component={ Recipes } />
      <Route exact path="/foods/:id" component={ RecipeDetails } />
      <Route exact path="/drinks/:id" component={ RecipeDetails } />
      <Route exact path="/profile" component={ Profile } />
    </Switch>
  );
}

export default App;
