import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CategoryList } from '../../components';
import { selectDirectoryCategories } from '../../redux/directory/directory.selectors';

const HomePage = ({ categories }) => (
  <div className="home-page">
    <CategoryList items={categories} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  categories: selectDirectoryCategories
});

export default connect(mapStateToProps)(HomePage);
