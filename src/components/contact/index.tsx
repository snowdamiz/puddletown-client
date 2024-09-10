
import contact from '@/assets/contact.svg'
import sectionOne from '@/assets/section-1.svg'
import SectionHeader from '@/components/section-header'
import Layout from '@/components/layout'
import './Contact.sass'

export default function Contact() {
  const left = <>
    <SectionHeader img={sectionOne} title="Contact" />
    <form className='contact-form'>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="tel" placeholder="Phone" />
      <textarea placeholder="Message" />
      <button>Send</button>
    </form>
  </>

  const right = <img src={contact} alt="Contact" className="section-bg" />

  return (
    <Layout
      left={left}
      right={right}
    />
  )
}
