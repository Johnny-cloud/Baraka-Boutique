import "./products_overview.css"
import { useContext } from "react"
import AppContext from "../../../context/AppContext"
import Loading from "../../../animations/loading/Loading"
import ProductView from "./ProductView"

const ProductsOverview = () => {
    const {allProducts} = useContext(AppContext)

    if(allProducts.length > 0) {
        return (
            <div className="products-overview">
                <h5>Products Overview</h5>
                <div className='product-view'>
                    <div><h6>Name</h6></div>
                    <div><h6>Product ID</h6></div>
                    <div><h6>Price</h6></div>
                    <div><h6>Status</h6></div>
                    <div><h6>Sales</h6></div>
                    <div><h6>Revenue</h6></div>
                </div>
                <div className="products-overview-container">
                    {allProducts.slice(0, 7).map(product => <ProductView product={product} key={product._id} />)}
                </div>
            </div>
          )
    } else{
        return(
            <Loading />
        )
    }
  
}

export default ProductsOverview