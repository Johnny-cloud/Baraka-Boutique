import './products_section.css'
import HomeProduct from '../../home/home_product/HomeProduct'

const ProductsSection = ({ productsDisplayed, setStart, setEnd, start, end}) => {

    const updateProductsDisplayed = (event) => {
        setStart(event.target.id - 9)
        setEnd(event.target.id)
    }
    
  return (
    <div className='products-section'>
        <div className='flex-row-center'>
            {productsDisplayed.slice(start, end).map(product => <HomeProduct product={product} />)}
        </div>
        {
            productsDisplayed.length > 9 ? (
                <div className=' page-btns flex-row-center'>
                    <button onClick={updateProductsDisplayed} id={9}>1</button>
                    <button onClick={updateProductsDisplayed} id={19}>2</button>
                    <button onClick={updateProductsDisplayed} id={29}>3</button>
                </div>
            ) : (
                <div></div>
            )
        }
        
    </div>
  )
}

export default ProductsSection