import React from 'react';
import './App.css';
import Appbar from './components/Appbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Appbar />
      <Switch>
        <Route path='/' excat />
      </Switch>
    </Router>
    </>
  );
}

export default App;
