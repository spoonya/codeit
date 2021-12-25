import { Dispatch } from 'react';
import { loader } from '@monaco-editor/react';

import { ThemeAction, ThemeActionTypes } from '../reducers/theme/theme.type';
import { settings } from '../../constants/sidebar-tabs/settings.constant';
import { setStorage } from '../../helpers/storage.helper';

const setTheme = (theme: string): ThemeAction => ({
  type: ThemeActionTypes.SET_THEME,
  payload: theme,
});

const toggleEditorTheme = (theme: string) => {
  loader.init().then((monaco) => {
    if (theme === settings.theme.values.light) {
      monaco.editor.setTheme(settings.theme.values.light);
    } else {
      monaco.editor.setTheme(settings.theme.values.dark);
    }
  });
};

export const toggleTheme = (theme: string) => (dispatch: Dispatch<ThemeAction>) => {
  if (theme === settings.theme.values.light) {
    dispatch(setTheme(settings.theme.values.dark));
    toggleEditorTheme(settings.theme.values.dark);
    setStorage(settings.theme.storage, settings.theme.values.dark);
  } else {
    dispatch(setTheme(settings.theme.values.light));
    toggleEditorTheme(settings.theme.values.light);
    setStorage(settings.theme.storage, settings.theme.values.light);
  }
};
