import Product from "../models/product.js";

class ProductsController{

    async get_all(req, res){
        try{
            const products = await Product.find()
            res.json(products)

        } catch(err){
            res.status(400).json(err)
        }
    }
}


export default new ProductsController()