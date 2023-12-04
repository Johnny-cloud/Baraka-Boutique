// This code displays all the best selling products
import { useState, useEffect, useContext } from "react"
import HomeProduct from "../home_product/HomeProduct"
import AppContext from "../../context/AppContext"

const BestSelling = () => {
    const {allProducts} = useContext(AppContext)

    if(allProducts){  
            return(
                <div className="display-container">
                <h3>Best Sellers</h3>
                <div className="products-container">
                    {allProducts.filter(product => product.category === 'best_selling').map(product => <HomeProduct product={product} key={product._id} />)}
                </div>
            </div>
        )
    }
}
export default BestSelling