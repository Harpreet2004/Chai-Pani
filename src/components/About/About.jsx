import React from "react";

function About() {
  return (
    <section className="bg-light h-[36rem] pb-[46rem] max-md:pb-[43rem] max-[1020px]:pb-[53rem]">
      <div className="flex justify-center items-center gap-36 pt-10 px-56 max-lg-desktop:px-20 max-sm-laptop:gap-14 max-lg-tablet:gap-20 max-md:gap-14 max-md:px-28 max-sm:relative max-sm:px-20 max-[1020px]:pt-20  ">
        <div className="min-h-[30rem]  min-w-[22.8rem] drop-shadow-md border-2 border-y-orange-300  max-sm:hidden max-md:hidden max-[1110px]:min-h-[26rem] max-[1110px]:min-w-[18rem]">
          <img
            src="\src\assets\about-img.png"
            alt="about-img"
            className="min-h-[25rem] object-cover hover:rotate-3 hover:ease-in-out duration-300 max-sm:hidden "
          />
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="font-para text-para text-2xl max-sm:text-black max-sm:text-center mb-5 tracking-widest">About Us</h3>

          <div className="min-w-[20rem]">
            <h2 className="text-5xl font-heading leading-normal max-[958px]:text-[2.6rem] max-lg-tablet:text-4xl max-lg-tablet:leading-relaxed max-md:text-3xl max-md:leading-relaxed max-sm:text-black max-sm:text-center">
            Welcome to  <span className="text-orangelight"> Chai Pani</span>, where every cup tells a tale of tradition,
              flavor, and community
            </h2>
          </div>
          <p className="font-para text-para leading-loose max-lg-tablet:text-sm max-lg-tablet:leading-loose max-sm:text-black max-sm:text-center max-sm:px-2 max-sm:mt-4">
            We're passionate about more than just tea, we're dedicated to
            preserving the rich heritage of chai culture. Our journey began with
            a simple mission: to share the warmth and hospitality of Indian chai
            with the world.
          </p>

          <div className="flex justify-start items-start pb-36 max-sm:flex max-sm:justify-center max-sm:items-center max-sm:mt-10 max-sm:pb-10">
            <button className="p-4 bg-secondary text-light font-para rounded-md  hover:text-heading  max-lg-tablet:p-3 max-lg-tablet:text-base max-md:text-xs max-md:p-3 max-sm:text-sm max-sm:p-2 ">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
