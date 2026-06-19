import React, { useState, useEffect } from 'react'

const PageTransition = ({ activePage, children }) => {
  const [currentPage, setCurrentPage] = useState(activePage)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    if (currentPage !== activePage) {
      setTransitioning(true)
      setTimeout(() => {
        setCurrentPage(activePage)
        setTransitioning(false)
      }, 500)
    }
  }, [activePage, currentPage])
  return (
    <div
      className="w-full h-full overflow-hidden relative"
      style={{ backgroundImage: 'url(images/pages-bg.png)' }}
    >
      <div
        className={`absolute w-full h-full transition-transform duration-500 ${
          transitioning ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        {children[currentPage]}
      </div>
    </div>
  )
}

export default PageTransition
