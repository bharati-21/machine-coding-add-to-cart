import React from "react";
import { ProductList } from "../components/ProductList";
import { useProducts } from "../contexts";

const Products = () => {
	const { products, productsDataLoading, productsDataError } = useProducts();

	console.log(productsDataLoading);

	return (
		<section className="product-list">
			{productsDataError ? (
				<h1 class="error-color">Some error occured</h1>
			) : productsDataLoading ? (
				<h1 className="success-color">Loading Products...</h1>
			) : (
				<ProductList products={products} page={"products"} />
			)}
		</section>
	);
};

export { Products };
