import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProductStore } from '../store/useProductStore';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate= useNavigate();
  const { selectedProduct, products, setSelectedProduct } = useProductStore();
  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  useEffect(() => {
    if (!selectedProduct) {
      const product = products.find((p) => p.id === Number(id));
      if (product) setSelectedProduct(product);
    }
  }, [id, selectedProduct, products]);

  if (!selectedProduct) return <div>Loading...</div>;
  return (
    <>
    <button onClick={handleGoBack}>Back</button>
      <h2>{selectedProduct.name}</h2>
      <p>Email: {selectedProduct.email}</p>
      <p>{selectedProduct.body}</p>
    </>
  );
}

export default ProductDetail;
