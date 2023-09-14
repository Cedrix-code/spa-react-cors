import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div
      className={`absolute inset-0 justify-center items-center ${styles.paddingX} flex flex-row items-start gap-5 select-none`}
    >
          <motion.h1
            initial="hidden"
            animate="show"
            variants={textVariant(0.3)}
            className={`${styles.heroHeadText} text-white flex items-center gap-4`}
          ><span className='text-[60px] text-[#E88C1F]'>
            <Typewriter
              options={{
                strings: 'Welcome to our React-Cors-Login',
                autoStart: true,
                loop: false,
                delay: 50,
              }}
            />
          </span></motion.h1>
    </div>
  );
};

export default Home;