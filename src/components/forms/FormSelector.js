import React, { Component } from 'react';

import ListItem from 'components/lists/ListItem';
import EmbeddedFormContainer from 'components/forms/EmbeddedFormContainer';

export default class FormSelector extends Component {
  constructor(props) {
    super(props);

    this.renderListTitle = this.renderListTitle.bind(this);
    this.renderListItems = this.renderListItems.bind(this);
    this.setFormToView = this.setFormToView.bind(this);
    this.state = {
      form: {}
    }
  }
  setFormToView(event, item) {
    //prevent default action
    event.preventDefault();
    //create a new copy of the existing form state
    const form = {...this.state.form};

    //set the value of the src property to be the link value of the item that was clicked
    form.src = item.link;

    //update state with the new value of the form object
    this.setState({form});
  }
  renderListTitle() {
    if(this.props.listData && this.props.listData.hasOwnProperty("title")) {
      return (
        <div className="m-scroll-list__title-wrapper">
          <h3 className="m-scroll-list__title">{ this.props.listData.title }</h3>
        </div>
      )
    }
    return null;
  }
  renderListItems() {
    if(this.props.listData && this.props.listData.hasOwnProperty("items")) {
      const itemKeys = Object.keys(this.props.listData.items);
      return itemKeys.map( (itemKey, index) => {
        const item = this.props.listData.items[itemKey];
        return <ListItem key={index} item={item} handleClick={ this.setFormToView }/>
      });
    }
    return null;
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="m-scroll-list__wrapper">
            { this.renderListTitle() }
            <ul className="m-scroll-list">
              { this.renderListItems() }
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-md-8">
          <EmbeddedFormContainer form={this.state.form}/>
        </div>
      </div>

    )
  }
}
