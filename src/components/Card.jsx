import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts";

const Card = ({ product }) => {
	const { cart, cartDataDispatch } = useCart();
	const isProductInCart = cart?.find(
		(cartItem) => cartItem._id === product._id
	)
		? true
		: false;

	const handleAddToCart = () => {
		cartDataDispatch({
			type: "ADD_TO_CART",
			payload: { product },
		});
	};

	return (
		<div className="card p-0-5 card-vertical flex-col flex-align-center flex-justify-start">
			<div className="card-header flex-row flex-justify-center flex-align-center">
				<img
					className="card-img product-image"
					src={product.productImage}
					alt={product.product}
				/>
			</div>
			<div className="card-main flex-col flex-justify-center flex-align-start">
				<h5 className="card-title">{product.product}</h5>
				<div className="card-description flex-row flex-justify-between flex-wrap flex-align-center">
					<h6 className="product-discounted-price success-color">
						{product.discountedPrice}
					</h6>
					<h6 className="product-original-price linethrough error-color">
						{product.originalPrice}
					</h6>
				</div>
			</div>
			<div className="card-footer">
				{isProductInCart ? (
					<Link
						to="/cart"
						className="btn btn-primary btn-full-width p-0-25 text-sm"
					>
						Go to Cart
					</Link>
				) : (
					<button
						className="btn btn-primary btn-full-width p-0-25"
						onClick={handleAddToCart}
					>
						Add to Cart
					</button>
				)}
			</div>
		</div>
	);
};

export { Card };
