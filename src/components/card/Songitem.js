import React, { Component } from 'react';

class Songitem extends Component {
  render() {
    const { id, label, type } = this.props.song;

    return (
      <div className="card text-center">
        <h1>{label}</h1>
        <p>Id: {id}</p>
        <p>Type: {type}</p>

        <div>
          <a href=" " className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default Songitem;
