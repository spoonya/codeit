import { Dispatch } from 'react';
import { themeConfig } from '../../constants/theme/theme.constant';
import { ThemeAction, ThemeActionTypes } from '../reducers/theme/types/theme.type';

const setLocalStorage = (theme: string) => {
  localStorage.setItem(themeConfig.storage, theme);
};

const setTheme = (theme: string): ThemeAction => ({
  type: ThemeActionTypes.SET_THEME,
  payload: theme,
});

export const toggleTheme = (theme: string) => (dispatch: Dispatch<ThemeAction>) => {
  if (theme === themeConfig.light) {
    dispatch(setTheme(themeConfig.dark));
    setLocalStorage(themeConfig.dark);
  } else {
    dispatch(setTheme(themeConfig.light));
    setLocalStorage(themeConfig.light);
  }
};
