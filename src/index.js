import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import GlobalStyle from './GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
