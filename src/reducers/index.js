import { combineReducers } from 'redux';
import appReduer from './app';

export default combineReducers({
  app: appReduer
});
