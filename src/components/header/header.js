import { Logo, MenuItem } from '../index';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CartIcon, CartDropdown } from '../index';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({ currentUser, hidden, signOutStart }) => (
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
            <MenuItem handleClick={signOutStart}>SIGNOUT</MenuItem>
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

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
