import React from "react";
import ProductPreview from "./product-preview";

const ProductGrid = ({ products }) => {
  return (
    <ul className="productGrid">
      {products &&
        products.map((product, idx) => (
          <li key={idx} className="productGrid__item">
            <ProductPreview product={product} />
          </li>
        ))}
    </ul>
  );
};

export default ProductGrid
