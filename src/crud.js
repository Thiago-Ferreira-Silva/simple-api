const fs = require('fs')

const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

function readJson(path, callback) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) console.log(err)
        const object = JSON.parse(data)
        return callback(null, object)
    })
}

const abb = readJson('./src/data.json', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
    return data
})

console.log('fff', abb)

//const products = {}

function createProduct(product) {
    if (!product.id) product.id = sequence.id
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