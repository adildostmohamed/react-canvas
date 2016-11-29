import React, { Component } from 'react';

import EmbeddedForm from 'components/forms/EmbeddedForm';

export default class EmbeddedFormContainer extends Component {
  render() {
    return (
      <EmbeddedForm form={this.props.form}/>
    )
  }
}
