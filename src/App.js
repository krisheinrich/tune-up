import React, { Component } from 'react';
import String from './String';
import './App.css';

const NOTES = 'E2 A2 D3 G3 B3 E4'.split(' ');

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Tune Up</h1>
        </header>
        <section className="string-buttons">
          { NOTES.map((name, i) =>
            <String key={i} name={name} src={`audio/${name}.mp3`} />
          ) }
        </section>
      </div>
    );
  }
}

export default App;
