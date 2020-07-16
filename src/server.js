const port = 8081

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const crud = require('./crud')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/products', (req, res) => {
    res.send(crud.readProducts)
})

app.get('/products/:id', (req, res) => {
    res.send(crud.productById(req.params.id))
})

app.post('/products', (req, res) => {
    res.send(crud.createProduct({ name: req.body.name,
                                  price: req.body.price}))
})

app.put('/products/:id', (req, res) => {
    res.send(crud.updateProduct({ name: req.body.name,
                                  price: req.body.price,
                                  id: req.params.id}))
})

app.delete('/products/:id', (req, res) => {
    res.send(crud.deleteProduct(req.params.id))
})

app.listen(port, () => {
    console.log(`Running on port ${port} ...`)
})