import React from 'react';

// Import the logo image. rsbuild will handle bundling this correctly.
import logo from '../../public/assets/logo-kula.png';

// Import the stylesheet for this component.
//import './RotatingLogo.css';

function RotatingLogo() {
  return (
    <div className="logo-container">
      <img src={logo} className="rotating-logo" alt="Rotating K logo" />
    </div>
  );
}

export default RotatingLogo;