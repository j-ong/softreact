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
    // console.log(cards);
    return (
      <div>
        <div>
          <Link to="/" className="btn btn-light">
            Back to home
          </Link>
        </div>

        {cards.map((card) => (
          <div className="card text-center" key={card[1].properties.id}>
            {/* change the key to {card.id} if getSong is reverted back to the detailed */}
            {/* <h3>{card.label}</h3>
            <div className="text-left">
              {card.type && (
                <div className="badge badge-primary">{card.type}</div>
              )}
              <p>Node Id: {card.id}</p>

              {card.comment && <p>Node Comment: {card.comment}</p>}
              {card.date && (
                <p>
                  Date: {card.date.day.low}/{card.date.month.low}/
                  {card.date.year.low}
                </p>
              )}
              {card.accessURL && (
                <p>
                  <a href={card.accessURL} className="btn btn-dark my-1">
                    Access link
                  </a>
                </p>
              )}
            </div> */}

            <p>
              <i>Relationship: {card[1].properties.label}</i>
            </p>

            <h3>{card[2].properties.label}</h3>
            <div className="text-left">
              {card[2].properties.type && (
                <div className="badge badge-primary">
                  {card[2].properties.type}
                </div>
              )}
              <p>Node Id: {card[2].properties.id}</p>

              {card[2].properties.comment && (
                <p>Node Comment: {card[2].properties.comment}</p>
              )}
              {card[2].properties.date && (
                <p>
                  Date: {card[2].properties.date.day.low}/
                  {card[2].properties.date.month.low}/
                  {card[2].properties.date.year.low}
                </p>
              )}
              {card[2].properties.accessURL && (
                <p>
                  <a
                    href={card[2].properties.accessURL}
                    className="btn btn-dark my-1"
                  >
                    Access link
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Song;
