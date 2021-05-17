import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header: React.FunctionComponent = () => {
  return (
    <div className='header-container'>
      <div className='header-content'>
        <Link to='/'>
          WANTABLE TAKE HOME
        </Link>
      </div>
    </div>
  );
};

export default Header;