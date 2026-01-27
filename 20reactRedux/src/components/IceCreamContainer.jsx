import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyicecream } from '../redux/icecream/icecreamActions';



export default function IceCreamContainer() {

    const numOfIceCream = useSelector(state => state.icecream.numOfIcecream)  

    const dispatch = useDispatch();

    const [iceCreamNumber, setIceCreamNumber] = useState(1);

  return (
    <div>
      <h1>IceCream: {numOfIceCream}</h1>
            <input type="number" value={iceCreamNumber} onChange={(e) => setIceCreamNumber(e.target.value) }/>
            <button onClick={() => dispatch(buyicecream(iceCreamNumber))}>Buy Icecream</button>
    </div>
  )
}
