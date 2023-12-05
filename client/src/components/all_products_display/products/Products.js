// This code displays the products in the collections section
import { useEffect, useContext} from 'react'
import './products.css'
import ProductDisplay from '../../product/ProductDisplay'
import AppContext from '../../context/AppContext'

const Products = () => {

    const {filteredProducts} = useContext(AppContext)


    if(filteredProducts.length > 0){
            return (
            <div className='products'>
                <div className='products-container'>
                    {filteredProducts.slice(0, 18).map(product => <ProductDisplay key={product._id} product={product} />)}
                </div>
            </div>

        )
    } else{
        return (
            <div className='products'>
                <h2>Sorry! No such product with the selected filter category</h2>
            </div>
        )
    }

}
export default Products