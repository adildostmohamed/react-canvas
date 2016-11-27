import React, { Component } from 'react';

class CardContent extends Component {
  constructor(props) {
    super(props);
    this.renderCardTitle = this.renderCardTitle.bind(this);
    this.renderCardSubtitle = this.renderCardSubtitle.bind(this);
    this.renderCardText = this.renderCardText.bind(this);
    this.renderCardActions = this.renderCardActions.bind(this);
  }
  renderCardTitle() {
    if(this.props.content.title) {
      return (
        <h3 className="card__title">{this.props.content.title}</h3>
      )
    } else {
      return null;
    }

  }
  renderCardSubtitle() {
    if(this.props.content.subtitle) {
      return (
        <p className="card__subtitle">{this.props.content.subtitle}</p>
      )
    }
    return null;
  }
  renderCardText() {
    if(this.props.content.text) {
      return (
        <p className="card__text">{this.props.content.text}</p>
      )
    }
    return null;
  }
  renderCardActions() {
    if(this.props.content.actions) {
      return this.props.content.actions.map( (action, index) => {
        return (
          <a className="card__action" key={index} href={action.target}>
            {action.label}
          </a>
        )
      });
    }
    return null;
  }
  render() {
    return (
      <div className="card">
        <div className="card__title-wrapper">
          {this.renderCardTitle()}
          {this.renderCardSubtitle()}
        </div>
        <div className="card__text-wrapper">
          {this.renderCardText()}
        </div>
        <div className="card__actions-wrapper">
          {this.renderCardActions()}
        </div>
      </div>
    )
  }
}

export default CardContent;
