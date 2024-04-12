import openNewProductModal from './openNewProductModal.js';
import showProducts from './showProducts.js';
await showProducts();
const addProductBtn = document.querySelector('.new-product__btn');
addProductBtn.addEventListener('click', openNewProductModal);
