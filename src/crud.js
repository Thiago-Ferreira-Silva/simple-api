const sequence = {
    _id: 1,
    get id() { return this._id++}
}

const products = {}

function createProduct(product) {
    if(!product.id) product.id = sequence.id
    products[product.id] = product
}

function readProducts() {

}

function productById(id) {

}

function updateProduct(id) {

}

function deleteProduct(id) {

}

module.exports = { createProduct, readProducts, productById, updateProduct, deleteProduct }