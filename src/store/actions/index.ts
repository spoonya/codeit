import * as ThemeActionCreators from './theme.action';
import * as LogsActionCreators from './logs.action';
import * as LayoutActionCreators from './layout.action';

const ActionsObj = {
  ...ThemeActionCreators,
  ...LogsActionCreators,
  ...LayoutActionCreators,
};

export default ActionsObj;
