import { connect } from 'react-redux';
import { CollectionItem } from '../../components';
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => {
  console.log('colleciton', collection);
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2>{title}</h2>
      <div className="collection-page__items">
        { items.map(item => 
          <div className="collection-page__item">
            <CollectionItem key={item.id} item={item} />
          </div>
        )}
      </div>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
