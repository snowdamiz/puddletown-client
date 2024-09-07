import linkOne from '../../assets/link-1.svg'
import linkTwo from '../../assets/link-2.svg'
import linkThree from '../../assets/link-3.svg'
import linkFour from '../../assets/link-4.svg'
import linkFive from '../../assets/link-5.svg'
import './Nav.scss'

export default function NavMain({ refs }) {
  const scrollToSection = (ref) => {
    console.log(ref)
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav>
      <a href='#home' onClick={(e) => { e.preventDefault(); scrollToSection(refs[0]) }}>
        <div className='link'>
          <span>Home</span>
          <img
            src={linkOne}
            alt="Home link"
          />
        </div>
      </a>
      <a href='#services' onClick={(e) => { e.preventDefault(); scrollToSection(refs[1]) }}>
        <div className='link'>
          <span>Services</span>
          <img
            src={linkTwo}
            alt="Services link"
          />
        </div>
      </a>
      <a href='#about' onClick={(e) => { e.preventDefault(); scrollToSection(refs[2]) }}>
        <div className='link'>
          <span>About</span>
          <img 
            src={linkThree}
            alt="About link"
          />
        </div>
      </a>
      <a href='#portfolio' onClick={(e) => { e.preventDefault(); scrollToSection(refs[3]) }}>
        <div className='link'>
          <span>Portfolio</span>
          <img
            src={linkFour}
            alt="Portfolio link"
          />
        </div>
      </a>
      <a href='#contact' onClick={(e) => { e.preventDefault(); scrollToSection(refs[4]) }}>
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