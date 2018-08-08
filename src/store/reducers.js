import { combineReducers } from 'redux';
import layout from '../layout/reducers';
import slider from '../slider/reducers';

export default combineReducers({
  layout,
  slider,
});
