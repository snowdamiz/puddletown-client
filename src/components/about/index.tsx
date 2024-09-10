import { useState } from 'react'

import about from '@/assets/about.svg'
import sectionOne from '@/assets/section-1.svg'
import SectionHeader from '@/components/section-header'
import Layout from '@/components/layout'
import './About.sass'

export default function About() {
  const [expanded, setExpanded] = useState(false)

  const left = <>
    <SectionHeader img={sectionOne} title="About" />
    <>
      <p>
        Born and raised in Oregon, Ethan Bemrose is a proud graduate of Clackamas High School.
        His leadership journey began in the Boy Scouts, where he served as troop leader and completed 
        numerous leadership and team-building courses. A natural outdoorsman with a strong work ethic, 
        Ethan learned early on the importance of doing things the right way.
        <br /><br />
        At the age of 16, Ethan started working alongside his father, renovating and flipping houses. 
        Over the years, he gained invaluable hands-on experience and developed a meticulous approach 
        to craftsmanship. Seeing a growing issue in the general contracting industry—where quality and 
        durability were often overlooked—Ethan founded Puddletown Painters with a mission to change the standard. 
        { !expanded && '....'}
      </p>
      { expanded && (
        <p>
          <br /><br />
          Puddletown Painters began as a painting and drywall company, and as the final contractors on many 
          projects, they frequently encountered the need to repair subpar work left behind by others. 
          This experience broadened their expertise, turning them into renovation specialists who can 
          handle any home improvement task with precision and care.
          <br /><br />
          Ethan’s commitment to excellence and passion for delivering long-lasting, high-quality work have 
          made Puddletown Painters a trusted name in the community. With a wealth of knowledge passed down 
          from his father and a sharp eye for detail, Ethan is ready to help bring your remodeling vision 
          to life. When you work with Puddletown Painters, you can trust that you're in capable hands, 
          with results built to stand the test of time.
        </p>
      )}
    </>
    <button onClick={() => setExpanded(!expanded)} className='about-expand-btn'>
      { expanded ? 'Hide' : 'Keep Reading' }
    </button>
  </>

  const right = <img src={about} alt="About" className="section-bg" />

  return (
    <Layout
      left={left}
      right={right}
    />
  )
}