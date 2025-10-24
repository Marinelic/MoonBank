import React from 'react'

const Button = ({ href = "#contact", styles }) => (
  <a
    href={href}
    className={`inline-block py-4 mb-5 lg:mb-4 px-6 font-poppins font-medium text-[18px] 
                text-black rounded-[10px] outline-none 
                ${styles}`}
    style={{ background: "linear-gradient(#b46123 0%, #faefa1 100%)" }}
  >
    Get Started
  </a>
);


export default Button
