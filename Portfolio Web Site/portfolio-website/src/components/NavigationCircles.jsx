import React from 'react'

const NavigationCircles = ({ section }) => {
  return (
    <div className="h-[300px] w-[1px] bg-red-500 dark:bg-yellow-500 absolute right-12 hidden md:flex flex-col justify-between items-center transition-colors duration-500">
      <div
        className={`w-5 aspect-square border border-red-500 dark:border-yellow-500 rounded-full bg-gray-300 transition-colors duration-500 ${
          section === 'home' ? 'bg-red-500 dark:bg-yellow-500' : 'bg-gray-300'
        }`}
      ></div>
      <div
        className={`w-5 aspect-square border border-red-500 dark:border-yellow-500 rounded-full bg-gray-300 transition-colors duration-500 ${
          section === 'services' ? 'bg-red-500 dark:bg-yellow-500' : 'bg-gray-300'
        }`}
      ></div>
      <div
        className={`w-5 aspect-square border border-red-500 dark:border-yellow-500 rounded-full bg-gray-300 transition-colors duration-500 ${
          section === 'contact' ? 'bg-red-500 dark:bg-yellow-500' : 'bg-gray-300'
        }`}
      ></div>
    </div>
  )
}

export default NavigationCircles
