import React, { Component } from 'react';
import String from './String';
import './App.css';

const NOTES = 'EADGBE'.split('');

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Tune Up</h1>
        </header>
        <section className="string-buttons">
          { NOTES.map((name, i) =>
            <String name={name} onClick={()=>console.log("clicked "+name)} />
          ) }
        </section>
      </div>
    );
  }
}

export default App;
