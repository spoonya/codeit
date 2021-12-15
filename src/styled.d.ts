import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    text: {
      primary: string;
      secondary: string;
    };
    background: {
      primary: string;
      secondary: string;
    };
    editor: {
      line: string;
      lineNum?: string;
    };
    brand: string;
    black: string;
    divider: string;
  }
}
