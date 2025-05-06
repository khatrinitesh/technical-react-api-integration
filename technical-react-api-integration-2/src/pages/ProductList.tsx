import React, { useEffect } from 'react';
import { useProductStore } from '../store/useProductStore';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const { products, fetchProducts, setSelectedProduct } = useProductStore();

    useEffect(() => {
        fetchProducts();
      }, []);
  return (
    <>
      <h1>Product List</h1>
      {products.slice(0, 20).map((product) => (
        <div key={product.id}>
          <Link style={{textDecoration:'none'}} className="" to={`/product/${product.id}`} onClick={() => setSelectedProduct(product)}>
           <span style={{color:'red',fontWeight:'bold'}}>{product.id}</span>
            <h3>{product.name}</h3>
            <p>{product.email}</p>
          </Link>
        </div>
      ))}
    </>
  );
}

export default ProductList;
