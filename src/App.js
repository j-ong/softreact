import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Songs from './components/card/Songs';
import Song from './components/card/Song';
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
    song: [],
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

  //get a single song
  getSong = async (songid) => {
    this.setState({ loading: true });

    const res = await axios.get(`https://chriskhoo.net/ZS/0/${songid}`);

    var data = res.data;
    var loopData = [];
    for (var i = 0; i < data.length; i++) {
      loopData.push(data[i]._fields[2].properties);
    }

    // loopData = Object.values(loopData);
    // console.log(loopData);

    this.setState({ song: loopData, loading: false });

    // loopData.forEach(([key, value]) => {
    //   console.log(key);
    //   console.log(value);
    // });
  };

  render() {
    const { song, songlist, loading } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar title="Zubir Said" icon="fas fa-couch" />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <div className="container">
                  <Songs loading={loading} songs={songlist} />
                </div>
              )}
            />
            <Route
              exact
              path="/song/:id"
              render={(props) => (
                <Song
                  {...props}
                  getSong={this.getSong}
                  song={song}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
