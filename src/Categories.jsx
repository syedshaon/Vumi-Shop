import React from "react";
import { Link } from "react-router-dom";

import man from "./img/man.png";
import woman from "./img/woman.png";
import jewellery from "./img/jewellery.png";
import electronics from "./img/electronics.png";

import { useContext } from "react";
import { ShopContext } from "./App";

function Categories() {
  const { setCat } = useContext(ShopContext);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/4">
            <div className="  h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-16 rounded-lg overflow-hidden text-center relative">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Electronics</h1>
              <p className="leading-relaxed mb-3">Lpsum, dolor sit amet consectetur adipisicing elit. Magni dolor maiores aperiam perspiciatis.</p>
              <img src={electronics} className="w-1/2 mx-auto" alt="electronics" />
              <Link to="/shop" onClick={(e) => setCat("electronics")} className="text-indigo-500 cursor-pointer pt-5 inline-flex items-center">
                Check it Out
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="p-4 lg:w-1/4">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-16 rounded-lg overflow-hidden text-center relative">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Women's clothing</h1>
              <p className="leading-relaxed mb-3">Lpsum, dolor sit amet consectetur adipisicing elit. Magni dolor maiores aperiam perspiciatis.</p>
              <img src={woman} className="w-1/2 mx-auto" alt="woman cloth" />
              <Link to="/shop" onClick={(e) => setCat("women's clothing")} className="text-indigo-500 cursor-pointer pt-5 inline-flex items-center">
                Check it Out
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="p-4 lg:w-1/4">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-16 rounded-lg overflow-hidden text-center relative">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Men's clothing</h1>
              <p className="leading-relaxed mb-3">Lpsum, dolor sit amet consectetur adipisicing elit. Magni dolor maiores aperiam perspiciatis.</p>
              <img src={man} className="w-1/2 mx-auto" alt="man cloth" />
              <Link to="/shop" onClick={(e) => setCat("men's clothing")} className="text-indigo-500 cursor-pointer pt-5 inline-flex items-center">
                Check it Out
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="p-4 lg:w-1/4">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-16 rounded-lg overflow-hidden text-center relative">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Jewelery</h1>
              <p className="leading-relaxed mb-3">Lpsum, dolor sit amet consectetur adipisicing elit. Magni dolor maiores aperiam perspiciatis.</p>
              <img src={jewellery} className="w-1/2 mx-auto" alt="woman cloth" />

              <Link to="/shop" onClick={(e) => setCat("jewelery")} className="text-indigo-500 cursor-pointer pt-5 inline-flex items-center">
                Check it Out
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
