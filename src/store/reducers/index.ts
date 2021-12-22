import { combineReducers } from 'redux';

import theme from './theme/theme.reducer';
import logs from './logs/logs.reducer';

const rootReducer = combineReducers({
  theme,
  logs,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
