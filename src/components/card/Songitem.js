import React from 'react';
import { Link } from 'react-router-dom';

const Songitem = ({ song: { id, label, type } }) => {
  return (
    <div className="card text-center">
      <h1>{label}</h1>
      <p>Id: {id}</p>
      <p>Type: {type}</p>

      <div>
        <Link to={`/song/${id}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

export default Songitem;
