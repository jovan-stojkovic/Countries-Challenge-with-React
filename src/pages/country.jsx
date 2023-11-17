import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../helpers/ThemeContext";
import { useNavigate } from "react-router-dom";

const Country = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      const apiURLName = `https://restcountries.com/v3.1/name/${name}`;

      const response = await fetch(apiURLName);
      const country = await response.json();
      setCountry(country);
    };

    fetchCountryData();
  }, []);

  return (
    <>
      <div className={`link-text ${theme}`}>
        <button onClick={() => navigate(-1)} className="back-button">
          Back
        </button>
      </div>
      <section className="country">
        {country.map((c) => {
          const {
            name,
            flags,
            population,
            region,
            subregion,
            capital,
            tld,
            currencies,
            languages,
            borders,
            cca2,
          } = c;
          const nameGet = Object.entries(name.nativeName);
          console.log(typeof nameGet);
          return (
            <div key={cca2} className={`country-page-container ${theme}`}>
              <div className="flag">
                <img src={flags.svg} alt={name.common} />
              </div>
              <div className="info-single-country">
                <h1>{name.common}</h1>
                <div className="all-info">
                  <div className="info-single-country-left">
                    <h5>
                      Native Name:{" "}
                      <span className="single-country-span">
                        {" "}
                        {nameGet[0][1].common || "N/A"}
                      </span>
                    </h5>

                    <h5>
                      Population:{" "}
                      <span className="single-country-span">
                        {" "}
                        {population.toLocaleString("en-US") || "N/A"}
                      </span>
                    </h5>

                    <h5>
                      Region:{" "}
                      <span className="single-country-span">
                        {" "}
                        {region || "N/A"}
                      </span>
                    </h5>

                    <h5>
                      Sub Region:{" "}
                      <span className="single-country-span">
                        {" "}
                        {subregion || "N/A"}
                      </span>
                    </h5>
                  </div>
                  <div className="info-single-country-right">
                    {" "}
                    <h5>
                      Capital:{" "}
                      <span className="single-country-span">
                        {" "}
                        {capital || "N/A"}
                      </span>
                    </h5>
                    <h5>
                      Top Level Domain:{" "}
                      <span className="single-country-span">
                        {" "}
                        {tld[0] || "N/A"}
                      </span>
                    </h5>
                    <h5>
                      Currencies:{" "}
                      <span className="single-country-span">
                        {" "}
                        {Object.values(currencies)[0].name || "N/A"}
                      </span>
                    </h5>
                    <h5>
                      Languages:{" "}
                      <span className="single-country-span">
                        {" "}
                        {Object.values(languages) || "N/A"}
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="border-container">
                  <h5>Border Countries: </h5>

                  {/* {borders.map((border) => {
                      return (
                        <ul className="border-ul" key={border}>
                          <li className="border-li">{border}</li>
                        </ul>
                      );
                    }) || "N/A"} */}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Country;
