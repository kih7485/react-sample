import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './common/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root'),
);
