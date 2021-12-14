import { useState, useEffect } from 'react';
import { themeConfig } from '../constants/theme/theme.constant';

export default function useThemes(): [string, () => void] {
  const defaultTheme = localStorage.getItem(themeConfig.storage) || themeConfig.dark;

  const [theme, setTheme] = useState(defaultTheme);

  function setMode(mode: string) {
    localStorage.setItem(themeConfig.storage, mode);
    setTheme(mode);
  }

  function toggleTheme() {
    theme === themeConfig.light ? setMode(themeConfig.dark) : setMode(themeConfig.light);
  }

  useEffect(() => {
    const localTheme = localStorage.getItem(themeConfig.storage);
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, toggleTheme];
}
