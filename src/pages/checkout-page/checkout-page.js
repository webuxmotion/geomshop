import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CartItem } from '../../components';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

const CheckoutPage = ({ cartItems, total }) => (
  <div className="g-container">
    <div className="checkout-page">
      <h1 className="checkout-page__header">Checkout page</h1>
      <div className="checkout-page__list">
        { cartItems.length
          ? cartItems.map(item => <CartItem key={item.id} item={item} />)
          : <span className="checkout-page__empty-message">Your cart is empty</span> 
        }
      </div>
      <div className="checkout-page__total">Total: ${total}</div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})

export default connect(mapStateToProps)(CheckoutPage);
