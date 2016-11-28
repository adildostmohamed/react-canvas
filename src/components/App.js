import React, { Component } from 'react';

import {} from 'styles/main.scss';

import Header from 'components/Header';
import CardContentContainer from 'components/CardContentContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="container">
          <h1>Hello world, lets play</h1>
          <CardContentContainer />
        </main>
      </div>
    );
  }
}

export default App;
