import React from 'react';

import { CategoryList } from '../../components';

import { categories } from '../../constants';

const HomePage = () => (
  <div className="home-page">

    <CategoryList items={categories} />
    
  </div>
);

export default HomePage;
