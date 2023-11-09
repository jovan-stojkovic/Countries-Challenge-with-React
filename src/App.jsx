import Navbar from "./components/navbar";
import Home from "./pages/home";
import "./style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/search";
import Filter from "./components/filter";
import BackToTopButton from "./components/top";
import Country from "./pages/country";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <BackToTopButton />
        <div className="app-content">
          <div className="filter-components">
            <Search />
            <Filter />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/countries/:name" element={<Country/>}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
