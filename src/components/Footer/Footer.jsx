import React from "react";

function Footer() {
  return (
    <section className="h-[40rem] bg-secondary text-white max-md:min-h-[53rem]">
      <div className="px-20 py-32 grid grid-cols-2 max-lg-tablet:px-4 max-md:grid-cols-1 max-md:py-24 max-sm:py-16">
        <div className="flex flex-col gap-5 max-md:justify-center max-md:items-center max-md:mb-16">
          <h2 className="text-heading font-heading text-3xl max-md:mb-4">Opening Hours</h2>
          <div className="flex gap-20">
            <span className="text-heading font-para">Monday-<br />Friday</span>
            <span className="flex text-justify">08.00 a.m - 10.00 p.m</span>
          </div>

          <div className="flex gap-20">
            <span className="text-heading font-para">Saturday</span>
            <span className="flex text-justify">08.00 a.m - 11.00 p.m</span>
          </div>

          <div className="flex gap-[5.8rem]">
            <span className="text-heading font-para">Sunday</span>
            <span className="flex text-justify">08.00 a.m - 12.00 p.m</span>
          </div>
        </div>

        <div className="flex flex-col gap-5 max-md:justify-center max-md:items-center max-md:gap-6">
          <h2 className="text-heading font-heading text-3xl">Newsletter</h2>
          <p className="font-para text-light leading-snug text-xl max-md:mt-1 max-sm:text-center">
            Sign up today and get <span className="text-2xl text-heading">10%</span> off for
            your first order
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 text-black rounded-md max-md:w-96 max-[397px]:w-72 "
          />
          <button className="w-[10rem] rounded-md text-para font-heading bg-light p-4 max-md:p-3 max-md:w-[8rem] max-md:text-sm hover:text-secondary hover:bg-primary">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col ">
        <div className="flex gap-16 border-b pb-4">
          <img
            alt="social-img"
            src="/assets/social/facebook.png"
            className="h-8 max-md:h-6 invert hover:invert-0 cursor-pointer"
          />
          <img
            alt="social-img"
            src="/assets/social/instagram.png"
            className="h-8 max-md:h-6 invert hover:invert-0 cursor-pointer"
          />
          <img
            alt="social-img"
            src="/assets/social/twitter.png"
            className="h-8 max-md:h-6 invert hover:invert-0 cursor-pointer"
          />
        </div>
        <h3 className="mt-4 text-xs font-para">&#169; Chai Pani , ALL RIGHTS RESERVED</h3>
      </div>
    </section>
  );
}

export default Footer;
