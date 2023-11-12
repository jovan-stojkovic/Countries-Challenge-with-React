const Navbar = () => {
  const themeToggleFn = () => {
    const themeToggleCheck = document.querySelector(".theme-toggle");
    const nav = document.querySelector(".navbar-class");
    const app = document.querySelector(".app");
    const searchInput = document.querySelector(".search-input");
    const filterButton = document.querySelector(".filter-button");
    const hiddenFilterContainer = document.querySelector(
      ".hidden-filter-container"
    );
    const logo = document.querySelector(".logo");
    const signleCountryCards = document.querySelectorAll(
      ".single-country-card"
    );

    console.log("radi");

    if (themeToggleCheck.checked) {
      nav.classList.add("dark");
      app.classList.add("dark");
      searchInput.classList.add("dark");
      filterButton.classList.add("dark");
      hiddenFilterContainer.classList.add("dark");
      logo.classList.add("dark");

      signleCountryCards.forEach((card) => {
        card.classList.add("dark");
      });
    } else if (!themeToggleCheck.checked) {
      nav.classList.remove("dark");
      app.classList.remove("dark");
      searchInput.classList.remove("dark");
      filterButton.classList.remove("dark");
      hiddenFilterContainer.classList.remove("dark");
      logo.classList.remove("dark");

      signleCountryCards.forEach((card) => {
        card.classList.remove("dark");
      });
    }
  };

  return (
    <nav className="navbar-class">
      <div className="navbar-container">
        <a href="/">
          <h1 className="logo">Where in the world?</h1>
        </a>

        <div className="checkbox-wrapper-54">
          <label className="switch">
            <input
              type="checkbox"
              className="theme-toggle"
              onClick={themeToggleFn}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
