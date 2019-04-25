import React, { Component } from 'react';
import '../styles/App.css';
import Personal from './Personal';
import Professional from './Professional';
import VT from '../images/vt.png'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={VT}/>
            <h1 className="App-title">Test</h1>
            <Link to="/personal">Get to Know me Personally</Link>
            <Link to="/professional">Get to Know me Professionally</Link>
          </header>
        </div>
        <Switch>
          <Route path='/personal' component={Personal} />
          <Route path='/professional' component={Professional} />
        </Switch>

      </Router>
    );
  }
}
export default App;
