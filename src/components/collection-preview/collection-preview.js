import React from 'react';

import { CollectionItem } from '../index';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h2 className="collection-preview__title">{title.toUpperCase()}</h2>
    <div className="collection-preview__list">
      { items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <div key={item.id} className="collection-preview__item">
            <CollectionItem item={item} />
          </div>
        ))
      }
    </div>
  </div>
)

export default CollectionPreview;
