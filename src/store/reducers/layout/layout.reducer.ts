import { settings } from '../../../constants/sidebar-tabs/settings.constant';
import { getStorage } from '../../../helpers/storage.helper';
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
