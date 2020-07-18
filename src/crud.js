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

function editJson(path, callback) {
    const obj = readJson(path)
    //const newObj = callback(obj)
    //fs.writeFile(path, newObj)
}

function createProduct(product) {
    if (!product.id) product.id = sequence.id
    products[product.id] = product
    return product
}/////////////////////////////////////////

function readProducts() {
    return Object.values(readJson('./src/data.json'))
}

function productById(id) {
    return readJson('./src/data.json')[id] || {}
}

function updateProduct(product) {
    products[product.id] = product
    return product
}//////////////////////////////////////

function deleteProduct(id) {
    delete products[id]
}///////////////////////////////////////////

module.exports = { createProduct, readProducts, productById, updateProduct, deleteProduct }