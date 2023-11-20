import {useState, useEffect } from 'react'
import ProductDisplay from '../product/ProductDisplay'

const MenClothing = () => {
    const [menClothing, setMenClothing] = useState(null)

    const fetchClothing = async () => {
        const response = await fetch('/products')
        if(response.ok){
            const products = await response.json()
            setMenClothing(products.filter(product => product.category === "clothing" && product.sub_category === "men"))
        }
    }

    useEffect(() => {
        fetchClothing()
    }, [])

    if(menClothing){
        return(
        <div>
            <h1>Men's Clothing</h1>
            <div className='products-container'>
                {menClothing.map(clothing => <ProductDisplay product={clothing} key={clothing._id} />)}
            </div>
        </div>
        )
    } else{
        return(
            <div className='display-container'>
                <h2>Fetching data.......</h2>
            </div>
        )
    }
}

export default MenClothing