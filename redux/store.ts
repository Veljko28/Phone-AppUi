import {createStore, combineReducers} from 'redux';
import pageReducer from './reducers/pageReducers';

const rootReducer = combineReducers({
  pages: pageReducer
});

const store = createStore(() => pageReducer);

export default store;