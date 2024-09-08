import { BiPaintRoll, BiDish } from "react-icons/bi";
import { BsBricks } from "react-icons/bs";
import { AiFillAppstore } from "react-icons/ai";
import { GiMagicBroom } from "react-icons/gi";
import { PiToiletBold } from "react-icons/pi";
import { MdDeck } from "react-icons/md";
import { TfiRulerAlt2 } from "react-icons/tfi";

import sectionOne from '@/assets/section-1.svg'
import ServiceCard from '@/components/services-card'
import './Services.sass'

function Services() {
  return (
    <div className="services-container">
      <div className='services-inner'>
        <div className='services-header'>
          <img src={sectionOne} alt="Services" className="section-bg" />
          <h1 className='services-title'>Services</h1>
        </div>

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
      </div>
    </div>
  )
}

export default Services
