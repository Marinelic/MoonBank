import { motion } from "framer-motion";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import businessBg from "../assets/businessBg.jpg"; // ✅ your background image

const FeatureCard = ({ icon, title, content, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className={`flex flex-row p-6 rounded-[16px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card border border-[#1a2b45]/40 backdrop-blur-md hover:bg-[#18243a]/30 transition-all duration-300`}
  >
    {/* Icon */}
    <div
      className={`w-[60px] h-[60px] rounded-full ${styles.flexCenter} bg-gradient-to-br from-yellow-200/80 to-yellow-300/40 shadow-lg shadow-yellow-400/10`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>

    {/* Text */}
    <div className="flex-1 flex flex-col ml-4">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-gray-300 text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </motion.div>
);

function Business() {
  return (
    <section
      id="features"
      className={`${layout.section} relative overflow-hidden bg-cover bg-center bg-no-repeat rounded-[20px]`}
      style={{
        backgroundImage: `url(${businessBg})`
      }}
    >
      {/* Optional dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] z-[0]" />

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-12 px-6 sm:px-12">

        {/* Left Section */}
        <div className="flex-1 mt-10 text-center md:text-left">
          <h2 className="text-white font-poppins font-semibold text-[36px] sm:text-[48px] leading-tight">
            Focus on your vision, <br className="sm:block hidden" />{" "}
            we’ll handle the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
              numbers.
            </span>
          </h2>

          <p
            className={`${styles.paragraph} max-w-[480px] mt-5 text-gray-300 leading-relaxed`}
          >
            From seamless transactions to real-time insights — MoonBank empowers
            your business to grow faster, smarter, and more secure than ever
            before.
          </p>

          <div className="mt-10">
            <Button styles="bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-semibold shadow-md hover:shadow-yellow-400/20 transition-all duration-300" />
          </div>
        </div>

        {/* Right Section - Features */}
        <div className="flex-1 flex flex-col w-full max-w-[480px]">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Business;
