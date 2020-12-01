import React from 'react';

import { CategoryMenuItem } from '../index';

const CategoryList = ({ items = [] }) => (
  <div className="category-list">
    { items.map(item => (
      <div key={item.id} className="category-list__item">
        <CategoryMenuItem item={item} />
      </div>
    ))}
  </div>
);

export default CategoryList;
