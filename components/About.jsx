import React from "react";
import { Fade } from "react-reveal";


function About() {
  return (
    <div id="About" className="w-full h-screen">
        <Fade cascade bottom >
      <div
        className={`max-w-[1380px] w-full h-full m-auto flex justify-center items-start flex-col px-4`}
      >
        <div className="flex justify-center items-start flex-col md:max-w-[500px]">
          <h3 className="text-[20px] text-pink leading-[40px] tracking-[50%] font-Oswald font-medium">
            About us
          </h3>
          <h1 className="font-Ubuntu font-bold text-white md:text-[65px] sm:text-[50px] text-[44px] md:leading-[70px] sm:leading-[58px] leading-[46px] my-10">
            Casino on Dex
          </h1>

          <p className="text-[22px] text-white leading-[30px] tracking-[50%] font-Ubuntu font-medium">
            Trade and Earn Royal tokens, and use them as chips in the Casino
          </p>
        </div>
      </div>
        </Fade>
    </div>
  );
}

export default About;
