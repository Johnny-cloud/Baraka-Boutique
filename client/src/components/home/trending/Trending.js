// This code displays the trending products
import HomeProduct from "../home_product/HomeProduct"
import Loading from "../../animations/loading/Loading"
import products from "../../assets/products"

const Trending = () => {


    if(products){ 
            return(
                <div className="trending">
                <h4>LATEST TRENDS</h4>
                <div className="products-container">
                    {products.slice(5, 9).map(product => <HomeProduct product={product} key={product._id} />)}
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