const redux = require('redux');
const createStore = redux.createStore;

//defining actions
const BUY_PIZZA = 'BUY_PIZZA'
const BUY_ICECREAM = 'BUY_ICECREAM'
const BUY_COMBO = "BUY_COMBO"

//action is an object that has type property and its value is a string constant

// {
//     type: BUY_CAKE,
//     info: 'this action is to buy cake'
// }


//action creator -> these are functions that return action
function buyPizza(){
    return{
        type: BUY_PIZZA
    }
}

function buyIcecream(){
    return{
        type: BUY_ICECREAM
    }
}

function buyCombo(){
    return{
        type: BUY_COMBO
    }
}


// defining initial state from reducers
const initialState = {
    numOfPizza: 50,
    numOfIcecream: 50
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_PIZZA: return{
            ...state, numOfPizza: state.numOfPizza - 1
        }
        case BUY_ICECREAM: return{
            ...state, numOfIcecream: state.numOfIcecream - 1
        }
        case BUY_COMBO: return{
            ...state, numOfPizza: state.numOfPizza - 1,
            numOfIcecream: state.numOfIcecream - 1
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
// store.dispatch(buyPizza());
// store.dispatch(buyPizza());
// store.dispatch(buyPizza());
// store.dispatch(buyIcecream());
// store.dispatch(buyIcecream());
store.dispatch(buyCombo());
store.dispatch(buyCombo());
store.dispatch(buyCombo());
store.dispatch(buyCombo());



unsubscribe();
