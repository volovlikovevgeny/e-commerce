import { createSelector } from 'reselect';

const selectCart = state => {
    // state(cart and user)
    return state.cart;
}

export const selectCartItems = createSelector(
    [selectCart],
    cart => {
        // console.log(cart.cartItems);
        return cart.cartItems
    }
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => {
        return cart.hidden
    }
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => {
        // console.log(cartItems);
        return cartItems.reduce(
            (acc, cartItem) => acc + cartItem.quantity, 0
        )
    }
)


export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => {
        // console.log(cartItems);
        return cartItems.reduce(
            (acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0
        )
    }
)