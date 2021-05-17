/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './artist-info.css';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

interface Props {
  name: string,
  bio: string,
  albums: Array<any>
}

const ArtistInfo: React.FunctionComponent<Props> = ({ name, bio, albums}) => {
  console.log(albums);
  // 
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