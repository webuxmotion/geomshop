import { Link } from 'react-router-dom';

const MenuItem = ({ children, href }) => {

  return (
    <Link className="menu-item" to={href}>
      {children}
    </Link>
  );
};

export default MenuItem;
