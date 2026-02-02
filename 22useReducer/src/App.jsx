import { createContext, useReducer } from "react";
import "./App.css";
import Counter from "./components/Counter";
import CounterFive from "./components/CounterFive";
import CounterFour from "./components/CounterFour";
import CounterThree from "./components/CounterThree";
import CounterTwo from "./components/CounterTwo";
import ComponentA from "./components/reducerContext/ComponentA";
import ComponentB from "./components/reducerContext/ComponentB";
import ComponentC from "./components/reducerContext/ComponentC";
import DataFechingOne from "./components/user/DataFechingOne";

export const CounterContext = createContext();
const initialState = 0;

const reducer = (state, action) => {
    switch(action){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'RESET':
            return initialState;
        default:
            return state
    }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initialState);


  

  return (
    <div className="app-shell">
      <div className="assignment-card">
        {/* <h3>Basic</h3>
        <Counter/>
        <h3>With object</h3>
        <CounterTwo/>
        <h3>With value</h3>
        <CounterThree/>
        <h3>Multiple count state</h3>
        <CounterFour/>
        <h3>Multiple reducers</h3>
        <CounterFive/> */}

        <CounterContext.Provider value={{countState: count, countDispatch: dispatch}}>
          <h1>Count: {count}</h1>
          <ComponentA/>
          <ComponentB/>
          <ComponentC/>
          <DataFechingOne/>
        </CounterContext.Provider>
      </div>
    </div>
  )
}

export default App;