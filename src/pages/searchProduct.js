import {useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../components/card";
import { useCart } from "../context";
import BASE_URL from "../config";
import UseFetch from "../hooks/UseFetch";

const SearchProduct = () => {
  const {data:allProducts, loading} = UseFetch(`${BASE_URL}/Products`)
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [filteredProducts, setFilteredProducts] = useState([]);
  

  const {addToCart} = useCart();

  console.log("Query from searchParams:", query);

  useEffect(() => {
      function searchProducts(){
        if(!allProducts && query) return [];
        const filtered = allProducts.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
        setFilteredProducts(filtered)
  }
       searchProducts();
  }, [allProducts, query]);
  

  return (
    <section className="search-product">
      <h4>Search results for: <strong>{query}</strong></h4>
      {loading ? (
            <p>Loading products...</p>
        ) : query.length === 0 ? (
            <p>Enter Search Term</p>
        ) : filteredProducts.length === 0 ? (
            <p>No product found</p>
        ) : (
            <div className="product-grid">
            {filteredProducts.map((item) => (
                <Card key={item.id} item={item} addToCart={addToCart} />
            ))}
            </div>
      )}
    </section>
  );
};

export default SearchProduct;
