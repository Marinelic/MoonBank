import { stats } from '../constants';
import styles from '../style';
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Stats = () => {
    const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

    return (
        <section 
            ref={ref}
            className={`${styles.flexCenter} flex-col sm:flex-row sm:mb-20 mb-10 text-center sm:text-left`}>
                {stats.map((stat, index) => (
                    <div 
                         key={stat.id}
                         initial={{ opacity: 0, y: 40 }}
                         animate={inView ? { opacity: 1, y: 0 } : {}}
                         transition={{ duration: 0.6, delay: index * 0.15 }}
                         className="flex flex-col sm:flex-row justify-center sm:justify-start items-center m-4 sm:m-6 w-full sm:w-auto"
                         >
                                
                        <h4 className="font-poppins font-semibold xs:text-[42px] text-[32px] xs:leading-[56px] leading-[46px] text-white">
                                {inView ? (
                                <CountUp
                                    start={0}
                                    end={parseFloat(stat.value.replace(/[^\d.]/g, ""))}
                                    duration={2.5}
                                    separator=","
                                />
                                ) : (
                                "0"
                                )}
                            {stat.value.includes("+") && "+"}
                        </h4>

                        <p className='font-poppins font-medium xs:text-[20px] text-[16px] xs:leading-[26px] leading-[21px] text-gradient uppercase sm:ml-3 mt-1 sm:mt-0 tracking-wide'>{stat.title}</p>
                    </div>
                ))}
        </section>
    );
    };



export default Stats
