import { DefaultTheme } from 'styled-components';
import { darken } from 'polished';

interface ThemeConfig {
  light: string;
  dark: string;
  storage: string;
}

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
    line: '#333842',
    lineNum: '#a7a7a',
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
  },
  divider: '#d2d2d2',
};

export const themeDark: DefaultTheme = {
  text: {
    primary: '#fff',
    secondary: '#adadad',
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
  },
  divider: '#151515',
};

export const themeConfig: ThemeConfig = {
  light: 'light',
  dark: 'dark',
  storage: 'codeit-theme',
};
