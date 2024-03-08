import './sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = ({setFilteredProducts, products}) => {

  const updateOnCategory = (event) => {
    if(event.target.id === 'all'){
      setFilteredProducts([...products])
    } else{
        setFilteredProducts(products.filter(product => product.category === event.target.id))
    }
    
  }

  const updateOnSubCategory = (event) => {
    if(event.target.id === 'all'){
      setFilteredProducts(products)
    } else{
        setFilteredProducts(products.filter(product => product.sub_category === event.target.id))
    }
    
  }

  return (
    <div className='sidebar'>
        <div>
            <h3>Categories</h3>
            <Link onClick={updateOnCategory} id={'all'}>All</Link>
            <Link onClick={updateOnCategory} id={'shoes'}>Shoes</Link>
            <Link onClick={updateOnCategory} id={'clothing'}>Clothing</Link>
            <Link onClick={updateOnCategory} id={'watches'}>Watches</Link>
            <Link onClick={updateOnSubCategory} id={'men'}>Men</Link>
            <Link onClick={updateOnSubCategory} id={'women'}>Women</Link>
        </div>
        <div>
            <div className='image-container'><img src='https://images.unsplash.com/photo-1598099947145-e85739e7ca28?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' /></div>
        </div>
    </div>
  )
}

export default Sidebar