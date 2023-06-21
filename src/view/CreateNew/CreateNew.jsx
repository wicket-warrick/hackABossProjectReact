import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { sendNewService } from "../../services";
import { Topics } from "../../components/Topics";
import { useNavigate } from "react-router-dom";
import { Loading, createNewMessage } from "../../components/Loading";
import "./style.css";

export const CreateNew = () => {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [messageConfirm, setMessageConfirm] = useState(null);
  const [chooseOption, setChooseOption] = useState("");
  const [topic, setTopic] = useState("");
  useEffect(() => {
    setChooseOption(topic);
  }, [topic]);
  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData(e.target);
      if (!data.get("entradilla")) data.delete("entradilla");

      const _new = await sendNewService({
        data,
        token,
      });
      setMessageConfirm(_new);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <Loading message={createNewMessage} />
  ) : messageConfirm ? (
    <div>
      <p>{messageConfirm.messageNew}</p>
      <p>{messageConfirm.messageImage}</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Volver a inicio
      </button>
    </div>
  ) : (
    <div className="createNew">
      <h2>Añadir noticias</h2>
      <form className="createNewForm" onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="title">Título</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            autoFocus
            minLength={1}
            maxLength={50}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="subtitle">Entradilla</label>
          <textarea
            name="entradilla"
            id="subtitle"
            minLength={0}
            maxLength={100}
          ></textarea>
        </fieldset>
        <Topics value={chooseOption} setValue={setTopic} inForm={true} />
        <fieldset>
          <label htmlFor="description">Noticia</label>
          <textarea
            name="description"
            id="description"
            minLength={50}
            maxLength={800}
            required
          ></textarea>
        </fieldset>
        <fieldset>
          <label htmlFor="image">Imagen</label>
          <input type="file" name="photo" id="image" accept={"image/*"} />
        </fieldset>
        <button>Subir noticia</button>
      </form>
      {error ? (
        <div>
          <p className="errorMessage">{error}</p>
        </div>
      ) : null}
    </div>
  );
};
