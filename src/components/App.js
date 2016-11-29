import React, { Component } from 'react';

import {} from 'styles/main.scss';

import Header from 'components/layout/Header';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="main container">
          { this.props.children }
        </main>
      </div>
    )
  }
}

export default App;
