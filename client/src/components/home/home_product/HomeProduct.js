import {useContext} from 'react'
import './home_product.css'
import AppContext from '../../context/AppContext'

const HomeProduct = ({product}) => {

    const {setSelectedItem} = useContext(AppContext)

    const handleClick = () => {
        setSelectedItem(product)
    }

    return (
        <div className='home-product' onClick={handleClick}>
            <div className='home-product-image-container'>
                <img src={product.image} alt='img' />
            </div>
            <div className='home-product-details-container'>
                <p>{product.description.substring(0, 30)}...</p>
            </div>
        </div>
    )
}

export default HomeProduct