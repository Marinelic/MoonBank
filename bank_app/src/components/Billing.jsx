import styles, { layout } from '../style';
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";
import Bill from "../assets/bill.jpg";

const Billing = () => (
  <section
    className={`${layout.sectionReverse} relative mt-16 sm:mt-24 md:mt-36 lg:mt-36 px-2 sm:px-12`}
  >
    <div className={`${layout.sectionImgReverse} flex justify-center`}>
      <img
        src={Bill}
        alt="billing"
        className="w-[100%] max-w-[480px] h-auto relative z-[5] rounded-[24px] shadow-xl hover:scale-[1.02] transition-transform duration-500"
      />
    </div>

    <div className={`${layout.sectionInfo} text-center md:text-left`}>
      <h2 className="text-white font-poppins font-semibold text-[36px] sm:text-[48px] leading-tight">
        Take control of your{" "}
        <br className="sm:block hidden"/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
            finances
          </span> with effortless precision.
      </h2>


      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-300`}>
        MoonBank lets you automate invoices, track payments in real time, and keep
        your business running smoother than ever — all in one secure dashboard built
        for modern entrepreneurs.
      </p>

      {/* <div className="flex flex-row justify-center md:justify-start flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="apple_store"
          className="w-[128px] h-[42px] object-contain mr-10 cursor-pointer hover:scale-105 transition-transform duration-300"
        />
        <img
          src={google}
          alt="google_store"
          className="w-[128px] h-[42px] object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
        />
      </div> */}
    </div>
  </section>
);

export default Billing;
