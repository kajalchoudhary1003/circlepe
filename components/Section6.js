import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { League_Spartan } from "next/font/google";
import Image from "next/image";

const league = League_Spartan({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

function Section6({ currentSection }) {
  // Determine the slider height percentage based on the current section
  const sliderHeight = `${(currentSection / 5) * 100}%`; 
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        className={`h-screen w-full bg-[radial-gradient(circle_at_top_left,_#202b39_5%,_#202b39_10%,_#161616_100%)]`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="main relative h-screen flex flex-row">
          <div className="section basis-5/6 flex justify-center items-center">
            <div className="partition flex flex-row md:space-x-8 lg:space-x-16">
              <div
                className={`${league.className} 2xl:space-y-28 details flex flex-col space-y-8 justify-center`}
              >
                <div>
                  <h1 className="text-primary font-medium md:text-[50px] 2xl:text-[180px] lg:text-[64px] ">
                    Step <span className="text-secondary">4</span>
                  </h1>
                </div>

                <div className="lg:h-[2px] md:h-[1px] md:w-[60px] w-[84px] bg-accent-blue lg:-mt-3 2xl:h-[7px] 2xl:w-[220px]"></div>
                <div className="para text-secondary md:text-lg lg:text-2xl 2xl:text-[60px]">
                  <ul className="customList">
                    <li className="text-[#fcf1b6] lg:mb-5 2xl:mb-10">
                      Tenant gets approved to move-in:
                    </li>
                  </ul>
                  <span>
                    <ul className="customList4">
                      <li className="2xl:mb-8">
                        Gets Zero-security deposit approval
                      </li>
                      <li>Zero cost EMI = Monthly Rent</li>
                    </ul>
                  </span>
                </div>
              </div>
              <div className="image">
                <Image
                  src="/images/d6.jpeg"
                  alt="section1 image"
                  width={320}
                  height={500}
                  className="lg:rounded-[50px] md:rounded-[40px] md:w-[270px] md:h-[570px] lg:w-[350px] lg:h-[760px] xl:w-[320px] xl:h-[670px] xl:rounded-[50px] 2xl:w-[720px] 2xl:h-[1480px] 2xl:rounded-[100px]"
                />
              </div>
            </div>
          </div>
          <div className="slider basis-1/6 flex pl-8 items-center">
            {/* Slider Track */}
            <div className="relative w-[2px] md:h-[150px] lg:h-[200px] 2xl:w-[4px] 2xl:h-[450px] h-[283px] bg-primary rounded-full">
              {/* Slider Fill */}
              <div
                className="absolute top-0 left-0 w-full bg-green-400 rounded-full"
                style={{ height: sliderHeight }}
              ></div>
              {/* Slider Circle that moves along with the fill */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 bg-green-400 rounded-full w-4 h-4"
                style={{ top: `calc(${sliderHeight} - 1rem)` }} // Adjusted to center the circle on the fill
              ></div>
            </div>
          </div>
          {/* Overlay layer for the arrow image */}
          <div className="absolute top-1/2 left-1/4 md:-translate-x-8 md:translate-y-8 lg:translate-x-3 lg:translate-y-20 xl:translate-x-12 xl:translate-y-6 2xl:translate-x-10 2xl:translate-y-20 transform translate-y-12 translate-x-24 z-10">
            <Image
              src="/images/d4.svg"
              width={300}
              height={300}
              alt="arrow"
              className="2xl:w-[700px] 2xl:h-[700px] lg:w-full lg:h-full md:w-[260px] md:h-[260px] xl:w-[350px] xl:h-[350px]"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Section6;
