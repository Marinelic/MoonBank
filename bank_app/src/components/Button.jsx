import React from 'react'

const Button = ({ styles }) => (
  <button
    type="button"
    style={{ background: 'linear-gradient( #b46123 0%, #faefa1 100%)' }}
    className={`py-4 mb-5 lg:mb-4 px-6 font-poppins font-medium text-[18px] text-black outline-none rounded-[10px] ${styles}`}
  >
    Get Started
  </button>
)


export default Button
