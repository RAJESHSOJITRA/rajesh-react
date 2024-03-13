// ProductItem.js
import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <div className="product">
      <Link to={`/product/${product.id}`}>
        <img src={product.images[0]} alt={product.title} />
      </Link>
      <p>Title: {product.title}</p>
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
      {product.expanded && (
        <>
          <p>Description: {product.description}</p>
          <p>Rating: {product.rating}</p>
          <p>Stock: {product.stock}</p>
          <p>Discount Percentage: {product.discountPercentage}</p>
        </>
      )}
    </div>
  );
};

export default ProductItem;

// import React from "react";
// import { Link } from "react-router-dom";

// const ProductItem = ({ product }) => {
//   return (
//     <div className="product">
//       <Link to={`/product/${product.id}`}>
//         <img src={product.images[0]} />
//       </Link>
//       <p>Title: {product.title}</p>
//       <p>Price: {product.price}</p>
//       <p>Category: {product.category}</p>
//       {product.expanded && (
//         <>
//           <p>Description: {product.description}</p>
//           <p>Rating: {product.rating}</p>
//           <p>Stock: {product.stock}</p>
//           <p>Discount Percentage: {product.discountPercentage}</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default ProductItem;


