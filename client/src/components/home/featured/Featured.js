// This code returns featured products

import { useContext, useState } from "react"
import HomeProduct from "../home_product/HomeProduct"
import AppContext from "../../context/AppContext"
import Loading from "../../animations/loading/Loading"

const Featured = () => {
    const featuredProducts = [
        {description: "Herschel supply co 25!", price: 1000, rating: 4.7, category: 'featured', sub_category: 'none', image: "https://images.unsplash.com/photo-1632282003890-020318a49e62?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {description: "Black leather jacket", price: 600, rating: 4.5, category: 'featured', sub_category: 'none', image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {description: "Timex silver", price: 350, rating: 5.0, category: 'featured', sub_category: 'none', image: "https://images.unsplash.com/photo-1694656937152-b2377c0b5de7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {description: "Soft shirt", price: 350, rating: 4.6, category: 'featured', sub_category: 'none', image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    
    ]
  

    if(featuredProducts ){
            return(
            <div className="featured">
                <h4>FEATURED PRODUCTS</h4>
                <div className="products-container">
                    {featuredProducts.map(product => <HomeProduct product={product} key={product._id} />) }
                    
                </div>
            </div>
        )
    } else{
        return(
            <div>
                <Loading />
            </div>
        )
    }
}
export default Featured