import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useProducts } from "../context/ProductsContext";
const Header = () => {
  const {products, isLoading, error} = useProducts();

  if(isLoading) return <div>Loading...</div>;
  if(error) return <div>Error fetching products</div>;


  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 ">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Header;
