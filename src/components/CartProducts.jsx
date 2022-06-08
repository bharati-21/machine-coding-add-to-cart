import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts";
import { ProductList } from "./ProductList";

const CartProducts = () => {
	const { cart, saveForLater } = useCart();

	return (
		<div className="cart-products-wrapper">
			<section className="cart-products-list flex-col flex-justify-start flex-align-start">
				{!cart?.length ? (
					<div className="flex-col flex-justify-center flex-align-start">
						<h1 className="text-start success-color my-2">
							No products in cart!
						</h1>
						<Link
							to="/"
							className="btn btn-primary text-sm px-0-5 py-0-25"
						>
							Explore products!
						</Link>
					</div>
				) : (
					<>
						<h1 className="text-left success-color my-2">
							My cart
						</h1>
						<div className="product-list cart-products">
							<ProductList products={cart} page="cart" />
						</div>
					</>
				)}
			</section>
			{saveForLater?.length ? (
				<section className="mt-4 save-for-later-products-list flex-col flex-justify-start flex-align-start">
					<h1 className="text-center success-color my-2">
						Saved for Later
					</h1>

					<div className="product-list cart-products">
						<ProductList
							products={saveForLater}
							page="cart"
							list="save-for-later"
						/>
					</div>
				</section>
			) : null}
		</div>
	);
};

export { CartProducts };
