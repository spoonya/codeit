import { combineReducers } from 'redux';

import theme from './theme/theme.reducer';
import logs from './logs/logs.reducer';
import layout from './layout/layout.reducer';
import liveMode from './live-mode/live-mode.reducer';

const rootReducer = combineReducers({
  theme,
  logs,
  layout,
  liveMode,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
