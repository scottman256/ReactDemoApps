import React from 'react'

const Loader = ({ isLoading }) => {
  return (
    <div
      className={`fixed inset-0 bg-white dark:bg-gray-900 z-50 grid place-items-center transition-opacity duration-1000 ease-in-out ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <img src="images/loading-gif-1.gif" alt="Loader" className="w-40" />
    </div>
  )
}

export default Loader
