import './mission_vision.css'

const MissionVission = () => {
  return (
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
  )
}

export default MissionVission