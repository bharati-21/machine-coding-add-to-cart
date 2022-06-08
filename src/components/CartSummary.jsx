import React from "react";
import { useCart } from "../contexts";

const CartSummary = () => {
	const { cart } = useCart();
	const totalItemsInCart = cart?.length
		? cart?.reduce((accum, current) => current.quantity + accum, 0)
		: 0;
	const totalDiscountedPrice = cart?.length
		? cart?.reduce(
				(accum, current) =>
					accum + current.discountedPrice * current.quantity,
				0
		  )
		: 0;
	const totalOriginalPrice = cart?.length
		? cart?.reduce(
				(accum, current) =>
					accum + current.originalPrice * current.quantity,
				0
		  )
		: 0;

	if (!cart?.length) {
		return (
			<section className="flex-col p-0-75 cart-summary-wrapper flex-justify-start flex-align-start">
				<h3 className="text-start success-color my-2">
					No summary to show!
				</h3>
			</section>
		);
	}

	return (
		<section className="flex-col cart-summary-wrapper p-0-75 flex-justify-start flex-align-start">
			<h2 className="text-left success-color my-2">Cart summary</h2>
			<div className="flex-row summary-item flex-align-center">
				<h6>Total Items:</h6>
				<p className="text-reg">{totalItemsInCart}</p>
			</div>
			<div className="flex-row summary-item flex-align-center">
				<h6>Original Price:</h6>
				<p className="text-reg">{totalOriginalPrice}</p>
			</div>
			<div className="flex-row summary-item flex-align-center">
				<h6>Discounted Price:</h6>
				<p className="text-reg">{totalDiscountedPrice}</p>
			</div>

			<div className="flex-row saving-price summary-item flex-align-center pt-1 mt-1">
				<h6>You save:</h6>
				<p className="text-reg">
					{totalOriginalPrice - totalDiscountedPrice}
				</p>
			</div>
		</section>
	);
};

export { CartSummary };
