// This code displays the products in the collections section
import { useEffect, useContext} from 'react'
import './products.css'
import ProductDisplay from '../../product/ProductDisplay'
import AppContext from '../../context/AppContext'

const Products = () => {

    const {collectionProducts, setFilteredProducts, filteredProducts, category} = useContext(AppContext)

    useEffect(() => {
        // Checks if category was set when an image was clicked on one the images on the top part of the home section
        if(category){ 
            setFilteredProducts(collectionProducts.filter(product =>  product.category === category))    
        } else{
            setFilteredProducts(collectionProducts)
        }

    }, [collectionProducts])

    if(filteredProducts){
            return (
            <div className='products'>
                <div className='products-container'>
                    {filteredProducts.slice(0, 12).map(product => <ProductDisplay key={product._id} product={product} />)}
                </div>
            </div>

        )
    }

}
export default Products