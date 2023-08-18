import { useState, useEffect } from "react";
import Loading from "./Loading";
import StarRating from "./StarRating";
import { useContext } from "react";
import { ShopContext } from "./App";

function Store() {
  const { productURL, cartItems, addToCart, error, loading, cat, setCat } = useContext(ShopContext);

  if (error) return <p className="text-center text-lg"> A network error was encountered. </p>;
  if (loading) return <Loading />;

  let filteredProduct;

  // XXXXXXXXXXXXXX Following should not work when category changes but it is working. XXXXXXXXX
  if (cat.length > 0) {
    filteredProduct = productURL.filter((p) => p.category == cat);
  } else {
    filteredProduct = productURL;
  }

  // console.log(cartItems);

  return (
    <>
      <section className="bg-white mt-20 dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          {/* Print Error and Loading while required. */}

          <div className="lg:flex lg:-mx-2">
            <div className="mt-0 lg:mt-10 text-center lg:text-left space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
              <h3 className="text-rose-600 font-bold">Filter Products</h3>
              <a onClick={(e) => setCat("")} href="#" className={cat == "" ? "block font-medium text-blue-600 dark:text-blue-500 hover:underline" : "block font-medium text-gray-500 dark:text-gray-300 hover:underline"}>
                All
              </a>
              <a onClick={(e) => setCat("men's clothing")} href="#" className={cat == "men's clothing" ? "block font-medium text-blue-600 dark:text-blue-500 hover:underline" : "block font-medium text-gray-500 dark:text-gray-300 hover:underline"}>
                Man's Clothing
              </a>
              <a onClick={(e) => setCat("women's clothing")} href="#" className={cat == "women's clothing" ? "block font-medium text-blue-600 dark:text-blue-500 hover:underline" : "block font-medium text-gray-500 dark:text-gray-300 hover:underline"}>
                Woman's Clothing
              </a>
              <a onClick={(e) => setCat("jewelery")} href="#" className={cat == "jewelery" ? "block font-medium text-blue-600 dark:text-blue-500 hover:underline" : "block font-medium text-gray-500 dark:text-gray-300 hover:underline"}>
                Jewellery
              </a>
              <a onClick={(e) => setCat("electronics")} href="#" className={cat == "electronics" ? "block font-medium text-blue-600 dark:text-blue-500 hover:underline" : "block font-medium text-gray-500 dark:text-gray-300 hover:underline"}>
                Electronics
              </a>
            </div>
            <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
              <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
                <p className="text-gray-500 dark:text-gray-300">{filteredProduct.length} Items</p>
                <div className="flex items-center">
                  <p className="text-gray-500 dark:text-gray-300">Sort</p>
                  <select className="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                    <option className="cursor-pointer" value="#">
                      Recommended
                    </option>
                    <option className="cursor-pointer" value="#">
                      Price
                    </option>
                    <option className="cursor-pointer" value="#">
                      Rating
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap items-stretch">
                {filteredProduct.map((p) => {
                  return (
                    <div key={p.id} className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                      <a href="#" className="overflow-hidden">
                        <img className="h-80 hover:grow hover:shadow-lg" src={p.image} />
                        <div className="pt-3 flex flex-col items-center justify-between">
                          <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">{p.title.substring(0, 20)}</h4>
                          <div className="flex px-5 items-center my-5">
                            <StarRating rate={p.rating.rate} />
                            <span className="ml-3 font-bold">{p.rating.count}</span>
                          </div>
                          <p className="text-blue-500">${p.price}</p>
                          <button onClick={(e) => addToCart(p.id)} className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                            <span className="mx-1">Add to cart</span>
                          </button>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Store;
