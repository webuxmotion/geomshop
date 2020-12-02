import classnames from 'classnames';

const Button = ({ children, theme, ...otherProps }) => (
  <button className={classnames('button', {
    [`button--theme--${theme}`]: theme
  })} {...otherProps}>
    {children}
  </button>
);

export default Button;
