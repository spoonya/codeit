import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './global-styles';
import { themeDark, themeLight, themeConfig } from './constants/theme/theme.constant';
import useTypedSelector from './hooks/use-typed-selector.hook';

export default function App(): React.ReactElement {
  const { themeMode } = useTypedSelector((store) => store.theme);

  return (
    <ThemeProvider theme={themeMode === themeConfig.light ? themeLight : themeDark}>
      <GlobalStyle />
    </ThemeProvider>
  );
}
