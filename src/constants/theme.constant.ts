import { DefaultTheme } from 'styled-components';
import { darken } from 'polished';
import { createTheme } from '@mui/material/styles';

export const themeDark: DefaultTheme = {
  text: {
    primary: '#fff',
    secondary: '#cacaca',
  },
  background: {
    primary: '#282c34',
    secondary: '#21252b',
  },
  editor: {
    line: '#333842',
  },
  brand: {
    primary: '#485fe0',
    secondary: darken(0.06, '#485fe0'),
  },
  black: {
    primary: '#000',
  },
  white: {
    primary: '#fff',
    secondary: '#ccc',
  },
  divider: '#151515',
};

export const themeLight: DefaultTheme = {
  text: {
    primary: '#353535',
    secondary: '#656565',
  },
  background: {
    primary: '#f9f9fa',
    secondary: '#eff0f2',
  },
  editor: {
    line: '#ececec',
    lineNum: '#a7a7a7',
  },
  brand: {
    primary: '#485fe0',
    secondary: darken(0.06, '#485fe0'),
  },
  black: {
    primary: '#000',
  },
  white: {
    primary: '#fff',
    secondary: '#ddd',
  },
  divider: '#d2d2d2',
};

export const themeMUI = createTheme({
  typography: {
    fontFamily: ['JetBrains Mono'].join(','),
  },
  palette: {
    primary: {
      main: '#485fe0',
    },
  },
});
