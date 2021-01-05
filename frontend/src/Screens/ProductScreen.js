import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

const ProductScreen = (props) => {
  console.log(props);
  const product = data?.products?.find(
    (x) => x.id === Number(props.match.params.id)
  );
  console.log(product);
  return (
    <>
      <div className='back-to-home'>
        <Link to='/'>Back to Home</Link>
      </div>
      <div className='details'>
        <div className='details-image'>
          <img src={product.image} alt='product' />
        </div>
        <div className='details-info'>
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              {product.rating} Stars ({product.numReviews} Reviews)
            </li>
            <li>
              Price: <b>${product.price}</b>
            </li>
            <li>
              Description:
              <div>{product.description}</div>
            </li>
          </ul>
        </div>
        <div className='details-action'>
          <ul>
            <li>Price: {product.price}</li>
            <li>Status: {product.status}</li>
            <li>
              Qty:{' '}
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </li>
            <li>
              <button className='button primary'>Add To Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
