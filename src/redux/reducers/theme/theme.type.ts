export enum ThemeActionTypes {
  SET_THEME = 'SET_THEME',
}

export type ThemeState = {
  themeMode: string;
};

export type ThemeSetTheme = {
  type: ThemeActionTypes.SET_THEME;
  payload: string;
};

export type ThemeAction = ThemeSetTheme;
