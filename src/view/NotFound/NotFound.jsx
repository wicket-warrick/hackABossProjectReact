import "./style.css";

export const NotFound = () => {
  return (
    <>
      <h2 className="notFoundTitle">Page not found</h2>
      <p className="notFoundMessage">
        We're sorry, we couldn't find the page you requested, but you can find
        us in linkedIn:
      </p>
      <ul className="notFoundLinks">
        <li>
          <a
            href="https://www.linkedin.com/in/juanfernandezmirandacano"
            target="_blank"
            rel="noreferrer"
          >
            Juan Fernández
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/hugosuarezdevp"
            target="_blank"
            rel="noreferrer"
          >
            Hugo Suárez
          </a>
        </li>
      </ul>
    </>
  );
};
