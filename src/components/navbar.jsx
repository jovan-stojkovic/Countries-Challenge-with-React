import { useContext } from "react";
import ThemeContext from "../helpers/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar-class ${theme}`}>
      <div className={`navbar-container ${theme}`}>
        {/* <Link to="/"> */}
          <a href="/">
          <h1 className="logo">Where in the world?</h1>
          </a>
        {/* </Link> */}

        <div className="checkbox-wrapper-54">
          <label className="switch">
            <input
              type="checkbox"
              className="theme-toggle"
              onClick={toggleTheme}
            />
            <span className="slider"></span>
          </label>
          <p className="theme-text">Light Mode</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
