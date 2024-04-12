import { api } from './api.js';

export default function openNewProductModal() {
    const modal = document.querySelector('#product__modal');
    modal.innerHTML = `
        <article>
            <header>
                <button
                    aria-label="Close"
                    rel="prev"
                    id="close-btn"
                ></button>
                <strong>Cadastrar produto</strong>
            </header>
        
            <form>
                <fieldset>
                    <label>
                        Nome
                        <input
                        name="product-name"
                        placeholder="Ventilador"
                        autocomplete="given-name"
                        />
                    </label>
                    <label>
                        Descrição
                        <input
                        name="product-description"
                        placeholder="Eletrodoméstico para ventilação"
                        />
                    </label>
                    <label>
                        Quantidade
                        <input
                        type="number"
                        name="product-quantity"
                        placeholder="1"
                        />
                    </label>
                    <label>
                        Price
                        <input
                        type="number"
                        name="product-price"
                        placeholder="45.67"
                        />
                    </label>
                </fieldset>
        
            <input
            type="submit"
            value="Cadastrar"
            id="submit"
            />
        </form>
        </article>
    `;
    modal.toggleAttribute('open');
    const modalExitBtn = modal.querySelector('#close-btn');
    modalExitBtn.addEventListener('click', (e) => {
        modal.toggleAttribute('open');
    });

    const submitBtn = modal.querySelector('#submit');
    submitBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        const modalForm = modal.querySelector('form');
        const formData = new FormData(modalForm);
        console.log(formData);
        const newProductData = {
            name: formData.get('product-name'),
            description: formData.get('product-description'),
            quantity: formData.get('product-quantity'),
            price: formData.get('product-price'),
        };
        console.log(newProductData);
        await api.createProduct(newProductData);
        window.location.reload();
    });
}
