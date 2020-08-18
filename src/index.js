import React from 'react';
import ReactDOM from 'react-dom';
// BrowserRouter wraps our app to allows us to route to different pages within the browser
import { BrowserRouter } from 'react-router-dom';
// Provider (the parent class component of everything in our app) allows us to get access to everything 
// related to the store that we're gonna put all of the code we're gonna store on our redux state. 
import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';
import App from './App';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


