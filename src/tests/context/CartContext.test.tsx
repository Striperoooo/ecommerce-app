import { renderHook, act } from '@testing-library/react';
import { CartProvider } from '../../context/CartContext';
import { useCart } from '../../hooks/useCartHook';
import type { ReactNode } from 'react';

// Wrapper for the provider
const wrapper = ({ children }: { children: ReactNode }) => (
    <CartProvider>{children}</CartProvider>
);

describe('CartContext', () => {
    it('provides initial empty state', () => {
        const { result } = renderHook(() => useCart(), { wrapper });
        expect(result.current.cart).toEqual([]);
    });

    it('adds an item to the cart', () => {
        const { result } = renderHook(() => useCart(), { wrapper });

        const product = {
            id: 1,
            name: 'Test Product',
            cartName: 'Test Product',
            image: { mobile: '', tablet: '', desktop: '' },
            price: 100,
            quantity: 2
        };

        act(() => {
            result.current.addToCart(product);
        });

        expect(result.current.cart).toHaveLength(1);
        expect(result.current.cart[0].id).toBe(1);
        expect(result.current.cart[0].quantity).toBe(2);
    });

    it('removes all items from cart', () => {
        const { result } = renderHook(() => useCart(), { wrapper });

        const product = {
            id: 1,
            name: 'Test Product',
            cartName: 'Test Product',
            image: { mobile: '', tablet: '', desktop: '' },
            price: 100,
            quantity: 1
        };

        act(() => {
            result.current.addToCart(product);
        });

        expect(result.current.cart).toHaveLength(1);

        act(() => {
            result.current.clearCart();
        });

        expect(result.current.cart).toHaveLength(0);
    });
});
