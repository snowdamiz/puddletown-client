
import './styles.sass'

export default function Layout({ left, right }) {
  return (
    <div className="about-container">
      <div className='about-inner'>
        <div className="left">
          { left }
        </div>
        <div className="right">
          { right}
        </div>
      </div>
    </div>
  )
}
