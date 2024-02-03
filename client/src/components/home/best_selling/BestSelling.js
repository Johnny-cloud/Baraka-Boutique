// This code displays all the best selling products
import { useContext } from "react"
import HomeProduct from "../home_product/HomeProduct"
import AppContext from "../../context/AppContext"
import Loading from "../../animations/loading/Loading"

const BestSelling = () => {
    const {allProducts} = useContext(AppContext)

    if(allProducts){  
            return(
                <div className="best-selling">
                <h4>OUR BEST SELLING</h4>
                <div className="products-container">
                    {allProducts.filter(product => product.category === 'best_selling').map(product => <HomeProduct product={product} key={product._id} />)}
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
export default BestSelling