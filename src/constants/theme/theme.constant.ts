import { Theme, ThemeConfig } from './theme.type';

const themeLight: Theme = {
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
  brand: '#485fe0',
  black: '#000',
  divider: '#d2d2d2',
};

const themeDark: Theme = {
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
  brand: '#485fe0',
  black: '#000',
  divider: '#151515',
};

const themeConfig: ThemeConfig = {
  light: 'light',
  dark: 'dark',
  storage: 'codeit-theme',
};

export { themeLight, themeDark, themeConfig };
