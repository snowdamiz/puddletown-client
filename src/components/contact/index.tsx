
import services from '@/assets/services.svg'
import sectionOne from '@/assets/section-1.svg'
import SectionHeader from '@/components/section-header'
import Layout from '@/components/layout'
import './Contact.sass'

export default function Contact() {
  const left = <SectionHeader img={sectionOne} title="Contact" />
  const right = <img src={services} alt="Contact" className="section-bg" />

  return (
    <Layout
      left={left}
      right={right}
    />
  )
}
