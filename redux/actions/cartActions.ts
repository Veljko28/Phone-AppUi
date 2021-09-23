import { CartForm, Phone } from '../../constants/CustomTypes';

export const ADD_CART_FORM = "ADD_CART_FORM";
export const ADD_TO_CART = "ADD_TO_CART"; 


export const addCartForm = (form: CartForm) => ({
  type: ADD_CART_FORM,
  payload: form
}) 

export const addToCart = (phone: Phone) => ({
  type: ADD_TO_CART,
  payload: phone
})