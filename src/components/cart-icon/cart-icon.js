import { connect } from 'react-redux';

import { ReactComponent as CartIconSvg } from '../../assets/shopping-bag.svg';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCart }) => {

  return (
    <div className="cart-icon" onClick={toggleCart}>
      <CartIconSvg className="cart-icon__image" />
      <span className="cart-icon__count">0</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
