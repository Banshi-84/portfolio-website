import mypic from "../assets/mypic.jpeg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Body = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36 ">
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Haruhiko Yoshida
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-4xl tracking-tight text-cyan"
            >
              System Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-3 max-w-xl py-6 font-light tracking-tighter"
            >
              With two years of experience as a system developer, I am
              passionate about creating impactful solutions that drive business
              growth and elevate user experiences. My expertise spans front-end
              technologies like React and Next.js and back-end development using
              Node.js, MySQL, PostgreSQL, and MongoDB. I thrive on the challenge
              of turning complex requirements into innovative, efficient systems
              that empower users and streamline operations. By staying current
              with the latest industry trends and focusing on seamless
              integration and robust functionality, I am dedicated to developing
              solutions that not only meet client needs but also anticipate
              future demands, adding real value to every project I undertake.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:p-8">
          <div className="flex justify-center w-300 h-200 ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={mypic}
              alt="Haruhiko Yoshida"
              className="rounded-full m-30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
