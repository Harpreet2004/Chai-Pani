import React from "react";
import Card from "./Card";

function Menu() {
  return (
    <section className="bg-[url('./src/images/menu.jpeg')] h-[55rem] bg-cover bg-center shadow-bg-box max-sm:h-[95rem]">
      <h3 className="text-center text-4xl pt-10 font-heading text-light mb-12 tracking-widest">
        Our Menu
      </h3>
      <div
        className=" w-full grid place-items-center grid-cols-2 text-light gap-16 
      max-md:gap-y-28 max-sm:grid-cols-1 max-sm:gap-y-16"
      >
        <Card
          src={"/src/images/chai.jpeg"}
          name={"Cutting Chai"}
          quote={'"Sip into serenity with every soothing brew of tea."'}
          price={"₹49/-"}
          title={"Most Loved 😍"}
        />

        <Card
          src={"/src/images/samosa.jpg"}
          name={"Samosa"}
          quote={'"Crunch into flavor packed joy with every samosa bite!"'}
          price={"₹29/-"}
          title={"Savoury 😋"}
        />

        <Card
          src={"/src/images/sandwich.png"}
          name={"Grilled Sandwich"}
          quote={
            '"Grill into greatness with every bite of our savory sandwiches."'
          }
          price={"₹59/-"}
          title={"Recommended 💖"}
        />

        <Card
          src={"/src/images/best-seller.jpg"}
          name={"Chai Pani Combo"}
          quote={'"Chai and Samosa: Elevating comfort to a sizzling delight!"'}
          price={"₹99/-"}
          title={"Top Rated⚡"}
        />
      </div>
    </section>
  );
}

export default Menu;
