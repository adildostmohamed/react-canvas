import React, { Component } from 'react';

import {} from 'styles/main.scss';

import Header from 'components/Header';
import CardContentContainer from 'components/CardContentContainer';

//import helper data to render card components
import { contentCardOne, contentCardTwo } from '../mock-data/card-data';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <h1>Hello world, lets play</h1>
          <CardContentContainer cardContent={contentCardOne} />
          <CardContentContainer cardContent={contentCardTwo} />
        </main>
      </div>
    );
  }
}

export default App;
