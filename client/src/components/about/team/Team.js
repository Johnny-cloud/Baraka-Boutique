import './team.css'
import { Link } from 'react-router-dom'
import AppContext from '../../context/AppContext'
import { useContext } from 'react'

const Team = () => {
    const {setSelectedMember} = useContext(AppContext)

    const teamMembers = [
        {
            name: "Janey",
            title: "Founder",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Ferredy",
            title: "Co-Founder",
            image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Prince",
            title: "Co-Founder",
            image: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ]

    const setNewSelectedMember = (member) => {
        setSelectedMember(member)
    }
  return (
    <div className='team dark-about'>
        <h3>MEET THE TEAM</h3>
        <div className='flex-row-center'>
            {
                teamMembers.map(member => (
                    <div className='team-member'>
                        <Link onClick={() => setNewSelectedMember(member)} to={'/member-details'}className='image-container'><img src={member.image} alt='' /></Link>
                        <div>
                        <Link onClick={() => setNewSelectedMember(member)} to={'/member-details'}><h5>{member.name}</h5></Link>
                        <p>{member.title}</p>
                        <p><i class="bi bi-facebook"></i> <i class="bi bi-whatsapp"></i> <i class="bi bi-instagram"></i></p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    
  )
}

export default Team