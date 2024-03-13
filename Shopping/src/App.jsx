
import React from "react";
import ProductLists from "./ProductLists";
import SearchFilter from "./SearchFilter";
import ProductDetail from "./ProductDetail"; // Import the new component
import ProductItem from "./ProductItem";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductLists />} />
        <Route path="/searchfilter" element={<SearchFilter />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        {/* Add this route */}
      </Routes>
    

    </Router>
    
  );
}

export default App;













// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

//   import React, { useEffect, useState } from "react";

  
//   function App() {
//     const [data, setData] = useState([]);
  
//     useEffect(() => {
//       fetch("https://dummyjson.com/products?limit=100")
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           setData(data.products || []);
//         })
//         .catch((err) => console.log(err));
//     }, []);
  
//     const handleViewMore = (index) => {
//       const updatedData = [...data];
//       updatedData[index].expanded = !updatedData[index].expanded;
//       setData(updatedData);
//     };
  
//     return (
//       <>
//         <h1>Products Details</h1>
//         <div className="product-container">
//           {data.map((product, index) => (
//             <div className="product" key={index}>
//               <p>
//                 <img src={product.images[0]} alt={`Product ${index}`} />
//               </p>
//               <p>Title: {product.title}</p>
//               <p>Price: {product.price}</p>
//               <p>Category: {product.category}</p>
//               {product.expanded ? (
//                 <>
//                   <p>Description: {product.description}</p>
//                   <p>Rating: {product.rating}</p>
//                   <p>Stock: {product.stock}</p>
//                   <p>Discount Percentage: {product.discountPercentage}</p>
//                 </>
//               ) : null}
//               <button onClick={() => handleViewMore(index)}>
//                 {product.expanded ? "View Less" : "View More"}
//               </button>
//             </div>
//           ))}
//         </div>
//       </>
//     );
//   } 

// export default App


// App.jsx
