import React from "react";
import { Card } from "./Card";
import { CartProduct } from "./CartCard";

const ProductList = ({ products, page, list }) => {
	if (page === "cart")
		return products.map((product) => (
			<CartProduct
				page={page}
				product={product}
				key={product._id}
				list={list}
			/>
		));
	return products.map((product) => (
		<Card page={page} product={product} key={product._id} />
	));
};

export { ProductList };
