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
      <input
        type="checkbox"
        id="responsive-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <label></label>
      <ul>
        <li>
          <a onClick={() => handleRedirect("/")}>Jules Lagny</a>
        </li>
        <li>
          <a onClick={() => handleRedirect("/about-me")}>About me</a>
        </li>
        <li>
          <a onClick={() => handleRedirect("/my-career")}>My Career</a>
        </li>
        <li>
          <a onClick={() => handleRedirect("/contact-me")}>Contact me</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
