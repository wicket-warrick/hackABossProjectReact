import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useUser } from "../hooks/useUser";
import logoutIcon from "../icons/logout.svg";
import logInIcon from "../icons/login.svg";
import addNew from "../icons/plusCircle.svg";
import "./style.css";
export const UserManagment = () => {
  const { user, logout } = useContext(AuthContext);
  const { userData } = useUser(user?.id);

  const navigate = useNavigate();
  return user ? (
    <section>
      <div>
        <div>
          {userData?.url ? (
            <img
              src={`${process.env.REACT_APP_BACKEND}/${process.env.REACT_APP_BACKEND_AVATAR_DIR}/${userData.url}`}
              alt={userData?.name}
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
          ) : null}
        </div>
        <div className="userData">
          <span>Logged in as </span>
          <Link to={`/user/${user.id}`}>{` ${user.name}`}</Link>
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            <img
              src={logoutIcon}
              alt="logout"
              style={{ width: "25px", borderColor: "white" }}
            />
          </button>
        </div>
      </div>
      <button
        className="createNew"
        onClick={() => {
          navigate("/createnew");
        }}
      >
        Nueva noticia
        <img
          src={addNew}
          alt="add new"
          style={{ width: "25px", borderColor: "white" }}
        />
      </button>
    </section>
  ) : (
    <ul className="registerLogin">
      <li>
        <Link to={"/register"}>Registrarse</Link>
      </li>
      <li>
        <Link to={"/login"} className="login">
          <span>Login</span>
          <img
            src={logInIcon}
            alt="login"
            style={{ width: "25px", borderColor: "white" }}
          />
        </Link>
      </li>
    </ul>
  );
};
