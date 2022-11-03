import { PaletteMode } from '@mui/material';

export enum ThemeActionTypes {
  SET_THEME = 'SET_THEME',
}

export interface ThemeState {
  themeMode: PaletteMode;
}

export interface SetThemeAction {
  type: ThemeActionTypes.SET_THEME;
  payload: PaletteMode;
}

export type ThemeAction = SetThemeAction;
