import { useContext } from "react";
import ThemeContext from "../helpers/ThemeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar-class ${theme}`}>
      <div className={`navbar-container ${theme}`}>
        <Link to="/">
          <h1 className="logo">Where in the world?</h1>
        </Link>

        <div className="checkbox-wrapper-54">
          <label className="switch">
            <input
              type="checkbox"
              className="theme-toggle"
              onClick={toggleTheme}
            />
            <span className="slider"></span>
          </label>
          <p className="theme-text">Dark Mode</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
