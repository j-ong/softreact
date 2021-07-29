import React, { Component } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Song extends Component {
  componentDidMount() {
    this.props.getSong(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.getSong(this.props.match.params.id);
    }
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
    const cardSummary = this.props.cardSummary;
    // console.log(cards);

    return (
      <div>
        <div>
          <Link to="/" className="btn btn-light">
            Back to home
          </Link>
        </div>

        <div className="card text-center bg-light">
          <h1>{cardSummary.label}</h1>
          <p>ID: {cardSummary.id}</p>
          <p>Type: {cardSummary.type}</p>
        </div>

        {cards.map((card) => (
          <div className="card text-center" key={card.group}>
            <h3>
              <i>Relationship: {card.group}</i>
            </h3>

            {card.properties.map((property) => (
              <div className="card text-left" key={property.id}>
                <h4>{property.label}</h4>

                {property.type && (
                  <div className="badge badge-primary">{property.type}</div>
                )}

                <p>Node Id: {property.id}</p>

                {property.comment && <p>Node Comment: {property.comment}</p>}

                {property.date && (
                  <p>
                    Date: {property.date.day.low}/{property.date.month.low}/
                    {property.date.year.low}
                  </p>
                )}

                {property.accessURL && (
                  <p>
                    <a href={property.accessURL} className="btn btn-dark my-1">
                      Access link
                    </a>
                  </p>
                )}

                <Link
                  to={`/node/${property.id}`}
                  className="btn btn-dark btn-sm my-1"
                >
                  See relations
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Song;
