import { CartForm } from '../../constants/CustomTypes';

export const ADD_CART_FORM = "ADD_CART_FORM";


export const addCartForm = (form: CartForm) => ({
  type: ADD_CART_FORM,
  payload: form
}) 