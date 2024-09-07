import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { League_Spartan } from "next/font/google";
import Image from "next/image";

const league = League_Spartan({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

function Section5({currentSection}) {
  // Determine the slider height percentage based on the current section
  const sliderHeight = `${(currentSection / 5) * 100}%`; // Assume 5 sections (0-5 index)
  return (
    <AnimatePresence mode="wait" initial={false}>
    <motion.div
    
    className={`h-screen w-full  bg-[radial-gradient(circle_at_top_left,_#202b39_5%,_#202b39_10%,_#161616_100%)]`}
    initial={{ opacity: 0, y:20 }}
    animate={{ opacity: 1, y:0 }}
    exit={{ opacity: 0, y:-20 }}
    transition={{ duration: 1, ease: "easeInOut" }}
  >
     <div className="main relative h-screen flex flex-row">
        <div className="section basis-5/6 flex justify-center items-center">
          <div className="partition flex flex-row space-x-16">
            <div
              className={`${league.className} details flex flex-col space-y-8 justify-center`}
            >
              <div>
              <h1 className="text-primary font-medium text-[64px] ">
                  Step <span className="text-secondary">3</span>
                </h1>
              </div>

              <div className="h-[2px] w-[84px] bg-accent-blue -mt-3"></div>
              <div className="para text-secondary text-2xl">
              <ul className="customList">
                  <li className="text-[#fcf1b6] mb-5" >
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
                className="rounded-[50px]"
              />
            </div>
          </div>
        </div>
        <div className="slider basis-1/6 flex pl-8 items-center">
           {/* Slider Track */}
           <div className="relative w-[2px] h-[283px] bg-primary rounded-full">
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
         <div className="absolute top-1/2 left-1/4 transform -translate-y-2 translate-x-16 z-10">
          <Image
            src="/images/d4.svg"
            width={350}
            height={350}
            alt="arrow"
            className=""
          />
        </div>
      </div>
  </motion.div>
  </AnimatePresence>
  )
}

export default Section5