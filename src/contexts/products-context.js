import { createContext, useContext, useEffect, useReducer } from "react";
import { productsReducerFunction } from "../reducers";
import data from "../products.json";

const initialState = {
	products: [],
	cart: [],
	saveLater: [],
	cartLoading: true,
	cartError: false,
	productsDataLoading: true,
	productsDataError: null,
};

const ProductsContext = createContext();
const { Provider } = ProductsContext;

const ProductsProvider = ({ children }) => {
	const [productsData, productsDataDispatch] = useReducer(
		productsReducerFunction,
		initialState
	);

	useEffect(() => {
		let timeoutId = setTimeout(() => {
			productsDataDispatch({
				type: "SET_PRODUCTS",
				payload: { products: data.data },
			});
			productsDataDispatch({
				type: "SET_LOADER_ERROR",
				payload: { loading: false, error: null },
			});
		}, 800);

		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<Provider value={{ ...productsData, productsDataDispatch }}>
			{children}
		</Provider>
	);
};

const useProducts = () => useContext(ProductsContext);

export { useProducts, ProductsProvider };
