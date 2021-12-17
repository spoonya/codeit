import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './global-style';
import { themeDark, themeLight, themeConfig } from './constants/theme/theme.constant';
import useTypedSelector from './hooks/use-typed-selector.hook';
import Project from './pages/Project.page';

export default function App(): JSX.Element {
  const { themeMode } = useTypedSelector((store) => store.theme);

  return (
    <ThemeProvider theme={themeMode === themeConfig.light ? themeLight : themeDark}>
      <GlobalStyle />
      <Project />
    </ThemeProvider>
  );
}
