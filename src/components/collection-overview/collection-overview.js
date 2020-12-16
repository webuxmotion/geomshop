import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CollectionPreview } from '../index';
import { selectCollections } from '../../redux/shop/shop.selectors';

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    { Object.keys(collections).map(key => (
      <CollectionPreview key={collections[key].id} {...collections[key]} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionOverview);
