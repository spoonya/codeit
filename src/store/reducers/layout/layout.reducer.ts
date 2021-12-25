import { settings } from '../../../constants';
import { getStorage } from '../../../helpers';
import { LayoutState, LayoutAction, LayoutActionTypes } from './layout.type';

const initialState: LayoutState = {
  layoutType: getStorage(settings.layout.storage) || settings.layout.defaultValue,
};

const layout = (state = initialState, action: LayoutAction): LayoutState => {
  switch (action.type) {
    case LayoutActionTypes.SET_LAYOUT:
      return {
        ...state,
        layoutType: action.payload,
      };

    default:
      return state;
  }
};

export default layout;
