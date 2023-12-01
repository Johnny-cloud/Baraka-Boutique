import React, { useEffect, useState } from 'react'
import './products.css'
import SingleProduct from './SingleProduct'
import { Table } from 'react-bootstrap'
import AdminNav from '../admin_nav/AdminNav'
import Loading from '../../animations/loading/Loading'


const Products = () => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    const fetchProducts = async () => {
        const response = await fetch("/products")

        if(response.ok){
            const allProducts = await response.json()
            setFilteredProducts(allProducts)
            setProducts(allProducts)
            
        }
    }

    const handleSelectChange = (event) => {
        if(event.target.value === 'all'){
            setFilteredProducts(products)

        } else{
            setFilteredProducts(products.filter(product => product.category === event.target.value))

        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    if(filteredProducts){
        return(
            <div>
                <AdminNav />
                <div className='dashboard-products'>
                    <h3>Products <span className='filter'>Filter 
                        <select onChange={handleSelectChange}>
                            <option value={'all'}>All</option>
                            <option value={'clothing'}>Clothings</option>
                            <option value={'shoes'}>Shoes</option>
                            <option value={'watches'}>Watches</option>
                        </select>
                    </span></h3>
                    
                    <Table>
                        <thead>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Rating</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </thead>
                        <tbody>
                            {filteredProducts.map(product => <SingleProduct key={product._id} product={product} />)}
                            <Loading />
                        </tbody>
                    </Table>
                </div>
            </div>
            
        )
    }
  
}

export default Products