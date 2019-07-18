import {
  START_PRODUCT_ACTION,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
  ERROR,
  UPDATE_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
  REMOVE_CATEGORY_SUCCESS,
} from '../actions/product';

const initialState = {
  isLoading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_PRODUCT_ACTION:
      return { ...state, error: null, isLoading: true };
    case ADD_PRODUCT_SUCCESS:
      return { ...state, error: null, isLoading: false };
    case GET_PRODUCT_SUCCESS:
      return { ...state, error: null, isLoading: false, product: action.payload };
    case UPDATE_PRODUCT_SUCCESS:
      return { ...state, error: null, isLoading: false };
    case DELETE_PRODUCT_SUCCESS:
      return { ...state, error: null, isLoading: false };
    case REMOVE_CATEGORY_SUCCESS:
      return { ...state, error: null, isLoading: false };
    case ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;
