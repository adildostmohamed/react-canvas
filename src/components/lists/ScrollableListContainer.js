import React, { Component } from 'react';
import base from 'config/base';

import ScrollableList from 'components/lists/ScrollableList';

export default class ScrollableListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {}
    }
  }
  componentDidMount(){
    this.firebaseRef = base.syncState(this.props.listToSync,{
      context: this,
      state: 'list'
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.firebaseRef);
  }
  render() {
    return (
      <ScrollableList listData={this.state.list} />
    )
  }
}
