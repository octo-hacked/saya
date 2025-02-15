import React from "react";
import Image from "next/image";
import { products } from "@/constants/productsArray";

const ProductPage = async ({ params }) => {
  // Ensure params is awaited and decoded
  const productName = decodeURIComponent(params.productName);
  console.log(productName)

  // Find the product in the products array
  const product = products.find((p) => p.ProductName === productName);
  console.log(product)

  // If the product is not found, return a 404 message
  if (!product) {
    return <h1 className="text-center text-2xl text-red-500">Product Not Found</h1>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center">{product.ProductName}</h1>
      <div className="flex space-x-6 mt-6">
        <div className="w-1/3">
          <Image
            src={product.ProductImage}
            alt={product.ProductName}
            width={300}
            height={300}
            className="object-contain"
          />
          <p className="text-center mt-2">{product.ProductName}</p>
        </div>
        <div className="w-2/3 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-medium mb-4">{product.name}</h2>
          <ul className="text-lg list-disc">
            {Object.entries(product.ProductProp).map(([key, value]) => (
              <li key={key} className="text-gray-700">
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;