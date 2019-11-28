import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter basename = {'/your-health'}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker();
