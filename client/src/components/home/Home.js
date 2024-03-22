// This code displays the home section
import BestSelling from './best_selling/BestSelling'
import './home.css'
import Category from './category/Category'
import Trending from './trending/Trending'
import OnOffer from './on_offer/OnOffer'
import NewsLetter from './news_letter/NewsLetter'
import Services from './services/Services'

const Home = () => {
    return (
      <div className='home-container'>
        <div className=''>
          <div className='home-landing'>
            <div className='image-container'><h3>NOTHING BUT THE BEST DEALS FOR YOU!</h3></div>
          </div>
        </div>
        
        <Category />
        <Trending />
        <OnOffer />
        <BestSelling />
        <Services />
        <NewsLetter />
    </div>

  )
}
export default Home