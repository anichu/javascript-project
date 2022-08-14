const displayProducts = (products) => {
	const productsHtml = products.map((product) => {
		console.log();
		const img =
			product && product.fields && product.fields.image[0]
				? product.fields.image[0].thumbnails.large.url
				: null;
		const title = product.fields.name;
		const price = product.fields.price;
		const id = product.id;
		const url = `product.html?id=${id}`;

		return `
    <article class='product' >
      <a href=${url} class='product-link' >
        <div class='product-image'>
          <img src=${img} />
        </div> 
        <div class='product-info'>
          <h2 class='product-title'> ${title} </h2>
          <h4 class='product-price'> $${price} </h4>
          
        </div>
      </a>   

    </article>
    `;
	});

	return productsHtml.join("");
};

export default displayProducts;
