import { Dispatch } from 'react';

import { settings } from '../../constants';
import { setStorage } from '../../helpers';
import { AutorunAction, AutorunActionTypes } from '../reducers/autorun/autorun.type';

const setAutorun = (live: string): AutorunAction => ({
  type: AutorunActionTypes.SET_LIVE_MODE,
  payload: live,
});

export const toggleAutorun = (liveMode: string) => (dispatch: Dispatch<AutorunAction>) => {
  if (liveMode === settings.autorun.values.auto) {
    dispatch(setAutorun(settings.autorun.values.manually));
    setStorage(settings.autorun.storage, settings.autorun.values.manually);
  } else {
    dispatch(setAutorun(settings.autorun.values.auto));
    setStorage(settings.autorun.storage, settings.autorun.values.auto);
  }
};
