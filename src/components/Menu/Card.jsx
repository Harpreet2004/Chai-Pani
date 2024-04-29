import React from "react";

function Card({ src, title, name, quote, price }) {
  return (
    <div className="relative border border-light flex justify-center items-center flex-col rounded-md shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
      <img
        className="card-img h-56 bg-center bg-cover w-full max-md:h-44 max-sm:h-52"
        src={`${src}`}
        alt="menu1-img"
      />
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 hover:bg-opacity-70 ease-in-out duration-300 opacity-0 hover:opacity-100">
        <h2 className="text-light text-xl font-para absolute top-1 left-2">
          {title}
        </h2>
        <span className="text-light font-heading text-xl absolute bottom-1 right-2 tracking-wide">
          {price}
        </span>
        <p className="font-para text-2xl px-8 text-heading">{quote}</p>
      </div>
      <h2 className="card-title font-para py-4 text-3xl text-light max-md:px-2">
        {name}
      </h2>
    </div>
  );
}

export default Card;
