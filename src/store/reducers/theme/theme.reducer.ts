import { settings } from '../../../constants';
import { getStorage } from '../../../helpers';
import { ThemeState, ThemeAction, ThemeActionTypes } from './theme.type';

const initialState: ThemeState = {
  themeMode:
    getStorage(settings.theme.storage) === settings.theme.values.light
      ? 'light'
      : 'dark' || settings.theme.defaultValue,
};

const theme = (state = initialState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case ThemeActionTypes.SET_THEME:
      return {
        ...state,
        themeMode: action.payload,
      };

    default:
      return state;
  }
};

export default theme;
