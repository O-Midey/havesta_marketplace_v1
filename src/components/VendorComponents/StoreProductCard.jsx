import { Heart, Bell, Star } from "lucide-react";
import { BiCart } from "react-icons/bi";

const StoreProductCard = ({
  product,
  isFavorite,
  onToggleFavorite,
  onAddToCart,
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-200 relative">
      {/* Out of Stock Badge */}
      {product.outOfStock && (
        <>
          <div className="absolute top-0 left-0 bg-[#FF0606] text-white px-2 py-1 text-xs rounded-tl-sm rounded-br-sm flex items-center gap-1 z-20 group">
            <Bell size={10} />
            Out Of Stock
          </div>
        </>
      )}

      {/* Heart Icon */}
      {product.outOfStock ? null : (
        <button
          onClick={() => onToggleFavorite(product.id)}
          className="absolute top-3 right-3 z-20"
        >
          <Heart
            size={18}
            className={`transition-colors ${
              isFavorite
                ? "text-[#005231] fill-[#005231]"
                : "text-[#005231] hover:text-[#005231]"
            }`}
          />
        </button>
      )}
      {/* Product Image with Overlay */}
      <div className="relative mb-3">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-32 object-contain rounded-md ${
            product.outOfStock ? "opacity-80" : ""
          }`}
        />

        {product.outOfStock && (
          <div className="absolute inset-0 bg-black/60 rounded-t-md z-10 flex items-center justify-center text-white text-xs font-medium">
            <div className="flex flex-col items-center gap-2">
              <Bell
                size={40}
                fill="#ffffff"
                className=" border-2 rounded-full p-2"
              />

              <p>NOTIFY ME</p>
            </div>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="text-left p-2">
        <p className="text-xs text-gray-500 mb-1">{product.category}</p>
        <h3 className="font-medium text-gray-800 text-sm my-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center justify-start mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={
                  i < Math.floor(product.rating)
                    ? "fill-current"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">
            ({product.reviews})
          </span>
        </div>

        {/* Brand */}
        <p className="text-xs text-gray-600 mb-3">
          by <span className=" text-[#005231]">{product.brand}</span>
        </p>

        {/* Price + Add Button */}
        <div className="flex items-center justify-start gap-2 mb-3">
          <span className="font-bold text-lg text-[#005231]">
            ₦{product.price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ₦{product.originalPrice.toFixed(2)}
          </span>
          {!product.outOfStock && (
            <button
              onClick={() => onAddToCart(product)}
              className="w-full p-2 rounded-sm text-sm font-medium transition-colors bg-[#005231] text-white hover:bg-green-700"
            >
              <div className="flex items-center justify-center gap-2">
                <BiCart size={18} />
                Add
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreProductCard;
