import * as ThemeActionCreators from './theme.action';
import * as LogsActionCreators from './logs.action';
import * as LayoutActionCreators from './layout.action';
import * as LiveModeActionCreators from './live-mode.action';

const ActionsObj = {
  ...ThemeActionCreators,
  ...LogsActionCreators,
  ...LayoutActionCreators,
  ...LiveModeActionCreators,
};

export default ActionsObj;
