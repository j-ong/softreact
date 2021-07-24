import React from 'react';
import Songitem from './Songitem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Songs = ({ songs, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={songStyle}>
        {/* Data come from props, which is connected to api */}
        {songs.map((song) => (
          <Songitem key={song.id} song={song} />
        ))}
      </div>
    );
  }
};

Songs.propTypes = {
  songs: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const songStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Songs;
