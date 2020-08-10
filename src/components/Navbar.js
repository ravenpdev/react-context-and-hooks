import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;

  return (
    <nav className="p-2" style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? 'Logged in' : 'logged out'}
      </div>
      <ul className="p-0">
        <li className="inline-block p-2 mb-1">Home</li>
        <li className="inline-block p-2 mb-1">About</li>
        <li className="inline-block p-2 mb-1">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
