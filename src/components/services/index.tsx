import { BiPaintRoll, BiDish } from "react-icons/bi";
import { BsBricks } from "react-icons/bs";
import { AiFillAppstore } from "react-icons/ai";
import { GiMagicBroom } from "react-icons/gi";
import { PiToiletBold } from "react-icons/pi";
import { MdDeck } from "react-icons/md";
import { TfiRulerAlt2 } from "react-icons/tfi";

import services from '@/assets/services.svg'
import sectionOne from '@/assets/section-1.svg'
import SectionHeader from '@/components/section-header'
import ServiceCard from '@/components/services-card'
import Layout from '@/components/layout'
import './Services.sass'

export default function Services() {
  const left = <>
    <SectionHeader img={sectionOne} title="Services" />
    <div className='services-content'>
      <ServiceCard icon={<BiPaintRoll />} title="Interior and exterior painting" />
      <ServiceCard icon={<BiDish />} title="Kitchen remodel" />
      <ServiceCard icon={<BsBricks />} title="Drywall installation and repair" />
      <ServiceCard icon={<AiFillAppstore />} title="Tiling" />
      <ServiceCard icon={<GiMagicBroom />} title="Floor installation" />
      <ServiceCard icon={<PiToiletBold />} title="Bathroom remodel" />
      <ServiceCard icon={<MdDeck />} title="Outdoor decking" />
      <ServiceCard icon={<TfiRulerAlt2 />} title="Framing" />
    </div>
  </>

  const right = <img src={services} alt="Services" className="section-bg" />

  return (
    <Layout
      left={left}
      right={right}
    />
  )
}
