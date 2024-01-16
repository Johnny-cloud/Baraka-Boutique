import Customer from "../models/customer.js";
import Order from "../models/order.js";

class CustomersController{
    
    async get_all(req, res){
        try {
            const customers = await Customer.find()
            res.json(customers)
        } catch(err) {
            res.status(400).json({err})
        }
    }

    async create(req, res){
        try{
            const customer = await Customer.create({...req.body})
            res.json(customer)
        } catch(err){
            res.status(400).json(err)
        }
    }

    async update(req, res){
        try{
            const customer = await Customer.findByIdAndUpdate(req.params.id, {...req.body}, {new: true})
            res.json(customer)
        } catch(err){
            res.status(404).json(err)
        }
    }

    async get_one(req, res){
        try{
            const customer = await Customer.findById(req.session.customer_id)
            const orders = await Order.find({customer_id: customer._id})
            const {_id, name, email, password} = customer
            res.json({_id, name, email, password, orders})

        } catch(err) {
            res.status(400).json(err)
        }
    }
}




export default new CustomersController ()