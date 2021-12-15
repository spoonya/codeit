import { themeConfig } from '../../../constants/theme/theme.constant';
import { ThemeState, ThemeAction, ThemeActionTypes } from './types/theme.type';

const initialState: ThemeState = {
  themeMode: localStorage.getItem(themeConfig.storage) || themeConfig.dark,
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
