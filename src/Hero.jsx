import React from "react";
import hotSale from "./img/hotSale.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="relative  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${hotSale})`, backgroundSize: "cover" }}>
        <div className="absolute inset-0 bg-white/70   from-white/55 to-white/1 bg-gradient-to-r rtl:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex   lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl ">
              Find the Best
              <strong className="block font-extrabold text-rose-700">Clothes for you!</strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>

            <div className="mt-8 text-center">
              <Link to="/shop" className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                Shop
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
