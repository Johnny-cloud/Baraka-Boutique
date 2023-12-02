import mongoose from "mongoose";

import Customer from "./customer.js";

const orderSchema = new mongoose.Schema({

    createdAt: {

        type: Date,

        default: () =>  Date.now()

    },

    price: {

        required: true,

        type: Number,

    },

    description: {

        required: true,

        type: String,

    },

    quantity: {

        required: true,

        type: Number,

    },

    status: {

        type: String,

        default: 'pending',

    },

    customer_id: {

        required: true,

        type: mongoose.SchemaTypes.ObjectId,

        ref: Customer,

    }
    
})


const Order = mongoose.model('Order', orderSchema)

export default Order