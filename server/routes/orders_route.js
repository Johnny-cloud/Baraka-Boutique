import express from 'express'
import OrdersController from '../controllers/orders_controller.js'

const ordersRoute = express.Router()

ordersRoute.get('/', OrdersController.index)
ordersRoute.post('/', OrdersController.create)

export default ordersRoute