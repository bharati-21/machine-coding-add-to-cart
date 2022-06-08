import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CartProvider, ProductsProvider } from "./contexts";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<ProductsProvider>
				<CartProvider>
					<App />
				</CartProvider>
			</ProductsProvider>
		</Router>
	</React.StrictMode>
);
