import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Example from "../components/Example";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading, error } = useFetch(`http://localhost:5000/products/${id}`);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching product details</div>;

  return (
    <div className="flex w-[80%] mx-auto h-[80vh] gap-8">
      {/* LEFT SIDE: Slider */}
      <div className="flex-1 flex items-center justify-center">
        <Example product={product} />
      </div>

      {/* RIGHT SIDE: Product info */}
      <div className="flex-1 p-6 flex flex-col justify-center items-end">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-xl text-gray-700 mb-2">₾{product.price}</p>
        <p className="text-gray-600 mb-6">{product.description}</p>

        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
            Add to Cart
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
