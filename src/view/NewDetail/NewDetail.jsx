import { useParams } from "react-router-dom";
import { Error, errorFetchMessage } from "../../components/Error";
import { Loading, loadNewMessage } from "../../components/Loading";
import { New } from "../../components/New";
import { useNew } from "../../hooks/useNew";
import "./style.css";

export const NewDetail = () => {
  const { idNew } = useParams();
  const { _new, error, loading } = useNew(idNew);
  return error ? (
    <Error message={errorFetchMessage} />
  ) : loading ? (
    <Loading message={loadNewMessage} />
  ) : (
    <div className="newDetail">
      <New _new={_new} isDetail={true} />
    </div>
  );
};
