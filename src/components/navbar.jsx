const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <a href="/">
          <h1>Where in the world?</h1>
        </a>
        <button className="theme" id="theme-toggle-id">
          Dark Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
