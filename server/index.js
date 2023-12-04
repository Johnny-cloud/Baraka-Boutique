import express from 'express'
import connectToDB from './dbConnection.js'
import { productsRoute, customersRoute, ordersRoute } from './routes/index.js'
import SessionsController from './controllers/sessions_controller.js'
import CustomersController from './controllers/customers_controller.js'
import Seeder from './seeder.js'
import cors from 'cors'
import session from 'express-session'


const app = express()
// const connURI = "mongodb+srv://John:ynnhoj157@cluster0.76ioyjl.mongodb.net/baraka_boutique?retryWrites=true&w=majority"
// const connURI = "mongodb://localhost/baraka_botique"
app.use(express.json())
app.use(cors({ 
    credentials: true, 
    origin: ["http://localhost:3000",]
})) //enable fetch to send cookies
connectToDB()
app.use(session({
    secret: "mysecretkey123456",
    resave: false,
    saveUninitialized: false
}))
app.post('/login',SessionsController.create)
app.delete('/logout', SessionsController.destroy)
app.get('/auth', CustomersController.show)
app.use('/products', productsRoute)
app.use('/customers', customersRoute)
app.use('/orders', ordersRoute)

// Seeder.seedData()

app.listen(5000, () => console.log(`Listening on port http://localhost:5000`))