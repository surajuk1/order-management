import { FETCH_CUSTOMERS, FETCH_PRODUCTS, FETCH_ORDERS } from '../actions/actionTypes';

const initialState = {
  customers: [],
  products: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS:
      return {
        ...state,
        customers: action.payload
      };
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case FETCH_ORDERS:
      return {
        ...state,
        customers: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
