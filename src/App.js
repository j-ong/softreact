import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Songs from './components/card/Songs';
import './App.css';

// Soft UI Import
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';
import './assets/css/soft-ui-dashboard.css?v=1.0.3';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Zubir Said" icon="fas fa-couch" />
        <div className="container">
          <Songs />
        </div>
      </div>
    );
  }
}

export default App;
