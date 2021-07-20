import React, { Component } from 'react';
import Songitem from './Songitem';

class Songs extends Component {
  render() {
    return (
      <div style={songStyle}>
        {/* Data come from props, which is connected to api */}
        {this.props.songs.map((song) => (
          <Songitem key={song.id} song={song} />
        ))}
      </div>
    );
  }
}

const songStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Songs;
