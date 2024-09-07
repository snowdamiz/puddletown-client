import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import useHelpers from '../../hooks/useHelpers.ts'
import './Home.sass'

function Home({ refs }: any) {
  const { navigate } = useHelpers()

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
      <Carousel
        opts={{ align: "center" }}
        className="w-full max-w-xs"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
              <div className="p-1">
                <Card className="border-0 shadow-none">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Home