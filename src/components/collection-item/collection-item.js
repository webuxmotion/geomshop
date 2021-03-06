import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  
  return (
    <div className="collection-item">
      <div 
        className="collection-item__image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className="collection-item__footer">
        <span className="collection-item__name">{name}</span>
        <span className="collection-item__price">{price}</span>
      </div>
      <div 
        className="collection-item__add-button"
        onClick={() => addItem(item)}
      >Add to cart</div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
