import { New } from "./New";
import propTypes from "prop-types";
import { Error, errorFetchMessage } from "./Error";
import "./style.css";
export const NewsList = ({ news, error, deleteNew }) => {
  return news.length ? (
    <ul className="listNews">
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
    <div className="errorListNews">
      <Error message={errorFetchMessage} />
    </div>
  ) : (
    <p>No hay noticias sobre el tema</p>
  );
};
NewsList.propTypes = {
  news: propTypes.array.isRequired,
  deleteNew: propTypes.func.isRequired,
  error: propTypes.string.isRequired,
};
