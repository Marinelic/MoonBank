import styles from "../style";
import CtaBg from "../assets/ctaBg.jpg";

const CTA = () => (
  <section
    id="contact"
    className={`${styles.flexCenter} flex-col md:flex-row justify-between items-center text-center md:text-left 
    rounded-[24px] px-6 sm:px-12 py-10 sm:py-14 md:py-16 mt-10 sm:mt-24 md:mt-36 
    relative overflow-hidden`}
    style={{
      backgroundImage: `url(${CtaBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-black/60 z-[0]" />

    {/* Left Section - Text */}
    <div className="flex-1 flex flex-col justify-center items-center md:items-start relative z-[1] mb-10 md:mb-0">
      <h2 className="font-poppins font-semibold text-[34px] sm:text-[48px] leading-[1.2] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] mb-4 sm:mb-6">
        Join{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
          MoonBank
        </span> 
        <br className="sm:block hidden" />
        {" "}and take control of your finances.
      </h2>

      <p className="font-poppins font-normal text-[16px] sm:text-[18px] leading-[30px] text-white/80 max-w-[470px] drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
        Open an account or get in touch with our advisors. Experience smarter
        banking that’s secure, simple, and built for you.
      </p>
    </div>

    {/* Right Section - Elegant Contact Form */}
    <div className="flex-1 w-full max-w-[480px] bg-white/10 backdrop-blur-md border border-white/20 rounded-[20px] p-6 sm:p-8 relative z-[1] shadow-[0_0_20px_rgba(0,0,0,0.3)]">
      <h3 className="text-white font-poppins font-semibold text-[22px] mb-5">
        Get Started Today
      </h3>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="First Name"
              required
              className="w-full py-3 px-4 rounded-[12px] bg-white/10 border border-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
            />
          </div>

          <div className="flex-1">
            <input
              type="text"
              placeholder="Last Name"
              required
              className="w-full py-3 px-4 rounded-[12px] bg-white/10 border border-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
            />
          </div>
      </div>


        <input
          type="email"
          placeholder="Email Address"
          required
          className="py-3 px-4 rounded-[12px] bg-white/10 border border-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="py-3 px-4 rounded-[12px] bg-white/10 border border-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
        />

        <textarea
          placeholder="Your message"
          rows="3"
          className="py-3 px-4 rounded-[12px] bg-white/10 border border-white/20 text-white placeholder:text-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
        ></textarea>

        <button
          type="submit"
          className="w-full py-4 px-6 font-poppins font-medium text-[18px] text-black 
          bg-gradient-to-r from-[#b46123] to-[#faefa1] 
          rounded-[10px] shadow-md hover:shadow-yellow-400/20 transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  </section>
);

export default CTA;
