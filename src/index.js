import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/styles.scss';
import { store } from './store/store'
import { Provider } from 'react-redux';
import { RootCmp } from './RootCmp.jsx';


import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RootCmp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

