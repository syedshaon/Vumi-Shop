import Header from "./Header";
import Loading from "./Loading";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "./App";
import { useState, useEffect } from "react";

function Checkout() {
  const { productURL, error, loading, setCartItems, addToCart, cartItems } = useContext(ShopContext);

  if (error) return <p className="text-center text-lg"> A network error was encountered. </p>;
  if (loading) return <Loading />;
  // console.log(productURL);

  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartTotal(cartItems.reduce((accumulator, currentValue) => accumulator + productURL[currentValue.productId - 1].price * currentValue.quantity, 0));
  }, [cartItems]);

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((items) => items.productId != id));
  };
  const decQntyFromCart = (id) => {
    const foundProductIndex = cartItems.findIndex((item) => item.productId == id);
    let newCart = cartItems;
    if (newCart[foundProductIndex].quantity > 1) {
      newCart[foundProductIndex].quantity -= 1;
      setCartItems([...newCart]);
    } else {
      setCartItems((prev) => prev.filter((items) => items.productId != id));
    }
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{cartItems.length} Items</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
            </div>

            {cartItems.map((p) => {
              return (
                <div key={p.productId} className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                  <div className="flex w-2/5">
                    <div className="w-20">
                      <img className="h-24" src={productURL[p.productId - 1].image} alt={productURL[p.productId - 1].title.substring(0, 20)} />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">{productURL[p.productId - 1].title.substring(0, 20)}</span>
                      <span className="text-red-500 text-xs">{productURL[p.productId - 1].description.substring(0, 50)}</span>
                      <a
                        onClick={(e) => {
                          removeFromCart(p.productId);
                        }}
                        href="#"
                        className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                      >
                        Remove
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    <svg
                      onClick={(e) => {
                        decQntyFromCart(p.productId);
                      }}
                      className="fill-current cursor-pointer text-gray-600 w-3"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                    <span className="mx-2 border text-center w-8" type="text">
                      {p.quantity}
                    </span>
                    <svg
                      onClick={(e) => {
                        addToCart(p.productId);
                      }}
                      className="fill-current cursor-pointer text-gray-600 w-3"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm">${productURL[p.productId - 1].price}</span>
                  <span className="text-center w-1/5 font-semibold text-sm">${(productURL[p.productId - 1].price * p.quantity).toFixed(2)}</span>
                </div>
              );
            })}

            <Link to="/shop" className="flex font-semibold text-indigo-600 text-sm mt-10">
              <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>
          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Items {cartItems.length}</span>
              <span className="font-semibold text-sm">{cartTotal.toFixed(2)}$</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="py-10">
              <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">
                Promo Code
              </label>
              <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${cartTotal > 0 ? (cartTotal + 10).toFixed(2) : 0}</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
