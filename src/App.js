import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Clock from './components/Clock';

class App extends Component {
  render() {
    return (
      <div>
        <Clock />
      </div>
    );
  }
}

export default App;
