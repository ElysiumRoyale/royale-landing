import React from "react";
import Image from "next/image";
import { Fade } from "react-reveal";

function Hero() {
  return (
    <div id="Hero" className="w-full h-screen">
      {/* Container */}
      <Fade cascade bottom>
        <div
          className={`max-w-[1380px] w-full h-full m-auto flex justify-center items-start flex-col p-4`}
        >
          {/* Image */}
          <div className="relative w-[219.21px] h-[139.68px]">
            <Image src={"/SVG/logo.svg"} layout="fill" objectFit="contain" />
          </div>

          {/* Heading */}
          <h1 className="font-Ubuntu font-bold text-white md:text-[65px] sm:text-[50px] text-[44px] md:leading-[70px] sm:leading-[58px] leading-[46px] mt-24 mb-12">
            <br /> Decentralized Casino
          </h1>
          <p className="text-[22px] text-white leading-[30px] tracking-[50%] font-Ubuntu font-medium">
            Play, Trade and Earn on Elysium Royale
          </p>
          <a target="_blank" href="https://app.elysiumroyale.finance/">
            <button className="w-[250px] h-[65px] bg-gradient-to-r from-pink to-blue hover:animate-bounce text-white text-[16px] leading-[18px] rounded mt-24">
              Launch App
            </button>
          </a>
        </div>
      </Fade>
    </div>
  );
}

export default Hero;
