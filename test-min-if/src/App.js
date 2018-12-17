import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { get } from './store';

class App extends Component {
  render() {
    const flag = get();
    const label = "uydhgcoybacibcygxcbkdlvx8BXJKCOYGXIAJbcpiyAGCC";
    let result = "undefined";
    if(flag){
      result = "true";
    }else{
      result = "false";
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            the flag is {result}
          </p>
          <p>{label}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
