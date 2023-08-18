import { useState, useEffect } from "react";

// Fetch Custom Hook

export default function useProductURL(url) {
  const [productURL, setProductURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${url}`, { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setProductURL(response))
      .then((response) => localStorage.setItem("productURL", JSON.stringify(response)))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  console.log("fetch ran");

  return { productURL, error, loading };
}
