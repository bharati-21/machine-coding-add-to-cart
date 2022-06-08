import React from "react";
import { useCart } from "../contexts";

const CartProduct = ({ product, list }) => {
	const { cartDataDispatch } = useCart();

	const handleSaveForLater = () => {
		if (list === "save-for-later") {
			cartDataDispatch({
				type: "REMOVE_FROM_SAVE_LATER",
				payload: { product },
			});
			return;
		}
		cartDataDispatch({
			type: "ADD_TO_SAVE_LATER",
			payload: { product },
		});
	};
	const quantity = product.quantity;

	const handleDecreaseQuantity = (event) => {
		if (quantity === 1) {
			cartDataDispatch({
				type: "REMOVE_FROM_CART",
				payload: { product },
			});
			return;
		}
		cartDataDispatch({
			type: "DECREASE_CART_QUANTITY",
			payload: { product },
		});
	};

	const handleIncreaseQuantity = (event) => {
		cartDataDispatch({
			type: "INCREASE_CART_QUANTITY",
			payload: { product },
		});
	};

	const handleRemoveFromCart = () => {
		cartDataDispatch({
			type: "REMOVE_FROM_CART",
			payload: { product },
		});
	};

	return (
		<div className="card p-0-5 cart-product card-vertical flex-col flex-justify-center flex-align-center">
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
			<div className="cart-quantity flex-row flex-justify-center flex-align-center">
				<button
					className="btn btn-primary"
					onClick={handleDecreaseQuantity}
				>
					-
				</button>
				{quantity}
				<button
					className="btn btn-primary"
					onClick={handleIncreaseQuantity}
				>
					+
				</button>
			</div>
			<div className="card-footer">
				<button
					className="btn btn-primary btn-full-width p-0-25"
					onClick={handleSaveForLater}
				>
					{list === "save-for-later"
						? "Remove from save later"
						: "Add to save for later"}
				</button>

				{list === "save-for-later" ? null : (
					<button
						className="btn btn-primary btn-full-width p-0-25 btn-outline"
						onClick={handleRemoveFromCart}
					>
						Remove from Cart
					</button>
				)}
			</div>
		</div>
	);
};

export { CartProduct };
