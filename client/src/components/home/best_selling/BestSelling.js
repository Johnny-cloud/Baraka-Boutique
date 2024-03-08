// This code displays all the best selling products
import HomeProduct from "../home_product/HomeProduct"
import Loading from "../../animations/loading/Loading"
import products from "../../assets/products"

const BestSelling = () => {
    

      

    if(products){  
            return(
                <div className="best-selling">
                <h4>OUR BEST SELLING</h4>
                <div className="products-container">
                    {products.slice(15, 19).map(product => <HomeProduct product={product} key={product._id} />)}
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