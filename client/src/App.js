import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Recipes from './components/Recipes/Recipes';
import Recipe from './components/Recipe/Recipe';


const App = () => {
  return (
    <BrowserRouter>
    <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path = '/' component = { Home } />
          <Route path = '/about' component = { About }/>
          <Route path = '/contact' component = { Contact }/>
          <Route exact path = '/recipes' component = { Recipes } />
          <Route exact path = '/:recipeId' component = { Recipe } />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
