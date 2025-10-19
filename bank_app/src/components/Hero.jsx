import { motion } from "framer-motion";

const Hero = () => (
  <section
    id="home"
    className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24" 
  >
    {/* Background Video */}
    <video
      autoPlay
      loop
      muted
      className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
    >
      <source src="/bg-space.mp4" type="video/mp4" />
    </video>

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50 z-0" />

    {/* Centered Content */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 flex flex-col items-center text-center px-6 sm:px-16 max-w-3xl"
    >
      {/* Badge */}
      <div className="py-[6px] px-4 bg-gradient-to-r from-yellow-500/20 to-transparent 
                      border border-yellow-400/40 rounded-full mb-6 w-fit backdrop-blur-sm">
        <p className="text-sm text-gray-200 font-medium">
          <span className="text-yellow-400 font-semibold">Limited Offer:</span>{" "}
          Enjoy <span className="text-yellow-400 font-semibold">20% Off</span>{" "}
          for your first month
        </p>
      </div>

      {/* Heading */}
      <h1 className="font-poppins font-semibold text-white text-[42px] sm:text-[68px] leading-tight">
        The Next Generation of{" "}
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
          Banking
        </span>
        .
      </h1>

      {/* Subheading */}
      <h2 className="font-poppins font-semibold text-white text-[28px] sm:text-[44px] leading-tight mt-3">
        Smart. Secure. Effortless.
      </h2>

      {/* Paragraph */}
      <p className="text-gray-300 text-[16px] sm:text-[18px] max-w-[480px] mt-6 leading-relaxed">
        Experience intelligent banking designed for the modern world — instant
        transactions, real-time insights, and total control, all in one place.
      </p>

      {/* Button */}
      <button className="bg-yellow-500 font-semibold text-grey-800 text-sm sm:text-base px-8 py-4 rounded-full shadow-md hover:bg-orange-400 transition mt-4 sm:mt-6">
          Get Started
      </button>
    </motion.div>
  </section>
);

export default Hero;
