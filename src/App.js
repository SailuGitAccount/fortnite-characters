import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Shop from './components/Shop';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Shop}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
