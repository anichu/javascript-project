const displaySingleProduct = (product) => {
	const img =
		product && product.fields && product.fields.image[0]
			? product.fields.image[0].thumbnails.large.url
			: null;
	const title = product.fields.name;
	const price = product.fields.price;
	const company = product.fields.company;
	const description = product.fields.description;
	return `
  <div class='product-box'>
    <div class="image-box">
      <img src=${img} />
    </div>
    <div class='single-product-info'>
      <h1 class='single-product-title'> ${title} </h1>
      <h3 class='single-product-company-name'> ${company} </h3>
      <h4 class='single-product-company-price'> $${price} </h4>
      <span class='red-ball'></span>
      <span class='black-ball'></span>
      <div class='description'>
        ${description}
      </div>
      <a class="back-to-home-button add-to-cart" href="index.html">add to cart</a>
    </div>
    <br/>
    <br/>
    <br/>

  </div>
  
  `;
};

export default displaySingleProduct;
