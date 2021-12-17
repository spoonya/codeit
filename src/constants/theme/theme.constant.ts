import { DefaultTheme } from 'styled-components';
import { darken } from 'polished';

import { ThemeConfig } from './types/theme.type';

export const themeLight: DefaultTheme = {
  text: {
    primary: '#38434f',
    secondary: '#656565',
  },
  background: {
    primary: '#f9f9fa',
    secondary: '#eff0f2',
  },
  editor: {
    line: '#333842',
    lineNum: '#a7a7a',
  },
  brand: {
    primary: '#485fe0',
    secondary: darken(0.1, '#485fe0'),
  },
  black: '#000',
  divider: '#d2d2d2',
};

export const themeDark: DefaultTheme = {
  text: {
    primary: '#fff',
    secondary: '#cfcfcf',
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
    secondary: darken(0.1, '#485fe0'),
  },
  black: '#000',
  divider: '#151515',
};

export const themeConfig: ThemeConfig = {
  light: 'light',
  dark: 'dark',
  storage: 'codeit-theme',
};
