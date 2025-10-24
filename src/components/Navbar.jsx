import { useState, useEffect } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import call from "../assets/call.svg";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b1424]/65 backdrop-blur-md border-b border-[#1a2b45]/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="moonbank" className="w-[60px] h-[60px] mr-2" />
          <h1 className="text-white text-xl font-semibold tracking-wide">
            MOON<span className="text-yellow-400">BANK</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center space-x-8">
          <ul className="flex space-x-10">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  className={`transition-colors duration-300 font-medium text-[16px] ${
                    activeSection === nav.id
                      ? "text-yellow-400"
                      : "text-gray-200 hover:text-yellow-400"
                  }`}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Call Icon */}
          <a
            href="#contact"
            className="hidden sm:flex items-center text-white hover:text-yellow-400 transition-colors duration-300 ml-4"
          >
            <img src={call} alt="call" className="w-6 h-6" />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {/* Mobile Dropdown */}
        {toggle && (
          <div className="absolute top-20 right-6 bg-[#0b1424]/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-[#1a2b45]/40">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    className={`text-[16px] font-medium transition-colors duration-300 ${
                      activeSection === nav.id
                        ? "text-yellow-400"
                        : "text-gray-200 hover:text-yellow-400"
                    }`}
                    onClick={() => setToggle(false)}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-4 flex items-center justify-center text-yellow-400 hover:text-yellow-300"
            >
              <img src={call} alt="call" className="w-6 h-6 mr-2" /> Call Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
