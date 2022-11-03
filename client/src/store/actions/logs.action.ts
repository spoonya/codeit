import { Message } from 'console-feed/lib/definitions/Component';

import { LogsAction, LogsActionTypes } from '../reducers/logs/logs.type';

export const setLogs = (logs: Message[]): LogsAction => ({
  type: LogsActionTypes.SET_LOGS,
  payload: logs,
});

export const resetLogs = (): LogsAction => ({
  type: LogsActionTypes.RESET_LOGS,
  payload: [],
});
