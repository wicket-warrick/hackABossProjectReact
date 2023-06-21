import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CreateNewForm } from "../../components/CreateNewForm";
import {
  Loading,
  loadNewMessage,
  sendFormMessage,
} from "../../components/Loading";
import { Error } from "../../components/Error";
import { AuthContext } from "../../context/AuthContext";
import { useNew } from "../../hooks/useNew";
import {
  deletePhotoService,
  editNewService,
  uploadNewPhotoServices,
} from "../../services";
import "./style.css";

export const EditNew = () => {
  const { idNew } = useParams();
  const { _new, error, loading, setError } = useNew(idNew);
  const { token } = useContext(AuthContext);
  const [loadingForm, setLoadingForm] = useState(false);
  const [messageConfirmEditNew, setMessageConfirmEditNew] = useState(null);
  const [messageConfirmUpdatePhoto, setMessageConfirmUpdatePhoto] =
    useState(null);

  const handleForm = async (e) => {
    e.preventDefault();
    setLoadingForm(true);
    try {
      const data = new FormData(e.target);
      const response = await editNewService({
        data,
        token,
        idNew,
      });
      if (_new.image_id) {
        const idPhoto = _new.image_id;
        await deletePhotoService({
          idNew,
          idPhoto,
          token,
        });
      }
      const responseUpdatePhoto = await uploadNewPhotoServices({
        idNew,
        token,
        data,
      });
      setMessageConfirmUpdatePhoto(responseUpdatePhoto);
      setMessageConfirmEditNew(response);
      setLoadingForm(false);
    } catch (error) {
      setError(error.message);
    }
  };
  if (loading) return <Loading message={loadNewMessage} />;
  return loadingForm ? (
    <Loading message={sendFormMessage} />
  ) : messageConfirmEditNew || messageConfirmUpdatePhoto ? (
    <div>
      {messageConfirmEditNew ? <p>{messageConfirmEditNew}</p> : null}
      {messageConfirmUpdatePhoto ? <p>{messageConfirmUpdatePhoto}</p> : null}

      <Link to={`/new/${idNew}`}>Volver a la noticia</Link>
    </div>
  ) : (
    <div className="editNew">
      <h2>Editar Noticia</h2>
      <CreateNewForm newValue={_new} handleForm={handleForm} />
      {error ? <p className="errorMessage">{error}</p> : null}
    </div>
  );
};
