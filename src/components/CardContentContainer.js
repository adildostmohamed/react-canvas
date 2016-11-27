import React, { Component } from 'react';

import CardContent from 'components/CardContent';

class CardContentContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardContent: this.props.cardContent
    }
  }
  render() {
    return (
      <CardContent content={this.state.cardContent} />
    )
  }
}

export default CardContentContainer;
