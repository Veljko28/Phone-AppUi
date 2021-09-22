import { CartForm } from '../constants/CustomTypes';

export interface State {
  pages: {
    page: string
  },
  cart: {
    form: CartForm
  }
}

export interface Action {
  type: string,
  payload?: any
}