import React, { useState } from "react";

function Navbar() {

  const [isClicked,setisClicked] = useState(false);

  return (
    <nav className=" h-32 ">
      <div className=" drop-shadow-xl ">
        <div className="w-full h-32 flex justify-center items-center gap-96 text-para font-para max-lg-desktop:gap-72 max-xl:gap-52 max-sm-laptop:gap-32 max-lg-tablet:gap-24 bg-primary max-md:gap-64 max-[490px]:gap-28  ">
          <img
            className="flex justify-center items-center h-32 max-lg-tablet:h-24"
          src="/assets/logo.png"
            alt="logo-img"
          />
          <ul className="flex gap-10 justify-center items-center text-xl max-lg-tablet:text-lg max-md:hidden">
            <li className=" cursor-pointer hover:text-orangelight ease-in-out delay-75 hover:scale-110 duration-200" >
              Home
            </li>
            <li className="cursor-pointer hover:text-orangelight ease-in-out delay-75 hover:scale-110 duration-200">
              About
            </li>
            <li className="cursor-pointer hover:text-orangelight ease-in-out delay-75 hover:scale-110 duration-200">
              Menu
            </li>
            <li className="cursor-pointer hover:text-orangelight ease-in-out delay-75 hover:scale-110 duration-200">
              Contact
            </li>
          </ul>
          <button className="hover:bg-secondary hover:text-light hover:border-none hover:ease-in-out duration-300 text-center  p-3.5 text-xl bg-transparent border rounded-md border-orange-500 max-lg-tablet:p-2.5 max-lg-tablet:text-lg max-md:hidden">
            Order Now
          </button>

          <div className="md:hidden">
            <img 
              onClick={() => setisClicked(prevstate => !prevstate)}
              src="/assets/hamburger.png"
              alt="hamburger-icon"
              className="h-10 flex gap-2 max-md:visible"
            />

            {( isClicked ? <div  className="flex justify-center items-center flex-col bg-para p-2 mt-1 rounded-md shadow-lg absolute px-4 max-[490px]:px-2">
              <a href="#" className="block font-para text-sm text-light hover:text-light py-2">Home</a>
              <a href="#" className="block font-para text-sm text-light hover:text-light py-2">About</a>
              <a href="#" className="block font-para text-sm text-light hover:text-light py-2">Menu</a>
              <a href="#" className="block font-para text-sm text-light hover:text-light py-2">Contact</a>
            </div> : null)}
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
