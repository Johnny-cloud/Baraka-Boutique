// This code displays the trending products
import HomeProduct from "../home_product/HomeProduct"
import Loading from "../../animations/loading/Loading"
import products from "../../assets/products"

const Trending = () => {


    if(products){ 
            return(
                <div className="trending">
                <h3>LATEST TRENDS</h3>
                <div className="flex-row-center">
                    {products.slice(0, 8).map(product => <HomeProduct product={product} key={product._id} />)}
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