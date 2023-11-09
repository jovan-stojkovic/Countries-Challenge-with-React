const Navbar = () => {

  const themeToggleFn = () => {
    const nav = document.querySelector('.navbar-class')
    const themeButton = document.querySelector('.theme')
    const app = document.querySelector('.app')
    const searchInput = document.querySelector('.search-input')
    const filterButton = document.querySelector('.filter-button')
    const hiddenFilterContainer = document.querySelector('.hidden-filter-container')
    const singleCountryCard = document.querySelector('.single-country-card')
    const logo = document.querySelector('.logo')

    nav.classList.toggle('dark')
    themeButton.classList.toggle('dark')
    app.classList.toggle('dark')
    searchInput.classList.toggle('dark')
    filterButton.classList.toggle('dark')
    hiddenFilterContainer.classList.toggle('dark')
    singleCountryCard.classList.toggle('dark')
    logo.classList.toggle('dark')
  };

  return (
    <nav className="navbar-class">
      <div className="navbar-container">
        <a href="/">
          <h1 className="logo">Where in the world?</h1>
        </a>
        <button className="theme" id="theme-toggle-id" onClick={themeToggleFn}>
          Dark Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
