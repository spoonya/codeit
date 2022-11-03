import * as ThemeActionCreators from './theme.action';
import * as LogsActionCreators from './logs.action';
import * as LayoutActionCreators from './layout.action';
import * as AutorunActionCreators from './autorun.action';

const ActionsObj = {
  ...ThemeActionCreators,
  ...LogsActionCreators,
  ...LayoutActionCreators,
  ...AutorunActionCreators,
};

export default ActionsObj;
