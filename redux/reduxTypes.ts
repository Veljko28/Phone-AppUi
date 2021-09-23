import { CartForm, Phone } from '../constants/CustomTypes';

export interface State {
  pages: {
    page: string
  },
  cart: {
    form: CartForm,
    cartItems: Phone[]
  }
}

export interface Action {
  type: string,
  payload?: any
}