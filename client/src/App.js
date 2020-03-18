import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Recipes from './components/Recipes/Recipes';


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

        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
