import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as ThemeProviderMUI } from '@mui/material/styles';

import GlobalStyle from './global-style';
import { themeDark, themeLight, themeMUI } from './constants/theme.constant';
import useTypedSelector from './hooks/use-typed-selector.hook';
import Project from './pages/Project.page';
import { settings } from './constants/sidebar-tabs/settings.constant';

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
