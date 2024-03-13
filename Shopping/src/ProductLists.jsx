//  // Scrollevent listener for auto load Auto Load page 
//  import React, { useEffect, useState, useRef, useCallback } from "react";
//  import ProductItem from "./ProductItem";
//  import "./ProductList.css";
//  import SearchFilter from "./SearchFilter";
//  import { Link } from "react-router-dom";
 
//  const ProductLists = () => {
//    const [data, setData] = useState([]);
//    const [loading, setLoading] = useState(false);
//    const [hasMore, setHasMore] = useState(true);
//    const [page, setPage] = useState(1);
//    const observer = useRef();
 
//    const lastProductRef = useCallback(
//      (node) => {
//        if (loading || !hasMore) return;
 
//        if (observer.current) observer.current.disconnect();
 
//        observer.current = new IntersectionObserver(
//          (entries) => {
//            if (entries[0].isIntersecting) {
//              // Fetch more products when the last product is in view
//              setPage((prevPage) => prevPage + 1);
//            }
//          },
//          { threshold: 1 }
//        );
 
//        if (node) observer.current.observe(node);
//      },
//      [loading, hasMore]
//    );
 
//    useEffect(() => {
//      // Initial load of products
//      fetchProducts();
//    }, []);
 
//    useEffect(() => {
//      if (page > 1) {
//        fetchProducts();
//      }
//    }, [page]);
 
//    const fetchProducts = () => {
//      // Adjust the URL based on your API requirements
//      const url = `https://dummyjson.com/products?limit=30&skip=${(page - 1) * 30}`;
 
//      setLoading(true);
 
//      fetch(url)
//        .then((res) => res.json())
//        .then((responseData) => {
//          if (responseData.products && responseData.products.length > 0) {
//            setData((prevData) => [...prevData, ...responseData.products]);
//          } else {
//            setHasMore(false);
//          }
//        })
//        .catch((err) => console.error(err))
//        .finally(() => setLoading(false));
//    };
 
//    return (
//      <div className="product-container">
//        <SearchFilter />
//        {data.map((product, index) => (
//          <ProductItem key={index} product={product} />
//        ))}
//        <div ref={lastProductRef} />
//        {loading && <p>Loading...</p>}   
//      </div>
//    );
//  };
 
//  export default ProductLists;
 


import React, { useEffect, useState, useRef, useCallback } from "react";
import ProductItem from "./ProductItem";
import "./ProductList.css";
import SearchFilter from "./SearchFilter";
import { Link } from "react-router-dom";

const ProductLists = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const lastProductRef = useCallback(
    (node) => {
      if (loading || !hasMore) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            // Fetch more products when the last product is in view
            fetchProducts();
          }
        },
        { threshold: 1 }
      );

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    // Initial load of products
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    // Adjust the URL based on your API requirements
    const url = `https://dummyjson.com/products?limit=30&skip=${data.length}`;

    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((responseData) => {
        if (responseData.products && responseData.products.length > 0) {
          setData((prevData) => [...prevData, ...responseData.products]);
        } else {
          setHasMore(false);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="product-container">
      <SearchFilter />
      {data.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
      {!loading && hasMore && <p>Loading...</p>}
    </div>
  );
};

export default ProductLists;


   