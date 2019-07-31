import React from 'react';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history'; // Enable navigation from anywhere of the code

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
