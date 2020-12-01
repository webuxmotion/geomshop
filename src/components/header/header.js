import { Logo, MenuItem } from '../index';

const Header = () => (
  <header className="header">
    <div className="header__column">
      <Logo href="/" />
    </div>
    <div className="header__column">
      <div className="header__nav-item">
        <MenuItem href="/shop">SHOP</MenuItem>
      </div>
    </div>
  </header>
);

export default Header;
