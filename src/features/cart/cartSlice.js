import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
    items: {},
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const { productId } = action.payload;
            const existingItem = state.items[productId];

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items[productId] = { ...action.payload, quantity: 1 };
            }
        },

        removeItem: (state, action) => {
            const { productId } = action.payload;
            delete state.items[productId];
        },

        updateQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
            const item = state.items[productId];

            if (item) {
                if (quantity <= 0) {
                    delete state.items[productId];
                } else {
                    item.quantity = quantity;
                }
            }
        },

        clearCart: (state) => {
            state.items = {};
        },
    },
});

const selectCartItemsMap = (state) => state.cart.items;

export const selectCartItemsArray = createSelector(
    [selectCartItemsMap],
    (itemsMap) => Object.values(itemsMap)
);

export const selectCartTotalQuantity = createSelector(
    [selectCartItemsArray],
    (itemsArray) => itemsArray.reduce((total, item) => total + item.quantity, 0)
);

export const selectCartQuantity = selectCartTotalQuantity;

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;