
import { useState } from 'react'

import sectionOne from '@/assets/section-1.svg'
import SectionHeader from '@/components/section-header'
import Img1 from '@/assets/images/1.jpeg'
import Img2 from '@/assets/images/2.jpeg'
import Img3 from '@/assets/images/3.jpeg'
import Img4 from '@/assets/images/4.jpeg'
import Img5 from '@/assets/images/5.jpeg'
import Img6 from '@/assets/images/6.jpeg'
import Img7 from '@/assets/images/7.jpeg'
import Img8 from '@/assets/images/8.jpeg'
import Img9 from '@/assets/images/9.jpeg'
import Img10 from '@/assets/images/10.jpeg'
import Img11 from '@/assets/images/11.jpeg'
import Img12 from '@/assets/images/12.jpeg'
import Img13 from '@/assets/images/13.jpeg'
import './Portfolio.sass'

export default function Portfolio() {
  const [selectedImg, setSelectedImg] = useState(0)
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13]

  return (
    <div className="portfolio-container">
      <div className='portfolio-inner'>
        <div className='portfolio-img-container'>
          <SectionHeader img={sectionOne} title="Portfolio" />
          <div className='portfolio-img-wrapper'>
            <img src={images[selectedImg]} alt="Image" className="portfolio-img-selected" />
          </div>
        </div>
        <div className='portfolio-img-gallery'>
          {images.map((img, index) => (
            <img
              src={img}
              alt="Gallery Image"
              className="portfolio-img"
              key={index}
              onClick={setSelectedImg.bind(null, index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
