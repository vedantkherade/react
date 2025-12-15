import React from 'react'
import CartProvider from './CartProvider'
import AuthProvider from './AuthProvider'
import ThemeProvider from './ThemeProvider'

export default function CombinedProvider({children}) {
  return (

        <AuthProvider>
            <ThemeProvider>
                <CartProvider>
                    {children}
                </CartProvider>
            </ThemeProvider>
        </AuthProvider>

      

  )
}
