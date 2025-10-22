import { motion } from "framer-motion";
import styles, { layout } from "../style";
import Button from "./Button";
import Card from "../assets/card.jpg";

const CardDeal = () => (
  <section
    id="card-deal"
    className={`${layout.section} relative overflow-hidden bg-gradient-to-br from-[#0b0f1a] via-[#111827] to-[#1a2235] rounded-[24px] border border-yellow-400/40 shadow-[0_0_20px_rgba(250,204,21,0.25)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(250,204,21,0.35)] px-6 sm:px-12 py-12 sm:py-16 mt-20 sm:mt-28 md:mt-32 lg:mt-36`}
  >
    {/* Subtle glowing overlay */}
    <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 via-transparent to-cyan-400/10 blur-3xl opacity-40 z-[0]" />

    <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
      
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white font-poppins font-semibold text-[32px] sm:text-[46px] leading-tight tracking-tight"
        >
          Discover smarter{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
            card solutions
          </span>{" "}
          <br className="sm:block hidden" /> built for your lifestyle.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-300 leading-relaxed`}
        >
          Upgrade your finances with intelligent card management, instant
          rewards, and total control — all in one seamless experience powered by
          MoonBank.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8"
        >
          <Button styles="shadow-md hover:shadow-yellow-400/20 transition-all duration-300" />
        </motion.div>
      </div>

      {/* Image Section */}
      <div className={`${layout.sectionImg} flex justify-center`}>
        <motion.img
          src={Card}
          alt="card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[90%] sm:w-[100%] max-w-[480px] h-auto relative z-[5] rounded-[20px] shadow-xl hover:scale-[1.02] transition-transform duration-500"
        />
      </div>
    </div>
  </section>
);

export default CardDeal;
