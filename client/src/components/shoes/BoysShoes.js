import {useState, useEffect } from 'react'
import ProductDisplay from '../product/ProductDisplay'

const BoysShoes= () => {
    const [boysShoes, setBoysShoes] = useState(null)

    const fetchShoes= async () => {
        const response = await fetch('/products')
        if(response.ok){
            const products = await response.json()
            setBoysShoes(products.filter(product => product.category === "shoes" && product.sub_category === "boys"))
        }
    }

    useEffect(() => {
        fetchShoes()
    }, [])

    if(boysShoes){
        return(
            <div className='display-container'>
                <h1>Boys Shoes</h1>
                <div className='products-container'>
                    {boysShoes.map(shoes=> <ProductDisplay product={shoes} key={shoes._id} />)}
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

export default BoysShoes