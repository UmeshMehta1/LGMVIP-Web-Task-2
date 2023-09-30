import React from 'react';
import logol from '../Logo/img.png'
function NavBar({onGetStartedClick}) {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logol} alt="Logo" />
      </div>
      <div className="get-started">
        <button onClick={onGetStartedClick}>Get Users</button>
      </div>
    </nav>
  );
}

export default NavBar;
