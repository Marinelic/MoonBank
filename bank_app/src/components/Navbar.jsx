import { useState } from 'react'
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

function Navbar() {
  return (
   <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="mabank" className='w-[170px] h-[90px]' />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li>
            
          </li>
        ))}

      </ul>
   </nav>
  )
}

export default Navbar
