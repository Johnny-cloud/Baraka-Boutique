import Product from "../models/product.js";

class ProductsController{

    static async index(req, res){
        try {
            const products = await Product.find()
            res.json(products)
            
        } catch(err) {
            res.status(400).json({error: err})
        }
    }
}

export default ProductsController