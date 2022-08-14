import displayProducts from "./displayProducts.js";
import fetchProducts from "./fetchProducts.js";

const products = document.getElementById("products");
const spinner = document.querySelector(".spinner");
spinner.innerHTML = '<div class="loading"></div>';
const productsData = await fetchProducts();
console.log(productsData);
const productsHtml = displayProducts(productsData);
spinner.innerHTML = "";
products.innerHTML = productsHtml;
