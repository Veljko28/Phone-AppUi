export interface State {
  pages: {
    page: string
  }
}

export interface Action {
  type: string,
  payload?: any
}