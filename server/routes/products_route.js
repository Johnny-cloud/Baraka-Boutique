import express from 'express'
import ProductsController from '../controllers/products_controller.js'

const route = express.Router()

route.get('/', ProductsController.get_all)

export default route