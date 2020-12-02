import { Link } from 'react-router-dom';

const MenuItem = ({ children, href, handleClick }) => {
  const Tag = href ?
    ({ children, ...otherProps }) => <Link to={href} {...otherProps}>{children}</Link> :
    ({ children, ...otherProps }) => <span onClick={handleClick} {...otherProps}>{children}</span>

  return (
    <Tag className="menu-item">
      {children}
    </Tag>
  );
};

export default MenuItem;
