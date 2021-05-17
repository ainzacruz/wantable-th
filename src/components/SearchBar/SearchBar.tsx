/* eslint-disable react/prop-types */
import React, { useState, ChangeEvent } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './search-bar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faSearch)

interface Props {
  callback: (searchItem: string) => void;
}

const SearchBar: React.FunctionComponent<Props> = ({ callback }) => {

  const [valueState, setValueState] = useState('')

  const handleClick = () => {
    callback(valueState);
  }

  const search = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValueState(event.target.value);
  }

  return (
    <div className='searchbar'>
      <div className='searchbar-content'>
          <input type='text' className='searchbar-input' placeholder='Search Artist' value={valueState}
            onChange={search}
          />
          <FontAwesomeIcon onClick={handleClick} className='search-icon' icon='search' size='2x'/>
      </div>
    </div>
  );
};

export default SearchBar;