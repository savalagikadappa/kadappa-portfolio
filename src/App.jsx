import React, { useEffect, useState } from 'react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

function App() {
  const [darkMode, setDarkMode] = useState(true); // default to dark

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <MainLayout toggleDark={() => setDarkMode(!darkMode)} isDark={darkMode}>
        <Home />
      </MainLayout>
    </div>
  );
}

export default App;
