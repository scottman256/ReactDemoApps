import React, { useState } from 'react'
import { macbookModels } from '../data/index'

const MacBook = () => {
  const [selectedChip, setSelectedChip] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)

  const currentMb = macbookModels[selectedChip]
  const currentColor = currentMb.colors[selectedColor]

  const handleSelectedChip = (index) => {
    setSelectedChip(index)
    setSelectedColor(0)
  }
  return (
    <div className="flex flex-col items-center justify-around bg-white p-8 h-full">
      <h1 className="2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-8">
        Choose your new MacBook Air.
      </h1>
      <div className="flex">
        {macbookModels.map((mb, index) => (
          <button
            key={index}
            className={`2xl:w-36 md:w-26 w-28 2xl:h-18 md:h-12 h-12 flex flex-col justify-evenly items-center border ${
              index === 0 ? 'rounded-l-xl' : 'rounded-r-xl'
            }
            ${index === selectedChip ? 'border-2 border-blue-400' : 'border-gray-800'}`}
            onClick={() => handleSelectedChip(index)}
          >
            <span className="2xl:text-lg xl:text-sm text-xs font-bold text-gray-800">
              With {mb.chip} chip
            </span>
            <span className="2xl:text-base xl:text-sm text-xs text-gray-600">{mb.price}</span>
          </button>
        ))}
      </div>
      <div className="flex flex-col 2xl:p-4 md:items-start items-center">
        <div className="w-80 h-64 2xl:mb-0 -mb-8">
          <img
            src={currentColor.img}
            alt={`MacBook Air with ${currentMb.chip}`}
            className="2xl:w-72 xl:w-52 w-48 h-full 2xl:mt-0 sm:-mt-6 object-contain m-auto"
          />
        </div>
        <span className="2xl:text-lg xl:text-sm font-medium text-gray-800 mb-2 text-center md:text-left">
          {currentColor.label}
        </span>
        <div className="flex space-x-2 mb-4 md:text-left justify-center md:justify-start">
          {currentMb.colors.map((col, index) => (
            <button
              key={index}
              style={{ backgroundColor: col.bg }}
              className={`2xl:w-6 sm:w-5 w-4 2xl:h-6 sm:h-5 h-4 bg-[#2e3641] rounded-full border hover:border-blue-500 ${
                selectedColor === index ? 'border-2 border-blue-400' : 'border-transparent'
              }`}
              onClick={() => setSelectedColor(index)}
            ></button>
          ))}
        </div>
        <img
          src={currentMb.icon}
          alt={`Apple ${currentMb.chip} Icon`}
          className="w-12 h-12 2xl:mb-4 xl:mb-2"
        />
        <div className="2xl:mb-4 xl:mb-2 text-center md:text-left">
          {currentMb.specs.map((spec, index) => (
            <p key={index} className="2xl:text-lg xl:text-base font-semibold text-gray-800 mb-0.5">
              {spec}
            </p>
          ))}
        </div>
        <button
          type="button"
          className="w-min text-sm py-1 px-3 bg-blue-400 rounded-full text-white mt-4 md:mt-0"
        >
          Buy
        </button>
      </div>
    </div>
  )
}

export default MacBook
