import useFetch from "../hooks/useFetch";
import {createContext, useContext } from "react";
const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const {data: products, isLoading, error} = useFetch("http://localhost:5000/products");

  return (
    <ProductsContext.Provider value={{ products, isLoading, error }}>
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
}

export { ProductsProvider, useProducts };