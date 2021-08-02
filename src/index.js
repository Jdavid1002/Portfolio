import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import Store from './Config/Store'
import './css/all.css'
import './css/index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store} > 
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
