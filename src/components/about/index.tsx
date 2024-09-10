import about from '@/assets/about.svg'
import sectionOne from '@/assets/section-1.svg'
import SectionHeader from '@/components/section-header'
import Layout from '@/components/layout'
import './About.sass'

export default function About() {
  const left = <>
    <SectionHeader img={sectionOne} title="About" />
    <div>
      <p>
        Oregon native Ethan Bemrose, a Clackamas High School graduate and former Boy Scout troop leader, has always believed in doing things the right way. From the age of 16, he worked alongside his father renovating houses, developing a passion for craftsmanship and quality.
        <br /><br />
        Seeing the need for long-lasting, reliable work in the contracting industry, Ethan founded Puddletown Painters. Originally focused on painting and drywall, the company quickly expanded its expertise in renovation, fixing issues left by other contractors. With a commitment to excellence and attention to detail, Ethan and his team are dedicated to making your remodeling dreams a reality, delivering work built to last.
      </p>
    </div>
  </>

  const right = <img src={about} alt="About" className="section-bg" />

  return (
    <Layout
      left={left}
      right={right}
    />
  )
}