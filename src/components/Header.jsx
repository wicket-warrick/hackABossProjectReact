import { Link } from "react-router-dom";
import { UserManagment } from "./UserManagment";
import "./style.css";
export const Header = () => {
  return (
    <header>
      <h1>
        <Link to={"/"}>HACK A NEW</Link>
      </h1>
      <nav>
        <UserManagment />
      </nav>
    </header>
  );
};
