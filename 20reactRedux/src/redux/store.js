import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";

import icecreamReducer from "./iceCream/iceCreamReducer";
import {applyMiddleware, combineReducers } from "redux";

import {logger} from 'redux-logger';


const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;