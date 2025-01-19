'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // LocalStorage'dan tema kontrolü
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (storedTheme) {
      setTheme(storedTheme);
      applyTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);

    // LocalStorage'a kaydet
    localStorage.setItem('theme', newTheme);
  };

  const applyTheme = (theme: 'light' | 'dark') => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.style.setProperty('--background', '#0a0a0a');
      root.style.setProperty('--foreground', '#ededed');
    } else {
      root.style.setProperty('--background', '#ffffff');
      root.style.setProperty('--foreground', '#171717');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-400 dark:border-gray-600 shadow-md"
    >
      {theme === 'light' ? (
        <span role="img" aria-label="Moon" className="text-lg">
          🌙
        </span>
      ) : (
        <span role="img" aria-label="Sun" className="text-lg">
          ☀️
        </span>
      )}
    </button>
  );
}
