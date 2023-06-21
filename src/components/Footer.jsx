import "./style.css";
import gitHubIcon from "../icons/gitHub.svg";
import linkedInIcon from "../icons/linkedin.svg";

export const Footer = () => {
  return (
    <footer>
      <p>© 2022 HACK A BOSS</p>
      <div className="linkedInLink">
        <img src={linkedInIcon} alt="linkedIn link" />
        <a
          className="linkedInJuan"
          href="https://www.linkedin.com/in/juanfernandezmirandacano"
          target="_blank"
          rel="noreferrer"
        >
          <span>Juan Fernández</span>
        </a>
        <span>&</span>
        <a
          className="linkedInHugo"
          href="https://www.linkedin.com/in/hugosuarezdevp"
          target="_blank"
          rel="noreferrer"
        >
          <span>Hugo Suárez</span>
        </a>
      </div>
      <div className="gitHubLinks">
        <a
          href="https://github.com/wicket-warrick/PROXECTO2_NODE"
          target="_blank"
          rel="noreferrer"
          className="backEndLink"
        >
          <img src={gitHubIcon} alt="gitHub link" />
          <span>BackEnd</span>
        </a>

        <a
          href="https://github.com/canojuan10/proyecto3_react"
          target="_blank"
          rel="noreferrer"
          className="frontEndLink"
        >
          <img src={gitHubIcon} alt="gitHub link" />
          <span>FrontEnd</span>
        </a>
      </div>
    </footer>
  );
};
