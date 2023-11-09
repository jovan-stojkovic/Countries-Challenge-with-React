import Navbar from "./components/navbar";
import Home from "./components/home";
import "./style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/search";
import Filter from "./components/filter";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="app-content">
          <div className="filter-components">
            <Search />
            <Filter />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
