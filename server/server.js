import express from 'express'
import connectToDB from './dbConnection.js'
import { productsRoute, customersRoute } from './routes/index.js'

const app = express()

connectToDB()

app.use('/', (req, res) => {
    res.send('<h1> Baraka Botique SERVER SIDE </h1>')
})

app.use('/products', productsRoute)
app.use('/customers', customersRoute)

app.listen(3000, () => console.log(`Listening on port http://localhost:3000`))