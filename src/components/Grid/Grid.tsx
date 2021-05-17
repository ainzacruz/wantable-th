/* eslint-disable react/prop-types */
import React from 'react';
import './grid.css';

interface Props {
  children: any
}

const Grid: React.FunctionComponent<Props> = ({ children }) => {

  const renderArtist = () => {
    const gridItems = children.map((artist: any, i: number) => {
      return (
        <div key={i} className='grid-item'>
          {artist}
        </div>
      )
    });
    return gridItems;
  }

  return (
    <div className='grid'>
      <div className='grid-content'>
        {renderArtist()}
      </div>
    </div>
  );
};

export default Grid;