import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Register from './components/Register';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />

          <Switch>
            <Route path='/Register' component={Register} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
