// This code returns featured products

import { useContext } from "react"
import HomeProduct from "../home_product/HomeProduct"
import AppContext from "../../context/AppContext"

const Featured = () => {
    const {allProducts} = useContext(AppContext)

    if(allProducts){
            return(
                <div className="display-container">
                <h3>Featured</h3>
                <div className="products-container">
                    {allProducts.filter(product => product.category === "featured").map(product => <HomeProduct product={product} key={product._id} />)}
                </div>
            </div>
        )
    }
}
export default Featured