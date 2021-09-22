import {createStore, combineReducers} from 'redux';
import pageReducer from './reducers/pageReducers';
import cartReducers from './reducers/cartReducers';

const rootReducer = combineReducers({
  pages: pageReducer,
  cart: cartReducers
});

const store = createStore(rootReducer);

export default store;