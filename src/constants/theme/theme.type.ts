interface Theme {
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

interface ThemeConfig {
  light: string;
  dark: string;
  storage: string;
}

export type { Theme, ThemeConfig };
