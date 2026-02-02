import React, { useReducer } from 'react'

const initialState = {
    firstCount: 0,
    secondCount: 0
};

const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return{
                ...state,
                firstCount: state.firstCount + action.value
            }
        case 'DECREMENT':
            return{
                ...state,
                firstCount: state.firstCount - action.value
            }
        case 'INCREMENT_TWO':
            return{
                ...state,
                secondCount: state.secondCount + action.value
            }
        case 'DECREMENT_TWO':
            return{
                ...state,
                secondCount: state.secondCount - action.value
            }
        case 'RESET':
            return initialState;
            
        default:
            return state
    }
}

export default function CounterFour() {

    const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter: {count.firstCount}</h1>
      <button onClick={() => dispatch({type: 'INCREMENT', value: 1})}>Increase</button>
      <button onClick={() => dispatch({type: 'INCREMENT', value: 5})}>Increase by 5</button>
      <button onClick={() => dispatch({type: 'DECREMENT', value: 1})}>Decrease</button>
      <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>

       <h1>Counter: {count.secondCount}</h1>
      <button onClick={() => dispatch({type: 'INCREMENT_TWO', value: 1})}>Increase</button>
      <button onClick={() => dispatch({type: 'INCREMENT_TWO', value: 5})}>Increase by 5</button>
      <button onClick={() => dispatch({type: 'DECREMENT_TWO', value: 1})}>Decrease</button>
      
    </div>
  )
}
