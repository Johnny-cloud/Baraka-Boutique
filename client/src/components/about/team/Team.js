import './team.css'

const Team = () => {
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
            image: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ]
  return (
    <div>
        <h3>MEET THE TEAM</h3>
        <div className='flex-row-center'>
            {
                teamMembers.map(member => (
                    <div className='team-member'>
                        <div className='image-container'><img src={member.image} alt='' /></div>
                        <div>
                        <h5>{member.name}</h5>
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