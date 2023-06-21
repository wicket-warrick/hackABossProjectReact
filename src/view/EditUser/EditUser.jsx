import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loading, editUserMessage } from "../../components/Loading";
import { AuthContext } from "../../context/AuthContext";
import { editUserService, getUserByIdService } from "../../services";
import { InputStringRegister } from "../../components/InputStringRegister";
import { InputTextArea } from "../../components/InputTextArea";
import { Error, errorFetchMessage } from "../../components/Error";
import "./style.css";
export const EditUser = () => {
  const { idUser } = useParams();
  const { user, token, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.bio);
  const [error, setError] = useState("");
  const [message, SetMessage] = useState("");
  const navigate = useNavigate();
  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await editUserService({
        name,
        email,
        bio,
        token,
        idUser,
      });
      SetMessage(response.message);
    } catch (error) {
      setLoading(false);
      setError(errorFetchMessage);
    } finally {
      const editedUser = await getUserByIdService(idUser);
      setUser(editedUser);
      setLoading(false);
    }
  };
  return loading ? (
    <Loading message={editUserMessage} />
  ) : message ? (
    <div className="return">
      <h4>{message}</h4>
      <button
        onClick={() => {
          navigate(`/user/${idUser}`);
        }}
      >
        Volver a inicio
      </button>
    </div>
  ) : (
    <>
      <h2>Edición de Usuario</h2>
      <section className="editUser">
        <form className="editUserForm" onSubmit={handleForm}>
          <InputStringRegister
            value={name}
            setValue={setName}
            inputType="text"
            name="name"
            label="Nombre de usuario: "
          />
          <InputStringRegister
            value={email}
            setValue={setEmail}
            inputType="email"
            name="email"
            label="Email: "
          />
          <InputTextArea
            value={bio}
            setValue={setBio}
            name="bio"
            label="Biografía: "
          />
          <button>Editar usuario</button>
        </form>
        {error ? <Error message={error} /> : null}
      </section>
    </>
  );
};
