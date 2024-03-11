// This code displays the overall product categories
import './category.css'
import { Link } from 'react-router-dom'

const Category = () => {
    return (
        <div className='category'>
                <Link to={'/shop'} className='image-container'>
                    <h4>WATCHES</h4>
                    <img src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                </Link>

                <Link to={'/shop'} className='image-container'>
                    <h4>SHOES</h4>
                    <img src='https://images.unsplash.com/photo-1463100099107-aa0980c362e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                
                </Link>
        </div>
    )
}
export default Category