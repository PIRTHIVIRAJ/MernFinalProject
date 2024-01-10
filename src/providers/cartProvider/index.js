import React, { createContext, useContext, useCallback, useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

// Create CartContext
const CartContext = createContext();

// Create CartProvider
const CartProvider = ({ children }) => {
    const cookies = new Cookies(null, { path: '/' });

    const [cart, setCart] = useState(cookies.get('cart') || []);

    const [subtotal, setSubTotal] = useState(0);

    const addCartItem = useCallback((item) => {
        setCart((prev) => {
            const newCart = [...prev, item];
            cookies.set('cart', newCart);
            return newCart;
        });
    }, []);

    const updateCartItem = useCallback((item, data) => {
        try {
            if (item) {
                const index = cart.findIndex(obj => obj.id === item.id);

                cart[index].quantity = data;
            }
        } catch (ex) {
            console.log(ex)
        }
    }, [])

    const removeItem = useCallback((itemToRemove) => {
        setCart((prev) => {
            const newCart = prev.filter((item) => item.id !== itemToRemove);
            cookies.set('cart', newCart);
            return newCart;
        });
    }, []);

    return (
        <CartContext.Provider value={{ cart, addCartItem, removeItem, updateCartItem, subtotal, setSubTotal }}>
            {children}
        </CartContext.Provider>
    );
};

// Create custom hook to use the CartContext
const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export { CartProvider, useCart };
