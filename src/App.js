import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Songs from './components/card/Songs';
import axios from 'axios';
import './App.css';

// Soft UI Import
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';
import './assets/css/soft-ui-dashboard.css?v=1.0.3';

class App extends Component {
  //start of api to get musical work
  state = {
    songlist: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get('https://chriskhoo.net/ZS/0/MusicalWork');

    var data = res.data;
    var loopData = [];
    for (var i = 0; i < data.length; i++) {
      loopData.push(data[i]._fields[2].properties);
    }

    this.setState({ songlist: loopData, loading: false });
    console.log(loopData);
  }
  //end of api to get musical work

  render() {
    return (
      <div className="App">
        <Navbar title="Zubir Said" icon="fas fa-couch" />
        <div className="container">
          <Songs loading={this.state.loading} songs={this.state.songlist} />
        </div>
      </div>
    );
  }
}

export default App;
