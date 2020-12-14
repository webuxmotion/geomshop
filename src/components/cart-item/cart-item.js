const CartItem = ({ item }) => {
  const { imageUrl, price, name, quantity } = item;

  return (
    <div className="cart-item">
      <img className="cart-item__image" src={imageUrl} alt="Cart Item" />
      <div className="cart-item__info">
        <h2>{name}</h2>
        <p>{quantity} x ${price}</p>
      </div>
    </div>
  )
};

export default CartItem;
