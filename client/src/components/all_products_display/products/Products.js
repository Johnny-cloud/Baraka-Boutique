// This code displays the products in the collections section
import { useContext} from 'react'
import './products.css'
import AppContext from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
import HomeProduct from '../../home/home_product/HomeProduct'

const Products = () => {

    const {filteredProducts, collectionProducts} = useContext(AppContext)
    const navigate = useNavigate()

    if(filteredProducts.length > 0){
            return (
            <div className='products'>
                <div className='products-container'>
                    {filteredProducts.slice(0, 9).map(product => <HomeProduct key={product._id} product={product} />)}
                </div>
            </div>

        )
    } else if(collectionProducts.length !== 0 && filteredProducts.length === 0){
        return (
            <div className='products no-product-alert'>
                <h2>Sorry! No such product with the selected filter category</h2>
            </div>
        )
    } else{
        navigate('/')
    }

}
export default Products