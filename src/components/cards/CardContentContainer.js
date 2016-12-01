import React, { Component } from 'react';
import base from 'config/base';

import CardContent from 'components/cards/CardContent';

class CardContentContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contentCards: []
    }
  }
  componentDidMount(){
    this.firebaseRef = base.syncState(this.props.cardsToSync,{
      context: this,
      state: 'contentCards',
      asArray: true
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.firebaseRef);
  }
  render() {
    return (
      <div className="m-card-row">
        { this.state.contentCards.map((card, index) => {
          return (
            <CardContent key={index} content={this.state.contentCards[index]} />
          )
        })}
      </div>
    )
  }
}

export default CardContentContainer;
