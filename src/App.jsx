import { NavLink, Route, Routes } from "react-router-dom";
import { useCart } from "./contexts";
import { Cart } from "./pages/Cart";
import { Products } from "./pages/Products";

const App = () => {
	const { cart } = useCart();
	return (
		<div className="app-wrapper">
			<nav className="navbar py-1 px-2-5">
				<div className="nav-wrapper flex-row flex-justify-betweeen flex-align-center">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/cart" className="btn btn-primary">
						Cart <span>{cart?.length || 0}</span>
					</NavLink>
				</div>
			</nav>
			<main className="App p-2 flex-col flex-align-center flex-justify-start">
				<Routes>
					<Route page="products" path="/" element={<Products />} />
					<Route page="cart" path="/cart" element={<Cart />} />
				</Routes>
			</main>
		</div>
	);
};

export default App;
