const fs = require('fs')

function getId() {
    products = Object.keys(JSON.parse(fs.readFileSync('./src/data.json', 'utf8')))
    products.sort((a, b) => a-b)
    const id = parseInt(products[products.length -1 ]) + 1
    return id
}

const aa = getId()
console.log(aa)

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
    if (!product.id) product.id = getId()
    editJson('./src/data.json', product)
    return product
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