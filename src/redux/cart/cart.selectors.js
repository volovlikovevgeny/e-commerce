import { createSelector } from 'reselect';

const selectCart = state => {
    console.log((state.cart))
    return state.cart;
}

export const selectCartItems = createSelector(
    [selectCart],
    cart => {
        console.log(cart.cartItems);
        return cart.cartItems
    }
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => {
        console.log(cartItems);
        return cartItems.reduce(
            (acc, cartItem) => acc + cartItem.quantity, 0
        )
    }
)