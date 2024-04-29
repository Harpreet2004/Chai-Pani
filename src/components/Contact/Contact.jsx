import React from "react";

function Contact() {
  return (
    <section className="h-[36rem] bg-light max-lg:h-[62rem] max-[321px]:h-[66rem]">
      <div className=" pt-16 max-sm-laptop:px-10">
        <h1 className="text-center text-4xl mb-10 text-para font-heading max-lg:mb-4 tracking-widest">
          Contact Us
        </h1>
        <div className="flex flex-row justify-center items-center my-20 gap-40 max-[1211px]:gap-20 max-sm-laptop:gap-14 max-lg:flex-col">
          {/* LEFT ADDRESS CONTAINER */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-10 justify-center items-center  max-lg:gap-40 max-[440px]:gap-14">
              <img src="/src/assets/home.png" alt="home-img" className=" h-5" />
              <div className="flex flex-col gap-2">
                <h5 className="font-heading">Gurugram, Delhi-NCR</h5>
                <p className="font-para">Golf course road </p>
              </div>
            </div>

            <div className="flex gap-9 justify-center items-center  max-lg:gap-40 max-[440px]:gap-14">
              <img
                src="/src/assets/phone.png"
                alt="home-img"
                className=" h-5"
              />
              <div className="flex flex-col gap-2">
                <h5 className="font-heading text-para">+91 223-233-2444</h5>
                <p className="font-para">Mon to Fri 9am to 6 pm</p>
              </div>
            </div>

            <div className="flex gap-10   justify-center items-center  max-lg:gap-40 max-[440px]:gap-14">
              <img src="/src/assets/mail.png" alt="home-img" className=" h-5" />
              <div className="flex flex-col gap-2">
                <h5 className="font-heading">chaipani@gmail.com</h5>
                <p className="font-para">Send us your queries!</p>
              </div>
            </div>
          </div>

          {/* INPUT CONTAINER */}
          <div className="flex flex-col gap-12 justify-center items-center">
            <input
              type="text"
              className="h-6 border-para border rounded-md p-4 w-96 max-[400px]:w-72"
              placeholder="Enter your name"
              name="name"
            />
            <input
              type="text"
              className="h-6 border-para border rounded-md p-4 w-96 max-[400px]:w-72"
              placeholder="Enter email address"
              name="mail-address"
            />
            <input
              type="text"
              className="h-6 border-para border rounded-md p-4  w-96 max-[400px]:w-72"
              placeholder="Enter subject"
              name="subject"
            />
          </div>

          {/* BTN AND MESSAGE CONTAINER */}
          <div className="flex flex-col gap-6 max-sm:pb-6   ">
            <textarea
              placeholder="Enter your message"
              className=" h-36 border-para border rounded-md p-4 min-w-64 mb-4 max-h-40 "
            />
            <button className="text-xl font-para text-para hover:text-orangelight">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
