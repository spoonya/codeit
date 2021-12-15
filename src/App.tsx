import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './global-styles';
import { themeDark, themeLight, themeConfig } from './constants/theme/theme.constant';
import Project from './pages/Project.page';
import useTypedSelector from './hooks/use-typed-selector.hook';

function App(): React.ReactElement {
  const { themeMode } = useTypedSelector(({ theme }) => theme);

  return (
    <ThemeProvider theme={themeMode === themeConfig.light ? themeLight : themeDark}>
      <GlobalStyles />
      <Project />
    </ThemeProvider>
  );
}

export default App;
