import React, { Component } from 'react';

import { products } from '../../constants';
import { CollectionPreview } from '../../components';

class ShopPage extends Component {
  state = {
    collections: products
  }

  render() {
    const { collections } = this.state;
    
    return (
      <div className="shop-page">
        { collections.map(collection => (
          <CollectionPreview key={collection.id} {...collection} />
        ))}
      </div>
    )
  }
}

export default ShopPage;
