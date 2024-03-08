import './about.css'
import TopLanding from '../top_landing/TopLanding'
import { useEffect } from 'react'

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 20)
  }, [])
  return (
    <div className='about'>
        <TopLanding title={'About'} />
        <div className='main-content'>

          <div className='mission-vision flex-row-center'>
            <div className='image-container'><img src='https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/></div>
            <div className='details'>
              <div>
                <h3>Our History</h3>
                <p>Our company was founded in 2005 by Janey. The idea for the business came about when
                   Janey noticed a gap in the market for high-quality clothes. With her background in 
                   fashion and his passion for high quality products, she set out to create a company that would
                    provide effective cleaning solutions while minimizing harm to the planet.</p>
              </div>
              <h3>Our Mission</h3>
              <p>To inspire fashion-forward, confident, and stylish young women. 
                To enhance individual lives through our clothing, and to be loved by people all over the world.</p>
              <div>
                <h3>Our Vision</h3>
                <p>To inspire customers through a unique combination of product, creativity, 
                  and cultural understanding. To sustain responsible commercial success as a global marketing company of branded casual apparel.</p>
                 
              </div>
              
            </div>
          </div>

          <div className='team'>
            <h4>MEET OUR TEAM</h4>
            <div className='flex-row-center'>
              <div className='team-member'>
                <div className='image-container'><img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' /></div>
                <div>
                  <h5>Janey</h5>
                  <p>Founder</p>
                </div>
              </div>

              <div className='team-member'>
                <div className='image-container'><img src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' /></div>
                <div>
                  <h5>Ferredy</h5>
                  <p>Co-Founder</p>
                </div>
              </div>

              <div className='team-member'>
                <div className='image-container'><img src='https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' /></div>
                <div>
                  <h5>Prince</h5>
                  <p>Co-Founder</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className='testimonials'>
          <h4>TESTIMONIALS</h4>
          <div className='flex-row-center'>
            <div className='testimony'>
              <div className='flex-row-center'>
                <div className='image-container'><img src='https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' /></div>
                <b>Janey</b>
              </div>
              <div>
                <p>“Their customer service is second to none.”</p>
              </div>
            </div>

            <div className='testimony'>
              <div className='flex-row-center'>
                <div className='image-container'><img src='https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' /></div>
                <b>Michael</b>
              </div>
              <div>
                <p>“The ambiance here is always inviting and comfortable.”</p>
              </div>
            </div>

            <div className='testimony'>
              <div className='flex-row-center'>
                <div className='image-container'><img src='https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' /></div>
                <b>James</b>
              </div>
              <div>
                <p>“Pricing is fair and transparent - definitely value for money.”</p>
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default About