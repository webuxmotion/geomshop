export const addItemToCart = (cartItems, item) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

  if (!existingItem) {
    return [...cartItems, { ...item, quantity: 1 }];
  }

  return cartItems.map(cartItem =>
    cartItem.id === existingItem.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
}

export const deleteItem = (cartItems, item) =>
  cartItems.map(cartItem => 
    cartItem.id === item.id
      ? (
        cartItem.quantity <= 1 
          ? { ...cartItem, quantity: 1 }
          : { ...cartItem, quantity: cartItem.quantity - 1 }
      )
      : cartItem
  );

export const clearItemFromCart = (cartItems, item) =>
  cartItems.filter(cartItem => cartItem.id !== item.id)
