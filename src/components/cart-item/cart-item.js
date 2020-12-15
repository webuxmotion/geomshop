import { connect } from 'react-redux';

import { ReactComponent as DeleteIcon } from '../../assets/delete.svg';
import { addItem, clearItemFromCart, deleteItem } from '../../redux/cart/cart.actions';

const CartItem = ({ item, clearItemFromCart, addItem, deleteItem }) => {
  const { imageUrl, price, name, quantity } = item;

  return (
    <div className="cart-item">
      <img className="cart-item__image" src={imageUrl} alt="Cart Item" />
      <div className="cart-item__info">
        <h2>{name}</h2>
        <div className="cart-item__counter">
          <span
            className="cart-item__counter-button"
            onClick={() => deleteItem(item)}
          >&#10094;</span>
          <span className="cart-item__counter-number">{quantity}</span>
          <span
            className="cart-item__counter-button"
            onClick={() => addItem(item)}
          >&#10095;</span>
        </div>
        <p>${price}</p>
      </div>
      <div>
        <DeleteIcon 
          className="cart-item__delete-icon"
          onClick={() => clearItemFromCart(item)}
        />
      </div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  deleteItem: item => dispatch(deleteItem(item)),
  clearItemFromCart: item => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CartItem);
