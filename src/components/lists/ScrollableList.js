import React, { Component } from 'react';

import ListItem from 'components/lists/ListItem';

export default class ScrollableList extends Component {
  constructor(props) {
    super(props);

    this.renderListTitle = this.renderListTitle.bind(this);
    this.renderListItems = this.renderListItems.bind(this);
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
      return this.props.listData.items.map( (item, index) => {
        return (
          <ListItem key={index} item={item} />
        )
      })
    }
    return null;
  }

  render() {
    return (
      <div className="m-scroll-list__wrapper">
        { this.renderListTitle() }
        <ul className="m-scroll-list">
          { this.renderListItems() }
        </ul>
      </div>
    )
  }
}
