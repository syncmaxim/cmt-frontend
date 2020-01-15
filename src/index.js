import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './components/App/App';
import store from './redux/store';

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));
