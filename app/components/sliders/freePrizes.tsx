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
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 450,
        settings: {
          dots: false,
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: false,
        },
      },
    ],
  }

  const slides = [
    <div key={1}>
      <Link href="/" className="flex flex-col items-center">
        <div className="flex justify-center items-center bg-gray-100 rounded-lg p-2 w-20 h-20">
          <Image
            src="/nensee.png"
            alt="Uniforme Fluminense"
            width={65}
            height={65}
            className="w-4/5"
          />
        </div>
        <h2 className="text-sm text-center mt-2">Fluminense</h2>
      </Link>
    </div>,
    <div key={2}>
      <Link href="/" className="flex flex-col items-center">
        <div className="flex justify-center items-center bg-gray-100 rounded-lg p-2 w-20 h-20">
          <Image
            src="/nensee.png"
            alt="Uniforme Fluminense"
            width={65}
            height={65}
            className="w-4/5"
          />
        </div>
        <h2 className="text-sm text-center mt-2">Fluminense</h2>
      </Link>
    </div>,
    <div key={3}>
      <Link href="/" className="flex flex-col items-center">
        <div className="flex justify-center items-center bg-gray-100 rounded-lg p-2 w-20 h-20">
          <Image
            src="/nensee.png"
            alt="Uniforme Fluminense"
            width={65}
            height={65}
            className="w-4/5"
          />
        </div>
        <h2 className="text-sm text-center mt-2">Fluminense</h2>
      </Link>
    </div>,
    <div key={4}>
      <Link href="/" className="flex flex-col items-center">
        <div className="flex justify-center items-center bg-gray-100 rounded-lg p-2 w-20 h-20">
          <Image
            src="/nensee.png"
            alt="Uniforme Fluminense"
            width={65}
            height={65}
            className="w-4/5"
          />
        </div>
        <h2 className="text-sm text-center mt-2">Fluminense</h2>
      </Link>
    </div>,
    <div key={5}>
      <Link href="/" className="flex flex-col items-center">
        <div className="flex justify-center items-center bg-gray-100 rounded-lg p-2 w-20 h-20">
          <Image
            src="/nensee.png"
            alt="Uniforme Fluminense"
            width={65}
            height={65}
            className="w-4/5"
          />
        </div>
        <h2 className="text-sm text-center mt-2">Fluminense</h2>
      </Link>
    </div>,
    <div key={6}>
      <Link href="/" className="flex flex-col items-center">
        <div className="flex justify-center items-center bg-gray-100 rounded-lg p-2 w-20 h-20">
          <Image
            src="/nensee.png"
            alt="Uniforme Fluminense"
            width={65}
            height={65}
            className="w-4/5"
          />
        </div>
        <h2 className="text-sm text-center mt-2">Fluminense</h2>
      </Link>
    </div>,
    <div key={7}>
      <Link href="/" className="flex flex-col items-center">
        <div className="flex justify-center items-center bg-gray-100 rounded-lg p-2 w-20 h-20">
          <Image
            src="/nensee.png"
            alt="Uniforme Fluminense"
            width={65}
            height={65}
            className="w-4/5"
          />
        </div>
        <h2 className="text-sm text-center mt-2">Fluminense</h2>
      </Link>
    </div>,
    <div key={8}>
      <Link href="/" className="flex flex-col items-center">
        <div className="flex justify-center items-center bg-gray-100 rounded-lg p-2 w-20 h-20">
          <Image
            src="/nensee.png"
            alt="Uniforme Fluminense"
            width={65}
            height={65}
            className="w-4/5"
          />
        </div>
        <h2 className="text-sm text-center mt-2">Fluminense</h2>
      </Link>
    </div>,
    <div key={9}>
      <Link href="/" className="flex flex-col items-center">
        <div className="flex justify-center items-center bg-gray-100 rounded-lg p-2 w-20 h-20">
          <Image
            src="/nensee.png"
            alt="Uniforme Fluminense"
            width={65}
            height={65}
            className="w-4/5"
          />
        </div>
        <h2 className="text-sm text-center mt-2">Fluminense</h2>
      </Link>
    </div>,
    <div key={10}>
      <Link href="/" className="flex flex-col items-center">
        <div className="flex justify-center items-center bg-gray-100 rounded-lg p-2 w-20 h-20">
          <Image
            src="/nensee.png"
            alt="Uniforme Fluminense"
            width={65}
            height={65}
            className="w-4/5"
          />
        </div>
        <h2 className="text-sm text-center mt-2">Fluminense</h2>
      </Link>
    </div>,
    <div key={11}>
      <Link href="/" className="flex flex-col items-center">
        <div className="flex justify-center items-center bg-gray-100 rounded-lg p-2 w-20 h-20">
          <Image
            src="/nensee.png"
            alt="Uniforme Fluminense"
            width={65}
            height={65}
            className="w-4/5"
          />
        </div>
        <h2 className="text-sm text-center mt-2">Fluminense</h2>
      </Link>
    </div>,
    <div key={12}>
      <Link href="/" className="flex flex-col items-center">
        <div className="flex justify-center items-center bg-gray-100 rounded-lg p-2 w-20 h-20">
          <Image
            src="/nensee.png"
            alt="Uniforme Fluminense"
            width={65}
            height={65}
            className="w-4/5"
          />
        </div>
        <h2 className="text-sm text-center mt-2">Fluminense</h2>
      </Link>
    </div>,
  ]

  return (
    <div className="slider-container w-full sm:w-11/12 px-2">
      <Slider {...settings}>{slides}</Slider>
    </div>
  )
}

export default FreePrizes
