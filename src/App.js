import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/greeting'
import ImageAlbum from './components/imageAlbum';
import logoTop from './assets/logos/logo-top.png';
import ButtonCounter from './components/buttonCounter'
//====================================================================================================================================//


function App() {
  return (
    <div className="App">
      <ImageAlbum imageSrc={logoTop} />
      <Greeting name="MY SERVANT" />{/* this is a component */}
      <ButtonCounter />
   </div>
  );
}

export default App;
