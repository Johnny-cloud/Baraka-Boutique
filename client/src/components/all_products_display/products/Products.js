import { useEffect, useContext} from 'react'
import './products.css'
import ProductDisplay from '../../product/ProductDisplay'
import AppContext from '../../context/AppContext'


const Products = () => {
    
    const {collectionProducts, setFilteredProducts, filteredProducts} = useContext(AppContext)

    useEffect(() => {
        setFilteredProducts(collectionProducts)

    }, [collectionProducts])

    console.log(filteredProducts)

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