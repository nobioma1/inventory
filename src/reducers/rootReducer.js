import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import authReducer from './authReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
