import { settings } from '../../../constants/sidebar-tabs/settings.constant';
import { getStorage } from '../../../helpers/storage.helper';
import { LiveModeState, LiveModeAction, LiveModeActionTypes } from './live-mode.type';

const initialState: LiveModeState = {
  liveMode: getStorage(settings.liveMode.storage) || settings.liveMode.values.auto,
};

const theme = (state = initialState, action: LiveModeAction): LiveModeState => {
  switch (action.type) {
    case LiveModeActionTypes.SET_LIVE_MODE:
      return {
        ...state,
        liveMode: action.payload,
      };

    default:
      return state;
  }
};

export default theme;
