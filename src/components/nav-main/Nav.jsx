import linkOne from '../../assets/link-1.svg'
import linkTwo from '../../assets/link-2.svg'
import linkThree from '../../assets/link-3.svg'
import linkFour from '../../assets/link-4.svg'
import linkFive from '../../assets/link-5.svg'
import './Nav.scss'

export default function NavMain() {
  return (
    <nav>
      <a href='#'>
        <div className='link'>
          <span>Home</span>
          <img
            src={linkOne}
            alt="Home link"
          />
        </div>
      </a>
      <a href='#'>
        <div className='link'>
          <span>Services</span>
          <img
            src={linkTwo}
            alt="Services link"
          />
        </div>
      </a>
      <a href='#'>
        <div className='link'>
          <span>About</span>
          <img 
            src={linkThree}
            alt="About link"
          />
        </div>
      </a>
      <a href='#'>
        <div className='link'>
          <span>Portfolio</span>
          <img
            src={linkFour}
            alt="Portfolio link"
          />
        </div>
      </a>
      <a href='#'>
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