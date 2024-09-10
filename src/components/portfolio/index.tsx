
import services from '@/assets/services.svg'
import sectionOne from '@/assets/section-1.svg'
import SectionHeader from '@/components/section-header'
import Layout from '@/components/layout'
import './Portfolio.sass'

export default function Portfolio() {
  const left = <SectionHeader img={sectionOne} title="Portfolio" />
  const right = <img src={services} alt="Portfolio" className="section-bg" />

  return (
    <Layout
      left={left}
      right={right}
    /> 
  )
}
