import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CollectionOverview } from '../../components';
import CollectionPage from '../collection-page/collection-page';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import withSpinner from '../../hocs/with-spinner/with-spinner';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollecitonPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsAsync } = this.props;
    fetchCollectionsAsync();
  }
  
  render() {
    const { match, isCollectionsLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route 
          exact 
          path={`${match.path}`} 
          render={(props) => 
            <CollectionOverviewWithSpinner isLoading={!isCollectionsLoaded} {...props} />
          }
        />
        <Route 
          path={`${match.path}/:collectionId`} 
          render={(props) => 
            <CollecitonPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
          }
        />
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsStartAsync())
});

const mapStateToProps = createStructuredSelector({
  isCollectionsLoaded: selectIsCollectionsLoaded,
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
