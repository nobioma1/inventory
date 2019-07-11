import {
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
  ERROR,
  UPDATE_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
} from '../actions/product';

const initialState = { product: {} };

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_SUCCESS:
      return state;
    case GET_PRODUCT_SUCCESS:
      return { ...state, product: action.payload };
    case UPDATE_PRODUCT_SUCCESS:
      return state;
    case DELETE_PRODUCT_SUCCESS:
      return state;
    case ERROR:
      return state;
    default:
      return state;
  }
};

export default productReducer;
