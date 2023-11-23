import express from 'express'
import connectToDB from './dbConnection.js'
import { productsRoute, customersRoute } from './routes/index.js'
import SessionsController from './controllers/sessions_controller.js'
import CustomersController from './controllers/customers_controller.js'
import Seeder from './seeder.js'
import session from 'express-session'

const app = express()

connectToDB()

app.use(express.json())

app.use(session({
    secret: 'Braka Botique secret key',
    resave: false,
    saveUninitialized: false
}))

app.use('/products', productsRoute)
app.use('/customers', customersRoute)
app.post('/login', SessionsController.create)
app.delete('/logout', SessionsController.destroy)
app.get('/auth', CustomersController.show)



//  Seeder.seedData()
app.listen(3000, () => console.log(`Listening on port http://localhost:3000`))