export const productsReducerFunction = (state, { type, payload }) => {
	switch (type) {
		case "SET_PRODUCTS":
			return { ...state, products: payload.products };

		case "SET_LOADER_ERROR":
			return {
				...state,
				productsDataError: payload.error,
				productsDataLoading: payload.loading,
			};

		default:
			throw new Error("Invalid dispatch type");
	}
};
