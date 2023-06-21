import { useParams } from "react-router-dom";
import { Error } from "../../components/Error";
import { Loading, loginMessage } from "../../components/Loading";
import { UserDetailComponent } from "../../components/UserDetailComponent";
import { useUser } from "../../hooks/useUser";
import "./style.css";
export const UserDetail = () => {
  const { idUser } = useParams();
  const { userData, loading, error } = useUser(idUser);
  return error ? (
    <Error message={error} />
  ) : !loading ? (
    <UserDetailComponent userData={userData} error={error} />
  ) : (
    <Loading message={loginMessage} />
  );
};
