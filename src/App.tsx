import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as ThemeProviderMUI } from '@mui/material/styles';

import GlobalStyle from './global-style';
import { themeDark, themeLight, themeConfig, themeMUI } from './constants/theme.constant';
import useTypedSelector from './hooks/use-typed-selector.hook';
import Project from './pages/Project.page';

export default function App(): JSX.Element {
  const { themeMode } = useTypedSelector((store) => store.theme);

  return (
    <ThemeProviderMUI theme={themeMUI}>
      <ThemeProvider theme={themeMode === themeConfig.light ? themeLight : themeDark}>
        <GlobalStyle />
        <Project />
      </ThemeProvider>
    </ThemeProviderMUI>
  );
}
