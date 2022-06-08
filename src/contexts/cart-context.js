import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducerFunction } from "../reducers";

const initialState = {
	cart: [],
	saveForLater: [],
	cartDataLoading: true,
	cartDataError: false,
};

const CartContext = createContext();
const { Provider } = CartContext;

const CartProvider = ({ children }) => {
	const [cartData, cartDataDispatch] = useReducer(
		cartReducerFunction,
		initialState
	);

	useEffect(() => {
		cartDataDispatch({
			type: "SET_CART",
			payload: { cart: [] },
		});

		cartDataDispatch({
			type: "SET_LOADER_ERROR",
			payload: { loading: false, error: null },
		});
	}, []);

	return (
		<Provider value={{ ...cartData, cartDataDispatch }}>
			{children}
		</Provider>
	);
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
