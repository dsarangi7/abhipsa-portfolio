import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <a href="#home" className="navbar-title">
        Abhipsa Satpathy
      </a>
      <a href="mailto:satpathyabhipsa@gmail.com" className="navbar-connect">
        satpathyabhipsa@gmail.com
      </a>
      <ul>
        <li>
          <a href="#about">
            <HoverLinks text="ABOUT" />
          </a>
        </li>
        <li>
          <a href="#expertise">
            <HoverLinks text="SKILLS" />
          </a>
        </li>
        <li>
          <a href="#experience">
            <HoverLinks text="EXPERIENCE" />
          </a>
        </li>
        <li>
          <a href="#contact">
            <HoverLinks text="CONTACT" />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
