import React, { Component } from 'react';
import WishList from './WishList';
import './App.css';
import data from './data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span className="App-logo"><span role="img" aria-label="WishList bébé">👶</span></span>
          <h1 className="App-title">Bébé <abbr title="Liste de souhaits">WishList</abbr></h1>
        </header>
        <section className="container">
          <WishList data={data} />
        </section>        
      </div>
    );
  }
}

export default App;
