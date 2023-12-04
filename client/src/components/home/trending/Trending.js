// This code displays the trending products
import { useContext } from "react"
import HomeProduct from "../home_product/HomeProduct"
import AppContext from "../../context/AppContext"

const Trending = () => {
    const {allProducts} = useContext(AppContext)
    
    if(allProducts){ 
            return(
                <div className="display-container">
                <h3>Trending</h3>
                <div className="products-container">
                    {allProducts.filter(product => product.category === "trending").map(product => <HomeProduct product={product} key={product._id} />)}
                </div>
            </div>
        )
    }
}
export default Trending