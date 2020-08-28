import { createSelector } from 'reselect';
import { createStore } from 'redux';
import CartItem from '../../components/cart-item/cart-item.component';

// input sleector returns one slice of state
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    //first argument is input selector array
    [selectCart],
    //second argument is what we want to return from that selector
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
            accumulatedQuantity + cartItem.quantity,
        0
    )
);