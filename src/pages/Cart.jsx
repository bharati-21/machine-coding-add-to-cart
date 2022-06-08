import React from "react";
import { CartProducts } from "../components/CartProducts";
import { CartSummary } from "../components/CartSummary";
import { useCart } from "../contexts";

const Cart = () => {
	const { cartDataLoading, cartDataError } = useCart();

	return cartDataError ? (
		<h1 class="error-color">Some error occured</h1>
	) : cartDataLoading ? (
		<h1 className="success-color">Loading Products...</h1>
	) : (
		<div className="cart-page-wrapper">
			<CartProducts />
			<CartSummary />
		</div>
	);
};

export { Cart };
