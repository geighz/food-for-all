import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className = "ui disabled secondary pointing menu">
        <Link to = "/" className="item">
          Home
          </Link>

      </div>
  );
};
export default Header;
