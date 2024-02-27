// This code displays the products in the collections section
import { useContext, useEffect, useState} from 'react'
import './products.css'
import AppContext from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
import HomeProduct from '../../home/home_product/HomeProduct'

const Products = ({category}) => {

    const {allProducts} = useContext(AppContext)
    const [subCategory, setSubCategory] = useState('women')
    const filteredProducts = allProducts.filter(product => product.category === category)
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(9)
    const [productsDisplayed, setProductsDisplayed] = useState(filteredProducts.slice(start, end))

    const navigate = useNavigate()

    const updateProductsDisplayed = (event) => {
        if(event.target.id === 1){
            setStart(0)
            setEnd(9)
        } else{
            setStart((9 * event.target.id) - 9)
            setEnd(9 * event.target.id)
        }
    }

    const updateSubCategory = (event) => {
        setStart(0)
        setEnd(9)
        setSubCategory(event.target.id)
    }


    useEffect(() => {
        window.scrollTo(0, 0)
        setProductsDisplayed(filteredProducts.filter(product => product.sub_category === subCategory).slice(start, end))
    }, [subCategory, start, end])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    

    if(filteredProducts.length > 0){
            return (
            <div className='products'>
                <div className='btns-container'>
                    <button onClick={updateSubCategory} id='men'>men</button>
                    <button onClick={updateSubCategory} id='women'>women</button>
                    <button onClick={updateSubCategory} id='boys'>boys</button>
                    <button onClick={updateSubCategory} id='girls'>girls</button>
                </div>
                <div>
                    <h5>SHOWING {start} - {end} OF RESULTS</h5>
                </div>
                <div className='products-container'>
                    {productsDisplayed.map(product => <HomeProduct key={product._id} product={product} />)}
                </div>
                <div className='page-buttons-container'>
                    <button id={1} onClick={updateProductsDisplayed}>1</button>
                    <button id={2} onClick={updateProductsDisplayed}>2</button>
                    <button id={3} onClick={updateProductsDisplayed}>3</button>
                </div>
            </div>

        )
    } else if(filteredProducts.length === 0){
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