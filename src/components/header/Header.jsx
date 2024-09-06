
import NavMain from '../nav-main/Nav'
import logo from '../../assets/logo.svg'
import './Header.scss'

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <img
          src={logo}
          className='logo'
          alt="Puddletown Painters logo"
        />
        <div className='right'>
          <NavMain />
          <button>
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  )
}