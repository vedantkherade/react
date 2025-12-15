import React, { useState } from 'react'
import { CartContext } from './CartContext';

export default function CartProvider({children}) {
    const [cart, setCart] = useState([]);

    function addItem(item){
       setCart([...cart, item]);
    }

    function removeItem(id){
       setCart(cart.filter((i) => i.id !== id));
    }


  return (
    <CartContext.Provider value={{cart, addItem, removeItem}}>
        {children}
    </CartContext.Provider>
      
  )
}
