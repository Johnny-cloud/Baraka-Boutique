import './about.css'
import TopLanding from '../top_landing/TopLanding'

const About = () => {
  return (
    <div className='about'>
        <TopLanding title={'About'} />
        <div className='main-content'>

          <div className='team'>
            <h4>MEET OUR TEAM</h4>
            <div className='flex-row-center'>
              <div className='team-member'>
                <div className='image-container'><img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' /></div>
                <div>
                  <h5>Jane Doe</h5>
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
                <p>“I highly recommend this business.”
                  “Their customer service is second to none.”</p>
              </div>
            </div>

            <div className='testimony'>
              <div className='flex-row-center'>
                <div className='image-container'><img src='https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' /></div>
                <b>Michael</b>
              </div>
              <div>
                <p>“The ambiance here is always inviting and comfortable.”
                  “This is my go-to place for ‘X…’ - the best in town.”</p>
              </div>
            </div>

            <div className='testimony'>
              <div className='flex-row-center'>
                <div className='image-container'><img src='https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' /></div>
                <b>James</b>
              </div>
              <div>
                <p>“Pricing is fair and transparent - definitely value for money.”
                    “Efficiency and punctuality are hallmarks of their service.”</p>
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default About