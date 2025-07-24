import type { CartItem, Product } from "@/lib/types";
import { createContext, useState, useCallback } from "react";

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  decreaseItem: (id: string) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const CartContext = createContext<CartContextType | null>(null);

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  }, []);

  const decreaseItem = useCallback((id: string) => {
    setCart(prev => {
      return prev.flatMap(item => {
        if (item.id !== id) return item;
  
        const newQuantity = item.quantity - 1;
        if (newQuantity > 0) {
          return { ...item, quantity: newQuantity };
        }
        return [];
      });
    });
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const getTotal = useCallback(() => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, decreaseItem, clearCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};