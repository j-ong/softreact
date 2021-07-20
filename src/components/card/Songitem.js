import React from 'react';

const Songitem = ({ song: { id, label, type } }) => {
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
};

export default Songitem;
