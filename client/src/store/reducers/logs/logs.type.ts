import { Message } from 'console-feed/lib/definitions/Component';

export enum LogsActionTypes {
  SET_LOGS = 'SET_LOGS',
  RESET_LOGS = 'RESET_LOGS',
}

export interface LogsState {
  consoleLogs: Message[];
}

export interface SetLogsAction {
  type: LogsActionTypes.SET_LOGS;
  payload: Message[];
}

export interface ResetLogsAction {
  type: LogsActionTypes.RESET_LOGS;
  payload: Message[];
}

export type LogsAction = SetLogsAction | ResetLogsAction;
