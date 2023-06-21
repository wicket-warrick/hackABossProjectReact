import { New } from "./New";
import propTypes from "prop-types";
import "./style.css";
import { Error, errorFetchMessage } from "./Error";
export const NewsListByVotes = ({ news, error, deleteNew }) => {
  return news.length ? (
    <ul>
      {news
        .slice(0)
        .reverse()
        .map((_new, index) => {
          return (
            <li key={index}>
              <New _new={_new} deleteNew={deleteNew} />
            </li>
          );
        })}
    </ul>
  ) : error ? (
    <Error message={errorFetchMessage} />
  ) : (
    <p>No hay noticias sobre el tema</p>
  );
};
NewsListByVotes.propTypes = {
  news: propTypes.array.isRequired,
  deleteNew: propTypes.func.isRequired,
  error: propTypes.string.isRequired,
};
