import { useState } from "react";
import { useContext } from "react";
import ThemeContext from "../helpers/ThemeContext";

useState;

const Filter = ({ setSelectRegion }) => {
  const { theme } = useContext(ThemeContext);
  const [hidden, setHidden] = useState("hidden");

  const showHidden = () => {
    setHidden(hidden === "hidden" ? "show" : "hidden");
  };

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

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
            {regions.map((region, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectRegion(region);
                }}
              >
                {region}
              </li>
            ))}
          </ul>
        </div>
      </button>
    </>
  );
};

export default Filter;
