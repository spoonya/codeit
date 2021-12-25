export enum AutorunActionTypes {
  SET_LIVE_MODE = 'SET_LIVE_MODE',
}

export interface AutorunState {
  autorun: string;
}

export interface SetAutorunAction {
  type: AutorunActionTypes.SET_LIVE_MODE;
  payload: string;
}

export type AutorunAction = SetAutorunAction;
