import { PaletteMode } from '@mui/material';
import { Dispatch } from 'react';
import { loader } from '@monaco-editor/react';

import { ThemeAction, ThemeActionTypes } from '../reducers/theme/theme.type';
import { settings } from '../../constants';
import { setStorage } from '../../helpers';

const setTheme = (theme: PaletteMode): ThemeAction => ({
  type: ThemeActionTypes.SET_THEME,
  payload: theme,
});

const toggleEditorTheme = (theme: PaletteMode) => {
  loader.init().then((monaco) => {
    if (theme === settings.theme.values.light) {
      monaco.editor.setTheme('light');
    } else {
      monaco.editor.setTheme('dark');
    }
  });
};

export const toggleTheme = (theme: PaletteMode) => (dispatch: Dispatch<ThemeAction>) => {
  if (theme === settings.theme.values.light) {
    dispatch(setTheme('dark'));
    toggleEditorTheme('dark');
    setStorage(settings.theme.storage, 'dark');
  } else {
    dispatch(setTheme('light'));
    toggleEditorTheme('light');
    setStorage(settings.theme.storage, 'light');
  }
};
