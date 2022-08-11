import React from 'react';
import ReactDOM from "react-dom/client";
import MainView from './components/main-view/main-view';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import moviesApp from './reducers/reducers';

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

const store = createStore(moviesApp);

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
const root = ReactDOM.createRoot(container);
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <MainView />
  </React.StrictMode>
  </Provider>
);

