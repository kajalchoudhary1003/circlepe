import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { League_Spartan } from "next/font/google";
import Image from "next/image";

const league = League_Spartan({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

function Section1({currentSection}) {
  // Determine the slider height percentage based on the current section
  const sliderHeight = `${(currentSection / 5) * 100}%`; // Assume 5 sections (0-5 index)
  return (
    <AnimatePresence mode="wait" initial={false}>
    <motion.div
      className={`h-screen w-full bg-[radial-gradient(circle_at_top_left,_#202b39_5%,_#202b39_10%,_#161616_100%)]`}
      initial={{ opacity: 0, y:20 }}
      animate={{ opacity: 1, y:0 }}
      exit={{ opacity: 0, y:-20 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="main h-screen flex flex-row">
        <div className="section basis-5/6 flex justify-center items-center">
          <div className="partition flex flex-row space-x-32">
            <div
              className={`${league.className} details flex flex-col space-y-8 2xl:space-y-28 justify-center`}
            >
              <div>
                <h1 className="text-primary font-medium text-[64px] 2xl:text-[180px]">
                  How does
                </h1>
                <h1 className="text-primary font-medium text-[64px] 2xl:text-[180px] 2xl:-mt-28 -mt-10">
                  it <span className="text-secondary">Work</span>
                  <span className="text-accent-blue"> ?</span>
                </h1>
              </div>

              <div className="h-[2px] 2xl:h-[7px] 2xl:w-[220px] w-[84px] bg-accent-blue -mt-3"></div>
              <div className="para text-secondary text-2xl 2xl:text-[60px]">
                <p>We make it possible in a quick and easy </p>
                <p className="-mt-3 2xl:mt-8">few steps process, takes max 5 mins</p>
              </div>
            </div>
            <div className="image">
              <Image
                src="/images/d1.jpeg"
                alt="section1 image"
                width={320}
                height={500}
                className="rounded-[50px] 2xl:w-[720px] 2xl:h-[1480px] 2xl:rounded-[100px]"
              />
            </div>
          </div>
        </div>
        <div className="slider basis-1/6 flex pl-8 items-center">
           {/* Slider Track */}
           <div className="relative w-[2px] 2xl:w-[4px] 2xl:h-[450px] h-[283px] bg-primary rounded-full">
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
      </div>
    </motion.div>
    </AnimatePresence>
  );
}

export default Section1;
