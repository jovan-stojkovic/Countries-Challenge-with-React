import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "../components/search";
import Filter from "../components/filter";
import { useContext } from "react";
import ThemeContext from "../helpers/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiURL = "https://restcountries.com/v3.1/all";

    axios
      .get(apiURL)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const [visibleCards, setVisibleCards] = useState(16);
  const [searchWord, setSearchWord] = useState("");

  const handleShowMore = () => {
    setVisibleCards((prevState) => prevState + 16);
  };

  return (
    <>
      <div className="filter-components">
        <Search setSearchWord={setSearchWord} />
        <Filter />
      </div>
      <section className="grid">
        {data && data
          .filter(country => {
            if (searchWord === '') {
              return country
            } else if (country.name.common.toLowerCase().includes(searchWord.toLowerCase())) {
              return country;
            }
          })
          .slice(0, visibleCards)
          .map((country) => {
          const { name, population, region, capital, flags, cca2 } = country;

          return (
            <article key={cca2}>
              <div className={`single-country-card ${theme}`}>
                <Link to={`/countries/${name.common}`}>
                  <div className="img-container">
                    <img src={flags.svg} alt={name} loading="lazy" />
                  </div>
                  <div className="info-country-card">
                    <h3>{name.common}</h3>
                    <h4>
                      Population:{" "}
                      <span>{population.toLocaleString("en-US")}</span>
                    </h4>
                    <h4>
                      Region: <span>{region}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                  </div>
                </Link>
              </div>
            </article>
          );
        })}
      </section>

      <div className="button-container">
        {data && visibleCards <= data.length && (
          <button className="show-more-button" onClick={handleShowMore}>
            Show More
          </button>
        )}
      </div>
    </>
  );
};

export default Home;
