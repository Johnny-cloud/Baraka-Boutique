import './member_details.css'
import TopLanding from '../../../top_landing/TopLanding'
import Member from './member/Member'
import { useContext, useEffect } from 'react'
import AppContext from '../../../context/AppContext'

const MemberDetails = () => {
    const {selectedMember} = useContext(AppContext)


    useEffect(() => {
        window.scrollTo(0, 50)
        console.log('Team member....')
    }, [selectedMember])

  return (
    <div className='member-details'>
        <TopLanding title={'Member'} />
        <div className='main-content'>
            <Member member={selectedMember} />
            <div className='details'>
                <div>
                    <h3>Background</h3>
                    <p>Co-founder, the wordy 'other half' | Intrigued by good content,
                        and what it achieves | Bit of a nerd, quite creative, loves to write | Father, cyclist, activist | [ he/him ].
                        Davids often spot an opportunity where big corporations are getting it wrong. They start businesses that aim 
                        to disrupt the status quo, to do things differently, and to make life better for people.
                    </p>
                </div>
                <div>
                    <h3>Life Story</h3>
                    <p>Successful entrepreneur Bart Hartman encountered fuel poverty at 
                        first hand while travelling the third world. Realising that philanthropy couldn’t scale to meet the challenge 
                        (he tried), and that NGOs had already failed to make an impact, Bart founded NOTS Solar Lamps specifically to 
                        bring affordable light and power to 125 million households in Sub Saharan Africa, starting in Rwanda. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MemberDetails