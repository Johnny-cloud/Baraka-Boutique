import express from 'express'
import OrdersController from '../controllers/orders_controller.js'

const route = express.Router()

route.get('/', OrdersController.get_all)
route.post('/', OrdersController.create)

export default route