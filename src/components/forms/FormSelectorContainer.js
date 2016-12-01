import React, { Component } from 'react';
import base from 'config/base';

import FormSelector from 'components/forms/FormSelector';

export default class FormSelectorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: {}
    }
  }
  componentDidMount(){
    this.firebaseRef = base.syncState(this.props.formsToSync,{
      context: this,
      state: 'forms'
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.firebaseRef);
  }
  render() {


    return (
      <FormSelector listData={this.state.forms} />
    )
  }
}
