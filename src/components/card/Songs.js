import React, { Component } from 'react';
import Songitem from './Songitem';

class Songs extends Component {
  state = {
    songs: [
      {
        id: 'Orang_Singapura-Work',
        label: 'Orang Singapura',
        type: 'MusicalWork',
      },
      {
        id: 'ZS.score.1950.00.00b-Work',
        label: 'AIDILFITRI music',
        type: 'MusicalWork',
      },
      {
        id: 'Semoga_Bahagia-Work',
        label: 'Semoga Bahagia',
        type: 'MusicalWork',
      },
      {
        id: 'Majulah_Singapura-Work',
        label: 'Majulah Singapura',
        type: 'MusicalWork',
      },
    ],
  };

  render() {
    return (
      <div style={songStyle}>
        {this.state.songs.map((song) => (
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
