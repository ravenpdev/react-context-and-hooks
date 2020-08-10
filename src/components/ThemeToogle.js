import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className="p-2 text-sm text-white bg-blue-700 rounded"
      onClick={toggleTheme}
    >
      Toggle theme
    </button>
  );
};

export default ThemeToggle;
