import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/styles.scss';
import { RootCmp } from './RootCmp.jsx';


import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RootCmp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

