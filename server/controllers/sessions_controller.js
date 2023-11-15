import Customer from "../models/customer.js";

class SessionsController{

    static async create(req, res){
        try {
            const customer = await Customer.findOne({email: req.body.email})
            if(customer){
                if(customer.password === req.body.password){
                    req.session.customer_id = customer._id
                    res.json(customer)
                }
            }
        } catch(err){
            res.status(400).json(err)
        }
    }

    static destroy(req, res){
        delete req.session.customer_id
        res.status(204)
    }
}

export default SessionsController