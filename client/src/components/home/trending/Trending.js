// This code displays the trending products
import HomeProduct from "../home_product/HomeProduct"
import Loading from "../../animations/loading/Loading"

const Trending = () => {
    const trendingProducts = [
        {description: "Cotton t-shirt", price: 400, rating: 4.7, category: 'trending', sub_category: 'none', image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHNoaXJ0fGVufDB8fDB8fHww"},
        {description: "Flowring skirt", price: 350, rating: 4.8, category: 'trending', sub_category: 'none', image: "https://images.unsplash.com/photo-1592301933927-35b597393c0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {description: "Cotton scarf", price: 350, rating: 4.6, category: 'trending', sub_category: 'none', image: "https://images.unsplash.com/photo-1601244005535-a48d21d951ac?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {description: "Jasmin socks", price: 200, rating: 4.9, category: 'trending', sub_category: 'none', image: "https://images.unsplash.com/photo-1631180543602-727e1197619d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        
    ]

    if(trendingProducts){ 
            return(
                <div className="trending">
                <h4>LATEST TRENDS</h4>
                <div className="products-container">
                    {trendingProducts.map(product => <HomeProduct product={product} key={product._id} />)}
                </div>
            </div>
        )
    } else{
        return (
            <div>
                <Loading />
            </div>
        )
    }
}
export default Trending