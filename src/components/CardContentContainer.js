import React, { Component } from 'react';
import base from 'config/base';

import CardContent from 'components/CardContent';

class CardContentContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contentCards: [],
      cardIsLoading: true
    }
  }
  componentDidMount(){
    this.firebaseRef = base.syncState(`cards`,{
      context: this,
      state: 'contentCards',
      asArray: true,
      then() {
        this.setState({cardIsLoading: false})
      }
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.firebaseRef);
  }
  render() {
    return (
      <div className="row card-row">
        { this.state.contentCards.map((card, index) => {
          return (
            <CardContent key={index} content={this.state.contentCards[index]} cardIsLoading={this.state.cardIsLoading}/>
          )
        })};
      </div>
    )
  }
}

export default CardContentContainer;
