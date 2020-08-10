import React from 'react';
import './tailwind.css';
import ThemeContextProvider from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeToggle from './components/ThemeToogle';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="max-w-sm mx-auto my-3 text-center">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
