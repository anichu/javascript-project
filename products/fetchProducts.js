const url = "https://course-api.com/javascript-store-products";

const fetchProducts = async () => {
	const response = await fetch(url);
	const products = await response.json();

	return products;
};

export default fetchProducts;
