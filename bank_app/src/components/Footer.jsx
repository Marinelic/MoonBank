import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <footer
    className={`${styles.flexCenter} flex-col text-center md:text-left ${styles.paddingY} px-4 sm:px-8 md:px-12`}
  >
    {/* --- Top Section --- */}
    <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start mb-10 md:mb-8">
      
      {/* Logo + short text */}
      <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 md:mr-10">
        <img
          src={logo}
          alt="moonbank"
          className="w-[150px] sm:w-[180px] md:w-[150px] h-auto object-contain mb-3 md:ml-10 ml-4"
        />
        <p className="font-poppins font-normal text-[15px] sm:text-[16px] leading-[24px] text-gray-300 max-w-[320px] text-center md:text-left">
          A new way to make payments — easy, secure, and reliable for everyone.
        </p>
      </div>

      {/* Links Section */}
      <div className="w-full md:flex-1 flex flex-wrap justify-center md:justify-end gap-8 sm:gap-10 md:gap-12">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className="min-w-[140px] text-center md:text-left mt-6 md:mt-12"
          >
            <h4 className="font-poppins font-medium text-[16px] sm:text-[18px] text-white mb-2">
              {footerlink.title}
            </h4>
            <ul className="space-y-2">
              {footerlink.links.map((link) => (
                <li
                  key={link.name}
                  className="font-poppins font-normal text-[16px] sm:text-[16px] text-gray-400 hover:text-yellow-300 cursor-pointer transition-colors duration-300"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* --- Bottom Section --- */}
    <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
      <p className="font-poppins text-[14px] sm:text-[15px] text-gray-400 leading-[22px] mb-4 md:mb-0 text-center md:text-left">
        © {new Date().getFullYear()} MoonBank. All rights reserved.
      </p>

      <div className="flex flex-row justify-center md:justify-end space-x-5 sm:space-x-6">
        {socialMedia.map((social) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className="w-[20px] sm:w-[22px] h-[20px] sm:h-[22px] object-contain cursor-pointer hover:opacity-80 transition-opacity duration-300"
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
