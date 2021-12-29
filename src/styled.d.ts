import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: {
      main: string;
      dark: string;
    };
    background: {
      paper: string;
      default: string;
      primary: string;
      secondary: string;
      static: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    editor: {
      line: string;
      lineNum?: string;
    };
    common: {
      black: string;
      green: {
        primary: string;
        secondary: string;
      };
    };
    white: {
      primary: string;
      secondary: string;
    };

    myDivider: string;
    divider?: string;
  }
}
