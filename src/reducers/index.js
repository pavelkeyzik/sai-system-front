import { combineReducers } from 'redux';
import UsersReducer from './users';
import UserSelected from './user-selected';

const rootReducer = combineReducers({
  users: UsersReducer,
  userSelected: UserSelected
});

export default rootReducer;