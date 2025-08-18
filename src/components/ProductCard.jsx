import { Link } from "react-router-dom"
const ProductCard = ({product}) => {
  return (
    <Link to={`/products/${product.id}`}>
    <div
          key={product.id}
          className="flex  items-center flex-col  p-2 rounded-lg  "
        >
          <img
            className="w-full h-[350px]  2xl:h-[10%] object-cover  object-center rounded-lg"
            src={product.images[0]}
            alt={product.name}
          />
          <h2 className="mt-4 text-center lpf text-xl">{product.name}</h2>
          <p className="text-center text-md mt-3"><span className="lpf">Price: ₾</span>{product.price}</p>
    </div>
    </Link>
      
  )
}

export default ProductCard