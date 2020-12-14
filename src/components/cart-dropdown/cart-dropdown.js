import { connect } from 'react-redux';

import { CartItem } from '../index';

const CartDropdown = ({ cartItems }) => {

  return (
    <div className="cart-dropdown">
      { cartItems.map(item => <CartItem key={item.id} item={item} />) }
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);
