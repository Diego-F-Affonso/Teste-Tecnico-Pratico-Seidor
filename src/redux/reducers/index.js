import { combineReducers } from 'redux';
import funcionariosReducer from './funcionariosReducer';
import user from './user';

export default combineReducers({
  funcionariosReducer,
  user,
});
