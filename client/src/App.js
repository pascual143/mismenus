import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Home from './components/Home/Home';
import Recipes from './components/Recipes/Recipes';
import Recipe from './components/Recipe/Recipe';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';

const App = () =>  {
  return (
    <BrowserRouter basename='/misRecetas/'>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path = '/' component = { Home } />
          <Route path = '/about' component = { About } />
          <Route path = '/contact' component = { Contact } />
          <Route exact path = '/recipes' component = { Recipes } />
          <Route exact path = '/:recipeId' component = { Recipe } />
          <Route component = { NotFound } />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;