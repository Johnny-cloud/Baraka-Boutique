// This code returns featured products

import { useContext, useState } from "react"
import HomeProduct from "../home_product/HomeProduct"
import AppContext from "../../context/AppContext"
import Loading from "../../animations/loading/Loading"

const Featured = () => {
    const {allProducts} = useContext(AppContext)

    if(allProducts ){
            return(
            <div className="featured">
                <h4>FEATURED PRODUCTS</h4>
                <div className="products-container">
                    {allProducts.filter(product => product.category === "featured").map(product => <HomeProduct product={product} key={product._id} />) }
                    
                </div>
            </div>
        )
    } else{
        return(
            <div>
                <Loading />
            </div>
        )
    }
}
export default Featured