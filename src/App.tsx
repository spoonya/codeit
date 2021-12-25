import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as ThemeProviderMUI } from '@mui/material/styles';

import GlobalStyle from './global-style';
import { themeDark, themeLight, themeMUI, settings } from './constants';
import { useTypedSelector } from './hooks';
import { Project } from './pages';

export default function App() {
  const { themeMode } = useTypedSelector((store) => store.theme);

  return (
    <ThemeProviderMUI theme={themeMUI}>
      <ThemeProvider theme={themeMode === settings.theme.values.light ? themeLight : themeDark}>
        <GlobalStyle />
        <Project />
      </ThemeProvider>
    </ThemeProviderMUI>
  );
}
