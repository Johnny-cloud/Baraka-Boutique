import './about.css'
import TopLanding from '../top_landing/TopLanding'
import { useEffect } from 'react'
import Team from './team/Team'
import MissionVission from './mission_vision/MissionVission'
import Testimonials from './testimonials/Testimonials'

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 20)
  }, [])
  return (
    <div className='about'>
        <TopLanding title={'About'} />
        <div className='main-content'>
          <MissionVission />
          <Team />
          <Testimonials />
        </div>
    </div>
  )
}

export default About