import React from 'react';
import ReactDOM from 'react-dom';
//import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
//import { Router, Route } from 'react-router';
import './index.css';
import App from './App';
//import About from './components/About'
//import NavBar from './components/navbar'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

//ReactDOM.render(<Counter props='props' />, document.getElementById('root'));
ReactDOM.render(<App  />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
