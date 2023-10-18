import { useState } from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = useNavigate();

  const handleRedirect = (url: string) => {
    navigation(url);
  };

  return (
    <nav id="menu">
      {/* <input
        className={`${!isMenuOpen ? "not-" : ""}checked-menu`}
        type="checkbox"
        id="responsive-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      /> */}
      {/* <label></label> */}
      <ul>
        <li>
          <a onClick={() => handleRedirect("/")}>
            <b>Jules Lagny</b>
          </a>
        </li>
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
      </ul>
    </nav>
  );
};

export default NavBar;
