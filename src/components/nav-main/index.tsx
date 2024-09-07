import linkOne from '@/assets/link-1.svg'
import linkTwo from '@/assets/link-2.svg'
import linkThree from '@/assets/link-3.svg'
import linkFour from '@/assets/link-4.svg'
import linkFive from '@/assets/link-5.svg'
import useHelpers from '@/hooks/useHelpers'
import './Nav.sass'

export default function NavMain({ refs }) {
  const { navigate } = useHelpers()

  const handleClick = (e, section) => {
    e.preventDefault()
    navigate(section)
  }

  return (
    <nav>
      <a href='#home' onClick={(e) => handleClick(e, refs[0]) }>
        <div className='link'>
          <span>Home</span>
          <img
            src={linkOne}
            alt="Home link"
          />
        </div>
      </a>
      <a href='#services' onClick={(e) => handleClick(e, refs[1]) }>
        <div className='link'>
          <span>Services</span>
          <img
            src={linkTwo}
            alt="Services link"
          />
        </div>
      </a>
      <a href='#about' onClick={(e) => handleClick(e, refs[2]) }>
        <div className='link'>
          <span>About</span>
          <img 
            src={linkThree}
            alt="About link"
          />
        </div>
      </a>
      <a href='#portfolio' onClick={(e) => handleClick(e, refs[3]) }>
        <div className='link'>
          <span>Portfolio</span>
          <img
            src={linkFour}
            alt="Portfolio link"
          />
        </div>
      </a>
      <a href='#contact' onClick={(e) => handleClick(e, refs[4]) }>
        <div className='link'>
          <span>Contact</span>
          <img
            src={linkFive}
            alt="Contact link"
          />
        </div>
      </a>
    </nav>
  )
}