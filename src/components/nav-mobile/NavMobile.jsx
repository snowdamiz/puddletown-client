import { BiX } from "react-icons/bi";
import { useStore } from '../../store'
import './NavMobile.sass'

export default function NavMobile({ refs }) {
  const { toggleMenu } = useStore((state) => state)

  const scrollToSection = (ref) => {
    console.log(ref)
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleClick = (e, section) => {
    e.preventDefault()
    toggleMenu()
    scrollToSection(section)
  }
  
  return (
    <section className='mobile-menu'>
      <div className='mobile-menu-inner'>
        <div className='mobile-menu-header'>
          <h6>Menu</h6>
          <button className='mobile-menu-btn' onClick={toggleMenu}>
            <BiX size="28px" color="#000" />
          </button>
        </div>
        <nav className='mobile-menu-nav'>
          <a href='#home' onClick={(e) => handleClick(e, refs[0]) }>
            <div className='mobile-link'>
              <span>Home</span>
            </div>
          </a>
          <a href='#services' onClick={(e) => handleClick(e, refs[1]) }>
            <div className='mobile-link'>
              <span>Services</span>
            </div>
          </a>
          <a href='#about' onClick={(e) => handleClick(e, refs[2]) }>
            <div className='mobile-link'>
              <span>About</span>
            </div>
          </a>
          <a href='#portfolio' onClick={(e) => handleClick(e, refs[3]) }>
            <div className='mobile-link'>
              <span>Portfolio</span>
            </div>
          </a>
          <a href='#contact' onClick={(e) => handleClick(e, refs[4]) }>
            <div className='mobile-link'>
              <span>Contact</span>
            </div>
          </a>
        </nav>
        <button className='quote-btn'>
          Get a Quote
        </button>
      </div>
      <div className='overlay' />
    </section>
  )
}
