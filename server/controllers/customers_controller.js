import Customer from "../models/customer.js";

class CustomersController {

    static async index(req, res) {
        try {
            const customers = await Customer.find()
            res.json(customers)
            
        } catch(err) {
            res.status(400).json({err})
        }
    }

    static async create(req, res){
        try{
            const customer = await Customer.create({...req.body})
            res.json(customer)

        } catch(err){
            res.status(400).json(err)
        }
    }

    static async show(req, res){
        try{
            const customer = await Customer.findById(req.session.customer_id)
            res.json(customer)

        } catch(err) {
            res.status(400).json(err)
        }
    }
}

export default CustomersController