import { Logo, MenuItem } from '../index';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
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
      </div>
    </div>
  </header>
);

export default Header;
