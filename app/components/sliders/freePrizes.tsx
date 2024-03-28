import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import Link from 'next/link'
import '../../css/slick-arrows.css'

const FreePrizes = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
  }

  const slides = [
    <div key={1} className="flex justify-start">
      <Link href="/" className="flex flex-col justify-start pl-1">
        <div className="flex justify-center items-center w-full p-1">
          <div className="rounded-full overflow-hidden">
            <Image
              src="/nense.jpg"
              width={75}
              height={75}
              alt="Uniforme Fluminense"
              className="object-cover"
            />
          </div>
        </div>
        <h2 className="text-sm text-center">Fluminense</h2>
      </Link>
    </div>,
    <div key={2} className="flex justify-start">
      <Link href="/" className="flex flex-col justify-start pl-1">
        <div className="flex justify-center items-center w-full p-1">
          <div className="rounded-full overflow-hidden">
            <Image
              src="/nense.jpg"
              width={75}
              height={75}
              alt="Uniforme Fluminense"
              className="object-cover"
            />
          </div>
        </div>
        <h2 className="text-sm text-center">Fluminense</h2>
      </Link>
    </div>,
    <div key={3} className="flex justify-start">
      <Link href="/" className="flex flex-col justify-start pl-1">
        <div className="flex justify-center items-center w-full p-1">
          <div className="rounded-full overflow-hidden">
            <Image
              src="/nense.jpg"
              width={75}
              height={75}
              alt="Uniforme Fluminense"
              className="object-cover"
            />
          </div>
        </div>
        <h2 className="text-sm text-center">Fluminense</h2>
      </Link>
    </div>,
    <div key={4} className="flex justify-start w-20">
      <Link href="/" className="flex flex-col justify-start pl-1">
        <div className="flex justify-center items-center w-full p-1">
          <div className="rounded-full overflow-hidden">
            <Image
              src="/nense.jpg"
              width={75}
              height={75}
              alt="Uniforme Fluminense"
              className="object-cover"
            />
          </div>
        </div>
        <h2 className="text-sm text-center">Fluminense</h2>
      </Link>
    </div>,
    <div key={5} className="flex justify-start w-20">
      <Link href="/" className="flex flex-col justify-start pl-1">
        <div className="flex justify-center items-center w-full p-1">
          <div className="rounded-full overflow-hidden">
            <Image
              src="/nense.jpg"
              width={75}
              height={75}
              alt="Uniforme Fluminense"
              className="object-cover"
            />
          </div>
        </div>
        <h2 className="text-sm text-center">Fluminense</h2>
      </Link>
    </div>,
    <div key={6} className="flex justify-start w-20">
      <Link href="/" className="flex flex-col justify-start pl-1">
        <div className="flex justify-center items-center w-full p-1">
          <div className="rounded-full overflow-hidden">
            <Image
              src="/nense.jpg"
              width={75}
              height={75}
              alt="Uniforme Fluminense"
              className="object-cover"
            />
          </div>
        </div>
        <h2 className="text-sm text-center">Fluminense</h2>
      </Link>
    </div>,
    <div key={7} className="flex justify-start">
      <Link href="/" className="flex flex-col justify-start pl-1">
        <div className="flex justify-center items-center w-full p-1">
          <div className="rounded-full overflow-hidden">
            <Image
              src="/nense.jpg"
              width={75}
              height={75}
              alt="Uniforme Fluminense"
              className="object-cover"
            />
          </div>
        </div>
        <h2 className="text-sm text-center">Fluminense</h2>
      </Link>
    </div>,
    <div key={8} className="flex justify-start">
      <Link href="/" className="flex flex-col justify-start pl-1">
        <div className="flex justify-center items-center w-full p-1">
          <div className="rounded-full overflow-hidden">
            <Image
              src="/nense.jpg"
              width={75}
              height={75}
              alt="Uniforme Fluminense"
              className="object-cover"
            />
          </div>
        </div>
        <h2 className="text-sm text-center">Fluminense</h2>
      </Link>
    </div>,
    <div key={9} className="flex justify-start">
      <Link href="/" className="flex flex-col justify-start pl-1">
        <div className="flex justify-center items-center w-full p-1">
          <div className="rounded-full overflow-hidden">
            <Image
              src="/nense.jpg"
              width={75}
              height={75}
              alt="Uniforme Fluminense"
              className="object-cover"
            />
          </div>
        </div>
        <h2 className="text-sm text-center">Fluminense</h2>
      </Link>
    </div>,
    <div key={10} className="flex justify-start">
      <Link href="/" className="flex flex-col justify-start pl-1">
        <div className="flex justify-center items-center w-full p-1">
          <div className="rounded-full overflow-hidden">
            <Image
              src="/nense.jpg"
              width={75}
              height={75}
              alt="Uniforme Fluminense"
              className="object-cover"
            />
          </div>
        </div>
        <h2 className="text-sm text-center">Fluminense</h2>
      </Link>
    </div>,
    <div key={11} className="flex justify-start">
      <Link href="/" className="flex flex-col justify-start pl-1">
        <div className="flex justify-center items-center w-full p-1">
          <div className="rounded-full overflow-hidden">
            <Image
              src="/nense.jpg"
              width={75}
              height={75}
              alt="Uniforme Fluminense"
              className="object-cover"
            />
          </div>
        </div>
        <h2 className="text-sm text-center">Fluminense</h2>
      </Link>
    </div>,
    <div key={12} className="flex justify-start">
      <Link href="/" className="flex flex-col justify-start pl-1">
        <div className="flex justify-center items-center w-full p-1">
          <div className="rounded-full overflow-hidden">
            <Image
              src="/nense.jpg"
              width={75}
              height={75}
              alt="Uniforme Fluminense"
              className="object-cover"
            />
          </div>
        </div>
        <h2 className="text-sm text-center">Fluminense</h2>
      </Link>
    </div>,
  ]

  return <Slider {...settings}>{slides}</Slider>
}

export default FreePrizes
