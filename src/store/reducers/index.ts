import { combineReducers } from 'redux';

import theme from './theme/theme.reducer';
import logs from './logs/logs.reducer';
import layout from './layout/layout.reducer';
import autorun from './autorun/autorun.reducer';

const rootReducer = combineReducers({
  theme,
  logs,
  layout,
  autorun,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
