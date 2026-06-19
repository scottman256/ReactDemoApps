import React, { useState, useEffect } from 'react'
import Controls from './components/Controls'
import Navbar from './components/Navbar'
import Home from './components/Home'
import IPhone from './components/IPhone'
import MacBook from './components/MacBook'
import Watch from './components/Watch'
import IMac from './components/IMac'
import PageTransition from './components/PageTransition'

const App = () => {
  const [frameZoom, setFrameZoom] = useState(false)
  const [activePage, setActivePage] = useState(0)
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth > 1024)
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024)
      if (window.innerWidth < 1024) {
        setFrameZoom(true)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavClick = (pageIndex) => {
    setActivePage(pageIndex)
  }

  const toggleZoom = () => {
    if (isLgScreen) {
      setFrameZoom(!frameZoom)
    }
  }

  const resetPage = () => {
    setActivePage(0)
  }

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen)
  }
  return (
    <div className="w-full h-screen grid place-items-center">
      <div
        className={`${
          frameZoom && 'min-w-[97vw] min-h-[97vh]'
        } w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-w-[90vw] max-h-[90vh] border border-gray-300 rounded-2xl resize overflow-auto relative transition-all duration-100 flex`}
      >
        <Navbar
          activePage={activePage}
          handleNavClick={handleNavClick}
          isNavbarOpen={isNavbarOpen}
          toggleNavbar={toggleNavbar}
        />
        <Controls
          toggleZoom={toggleZoom}
          frameZoom={frameZoom}
          resetPage={resetPage}
          activePage={activePage}
        />
        <div className="flex-grow">
          <PageTransition activePage={activePage}>
            <Home onNavigate={handleNavClick} />
            <IPhone />
            <MacBook />
            <Watch />
            <IMac />
          </PageTransition>
        </div>
      </div>
    </div>
  )
}

export default App
