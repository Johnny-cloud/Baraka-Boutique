import './top_landing.css'

const TopLanding = ({title}) => {
  return (
    <div className='top-landing'>
        <h1>{title.toUpperCase()}</h1>
    </div>
  )
}

export default TopLanding