import { settings } from '../../../constants';
import { getStorage } from '../../../helpers';
import { AutorunState, AutorunAction, AutorunActionTypes } from './autorun.type';

const initialState: AutorunState = {
  autorun: getStorage(settings.autorun.storage) || settings.autorun.defaultValue,
};

const autorun = (state = initialState, action: AutorunAction): AutorunState => {
  switch (action.type) {
    case AutorunActionTypes.SET_LIVE_MODE:
      return {
        ...state,
        autorun: action.payload,
      };

    default:
      return state;
  }
};

export default autorun;
