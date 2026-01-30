import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";

import icecreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./users/useReducer";
import {thunk} from 'redux-thunk';


import {applyMiddleware, combineReducers } from "redux";

import {logger} from 'redux-logger';



const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer
})
const store = createStore(rootReducer, applyMiddleware( thunk));

export default store;