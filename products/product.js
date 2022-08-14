import displaySingleProduct from "./displaySingleproduct.js";
import fetchSingleProduct from "./fetchSingleProduct.js";

const product = document.querySelector(".single-product");
const id = window.location.search.slice(4);
product.innerHTML = "<h1> Loading.... </h1>";
console.log(id);
const productData = await fetchSingleProduct(id);
console.log(productData);
const productHtml = displaySingleProduct(productData);
product.innerHTML = productHtml;
