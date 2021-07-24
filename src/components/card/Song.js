import React, { Component } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Song extends Component {
  componentDidMount() {
    this.props.getSong(this.props.match.params.id);
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    song: PropTypes.array.isRequired,
    getSong: PropTypes.func.isRequired,
  };

  render() {
    const { loading } = this.props;
    if (loading) return <Spinner />;

    const cards = this.props.song;
    console.log(cards);
    return (
      <div>
        <div>
          <Link to="/" className="btn btn-light">
            Back to home
          </Link>
        </div>

        {cards.map((card) => (
          <div className="card text-center" key={card.id}>
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
