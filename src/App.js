import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Content from './components/Content';
import Content1 from './components/Content1';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" exact component={Content} />
          <Route path="/page2" exact component={Content1} />
        </div>
      </Router>
    );
  }
}

export default App;
