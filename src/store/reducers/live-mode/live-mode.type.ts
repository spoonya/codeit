export enum LiveModeActionTypes {
  SET_LIVE_MODE = 'SET_LIVE_MODE',
}

export interface LiveModeState {
  liveMode: string;
}

export interface SetLiveModeAction {
  type: LiveModeActionTypes.SET_LIVE_MODE;
  payload: string;
}

export type LiveModeAction = SetLiveModeAction;
