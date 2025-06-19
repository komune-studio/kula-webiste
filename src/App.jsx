// src/App.jsx
import React from 'react';
import './App.css';
import './index.css';
import RotatingLogo from './components/RotatingLogo.jsx';


// Import your assets
import logoK from '../public/assets/logo-kula.png';
import logoInstagram from '../public/assets/logo-ig.png';

function App() {
  return (
    // The main container styles are applied via CSS, including the background
    // <div className="app-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="app-container">
      
      {/* Top Left K Logo */}
      {/* <img src={logoK} alt="Kula logo" className="logo-k" /> */}
      <RotatingLogo />

      {/* Center Text */}
      {/* <div className="main-text">
        <h1>KULA</h1>
        <p>courts</p>
      </div> */}

      {/* Bottom Right Instagram Logo (as a link) */}
      <a 
        href="https://www.instagram.com/kulacourts" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="logo-instagram"
      >
        <img src={logoInstagram} alt="Instagram" />
      </a>

    </div>
  );
}

export default App;