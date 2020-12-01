import { Link } from 'react-router-dom';

import { ReactComponent as LogoImage } from '../../assets/logo.svg';

const Logo = ({ href }) => {
  const Tag = href ?
    ({ children, ...props }) => <Link to={href} {...props}>{children}</Link> :
    ({ children, ...props }) => <span {...props}>{children}</span>;

  return (
    <Tag className="logo">
      <LogoImage className="logo__image" />
    </Tag>
  );
};

export default Logo;
