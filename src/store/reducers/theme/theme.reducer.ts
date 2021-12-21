import { settings } from '../../../constants/sidebar-tabs/settings.constant';
import { getStorage } from '../../../helpers/storage.helper';
import { ThemeState, ThemeAction, ThemeActionTypes } from './theme.type';

const initialState: ThemeState = {
  themeMode: getStorage(settings.theme.storage) || settings.theme.dark,
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
