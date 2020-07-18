const fs = require('fs')

const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

function readJson(path) {
    try {
        return JSON.parse(fs.readFileSync(path, 'utf8'))
    }catch(err) {
        throw err
    }
}

function editJson(path, product) {
    const products = readJson(path)
    products[product.id] = product
    fs.writeFile('./src/data.json', JSON.stringify(products), err => {})
}

function createProduct(product) {
    if (!product.id) product.id = sequence.id
    editJson('./src/data.json', product)
    return product
    // o sequence.id não está funcionando
}

function readProducts() {
    return Object.values(readJson('./src/data.json'))
}

function productById(id) {
    return readJson('./src/data.json')[id] || {}
}

function updateProduct(product) {
    editJson('./src/data.json', product)
    return product
}

function deleteProduct(id) {
    const products = readJson('./src/data.json')
    delete products[id]
    fs.writeFile('./src/data.json', JSON.stringify(products), err => {})
}

module.exports = { createProduct, readProducts, productById, updateProduct, deleteProduct }