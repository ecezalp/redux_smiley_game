import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from "./components/displays/welcome"
import SmileyGrid from "./components/displays/smileyGrid"
import TargetSmileyDisplayer from './components/displays/targetSmileyDisplayer'
import ButtonList from './components/displays/buttonList'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="welcome">
           <Welcome />
        </div>
          <div className="target-smiley-displayer">
              <TargetSmileyDisplayer />
          </div>
          <div className="button-list">
            <ButtonList />
          </div>
          <div className="smiley-grid">
              <SmileyGrid />
          </div>
      </div> 
    );
  }
}

export default App;
