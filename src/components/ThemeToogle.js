import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { toggleTheme } = context;
        return (
          <button
            className="p-2 text-sm text-white bg-blue-700 rounded"
            onClick={toggleTheme}
          >
            Toggle theme
          </button>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ThemeToggle;
