import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import { CartItem, Button } from '../index';

const CartDropdown = ({ cartItems, dispatch }) => {

  return (
    <div className="cart-dropdown">
      { cartItems.length
        ? cartItems.map(item => <CartItem key={item.id} item={item} />)
        : <span className="cart-dropdown__empty-message">Your cart is empty</span> 
      }
      <Button href="/checkout" onClick={() => dispatch(toggleCartHidden())}>Checkout</Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
