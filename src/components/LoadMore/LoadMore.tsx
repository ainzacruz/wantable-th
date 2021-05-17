/* eslint-disable react/prop-types */
import React from 'react';
import './load-more.css';

interface Props {
  text: string,
  onClick: () => void,
}

const LoadMore: React.FunctionComponent<Props> = ({ text, onClick }) => {
  return (
    <div className='load-more-button' onClick={onClick}>
      <p>{text}</p>
    </div>
  );
};

export default LoadMore;