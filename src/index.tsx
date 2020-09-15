import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Modal from 'react-modal';
import './index.css';
import App from './App';

Modal.setAppElement('#root');

if (process.env.NODE_ENV !== 'production') {
  import('react-axe').then(axe => {
    axe.default(React, ReactDOM, 1000);
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root'),
    );
  });
} else {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
