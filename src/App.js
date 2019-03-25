import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OpenDialog from './containers/openDialog';
import ButtonAppBar from './containers/menuBar';
import SimpleCard from './containers/simpleCard';

class App extends Component {
  showProps = ()=>{
    console.log("showprops")
    console.log()
  }

  render() {
    return (
      <div className="App">
        <ButtonAppBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <SimpleCard/>
          <OpenDialog/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            HELLO REACT?
          </a>
        </header>
      </div>
    );
  }
}

export default App;
