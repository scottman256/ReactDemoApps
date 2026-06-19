import React from 'react'
import NavigationCircles from './NavigationCircles'

const Contact = () => {
  return (
    <div id="contact" className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl font-light md:mb-32 mb-24">Connect with me</h2>
      <form className="flex flex-col lg:space-y-12 space-y-8">
        <input
          type="email"
          placeholder="Email"
          className="md:w-[500px] w-[330px] h-13 pl-3 text-lg outline-0 border border-red-500 dark:border-yellow-500 placeholder-gray-600 dark:placeholder-yellow-500/50 transition-colors duration-500"
        />
        <textarea
          placeholder="Message"
          className="md:w-[500px] w-[330px] h-13 pl-3 text-lg outline-0 border border-red-500 dark:border-yellow-500 placeholder-gray-600 dark:placeholder-yellow-500/50 min-h-[100px] max-h-[200px] resize-y p-3 transition-colors duration-500"
        ></textarea>
        <input
          type="submit"
          value="Stay Connected"
          className="md:w-[500px] w-[330px] h-13 pl-3 text-lg outline-0 bg-red-500 dark:bg-yellow-500 text-white dark:text-gray-900 uppercase font-extrabold cursor-pointer tracking-wide shadow-md shadow-gray-700/20 transition-colors duration-500"
        />
      </form>
      <NavigationCircles section="contact" />
    </div>
  )
}

export default Contact
