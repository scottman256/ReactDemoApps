import { useEffect, useRef, useState } from 'react'
import Bg from './components/Bg'
import { flightOffers, images } from './data'

const getRandomNumber = () => Math.floor(Math.random() * 41) - 20

const App = () => {
  const modalWrapperRef = useRef(null)

  const [showModal, setShowModal] = useState(false)

  const handleClickOutside = (event) => {
    if (modalWrapperRef.current === event.target) {
      setShowModal(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <>
      <Bg />
      <div className="centerChild h-screen">
        {/* Button */}
        <button
          onClick={() => setShowModal(true)}
          className={`relative cursor-pointer group overflow-hidden py-3 perspective-midrange ${
            showModal ? 'overflow-visible -rotate-y-[25deg]' : 'overfow-hidden'
          }`}
        >
          <div className="bg-zinc-700 px-7 py-3 border-dotted border-[3px] border-cyan-400 bg-clip-padding rounded-lg hover:-rotate-y-[25deg] duration-500 transition-transform">
            <span
              className={`text-white text-2xl group-hover:opacity-0 group-hover:-translate-y-24 transition-all duration-300 block group-hover:delay-75 delay-300 ${
                showModal && '-translate-y-24'
              }`}
            >
              Book your flight
            </span>
            <span
              className={`absolute h-[2px] w-full border border-dashed border-white left-0 top-1/2 -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right group-hover:delay-200 ${
                showModal && 'sacle-x-100'
              }`}
            />
            <img
              src="/plane.png"
              alt="Plane Icon"
              className={`absolute -left-28 top-1/2 -translate-y-1/2 group-hover:left-20 group-hover:transition-all group-hover:delay-500 group-hover:duration-500 ${
                showModal && 'transition-all !left-44 !scale-200 !opacity-0 !delay-[0s]'
              }`}
            />
          </div>
        </button>
        {/* Modal wrapper */}
        <div
          ref={modalWrapperRef}
          className={`centerChild absolute w-full h-full bg-fuchsia-200/50 -z-10 opacity-0 invisible transition-opacity ${
            showModal && '!opacity-100 !visible !z-10 delay-500'
          }`}
        >
          {/* Modal */}
          <div className="centerChild flex-col gap-y-8 relative w-[730px] h-[600px] bg-white rounded-3xl">
            {/* Colse button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-5 cursor-pointer hover:scale-110 transition-transform"
            >
              <img src="cancel.png" alt="Cancel icon" width={25} />
            </button>
            {/* Modal Heading */}
            <h1 className="centerChild gap-x-3 text-3xl font-semibold text-gray-800">
              Book your trip Around the{' '}
              <div className="relative globeWrapper">
                <div className="globe"></div>
                <img
                  src="/plane.png"
                  alt="Plane Icon"
                  className={`absolute right-52 top-1/2 -translate-y-1/2 scale-200 opacity-40 ${
                    showModal &&
                    '!-right-2 !scale-100 transition-all delay-500 duration-500 opacity-100'
                  }`}
                />
              </div>
            </h1>
            {/* Gallery */}
            <div className="centerChild gap-6">
              {images.map((img, index) => (
                <img
                  src={img}
                  alt="Image"
                  key={index}
                  className="w-32 aspect-square object-cover border-[3px] border-dotted border-cyan-500 rounded-3xl opacity-80 hover:z-10 hover:opacity-100 hover:scale-125 transition-all"
                  style={{ transform: `rotate(${getRandomNumber()}deg)` }}
                />
              ))}
            </div>
            {/* Flight Offers */}
            <div className="grid grid-cols-2 gap-3 w-full px-10">
              {flightOffers.map((offer, index) => (
                <p className="text-xs font-semibold text-gray-700" key={index}>
                  {offer}
                </p>
              ))}
            </div>
            {/* Buttons */}
            <div className="absolute bottom-4 right-4 space-x-2">
              <button className="rounded-sm px-2 py-1 text-xs cursor-pointer bg-cyan-500 text-white hover:bg-cyan-600 transition-colors">
                Book Now
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="rounded-sm px-2 py-1 text-xs cursor-pointer bg-gray-100 border border-gray-300 text-cyan-600 hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
