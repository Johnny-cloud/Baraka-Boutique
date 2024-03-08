import './testoimonials.css'

const Testimonials = () => {
    const testimonies = [
        {
            clientName: "Janey",
            clientImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            clientTestimony: "Their customer service is second to none.",
        },
        {
            clientName: "Michael",
            clientImage: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            clientTestimony: "The ambiance here is always inviting and comfortable.",
        },
        {
            clientName: "James",
            clientImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            clientTestimony: "Pricing is fair and transparent - definitely value for money.",
        },
    ]
  return (
    <div className='testimonials'>
        <h4>TESTIMONIALS</h4>
        <div className='flex-row-center'>
        {
            testimonies.map(testimony => (
                <div className='testimony'>
                    <div className='flex-row-center'>
                        <div className='image-container'><img src={testimony.clientImage} alt='' /></div>
                        <b>{testimony.clientName}</b>
                    </div>
                    <div>
                        <p>{testimony.clientTestimony}</p>
                    </div>
                </div>
            ))
        }

        
        </div>
    </div>
  )
}

export default Testimonials