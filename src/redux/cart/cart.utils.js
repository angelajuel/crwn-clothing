// utility functions allow us to keep our files clean and organize functions that we may need in multiple files in one location
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1 }]
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => 
        cartItem.id === cartItemToRemove.id
    );

    // if the cartItemToRemove's quantity is 1, then remove it
    if(existingCartItem.quantity === 1) {
        cartItems.filter( 
            cartItem => cartItem.id !== cartItemToRemove.id
        );
    }

    // else, decrease the cart item's quantity and keep every other cart item the exact same 
    return cartItems.map(cartItem => 
        cartItem.id === cartItemToRemove.id 
            ? { ...cartItem, quantity: cartItem.quantity - 1}
            : { cartItem }
    );
};