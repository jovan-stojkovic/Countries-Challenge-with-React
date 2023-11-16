import { useContext } from "react";
import ThemeContext from "../helpers/ThemeContext";

const Search = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <input
      id="search-input-id"
      className={`search-input ${theme}`}
      type="text"
      placeholder="Search for a country..."
    />
  );
};

export default Search;
