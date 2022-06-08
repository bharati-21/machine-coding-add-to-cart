import { Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Products } from "./pages/Products";

const App = () => {
	return (
		<main className="App p-2 flex-col flex-align-center flex-justify-start">
			<Routes>
				<Route page="products" path="/" element={<Products />} />
				<Route page="cart" path="/cart" element={<Cart />} />
			</Routes>
		</main>
	);
};

export default App;
