import React from 'react';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h2 className="collection-preview__tilte">{title.toUpperCase()}</h2>
    { items
      .filter((item, idx) => idx < 4)
      .map(item => (
        <div key={item.id}>{item.name}</div>
      ))
    }
  </div>
)

export default CollectionPreview;
