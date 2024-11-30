import { useEffect } from 'react';
import { useLocalStorage, useMedia } from 'react-use';

export function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  const prefersDarkMode = useMedia('(prefers-color-scheme: dark)', false);

  useEffect(() => {
    const isDark = darkMode ?? prefersDarkMode;
    document.documentElement.classList.toggle('dark', isDark);
  }, [darkMode, prefersDarkMode]);

  return [darkMode, setDarkMode] as const;
}