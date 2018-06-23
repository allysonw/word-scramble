import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import './index.css';
import './bootstrap/css/bootstrap.css';
import './bootstrap/css/bootstrap-theme.css';

import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import WebFont from 'webfontloader';

WebFont.load({
    google: {
      families: ['Droid Sans', 'Droid Serif', 'Fredericka the Great', 'Eater', 'Pacifico', 'Roboto Condensed']
    }
});

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
