import { api } from './api.js';

const products = document.querySelector('.products');

function createProduct(id, name, price, quantity, active) {
    const product = document.createElement('li');
    product.className = 'product';
    const status = active ? ['active', 'Ativo'] : ['inactive', 'Inativo'];

    product.innerHTML = `
        <p class="product__id">${id}</p>
        <p class="product__name">${name}</p>
        <p class="product__price">$${price}</p>
        <p class="product__quantity">${quantity}</p>
        <div class="status__wrapper">
            <p class="product__status product__status--${status[0]}">
                ${status[1]}
            </p>
        </div>
        <button class="product__edit"><i class="bi bi-three-dots"></i></button>
    `;

    return product;
}

export default async function showProducts() {
    const response = await api.getProducts();
    response.content.forEach((p) => {
        products.appendChild(
            createProduct(p.id, p.name, p.price, p.quantity, p.active)
        );
    });
}
