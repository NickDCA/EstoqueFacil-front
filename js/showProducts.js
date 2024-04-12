import { api } from './api.js';
import openProductModal from './openProductModal.js';

const products = document.querySelector('.products__body');

function createProduct(id, name, price, quantity, active) {
    const product = document.createElement('tr');
    product.className = 'product';
    const status = active ? ['active', 'ATIVO'] : ['inactive', 'INATIVO'];

    product.innerHTML = `
        <th scope="row">${id}</th>
        <td>${name}</td>
        <td>${quantity}</td>
        <td>${price}</td>
        <td class="product__status product__status--${status[0]}">${status[1]}</td>
        <td>
            <button class="secondary edit-btn">
                Editar
            </button>
        </td>
    `;

    const editBtn = product.querySelector('.edit-btn');
    editBtn.addEventListener('click', async (e) => {
        await openProductModal(e.target);
    });

    return product;
}

export default async function showProducts() {
    const productsJson = await api.getProducts();
    productsJson.content.forEach((p) => {
        products.appendChild(
            createProduct(p.id, p.name, p.price, p.quantity, p.active)
        );
    });
}
