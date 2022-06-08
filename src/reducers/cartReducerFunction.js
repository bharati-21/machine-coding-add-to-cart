export const cartReducerFunction = (state, { type, payload }) => {
	switch (type) {
		case "SET_CART":
			return { ...state, cart: payload.cart };

		case "SET_LOADER_ERROR":
			return {
				...state,
				cartDataError: payload.error,
				cartDataLoading: payload.loading,
			};

		case "INCREASE_CART_QUANTITY":
			return {
				...state,
				cart: state.cart.map((cartItem) =>
					cartItem._id === payload.product._id
						? { ...cartItem, quantity: cartItem.quantity + 1 }
						: { ...cartItem }
				),
			};

		case "DECREASE_CART_QUANTITY":
			return {
				...state,
				cart: state.cart.map((cartItem) =>
					cartItem._id === payload.product._id
						? { ...cartItem, quantity: cartItem.quantity - 1 }
						: { ...cartItem }
				),
			};

		case "ADD_TO_CART":
			return {
				...state,
				cart: [...state.cart, { ...payload.product, quantity: 1 }],
			};

		case "REMOVE_FROM_CART":
			return {
				...state,
				cart: state.cart.filter(
					(cartItem) => cartItem._id !== payload.product._id
				),
			};

		case "ADD_TO_SAVE_LATER":
			return {
				...state,
				saveForLater: [...state.saveForLater, { ...payload.product }],
				cart: state.cart.filter(
					(item) => item._id !== payload.product._id
				),
			};

		case "REMOVE_FROM_SAVE_LATER":
			return {
				...state,
				saveForLater: state.saveForLater.filter(
					(item) => item._id !== payload.product._id
				),
			};

		default:
			throw new Error("Invalid dispatch type");
	}
};
