import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Grid from '../../components/Grid/Grid';
import ArtistPreview from '../../components/ArtistPreview/ArtistPreview';
import LoadMore from '../../components/LoadMore/LoadMore';
import './home.css';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

interface Artist {
  artists: Array<any>
}

const Home: React.FunctionComponent = () => {

  const [artistState, setArtistState] = useState<Artist>({ artists: [] });
  const [query, setQueryState] = useState('');
  const [resultCount, setResultCountState] = useState(12);

  const { artists } = artistState;

  useEffect(() => {

    if (!query) {
      setResultCountState(12)
    } else {
      const endpoint = `${API_URL}/?method=artist.getsimilar&artist=${query}&limit=${resultCount}&api_key=${API_KEY}&format=json`;
      fetchArtists(endpoint);
    }

  }, [query])

  const fetchArtists = async (endpoint: string) => {

    try {
      const result = await (await fetch(endpoint)).json();
      const { similarartists: { artist } } = result;
      setArtistState({ artists: artist });

    }
    catch (error) {
      console.log('Failed to fetch data', error)
    }

  }

  const loadMoreItems = () => {

    setResultCountState(resultCount + 12 )
    const endpoint = `${API_URL}/?method=artist.getsimilar&artist=${query}&limit=${resultCount + 12}&api_key=${API_KEY}&format=json`;
    fetchArtists(endpoint);

  }

  const searchItems = (searchItem: string) => {

    setArtistState({ artists: [] });
    setQueryState(searchItem);

  }

  return (
    <div className='homepage-container'>
      <SearchBar callback={searchItems} />
      <div className='home-grid'>
        <Grid >
          {artists.map((artist, i) => {
            const { image: [, , third] } = artist
            return <ArtistPreview key={i}
              name={artist.name}
              image={third['#text']}
            />
          })}
        </Grid>
        {query ? <LoadMore text='Load More' onClick={loadMoreItems} /> : null}
      </div>
    </div>
  );
};

export default Home;