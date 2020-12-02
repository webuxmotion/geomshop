import classnames from 'classnames';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="form-input">
    <input className="form-input__input" onChange={handleChange} {...otherProps} />
    { label &&
      <label className={classnames('form-input__label', {
        'form-input__label--shrink': otherProps.value.length
      })}>{label}</label>
    }
  </div>
);

export default FormInput;
