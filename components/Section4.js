import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { League_Spartan } from "next/font/google";
import Image from "next/image";
import "../app/globals.css";

const league = League_Spartan({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

function Section4({ currentSection }) {
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
            <div className="partition h-screen flex flex-row md:space-x-0 lg:space-x-10">
              <div
                className={`${league.className} 2xl:space-y-28 details flex flex-col space-y-8 justify-center`}
              >
                <div>
                  <h1 className="text-primary font-medium md:text-[50px] lg:text-[64px] 2xl:text-[180px] ">
                    Step <span className="text-secondary">2</span>
                  </h1>
                </div>

                <div className="lg:h-[2px] md:h-[1px] md:w-[60px] w-[84px] 2xl:h-[7px] 2xl:w-[220px] bg-accent-blue lg:-mt-3"></div>
                <div className="para text-secondary md:text-lg lg:text-2xl 2xl:text-[60px]">
                  <ul className="customList">
                    <li className="text-[#fcf1b6] lg:mb-5 2xl:mb-14">
                      Tenant selects Pay with Circle enabling:
                    </li>
                  </ul>
                  <span>
                    <ul className="customList4">
                      <li className=" md:-mb-2 2xl:mb-8">
                        Zero Security deposit move-in
                      </li>
                      <li className=" md:-mb-2 2xl:mb-8">Reduced rent offer</li>
                      <li>3 months salary cover</li>
                    </ul>
                  </span>
                </div>
              </div>
              <div className="image flex items-start flex-grow">
                <Image
                  src="/images/d4.jpeg"
                  alt="section1 image"
                  width={400}
                  height={690}
                  className="rounded-bl-[66px] md:rounded-bl-[58px] md:rounded-br-[58px] md:w-[360px] md:h-[600px] lg:rounded-bl-[72px] lg:rounded-br-[72px] lg:h-[740px] lg:w-[450px] rounded-br-[66px] xl:w-[560px] xl:rounded-bl-[95px] xl:rounded-br-[95px] xl:h-[980px] 2xl:w-[1000px] 2xl:h-[1800px] 2xl:rounded-bl-[180px] 2xl:rounded-br-[180px]"
                />
              </div>
            </div>
          </div>
          <div className="slider basis-1/6 flex pl-8 items-center">
            {/* Slider Track */}
            <div className="relative 2xl:w-[4px] md:h-[150px] lg:h-[200px] 2xl:h-[450px] w-[2px] h-[283px] bg-primary rounded-full">
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
          <div className="absolute top-1/2 left-1/4 md:-translate-x-6 md:-translate-y-5 lg:translate-x-6 lg:-translate-y-10 xl:-translate-x-5 xl:-translate-y-12 2xl:-translate-y-20 2xl:translate-x-16 transform -translate-y-20 translate-x-16 z-10">
            <Image
              src="/images/d4.svg"
              width={350}
              height={350}
              alt="arrow"
              className="2xl:w-[700px] 2xl:h-[700px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px]"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Section4;
