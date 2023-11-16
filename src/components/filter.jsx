import { useState } from "react";
import { useContext } from "react";
import ThemeContext from "../helpers/ThemeContext";

useState;

const Filter = () => {
  const { theme } = useContext(ThemeContext);
  const [hidden, setHidden] = useState("hidden");

  const showHidden = () => {
    console.log("radi");
    setHidden(hidden === "hidden" ? "show" : "hidden");
  };

  return (
    <>
      <button
        className={`filter-button ${theme} ${hidden}`}
        id="filter-button-id"
        onClick={showHidden}
      >
        Filter by Region
        <div className={`hidden-filter-container ${theme} ${hidden}`}>
          <ul>
            <li>Africa</li>
            <li>America</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Oceania</li>
          </ul>
        </div>
      </button>
    </>
  );
};

export default Filter;
