import React from 'react'
import { AiFillMail, AiFillGithub, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div class="mt-12 w-max-[800px] border-t border-gray-500 text-center">
      <p class="my-5 text-gray-500">© 2024 Created by Ilhamardnms. All rights reserved.</p>
      <div class="inline-flex text-gray-500 gap-4 text-3xl">
        <a href="mailto:ilhamardanmas@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300 ease-in-out"><AiFillMail /></a>
        <a href="https://github.com/ibulll" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300 ease-in-out"><AiFillGithub /></a>
        <a href="https://www.instagram.com/ilhamardnms/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300 ease-in-out"><AiFillInstagram /></a>
      </div>

    </div>
  )
}

export default Footer
