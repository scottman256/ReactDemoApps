import React from 'react'
import { iphoneModels } from '../data/index'

const IPhone = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-around bg-white p-8">
      <h3 className="2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-8">
        Which iPhone is right for you?
      </h3>
      <div className="flex justify-between w-full">
        {iphoneModels.map((iphone, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-between gap-y-2 ${
              index === 2 ? 'hidden md:flex' : ''
            }`}
          >
            <img
              src={iphone.img}
              alt={iphone.name}
              className="2xl:w-72 lg:w-64 sm:w-48 md:h-64 sm:h-48 object-contain"
            />
            <a
              href="#"
              className="2xl:text-2xl xl:text-xl lg:text-base text-sm font-semobold text-gray-800 mt-4"
            >
              {iphone.name}
            </a>
            <p className="2xl:text-lg xl:text-base lg:text-sm text-xs text-gray-700 mt-2">
              {iphone.description}
            </p>
            <span className="2xl:text-base xl:text-sm lg:text-xs text-blue-400 mt-2">
              {iphone.price}
            </span>
            <button
              type="button"
              className="text-sm mt-4 px-4 py-2 bg-blue-400 text-white rounded-full"
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default IPhone
