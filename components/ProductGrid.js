import React from "react";
import { products } from "@/constants/productsArray";


const ProductGrid = ({ category }) => {
  const filteredProducts = products.filter(
    (product) => product.ProductCategory === category
  );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <a href={`/Materials/${product.ProductName}`}>
            <img
              src={product.ProductImage}
              alt={product.ProductName}
              className="w-full h-40 object-contain mb-2"
            />
            </a>
            <h3 className="text-lg font-semibold"><a href={`/Materials/${product.ProductName}`}>{product.ProductName}</a></h3>
            <ul className="text-sm text-gray-600 mt-2">
              {product.ProductProp.map((prop, i) => (
                <li key={i}>• {prop}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
