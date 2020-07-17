const sequence = {
    _id: 1,
    get id() { return this._id++}
}

const products = {}

function createProduct(product) {
    if(!product.id) product.id = sequence.id
    products[product.id] = product
    return product
}

function readProducts() {
    return Object.values(products) 
}

function productById(id) {
    return products[id] || {}
}

function updateProduct(product) {
    products[product.id] = product
    return product
}

function deleteProduct(id) {
    delete products[id]
}

module.exports = { createProduct, readProducts, productById, updateProduct, deleteProduct }