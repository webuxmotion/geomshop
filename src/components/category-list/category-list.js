import React from 'react';

import { CategoryMenuItem } from '../index';

const CategoryList = ({ items = [] }) => (
  <div className="category-list">
    { items.map(({ id, title, subtitle }) => (
      <div key={id} className="category-list__item">
        <CategoryMenuItem title={title} subtitle={subtitle} />
      </div>
    ))}
  </div>
);

export default CategoryList;
