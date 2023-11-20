import {useState, useEffect } from 'react'
import ProductDisplay from '../product/ProductDisplay'

const GirlsShoes= () => {
    const [girlsShoes, setGirlsShoes] = useState(null)

    const fetchShoes= async () => {
        const response = await fetch('/products')
        if(response.ok){
            const products = await response.json()
            setGirlsShoes(products.filter(product => product.category === "shoes" && product.sub_category === "girls"))
        }
    }

    useEffect(() => {
        fetchShoes()
    }, [])

    if(girlsShoes){
        return(
            <div>
                <h1>Girls Shoes</h1>
                <div className='products-container'>
                    {girlsShoes.map(shoes=> <ProductDisplay product={shoes} key={shoes._id} />)}
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

export default GirlsShoes