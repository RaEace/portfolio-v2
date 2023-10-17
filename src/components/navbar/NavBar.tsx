import "./NavBar.css";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const navigation = useNavigate();

  const handleRedirect = (url: string) => {
    navigation(url);
  };

  return (
    <nav className="navbar">
      <ul className="navbar container-fluid">
        <>
          <li>
            <a onClick={() => handleRedirect("/")}>
              <b>Jules Lagny</b>
            </a>
          </li>
        </>
        <>
          <li>
            <a onClick={() => handleRedirect("/about-me")}>
              <b>About me</b>
            </a>
          </li>
          <li>
            <a onClick={() => handleRedirect("/career")}>
              <b>My Career</b>
            </a>
          </li>
          <li>
            <a onClick={() => handleRedirect("/contact-me")}>
              <b>contact me!</b>
            </a>
          </li>
        </>
      </ul>
    </nav>
  );
};

export default NavBar;
