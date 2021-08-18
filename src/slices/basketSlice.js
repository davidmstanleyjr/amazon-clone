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
			const index = state.items.findIndex(
				(basketItem) => basketItem.id === action.payload.id
			);
			let newBasket = [...state.items];

			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Cant remove product (id: ${action.payload.id}) as its not in basket!`
				);
			}

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
