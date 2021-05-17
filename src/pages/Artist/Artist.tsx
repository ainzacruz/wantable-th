import React, { useEffect, useState } from 'react';
import ArtistInfo from '../../components/ArtistInfo/ArtistInfo';
import './artist.css';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

const Artist: React.FunctionComponent = (props: any) => {

  const [content, setContent] = useState('');
  const [albums, setAlbums] = useState([]);
  const {match: { params: {artistId}}} = props

  useEffect(() => {
    const endpoint = `${API_URL}/?method=artist.getinfo&artist=${artistId}&api_key=${API_KEY}&format=json`
    const albumsEndpoint = `${API_URL}/?method=artist.gettopalbums&limit=5&artist=${artistId}&api_key=${API_KEY}&format=json`
    fetchArtistInfo(endpoint, albumsEndpoint);
  }, [])

  const fetchArtistInfo = async (endpoint: string, albumsEndpoint: string) => {

    try {
      const result = await (await fetch(endpoint)).json();
      const topAlbumsResult = await (await fetch(albumsEndpoint)).json();
      const { artist: { bio: { content } } } = result;
      const { topalbums: { album } } = topAlbumsResult
      setAlbums(album);
      setContent(content);
    }
    catch (error) {
      console.log('There is an error', error)
    }
  }

  return (
    <div className='artist-page'>
      <ArtistInfo name={artistId} bio={content} albums={albums}/>
    </div>
  );
};

export default Artist;