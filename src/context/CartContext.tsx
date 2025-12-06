import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { ImageSet } from '../types';

export interface CartItem {
    id: number;
    name: string;
    cartName: string;
    image: ImageSet;
    price: number;
    quantity: number;
}

export interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    updateItemQuantity: (id: number, quantity: number) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = (
    { children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (itemToAdd: CartItem) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === itemToAdd.id);

            if (existingItem) {
                return prevCart.map(item =>
                    item.id === itemToAdd.id
                        ? { ...item, quantity: item.quantity + itemToAdd.quantity }
                        : item
                );
            }
            // Otherwise, add the new item to the cart
            return [...prevCart, itemToAdd];
        });
    };

    const updateItemQuantity = (id: number, quantity: number) => {
        setCart(prevCart => {
            return prevCart.map(item =>
                item.id === id
                    ? { ...item, quantity: quantity }
                    : item
            )
        })
    }

    const removeFromCart = (id: number) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id))
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            updateItemQuantity,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
};
