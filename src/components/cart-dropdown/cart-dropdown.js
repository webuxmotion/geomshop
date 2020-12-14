import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import { CartItem } from '../index';

const CartDropdown = ({ cartItems }) => {

  return (
    <div className="cart-dropdown">
      { cartItems.map(item => <CartItem key={item.id} item={item} />) }
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
