import { api } from './api.js';

export default async function openProductModal(product) {
    const productCells = product.parentElement.parentElement.childNodes;
    const productInfo = {
        id: productCells[1].textContent,
        name: productCells[3].textContent,
        quantity: productCells[5].textContent,
        price: productCells[7].textContent,
        active: productCells[9].textContent,
    };

    const productModal = document.querySelector('#product__modal');
    productModal.innerHTML = `
            <article>
                    <header>
                        <button
                            aria-label="Close"
                            rel="prev"
                            id="close-btn"
                        ></button>
                        <p>Editar produto</p>
                    </header>
                <form>
                    <fieldset>
                            <label>
                            Nome
                            <input
                                name="name"
                                placeholder="${productInfo.name}"
                                autocomplete="given-name"
                            />
                            </label>
                            <label>
                            Preço
                            <input
                                type="number"
                                name="price"
                                placeholder="${productInfo.price}"
                            />
                            </label>
                        
                            <label>
                                <input type="radio" name="validation-states" aria-invalid="false" id="radio-active"/>
                                Ativo
                            </label>

                            <label>
                                <input type="radio" name="validation-states" aria-invalid="true" id="radio-inactive"/>
                                Inativo
                            </label>
                    </fieldset>

                        <input
                            type="submit"
                            value="Modificar produto"
                            id="update-product"
                        />
                </form>
            </article>
    `;
    productInfo.active === 'ATIVO'
        ? document.querySelector('#radio-active').toggleAttribute('checked')
        : document.querySelector('#radio-inactive').toggleAttribute('checked');
    const modalExitBtn = document.querySelector('#close-btn');
    modalExitBtn.addEventListener('click', (e) => {
        const productModal = document.querySelector('#product__modal');
        productModal.toggleAttribute('open');
    });
    productModal.toggleAttribute('open');

    const updateProduct = productModal.querySelector('#update-product');
    updateProduct.addEventListener('click', async (e) => {
        e.preventDefault();

        const modalForm = productModal.querySelector('form');
        const formData = new FormData(modalForm);
        const isActive = productModal.querySelector('#radio-active').checked;
        console.log(isActive);

        const request = {
            id: productInfo.id,
            name: formData.get('name'),
            price: formData.get('price'),
            active: isActive,
        };
        await api.updateProduct(request, request.id);
        window.location.reload();
    });
}
