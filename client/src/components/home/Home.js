// This code displays the home section
import BestSelling from './best_selling/BestSelling'
import './home.css'
import Category from './category/Category'
import Featured from './featured/Featured'
import Trending from './trending/Trending'
import OnOffer from './on_offer/OnOffer'
import NewsLetter from './news_letter/NewsLetter'

const Home = () => {
    return (
      <div className='home-container'>
        <div className='home-landing-page'>
          <h2>Welcome to Baraka Boutique</h2>
        </div>
        <Category />
        <Featured />
        <OnOffer />
        <Trending />
        <BestSelling />
        <NewsLetter />
    </div>

  )
}
export default Home