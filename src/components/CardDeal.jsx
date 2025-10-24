import { motion } from "framer-motion";
import styles, { layout } from "../style";
import Button from "./Button";
import Card from "../assets/card.jpg";
import CardDealBg from "../assets/cardDealBg.jpg";

const CardDeal = () => (
  <section
    id="product"
    className={`${layout.section} relative overflow-hidden bg-cover bg-center bg-no-repeat rounded-[24px] border border-yellow-400/40 shadow-[0_0_20px_rgba(250,204,21,0.25)] mt-16 sm:mt-24 md:mt-36 lg:mt-36 px-4 sm:px-12 py-12 sm:py-16`}
    style={{
      backgroundImage: `url(${CardDealBg})`,
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/55 backdrop-blur-[0px] z-[0]" />

    <div className="relative z-10 flex flex-col md:flex-row items-center md:items-center justify-between gap-8 md:gap-12">
      
      {/* LEFT — TEXT */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white font-poppins font-semibold text-[36px] sm:text-[48px] leading-tight"
        >
          Discover smarter{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
            card solutions
          </span>{" "}
          built for your lifestyle.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-300`}
        >
          Upgrade your finances with intelligent card management, instant
          rewards, and total control — all in one seamless experience powered by
          MoonBank.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 sm:mt-8 flex justify-center md:justify-start w-full"
        >
          <Button styles="shadow-md hover:shadow-yellow-400/20 transition-all duration-300" />
        </motion.div>
      </div>

      {/* RIGHT — IMAGE */}
      <div className="flex-1 flex justify-center items-center mt-1 sm:mt-8 md:mt-0">
        <motion.img
          src={Card}
          alt="card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[90%] sm:w-[100%] max-w-[480px] h-auto relative z-[5] rounded-[20px] shadow-xl hover:scale-[1.02] transition-transform duration-500"
        />
      </div>
    </div>
  </section>
);

export default CardDeal;
