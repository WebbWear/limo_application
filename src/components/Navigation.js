import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/map">Map</Link>
      </li>
      <li>
        <Link to="/pics">Pics</Link>
      </li>
    </ul>
  );
};

export default Navigation;
