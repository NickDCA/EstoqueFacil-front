async function getProducts() {
    const response = await fetch('http://localhost:8080/products');
    const productsJson = await response.json();
    return productsJson;
}

export const api = {
    getProducts,
};
