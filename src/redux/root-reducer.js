import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['cart']
}

const cartPersistConfig = {
  key: 'cart',
  storage: storage,
  blacklist: ['hidden']
}

const rootReducer = combineReducers({
  cart: persistReducer(cartPersistConfig, cartReducer),
  user: userReducer
});

export default persistReducer(rootPersistConfig, rootReducer);
