import express from 'express'
import CustomersController from '../controllers/customers_controller.js'

const customersRoute = express.Router()

customersRoute.get('/', CustomersController.index)

export default customersRoute