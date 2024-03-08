// This code returns featured products
import HomeProduct from "../home_product/HomeProduct"
import Loading from "../../animations/loading/Loading"
import products from "../../assets/products"

const Featured = () => {

  

    if(products ){
            return(
            <div className="featured">
                <h4>FEATURED PRODUCTS</h4>
                <div className="products-container">
                    {products.slice(26, 30).map(product => <HomeProduct product={product} key={product._id} />) }
                    
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