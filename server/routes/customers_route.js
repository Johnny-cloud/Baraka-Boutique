import express from 'express'
import CustomersController from '../controllers/customers_controller.js'

const route = express.Router()

route.get('/', CustomersController.get_all)
route.post('/', CustomersController.create)
route.get('/:id', CustomersController.get_one)
route.patch('/:id', CustomersController.update)

export default route