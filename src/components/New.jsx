import propTypes from "prop-types";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { stringDateFormater } from "../helpers/formatDate";
import { AuthContext } from "../context/AuthContext";

import {
  deleteNewService,
  deletePhotoService,
  voteNewService,
} from "../services";
import "./style.css";
export const New = ({ _new, deleteNew, isDetail = false }) => {
  const navigate = useNavigate();
  const { token, user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");

  const removeNew = async (idNew) => {if(window.confirm("¿Estás seguro de borrar la noticia?")){
    try {
      if (_new.image_id) {
        await deletePhotoService({ idNew, token, idPhoto: _new.image_id });
      }
      await deleteNewService({ idNew, token });
      if (deleteNew) {
        deleteNew(idNew);
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  }};

  const voteNew = async (id) => {
    try {
      const response = await voteNewService({ id, token });
      setConfirmMessage(response);
      setTimeout(() => {
        setConfirmMessage("");
      }, 2000);
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <article className="new">
      <div className="newBodyImg">
        <div className="newBodyTitle">
          <h3>{_new?.title}</h3>
          <p className="entradilla">{_new?.entradilla}</p>
          {isDetail ? <p className="description">{_new?.description}</p> : null}
          {!isDetail ? <Link to={`/new/${_new?.id}`}>+ info</Link> : null}
        </div>
        {_new?.url ? (
          <img
            src={`${process.env.REACT_APP_BACKEND}/${process.env.REACT_APP_BACKEND_IMAGES_DIR}/${_new?.url}`}
            alt={_new?.title}
          />
        ) : null}
      </div>
      {isDetail && user && user.id === _new.user_id ? (
        <section className="deleteEdit">
          <button
            onClick={() => {
              removeNew(_new.id);
            }}
          >
            Borrar Noticia
          </button>
          <button
            onClick={() => {
              navigate(`/edit/${_new?.id}`);
            }}
          >
            Editar Noticia
          </button>
          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
      <div className="newData">
        <div>
          {_new.votes ? <p className="votes">Votos: {_new.votes}</p> : null}
          {_new.user_id ? (
            <div>
              <span>by</span>
              <Link className="author" to={`/user/${_new?.user_id}`}>
                {_new?.name}
              </Link>
            </div>
          ) : null}
          {_new.createdAt ? (
            <p className="createdAt">{stringDateFormater(_new?.createdAt,true)}</p>
          ) : null}
        </div>
        <p className="topic">{_new?.topic}</p>
        {user ? (
          <button
            onClick={() => {
              voteNew(_new.id);
            }}
          >
            Votar
          </button>
        ) : null}
      </div>

      {error ? <p>{error}</p> : null}
      {confirmMessage ? (
        <>
          <p>{confirmMessage}</p>
        </>
      ) : null}
    </article>
  );
};

New.propTypes = {
  _new: propTypes.object.isRequired,
  deleteNew: propTypes.func,
  isDetail: propTypes.bool,
};
