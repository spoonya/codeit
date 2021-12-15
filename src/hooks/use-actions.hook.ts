import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import ActionCreators from '../redux/actions';

export default function useActions() {
  const dispatch = useDispatch();

  return bindActionCreators(ActionCreators, dispatch);
}
