import './styles.sass'

export default function ServicesCard({ icon, title }) {
  return (
    <div className='services-card'>
      {icon}
      <h6 className='services-card-title'>{title}</h6>
    </div>
  )
}