// This code displays the overall product categories
import './category.css'

const Category = () => {
    return (
        <div className='category'>
            <div className='category-contents-container'>
                    <div className='large-image'>
                        <div className='image-container'>
                            <img src='https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                        </div>
                    </div>
                    <div className='small-image'>
                        <div className='image-container'>
                            <img src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                        </div>
                    </div>
            </div>
            <div></div>
        </div>
    )
}
export default Category