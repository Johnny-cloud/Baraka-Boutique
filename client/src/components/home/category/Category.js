// This code displays the overall product categories
import './category.css'
import { Link } from 'react-router-dom'

const Category = () => {
    return (
        <div className='category'>
                <h3>SHOP THE COLLECTIONS</h3>
                <div className='flex-row-center'>
                    <Link to={'/shop'} className='image-container'>
                        <h4>WATCHES</h4>
                        <img src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                    </Link>

                    <Link to={'/shop'} className='image-container'>
                        <h4>SHOES</h4>
                        <img src='https://images.unsplash.com/photo-1463100099107-aa0980c362e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                    
                    </Link>

                    <Link to={'/shop'} className='image-container'>
                        <h4>CLOTHINGS</h4>
                        <img src='https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                    
                    </Link>
                </div>
                
        </div>
    )
}
export default Category