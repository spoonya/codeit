import * as ThemeActionCreators from './theme.action';
import * as LogsActionCreators from './logs.action';

const ActionsObj = {
  ...ThemeActionCreators,
  ...LogsActionCreators,
};

export default ActionsObj;
