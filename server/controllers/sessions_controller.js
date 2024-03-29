import Customer from "../models/customer.js";
import Order from "../models/order.js";

class SessionsController{

    async create(req, res){
        try{
            const customer = await Customer.findOne({email: req.body.email})

            if(customer.password === req.body.password){
                req.session.customer_id = customer._id
                const orders = await Order.find({customer_id: customer._id})
                const {_id, name, email, password} = customer
                res.json({_id, name, email, password, orders})
            }

        } catch(err){
            res.status(400).json(err)
        }
    }

    async delete(req, res){
        try{
            req.session.destroy()
            res.status(204).json()

        } catch(err){
            res.status(400).json(err)
        }
    }
}

export default new SessionsController()