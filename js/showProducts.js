import { api } from './api.js';

const products = document.querySelector('.products');

function createProduct(name, price, quantity) {
    const product = document.createElement('li');
    product.className = 'product';
    const status = parseInt(quantity) > 0 ? 'available' : 'out';

    product.innerHTML = `
        <h3 class="product__name">${name}</h3>
        <p class="product__price">$${price}</p>
        <p class="product__quantity">${quantity}</p>
        <div class="status__wrapper">
            <p class="product__status product__status--${status}">
                ${status}
            </p>
        </div>
    `;

    return product;
}

export default async function showProducts() {
    const productsJson = await api.getAvailableProducts();
    productsJson.forEach((p) => {
        products.appendChild(createProduct(p.name, p.price, p.quantity));
    });
}
