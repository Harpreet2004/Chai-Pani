import React from "react";

function Hero() {
  return (
    <main className="bg-secondary h-[36rem] max-lg-tablet:h-[30rem] max-md:bg-[url('/src/assets/hero-img.png')] max-md:bg-center max-md:bg-cover max-md:shadow-bg-box max-[414px]:h-[32rem]">
      <div className=" flex justify-center items-center gap-56 pt-12 max-lg-desktop:gap-16   max-sm-laptop:pt-20 max-lg-tablet:gap-0">
        <div className="flex flex-col justify-start items-start gap-3 max-sm-laptop:gap-6 max-sm:flex max-sm:justify-center max-sm:items-center">
          <h1 className="font-heading text-7xl text-white leading-relaxed max-xl:text-6xl max-xl:leading-relaxed max-sm-laptop:text-[3.4rem] max-sm-laptop:leading-relaxed max-lg-tablet:text-[3rem] max-lg-tablet:leading-relaxed max-md:text-5xl max-md:leading-loose max-sm:text-5xl max-sm:leading-relaxed max-[376px]:flex max-[376px]:justify-center max-[376px]:items-center max-[376px]:flex-col max-sm:text-center">
            Embrace the <br /> <span className="  text-heading">Aroma,</span>
            Taste the <br /> <span className="">Tradition</span>
          </h1>

          <button className="text-xl text-para font-para bg-primary p-4 rounded-md hover:text-light hover:bg-orangelight hover:ease-in-out duration-300 max-sm-laptop:text-lg  max-lg-tablet:text-base max-lg-tablet:p-3 max-md:text-xs max-md:p-3 max-sm:text-base max-[376px]:flex max-[376px]:justify-center max-[376px]:items-center ">
            Make Reservation
          </button>
        </div>

        <div className="flex ">
          <img
            className=" max-xl:h-[25rem] max-sm-laptop:h-[20.2rem] max-lg-tablet:h-[20rem] max-lg-tablet:ml-5 max-md:w-[13rem] max-md:h-[13rem] max-md:hidden max-sm:hidden"
            src="/assets/hero-img-BKzczMrL.png"
            alt="hero-img"
          />
        </div>
      </div>
    </main>
  );
}

export default Hero;
