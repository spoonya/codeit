import { combineReducers } from 'redux';

import theme from './theme/theme.reducer';
import logs from './logs/logs.reducer';
import layout from './layout/layout.reducer';

const rootReducer = combineReducers({
  theme,
  logs,
  layout,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
