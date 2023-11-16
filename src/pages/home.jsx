import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "../components/search";
import Filter from "../components/filter";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiURL = "https://restcountries.com/v3.1/all";

    axios
      .get(apiURL)
      .then((response) => {
        setData(response.data.slice(0, 20));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
    <div className="filter-components">
    <Search/>
    <Filter />
    </div>
      <section className="grid">
        {data.map((country) => {
          const { name, population, region, capital, flags, cca2 } = country;

          return (
            <article key={cca2}>
              <div className="single-country-card">
                <Link to={`/countries/${name.common}`}>
                  <div className="img-container">
                    <img src={flags.svg} alt={name} />
                  </div>
                  <div className="info-country-card">
                    <h3>{name.common}</h3>
                    <h4>
                      Population: <span>{population.toLocaleString("en-US")}</span>
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
    </>
  );
};

export default Home;
