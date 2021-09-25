import { CartForm, Phone } from '../constants/CustomTypes';

export interface State {
  pages: {
    displayTabs: boolean
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