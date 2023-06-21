import propTypes from "prop-types";
import "./style.css";
import error from "../image/error.png";
export const Error = ({ message }) => {
  return (
    <>
      <div className="error">
        <img src={error} alt="" />
        <h4>{message}</h4>
      </div>
    </>
  );
};
export const errorPasswordMessage = "Password incorrecto.";
export const errorEditPasswordMessage = `Compruebe que todos los campos han sido cubiertos correctamente.`;
export const errorFetchMessage = "Error de conexión con el servidor.";
Error.propTypes = {
  message: propTypes.string.isRequired,
};
