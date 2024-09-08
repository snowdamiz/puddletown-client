// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
import useHelpers from '@/hooks/useHelpers.ts'
// import ImgOne from '@/assets/images/1.jpeg'
// import ImgTwo from '@/assets/images/2.jpeg'
// import ImgThree from '@/assets/images/3.jpeg'
// import ImgFour from '@/assets/images/4.jpeg'
// import ImgFive from '@/assets/images/5.jpeg'
// import ImgSix from '@/assets/images/6.jpeg'
// import ImgSeven from '@/assets/images/7.jpeg'
// import ImgEight from '@/assets/images/8.jpeg'
// import ImgNine from '@/assets/images/9.jpeg'
// import ImgTen from '@/assets/images/10.jpeg'
// import ImgEleven from '@/assets/images/11.jpeg'
// import ImgTwelve from '@/assets/images/12.jpeg'
// import ImgThirteen from '@/assets/images/13.jpeg'

import './Home.sass'

function Home({ refs }: any) {
  const { navigate } = useHelpers()

  // const images = [ImgOne, ImgTwo, ImgFour, ImgFive, ImgEleven, ImgThirteen]

  const handleClick = (e, section) => {
    e.preventDefault()
    navigate(section)
  }
  return (
    <div className="home-container">
      <div className='home-container-inner'>
        <h1 className='splash-text'>We are a <span>family owned</span> business that specializes in exterior and interior remodels</h1>
        <div className='splash-btn-container'>
          <button className='splash-btn splash-btn-light' onClick={(e) => handleClick(e, refs[3]) }>
            Portfolio
          </button>
          <button className='splash-btn splash-btn-dark'>
            Get a Quote
          </button>
        </div>

      </div>
      {/* <Carousel
        opts={{ align: "center" }}
        className="w-full max-w-xl"
      >
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
              <div className="">
                <Card className="border-0 shadow-none">
                  <CardContent className="flex items-center justify-center">
                    <img src={img} alt="Image" className="w-full h-full object-cover" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}
    </div>
  )
}

export default Home