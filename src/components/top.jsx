import { useEffect, useState, useContext } from "react";
import ThemeContext from "../helpers/ThemeContext";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    
      {backToTopButton && (
        <button onClick={scrollUp} className={`to-the-top-button ${theme}`}>
          <div className="to-the-top-popup">To the top!</div>
          <img
            src="https://www.iconbolt.com/iconsets/heroicons-outline/arrow-up-circle.svg"
            alt=""
          />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
