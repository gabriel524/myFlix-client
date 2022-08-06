import React from 'react';
import ReactDOM from "react-dom/client";
import MainView from './components/main-view/main-view';

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

// Main component (will eventually use all the others)
/*export class MyFlixApplication extends React.Component {
  render() {
    return (
      <container>
        <MainView />
      </container>
    );
  }
}*/

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <MainView />
  </React.StrictMode>
);

