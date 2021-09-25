import {Action} from '../reduxTypes';
import {TOGGLE_TABS} from '../actions/pageActions';

const initState = {
  displayTabs: true
}

const pageReducer = (state = initState, action: Action) => {
  switch (action.type){
    case TOGGLE_TABS:
      return {...state, displayTabs: action.payload};
    default:
      return state;
  }
}

export default pageReducer;