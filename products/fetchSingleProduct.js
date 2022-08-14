const url = "https://course-api.com/javascript-store-single-product";

const fetchSingleProduct = async (id) => {
	console.log(id);
	const response = await fetch(`${url}?id=${id}`);
	const product = await response.json();
	console.log(product);
	return product;
};

export default fetchSingleProduct;
