import { useEffect, useState } from "react";
import type { Product } from "../../app/models/product"
import ProductsList from "./ProductsList"


export default function Catalog() {
  
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      <ProductsList products={products}/>
    </>
  )
}