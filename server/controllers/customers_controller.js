import Customer from "../models/customer.js";

class CustomersController {

    static async index() {
        try {
            const customers = await Customer.find()
            res.json(customers)
        } catch(err) {
            res.status(400).json({err})
        }
    }
}

export default CustomersController