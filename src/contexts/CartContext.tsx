'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface CartContextType {
  totalItems: number
  addItem: () => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Lazy initialization: read cart from localStorage only once
  const [totalItems, setTotalItems] = useState<number>(() => {
    if (typeof window === 'undefined') return 0
    const stored = localStorage.getItem('cart')
    return stored ? JSON.parse(stored) : 0
  })

  // Persist changes to localStorage whenever totalItems changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(totalItems))
    }
  }, [totalItems])

  const addItem = () => setTotalItems((prev) => prev + 1)
  const clearCart = () => setTotalItems(0)

  return (
    <CartContext.Provider value={{ totalItems, addItem, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used inside CartProvider')
  return context
}
