const redux = require('redux');
const createStore = redux.createStore;

//defining actions
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//action is an object that has type property and its value is a string constant

// {
//     type: BUY_CAKE,
//     info: 'this action is to buy cake'
// }


//action creator -> these are functions that return action
function buyCake(){
    return{
        type: BUY_CAKE
    }
}

function buyIcecream(){
    return{
        type: BUY_ICECREAM
    }
}


// defining initial state fro reducers
const initialState = {
    numOfCakes: 10,
    numOfIcecream: 20
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state, numOfCakes: state.numOfCakes - 1
        }
        case BUY_ICECREAM: return{
            ...state, numOfIcecream: state.numOfIcecream - 1
        }
        default: return state
    }
}

//createStore is a method that takes reducer as arg to create store
const store = createStore(reducer);
console.log("initialState", initialState);

//subscribe method takes listener(callback) as arg and it will be executed everytime the state changes
let unsubscribe = store.subscribe(() => console.log(store.getState()));

//dispatching action
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());

unsubscribe();
