import { Dispatch } from 'react';
import { settings } from '../../constants/sidebar-tabs/settings.constant';
import { setStorage } from '../../helpers/storage.helper';
import { LiveModeAction, LiveModeActionTypes } from '../reducers/live-mode/live-mode.type';

const setLiveMode = (live: string): LiveModeAction => ({
  type: LiveModeActionTypes.SET_LIVE_MODE,
  payload: live,
});

export const toggleLiveMode = (liveMode: string) => (dispatch: Dispatch<LiveModeAction>) => {
  if (liveMode === settings.liveMode.values.auto) {
    dispatch(setLiveMode(settings.liveMode.values.manually));
    setStorage(settings.liveMode.storage, settings.liveMode.values.manually);
  } else {
    dispatch(setLiveMode(settings.liveMode.values.auto));
    setStorage(settings.liveMode.storage, settings.liveMode.values.auto);
  }
};
