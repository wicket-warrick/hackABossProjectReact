import propTypes from "prop-types";
import "./style.css";
export const InputTextArea = ({
  value,
  setValue,
  name,
  label,
  placeholder,
  required=true
}) => {
  return required ? (
    <fieldset>
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        id={name}
        value={value}
        required
        onChange={(e) => setValue(e.target.value)}
        autoComplete="off"
        placeholder={placeholder}
      />
    </fieldset>
  ) : (
    <fieldset>
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoComplete="off"
        placeholder={placeholder}
      />
    </fieldset>
  );
};

InputTextArea.propTypes = {
  setValue: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  placeholder: propTypes.string,
};
