import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as CartIconSvg } from '../../assets/shopping-bag.svg';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCart, count }) => {

  return (
    <div className="cart-icon" onClick={toggleCart}>
      <CartIconSvg className="cart-icon__image" />
      <span className="cart-icon__count">{count}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  count: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
