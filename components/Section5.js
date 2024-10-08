import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { League_Spartan } from "next/font/google";
import Image from "next/image";

const league = League_Spartan({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

function Section5({ currentSection }) {
  // Determine the slider height percentage based on the current section
  const sliderHeight = `${(currentSection / 5) * 100}%`; 
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        className={`h-screen w-full  bg-[radial-gradient(circle_at_top_left,_#202b39_5%,_#202b39_10%,_#161616_100%)]`}
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
                  <h1 className="text-primary md:text-[50px] font-medium 2xl:text-[180px] lg:text-[64px] ">
                    Step <span className="text-secondary">3</span>
                  </h1>
                </div>

                <div className="lg:h-[2px] md:h-[1px] md:w-[60px] w-[84px] bg-accent-blue 2xl:h-[7px] 2xl:w-[220px] lg:-mt-3"></div>
                <div className="para text-secondary md:text-lg lg:text-2xl 2xl:text-[60px]">
                  <ul className="customList">
                    <li className="text-[#fcf1b6]  lg:mb-5">
                      Smooth onboarding for the Tenant begins
                    </li>
                  </ul>
                </div>
              </div>
              <div className="image">
                <Image
                  src="/images/d5.jpeg"
                  alt="section1 image"
                  width={320}
                  height={500}
                  className="lg:rounded-[50px] md:rounded-[40px] md:w-[270px] md:h-[570px] lg:h-[720px] lg:w-[340px] xl:w-[320px] xl:h-[670px] xl:rounded-[50px] 2xl:w-[720px] 2xl:h-[1480px] 2xl:rounded-[100px]"
                />
              </div>
            </div>
          </div>
          <div className="slider basis-1/6 flex pl-8 items-center">
            {/* Slider Track */}
            <div className="relative md:h-[150px] 2xl:w-[4px] lg:h-[200px] 2xl:h-[450px] w-[2px] h-[283px] bg-primary rounded-full">
              {/* Slider Fill */}
              <div
                className="absolute top-0 left-0 w-full bg-blue-500 rounded-full"
                style={{ height: sliderHeight }}
              ></div>
              {/* Slider Circle that moves along with the fill */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full w-4 h-4"
                style={{ top: `calc(${sliderHeight} - 1rem)` }} // Adjusted to center the circle on the fill
              ></div>
            </div>
          </div>
          {/* Overlay layer for the arrow image */}
          <div className="absolute top-1/2 left-1/4 md:-translate-x-4 md:translate-y-8 lg:-translate-x-4 lg:translate-y-4 xl:translate-x-16 xl:-translate-y-4 2xl:translate-y-20 2xl:translate-x-32 transform -translate-y-2 translate-x-16 z-10">
            <Image
              src="/images/d4.svg"
              width={350}
              height={350}
              alt="arrow"
              className="2xl:w-[700px] 2xl:h-[700px] md:h-[260px] md:w-[260px] lg:h-[350px] lg:w-[350px] xl:w-[360px] xl:h-[360px]"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Section5;
