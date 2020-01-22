import React from 'react';
import ReactDOM from 'react-dom';
import { LastLocationProvider } from 'react-router-last-location';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './components/App/App';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <LastLocationProvider>
        <App />
      </LastLocationProvider>
    </Router>
  </Provider>,
  document.getElementById('root'));
