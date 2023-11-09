import { useState } from "react";

const Filter = () => {
  const [isActive, setIsActive] = useState(false);

  const showContainer = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <button
        className={`filter-button ${isActive ? "active" : ""}`}
        id="filter-button-id"
        onClick={showContainer}
      >
        Filter by Region
        <div className={`hidden-filter-container ${isActive ? "active" : ""}`}>
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
