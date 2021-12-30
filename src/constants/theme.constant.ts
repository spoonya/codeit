import { darken } from 'polished';
import { PaletteMode } from '@mui/material';
import { DefaultTheme } from 'styled-components';

import { settings } from './sidebar-tabs/settings.constant';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    editor: {
      line: string;
      lineNum: string;
    };

    white: {
      primary: string;
      secondary: string;
    };

    divider: string;
  }

  interface CommonColors {
    white: string;
    black: string;
    green: {
      primary: string;
      secondary: string;
    };
  }

  interface TypeBackground {
    primary: string;
    secondary: string;
    static: string;
    modal: string;
  }

  interface ThemeOptions {
    background?: {
      primary?: string;
      secondary?: string;
      static?: string;
      modal?: string;
    };

    editor?: {
      line?: string;
      lineNum?: string;
    };

    white?: {
      primary?: string;
      secondary?: string;
    };

    common?: {
      white?: string;
      black?: string;
      green?: {
        primary?: string;
        secondary?: string;
      };
    };

    divider?: string;
  }
}

export const themeDark: DefaultTheme = {
  primary: {
    main: '#485fe0',
    dark: darken(0.06, '#485fe0'),
  },
  background: {
    paper: '#282c34',
    default: '#21252b',
    primary: '#21252b',
    secondary: '#282c34',
    static: '#21252b',
    modal: '#010101',
  },
  text: {
    primary: '#fff',
    secondary: '#cacaca',
  },
  editor: {
    line: '#333842',
  },
  common: {
    black: '#000',
    green: {
      primary: '#1DB954',
      secondary: '#139f44',
    },
  },
  white: {
    primary: '#fff',
    secondary: '#ccc',
  },
  myDivider: '#151515',
  divider: '#373737',
};

export const themeLight: DefaultTheme = {
  primary: {
    main: '#485fe0',
    dark: darken(0.06, '#485fe0'),
  },
  background: {
    paper: '#f9f9fa',
    default: '#f9f9fa',
    primary: '#f9f9fa',
    secondary: '#eff0f2',
    static: '#21252b',
  },
  text: {
    primary: '#353535',
    secondary: '#656565',
  },
  editor: {
    line: '#ececec',
    lineNum: '#a7a7a7',
  },
  common: {
    black: '#000',
    green: {
      primary: '#1DB954',
      secondary: '#139f44',
    },
  },
  white: {
    primary: '#fff',
    secondary: '#ddd',
  },
  myDivider: '#d2d2d2',
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === settings.theme.values.light ? themeLight : themeDark),
  },
  typography: {
    fontFamily: 'JetBrains Mono',
    fontSize: 14,
  },
});
