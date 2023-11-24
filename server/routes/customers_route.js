import express from 'express'
import CustomersController from '../controllers/customers_controller.js'

const customersRoute = express.Router()

customersRoute.get('/', CustomersController.index)
customersRoute.post('/', CustomersController.create)
customersRoute.get('/:id', CustomersController.show)
customersRoute.patch('/:id', CustomersController.update)

export default customersRoute