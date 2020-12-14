import classnames from 'classnames';
import { Link } from 'react-router-dom';

const Button = ({ children, theme, href, handleClick, ...otherProps }) => {
  const Tag = href ?
    ({ children, ...otherProps }) => <Link to={href} {...otherProps}>{children}</Link> :
    ({ children, ...otherProps }) => <span onClick={handleClick} {...otherProps}>{children}</span>

  return (
    <Tag className={classnames('button', {
      [`button--theme--${theme}`]: theme
    })} {...otherProps}>
      {children}
    </Tag>
  );
}

export default Button;
