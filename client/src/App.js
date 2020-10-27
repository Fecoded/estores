import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './pages';

// Styles
import './styles/style.css';

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
