import { Action } from '../reduxTypes';
import { ADD_CART_FORM } from '../actions/cartActions';

const initState = {
  form: {
    firstName: "",
    lastName: "",
    address: "",
    town: "",
    postCode: "",
    phoneNum: ""
  }
}

const cartReducers = (state = initState, action: Action) => {
  switch (action.type){
    case ADD_CART_FORM: return {...state, form: action.payload};
    default: return state;
  }
}

export default cartReducers;