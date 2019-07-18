import {
  START_AUTH_ACTION,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
} from '../actions/auth';

const initialState = {
  isLoading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_AUTH_ACTION:
      return { ...state, error: null, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, error: null, isLoading: false };
    case SIGNOUT_SUCCESS:
      return { ...state, error: null, isLoading: false };
    case SIGNUP_SUCCESS:
      return { ...state, error: null, isLoading: false };
    case AUTH_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
