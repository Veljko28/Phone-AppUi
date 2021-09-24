import { Action } from '../reduxTypes';
import { Phone } from '../../constants/CustomTypes';
import { ADD_CART_FORM, ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from '../actions/cartActions';

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
    case CLEAR_CART: return {...state, cartItems: []};
    case REMOVE_FROM_CART: return {...state, cartItems: state.cartItems.filter((x: Phone) => x.id !== action.payload)}
    default: return state;
  }
}

export default cartReducers;