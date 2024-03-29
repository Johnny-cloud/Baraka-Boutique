import express from 'express'
import connectToDB from './dbConnection.js'
import { productsRoute, customersRoute, ordersRoute } from './routes/index.js'
import SessionsController from './controllers/sessions_controller.js'
import CustomersController from './controllers/customers_controller.js'
import Seeder from './seeder.js'
import cors from 'cors'
import session from 'express-session'


const app = express()

app.use(express.json())

app.set("trust proxy", 1)

app.use(cors({
    credentials: true,

    // Development
    // origin: "http://localhost:3000",

    // Production
    origin: "https://baraka-boutique-chepseon.vercel.app"
})) 

app.use(session({
    secret: "mysecretkey12456",
    resave: false,
    saveUninitialized: false,
    name: "sessionId",

    // // // Development
    // cookie: {
    //     secure: false,
    //     httpOnly: true,
    //     sameSite: "lax",
    // }

    // Production
    cookie: {
        secure: true,
        httpOnly: true,
        sameSite: "none",
    }
}))

connectToDB()

app.post('/login', SessionsController.create)

app.delete('/logout', SessionsController.delete)

app.get('/auth', CustomersController.get_one)

app.use('/products', productsRoute)

app.use('/customers', customersRoute)

app.use('/orders', ordersRoute)

// Seeder.seedData()

app.listen(5000, () => console.log(`Listening on port http://localhost:5000`))