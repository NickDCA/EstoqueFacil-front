async function getAvailableProducts() {
    const response = await fetch('http://localhost:8080/products/available');
    const productsJson = await response.json();
    return productsJson;
}

export const api = {
    getAvailableProducts,
};
