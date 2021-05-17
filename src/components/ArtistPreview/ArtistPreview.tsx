/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './artist-preview.css';

interface Props {
  image: string,
  name: string,
}

const ArtistPreview: React.FunctionComponent<Props> = ({ image, name }) => {
  return (
    <div className='artist-preview'>
      <Link to={{ pathname: `/${name}`, state: { artistName: `${name}` } }}>
        <img src={image} alt='artist preview' />
        <p>{name}</p>
      </Link>
    </div>
  );
};

export default ArtistPreview;