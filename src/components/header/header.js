import { Logo, MenuItem } from '../index';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import { CartIcon, CartDropdown } from '../index';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const Header = ({ currentUser, hidden }) => (
  <header className="header">
    <div className="header__column">
      <Logo href="/" />
    </div>
    <div className="header__column">
      <div className="header__nav-list">
        <div className="header__nav-item">
          <MenuItem href="/shop">SHOP</MenuItem>
        </div>
        { currentUser ?
          <div className="header__nav-item">
            <MenuItem handleClick={() => auth.signOut()}>SIGNOUT</MenuItem>
          </div> :
          <>
            <div className="header__nav-item">
              <MenuItem href="/signup">SIGNUP</MenuItem>
            </div>
            <div className="header__nav-item">
              <MenuItem href="/signin">SIGNIN</MenuItem>
            </div>
          </>
        }
        <CartIcon />
      </div>
      { !hidden && <CartDropdown /> }
    </div>
  </header>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
