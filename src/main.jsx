import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Test from './Test.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Test />
  </Router>
);
