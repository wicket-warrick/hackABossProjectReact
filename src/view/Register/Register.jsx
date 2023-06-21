import { useState, useContext } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { Error } from "../../components/Error";
import { InputStringRegister } from "../../components/InputStringRegister";
import { InputTextArea } from "../../components/InputTextArea";
import { Loading, sendFormMessage } from "../../components/Loading";
import { AuthContext } from "../../context/AuthContext";
import { createUserService } from "../../services";
import "./style.css";

export const Register = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [error, setError] = useState("");
  const [infoMessage, setInfoMessage] = useState("");
  const navigate = useNavigate();
  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const messageValidate = await createUserService({
        name,
        email,
        password,
        bio,
      });
      setLoading(false);
      setInfoMessage(messageValidate);
      setError("");
    } catch (error) {
      setLoading(false);
      setError(error.message);
      setInfoMessage("");
    }
  };

  return user ? (
    <Navigate to="/" />
  ) : loading ? (
    <Loading message={sendFormMessage} />
  ) : infoMessage ? (
    <div className="return">
      <h4>{infoMessage}</h4>
      <button
        onClick={() => {
          navigate(`/`);
        }}
      >
        Volver a inicio
      </button>
    </div>
  ) : (
    <section className="register">
      <h2>Registro de usuario</h2>
      <form className="registerForm" onSubmit={handleForm}>
        <InputStringRegister
          value={name}
          setValue={setName}
          inputType="text"
          name="name"
          label="Nombre de usuario: "
          placeholder="Escribe aqui..."
        />
        <InputStringRegister
          value={password}
          setValue={setPassword}
          inputType="password"
          name="password"
          label="Password: "
          placeholder="Contraseña de la cuenta..."
        />
        <InputStringRegister
          value={email}
          setValue={setEmail}
          inputType="email"
          name="email"
          label="Email: "
          placeholder="Cuenta de email asociada a tu usuario..."
        />
        <InputTextArea
          value={bio}
          setValue={setBio}
          name="bio"
          label="Biografía: "
          placeholder="Cuentanos algo de ti..."
          required={false}
        />

        <button>Crear usuario</button>
        {error ? <Error message={error} /> : null}
      </form>
    </section>
  );
};
