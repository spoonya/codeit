import { LayoutAction, LayoutActionTypes } from '../reducers/layout/layout.type';

export const setLayout = (view: string): LayoutAction => ({
  type: LayoutActionTypes.SET_LAYOUT,
  payload: view,
});
