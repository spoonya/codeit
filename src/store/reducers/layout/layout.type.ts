export enum LayoutActionTypes {
  SET_LAYOUT = 'SET_LAYOUT',
}

export interface LayoutState {
  layoutType: string;
}

export interface SetLayoutAction {
  type: LayoutActionTypes.SET_LAYOUT;
  payload: string;
}

export type LayoutAction = SetLayoutAction;
