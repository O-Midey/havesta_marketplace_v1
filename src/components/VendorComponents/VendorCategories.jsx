import { useState } from "react";
import { vendorProductData } from "../../data/data";
import StoreProductCard from "./StoreProductCard";

const VendorCategories = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [cart, setCart] = useState([]);

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    console.log("Added to cart:", product.name);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const CategorySection = ({ title, products }) => (
    <div className="mb-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-20">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <StoreProductCard
            key={product.id}
            product={product}
            isFavorite={favorites.has(product.id)}
            onToggleFavorite={toggleFavorite}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {Object.entries(vendorProductData).map(([category, products]) => (
        <CategorySection key={category} title={category} products={products} />
      ))}

      {/* Cart Indicator */}
      {getTotalItems() > 0 && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-lg shadow-lg">
          <p className="text-sm">Cart: {getTotalItems()} items</p>
        </div>
      )}
    </div>
  );
};

export default VendorCategories;
