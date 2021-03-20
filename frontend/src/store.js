import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {
  productListReducer,
  productDetailsReducer
} from './reducers/productListReducer';
import { cartReducer } from './reducers/cartReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};
const middleware = [thunk];
const reducer = combineReducers({
  productListReducer,
  productDetailsReducer,
  cartReducer
});

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
