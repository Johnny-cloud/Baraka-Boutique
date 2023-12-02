import express from 'express'

import ProductsController from '../controllers/products_controller.js'

const productsRoute = express.Router()

productsRoute.get('/', ProductsController.index)

export default productsRoute