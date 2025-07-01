import React, { createContext, useContext, useState, useCallback } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string, color: string, size: string) => void;
  updateQuantity: (id: string, color: string, size: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((newItem: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.id === newItem.id && item.color === newItem.color && item.size === newItem.size
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }

      return [...prev, { ...newItem, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: string, color: string, size: string) => {
    setItems(prev => prev.filter(
      item => !(item.id === id && item.color === color && item.size === size)
    ));
  }, []);

  const updateQuantity = useCallback((id: string, color: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id, color, size);
      return;
    }

    setItems(prev => {
      const index = prev.findIndex(
        item => item.id === id && item.color === color && item.size === size
      );

      if (index > -1) {
        const updated = [...prev];
        updated[index].quantity = quantity;
        return updated;
      }

      return prev;
    });
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      itemCount,
      total,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};