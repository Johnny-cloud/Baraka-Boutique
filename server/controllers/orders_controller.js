import Order from "../models/order.js";
import Customer from "../models/customer.js";

class OrdersController{

    static async index(req, res){
        try{
            const orders = await Order.find()
            res.json(orders)

        } catch(err){
            res.status(400).json(err)
        }
    }

    static async create(req, res){
        try{
            const order = await Order.create({...req.body})
            res.json(order)

        } catch(err){
            res.status(400).json(err)

        }
    }

    static async update(req, res){
        try {
            const order = await Order.findByIdAndUpdate(req.params.id, {...req.body}, {new: true})
            res.json(order)
            
        } catch(err) {
            res.status(400).json(err)
        }
    }
}

export default OrdersController