import './styles.sass'

export default function SectionHeader({ img, title }) {
  return (
    <div className='services-header'>
      <img src={img} alt="Services" className="section-bg" />
      <h1 className='services-title'>{title}</h1>
    </div>
  )
}