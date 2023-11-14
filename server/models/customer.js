import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    orders: [
        {   
            createdAt: {
                type: Date,
                default: () =>  Date.now()
            },
            cart: [
                {
                    product: {
                        name: String,
                        price: String,
                        description: String,
                        size: String,
                    }
                }
            ]
        }
    ]
})

const Customer = mongoose.model('Customer', customerSchema)
export default Customer