import React from 'react';

const CategoryMenuItem = ({ item: { title, subtitle, imageUrl } }) => (
  <div className="category-menu-item" style={{
    backgroundImage: `url(${imageUrl})`
  }}>
    <div className="category-menu-item__content">
      <h2 className="category-menu-item__title">{title}</h2>
      <span className="category-menu-item__subtitle">{subtitle}</span>
    </div>
  </div>
);

export default CategoryMenuItem;
