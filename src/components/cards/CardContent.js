import React, { Component } from 'react';

class CardContent extends Component {
  constructor() {
    super();

    this.renderCardTitle = this.renderCardTitle.bind(this);
    this.renderCardSubtitle = this.renderCardSubtitle.bind(this);
    this.renderCardText = this.renderCardText.bind(this);
    this.renderCardActions = this.renderCardActions.bind(this);
  }

  renderCardTitle() {
    if(this.props.content && this.props.content.hasOwnProperty("title")) {
      return (
        <h3 className="m-card__title">{this.props.content.title}</h3>
      )
    }
    return null;
  }

  renderCardSubtitle() {
    if(this.props.content && this.props.content.hasOwnProperty("subtitle")) {
      return (
        <p className="m-card__subtitle">{this.props.content.subtitle}</p>
      )
    }
    return null;
  }

  renderCardText() {
    if(this.props.content && this.props.content.hasOwnProperty("text")) {
      return (
        <p className="m-card__text">{this.props.content.text}</p>
      )
    }
    return null;
  }

  renderCardActions() {
    if(this.props.content && this.props.content.hasOwnProperty("actions")) {
      const actionKeys = Object.keys(this.props.content.actions);
      return actionKeys.map((actionKey, index) => {
        const action = this.props.content.actions[actionKey];
        return (
          <a className="m-card__action" key={index} href={action.target}>
            {action.label}
          </a>
        )
      });
    }
    return null;
  }

  render() {
    return (
      <div className="col-sm-6 col-md-4 m-card__wrapper">
        { this.props.cardIsLoading ? (
          <p>Loading please</p>
        ) : (
          <div className="m-card">
            <div className="m-card__title-wrapper">
              {this.renderCardTitle()}
              {this.renderCardSubtitle()}
            </div>
            <div className="m-card__text-wrapper">
              {this.renderCardText()}
            </div>
            <div className="m-card__actions-wrapper">
              {this.renderCardActions()}
            </div>
          </div>
        ) }
      </div>
    )
  }
}

export default CardContent;
