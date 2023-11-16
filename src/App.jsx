import Navbar from "./components/navbar";
import Home from "./pages/home";
import "./style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackToTopButton from "./components/top";
import Country from "./pages/country";
import { useState } from "react";
import ThemeContext from "./helpers/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const themeText = document.querySelector(".theme-text");

    if (theme === "light") {
      themeText.innerText = "Dark Mode";
    } else if (theme === "dark") {
      themeText.innerText = "Light Mode";
    }
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Navbar />
        <div className={`app ${theme}`}>
          <BackToTopButton />

          <div className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/countries/:name" element={<Country />} />
            </Routes>
          </div>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
};

export default App;
