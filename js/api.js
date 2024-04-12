async function getProducts() {
    const response = await fetch('http://localhost:8080/products');
    const productsJson = await response.json();
    return productsJson;
}

async function updateProduct(data, id) {
    const response = await fetch(`http://localhost:8080/products/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

async function createProduct(data) {
    const response = await fetch('http://localhost:8080/products', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export const api = {
    getProducts,
    updateProduct,
    createProduct,
};
