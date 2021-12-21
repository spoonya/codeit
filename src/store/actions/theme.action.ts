import { Dispatch } from 'react';
import { loader } from '@monaco-editor/react';

import { ThemeAction, ThemeActionTypes } from '../reducers/theme/theme.type';
import { settings } from '../../constants/sidebar-tabs/settings.constant';

const setLocalStorage = (theme: string) => {
  localStorage.setItem(settings.theme.storage, theme);
};

const setTheme = (theme: string): ThemeAction => ({
  type: ThemeActionTypes.SET_THEME,
  payload: theme,
});

const toggleEditorTheme = (theme: string) => {
  loader.init().then((monaco) => {
    if (theme === settings.theme.light) {
      monaco.editor.setTheme(settings.theme.light);
    } else {
      monaco.editor.setTheme(settings.theme.dark);
    }
  });
};

export const toggleTheme = (theme: string) => (dispatch: Dispatch<ThemeAction>) => {
  if (theme === settings.theme.light) {
    dispatch(setTheme(settings.theme.dark));
    toggleEditorTheme(settings.theme.dark);
    setLocalStorage(settings.theme.dark);
  } else {
    dispatch(setTheme(settings.theme.light));
    toggleEditorTheme(settings.theme.light);
    setLocalStorage(settings.theme.light);
  }
};
