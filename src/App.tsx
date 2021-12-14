import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './global-styles';
import ThemesContext from './context/theme.context';
import { themeDark, themeLight, themeConfig } from './constants/theme/theme.constant';
import useThemes from './hooks/use-themes.hook';
import Project from './pages/project.page';

function App(): React.ReactElement {
  const [theme, toggleTheme] = useThemes();

  const themeMode = theme === themeConfig.light ? themeLight : themeDark;

  return (
    <ThemesContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Project />
      </ThemeProvider>
    </ThemesContext.Provider>
  );
}

export default App;
