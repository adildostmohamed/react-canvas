import React, { Component } from 'react';

export default class ListItem extends Component {
  constructor(props) {
    super(props);

    this.renderListItemName = this.renderListItemName.bind(this);
    this.renderListItemDesc = this.renderListItemDesc.bind(this);
    this.renderListItem = this.renderListItem.bind(this);
    this.handleListItemClick = this.handleListItemClick.bind(this);
  }

  //a helper function to check if the list item was passed in a function to run when clicked as a a prop, if so it will call that function and pass back the item to the function
  handleListItemClick(event) {
    if(this.props.hasOwnProperty("handleClick")){
      this.props.handleClick(event, this.props.item)
    };
  }

  renderListItemName() {
    if(this.props.item && this.props.item.hasOwnProperty("name")){
      return (
        <p className="m-list-item__name">{this.props.item.name}</p>
      )
    };
    return null;
  }
  renderListItemDesc() {
    if(this.props.item && this.props.item.hasOwnProperty("desc")){
      return (
        <p className="m-list-item__desc">{this.props.item.desc}</p>
      )
    };
    return null;
  }
  //render the list item markup depending on whether the item has a link property or not
  renderListItem() {
    if(this.props.item && this.props.item.hasOwnProperty("link")) {
      return (
          <span className="m-list-item__content-wrapper">
            <a className="m-list-item__link" href={this.props.item.link}
              onClick={ (event) => this.handleListItemClick(event) }>
              { this.renderListItemName() }
              { this.renderListItemDesc() }
            </a>
          </span>
      )
    } else {
      return (
        <span className="m-list-item__content-wrapper">
          { this.renderListItemName() }
          { this.renderListItemDesc() }
        </span>
      )
    }
  }
  render() {
    return (
      <li className="m-list-item">
        { this.renderListItem() }
      </li>
    )
  }
}
