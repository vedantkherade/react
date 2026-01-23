const redux = require('redux');
const redux_logger = require('redux-logger');

const createStore = redux.createStore;
const combineReducer = redux.combineReducers;


const logger = redux_logger.createLogger();

const applyMiddleware = redux.applyMiddleware;


//defining actions
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//action is an object that has type property and its value is a string constant

// {
//     type: BUY_CAKE,
//     info: 'this action is to buy cake'
// }


//action creator -> these are functions that return action
function buyCake(quantity){
    return{
        type: BUY_CAKE,
        payload: quantity
    }
}

function buyIcecream(quantity){
    return{
        type: BUY_ICECREAM,
        payload: quantity
    }
}


// defining initial state fro reducers
const cakeInitialState = {
    numOfCakes: 10
}

const IcecreamInitialState = {
    numOfIcecream: 20
}

const cakeReducer = (state = cakeInitialState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state, numOfCakes: state.numOfCakes - action.payload
        }
      
        default: return state
    }
}



const IcecreamReducer = (state = IcecreamInitialState, action) => {
    switch(action.type){
      
        case BUY_ICECREAM: return{
            ...state, numOfIcecream: state.numOfIcecream - action.payload
        }
        default: return state
    }
}

const rootReducer = combineReducer({
    cake: cakeReducer,
    icecream: IcecreamReducer
})

//createStore is a method that takes reducer as arg to create store
const store = createStore(rootReducer, applyMiddleware(logger));
// console.log("initialState", initialState);

//subscribe method takes listener(callback) as arg and it will be executed everytime the state changes
// let unsubscribe = store.subscribe(() => console.log(store.getState()));

//dispatching action
store.dispatch(buyCake(2));
store.dispatch(buyCake(2));
store.dispatch(buyCake(2));

store.dispatch(buyIcecream(2));
store.dispatch(buyIcecream(2));
store.dispatch(buyIcecream(2));

// unsubscribe();
