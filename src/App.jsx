import Footer from "./Footer";
import Router from "./Router";
import { createContext, useState, useEffect } from "react";
import useProductURL from "./useProductURL";

export const ShopContext = createContext({
  productURL: [],
  category: "",
  cartItems: [],
  addToCart: () => {},
});

export default function App() {
  const [productURL, setProductURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`, { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        console.log("fetch ran");
        return response.json();
      })
      .then((response) => setProductURL(response))
      .then((response) => localStorage.setItem("productURL", JSON.stringify(response)))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const [cartItems, setCartItems] = useState([]);
  const [cat, setCat] = useState("");

  const addToCart = (id) => {
    const foundProductIndex = cartItems.findIndex((item) => item.productId == id);
    if (foundProductIndex == -1) {
      const newProduct = {
        productId: id,
        quantity: 1,
      };
      setCartItems([...cartItems, newProduct]);
    } else {
      let newCart = cartItems;
      newCart[foundProductIndex].quantity += 1;
      setCartItems([...newCart]);
    }
  };

  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <ShopContext.Provider value={{ cartItems, setCartItems, cat, setCat, productURL, error, loading, addToCart }}>
        <Router />
      </ShopContext.Provider>

      <Footer />
    </div>
  );
}
