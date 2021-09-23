import { Action } from '../reduxTypes';
import { ADD_CART_FORM, ADD_TO_CART } from '../actions/cartActions';

const initState = {
  form: {
    firstName: "",
    lastName: "",
    address: "",
    town: "",
    postCode: "",
    phoneNum: ""
  },
  cartItems: []
}

const cartReducers = (state = initState, action: Action) => {
  switch (action.type){
    case ADD_CART_FORM: return {...state, form: action.payload};
    case ADD_TO_CART: return {...state, cartItems: [...state.cartItems, action.payload]};
    default: return state;
  }
}

export default cartReducers;