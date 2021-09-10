import {Action} from '../reduxTypes';
import {CHANGE_PAGE} from '../actions/pageActions';

const initState = {
  page: "Home"
}

const pageReducer = (state = initState, action: Action) => {
  switch (action.type){
    case CHANGE_PAGE:
      return {...state, page: action.payload};
    default:
      return state;
  }
}

export default pageReducer;