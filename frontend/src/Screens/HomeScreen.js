import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { listProducts } from '../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';

const HomeScreen = (props) => {
  const { products, loading, error } = useSelector(
    (state) => state.productListReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
    return () => {};
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>
          <ul className='products'>
            {products?.map((product) => (
              <li key={product.id}>
                <div className='product'>
                  <Link to={`/products/${product.id}`}>
                    <img
                      className='product-image'
                      src={product.image}
                      alt='product'
                    />
                  </Link>
                  <div className='product-name'>
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                  </div>
                  <div className='product-brand'>{product.brand}</div>
                  <div className='product-price'>{product.price}</div>
                  <div className='product-rating'>
                    {product.rating} Stars ({product.numReviews} Reviews)
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default HomeScreen;
