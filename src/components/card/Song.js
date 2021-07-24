import React, { Component } from 'react';

export class Song extends Component {
  componentDidMount() {
    this.props.getSong(this.props.match.params.id);
  }

  render() {
    const { loading } = this.props;
    const cards = this.props.song;
    console.log(cards);
    return (
      <div>
        {cards.map((card) => (
          <div className="card text-center">
            <h3>{card.label}</h3>
            <div className="text-left">
              <p>Node Id: {card.id}</p>
              <p>Node Type: {card.type}</p>
              <p>Node Comment: {card.comment}</p>
              <p>Access Url: {card.accessURL}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Song;
