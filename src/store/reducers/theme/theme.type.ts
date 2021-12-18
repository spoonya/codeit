export enum ThemeActionTypes {
  SET_THEME = 'SET_THEME',
}

export interface ThemeState {
  themeMode: string;
}

export interface SetThemeAction {
  type: ThemeActionTypes.SET_THEME;
  payload: string;
}

export type ThemeAction = SetThemeAction;
