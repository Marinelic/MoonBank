import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from './FeedbackCard';

const Testimonials = () => (
    <section 
        id="clients" 
        className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mt-16 sm:mt-24 md:mt-36 lg:mt-36 px-4 sm:px-12`}>

        <div className="w-full flex flex-col items-center text-center mb-12">
          <h2 className="text-white font-poppins font-semibold text-[36px] sm:text-[48px] leading-tight mb-4">
           What our clients say about{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
          MoonBank
        </span>
        </h2>

          <p className={`${styles.paragraph} max-w-[600px] text-gray-300 leading-relaxed`}>
            See how thousands of people around the world use MoonBank to simplify
        their finances, save time, and grow their wealth securely.
          </p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-8">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card}/>
        ))}
      </div>
    </section>
  )


export default Testimonials
