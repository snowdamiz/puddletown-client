import logo from '../../assets/logo.svg'
import linkOne from '../../assets/link-1.svg'
import linkTwo from '../../assets/link-2.svg'
import linkThree from '../../assets/link-3.svg'
import linkFour from '../../assets/link-4.svg'
import linkFive from '../../assets/link-5.svg'
import './Header.scss'

export default function Header() {
  return (
    <header>
      <img
        src={logo}
        className='logo'
        alt="Puddletown Painters logo"
      />
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
    </header>
  )
}