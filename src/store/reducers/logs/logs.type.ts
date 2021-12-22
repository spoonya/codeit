import { Message } from 'console-feed/lib/definitions/Component';

export enum LogsActionTypes {
  SET_LOGS = 'SET_LOGS',
}

export interface LogsState {
  consoleLogs: Message[];
}

export interface SetLogsAction {
  type: LogsActionTypes.SET_LOGS;
  payload: Message[];
}

export type LogsAction = SetLogsAction;
