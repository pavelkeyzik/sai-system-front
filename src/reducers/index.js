import { combineReducers } from 'redux';
import UsersReducer from './users';
import UserSelected from './user-selected';
import carNumberReducer from './carNumber';

const rootReducer = combineReducers({
  users: UsersReducer,
  userSelected: UserSelected,
  carNumber: carNumberReducer 
});

export default rootReducer;