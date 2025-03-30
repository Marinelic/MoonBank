import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from './GetStarted';

const Hero = () => (
 <section id="home" className={`flex md:flex-row flex-col ${styles.padding}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:16 px-4`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />

        <p className={`${styles.paragraph} ml-2 text-black`}>
          <span className="text-white">20%</span> Discount For {" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The Future of <br className="sm:block hidden" /> {" "} 
          <span className="text-gradient">Banking</span> {" "} is Here.
        </h1>  

        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        Seamless. Secure. Limitless.
      </h1>

     <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Say goodbye to outdated banking. Experience instant transactions, AI-powered insights, and financial freedom—all in one place.
    </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-40 bottom-30 blue__gradient" />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
  </section>
)

export default Hero
