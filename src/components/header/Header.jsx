
import NavMain from '../nav-main/Nav'
import { BiMenuAltRight } from "react-icons/bi";
import logo from '../../assets/logo.svg'
import { useStore } from '../../store'
import './Header.scss'

export default function Header({ refs }) {
  const { toggleMenu } = useStore((state) => state)

  return (
    <header>
      <div className='header-inner'>
        <img
          src={logo}
          className='logo'
          alt="Puddletown Painters logo"
        />
        <div className='right'>
          <NavMain refs={refs} />

          <button className='mobile-menu-btn' onClick={toggleMenu}>
            <BiMenuAltRight size="28px" color="#000" />
          </button>
          <button className='quote-btn'>
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  )
}