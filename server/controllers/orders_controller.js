import Order from "../models/order.js";

class OrdersController{

    async get_all(req, res){
        try{
            const orders = await Order.find()
            res.json(orders)
        } catch(err){
            res.status(400).json(err)
        }
    }

    async create(req, res){
        try{
            const order = await Order.create({...req.body})
            res.json(order)
        } catch(err){
            res.status(400).json(err)
        }
    }

    async get_one(req, res){
        try{
            const order = await Order.findById(req.params.id)
            res.json(order)

        } catch(err){
            res.status(400).json(err)
        }
    }

    async update(req, res){
        try{
            const order = await Order.findByIdAndUpdate(req.params.id, {...req.body}, {new: true})
            res.json(order)
        } catch(err){
            res.status(400).json(err)
        }
        
    }
}


export default new OrdersController()