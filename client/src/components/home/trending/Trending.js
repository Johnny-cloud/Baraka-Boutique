// This code displays the trending products
import { useContext } from "react"
import HomeProduct from "../home_product/HomeProduct"
import AppContext from "../../context/AppContext"
import Loading from "../../animations/loading/Loading"

const Trending = () => {
    const {allProducts} = useContext(AppContext)
    
    if(allProducts){ 
            return(
                <div className="trending">
                <h4>LATEST TRENDS</h4>
                <div className="products-container">
                    {allProducts.filter(product => product.category === "trending").map(product => <HomeProduct product={product} key={product._id} />)}
                </div>
            </div>
        )
    } else{
        return (
            <div>
                <Loading />
            </div>
        )
    }
}
export default Trending