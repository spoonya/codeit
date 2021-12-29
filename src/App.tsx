import React from 'react';
import { ThemeProvider as ThemeProviderMUI, createTheme } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './global-style';
import { getDesignTokens, settings, themeDark, themeLight } from './constants';
import { useTypedSelector } from './hooks';
import { Project } from './pages';

export default function App() {
  const { themeMode } = useTypedSelector((store) => store.theme);

  const theme = React.useMemo(() => createTheme(getDesignTokens(themeMode)), [themeMode]);

  return (
    <ThemeProviderMUI theme={theme}>
      <ThemeProvider theme={themeMode === settings.theme.values.light ? themeLight : themeDark}>
        <GlobalStyle />
        <Project />
      </ThemeProvider>
    </ThemeProviderMUI>
  );
}
