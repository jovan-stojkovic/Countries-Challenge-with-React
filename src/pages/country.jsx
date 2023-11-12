import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Country = () => {
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
      <Link to="/">
        <button>Back</button>
      </Link>
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
            <article key={cca2}>
              <div className="flag">
                <img src={flags.svg} alt={name.common} />
              </div>
              <div className="info-single-country">
                <h1>{name.official}</h1>
                <h5>
                  native name:{" "}
                  <span className="single-country-infos">
                    {" "}
                    {nameGet[0][1].common || "N/A"}
                  </span>
                </h5>
                <h5>
                  population:{" "}
                  <span className="single-country-infos">
                    {" "}
                    {population.toLocaleString("en-US") || "N/A"}
                  </span>
                </h5>
                <h5>
                  region:{" "}
                  <span className="single-country-infos">
                    {" "}
                    {region || "N/A"}
                  </span>
                </h5>
                <h5>
                  sub region:{" "}
                  <span className="single-country-infos">
                    {" "}
                    {subregion || "N/A"}
                  </span>
                </h5>
                <h5>
                  capital:{" "}
                  <span className="single-country-infos">
                    {" "}
                    {capital || "N/A"}
                  </span>
                </h5>
                <h5>
                  top level domain:{" "}
                  <span className="single-country-infos">
                    {" "}
                    {tld[0] || "N/A"}
                  </span>
                </h5>
                <h5>
                  currencies:{" "}
                  <span className="single-country-infos">
                    {" "}
                    {Object.values(currencies)[0].name || "N/A"}
                  </span>
                </h5>
                <h5>
                  languages:{" "}
                  <span className="single-country-infos">
                    {" "}
                    {Object.values(languages) || "N/A"}
                  </span>
                </h5>
                <h5>
                  borders:{" "}
                  <span className="single-country-infos">
                    {" "}
                    {borders || "N/A"}
                  </span>
                </h5>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Country;
