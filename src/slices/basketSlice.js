import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
};

export const basketSlice = createSlice({
	name: "basket",
	initialState,
	reducers: {
		addToBasket: (state, action) => {
			// Payload contains the product. Redux dispatches the product and allows it to be used throughout the application.
			state.items = [...state.items, action.payload];
		},
		removeFromBasket: (state, action) => {
			// Goes through every basket item and matches the ID's
			const index = state.items.findIndex(
				(basketItem) => basketItem.id === action.payload.id
			);
			// Copies current basket
			let newBasket = [...state.items];
			// If it finds the item it's looking for, the index is greater than zero
			if (index >= 0) {
				newBasket.splice(index, 1);
				// If the item exists in the cart, remove it
			} else {
				console.warn(
					// If it doesn't exist, it can't be removed.
					`Cant remove product (id: ${action.payload.id}) as its not in basket!`
				);
			}
			// Assigns items in global store to the basket, which now has items that were removed
			state.items = newBasket;
		},
	},
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how I pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
	state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
