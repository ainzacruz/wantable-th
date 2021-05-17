/* eslint-disable react/prop-types */
import React from 'react';
import './artist-info.css';

interface Props {
  name: string,
  bio: string,
  albums: Array<any>
}

const ArtistInfo: React.FunctionComponent<Props> = ({ name, bio, albums}) => {
  
  const renderAlbums = () => {
    const topAlbums = albums.map((album: any, i: number) => {
      const image = album.image[2]['#text'];
      const name = album.name;
      const url = album.url;
      return(
        <div key={i}>
          <a className='album-links'  rel="noreferrer" target="_blank" href={url}>
            <img src={image} alt='album-image' />
            <p>{name}</p>
          </a>
        </div>
      )
    })
    return topAlbums;
  }

  return (
    <div className='artist-info'>
      <h1>{name}</h1>
      <p>{bio}</p>
      <div className='albums-container'>
        {renderAlbums()}
      </div>
    </div>
  );
};

export default ArtistInfo;