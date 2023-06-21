import { Link } from "react-router-dom";

export const NewHighLight = ({ newVotes }) => {
  return (
    <article className="new">
      <h2>{newVotes?.title}</h2>
      <p className="entradilla">{newVotes?.entradilla}</p>
      <p className="topic">{newVotes?.topic}</p>
      <Link to={`/new/${newVotes?.id}`}>+ info</Link>
    </article>
  );
};
