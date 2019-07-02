import React, { useState, useEffect } from 'react';

import desktopImage from './assets/pics/black-sprinter-limo.jpg';
import mobileImage from './assets/pics/benz-logo.png';

import './App.css';

const App = () => {
  const imageUrl = useWindowWidth() >= 930 ? desktopImage : mobileImage;

  return (
      <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
            
      </div>
  );
};

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

  const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
  },[]);

  return windowWidth;
};

export default App;