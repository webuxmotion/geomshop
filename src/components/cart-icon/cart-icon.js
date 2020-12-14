import { connect } from 'react-redux';

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

const mapStateToProps = (state) => ({
  count: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
