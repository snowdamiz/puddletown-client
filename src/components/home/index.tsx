import useHelpers from '../../hooks/useHelpers'
import './Home.sass'

function Home({ refs }) {
  const { navigate } = useHelpers()

  const handleClick = (e, section) => {
    e.preventDefault()
    navigate(section)
  }
  return (
    <div className="home-container">
      <div className='home-container-inner'>
        <h1 className='splash-text'>We are a <span>family owned</span> business that specializes in exterior and interior remodels</h1>
        <div className='splash-btn-container'>
          <button className='splash-btn splash-btn-light' onClick={(e) => handleClick(e, refs[3]) }>
            Portfolio
          </button>
          <button className='splash-btn splash-btn-dark'>
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
