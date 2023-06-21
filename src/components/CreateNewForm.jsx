import { Topics } from "./Topics";
import "./style.css";
import propTypes from "prop-types";
export const CreateNewForm = ({ handleForm, newValue }) => {
  return (
    <form className="editNewForm" onSubmit={handleForm}>
      <fieldset>
        <label htmlFor="title">Título</label>
        <input
          defaultValue={newValue.title}
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
          defaultValue={newValue.entradilla}
          name="entradilla"
          id="subtitle"
          minLength={0}
          maxLength={100}
        ></textarea>
      </fieldset>
      <Topics value={newValue.topic} inForm={true} />
      <fieldset>
        <label htmlFor="description">Noticia</label>
        <textarea
          defaultValue={newValue.description}
          name="description"
          id="description"
          minLength={50}
          maxLength={800}
          required
        ></textarea>
      </fieldset>
      <fieldset>
        <label htmlFor="image">
          <p className="labelImg">Imagen</p>
          {newValue.url ? (
            <img
              src={`${process.env.REACT_APP_BACKEND}/${process.env.REACT_APP_BACKEND_IMAGES_DIR}/${newValue.url}`}
              alt={newValue.title}
              style={{ width: "80px" }}
            />
          ) : null}
        </label>
        <input type="file" name="photo" id="image" accept={"image/*"} />
      </fieldset>
      <button>Editar Noticia</button>
    </form>
  );
};
CreateNewForm.propTypes = {
  newValue: propTypes.object.isRequired,
  handleForm: propTypes.func.isRequired,
};
