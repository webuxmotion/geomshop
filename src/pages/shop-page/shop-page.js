import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CollectionOverview } from '../../components';
import CollectionPage from '../collection-page/collection-page';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import withSpinner from '../../hocs/with-spinner/with-spinner';
import { selectCollections, selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollecitonPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsAsync } = this.props;
    fetchCollectionsAsync();
  }
  
  render() {
    const { match, isFetching, collections } = this.props;

    return (
      <div className="shop-page">
        <Route 
          exact 
          path={`${match.path}`} 
          render={(props) => 
            <CollectionOverviewWithSpinner isLoading={isFetching || !collections} {...props} />
          }
        />
        <Route 
          path={`${match.path}/:collectionId`} 
          render={(props) => 
            <CollecitonPageWithSpinner isLoading={isFetching || !collections} {...props} />
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
  isFetching: selectIsCollectionFetching,
  collections: selectCollections,
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
