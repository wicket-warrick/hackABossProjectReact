import { useContext, useState } from "react";
import propTypes from "prop-types";
import {
  deleteAvatarService,
  getUserByIdService,
  uploadAvatarService,
} from "../services";
import "./style.css";
import { Loading, editUserMessage } from "./Loading";
import { errorFetchMessage, Error } from "./Error";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const UploadAvatar = ({ token, id, userData, setUrl, setEdited }) => {
  const [error, setError] = useState("");
  const { idUser } = useParams();
  const { setUser, setRefetchUser, refetchUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      if (userData.url) {
        const idAvatar = userData.idAvatar;
        await deleteAvatarService({ idAvatar, id, token });
      }
      const data = new FormData(e.target);
      if (data) {
        await uploadAvatarService({ id, data, token });
        setEdited(false);
        setTimeout(() => {
          navigate(`/user/${id}`);
        }, 500);
      }
    } catch (error) {
      setError(errorFetchMessage);
    } finally {
      const editedUser = await getUserByIdService(idUser);
      setUser(editedUser);
      setUrl(editedUser.url);
      setRefetchUser(!refetchUser);
      setLoading(false);
    }
  };
  return loading ? (
    <Loading message={editUserMessage} />
  ) : error ? (
    <Error message={error} />
  ) : (
    <>
      <h2>Editar Avatar</h2>
      <form className="createNewAvatar" onSubmit={handleForm}>
        <fieldset>
          {userData.url ? (
            <img
              src={`${process.env.REACT_APP_BACKEND}/${process.env.REACT_APP_BACKEND_AVATAR_DIR}/${userData.url}`}
              alt={userData?.name}
              style={{ width: "75px" }}
            />
          ) : null}

          <input
            className="button"
            type="file"
            name="photo"
            id="image"
            accept={"image/*"}
          />
        </fieldset>
        <button className="button">Subir Avatar</button>
      </form>
    </>
  );
};
UploadAvatar.propTypes = {
  token: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  userData: propTypes.object.isRequired,
  setUrl: propTypes.func.isRequired,
  setEdited: propTypes.func.isRequired,
};
