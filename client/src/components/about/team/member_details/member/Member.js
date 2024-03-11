import './member.css'

const Member = ({member}) => {
  return (
    <div className='member flex-row-center'>
        <div className='image-container'><img src={member.image} alt='' /></div>
        <div className='description'>
            <h3>{member.name}</h3>
            <p>{member.title}</p>
            <p><i class="bi bi-facebook"></i> <i class="bi bi-whatsapp"></i> <i class="bi bi-instagram"></i></p>
        </div>
    </div>
  )
}

export default Member