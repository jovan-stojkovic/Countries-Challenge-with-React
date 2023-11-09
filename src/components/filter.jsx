const Filter = () => {
  const showContainer = () => {
    const filterButton = document.querySelector(".filter-button");
    const hiddenFilterContainer = document.querySelector(
      ".hidden-filter-container"
    );

    hiddenFilterContainer.classList.toggle("active");
  };

  return (
    <>
      <button
        className="filter-button"
        id="filter-button-id"
        onClick={showContainer}
      >
        Filter by Region
        <div className="hidden-filter-container">
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
