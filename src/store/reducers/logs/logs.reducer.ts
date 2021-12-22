import { LogsState, LogsAction, LogsActionTypes } from './logs.type';

const initialState: LogsState = {
  consoleLogs: [],
};

const logs = (state = initialState, action: LogsAction): LogsState => {
  switch (action.type) {
    case LogsActionTypes.SET_LOGS:
      return {
        ...state,
        consoleLogs: action.payload,
      };

    default:
      return state;
  }
};

export default logs;
