import { combineReducers } from 'redux';
import inventoryReducer from './inventory';
import userReducer from './users';
import sessionReducer from './session';
import categoryReducer from './category';

export default combineReducers({
  user: userReducer,
  session: sessionReducer,
  inventory: inventoryReducer,
  category: categoryReducer,
});
