import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const CartScreen = (props) => {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  const dispatch = useDispatch();
  console.log('Props form cartScreen.js', props);
  useEffect(() => {
    console.log('Entered in useeFFECT of cartscreen');
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return (
    <div className='cart'>
      <div className='cart-list'>
        <ul className='cart-list-container'>
          <li>
            <h3>Shopping Cart</h3>
            <div>Price</div>
          </li>
          <li>
            {cartItems.length === 0 ? (
              <div>Cart is Empty</div>
            ) : (
              cartItems.map((item) => (
                <div>
                  <img src={item.image} />
                </div>
              ))
            )}
          </li>
          <li></li>
        </ul>
      </div>
      <div className='cart-action'></div>
    </div>
  );
};

export default CartScreen;
